"use strict";(self.webpackChunkshimon_blog=self.webpackChunkshimon_blog||[]).push([[91900],{53093:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-59e10c5a",path:"/code/website/jQuery/event.html",title:"事件",lang:"zh-CN",frontmatter:{title:"事件",icon:"activity",date:"2019-11-04T00:00:00.000Z",category:["jQuery"],summary:"章节过时\n由于目前各浏览器 API 已经基本统一，无需使用 jQuery 绑定事件了。\n\n",head:[["meta",{property:"og:url",content:"https://shimonzhan.com/code/website/jQuery/event.html"}],["meta",{property:"og:site_name",content:"Shimon's Blog"}],["meta",{property:"og:title",content:"事件"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-19T07:13:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-11-04T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-19T07:13:07.000Z"}]]},excerpt:'<div class="custom-container tip"><p class="custom-container-title">章节过时</p>\n<p>由于目前各浏览器 API 已经基本统一，无需使用 jQuery 绑定事件了。</p>\n</div>\n',headers:[{level:2,title:"鼠标事件",slug:"鼠标事件",children:[]},{level:2,title:"键盘事件",slug:"键盘事件",children:[]},{level:2,title:"其他事件",slug:"其他事件",children:[]},{level:2,title:"事件参数",slug:"事件参数",children:[]},{level:2,title:"取消绑定",slug:"取消绑定",children:[]},{level:2,title:"事件触发条件",slug:"事件触发条件",children:[]},{level:2,title:"浏览器安全限制",slug:"浏览器安全限制",children:[]}],git:{createdTime:1650352387e3,updatedTime:1650352387e3,contributors:[{name:"ShimonZhan",email:"942890268@qq.com",commits:1}]},readingTime:{minutes:5.09,words:1527},filePathRelative:"code/website/jQuery/event.md"}},99634:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(66252);const p=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"章节过时"),(0,t._)("p",null,"由于目前各浏览器 API 已经基本统一，无需使用 jQuery 绑定事件了。")],-1),e=(0,t.uE)('<p>因为 JavaScript 在浏览器中以单线程模式运行，页面加载后，一旦页面上所有的 JavaScript 代码被执行完后，就只能依赖触发事件来执行 JavaScript 代码。</p><p>浏览器在接收到用户的鼠标或键盘输入后，会自动在对应的 DOM 节点上触发相应的事件。如果该节点已经绑定了对应的 JavaScript 处理函数，该函数就会自动调用。</p><p>由于不同的浏览器绑定事件的代码都不太一样，所以用 jQuery 来写代码，就屏蔽了不同浏览器的差异，我们总是编写相同的代码。</p><p>举个例子，假设要在用户点击了超链接时弹出提示框，我们用 jQuery 这样绑定一个 <code>click</code> 事件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* HTML:\n *\n * &lt;a id=&quot;test-link&quot; href=&quot;#0&quot;&gt;点我试试&lt;/a&gt;\n *\n */</span>\n\n<span class="token comment">// 获取超链接的jQuery对象:</span>\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-link&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\na<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>on</code> 方法用来绑定一个事件，我们需要传入事件名称和对应的处理函数。</p><p>另一种更简化的写法是直接调用 <code>click()</code> 方法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两者完全等价。我们通常用后面的写法。</p><p>jQuery 能够绑定的事件主要包括:</p><h2 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h2><ul><li><code>click</code>: 鼠标单击时触发；</li><li><code>dblclick</code>: 鼠标双击时触发；</li><li><code>mouseenter</code>: 鼠标进入时触发；</li><li><code>mouseleave</code>: 鼠标移出时触发；</li><li><code>mousemove</code>: 鼠标在 DOM 内部移动时触发；</li><li><code>hover</code>: 鼠标进入和退出时触发两个函数，相当于 <code>mouseenter</code> 加上 <code>mouseleave</code>。</li></ul><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2><p>键盘事件仅作用在当前焦点的 DOM 上，通常是 <code>&lt;input&gt;</code> 和 <code>&lt;textarea&gt;</code>。</p><ul><li><code>keydown</code>: 键盘按下时触发；</li><li><code>keyup</code>: 键盘松开时触发；</li><li><code>keypress</code>: 按一次键后触发。</li></ul><h2 id="其他事件" tabindex="-1"><a class="header-anchor" href="#其他事件" aria-hidden="true">#</a> 其他事件</h2><ul><li><code>focus</code>: 当 DOM 获得焦点时触发；</li><li><code>blur</code>: 当 DOM 失去焦点时触发；</li><li><code>change</code>: 当 <code>&lt;input&gt;</code>、<code>&lt;select&gt;</code> 或 <code>&lt;textarea&gt;</code> 的内容改变时触发；</li><li><code>submit</code>: 当 <code>&lt;form&gt;</code> 提交时触发；</li><li><code>ready</code>: 当页面被载入并且 DOM 树完成初始化后触发。</li></ul><p>其中，<code>ready</code> 仅作用于 document 对象。由于 ready 事件在 DOM 完成初始化后触发，且只触发一次，所以非常适合用来写其他的初始化代码。假设我们想给一个 <code>&lt;form&gt;</code> 表单绑定 submit 事件，下面的代码没有预期的效果:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// 代码有误:</span>\n      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#testForm).on(&#39;</span>submit&#39;<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;submit!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 JavaScript 在此执行的时候，<code>&lt;form&gt;</code> 尚未载入浏览器，所以 <code>$(&#39;#testForm)</code> 返回 <code>[]</code>，并没有绑定事件到任何 DOM 上。</p><p>所以我们自己的初始化代码必须放到 document 对象的 <code>ready</code> 事件中，保证 DOM 已完成初始化:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#testForm).on(&#39;</span>submit&#39;<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;submit!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testForm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样写就没有问题了。因为相关代码会在 DOM 树初始化后再执行。</p><p>由于 <code>ready</code> 事件使用非常普遍，所以可以这样简化:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// on(&#39;submit&#39;, function)也可以简化:</span>\n    <span class="token function">$</span><span class="token punctuation">(</span>&#39;#testForm<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;submit!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至还可以再简化为:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// init...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的这种写法最为常见。如果您遇到 <code>$(function () {...})</code> 的形式，牢记这是 document 对象的 <code>ready</code> 事件处理函数。</p><p>完全可以反复绑定事件处理函数，它们会依次执行:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;init A...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;init B...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;init C...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件参数" tabindex="-1"><a class="header-anchor" href="#事件参数" aria-hidden="true">#</a> 事件参数</h2><p>有些事件，如 <code>mousemove</code> 和 <code>keypress</code>，我们需要获取鼠标位置和按键的值，否则监听这些事件就没什么意义了。所有事件都会传入 Event 对象作为参数，可以从 Event 对象上获取到更多的信息:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testMouseMoveDiv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mousemove</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testMouseMoveSpan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;pageX = &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>pageX <span class="token operator">+</span> <span class="token string">&quot;, pageY = &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消绑定" tabindex="-1"><a class="header-anchor" href="#取消绑定" aria-hidden="true">#</a> 取消绑定</h2><p>一个已被绑定的事件可以解除绑定，通过 <code>off(&#39;click&#39;, function)</code> 实现:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\na<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绑定事件</span>\n\n<span class="token comment">// 10秒钟后解除绑定:</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    a<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> hello<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token literal-property property">需要特别注意的是，下面这种写法是无效的</span><span class="token operator">:</span>\n\n<span class="token comment">// 绑定事件:</span>\na<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 解除绑定:</span>\na<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为两个匿名函数虽然长得一模一样，但是它们是两个不同的函数对象，<code>off(&#39;click&#39;, function () {...})</code> 无法移除已绑定的第一个匿名函数。</p><p>为了实现移除效果，可以使用 <code>off(&#39;click&#39;)</code> 一次性移除已绑定的 click 事件的所有处理函数。</p><p>同理，无参数调用 <code>off()</code> 一次性移除已绑定的所有类型的事件处理函数。</p><h2 id="事件触发条件" tabindex="-1"><a class="header-anchor" href="#事件触发条件" aria-hidden="true">#</a> 事件触发条件</h2><p>一个需要注意的问题是，事件的触发总是由用户操作引发的。例如，我们监控文本框的内容改动:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ninput<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;changed...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户在文本框中输入时，就会触发 <code>change</code> 事件。但是，如果用 JavaScript 代码去改动文本框的值，将不会触发 <code>change</code> 事件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ninput<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;change it!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 无法触发change事件</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些时候，我们希望用代码触发 <code>change</code> 事件，可以直接调用无参数的 <code>change()</code> 方法来触发该事件:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ninput<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;change it!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ninput<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发change事件</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>input.change()</code> 相当于 <code>input.trigger(&#39;change&#39;)</code>，它是 <code>trigger()</code> 方法的简写。</p><p>为什么我们希望手动触发一个事件呢? 如果不这么做，很多时候，我们就得写两份一模一样的代码。</p><h2 id="浏览器安全限制" tabindex="-1"><a class="header-anchor" href="#浏览器安全限制" aria-hidden="true">#</a> 浏览器安全限制</h2><p>在浏览器中，有些 JavaScript 代码只有在用户触发下才能执行，例如，<code>window.open()</code> 函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 无法弹出新窗口，将被浏览器屏蔽:</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些 “敏感代码” 只能由用户操作来触发:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> button1 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testPopupButton1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> button2 <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#testPopupButton2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">popupTestWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nbutton1<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">popupTestWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbutton2<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 不立刻执行 popupTestWindow()，100 毫秒后执行:</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span>popupTestWindow<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户点击 button1 时，<code>click</code> 事件被触发，由于 <code>popupTestWindow()</code> 在 <code>click</code> 事件处理函数内执行，这是浏览器允许的，而 button2 的 <code>click</code> 事件并未立刻执行 <code>popupTestWindow()</code>，延迟执行的 <code>popupTestWindow()</code> 将被浏览器拦截。</p>',54),c={},o=(0,a(83744).Z)(c,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t.kq)(" more "),e],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);