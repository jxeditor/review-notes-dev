(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{289:function(v,_,t){"use strict";t.r(_);var r=t(0),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("p",[v._v("专栏原创出处："),t("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[v._v("github-源笔记文件 "),t("OutboundLink")],1),v._v(" ，"),t("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[v._v("github-源码 "),t("OutboundLink")],1),v._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),v._v(" "),t("h2",{attrs:{id:"自我面试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自我面试"}},[v._v("#")]),v._v(" 自我面试")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("背书式的学习对技术的提升帮助很小。")])]),v._v(" "),t("li",[t("p",[v._v("本篇内容不涉及答案，答案需要去相关专栏学习。")])]),v._v(" "),t("li",[t("p",[v._v("把面试看作是费曼学习法中的回顾、授课环节。")]),v._v(" "),t("ul",[t("li",[v._v("首先我们能讲给自己听，如果不满意再回炉学习总结，如此反复。")]),v._v(" "),t("li",[v._v("我们试着在一年以后再回顾这些知识。")])])])]),v._v(" "),t("p",[t("strong",[v._v("专栏学习地址：")])]),v._v(" "),t("ul",[t("li",[v._v("CSDN-同步发布 "),t("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java 并发编程专栏 "),t("OutboundLink")],1)]),v._v(" "),t("li",[v._v("个人技术博客-同步发布 "),t("a",{attrs:{href:"https://review-notes.top/language/java-concurrency/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java 并发编程专栏 "),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"并发编程面试题-内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程面试题-内存模型"}},[v._v("#")]),v._v(" 并发编程面试题-内存模型")]),v._v(" "),t("ul",[t("li",[v._v("内存模型\n"),t("ul",[t("li",[v._v("定义")]),v._v(" "),t("li",[v._v("为什么要有内存模型")]),v._v(" "),t("li",[v._v("为什么要重排序，重排序在什么时候排")]),v._v(" "),t("li",[v._v("如何约束重排序规则")]),v._v(" "),t("li",[v._v("happens-before")])])]),v._v(" "),t("li",[v._v("什么是顺序一致性")]),v._v(" "),t("li",[v._v("CAS 实现的原理，是阻塞还是非阻塞方式？什么时候用，使用时需要考虑的问题")]),v._v(" "),t("li",[v._v("处理器和 Java 分别怎么保证原子操作")]),v._v(" "),t("li",[v._v("保证了原子性就能保证可见性吗？")]),v._v(" "),t("li",[v._v("final 内存语义？什么时候用，使用时需要考虑的问题")]),v._v(" "),t("li",[v._v("volatile 内存语义，什么时候用，用的时候需要考虑什么问题")]),v._v(" "),t("li",[v._v("synchronized 内存语义，什么时候用，和锁比较一下优缺点")]),v._v(" "),t("li",[v._v("synchronized 中涉及的锁升级流程")]),v._v(" "),t("li",[v._v("锁的内存语义，举例说明，加锁失败时候的处理流程")]),v._v(" "),t("li",[v._v("比较下 CAS 、volatile 、synchronized、Lock 区别")]),v._v(" "),t("li",[v._v("原子操作类底层实现机制？自增操作是怎么保证原子性的？")])]),v._v(" "),t("h2",{attrs:{id:"并发编程面试题-线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程面试题-线程"}},[v._v("#")]),v._v(" 并发编程面试题-线程")]),v._v(" "),t("ul",[t("li",[v._v("线程的状态有哪些")]),v._v(" "),t("li",[v._v("如何在 Java 中实现线程？")]),v._v(" "),t("li",[v._v("如何在 Java 中启动一个线程？")]),v._v(" "),t("li",[v._v("设计线程中断的意义是什么")]),v._v(" "),t("li",[v._v("Java 中 interrupted 和 isInterrupted 方法的区别？")]),v._v(" "),t("li",[v._v("如何停止一个线程？")]),v._v(" "),t("li",[v._v("线程 join 方法干什么用？")]),v._v(" "),t("li",[v._v("有三个线程 T1，T2，T3，怎么确保它们按顺序执行？")]),v._v(" "),t("li",[v._v("线程的等待通知机制实现机制？")]),v._v(" "),t("li",[v._v("为什么应该在循环中检查等待条件?")]),v._v(" "),t("li",[v._v("为什么 wait 和 notify 方法要在同步块中调用？")]),v._v(" "),t("li",[v._v("为什么 wait, notify 和 notifyAll 这些方法不在 thread 类里面？")]),v._v(" "),t("li",[v._v("ThreadLocal 是什么，怎么实现的")]),v._v(" "),t("li",[v._v("线程池是什么，提交一个任务进去，处理流程？")]),v._v(" "),t("li",[v._v("Executor 框架介绍")]),v._v(" "),t("li",[v._v("JUC 包中提供了哪些配置好的线程池，差异化是什么")]),v._v(" "),t("li",[v._v("什么是 FutureTask？")])]),v._v(" "),t("h2",{attrs:{id:"并发编程面试题-锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程面试题-锁"}},[v._v("#")]),v._v(" 并发编程面试题-锁")]),v._v(" "),t("ul",[t("li",[v._v("Lock 接口提供了哪些实现类")]),v._v(" "),t("li",[v._v("AQS 是什么，提供了哪些方法")]),v._v(" "),t("li",[v._v("AQS 中独占锁和共享锁的操作流程大体描述一下")]),v._v(" "),t("li",[v._v("重入锁有什么好处，什么时候考虑用")]),v._v(" "),t("li",[v._v("读写锁有什么好处，什么时候考虑用？读锁是什么类型的锁，写锁呢？")]),v._v(" "),t("li",[v._v("说下读写锁里的锁降级流程，什么时候可以考虑用这个机制")]),v._v(" "),t("li",[v._v("park 方法是怎么实现的")]),v._v(" "),t("li",[v._v("锁的等待通知机制 Condition 是怎么实现的，有了线程的等待通知机制为什么还要设计 Condition？")]),v._v(" "),t("li",[v._v("死锁怎么产生的，如何避免")]),v._v(" "),t("li",[v._v("说说 Java 中有哪些锁")]),v._v(" "),t("li",[v._v("sleep、wait、park、Condition 都能让线程等待，有什么区别？")])]),v._v(" "),t("h2",{attrs:{id:"并发编程面试题-容器与工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程面试题-容器与工具"}},[v._v("#")]),v._v(" 并发编程面试题-容器与工具")]),v._v(" "),t("ul",[t("li",[v._v("阻塞和非阻塞有什么区别，他们可以用什么方式实现")]),v._v(" "),t("li",[v._v("队列（Queue）提供哪些操作")]),v._v(" "),t("li",[v._v("阻塞队列提供了哪些获取元素的方法，有什么区别？")]),v._v(" "),t("li",[v._v("阻塞队列有哪些实现？为什么要分有界无界？")]),v._v(" "),t("li",[v._v("CountDownLatch 怎么实现的，什么时候考虑用？")]),v._v(" "),t("li",[v._v("CyclicBarrier 怎么实现的，什么时候考虑用？")]),v._v(" "),t("li",[v._v("Semaphore 怎么实现的，什么时候考虑用？")]),v._v(" "),t("li",[v._v("如何在两个线程间共享数据？")]),v._v(" "),t("li",[v._v("Exchanger 怎么实现的，什么时候考虑用？")]),v._v(" "),t("li",[v._v("ConcurrentHashMap 实现？")]),v._v(" "),t("li",[v._v("fork/join 框架是什么？")])]),v._v(" "),t("h2",{attrs:{id:"更多面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多面试题"}},[v._v("#")]),v._v(" 更多面试题")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://review-notes.top/interview/java/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java 并发编程面试题 "),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://review-notes.top/interview/java/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java-JVM 虚拟机面试题 "),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=e.exports}}]);