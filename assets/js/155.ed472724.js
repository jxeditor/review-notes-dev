(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{362:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p",[t._v("Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),s("a",{attrs:{href:"https://review-notes.top/language/scala-basis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scala 编程语言 "),s("OutboundLink")],1)]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#如何定义隐式转换"}},[t._v("如何定义隐式转换")]),s("ul",[s("li",[s("a",{attrs:{href:"#情况-1-示例"}},[t._v("情况 1-示例")])]),s("li",[s("a",{attrs:{href:"#情况-2-示例"}},[t._v("情况 2-示例")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"如何定义隐式转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何定义隐式转换"}},[t._v("#")]),t._v(" 如何定义隐式转换")]),t._v(" "),s("p",[t._v("一个从类型 S 到类型 T 的隐式转换由一个函数类型 "),s("code",[t._v("S => T")]),t._v(" 的隐式值来定义，或者由一个可转换成所需值的隐式方法来定义。")]),t._v(" "),s("p",[t._v("使用情况：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("如果一个表达式 e 的类型为 S， 并且类型 S 不符合表达式的期望类型 T。")])]),t._v(" "),s("li",[s("p",[t._v("在一个类型为 S 的实例对象 e 中调用 e.m， 如果被调用的 m 并没有在类型 S 中声明。")])])]),t._v(" "),s("h3",{attrs:{id:"情况-1-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况-1-示例"}},[t._v("#")]),t._v(" 情况 1-示例")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" int2Integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Integer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  Integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("valueOf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1"和"23"的类型都为 String，并不符合 add 方法需要的 Integer 类型。')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于定义了隐式转换，从上文找到了合适的隐式转换，String 被转成了 Integer， String => Integer")]),t._v("\nprintln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"情况-2-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#情况-2-示例"}},[t._v("#")]),t._v(" 情况 2-示例")]),t._v(" "),s("div",{staticClass:"language-scala extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scala"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" list2ordered"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ordered"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" Ordered"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" compare"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List[Int] 本身是没有 compare 方法的，但是上面定义了隐式转换，List[A] => Ordered[List[A]]。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，List[Int] 类型的数据可以直接调用 compare 方法。")]),t._v("\nList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compare"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);