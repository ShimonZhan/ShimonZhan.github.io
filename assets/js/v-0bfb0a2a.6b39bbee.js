"use strict";(self.webpackChunkshimon_blog=self.webpackChunkshimon_blog||[]).push([[69738],{55549:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-0bfb0a2a",path:"/code/language/js/guide/array.html",title:"数组",lang:"zh-CN",frontmatter:{title:"数组",icon:"array",date:"2019-09-16T00:00:00.000Z",category:["JavaScript"],tag:["快速上手"],summary:"本文对 JavaScript 中数组的创建、访问、操作进行了简要的介绍。\n",head:[["meta",{property:"og:url",content:"https://shimonzhan.com/code/language/js/guide/array.html"}],["meta",{property:"og:site_name",content:"Shimon's Blog"}],["meta",{property:"og:title",content:"数组"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-19T07:13:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"快速上手"}],["meta",{property:"article:published_time",content:"2019-09-16T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-19T07:13:07.000Z"}]]},excerpt:"<p>本文对 JavaScript 中数组的创建、访问、操作进行了简要的介绍。</p>\n",headers:[{level:2,title:"数组的创建",slug:"数组的创建",children:[]},{level:2,title:"访问元素",slug:"访问元素",children:[]},{level:2,title:"数组的长度",slug:"数组的长度",children:[]},{level:2,title:"操作数组",slug:"操作数组",children:[{level:3,title:"indexOf",slug:"indexof",children:[]},{level:3,title:"slice",slug:"slice",children:[]},{level:3,title:"push 和 pop",slug:"push-和-pop",children:[]},{level:3,title:"unshift 和 shift",slug:"unshift-和-shift",children:[]},{level:3,title:"sort",slug:"sort",children:[]},{level:3,title:"reverse",slug:"reverse",children:[]},{level:3,title:"splice",slug:"splice",children:[]},{level:3,title:"concat",slug:"concat",children:[]},{level:3,title:"join",slug:"join",children:[]}]},{level:2,title:"多维数组",slug:"多维数组",children:[]},{level:2,title:"数组小结",slug:"数组小结",children:[]},{level:2,title:"更多介绍",slug:"更多介绍",children:[]}],git:{createdTime:1650352387e3,updatedTime:1650352387e3,contributors:[{name:"ShimonZhan",email:"942890268@qq.com",commits:1}]},readingTime:{minutes:5.25,words:1576},filePathRelative:"code/language/js/guide/array.md"}},51179:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(66252);const p=(0,t._)("p",null,"本文对 JavaScript 中数组的创建、访问、操作进行了简要的介绍。",-1),e=(0,t.uE)('<h2 id="数组的创建" tabindex="-1"><a class="header-anchor" href="#数组的创建" aria-hidden="true">#</a> 数组的创建</h2><p>第一种方法是直接表示:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述数组包含 6 个元素。数组用 <code>[]</code> 表示，元素之间用 <code>,</code> 分隔。</p><p>另一种创建数组的方法是通过 <code>Array()</code> 函数实现:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建了数组[1, 2, 3]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然而，出于代码的可读性考虑，强烈建议直接使用 <code>[]</code>。</p><h2 id="访问元素" tabindex="-1"><a class="header-anchor" href="#访问元素" aria-hidden="true">#</a> 访问元素</h2><p>数组的元素可以通过索引来访问。请注意，索引的起始值为 <code>0</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回索引为0的元素，即1</span>\narr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回索引为5的元素，即true</span>\narr<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 索引超出了范围，返回undefined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 的 Array 可以包含任意数据类型，并通过索引来访问每个元素。</p><h2 id="数组的长度" tabindex="-1"><a class="header-anchor" href="#数组的长度" aria-hidden="true">#</a> 数组的长度</h2><p>要取得 Array 的长度，直接访问 <code>length</code> 属性:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 6</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，直接给 Array 的 <code>length</code> 赋一个新的值会导致 Array 大小的变化:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 3</span>\narr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// arr 变为 [1, 2, 3, undefined, undefined, undefined]</span>\narr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// arr 变为 [1, 2]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array 可以通过索引把对应的元素修改为新的值，因此，对 Array 的索引进行赋值会直接修改这个 Array:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// arr 现在变为 [&#39;A&#39;, 99, &#39;C&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果通过索引赋值时，索引超过了范围，同样会引起 Array 大小的变化:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;x&quot;</span><span class="token punctuation">;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// arr 变为 [1, 2, 3, undefined, undefined, &#39;x&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript 的 Array 却不会有任何错误。在编写代码时，不建议直接修改 Array 的大小，访问索引时要确保索引不会越界。</p></div><h2 id="操作数组" tabindex="-1"><a class="header-anchor" href="#操作数组" aria-hidden="true">#</a> 操作数组</h2><h3 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf</h3><p>与 String 类似，Arra。也可以通过 <code>indexOf()</code> 来搜索一个指定的元素第一次出现的位置:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;xyz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 元素 10 的索引为 0</span>\narr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 元素 20 的索引为 1</span>\narr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 元素 30 没有找到，返回 -1</span>\narr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 元素 &#39;30&#39; 的索引为 2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>数字 <code>30</code> 和字符串 <code>&#39;30&#39;</code> 是不同的元素。</p></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice</h3><p><code>slice()</code> 就是对应 String 的 <code>substring()</code> 版本，它截取 Array 的部分元素，然后返回一个新的 Array:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;G&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从索引 0 开始，到索引 3 结束，但不包括索引 3: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>\narr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从索引 3 开始到结束: [&#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意到 <code>slice()</code> 的起止参数包括开始索引，不包括结束索引。</p><p>如果不给 <code>slice()</code> 传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个 Array:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;G&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> aCopy <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\naCopy<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;]</span>\naCopy <span class="token operator">===</span> arr<span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="push-和-pop" tabindex="-1"><a class="header-anchor" href="#push-和-pop" aria-hidden="true">#</a> push 和 pop</h3><p><code>push()</code> 向 Array 的末尾添加若干元素， <code>pop()</code> 则 Array 的最后一个元素删除掉:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 Array 新的长度: 4</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [1, 2, &#39;A&#39;, &#39;B&#39;]</span>\narr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pop() 返回 &#39;B&#39;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [1, 2, &#39;A&#39;]</span>\narr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 连续 pop 3次</span>\narr<span class="token punctuation">;</span> <span class="token comment">// []</span>\narr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空数组继续 pop 不会报错，而是返回 undefined</span>\narr<span class="token punctuation">;</span> <span class="token comment">// []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unshift-和-shift" tabindex="-1"><a class="header-anchor" href="#unshift-和-shift" aria-hidden="true">#</a> unshift 和 shift</h3><p>如果要往 Array 的头部添加若干元素，使用 <code>unshift()</code> 方法， <code>shift()</code> 方法则把 Array 的第一个元素删掉:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 Array 新的长度: 4</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, 1, 2]</span>\narr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;A&#39;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;B&#39;, 1, 2]</span>\n\narr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 连续 shift 3次</span>\n\narr<span class="token punctuation">;</span> <span class="token comment">// []</span>\narr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 空数组继续 shift 不会报错，而是返回 undefined</span>\narr<span class="token punctuation">;</span> <span class="token comment">// []</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h3><p><code>sort()</code> 可以对当前 Array 进行排序，它会直接修改当前 Array 的元素位置，直接调用时，按照默认顺序排序:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组页可以按照自己指定的顺序排序，将在后面的函数中讲到。</p><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h3><p><code>reverse()</code> 把整个 Array 的元素给掉个个，也就是反转:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;three&#39;, &#39;two&#39;, &#39;one&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="splice" tabindex="-1"><a class="header-anchor" href="#splice" aria-hidden="true">#</a> splice</h3><p><code>splice()</code> 方法是修改 Array 的 “万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yahoo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AOL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Excite&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 从索引 2 开始删 3 个元素,然后再添加 2 个元素:</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Facebook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回删除的元素 [&#39;Yahoo&#39;, &#39;AOL&#39;, &#39;Excite&#39;]</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Google&#39;, &#39;Facebook&#39;, &#39;Oracle&#39;]</span>\n\n<span class="token comment">// 只删除,不添加:</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Google&#39;, &#39;Facebook&#39;]</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Oracle&#39;]</span>\n\n<span class="token comment">// 只添加,不删除:</span>\narr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Facebook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回[],因为没有删除任何元素</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Google&#39;, &#39;Facebook&#39;, &#39;Oracle&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat" aria-hidden="true">#</a> concat</h3><p><code>concat()</code> 方法把当前的 Array 和另一个 Array 连接起来，并返回一个新的 Array:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> added <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nadded<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, 1, 2, 3]</span>\narr<span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>需要留意的是: <code>concat()</code> 方法并没有修改当前 Array，而是返回了一个新的 Array。</p></div><p>实际上， <code>concat()</code> 方法可以接收任意个元素和 Array，并且自动把 Array 拆开，然后全部添加到新的 Array 里:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, 1, 2, 3, 4]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join</h3><p><code>join()</code> 方法是一个非常实用的方法，它把当前 Array 的每个元素都用指定的字符串连接起来，然后返回连接后的字符串:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\narr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;A-B-C-1-2-3&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>若 Array 的元素不是字符串，将自动转换为字符串后再连接。</p></div><h2 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h2><p>如果数组的某个元素又是一个 Array，则可以形成多维数组，例如:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述 Array 包含 3 个元素，其中头两个元素本身也是 Array。</p><h2 id="数组小结" tabindex="-1"><a class="header-anchor" href="#数组小结" aria-hidden="true">#</a> 数组小结</h2><p>Array 提供了一种顺序存储一组元素的功能，并可以按索引来读写。</p><h2 id="更多介绍" tabindex="-1"><a class="header-anchor" href="#更多介绍" aria-hidden="true">#</a> 更多介绍</h2>',63),o=(0,t.Uk)("更多关于数组的详情参见 "),c=(0,t.Uk)("数据结构 / 数组"),i={},u=(0,a(83744).Z)(i,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t.kq)(" more "),e,(0,t._)("p",null,[o,(0,t.Wm)(a,{to:"/code/language/js/types/array.html"},{default:(0,t.w5)((()=>[c])),_:1})])],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);