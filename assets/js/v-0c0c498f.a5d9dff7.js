"use strict";(self.webpackChunkshimon_blog=self.webpackChunkshimon_blog||[]).push([[75813],{67533:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-0c0c498f",path:"/code/language/js/guide/object.html",title:"对象",lang:"zh-CN",frontmatter:{title:"对象",icon:"object",date:"2019-09-17T00:00:00.000Z",category:["JavaScript"],tag:["快速上手"],summary:"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。\nJavaScript 用一个 {...} 表示一个对象，键值对以 xxx: xxx 形式申明，用 , 隔开。\n",head:[["meta",{property:"og:url",content:"https://shimonzhan.com/code/language/js/guide/object.html"}],["meta",{property:"og:site_name",content:"Shimon's Blog"}],["meta",{property:"og:title",content:"对象"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-19T07:13:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"快速上手"}],["meta",{property:"article:published_time",content:"2019-09-17T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-19T07:13:07.000Z"}]]},excerpt:"<p>JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。</p>\n<p>JavaScript 用一个 <code v-pre>{...}</code> 表示一个对象，键值对以 <code v-pre>xxx: xxx</code> 形式申明，用 <code v-pre>,</code> 隔开。</p>\n",headers:[{level:2,title:"更多介绍",slug:"更多介绍",children:[]}],git:{createdTime:1650352387e3,updatedTime:1650352387e3,contributors:[{name:"ShimonZhan",email:"942890268@qq.com",commits:1}]},readingTime:{minutes:2.54,words:763},filePathRelative:"code/language/js/guide/object.md"}},85018:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(66252);const p=(0,e._)("p",null,"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。",-1),t=(0,e._)("p",null,[(0,e.Uk)("JavaScript 用一个 "),(0,e._)("code",null,"{...}"),(0,e.Uk)(" 表示一个对象，键值对以 "),(0,e._)("code",null,"xxx: xxx"),(0,e.Uk)(" 形式申明，用 "),(0,e._)("code",null,","),(0,e.Uk)(" 隔开。")],-1),o=(0,e.uE)('<p>JavaScript 的对象可用于描述现实世界中的某个对象。例如，为了描述 Shimon Zhan，我们可以用若干键值对来描述他:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mrhope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Shimon Zhan&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">isHandsome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1998</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.76</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>最后一个键值对不需要在末尾加 <code>,</code>，如果加了，有的浏览器(如低版本的 IE)将报错。</p></div><p>上述对象申明了一个 <code>name</code> 属性，值是 <code>&#39;Shimon Zhan&#39;</code>，<code>birth</code> 属性，值是 <code>1998</code>，以及其他一些属性。最后，把这个对象赋值给变量 <code>mrhope</code> 后，就可以通过变量 <code>mrhope</code> 来获取 Shimon Zhan 的属性了:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mrhope<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;Shimon Zhan&#39;</span>\nmrhope<span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// 1998</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问属性是通过 <code>.</code> 操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用 <code>&#39;&#39;</code> 括起来:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mrshope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mrs.Hope&quot;</span><span class="token punctuation">,</span>\n  <span class="token string-property property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mrshope</code> 的属性名 <code>middle-school</code> 不是一个有效的变量，就需要用 <code>&#39;&#39;</code> 括起来。访问这个属性也无法使用 <code>.</code> 操作符，必须用 <code>[&#39;xxx&#39;]</code> 来访问:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>mrshope<span class="token punctuation">[</span><span class="token string">&quot;middle-school&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;No.1 Middle School&#39;</span>\nmrshope<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Mrs.Hope&#39;</span>\nmrshope<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;Mrs.Hope&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用 <code>mrshope[&#39;name&#39;]</code> 来访问 <code>mrshope</code> 的 <code>name</code> 属性，不过 <code>mrshope.name</code> 的写法更简洁。我们在编写 JavaScript 代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过 <code>object.prop</code> 的形式访问一个属性了。</p><p>实际上 JavaScript 对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。</p><p>如果访问一个不存在的属性会返回什么呢? JavaScript 规定，访问不存在的属性不报错，而是返回 <code>undefined</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> mrhope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Shimon Zhan&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mrhope<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mrhope<span class="token punctuation">.</span>house<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 JavaScript 的对象是动态类型，您可以自由地给一个对象添加或删除属性:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mrhope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Shimon Zhan&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmrhope<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// undefined</span>\nmrhope<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span> <span class="token comment">// 新增一个 age 属性</span>\nmrhope<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 22</span>\n<span class="token keyword">delete</span> mrhope<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 删除 age 属性</span>\nmrhope<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n<span class="token keyword">delete</span> mrhope<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 删除 name 属性</span>\nmrhope<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// undefined</span>\n<span class="token keyword">delete</span> mrhope<span class="token punctuation">.</span>school<span class="token punctuation">;</span> <span class="token comment">// 删除一个不存在的 school 属性也不会报错</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要检测 <code>mrhope</code> 是否拥有某一属性，可以用 <code>in</code> 操作符:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mrhope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Shimon Zhan&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1998</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.76</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token string">&quot;name&quot;</span> <span class="token keyword">in</span> mrhope<span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token string">&quot;grade&quot;</span> <span class="token keyword">in</span> mrhope<span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过要小心，如果 <code>in</code> 判断一个属性存在，这个属性不一定是 <code>mrhope</code> 的，它可能是 <code>mrhope</code> 继承得到的:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;toString&quot;</span> <span class="token keyword">in</span> mrhope<span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 <code>toString</code> 定义在 object 对象中，而所有对象最终都会在原型链上指向 object，所以 <code>mrhope</code> 也拥有 <code>toString</code> 属性。</p><p>要判断一个属性是否是 <code>mrhope</code> 自身拥有的，而不是继承得到的，可以用 <code>hasOwnProperty()</code> 方法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mrhope <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Shimon Zhan&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmrhope<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nmrhope<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;toString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多介绍" tabindex="-1"><a class="header-anchor" href="#更多介绍" aria-hidden="true">#</a> 更多介绍</h2>',23),c=(0,e.Uk)("更系统的介绍详见 "),i=(0,e.Uk)("数据结构 / 对象"),l={},r=(0,a(83744).Z)(l,[["render",function(n,s){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,t,(0,e.kq)(" more "),o,(0,e._)("p",null,[c,(0,e.Wm)(a,{to:"/code/language/js/types/object.html"},{default:(0,e.w5)((()=>[i])),_:1})])],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);