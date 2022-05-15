"use strict";(self.webpackChunkshimon_blog=self.webpackChunkshimon_blog||[]).push([[51602],{88327:(l,t,e)=>{e.r(t),e.d(t,{data:()=>n});const n={key:"v-715bd2d7",path:"/code/linux/bash/",title:"Bash 教程",lang:"zh-CN",frontmatter:{title:"Bash 教程",icon:"shell",author:"阮一峰",category:["Linux"],tag:["Bash"],copyright:'本教程采用<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.zh" rel="noopener noreferrer" target="_blank">知识共享 署名-相同方式共享 3.0协议</a>',summary:"目录 简介; 基本语法; 模式扩展; 引号和转义; 变量; 字符串操作; 算术运算; 行操作; 目录堆栈; 脚本入门; read 命令; 条件判断; 循环; 函数; 数组; set 命令; 脚本除错; mktemp 命令，trap 命令; 启动环境; 命令提示符;",head:[["meta",{property:"og:url",content:"https://shimonzhan.com/code/linux/bash/"}],["meta",{property:"og:site_name",content:"Shimon's Blog"}],["meta",{property:"og:title",content:"Bash 教程"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-19T07:13:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"阮一峰"}],["meta",{property:"article:tag",content:"Bash"}],["meta",{property:"article:modified_time",content:"2022-04-19T07:13:07.000Z"}]]},excerpt:"",headers:[{level:2,title:"目录",slug:"目录",children:[]}],git:{createdTime:1650352387e3,updatedTime:1650352387e3,contributors:[{name:"ShimonZhan",email:"942890268@qq.com",commits:1}]},readingTime:{minutes:.31,words:94},filePathRelative:"code/linux/bash/README.md"}},61300:(l,t,e)=>{e.r(t),e.d(t,{default:()=>B});var n=e(66252);const a=(0,n._)("h2",{id:"目录",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),(0,n.Uk)(" 目录")],-1),o=(0,n.Uk)("简介"),u=(0,n.Uk)("基本语法"),i=(0,n.Uk)("模式扩展"),m=(0,n.Uk)("引号和转义"),r=(0,n.Uk)("变量"),h=(0,n.Uk)("字符串操作"),d=(0,n.Uk)("算术运算"),_=(0,n.Uk)("行操作"),c=(0,n.Uk)("目录堆栈"),s=(0,n.Uk)("脚本入门"),p=(0,n.Uk)("read 命令"),b=(0,n.Uk)("条件判断"),f=(0,n.Uk)("循环"),k=(0,n.Uk)("函数"),x=(0,n.Uk)("数组"),w=(0,n.Uk)("set 命令"),g=(0,n.Uk)("脚本除错"),U=(0,n.Uk)("mktemp 命令，trap 命令"),W=(0,n.Uk)("启动环境"),y=(0,n.Uk)("命令提示符"),v={},B=(0,e(83744).Z)(v,[["render",function(l,t){const e=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/intro.html"},{default:(0,n.w5)((()=>[o])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/grammar.html"},{default:(0,n.w5)((()=>[u])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/expansion.html"},{default:(0,n.w5)((()=>[i])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/quotation.html"},{default:(0,n.w5)((()=>[m])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/variable.html"},{default:(0,n.w5)((()=>[r])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/string.html"},{default:(0,n.w5)((()=>[h])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/arithmetic.html"},{default:(0,n.w5)((()=>[d])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/readline.html"},{default:(0,n.w5)((()=>[_])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/stack.html"},{default:(0,n.w5)((()=>[c])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/script.html"},{default:(0,n.w5)((()=>[s])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/read.html"},{default:(0,n.w5)((()=>[p])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/condition.html"},{default:(0,n.w5)((()=>[b])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/loop.html"},{default:(0,n.w5)((()=>[f])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/function.html"},{default:(0,n.w5)((()=>[k])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/array.html"},{default:(0,n.w5)((()=>[x])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/set.html"},{default:(0,n.w5)((()=>[w])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/debug.html"},{default:(0,n.w5)((()=>[g])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/mktemp.html"},{default:(0,n.w5)((()=>[U])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/startup.html"},{default:(0,n.w5)((()=>[W])),_:1})])]),(0,n._)("li",null,[(0,n._)("p",null,[(0,n.Wm)(e,{to:"/code/linux/bash/prompt.html"},{default:(0,n.w5)((()=>[y])),_:1})])])])],64)}]])},83744:(l,t)=>{t.Z=(l,t)=>{const e=l.__vccOpts||l;for(const[l,n]of t)e[l]=n;return e}}}]);