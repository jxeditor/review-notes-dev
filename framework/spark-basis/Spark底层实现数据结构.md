> 专栏原创出处：[github-源笔记文件 ](https://github.com/GourdErwa/review-notes/tree/master/framework/spark-basis) ，[github-源码 ](https://github.com/GourdErwa/spark-advanced)，欢迎 Star，转载请附上原文出处链接和本声明。

[toc]

## 1、前言
Spark 底层实现的数据结构

- spark-core jar中 `org.apache.spark.util.collection` 基本数据结构实现
- spark-core jar中 `org.apache.spark.unsafe.map` Tungsten内存优化


---

## 2、AppendOnlyMap
### 2.1、介绍
AppendOnlyMap是一种仅支持数据追加的Map数据结构，底层实现类似HashMap，基于二次在散列算法，本质上还是内存数组。

在源码实际使用中主要体现在于子类 `PartitionedAppendOnlyMap` ，对应着Shuffle过程的Map段输出。

当Map端需要进行聚合时会执行Combine操作，在Map阶段进行Combine操作可以有效降低Map阶段数据记录的总数，从而降低Shuffle过程中数据的跨网络复制传输。

Map是内存数据结构，对应的实现就是 `PartitionedAppendOnlyMap`。是一个经过优化的哈希表，支持向Map中追加数据，修改Key对应的Value，但不支持删除某个Key及对应的Value。容量为0.7*(2^29)，当达到指定存储容量或指定限制时，会将Map中的记录数据溢存到磁盘文件。

### 2.2、实现逻辑
#### 2.2.1、初始值
```
# Map默认初始化容量
initialCapacity = 64
# 负荷系数
LOAD_FACTOR = 0.7
# 容量
capacity = 64 # 此处涉及位运算
# 参与pos计算
mask = capacity - 1
# 生长阈值
growThreshold = LOAD_FACTOR * capacity
# 数据,容量2倍的数组
data = new Array(2 * capacity)
# Map最大容量定义
MAXIMUM_CAPACITY = (1 << 29) = 536870912
```

#### 2.2.2、apply
```
# 添加操作
通过对Key的hashcode进行rehash再与mask进行与位计算
得到pos下标
获取data(2 * pos)的值,与当前Key进行比较
如果相等(该下标之前就有Key)
    返回data(2 * pos + 1),就是对应的Value
如果为null(该下标还没有被使用过)
    返回null
如果不相等(该下标之前有Key,并且不是同一个Key,hash冲突)
    重新获取pos = (pos + i) & mask
    
# 注意
在执行apply方法添加key时
并没有往data中实际添加值
```

#### 2.2.3、update
```
# 更新操作,设置Value
获取pos
获取data(2 * pos)的值,与当前Key进行比较
如果为空(说明可以使用)
    data(2 * pos) = key 赋上Key
    data(2 * pos + 1) = value 赋上Value
    调用incrementSize,改变当前size
如果有值并且相等
    覆盖Value值
如果有值但是冲突了
    重新计算pos
```

#### 2.2.4、changeValue
```
# 修改操作
获取pos
获取data(2 * pos)的值,与当前Key进行比较
如果为空(说明之前没有对应key)
    调用updateFunc(false,null)写入默认null
    改变当前size
如果有值并且相等
    调用updateFunc(false,oldValue)覆盖旧值
如果有值但是冲突了
    重新计算pos
```

#### 2.2.5、incrementSize
```
# Map大小增加
一有值新增则加1操作

# 如果发现当前大小大于生长阈值
调用growTable
```

#### 2.2.6、growTable
```
新容量 = 2倍容量
data也扩容2倍
循环遍历旧data数组
重新计算pos写入新data
如果插入新data时发现冲突
    重新计算pos
```

---

## 3、BytesToBytesMap
### 3.1、介绍
BytesToBytesMap可以看做Spark实现的HashMap，相比JDK中的HashMap，能够有效降低JVM对象存储占用的空间和GC开销。

主要用于SparkSQL的各种操作中（Aggregate，Sort等），对于中间值得存储以及处理。

容量2^29，对于每条记录LongArray会占用两个long分别存放fullKeyAddress和hashCode信息，其中fullKeyAddress又包含pageNum和OffsetAddress两部分。Record对应的hashCode，使用Key相关信息生成(keyBase，KeyOffset，keyLength)。dataPages是一个数组，维护申请到的MemoryBlock。每条记录包含5部分信息，以及其占用空间大小，其中len(k)和len(v)是8bytes的整数倍。最后一部分的指针指向下一个数据，以支持一个K对应多个V的情况。

### 3.2、数据插入逻辑
```
1、根据Key相关信息计算hashCode，利用此hashCode得到存储记录Record的地址下标idx
2、根据LongArray中的存储方式，存放fullKeyAddress的是2*idx
3、获取fullKeyAddress的值，若为0，则表示2*idx位置还没有值，返回Location对象，Location包含与下标相关的读取及插入操作
4、若2*idx处不为0，则表示此位置已经有数据，接下来判断2*idx+1处存储的hashCode和生成的hashCode是否相等，以及key相关信息是否相等。
5、若上一步各种条件判断相等，找到对应位置返回Location对象，可以插入及读取数据。
6、若4中判断不相等，表示产生hash冲突，BytesToBytesMap使用开放定址法，探测下一个位置，idx+1，重复2。
7、若是首次插入数据，则插入当前的Page，根据pageNum和内存地址OffsetAddress生成fullKeyAddress。
```

### 3.3、插入代码实现
```java
final Object base = currentPage.getBaseObject();
long offset = currentPage.getBaseOffset() + pageCursor;
final long recordOffset = offset;
UnsafeAlignedOffset.putSize(base, offset, klen + vlen + uaoSize);
UnsafeAlignedOffset.putSize(base, offset + uaoSize, klen);
offset += (2 * uaoSize);
Platform.copyMemory(kbase, koff, base, offset, klen);
offset += klen;
Platform.copyMemory(vbase, voff, base, offset, vlen);
offset += vlen;
// put this value at the beginning of the list
Platform.putLong(base, offset, isDefined ? longArray.get(pos * 2) : 0);

// --- Update bookkeeping data structures ----------------------------------------------------
offset = currentPage.getBaseOffset();
UnsafeAlignedOffset.putSize(base, offset, UnsafeAlignedOffset.getSize(base, offset) + 1);
pageCursor += recordLength;
final long storedKeyAddress = taskMemoryManager.encodePageNumberAndOffset(
currentPage, recordOffset);
longArray.set(pos * 2, storedKeyAddress);
updateAddressesAndSizes(storedKeyAddress);
numValues++;
if (!isDefined) {
    numKeys++;
    longArray.set(pos * 2 + 1, keyHashcode);
    isDefined = true;

    if (numKeys >= growthThreshold && longArray.size() < MAX_CAPACITY) {
      try {
        growAndRehash();
      } catch (OutOfMemoryError oom) {
        canGrowArray = false;
      }
    }
}
```

---

## 4、总结
对于两种不同的Map实现，可以看出AppendOnlyMap的实现逻辑较为简单，本质为Array数组中存储key1，value1，key2，value2等等。而BytesToBytesMap实现大致逻辑并没有变化，但是在存储方面更为细化，使用了地址存储。
