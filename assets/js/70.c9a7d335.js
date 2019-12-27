(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{278:function(e,t,r){"use strict";r.r(t);var a=r(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("blockquote",[r("p",[e._v("专栏原创出处："),r("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[e._v("github-源笔记文件 "),r("OutboundLink")],1),e._v(" ，"),r("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[e._v("github-源码 "),r("OutboundLink")],1),e._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),e._v(" "),r("p",[e._v("Java 并发编程专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),r("a",{attrs:{href:"https://review-notes.top/language/java-concurrency/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java 并发编程 "),r("OutboundLink")],1)]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#blockingqueue-阻塞队列是什么"}},[e._v("BlockingQueue 阻塞队列是什么")])]),r("li",[r("a",{attrs:{href:"#blockingqueue-接口相关方法说明"}},[e._v("BlockingQueue 接口相关方法说明")])]),r("li",[r("a",{attrs:{href:"#blockingqueue-接口的实现类有哪些"}},[e._v("BlockingQueue 接口的实现类有哪些")])]),r("li",[r("a",{attrs:{href:"#arrayblockingqueue-数组、有界"}},[e._v("ArrayBlockingQueue-数组、有界")])]),r("li",[r("a",{attrs:{href:"#linkedblockingqueue-链表、有界"}},[e._v("LinkedBlockingQueue-链表、有界")])]),r("li",[r("a",{attrs:{href:"#priorityblockingqueue-优先级排序、无界"}},[e._v("PriorityBlockingQueue-优先级排序、无界")])]),r("li",[r("a",{attrs:{href:"#delayqueue-延时获取、无界"}},[e._v("DelayQueue-延时获取、无界")])]),r("li",[r("a",{attrs:{href:"#synchronousqueue-不存储元素"}},[e._v("SynchronousQueue-不存储元素")])]),r("li",[r("a",{attrs:{href:"#linkedtransferqueue-链表、无界"}},[e._v("LinkedTransferQueue-链表、无界")])]),r("li",[r("a",{attrs:{href:"#linkedblockingdeque-链表、双向阻塞队列"}},[e._v("LinkedBlockingDeque-链表、双向阻塞队列")])]),r("li",[r("a",{attrs:{href:"#应用场景"}},[e._v("应用场景")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"blockingqueue-阻塞队列是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue-阻塞队列是什么"}},[e._v("#")]),e._v(" BlockingQueue 阻塞队列是什么")]),e._v(" "),r("ul",[r("li",[e._v("队列（Queue），是一种特殊的线性表，它只允许在表的前端进行删除操作，而在表的后端进行插入操作。")]),e._v(" "),r("li",[e._v("阻塞与非阻塞，关注的是程序在等待调用结果（消息，返回值）时的状态.\n"),r("ul",[r("li",[e._v("阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。")]),e._v(" "),r("li",[e._v("非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程。")])])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("阻塞队列（BlockingQueue 接口）是一个支持阻塞的插入和移除方法的队列，主要采用锁实现。")]),e._v(" "),r("ul",[r("li",[e._v("支持阻塞的插入方法 ： 意思是当队列满时，队列会阻塞插入元素的线程，直到队列不满")]),e._v(" "),r("li",[e._v("支持阻塞的移除方法 ： 意思是在队列为空时，获取元素的线程会等待队列变为非空")])]),e._v(" "),r("h2",{attrs:{id:"blockingqueue-接口相关方法说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue-接口相关方法说明"}},[e._v("#")]),e._v(" BlockingQueue 接口相关方法说明")]),e._v(" "),r("h4",{attrs:{id:"抛出异常的操作方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抛出异常的操作方法"}},[e._v("#")]),e._v(" 抛出异常的操作方法")]),e._v(" "),r("ul",[r("li",[e._v("add 方法：插入列尾，当队列满时，会抛出 IllegalStateException 异常。")]),e._v(" "),r("li",[e._v("remove 方法：返回并移除队列头，当队列为空时，从队列里获取元素会抛出 NoSuchElementException 异常。")]),e._v(" "),r("li",[e._v("element 方法：返回队列头（不移除），当队列满时，会抛出 IllegalStateException 异常。")])]),e._v(" "),r("h4",{attrs:{id:"返回特殊值的操作方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返回特殊值的操作方法"}},[e._v("#")]),e._v(" 返回特殊值的操作方法")]),e._v(" "),r("ul",[r("li",[e._v("offer 方法：插入列尾，成功返回 true。")]),e._v(" "),r("li",[e._v("poll 方法：返回并移除队列头，如果没有元素则返回 null。")]),e._v(" "),r("li",[e._v("peek 方法：返回队列头（不移除），如果没有元素则返回 null。")])]),e._v(" "),r("h4",{attrs:{id:"一直阻塞的操作方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一直阻塞的操作方法"}},[e._v("#")]),e._v(" 一直阻塞的操作方法")]),e._v(" "),r("ul",[r("li",[e._v("put 方法：插入列尾，当队列满时阻塞等待，直到队列可用或者响应中断退出。")]),e._v(" "),r("li",[e._v("take 方法：返回并移除队列头，当队列为空时阻塞等待，直到队列可用或者响应中断退出。")])]),e._v(" "),r("blockquote",[r("p",[e._v("方便记忆的规律：")]),e._v(" "),r("ul",[r("li",[e._v("put 和 take 分别尾首含有字母 t。【他们会等啊】(t 打头)")]),e._v(" "),r("li",[e._v("offer 和 poll 都含有字母 o。【哦，没异常啊】(o 打头)")])])]),e._v(" "),r("h2",{attrs:{id:"blockingqueue-接口的实现类有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#blockingqueue-接口的实现类有哪些"}},[e._v("#")]),e._v(" BlockingQueue 接口的实现类有哪些")]),e._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/类图关系-Queue.png"}}),e._v(" "),r("p",[e._v(" 类图关系-BlockingQueue ")])]),e._v(" "),r("p",[e._v("JDK1.8 提供了 7 个阻塞队列，如下:")]),e._v(" "),r("ul",[r("li",[e._v("ArrayBlockingQueue : 数组结构组成的有界阻塞队列")]),e._v(" "),r("li",[e._v("LinkedBlockingQueue : 链表结构组成的有界阻塞队列")]),e._v(" "),r("li",[e._v("PriorityBlockingQueue : 支持优先级排序的无界阻塞队列")]),e._v(" "),r("li",[e._v("DelayQueue : 支持延时获取元素的无界阻塞队列")]),e._v(" "),r("li",[e._v("SynchronousQueue : 不存储元素的阻塞队列")]),e._v(" "),r("li",[e._v("LinkedTransferQueue : 由链表结构组成的无界阻塞队列")]),e._v(" "),r("li",[e._v("LinkedBlockingDeque : 由链表结构组成的双向阻塞队列")])]),e._v(" "),r("p",[e._v("下面章节将一一介绍各个实现类的特性、实现原理、注意事项、应用场景")]),e._v(" "),r("h2",{attrs:{id:"arrayblockingqueue-数组、有界"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arrayblockingqueue-数组、有界"}},[e._v("#")]),e._v(" ArrayBlockingQueue-数组、有界")]),e._v(" "),r("p",[e._v("一个用数组实现的有界阻塞队列。此队列按照先进先出 (FIFO) 的原则对元素进行排序。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("特性：")]),e._v(" "),r("ul",[r("li",[e._v("支持公平、非公平选择")])])]),e._v(" "),r("li",[r("p",[e._v("实现原理")]),e._v(" "),r("ul",[r("li",[e._v("内部维护一个 "),r("code",[e._v("Object[] items")]),e._v(" 数组")]),e._v(" "),r("li",[e._v("使用 ReentrantLock 锁、 2 个 Condition 条件（notEmpty、notFull）完成并发访问")]),e._v(" "),r("li",[e._v("对该队列的数组操作使用 ReentrantLock 加锁解锁，阻塞条件使用 Condition 等待通知机制完成")])])])]),e._v(" "),r("h2",{attrs:{id:"linkedblockingqueue-链表、有界"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linkedblockingqueue-链表、有界"}},[e._v("#")]),e._v(" LinkedBlockingQueue-链表、有界")]),e._v(" "),r("p",[e._v("一个用链表实现的有界阻塞队列。此队列的默认和最大长度为 Integer.MAX_VALUE。此队列按照先进先出的原则对元素进行排序。")]),e._v(" "),r("p",[e._v("实现原理：")]),e._v(" "),r("ul",[r("li",[e._v("内部维护链表的头节点、尾节点")]),e._v(" "),r("li",[e._v("使用 ReentrantLock putLock 、Condition notFull 管理入队操作")]),e._v(" "),r("li",[e._v("使用 ReentrantLock takeLock 、Condition notEmpty 管理出队操作")]),e._v(" "),r("li",[e._v("完全的生产者消费者模式的实现")])]),e._v(" "),r("h2",{attrs:{id:"priorityblockingqueue-优先级排序、无界"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#priorityblockingqueue-优先级排序、无界"}},[e._v("#")]),e._v(" PriorityBlockingQueue-优先级排序、无界")]),e._v(" "),r("p",[e._v("一个支持优先级的无界阻塞队列。默认情况下元素采取自然顺序升序排列。也可以自定义类实现 compareTo() 方法来指定元素排序规则，或者初始化 PriorityBlockingQueue 时，指定构造参数 Comparator 来对元素进行排序。需要注意的是不能保证同优先级元素的顺序。")]),e._v(" "),r("p",[e._v("实现原理：")]),e._v(" "),r("ul",[r("li",[e._v("内部维护一个 "),r("code",[e._v("Object[] items")]),e._v(" 数组")]),e._v(" "),r("li",[e._v("使用 ReentrantLock lock 、Condition notEmpty 管理入队出队操作（因为无界，无需 notFull 条件）")]),e._v(" "),r("li",[e._v("入队时，判断是否需要扩容，插入数组（重新排序（最小堆））")]),e._v(" "),r("li",[e._v("出队时，移除下标为 0 的数据（列头），重新排序")])]),e._v(" "),r("h2",{attrs:{id:"delayqueue-延时获取、无界"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#delayqueue-延时获取、无界"}},[e._v("#")]),e._v(" DelayQueue-延时获取、无界")]),e._v(" "),r("p",[e._v("一个支持延时获取元素的无界阻塞队列。队列使用 PriorityQueue 来实现。")]),e._v(" "),r("p",[e._v("队列中的元素必须实现 Delayed 接口，在创建元素时可以指定多久才能从队列中获取当前元素。只有在延迟期满时才能从队列中提取元素。")]),e._v(" "),r("p",[e._v("实现原理：")]),e._v(" "),r("ul",[r("li",[e._v("内部维护一个 PriorityQueue（支持排序的队列实现类）")]),e._v(" "),r("li",[e._v("使用 ReentrantLock lock 、Condition available 管理入队出队操作（因为无界，无需 notFull 条件）")]),e._v(" "),r("li",[e._v("入队时，数据添加至 PriorityQueue 队列，判断当前头节点是否等于添加的数据，如果不是唤醒出队操作")]),e._v(" "),r("li",[e._v("出队时，for 循环自旋，取出头节点如果达到执行时间即返回，否则进入等待")])]),e._v(" "),r("h2",{attrs:{id:"synchronousqueue-不存储元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronousqueue-不存储元素"}},[e._v("#")]),e._v(" SynchronousQueue-不存储元素")]),e._v(" "),r("p",[e._v("一个不存储元素的阻塞队列。每一个 put 操作必须等待一个 take 操作，否则不能继续添加元素。")]),e._v(" "),r("p",[e._v("SynchronousQueue 可以看成是一个传球手，负责把生产者线程处理的数据直接传递给消费者线程。队列本身并不存储任何元素，非常适合传递性场景。SynchronousQueue 的吞吐量高于 LinkedBlockingQueue 和 ArrayBlockingQueue。")]),e._v(" "),r("ul",[r("li",[e._v("特性：\n"),r("ul",[r("li",[e._v("支持公平、非公平选择")])])]),e._v(" "),r("li",[e._v("实现原理，源码解读参考 "),r("a",{attrs:{href:"https://www.jianshu.com/p/d5e2e3513ba3",target:"_blank",rel:"noopener noreferrer"}},[e._v("SynchronousQueue"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"linkedtransferqueue-链表、无界"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linkedtransferqueue-链表、无界"}},[e._v("#")]),e._v(" LinkedTransferQueue-链表、无界")]),e._v(" "),r("p",[e._v("一个由链表结构组成的无界阻塞 TransferQueue 队列。相对于其他阻塞队列，LinkedTransferQueue 多了 tryTransfer 和 transfer 方法。")]),e._v(" "),r("p",[e._v("方法解读：")]),e._v(" "),r("ul",[r("li",[e._v('transfer 方法 ：可以把生产者传入的元素立刻"传输"给消费者。如果没有消费者在等待接收元素，transfer 方法会将元素存放在队列的 tail 节点，并等到该元素被消费者消费了才返回')]),e._v(" "),r("li",[e._v("tryTransfer 方法 ： 用来试探生产者传入的元素是否能直接传给消费者。如果没有消费者等待接收元素，则返回 false。")])]),e._v(" "),r("blockquote",[r("p",[e._v("transfer 和 transfer 方法的区别： tryTransfer 方法无论消费者是否接收，方法立即返回，而 transfer 方法是必须等到消费者消费了才返回。")])]),e._v(" "),r("h2",{attrs:{id:"linkedblockingdeque-链表、双向阻塞队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linkedblockingdeque-链表、双向阻塞队列"}},[e._v("#")]),e._v(" LinkedBlockingDeque-链表、双向阻塞队列")]),e._v(" "),r("p",[e._v("一个由链表结构组成的双向阻塞队列。所谓双向队列指的是可以从队列的两端插入和移出元素。双向队列因为多了一个操作队列的入口，在多线程同时入队时，也就减少了一半的竞争。")]),e._v(" "),r("p",[e._v("相比其他的阻塞队列，LinkedBlockingDeque 多了 addFirst、 addLast、offerFirst、offerLast、peekFirst 和 peekLast 等方法，以 First 单词结尾的方法，表示插入、获取 (peek) 或移除双端队列的第一个元素。\n以 Last 单词结尾的方法，表示插入、获取或移除双 端队列的最后一个元素。\n另外，插入方法 add 等同于 addLast，移除方法 remove 等效于 removeFirst。\n但是 take 方法却等同于 takeFirst，不知道是不是 JDK 的 bug，使用时还是用带有 First 和 Last 后缀的方法更清楚。")]),e._v(" "),r("h2",{attrs:{id:"应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[e._v("#")]),e._v(" 应用场景")]),e._v(" "),r("ul",[r("li",[e._v("生产消费者模型")])]),e._v(" "),r("p",[e._v('其实实际程序处理，绝大多数场景都可以抽象为，"数据源-> 数据处理-> 数据消费" 过程，把这个过程无限的组合起来就是我们的程序。')])])}),[],!1,null,null,null);t.default=i.exports}}]);