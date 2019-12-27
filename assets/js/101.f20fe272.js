(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{306:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p",[t._v("一个类被定义到另一个类的内部，作为另一个类的成员而存在，这个类就是一个内部类。"),s("br"),t._v("\n在 Java 中，内部类是绑定到外部类上的，而在 Scala 中，内部类是绑定到外部类实例化的对象上的。")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Graph "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类 Node 是一个路径依赖类型，因为它嵌套在类 Graph 中。 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connectedNodes 中存储的所有节点必须使用同一个 Graph 的实例对象的 newNode 方法来创建。")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" connectedNodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Nil\n      \n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" connectTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("connectedNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("equals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          connectedNodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" connectedNodes\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Nil\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" newNode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Node\n      nodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nodes\n      res\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node1、node2、node3 都是由 graph1 创建，因此彼此之间可以互相传入 connectTo 方法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Graph\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" node1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newNode\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" node2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newNode\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" node3"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graph1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newNode\n  node1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  node3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译报错，因为 node4 是由 graph2 创建，而 node1.connectTo 方法只能接收 graph1.Node 类型的参数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" graph2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Graph "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Graph\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" node4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" graph2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graph2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newNode\n  node1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connectTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// illegal!，但是在 java 中这样调用是可以的")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果想要 node1 连接 node4 的话，应该这样定义 Node 中的类型[Graph#Node]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" Node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" connectedNodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Graph#Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Nil\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" connectTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Graph#Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("connectedNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("equals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          connectedNodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" connectedNodes\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);