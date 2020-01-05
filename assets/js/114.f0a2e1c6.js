(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{321:function(a,e,v){"use strict";v.r(e);var r=v(0),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("blockquote",[v("p",[a._v("专栏原创出处："),v("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),v("OutboundLink")],1),a._v(" ，"),v("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),v("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),v("p",[a._v("Java JVM-虚拟机专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),v("a",{attrs:{href:"https://review-notes.top/language/java-jvm/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java JVM-虚拟机 "),v("OutboundLink")],1)]),a._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#前言"}},[a._v("前言")])]),v("li",[v("a",{attrs:{href:"#serial-serial-old-收集器"}},[a._v("Serial/Serial Old 收集器")])]),v("li",[v("a",{attrs:{href:"#parnew-收集器"}},[a._v("ParNew 收集器")])]),v("li",[v("a",{attrs:{href:"#parallel-scavenge-parallel-old-收集器"}},[a._v("Parallel Scavenge/Parallel Old 收集器")])]),v("li",[v("a",{attrs:{href:"#cms-收集器"}},[a._v("CMS 收集器")])]),v("li",[v("a",{attrs:{href:"#g1-收集器"}},[a._v("G1 收集器")])]),v("li",[v("a",{attrs:{href:"#_7-个收集器示意图"}},[a._v("7 个收集器示意图")])]),v("li",[v("a",{attrs:{href:"#总结"}},[a._v("总结")])]),v("li",[v("a",{attrs:{href:"#参考"}},[a._v("参考")])])])]),v("p"),a._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),v("p",[a._v("JDK 11 前 HotSpot 虚拟机所包含的全部可用的垃圾收集器及组合关系如下图：")]),a._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-jvm/_images/收集器组合.jpeg",height:"600px"}})]),a._v(" "),v("p",[a._v("关于并发与并行的概念声明：")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("并行：说明同一时间有多条垃圾收集器线程在协同工作，通常默认此时用户线程是处于等待状态。")])]),a._v(" "),v("li",[v("p",[a._v("并发：说明同一时间垃圾收集器线程与用户线程都在运行。")])])]),a._v(" "),v("h2",{attrs:{id:"serial-serial-old-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#serial-serial-old-收集器"}},[a._v("#")]),a._v(" Serial/Serial Old 收集器")]),a._v(" "),v("ul",[v("li",[a._v("Serial 是一个新生代收集器，基于标记-复制算法实现")]),a._v(" "),v("li",[a._v("Serial Old 是一个老年代收集器，基于标记-整理算法实现")]),a._v(" "),v("li",[a._v("两者都是单线程收集，需要「停止世界」")])]),a._v(" "),v("p",[a._v("应用场景：")]),a._v(" "),v("ul",[v("li",[a._v("客户端模式下的默认新生代收集器")]),a._v(" "),v("li",[a._v("对于内存资源受限的环境，它是所有收集器里额外内存消耗最小的")]),a._v(" "),v("li",[a._v("对于单核处理器或处理器核心数较少的环境来说，Serial 收集器由于没有线程交互的开销")])]),a._v(" "),v("h2",{attrs:{id:"parnew-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#parnew-收集器"}},[a._v("#")]),a._v(" ParNew 收集器")]),a._v(" "),v("p",[a._v("ParNew 收集器是是一款新生代收集器。与 Serial 收集器相比，支持多线程并行收集。")]),a._v(" "),v("h2",{attrs:{id:"parallel-scavenge-parallel-old-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#parallel-scavenge-parallel-old-收集器"}},[a._v("#")]),a._v(" Parallel Scavenge/Parallel Old 收集器")]),a._v(" "),v("ul",[v("li",[a._v("Parallel Scavenge 收集器是一款新生代收集器，基于标记-复制算法实现")]),a._v(" "),v("li",[a._v("Parallel Old 收集器是一款老年代收集器，基于标记-整理算法实现")]),a._v(" "),v("li",[a._v("两者都支持多线程并行收集，需要「停止世界」")])]),a._v(" "),v("h4",{attrs:{id:"特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),v("p",[a._v("1.可控制的吞吐量")]),a._v(" "),v("p",[v("code",[a._v("吞吐量 = 用户代码时间 / (用户代码时间 + 垃圾收集时间)")])]),a._v(" "),v("p",[a._v("两个参数用于精确控制吞吐量，分别是")]),a._v(" "),v("ul",[v("li",[a._v("控制最大垃圾收集停顿时间 -XX：MaxGCPauseMillis ( >0 的毫秒数)")]),a._v(" "),v("li",[a._v("设置吞吐量大小的 -XX：GCTimeRatio（0-100 的整数）")])]),a._v(" "),v("p",[a._v("2.自适应的调节策略")]),a._v(" "),v("p",[a._v("-XX：+UseAdaptiveSizePolicy 当这个参数被激活之后，就不需要人工指定新生代的大小（-Xmn）、Eden 与 Survivor 区的比例（-XX：SurvivorRatio）、晋升老年代对象大小（-XX：PretenureSizeThreshold）等细节参数了，\n虚拟机会根据当前系统的运行情况收集性能监控信息，动态调整这些参数以提供最合适的停顿时间或者最大的吞吐量。")]),a._v(" "),v("h2",{attrs:{id:"cms-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cms-收集器"}},[a._v("#")]),a._v(" CMS 收集器")]),a._v(" "),v("ul",[v("li",[a._v("CMS（Concurrent Mark Sweep）是一个老年代收集器，基于标记-清除算法实现")]),a._v(" "),v("li",[a._v("以获取最短回收停顿时间为目标的收集器")])]),a._v(" "),v("h4",{attrs:{id:"实现步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[a._v("#")]),a._v(" 实现步骤")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("初始标记："),v("br"),a._v("\n标记一下 GC Roots 能直接关联到的对象，速度很快，需要「停止世界」")])]),a._v(" "),v("li",[v("p",[a._v("并发标记："),v("br"),a._v("\n从 GC Roots 的直接关联对象开始遍历整个对象图，并发执行")])]),a._v(" "),v("li",[v("p",[a._v("重新标记："),v("br"),a._v("\n为了修正并发标记期间，因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录，需要「停止世界」")])]),a._v(" "),v("li",[v("p",[a._v("并发清除："),v("br"),a._v("\n清理删除掉标记阶段判断的已经死亡的对象，由于不需要移动存活对象，并发执行")])])]),a._v(" "),v("h4",{attrs:{id:"缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),v("ul",[v("li",[a._v("并发阶段占用一部分线程，CMS 默认启动的回收线程数是（处理器核心数量 +3）/4")]),a._v(" "),v("li",[a._v("并发标记和清理阶段，程序可能会有垃圾对象不断产生最终导致 Full GC")]),a._v(" "),v("li",[a._v("为了支持并发标记和清理阶段程序运行，超过参数值 -XX：CMSInitiatingOccupancyFraction 后临时使用 Serial Old 收集器进行一次 Full GC")]),a._v(" "),v("li",[a._v("基于标记-清除算法实现会有大量空间碎片产生，CMS 收集器不得不进行 Full GC 时开启内存碎片的合并整理过程，由于这个内存整理必须移动存活对象，因此无法并发执行。")])]),a._v(" "),v("h4",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),v("p",[a._v("关注服务的响应速度，希望系统停顿时间尽可能短，以给用户带来良好的交互体验。")]),a._v(" "),v("h2",{attrs:{id:"g1-收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#g1-收集器"}},[a._v("#")]),a._v(" G1 收集器")]),a._v(" "),v("ul",[v("li",[a._v("G1 是一款主要面向服务端应用的垃圾收集器。")]),a._v(" "),v("li",[a._v("从整体来看是基于「标记-整理」算法实现的收集器，但从局部（两个 Region 之间）上看又是基于「标记-复制」算法实现")]),a._v(" "),v("li",[a._v('"G1 即是新生代又是老年代收集器"，无需组合其他收集器。')])]),a._v(" "),v("h4",{attrs:{id:"特性-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特性-2"}},[a._v("#")]),a._v(" 特性")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Region 区域：把连续的 Java 堆划分为多个大小相等的独立 Region，每一个 Region 都可以根据需要，扮演新生代的 Eden 空间、Survivor 空间，或者老年代空间")])]),a._v(" "),v("li",[v("p",[a._v("Humongous 区域：专门用来存储大对象。只要大小超过了一个 Region 容量一半的对象即可判定为大对象。")])]),a._v(" "),v("li",[v("p",[a._v("基于停顿时间模型：消耗在垃圾收集上的时间大概率不超过 N 毫秒的目标（使用参数-XX：MaxGCPauseMillis 指定，默认值是 200 毫秒）")])]),a._v(" "),v("li",[v("p",[a._v("Mixed GC 模式：可以面向堆内存任何部分来组成「回收集」进行回收，衡量标准不再是它属于哪个分代，而是哪块内存中存放的垃圾数量最多，回收收益最大")])]),a._v(" "),v("li",[v("p",[a._v("无内存空间碎片：G1 算法实现意味着运作期间不会产生内存空间碎片")])])]),a._v(" "),v("blockquote",[v("p",[a._v("每个 Region 的大小可以通过参数-XX：G1HeapRegionSize 设定，取值范围为 1MB～32MB，且应为 2 的 N 次幂。而对于那些超过了整个 Region 容量的超级大对象，将会被存放在 N 个连续的 Humongous Region 之中，G1 的大多数行为都把 Humongous Region 作为老年代的一部分来进行看待")])]),a._v(" "),v("h4",{attrs:{id:"大致实现步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大致实现步骤"}},[a._v("#")]),a._v(" 大致实现步骤")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("初始标记："),v("br"),a._v("\n仅仅只是标记一下 GC Roots 能直接关联到的对象，并且修改 TAMS 指针的值，让下一阶段用户线程并发运行时，能正确地在可用的 Region 中分配新对象。\n需要「停止世界」，但耗时很短，而且是借用进行 Minor GC 的时候同步完成的。")])]),a._v(" "),v("li",[v("p",[a._v("并发标记："),v("br"),a._v("\n从 GC Root 开始对堆中对象进行可达性分析，递归扫描整个堆里的对象图，找出要回收的对象，这阶段耗时较长，但可与用户程序并发执行。当对象图扫描完成以后，还要重新处理 SATB 记录下的在并发时有引用变动的对象。")])]),a._v(" "),v("li",[v("p",[a._v("最终标记："),v("br"),a._v("\n对用户线程做另一个短暂的暂停，用于处理并发阶段结束后仍遗留下来的最后那少量的 SATB 记录。")])]),a._v(" "),v("li",[v("p",[a._v("筛选回收："),v("br"),a._v("\n负责更新 Region 的统计数据，对各个 Region 的回收价值和成本进行排序，根据用户所期望的停顿时间来制定回收计划，可以自由选择任意多个 Region 构成回收集，然后把决定回收的那一部分 Region 的存活对象复制到空的 Region 中，再清理掉整个旧 Region 的全部空间。需要「停止世界」，多条收集器线程并行完成。")])])]),a._v(" "),v("blockquote",[v("p",[a._v("TAMS 指针/SATB 记录的概念请阅读《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第 3 版）》周志明， 3.4.6、3.5.7 内容。")]),a._v(" "),v("ul",[v("li",[a._v("TAMS 指针简单理解为：G1 为每一个 Region 设计了两个名为 TAMS（Top at Mark Start）的指针，把 Region 中的一部分空间划分出来用于并发回收过程中的新对象分配，并发回收时新分配的对象地址都必须要在这两个指针位置以上")]),a._v(" "),v("li",[a._v("SATB 记录简单理解为：解决并发扫描时对象的消失问题")])])]),a._v(" "),v("h4",{attrs:{id:"与-cms-收集器比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与-cms-收集器比较"}},[a._v("#")]),a._v(" 与 CMS 收集器比较")]),a._v(" "),v("ul",[v("li",[a._v("G1 内存占用比 CMS 高，每个 Region 维护一个卡表")]),a._v(" "),v("li",[a._v("G1 额外执行负载比 CMS 高，维护卡表的额外操作复杂")])]),a._v(" "),v("h4",{attrs:{id:"cms-废弃说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cms-废弃说明"}},[a._v("#")]),a._v(" CMS 废弃说明")]),a._v(" "),v("p",[a._v("JDK 9 发布后，G1 宣告取代 Parallel Scavenge 加 Parallel Old 组合，成为服务端模式下的默认垃圾收集器，而 CMS(JDK 5) 则沦落至被声明为不推荐使用的收集器。")]),a._v(" "),v("blockquote",[v("p",[a._v("如果对 JDK 9 及以上版本的 HotSpot 虚拟机使用参数-XX：+UseConcMarkSweepGC 来开启 CMS 收集器的话，用户会收到一个警告信息，提示 CMS 未来将会被废弃："),v("br"),a._v("\nJava HotSpot(TM) 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be removed in a future release.")])]),a._v(" "),v("h2",{attrs:{id:"_7-个收集器示意图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-个收集器示意图"}},[a._v("#")]),a._v(" 7 个收集器示意图")]),a._v(" "),v("div",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-jvm/_images/JDK11 前的 7 个垃圾回收器.png"}})]),a._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),v("p",[a._v("关于收集器的选择与相关参数配置，专栏另篇文章介绍。")]),a._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),v("ul",[v("li",[a._v("《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第 3 版）》周志明 著")])])])}),[],!1,null,null,null);e.default=t.exports}}]);