(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{220:function(s,t,a){"use strict";a.r(t);var e=a(0),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-源笔记文件 "),a("OutboundLink")],1),s._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-computer-theory",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-源码 "),a("OutboundLink")],1),s._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),s._v(" "),a("p",[s._v("计算机理论专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[s._v("计算机理论 "),a("OutboundLink")],1)]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#二进制数"}},[s._v("二进制数")]),a("ul",[a("li",[a("a",{attrs:{href:"#什么是二进制数"}},[s._v("什么是二进制数")])]),a("li",[a("a",{attrs:{href:"#位权与基数解释"}},[s._v("位权与基数解释")])])])]),a("li",[a("a",{attrs:{href:"#为什么用二进制表示计算机信息"}},[s._v("为什么用二进制表示计算机信息")])]),a("li",[a("a",{attrs:{href:"#二进制小数怎么表示"}},[s._v("二进制小数怎么表示")])]),a("li",[a("a",{attrs:{href:"#总结"}},[s._v("总结")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"二进制数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制数"}},[s._v("#")]),s._v(" 二进制数")]),s._v(" "),a("p",[s._v("二进制是计算技术中广泛采用的一种数制。")]),s._v(" "),a("h3",{attrs:{id:"什么是二进制数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是二进制数"}},[s._v("#")]),s._v(" 什么是二进制数")]),s._v(" "),a("p",[s._v("二进制数据是用 0 和 1 两个数码来表示的数。它的基数为 2，进位规则是“逢二进一”，借位规则是“借一当二”。")]),s._v(" "),a("h3",{attrs:{id:"位权与基数解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位权与基数解释"}},[s._v("#")]),s._v(" 位权与基数解释")]),s._v(" "),a("p",[s._v("以十进制数 39 为例： "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("3")]),a("mn",[s._v("9")]),a("mo",[s._v("=")]),a("mn",[s._v("3")]),a("mo",[s._v("∗")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mo",[s._v("+")]),a("mn",[s._v("9")]),a("mo",[s._v("∗")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("39=3*10+9*1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),s._v(" ，这里的 10 和 1 就是"),a("strong",[s._v("位权")]),s._v("。"),a("br"),s._v("\n数字的位数不同位权也不同，以十进制数为例，从最右边开始：")]),s._v(" "),a("ul",[a("li",[s._v("第一位是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("0")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("10^0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("li",[s._v("第二位是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("1")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("10^1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("li",[s._v("第三位是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("10^2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("li",[s._v("第三位是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("3")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("10^3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])])]),s._v(" "),a("li",[s._v("...")])]),s._v(" "),a("p",[s._v("可以看到，每次都是在前一个位权数据的基础上乘以 10 ，这里 10 就是"),a("strong",[s._v("基数")]),s._v("。")]),s._v(" "),a("p",[s._v("求和的计算过程为："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("3")]),a("mn",[s._v("9")]),a("mo",[s._v("=")]),a("mn",[s._v("3")]),a("mo",[s._v("∗")]),a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("1")])],1),a("mo",[s._v("+")]),a("mn",[s._v("9")]),a("mo",[s._v("∗")]),a("mn",[s._v("1")]),a("msup",[a("mn",[s._v("0")]),a("mn",[s._v("0")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("39=3*10^1+9*10^0")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),a("br"),s._v("\n抽象的描述为：进制数结果 = 构成数值的各数位的数值 * 位权后，再相加的结果")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("以二进制角度来看："),a("br"),s._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mn",[s._v("0")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mn",[s._v("1")]),a("mo",[s._v("=")]),a("mn",[s._v("0")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("7")])],1),a("mo",[s._v("+")]),a("mn",[s._v("0")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("6")])],1),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("5")])],1),a("mo",[s._v("+")]),a("mn",[s._v("0")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("4")])],1),a("mo",[s._v("+")]),a("mn",[s._v("0")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("3")])],1),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("2")])],1),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("1")])],1),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",[s._v("∗")]),a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("0")])],1),a("mo",[s._v("=")]),a("mn",[s._v("3")]),a("mn",[s._v("9")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("00100111=0*2^7+0*2^6+1*2^5+0*2^4+0*2^3+1*2^2+1*2^1+1*2^0 = 39")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("7")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("5")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("4")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("3")]),a("span",{staticClass:"mord mathrm"},[s._v("9")])])])]),a("br"),s._v("\n所以二进制的基数为 2 ，位权为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msup",[a("mn",[s._v("2")]),a("mi",[s._v("N")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("2^N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8413309999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.8413309999999999em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[s._v("N")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])])]),s._v("(N=位数-1)")]),s._v(" "),a("h2",{attrs:{id:"为什么用二进制表示计算机信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么用二进制表示计算机信息"}},[s._v("#")]),s._v(" 为什么用二进制表示计算机信息")]),s._v(" "),a("p",[s._v("计算机内部使用 IC（集成电路） 电子部件构成，引脚在 IC 内部并排排列，一个引脚只能表示两个状态（电压），因此决定了计算机的信息数据只能用二进制来处理。\n由于 1 位（1 个引脚）只能表示两个状态，所以计算机处理信息的最小单位就是位，相当于二进制中的一位。")]),s._v(" "),a("p",[s._v("二进制的位数一般是 8、16、32...也就是 8 的位数，因为计算机所处理的信息的基本单位是 8 位二进制数，1 字节=8 位二进制数。\n用字节处理数据时，如果数字小于存储的字节数（二进制位数），高位补 0.")]),s._v(" "),a("h2",{attrs:{id:"二进制小数怎么表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制小数怎么表示"}},[s._v("#")]),s._v(" 二进制小数怎么表示")]),s._v(" "),a("p",[s._v("TODO 待整理")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("字节是最基本的信息计量单位")]),s._v(" "),a("li",[s._v("位是最小单位")]),s._v(" "),a("li",[s._v("1 字节=8 位二进制数")]),s._v(" "),a("li",[s._v("数字小于字节数，高位补 0")])])])}),[],!1,null,null,null);t.default=i.exports}}]);