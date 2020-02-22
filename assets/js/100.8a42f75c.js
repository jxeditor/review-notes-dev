(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{315:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/spark-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/spark-advanced",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-wordcount-代码示例"}},[t._v("1. WordCount 代码示例")])]),s("li",[s("a",{attrs:{href:"#_2-运行前的准备"}},[t._v("2. 运行前的准备")])]),s("li",[s("a",{attrs:{href:"#_3-stage-的切分"}},[t._v("3. Stage 的切分")])]),s("li",[s("a",{attrs:{href:"#_4-task-提交"}},[t._v("4. Task 提交")])]),s("li",[s("a",{attrs:{href:"#_5-任务计算"}},[t._v("5. 任务计算")])]),s("li",[s("a",{attrs:{href:"#_6-结果返回"}},[t._v("6. 结果返回")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-wordcount-代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-wordcount-代码示例"}},[t._v("#")]),t._v(" 1. WordCount 代码示例")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" WordCount "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" SparkConf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setAppName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WordCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getSimpleName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setMaster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local[4]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" sc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SparkContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getOrCreate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/WordCount.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HadoopRDD")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" words "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flatMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MapPartitionRDD")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" wordsAndOne "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" words"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MapPartitionRDD")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wordsAndOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reduceByKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ShuffledRDD")]),t._v("\n\n    result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foreach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("h2",{attrs:{id:"_2-运行前的准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行前的准备"}},[t._v("#")]),t._v(" 2. 运行前的准备")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用户提交了任务之后，首先运行 SparkSubmit 类的 main 方法匹配到 SUBMIT 模式，然后调用其 submit 方法，通过反射获取到主类对象 WordCount 并执行主类对象的 main 方法。")])]),t._v(" "),s("li",[s("p",[t._v("main 方法中首先去构建 SparkConf 和 SparkContext，在 SparkContext 中会初始化 SparkEnv、DAGScheduler、TaskScheduler 这三个重要对象。")])]),t._v(" "),s("li",[s("p",[t._v("之后任务的相关信息会被发送给 Master，Master 接收到任务信息后将其放入内存，并在等待队列中也保存一份，当运行到队列中的该任务时，Master 开始资源调度。")])]),t._v(" "),s("li",[s("p",[t._v("Master 将计算好的调度资源发送给 Worker，Worker 接收到调度信息后，启动 Executor。Executor 启动后向 Driver 反向注册，注册成功后会创建一个线程池来执行任务。")])]),t._v(" "),s("li",[s("p",[t._v("Executor 注册完成后，Driver 开始执行 WordCount 中的剩余代码，当调用了 collect 方法之后，这时就触发了一个 job。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("collect 底层调用的是 SparkContext 的 runJob 方法，这是一个阻塞方法，在 job 完成并返回结果之前会一直保持阻塞等待状态。")])]),t._v(" "),s("h2",{attrs:{id:"_3-stage-的切分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-stage-的切分"}},[t._v("#")]),t._v(" 3. Stage 的切分")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("job 的信息会被 SparkContext 中初始化的 DAGScheduler 封装到 JobSubmitted 案例类中，其中包含了 jobId、最后触发 action 的 RDD、经过处理的函数、要计算的所有分区在 RDD 中对应的索引、以及一些其他的信息，然后发送给自己的消息队列。")])]),t._v(" "),s("li",[s("p",[t._v("DAGScheduler 的消息队列接收到这个消息之后，开始计算 Stage。在 WordCount 示例中，最后的 "),s("strong",[t._v("result")]),t._v(" 触发了 action 动作，因此 ResultStage 所要执行的 finalRDD 就是 "),s("strong",[t._v("result")]),t._v("。由于 "),s("strong",[t._v("result")]),t._v(" 是由 "),s("strong",[t._v("wordsAndOne")]),t._v(" 转换而来，它们之间存在着宽依赖，此处被划分出一个 ShuffleMapStage。再往前推导不存在宽依赖关系，因此这个 WordCount 程序存在两个 Stage。")])]),t._v(" "),s("li",[s("p",[t._v("计算出所有的 Stage 之后，DAGScheduler 会创建一个 ActiveJob 的对象将 ResultStage 封装进去，在提交之前，递归去判断是否存在父 Stage，由于存在一个 ShuffleMapStage，因此会将 ResultStage 加入等待队列，先提交父 Stage。")])])]),t._v(" "),s("h2",{attrs:{id:"_4-task-提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-task-提交"}},[t._v("#")]),t._v(" 4. Task 提交")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("提交的 Stage 会根据分区的数量，对每一个分区创建一个 Task，ShuffleMapStage 创建 ShuffleMapTask，ResultStage 创建 ResultTask，然后 DAGScheduler 将同一个 Stage 下的这些 Task 封装成 TaskSet，提交给 TaskScheduler。")])]),t._v(" "),s("li",[s("p",[t._v("TaskScheduler 在收到 TaskSet 之后，会创建一个 TaskSetManager，负责跟踪每一个任务，为 TaskSet 寻找合适的运行节点，重试每一个失败的任务，并且更新 TaskSet 中任务的运行状态。")])]),t._v(" "),s("li",[s("p",[t._v("TaskScheduler 会获取所有可用资源的信息，然后将这些信息提供给 TaskSet，TaskSet 根据这些资源信息将当前可以执行的 Task 序列化后封装到 TaskDescription 中返回给 SchedulerBackend，SchedulerBackend 根据 TaskDescription 将 Executor 的资源真正的分配给 Task，并做记录，然后将这些 Task 发送给 Executor。")])])]),t._v(" "),s("h2",{attrs:{id:"_5-任务计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-任务计算"}},[t._v("#")]),t._v(" 5. 任务计算")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Executor 接收到这些任务后，将它们封装成 TaskRunner，然后丢到线程池中执行，TaskRunner 会被反序列化成 TaskSet，然后执行每个 Task 中的任务。")])]),t._v(" "),s("li",[s("p",[t._v("计算完成后将结果数据序列化，如果结果数据不大则直接将结果封装到 DirectTaskResult 中返回给 Driver；如果结果数据很大，则将结果写入本地的内存或磁盘中，并将结果数据的位置 blockId 和数据大小封装到 IndirectTaskResult 中返回给 Driver。")])])]),t._v(" "),s("h2",{attrs:{id:"_6-结果返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-结果返回"}},[t._v("#")]),t._v(" 6. 结果返回")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("TaskScheduler 拿到任务结果后，如果是 DirectTaskResult 则直接读取结果，如果是 IndirectTaskResult 则需要根据其中记录的信息到 Executor 端拉取数据 (正因如此，不建议对大的结果数据集使用 collect 方法，可能会导致 Driver 端内存溢出)，TaskScheduler 会将读取到的结果交给 DAGScheduler。")])]),t._v(" "),s("li",[s("p",[t._v("DAGScheduler 收到 Task 完成的消息后，先判断是什么类型的任务，如果是 ShuffleMapTask 则将返回的结果记录到 Driver 端，并且判断 ShuffleMapStage 已经完成，则去提交下一个 Stage；如果是 ResultTask 完成了，则将结果传递给 JobWaiter，并将该 Job 标记为完成状态。")])]),t._v(" "),s("li",[s("p",[t._v("JobWaiter 是任务一开始由 SparkContext 创建的一个对象，用来阻塞等待任务完成，并处理结果。最终结果数据会被放入一个数组中，由 collect 方法返回给客户端，到此一个 WordCount 任务就完成了。")])])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);