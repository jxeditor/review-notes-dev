(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{314:function(t,a,e){"use strict";e.r(a);var r=e(12),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("专栏原创出处："),e("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/framework/flink-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),e("OutboundLink")],1),t._v(" ，"),e("a",{attrs:{href:"https://github.com/GourdErwa/flink-advanced",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),e("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-抽象级别"}},[t._v("1 抽象级别")])]),e("li",[e("a",{attrs:{href:"#_2-程序和数据流"}},[t._v("2 程序和数据流")])]),e("li",[e("a",{attrs:{href:"#_3-并发数据流"}},[t._v("3 并发数据流")])]),e("li",[e("a",{attrs:{href:"#_4-窗口"}},[t._v("4 窗口")])]),e("li",[e("a",{attrs:{href:"#_5-时间"}},[t._v("5 时间")])]),e("li",[e("a",{attrs:{href:"#_6-有状态的操作"}},[t._v("6 有状态的操作")])]),e("li",[e("a",{attrs:{href:"#_7-容错检查点"}},[t._v("7 容错检查点")])]),e("li",[e("a",{attrs:{href:"#_8-批处理操作"}},[t._v("8 批处理操作")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"_1-抽象级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-抽象级别"}},[t._v("#")]),t._v(" 1 抽象级别")]),t._v(" "),e("p",[t._v("Flink 提供了不同级别的抽象来开发 "),e("strong",[t._v("流/批")]),t._v(" 处理应用程序。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/levels_of_abstraction.png",height:"250px"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("最低级别的抽象仅提供状态流。"),e("br"),t._v("\n通过"),e("code",[t._v("Process Function")]),t._v("嵌入到 DataStream API 中。"),e("br"),t._v("\n允许用户自由地处理一个或多个流中的事件，并使用一致的容错状态。"),e("br"),t._v("\n此外，用户可以注册事件时间和处理时间回调，从而允许程序实现复杂的计算。")])]),t._v(" "),e("li",[e("p",[t._v("实际上，大部分程序通常会使用以 DataStream API（有界/无界数据流）、DataSet API（有界数据集）为代表的核心 API，而并不会使用前述低级抽象接口。"),e("br"),t._v("\n这些核心 API 为数据处理提供了大量的通用构建模块，包括用户定义的各种各样的变换、连接、聚集、窗口、状态等等。在编程语言中，这些 API 处理的数据类型通常会表现为相应的类的形式。"),e("br"),t._v("\n由于数据流 API 集成了低级处理函数，因此可以通过数据流 API 为某些特定操作应用低级处理接口。此外，数据集 API 也为诸如循环、迭代之类的有界数据集提供了一些补充的编程原语。")])]),t._v(" "),e("li",[e("p",[t._v("Table API 是一种以 Table 为核心地声明式 DSL，能够动态地修改那些表征数据流的表。"),e("br"),t._v("\nTable API 的工作模式是一种（扩展的）关系型模型：每个 Table 都依附于一个 schema（类似于关系型数据库中的表结构），相应的 API 就可以实现很多类似的操作，例如 select，project，join，group by，aggregate，等等。"),e("br"),t._v("\nTable API 程序定义的仅仅是如何在逻辑上实现各种程序操作，而不是直接指定程序代码运行的具体步骤。尽管 Table API 可以通过各式各样的自定义函数进行扩展，但是它在表达能力上仍然比不上核心 API，不过 Table API 的优势是在使用上更简练（相对于核心 API 可以减少很多代码）。"),e("br"),t._v("\n此外，Table API 程序在运行之前也会使用一个优化器对程序进行优化。"),e("br"),t._v("\n由于用户可以在 Table 与 DataStream/DataSet 之间进行无缝切换，程序也可以混合使用 Table API 和 DataStream/DataSet API。")])]),t._v(" "),e("li",[e("p",[t._v("Flink 提供的最高级接口是 SQL。"),e("br"),t._v("\n这个层次的抽象接口和 Table  API 非常相似，包括语法和接口的表现能力，唯一的区别是通过 SQL 查询语言实现程序。"),e("br"),t._v("\n实际上，SQL 抽象接口和 Table  API 的交互非常紧密，而且 SQL 查询也可以在 Table  API 中定义的表上执行。")])])]),t._v(" "),e("h2",{attrs:{id:"_2-程序和数据流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-程序和数据流"}},[t._v("#")]),t._v(" 2 程序和数据流")]),t._v(" "),e("p",[t._v("Flink 程序的基本构建块是 streams 和 transformations。"),e("br"),t._v("\n（请注意，Flink 的 DataSet API 中使用的 DataSet 也是内部流-稍后将进行更多介绍。）"),e("br"),t._v("\n从概念上讲，流是数据记录流（可能永无止境），而 operators 是将一个或多个流作为输入并产生一个或多个输出流。")]),t._v(" "),e("p",[t._v("Flink 程序在运行的时候会被映射到数据流图中，这个数据流图就是由程序中的数据流和相应的变换操作组成的。"),e("br"),t._v("\n数据流图开始于一个或多个数据源（source），结束于另外一些汇聚点（sink）。"),e("br"),t._v("\n数据流图类似于有向无环图（DAG）。"),e("br"),t._v("\n虽然可以通过迭代构造器生成某些特殊形式的环，但为了简化说明，大部分情况下我们不考虑这种结构。\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/program_dataflow.png"}})]),e("p"),t._v(" "),e("p",[t._v("程序中的转换与数据流中的运算符之间通常存在一一对应的关系。但是有时，一个转换可能包含多个转换运算符。")]),t._v(" "),e("p",[t._v("数据源和汇聚点记录在流连接器和批处理连接器文档中。转换记录在 DataStream 运算符和 DataSet 转换中。")]),t._v(" "),e("h2",{attrs:{id:"_3-并发数据流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-并发数据流"}},[t._v("#")]),t._v(" 3 并发数据流")]),t._v(" "),e("p",[t._v("Flink 中的程序本质上是并发的和分布式的。在执行期间，一个流具有一个或多个流分区，并且每个运算符具有一个或多个运算符子任务。\n每个运算子任务与另外一个运算子任务之间都是相互独立的，他们是在不同的线程中运行的，甚至有可能所运行的机器或者容器都完全不同。")]),t._v(" "),e("p",[t._v("运算子任务的数量由运算符的并发数确定。数据流的并发数就是它所生成的运算符的个数。程序中不同的运算符可以有不同等级的并发量。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/parallel_dataflow.png",height:"450px"}})]),t._v(" "),e("p",[t._v("在两个运算符之间传输数据，流可以按一对一（或转发）模式或重分发模式：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("一对一")]),t._v("的流"),e("br"),t._v("\n（例如，上图中的 Source 和 map（）运算符之间）保留元素的分区和排序。"),e("br"),t._v("\n这意味着 map（）运算符的 subtask [1] 将以与 Source 运算符的 subtask [1] 产生的相同顺序看到相同的元素。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("重分发")]),t._v("模式的数据流"),e("br"),t._v("\n（例如上图中 map() 和 keyBy/window 运算符之间的数据流，以及 keyby/window 和 Sink 运算符之间的数据流）会改变数据流所在的分区。"),e("br"),t._v("\n根据所选的变换的不同，每个运算子任务会将数据发送到不同的目标子任务中去。"),e("br"),t._v("\nkeyBy()（通过对 key 进行哈希计算来重分区）、boradcast() 和 rebalance()（随机重分区）就是重分发模式的几个例子。")])])]),t._v(" "),e("p",[t._v("在重分发模式下，元素之间的先后次序在每对发送——接收子任务（例如 map() 的子任务[1] 和 keyBy/window 的子任务[2]）中是保持不变的。"),e("br"),t._v("\n因此，在上图的例子中，尽管在子任务之间每个 key 的顺序都是确定的，但是由于程序的并发过程引入了不确定性，最终到达 Sink 的元素顺序就不能保证与一开始的元素顺序完全一致。")]),t._v(" "),e("p",[t._v("有关配置和控制并发性的详细信息，请参见 "),e("a",{attrs:{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.9/zh/dev/parallel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("并发执行 "),e("OutboundLink")],1),t._v(" 文档。")]),t._v(" "),e("h2",{attrs:{id:"_4-窗口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-窗口"}},[t._v("#")]),t._v(" 4 窗口")]),t._v(" "),e("p",[t._v("汇总事件（例如，计数，总和）在流上的工作方式与批处理中的不同。"),e("br"),t._v("\n例如，不可能计算流中的所有元素，因为流通常是无限的（无界）。相反，流上的聚合（计数，总和等）由窗口确定范围，例如“过去 5 分钟内的计数”或“最近 100 个元素的总和”。")]),t._v(" "),e("p",[e("strong",[t._v("内置 Window 类型")])]),t._v(" "),e("ul",[e("li",[t._v("时间驱动的（Time Window，例如：每 30 秒）")]),t._v(" "),e("li",[t._v("数据驱动的（Count Window，例如：每 100 个元素）")]),t._v(" "),e("li",[t._v("会话间隔驱动的（Session Window，例如：每只股票超过 2 秒没有交易事件时计算窗口内交易总金额）")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/windows.png"}})]),t._v(" "),e("h2",{attrs:{id:"_5-时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-时间"}},[t._v("#")]),t._v(" 5 时间")]),t._v(" "),e("p",[t._v("在流式传输程序中引用时间（例如，定义窗口）时，可以引用不同的时间概念：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("事件时间 (Event Time)")]),t._v(" 是创建事件的时间。通常用事件中的时间戳记来描述，例如由生产传感器或生产服务附加。Flink 通过时间戳分配器访问事件时间戳。")]),t._v(" "),e("li",[e("strong",[t._v("接收时间 (Ingestion time)")]),t._v(" 是事件在源操作员进入 Flink 数据流的时间。")]),t._v(" "),e("li",[e("strong",[t._v("处理时间 (Processing Time)")]),t._v(" 是每个执行基于时间的操作的操作员的本地时间。")])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/event_ingestion_processing_time.png",height:"350px"}})]),t._v(" "),e("h2",{attrs:{id:"_6-有状态的操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-有状态的操作"}},[t._v("#")]),t._v(" 6 有状态的操作")]),t._v(" "),e("p",[t._v("尽管数据流中的许多操作一次仅查看一个事件（例如事件解析器），但某些操作会记住多个事件的信息（例如窗口运算符）。这些操作称为有状态。")]),t._v(" "),e("p",[t._v("有状态操作的状态以可以被认为是嵌入式键/值存储的方式维护。严格将状态与有状态运算符读取的流一起进行分区和分发。因此，只有在 keyBy（）函数之后，才可以在键控流上访问键/值状态，并且仅限于与当前事件的键关联的值。对齐流键和状态键可确保所有状态更新都是本地操作，从而确保了一致性而没有事务开销。这种对齐方式还允许 Flink 重新分配状态并透明地调整流分区。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/framework/flink-basis/_images/state_partitioning.png",height:"350px"}})]),t._v(" "),e("p",[t._v("有关更多信息，请参阅关于 state 的文档。")]),t._v(" "),e("h2",{attrs:{id:"_7-容错检查点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-容错检查点"}},[t._v("#")]),t._v(" 7 容错检查点")]),t._v(" "),e("p",[t._v("Flink 通过结合流重播和检查点来实现容错。检查点与每个输入流中的特定点以及每个运算符的对应状态有关。通过恢复操作员的状态并从检查点开始重放事件，可以在保持一致性（完全一次处理语义）的同时，从检查点恢复流式数据流。")]),t._v(" "),e("p",[t._v("检查点间隔是在执行过程中权衡容错开销与恢复时间（需要重播的事件数）的一种方法。")]),t._v(" "),e("p",[t._v("容错内部的描述提供了有关 Flink 如何管理检查点和相关主题的更多信息。有关启用和配置检查点的详细信息，请参见 checkpointing API 文档。")]),t._v(" "),e("h2",{attrs:{id:"_8-批处理操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-批处理操作"}},[t._v("#")]),t._v(" 8 批处理操作")]),t._v(" "),e("p",[t._v("Flink 将批处理程序看成流式计算程序的一种有界数据流（即元素数量是可数的）的特例。这里，数据集（DataSet）也被看作一种数据流。因此，上面流式计算程序中的很多概念也能应用到批处理程序中"),e("br"),t._v("\n除了以下几处不同：")]),t._v(" "),e("ul",[e("li",[t._v("批处理程序的容错性不使用检查点机制。由于输入数据本身是有界的，批处理的恢复是通过完全重发所有数据流实现的。这样，恢复过程中的开销可能更大一些，但是由于没有了检查点，正常处理过程的开销反而更小了点。")]),t._v(" "),e("li",[t._v("DataSet API 中的有状态操作没有使用键/值（key/value）索引结构，而是使用了简化的 in-memory/out-of-core 数据结构，")]),t._v(" "),e("li",[t._v("DataSet API 引入了特殊的同步（基于超步算法的）迭代接口，该接口仅能用于有界数据流。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);