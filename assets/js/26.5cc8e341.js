(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{239:function(a,t,s){"use strict";s.r(t);var r=s(12),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),s("OutboundLink")],1),a._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/leetcode",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),s("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#有哪些位运算"}},[a._v("有哪些位运算")])]),s("li",[s("a",{attrs:{href:"#位移实现乘除法"}},[a._v("位移实现乘除法")])]),s("li",[s("a",{attrs:{href:"#a-b-b-a-异或交换两数"}},[a._v("a ^ b ^ b = a 异或交换两数")])]),s("li",[s("a",{attrs:{href:"#与运算判断奇偶数"}},[a._v("与运算判断奇偶数")])]),s("li",[s("a",{attrs:{href:"#取反运算交换符号"}},[a._v("取反运算交换符号")])]),s("li",[s("a",{attrs:{href:"#位操作求绝对值"}},[a._v("位操作求绝对值")])]),s("li",[s("a",{attrs:{href:"#位操作进行高低位交换"}},[a._v("位操作进行高低位交换")])]),s("li",[s("a",{attrs:{href:"#消去二进制最后一位的-1"}},[a._v("消去二进制最后一位的 1")])]),s("li",[s("a",{attrs:{href:"#位运算求模"}},[a._v("位运算求模")])]),s("li",[s("a",{attrs:{href:"#是否是-2-的整数次幂"}},[a._v("是否是 2 的整数次幂")])]),s("li",[s("a",{attrs:{href:"#参考"}},[a._v("参考")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"有哪些位运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有哪些位运算"}},[a._v("#")]),a._v(" 有哪些位运算")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("&")]),a._v(" 与运算 两个位都是 1 时，结果才为 1，否则为 0")]),a._v(" "),s("li",[s("code",[a._v("|")]),a._v(" 或运算 两个位都是 0 时，结果才为 0，否则为 1")]),a._v(" "),s("li",[s("code",[a._v("^")]),a._v(" 异或运算，两个位相同则为 0，不同则为 1")]),a._v(" "),s("li",[s("code",[a._v("~")]),a._v(" 取反运算，0 则变为 1，1 则变为 0")]),a._v(" "),s("li",[s("code",[a._v("<<")]),a._v(" 左移运算，向左进行移位操作，高位丢弃，低位补 0（部分语言支持无符号左移 "),s("code",[a._v("<<<")]),a._v("）")]),a._v(" "),s("li",[s("code",[a._v(">>")]),a._v(" 右移运算，向右进行移位操作，对无符号数，高位补 0，对于有符号数，高位补符号位（部分语言支持无符号右移 "),s("code",[a._v(">>>")]),a._v("）")])]),a._v(" "),s("h2",{attrs:{id:"位移实现乘除法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位移实现乘除法"}},[a._v("#")]),a._v(" 位移实现乘除法")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\n")])])]),s("h2",{attrs:{id:"a-b-b-a-异或交换两数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-b-b-a-异或交换两数"}},[a._v("#")]),a._v(" "),s("code",[a._v("a ^ b ^ b = a")]),a._v(" 异或交换两数")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 案例：数字替换")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//普通操作")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//位与操作")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^=")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a = (a^b);")]),a._v("\n  b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// b^(a^b) --\x3e b = (b^b)^a = a")]),a._v("\n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^=")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// (a^b)^a = (a^a)^b = b")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("应用：")]),a._v(" "),s("ul",[s("li",[a._v("数组中，只有一个数出现一次，剩下都出现两次，找出出现一次的数")]),a._v(" "),s("li",[a._v("数组中，只有一个数出现一次，剩下都出现三次，找出出现一次的")]),a._v(" "),s("li",[a._v("数组中，只有两个数出现一次，剩下都出现两次，找出出现一次的")])]),a._v(" "),s("h2",{attrs:{id:"与运算判断奇偶数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与运算判断奇偶数"}},[a._v("#")]),a._v(" 与运算判断奇偶数")]),a._v(" "),s("p",[a._v("只要根据数的最后一位是 0 还是 1 来决定即可，为 0 就是偶数，为 1 就是奇数。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  偶数\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  奇数\n")])])]),s("h2",{attrs:{id:"取反运算交换符号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取反运算交换符号"}},[a._v("#")]),a._v(" 取反运算交换符号")]),a._v(" "),s("p",[a._v("交换符号将正数变成负数，负数变成正数。")]),a._v(" "),s("p",[a._v("整数取反加 1，正好变成其对应的负数 (补码表示)；负数取反加一，则变为其原码，即正数")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("reversal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("~")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"位操作求绝对值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位操作求绝对值"}},[a._v("#")]),a._v(" 位操作求绝对值")]),a._v(" "),s("p",[a._v("整数的绝对值是其本身，负数的绝对值正好可以对其进行取反加一求得，即我们首先判断其符号位（整数右移 31 位得到 0，负数右移 31 位得到 -1，即 0xffffffff），\n然后根据符号进行相应的操作。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("31")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("~")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("上面的操作可以进行优化，可以将 i == 0 的条件判断语句去掉。我们都知道符号位 i 只有两种情况，即 i = 0 为正，i = -1 为负。\n对于任何数与 0 异或都会保持不变，与 -1 即 0xffffffff 进行异或就相当于对此数进行取反，因此可以将上面三目元算符转换为 ((a^i)-i)。")]),a._v(" "),s("ul",[s("li",[a._v("整数时 a 与 0 异或得到本身，再减去 0")]),a._v(" "),s("li",[a._v("负数时与 0xffffffff 异或将 a 进行取反，然后在加上 1，即减去 i（i=-1）")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("abs2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("31")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"位操作进行高低位交换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位操作进行高低位交换"}},[a._v("#")]),a._v(" 位操作进行高低位交换")]),a._v(" "),s("p",[a._v("给定一个 16 位的无符号整数，将其高 8 位与低 8 位进行交换，求出交换后的值。")]),a._v(" "),s("p",[a._v("只要将无符号数 a>>8 即可得到其高 8 位移到低 8 位，高位补 0；将 a<<8 即可将 低 8 位移到高 8 位，低 8 位补 0，然后将 a>>8 和 a<<8 进行或操作既可求得交换后的结果。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"消去二进制最后一位的-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消去二进制最后一位的-1"}},[a._v("#")]),a._v(" 消去二进制最后一位的 1")]),a._v(" "),s("p",[s("code",[a._v("x & (x - 1)")]),a._v(" 用于消去 x 最后一位的 1")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1100")]),a._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1011")]),a._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 案例：位操作统计二进制中 1 的个数")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("  \n  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 每次计算 a 少一个 1")]),a._v("\n  count"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),s("p",[a._v("应用：")]),a._v(" "),s("ul",[s("li",[a._v("检测 n 是否为 2 的幂次。（大于 0，二进制只有一个 1）")]),a._v(" "),s("li",[a._v("位操作统计二进制中 1 的个数（每次消去一个，消到为 0）")])]),a._v(" "),s("h2",{attrs:{id:"位运算求模"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位运算求模"}},[a._v("#")]),a._v(" 位运算求模")]),a._v(" "),s("p",[s("code",[a._v("a % (2^n) 等价于 a & (2^n - 1)")])]),a._v(" "),s("h2",{attrs:{id:"是否是-2-的整数次幂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否是-2-的整数次幂"}},[a._v("#")]),a._v(" 是否是 2 的整数次幂")]),a._v(" "),s("p",[s("code",[a._v("(x & (x - 1)) == 0")])]),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://graphics.stanford.edu/~seander/bithacks.html#OperationCounting",target:"_blank",rel:"noopener noreferrer"}},[a._v("斯坦福计算机系整理-位运算 "),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/problemset/all/?topicSlugs=bit-manipulation",target:"_blank",rel:"noopener noreferrer"}},[a._v("力扣-算法-位运算 "),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/38206659",target:"_blank",rel:"noopener noreferrer"}},[a._v("知乎-位运算有什么奇技淫巧？"),s("OutboundLink")],1)])]),a._v(" "),s("blockquote",[s("p",[a._v("更多相关专栏内容汇总：")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 核心知识-专栏文章目录汇总 "),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java 并发编程-专栏文章目录汇总 "),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java JVM（JDK13）-专栏文章目录汇总 "),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/104368031",target:"_blank",rel:"noopener noreferrer"}},[a._v("数据结构与算法-专栏文章目录汇总 "),s("OutboundLink")],1)])])]),a._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);