"use strict";(self.webpackChunkshimon_blog=self.webpackChunkshimon_blog||[]).push([[77716],{94775:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-2ef83302",path:"/code/website/html/intro/svg.html",title:"SVG",lang:"zh-CN",frontmatter:{title:"SVG",icon:"svg",date:"2019-09-02T00:00:00.000Z",category:["HTML"],summary:"矢量图形 在网上，您会和两种类型的图片打交道 — 位图和矢量图: 位图使用像素网格来定义。; 一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.) 矢量图使用算法来定义。; 一个矢量图文件包含了图形和路径的定义，电脑可以根据这些",head:[["meta",{property:"og:url",content:"https://shimonzhan.com/code/website/html/intro/svg.html"}],["meta",{property:"og:site_name",content:"Shimon's Blog"}],["meta",{property:"og:title",content:"SVG"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-19T07:13:07.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-09-02T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-19T07:13:07.000Z"}]]},excerpt:"",headers:[{level:2,title:"矢量图形",slug:"矢量图形",children:[]},{level:2,title:"简介",slug:"简介",children:[]},{level:2,title:"添加到页面",slug:"添加到页面",children:[{level:3,title:"<img>",slug:"img",children:[]},{level:3,title:"兼容",slug:"兼容",children:[]},{level:3,title:"HTML",slug:"html",children:[]}]}],git:{createdTime:1650352387e3,updatedTime:1650352387e3,contributors:[{name:"ShimonZhan",email:"942890268@qq.com",commits:1}]},readingTime:{minutes:4.84,words:1451},filePathRelative:"code/website/html/intro/svg.md"}},29948:(n,a,s)=>{s.r(a),s.d(a,{default:()=>_});var t=s(66252);const e=(0,t.uE)('<h2 id="矢量图形" tabindex="-1"><a class="header-anchor" href="#矢量图形" aria-hidden="true">#</a> 矢量图形</h2><p>在网上，您会和两种类型的图片打交道 — 位图和矢量图:</p><ul><li><p>位图使用像素网格来定义。</p><p>一个位图文件精确得包含了每个像素的位置和它的色彩信息。流行的位图格式包括 Bitmap (.bmp), PNG (.png), JPEG (.jpg), and GIF (.gif.)</p></li><li><p>矢量图使用算法来定义。</p><p>一个矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。 SVG 格式可以让我们创造用于 Web 的精彩的矢量图形。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>矢量图形相较于同样的位图，通常拥有更小的体积，因为它们仅需储存少量的算法，而不是逐个储存每个像素的信息。</p></div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>SVG 是用于描述矢量图像的 XML 语言。它基本上是像 HTML 一样的标记，只是您有许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。 SVG 用于标记图形，而不是内容。您可以使用一些元素来创建简单图形，如 <code>&lt;circle&gt;</code> 和 <code>&lt;rect&gt;</code>。更高级的 SVG 功能包括 <code>&lt;feColorMatrix&gt;</code>(使用变换矩阵转换颜色)<code>&lt;animate&gt;</code> (矢量图形的动画部分)和 <code>&lt;mask&gt;</code>(在图像顶部应用模板)。</p>',6),l=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("svg")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"version"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("1.1"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"baseProfile"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("full"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"width"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("300"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"height"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("200"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"xmlns"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("http://www.w3.org/2000/svg"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("rect")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"width"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"height"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"fill"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("black"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("circle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"cx"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("150"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"cy"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"r"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("90"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"fill"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("blue"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("svg")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),c=(0,t.uE)('<p>从上面的例子可以看出，SVG 很容易人工编码。您可以在文本编辑器中手动编写简单的 SVG，但是对于复杂的图像，这就变得非常困难。</p><p>为了创建 SVG 图像，大多数人使用矢量图形编辑器，如 Inkscape 或 Illustrator。这些软件包允许您使用各种图形工具创建各种插图，并创建照片的近似值(例如 Inkscape 的跟踪位图功能)。</p><p>SVG 除了迄今为止所描述的以外还有其他优点:</p><ul><li>矢量图像中的文本仍然可访问(这也有利于 SEO)。</li><li>SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过 CSS 或通过 JavaScript 编写的样式的元素。</li></ul><p>SVG 也确实有一些缺点:</p><ul><li>SVG 非常容易变得复杂，这意味着文件大小会增加; 复杂的 SVG 也会在浏览器中占用很长的处理时间。</li><li>SVG 可能比栅格图像更难创建，具体取决于您尝试创建哪种图像。</li><li>旧版浏览器不支持 SVG，(非主要的原因，IE 8 及更低版本，Android 2.3 及更低版本)。</li></ul><p>由于上述原因，光栅图形更适合照片那样复杂精密的图像。</p><h2 id="添加到页面" tabindex="-1"><a class="header-anchor" href="#添加到页面" aria-hidden="true">#</a> 添加到页面</h2><h3 id="img" tabindex="-1"><a class="header-anchor" href="#img" aria-hidden="true">#</a> <code>&lt;img&gt;</code></h3><p>要通过 <code>&lt;img&gt;</code> 元素嵌入 SVG，您只需要按照预期的方式在 <code>src</code> 属性中引用它。您将需要一个 <code>height</code> 或 <code>width</code> 属性。</p>',10),o=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("img")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/assets/img/vuepress-hope-logo.svg"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"alt"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("vuepress-theme-hope"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"height"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("87px"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"width"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100px"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),p=(0,t.uE)('<p><strong>优点</strong>:</p><ul><li>快速，熟悉的图像语法与 <code>alt</code> 属性中提供的内置文本等效。</li><li>可以通过在 <code>&lt;a&gt;</code> 元素嵌套 <code>&lt;img&gt;</code>，使图像轻松地成为超链接。</li></ul><p><strong>缺点</strong>:</p><ul><li>无法使用 JavaScript 操作图像。</li><li>如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。 (从 SVG 文件调用的外部样式表不起作用)</li><li>不能用 CSS 伪类来重设图像样式 (如 <code>:focus</code>)。</li></ul><h3 id="兼容" tabindex="-1"><a class="header-anchor" href="#兼容" aria-hidden="true">#</a> 兼容</h3><p>对于不支持 SVG (IE 8 及更低版本，Android 2.3 及更低版本) 的浏览器，您可以从 <code>src</code> 属性引用 PNG 或 JPG，并使用 <code>srcset</code> 属性来引用 SVG。 在这种情况下，支持的浏览器将加载 SVG，而较旧的浏览器将加载 PNG:</p>',6),i=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("img")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/assets/img/vuepress-hope-logo.png"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"alt"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("vuepress-theme-hope"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"srcset"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/assets/img/vuepress-hope-logo.svg"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token attr-name"},"width"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100px"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),u=(0,t.uE)('<p>您还可以使用 SVG 作为 CSS 背景图像，如下所示。 在下面的代码中，旧版浏览器会坚持他们理解的 PNG，而较新的浏览器将加载 SVG:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;fallback.png&quot;</span><span class="token punctuation">)</span></span> no-repeat center<span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;image.svg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>像上面描述的 <code>&lt;img&gt;</code> 方法一样，使用 CSS 背景图像插入 SVG 意味着它不能被 JavaScript 操作，并且也受到相同的 CSS 限制。</p><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3><p>您可以直接将 SVG 代码插入 HTML 文档中，这称为内联 SVG。确保您的 SVG 代码在 <code>&lt;svg&gt;&lt;/svg&gt;</code> 标签中(不要在外面添加任何内容)。</p>',5),r=(0,t._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("svg")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"width"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("300"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"height"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("200"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("rect")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"width"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"height"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"fill"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("green"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"/>")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("svg")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"}),(0,t._)("div",{class:"line-number"})])],-1),k=(0,t.uE)('<p><strong>优点</strong>:</p><ul><li>将 SVG 内联减少 HTTP 请求，可以减少加载时间。</li><li>您可以为 SVG 元素分配 class 和 id，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。 实际上，您可以使用任何 SVG 外观属性 作为 CSS 属性。</li><li>内联 SVG 是唯一可以让您在 SVG 图像上使用 CSS 交互(如 <code>:focus</code>)和 CSS 动画的方法(即使在常规样式表中)。</li><li>您可以通过将 SVG 标记包在 <code>&lt;a&gt;</code> 元素中，使其成为超链接。</li></ul><p><strong>缺点</strong>:</p><ul><li>这种方法只适用于在一个地方使用的 SVG。多次使用会导致资源密集型维护(resource-intensive maintenance)。</li><li>额外的 SVG 代码会增加 HTML 文件的大小。</li><li>浏览器不能像缓存普通图片一样缓存内联 SVG。</li><li>您可能会在 <code>&lt;foreignObject&gt;</code> 元素中包含回退，但支持 SVG 的浏览器仍然会下载任何后备图像。您需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。</li></ul><div class="custom-container tip"><p class="custom-container-title">总结</p><p>在 2020 年，显然内联 SVG 更加适合。</p></div>',5),d={},_=(0,s(83744).Z)(d,[["render",function(n,a){const s=(0,t.up)("CodeDemo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t.Wm)(s,{id:"code-demo-5b85e8a0",title:"%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%20SVG",code:"%7B%22html%22%3A%22%3Csvg%5Cn%20%20version%3D%5C%221.1%5C%22%5Cn%20%20baseProfile%3D%5C%22full%5C%22%5Cn%20%20width%3D%5C%22300%5C%22%5Cn%20%20height%3D%5C%22200%5C%22%5Cn%20%20xmlns%3D%5C%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%5C%22%5Cn%3E%5Cn%20%20%3Crect%20width%3D%5C%22100%25%5C%22%20height%3D%5C%22100%25%5C%22%20fill%3D%5C%22black%5C%22%20%2F%3E%5Cn%20%20%3Ccircle%20cx%3D%5C%22150%5C%22%20cy%3D%5C%22100%5C%22%20r%3D%5C%2290%5C%22%20fill%3D%5C%22blue%5C%22%20%2F%3E%5Cn%3C%2Fsvg%3E%5Cn%22%7D"},{default:(0,t.w5)((()=>[l])),_:1}),c,(0,t.Wm)(s,{id:"code-demo-6eb7815a",title:"%E4%BD%BF%E7%94%A8%20img%20%E6%8F%92%E5%85%A5%20SVG",code:"%7B%22html%22%3A%22%3Cimg%5Cn%20%20src%3D%5C%22%2Fassets%2Fimg%2Fvuepress-hope-logo.svg%5C%22%5Cn%20%20alt%3D%5C%22vuepress-theme-hope%5C%22%5Cn%20%20height%3D%5C%2287px%5C%22%5Cn%20%20width%3D%5C%22100px%5C%22%5Cn%2F%3E%5Cn%22%7D"},{default:(0,t.w5)((()=>[o])),_:1}),p,(0,t.Wm)(s,{id:"code-demo-784845cc",title:"%E5%85%BC%E5%AE%B9%E4%B8%8A%E5%8F%A4%E6%B5%8F%E8%A7%88%E5%99%A8",code:"%7B%22html%22%3A%22%3Cimg%5Cn%20%20src%3D%5C%22%2Fassets%2Fimg%2Fvuepress-hope-logo.png%5C%22%5Cn%20%20alt%3D%5C%22vuepress-theme-hope%5C%22%5Cn%20%20srcset%3D%5C%22%2Fassets%2Fimg%2Fvuepress-hope-logo.svg%5C%22%5Cn%20%20width%3D%5C%22100px%5C%22%5Cn%2F%3E%5Cn%22%7D"},{default:(0,t.w5)((()=>[i])),_:1}),u,(0,t.Wm)(s,{id:"code-demo-1403aad8",title:"%E6%A1%88%E4%BE%8B",code:"%7B%22html%22%3A%22%3Csvg%20width%3D%5C%22300%5C%22%20height%3D%5C%22200%5C%22%3E%5Cn%20%20%3Crect%20width%3D%5C%22100%25%5C%22%20height%3D%5C%22100%25%5C%22%20fill%3D%5C%22green%5C%22%20%2F%3E%5Cn%3C%2Fsvg%3E%5Cn%22%7D"},{default:(0,t.w5)((()=>[r])),_:1}),k],64)}]])},83744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);