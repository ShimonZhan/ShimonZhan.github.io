"use strict";(self.webpackChunkshimon_blog=self.webpackChunkshimon_blog||[]).push([[65625],{63693:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-a92fc154",path:"/code/language/js/guide/function.html",title:"函数",lang:"zh-CN",frontmatter:{title:"函数",icon:"info",date:"2019-09-17T00:00:00.000Z",category:["JavaScript"],tag:["快速上手"],summary:"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。\n基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。\n",head:[["meta",{property:"og:url",content:"https://shimonzhan.com/code/language/js/guide/function.html"}],["meta",{property:"og:site_name",content:"Shimon's Blog"}],["meta",{property:"og:title",content:"函数"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-19T07:13:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"快速上手"}],["meta",{property:"article:published_time",content:"2019-09-17T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-19T07:13:07.000Z"}]]},excerpt:"<p>函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。</p>\n<p>基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。</p>\n",headers:[{level:2,title:"声明函数",slug:"声明函数",children:[]},{level:2,title:"调用函数",slug:"调用函数",children:[]}],git:{createdTime:1650352387e3,updatedTime:1650352387e3,contributors:[{name:"ShimonZhan",email:"942890268@qq.com",commits:1}]},readingTime:{minutes:3.19,words:958},filePathRelative:"code/language/js/guide/function.md"}},75024:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(66252);const t=(0,e._)("p",null,"函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。",-1),p=(0,e._)("p",null,"基本上所有的高级语言都支持函数，JavaScript 也不例外。JavaScript 的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。",-1),c=(0,e.uE)('<h2 id="声明函数" tabindex="-1"><a class="header-anchor" href="#声明函数" aria-hidden="true">#</a> 声明函数</h2><p><code>function</code> 命令声明的代码区块，就是一个函数。<code>function</code> 命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token operator">-</span>x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 <code>abs()</code> 函数的定义如下:</p><p><code>function</code> 指出这是一个函数定义；</p><p><code>abs</code> 是函数的名称；</p><p><code>(x)</code> 括号内列出函数的参数，多个参数以,分隔；</p><p><code>{ ... }</code> 之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。</p><p>由于 JavaScript 的函数也是一个对象，上述定义的 <code>abs()</code> 函数实际上是一个函数对象，而函数名 <code>abs</code> 可以视为指向该函数的变量。这叫做函数的声明(Function Declaration)。</p><p>除了用 <code>function</code> 命令声明函数，还可以采用变量赋值的写法。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种方式下，<code>function (x) { ... }</code> 是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量 <code>print</code>，所以，通过变量 <code>print</code> 就可以调用该函数。</p><p>这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式(Function Expression)，因为赋值语句的等号右侧只能放表达式。</p><p>采用函数表达式声明函数时，<code>function</code> 命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nx<span class="token punctuation">;</span>\n<span class="token comment">// ReferenceError: x is not defined</span>\n\n<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// function</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在函数表达式中，加入了函数名 <code>x</code>。这个 <code>x</code> 只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错(除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数)。因此，下面的形式声明函数也非常常见。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，除了变量提升以外，可以近似认为是等价的。</p><div class="custom-container tip"><p class="custom-container-title">函数名的提升</p><p>JavaScript 引擎将函数名视同变量名，所以采用 <code>function</code> 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> 调用函数</h2><p>调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 10</span>\n<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 9</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 JavaScript 允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;blablabla&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 10</span>\n<span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&quot;haha&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hehe&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 9</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>传入的参数比定义的少也没有问题:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">abs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 NaN</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时 <code>abs(x)</code> 函数的参数 x 将收到 <code>undefined</code>，计算结果为 <code>NaN</code>。</p><p>要避免收到 <code>undefined</code>，可以对参数进行检查:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">abs</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">!==</span> <span class="token string">&quot;number&quot;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token string">&quot;Not a number&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token operator">-</span>x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',29),o={},i=(0,a(83744).Z)(o,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,(0,e.kq)(" more "),c],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);