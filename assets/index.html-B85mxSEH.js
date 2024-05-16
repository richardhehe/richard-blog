import{_ as n,o as a,c as s,e as t}from"./app-e94K_zRz.js";const e={},l=t(`<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h1><h2 id="web标准以及w3c" tabindex="-1"><a class="header-anchor" href="#web标准以及w3c"><span>WEB标准以及W3C</span></a></h2><p>Web标准简单来说可以分为结构、表现、行为。</p><ul><li>结构由HTML各种标签组成，是为了页面的结构。</li><li>表现指的是CSS层叠样式表，让我们的页面结构标签具有样式</li><li>行为主要由JS组成，指的是页面和用户的交互行为</li></ul><p>W3C，是一个制定各种标准的非盈利性组织，也叫万维网联盟，标准包括HTML、CSS、ECMAScript等等，web标准的制定有很多好处，比如说：</p><ul><li>可以统一开发流程，统一使用标准化开发工具（VSCode、WebStorm、Sublime），方便多人协作</li><li>学习成本降低，只需要学习标准就行，否则就要学习各个浏览器厂商标准</li><li>跨平台，方便迁移都不同设备</li><li>降低代码维护成本</li></ul><h2 id="xml、html、xhtml的区别" tabindex="-1"><a class="header-anchor" href="#xml、html、xhtml的区别"><span>xml、html、xhtml的区别</span></a></h2><p>是三种不同的标记语言，用于描述和和组织文档结构。它们之间有以下区别：</p><ol><li>xml（可扩展标记语言）</li></ol><ul><li>用途：主要用来存储和传输数据</li><li>语法：可自定义标签和规则</li><li>解析：由应用程序根据文档的结构定义进行解析，通常使用XML解析器</li></ul><ol start="2"><li>html（超文本标记语言）</li></ol><ul><li>用途：用于Web浏览器中呈现和展示文档</li><li>语法：标签都是预定义的</li><li>解析：由浏览器解析，根据HTML规范进行文档的渲染和呈现。</li></ul><ol start="3"><li>xhtml（可扩展超文本标记语言）</li></ol><ul><li>用途：是HTML的严格、可扩展版本，符合XML规范。目标是弥补HTML的一些松散规则，使其更符合XML标准。</li><li>语法：与HTML相似，但更加严格。要求符合XML的语法规范，标签和属性名称必须小写，所有标签必须正确嵌套闭合，属性值必须用双引号括起来。</li><li>解析：同样由浏览器解析，但解析时要求更加严格，遵循XML的规范。</li></ul><h2 id="doctype的作用" tabindex="-1"><a class="header-anchor" href="#doctype的作用"><span>DOCTYPE的作用</span></a></h2><p>用于定义<code>XML/HTML/XHTML</code>文档结构的标准规范。在<code>HTML</code>中，<code>DOCTYPE</code>声明位于文档的开头，目的是告诉浏览器使用哪种<code>HTML规范</code>解析文档</p><p>DOCTYPE 如果不存在或格式不正确，大部分浏览器将开启兼容模式，以更宽松的方式解析和呈现网页，一般为怪异模式或混杂模式，这会影响到 CSS 和 JavaScript 的解析以及页面布局的呈现。</p><ul><li><p>文档类型定义： DOCTYPE声明指定了文档使用的DTD（Document Type Definition），或者是指定文档遵循的XML规范。DTD定义了文档的元素、属性、结构和规则，确保文档的正确解析和渲染。</p></li><li><p>浏览器模式： DOCTYPE声明影响浏览器的渲染模式。不同的DOCTYPE声明会触发浏览器以标准模式（standards mode）或混杂模式（quirks mode）来解析和显示页面。标准模式更符合规范，而混杂模式会尝试模拟过去某些浏览器的行为，以保持向后兼容性。</p></li><li><p>验证文档的合法性： DOCTYPE声明可以用于验证文档的结构是否符合规范。如果文档与声明的DTD不符，可能会导致解析错误或渲染问题。</p></li></ul><p>在HTML5中，推荐使用简化的DOCTYPE声明：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是因为HTML5取消了严格的DTD，而采用了一种更灵活的文档结构定义方式。使用上述声明会让文档在标准模式下解析，并使用HTML5规范进行渲染。</p><h2 id="搜索引擎优化-seo" tabindex="-1"><a class="header-anchor" href="#搜索引擎优化-seo"><span>搜索引擎优化（seo）</span></a></h2><ul><li>标签语义化（在合适的地方使用合适的标签，如主题（title），关键词（keywords））</li><li>重要内容<code>HTML</code>代码放在最前：搜索引擎抓取<code>HTML</code>顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取</li><li>非装饰性图片必须加<code>alt</code></li><li>网站做成静态页面(服务端渲染)</li></ul><h2 id="对-html-语义化的理解" tabindex="-1"><a class="header-anchor" href="#对-html-语义化的理解"><span>对 html 语义化的理解</span></a></h2><p>在合适地方的使用带有语义的标签，使页面有良好的结构，页面元素有含义</p><p><strong>优点</strong></p><ul><li>有利于SEO和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重</li><li>语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化</li></ul><h2 id="html5-有哪些更新" tabindex="-1"><a class="header-anchor" href="#html5-有哪些更新"><span>HTML5 有哪些更新</span></a></h2><p>HTML5 ≈ HTML + CSS3 + JavaScript + 浏览器API</p><ul><li>语义化标签：article、footer、header、nav、section等，更清晰地表示文档结构和内容意义</li><li>媒体标签：audio、video</li><li>本地离线存储 localStorage、sessionStorage、IndexedDB</li><li>新的API webworker, websocket, Geolocation（用于获取地理位置信息）、Drag and Drop API（用于实现拖放操作）</li><li>Canvas、SVG</li><li>input 标签新增属性：placeholder、autocomplete、autofocus、required</li><li>history API：go、forward、back、pushstate</li></ul><h2 id="如何处理html5新标签兼容问题" tabindex="-1"><a class="header-anchor" href="#如何处理html5新标签兼容问题"><span>如何处理HTML5新标签兼容问题</span></a></h2><p>主要有两种方式：</p><p>实现标签被识别：通过document.createElement(tagName)方法可以让浏览器识别新的标签，浏览器支持新标签后。还可以为新标签添加CSS样式</p><p>用JavaScript解决：使用HTML5的shim框架，在head标签中调用以下代码：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!--[if lt IE 9]&gt;
    &lt;script&gt; src=&quot;http://html5shim.googlecode.com/svn/trunk/html5.js&quot;&lt;/script&gt;
&lt;![endif]--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="src-和-href-的区别" tabindex="-1"><a class="header-anchor" href="#src-和-href-的区别"><span>src 和 href 的区别</span></a></h2><p>src 和 href 都是<strong>用来引用外部的资源</strong>，它们的区别如下：</p><ul><li><strong>src：</strong> 它通常用于img、script、video、audio这类标签，引用的外部资源会嵌入到当前标签所在位置。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。</li><li><strong>href：</strong> 常用在 a、link 等标签上，当浏览器识别到它指向的资源文件时，会并⾏下载资源，不会停⽌对当前⽂档的处理。</li></ul><h2 id="meta-标签的作用" tabindex="-1"><a class="header-anchor" href="#meta-标签的作用"><span>meta 标签的作用</span></a></h2><p><code>meta</code> 标签用来描述网页文档的属性，由 <code>name</code> 和 <code>content</code> 属性定义，比如网页的作者，网页描述，关键词等，除了 HTTP 标准固定了一些<code>name</code>作为大家使用的共识，开发者还可以自定义 name。</p><p>常用的 meta 标签：</p><p>（1）<code>charset</code>，用来描述 HTML 文档的编码类型：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2） <code>keywords</code>，页面关键词：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keywords<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>关键词<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）<code>description</code>，页面描述：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>description<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>页面描述内容<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）<code>refresh</code>，页面重定向和刷新：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>refresh<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0;url=<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）<code>viewport</code>，适配移动端，可以控制视口的大小和比例：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1, maximum-scale=1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>content</code> 参数有以下几种：</p><ul><li><code>width viewport</code> ：宽度(数值/device-width)</li><li><code>height viewport</code> ：高度(数值/device-height)</li><li><code>initial-scale</code> ：初始缩放比例</li><li><code>maximum-scale</code> ：最大缩放比例</li><li><code>minimum-scale</code> ：最小缩放比例</li><li><code>user-scalable</code> ：是否允许用户缩放(yes/no）</li></ul><p>（6）搜索引擎索引方式：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>robots<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index,follow<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>content</code> 参数有以下几种：</p><ul><li><code>all</code>：文件将被检索，且页面上的链接可以被查询；</li><li><code>none</code>：文件将不被检索，且页面上的链接不可以被查询；</li><li><code>index</code>：文件将被检索；</li><li><code>follow</code>：页面上的链接可以被查询；</li><li><code>noindex</code>：文件将不被检索；</li><li><code>nofollow</code>：页面上的链接不可以被查询。</li></ul><h2 id="img-的title和alt有什么区别" tabindex="-1"><a class="header-anchor" href="#img-的title和alt有什么区别"><span><code>&lt;img&gt;</code>的<code>title</code>和<code>alt</code>有什么区别</span></a></h2><ul><li><code>title</code>属性是在鼠标在移动到元素上的文本提示。</li><li><code>alt</code>属性是在图片不能正常显示时出现的文本提示，alt有利于SEO优化</li></ul><h2 id="web-worker的理解" tabindex="-1"><a class="header-anchor" href="#web-worker的理解"><span>web worker的理解</span></a></h2><p>一种在浏览器中运行后台任务的机制，它可以在主线程之外创建一个独立的工作线程，用于执行耗时的计算任务，并且通过 postMessage 将结果回传到主线程，而不会阻塞主线程的运行。</p><p>众所周知 JavaScript 是单线程执行的，所有任务放在一个线程上执行，只有当前一个任务执行完才能处理后一个任务，不然后面的任务只能等待，这就限制了多核计算机充分发挥&quot;的计算能力。同时在浏览器上，JavaScript 的执行通常位于主线程，这恰好与样式计算、页面布局及绘制一起，如果 JavaScript 运行时间过长，必然就会导致其他工作任务的阳塞而造成丢帧。</p><p>为此可将一些纯计算的工作迁移到 Web Worker 上处理，它为js的执行提供了多线程环境，主线程通过创建出 Worker 子线程，可以分担一部分自己的任务执行压力。在Worker 子线程上执行的任务不会干扰主线程，待其上的任务执行完成后，会把结果返回给主线程，这样的好处是让主线程可以更专注地处理 UI 交互，保证页面的使用体验流程。需要注意的是，Worker 子线程一旦创建成功就会始终执行，不会被主线程上的事件所打断这就意味着 Worker 会比较耗费资源，所以不应当过度使用，一旦任务执行完毕就应及时关闭。除此之外，在使用中还有以下几点应当注意。</p><ul><li>DOM限制:Worker 无法读取主线程所处理网页的 DOM 对象，也就无法使用document、window 和 parent 等对象，只能访问 navigator 和 location 对象。</li><li>文件读取限制:Worker 子线程无法访问本地文件系统，这就要求所加载的脚本来自网络。</li><li>通信限制:主线程和 Worker 子线程不在同一个上下文内，所以它们无法直接进行通信只能通过消息来完成。</li><li>脚本执行限制:虽然 Worker 可以通过 XMLHTTPRequest 对象发起 ajax 请求，但不能使用 alert()方法和 confirm()方法在页面弹出提示</li><li>同源限制:Worker 子线程执行的代码文件需要与主线程的代码文件同源。</li></ul><p><strong>基本用法:</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 主线程</span>
<span class="token comment">// 创建 worker</span>
<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&#39;work.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 向 worker 线程推送消息，可以是对象</span>
worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听 worker 线程发送过来的消息</span>
worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Received message &#39;</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// work.js</span>
<span class="token comment">// 子线程监听主线程的消息时间</span>
<span class="token function-variable function">onmessage</span><span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理数据.....</span>

  <span class="token comment">// 降处理后的数据返回给主线程</span>
  <span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;.....&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在子线程处理完相关任务后，需要及时关闭 Worker 子线程以节省系统资源，关闭的方式有两种:</p><ul><li>在主线程中通过调用 worker.terminate()方法来关闭</li><li>在子线程中通过调用自身全局对象中的 self.close()方法来关闭。</li></ul><p>考虑到上述关于 web worke手弱4的限制，并非所有任务都适合采用这种方式来提升性能。如果所要处理的任务必须要放在主线程上完成，则应当考虑将一个大型任务拆分为多个微任务，每个微任务处理的耗时最好在几毫秒之内，能在每帧的requestAnimationFrame 更新方法中处理完成。</p><p><strong>使用场景</strong></p><ul><li>加密解密: 端到端的加密越来越流行了，因为个人信息和敏感信息的要求越来越高。加密是相当耗时的，尤其是如果加密的数据量很大（比如，发往服务器前加密数据）</li><li>大文件上传: 计算文件的hash值</li><li>预加载数据: 你可以使用worker去提前加载和存储数据，这样你可以在需要的时候使用它们，提升速度</li><li>将耗时运算交由Web Work处理</li></ul><h2 id="websocket的理解" tabindex="-1"><a class="header-anchor" href="#websocket的理解"><span>webSocket的理解</span></a></h2><p>WebSocket 是一种在 Web 应用程序中实现双向通信的协议。它提供了一种在浏览器和服务器之间进行实时、持久的连接的机制，使得服务器可以主动向客户端推送数据，而不需要客户端通过轮询来获取更新。</p><p><strong>优点</strong></p><p>双向通信： 客户端和服务器可以同时进行数据的发送和接收，而不需要依赖于传统的请求-响应模式。</p><p>持久连接： WebSocket 的连接是持久的，一旦建立连接，它将保持活动状态，直到被显式关闭。与传统的 HTTP 连接相比，WebSocket 不需要在每个请求-响应之后重新建立连接，从而减少了额外的网络开销。</p><p>跨域通信： 不受同源策略的限制，通过 WebSocket，可以在浏览器中与不同域的服务器进行实时通信。</p><p>协议支持： WebSocket 是一种独立于传输协议的协议，可以在多种传输协议上运行，包括常见的 HTTP 和 HTTPS。它通过 HTTP 协议的升级机制从普通的 HTTP 连接升级为 WebSocket 连接。</p><p>事件驱动： WebSocket 通过事件和回调机制进行消息的发送和接收。客户端和服务器可以通过注册事件监听器来处理收到的消息，并通过回调函数来发送消息。</p><p>WebSocket 的使用场景包括但不限于：</p><ul><li>实时通信应用，如聊天应用、协作工具等。</li><li>实时股票报价和市场数据更新。</li><li>实时推送通知和提醒。</li></ul><p>需要注意的是，为了使用 WebSocket，服务器端需要支持 WebSocket 协议，而客户端需要支持 WebSocket API。在开发中，可以使用 WebSocket 的相关库或框架来简化 WebSocket 的实现和使用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 创建 WebSocket 连接</span>
<span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&#39;wss://example.com/socket&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当连接建立时触发</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;WebSocket 连接已建立&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 发送消息到服务器</span>
  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, server!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 当接收到服务器发送的消息时触发</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;收到服务器消息:&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 关闭 WebSocket 连接</span>
  socket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 当连接关闭时触发</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;WebSocket 连接已关闭&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>code<span class="token punctuation">,</span> event<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 当连接发生错误时触发</span>
socket<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;WebSocket 错误:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html5-的离线储存" tabindex="-1"><a class="header-anchor" href="#html5-的离线储存"><span>HTML5 的离线储存</span></a></h2><p>让 Web 应用能够在离线状态下继续访问和使用。这个功能是通过两个相关的 API 实现的：Application Cache（应用缓存）和 Web Storage（Web 存储）。</p><p>Application Cache（应用缓存）： 应用缓存允许开发者指定需要在离线状态下缓存的文件列表，包括 HTML、CSS、JavaScript、图像和其他资源文件。浏览器会将这些文件下载并存储在用户设备上，使得在离线状态下可以继续访问应用。开发者需要创建一个描述文件（通常是一个带有 .appcache 扩展名的文本文件），在 HTML 文档中通过 manifest 属性将其关联。然后，在页面加载时，浏览器会解析描述文件并下载列出的文件。之后，当用户在离线状态下访问应用时，浏览器会使用缓存的文件来加载应用。</p><h2 id="iframe-的优缺点" tabindex="-1"><a class="header-anchor" href="#iframe-的优缺点"><span>iframe 的优缺点</span></a></h2><p><code>&lt;iframe&gt;</code> 是 HTML 中的一个标签，用于在网页中嵌入另一个独立的文档或网页。它具有以下优点和缺点：</p><p><strong>优点：</strong></p><ul><li>分离内容和样式： 可以将外部内容（如嵌入的网页或文档）与主页面的样式和布局进行分离。这样可以更好地组织和管理内容，使得不同部分的代码相互独立，便于维护和更新。</li><li>实现代码复用： 在多个页面中重用相同的内容，避免了重复编写相同的代码。例如，可以在多个页面中嵌入相同的导航栏或广告。</li><li>安全性和隔离性： 允许将外部内容嵌入到主页面中，并提供了一定的安全性和隔离性。嵌入的内容在自己的环境中运行，与主页面的 JavaScript 和 CSS 相互隔离，从而降低了对主页面的影响和潜在的安全风险。</li></ul><p><strong>缺点：</strong></p><ul><li>性能开销：每个 <code>&lt;iframe&gt;</code> 都需要加载和渲染独立的文档或网页，这可能会导致页面加载速度变慢，并增加网络请求的数量。</li><li>SEO 不友好： 搜索引擎对于 <code>&lt;iframe&gt;</code> 中的内容的索引和排名相对较弱。由于搜索引擎主要关注主页面的内容，而不是嵌入的内容，所以 <code>&lt;iframe&gt;</code> 中的内容可能无法得到充分的搜索引擎优化。</li><li>跨域限制： 由于浏览器的同源策略限制，<code>&lt;iframe&gt;</code> 中的内容通常受到与主页面不同的安全策略。如果嵌入的内容与主页面不属于同一域，可能会受到跨域限制，导致无法进行跨域通信。</li></ul><h2 id="canvas-和-svg-的区别" tabindex="-1"><a class="header-anchor" href="#canvas-和-svg-的区别"><span>Canvas 和 SVG 的区别</span></a></h2><p>Canvas 和 SVG 都是用于在网页上绘制图形的技术</p><p><strong>区别</strong></p><p>绘图原理：</p><ul><li>Canvas 使用基于像素的绘图模型。当在 Canvas 上绘制图形时，你直接操作像素，并控制它们的位置、颜色和样式。绘图是实时的，每个像素都可以直接处理。</li><li>SVG 使用基于XML矢量的绘图模型。SVG 是一种描述性语言，你定义形状、路径和属性等，而不是直接操作像素。绘图是基于形状和属性定义的，可以缩放和变换而不会失去清晰度。</li></ul><p>图形质量：</p><ul><li>Canvas 绘制的图形是基于像素的，因此在缩放或放大时，图像可能会失真或变得模糊。Canvas 更适合于处理实时渲染和动画效果。</li><li>SVG 绘制的图形是基于矢量的，可以无损地缩放和放大，图像保持清晰度和细节。SVG 更适合于处理静态图形和需要高质量打印输出的场景。</li></ul><p>动态性：</p><ul><li>Canvas 提供了强大的 JavaScript API，可以动态地更新和修改绘制的图像。你可以通过 JavaScript 操控像素、实现动画效果和交互性。</li><li>SVG 也可以通过 JavaScript 进行操作，但修改 SVG 的元素和属性相对复杂一些。SVG 更适合于静态图形和静态展示，而不是实时的复杂动画。</li></ul><p>文档结构：</p><ul><li>Canvas 是一个空的画布，它不会保留绘制的图形和元素的结构信息。如果你需要在 Canvas 上管理复杂的图形结构，你需要自己实现相应的逻辑。</li><li>SVG 是一个基于 XML 的文档格式，它以文本形式保存绘图指令和属性信息，可以直接通过 DOM 操作修改和访问图形元素。</li></ul><p>综上所述，Canvas 适用于实时的像素级操作和动画效果，而 SVG 适用于静态图形和高质量缩放。选择使用 Canvas 还是 SVG 取决于你的具体需求和使用场景。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myCanvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 获取 Canvas 元素</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myCanvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取绘图上下文</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 绘制矩形</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// 设置填充颜色</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 绘制矩形，参数分别为 x、y、宽度、高度</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 创建了一个 200x200 像素的 SVG 画布 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 宽度为 100 像素、高度为 100 像素的红色矩形，其左上角坐标为 (50, 50) --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符集和字符集编码" tabindex="-1"><a class="header-anchor" href="#字符集和字符集编码"><span>字符集和字符集编码</span></a></h2><p>计算机只能识别二进制0和1，所以要对不同国家的字符进行编码，才能够通信，于是有了各种字符集，后来Unicode字符集统一</p><ul><li>ASCII字符集(美国)：只有英文、数字、符号等，1个字节存一个字符，首尾是0，总共可表示128个字符，对美国佬来说完全够用</li><li>GBK字符集(中国)：汉字编码宇符集，包含了2万多个汉字等字符，汉字占2个字节，英文、数宇占1个字节。GBK规定：汉字的第一个字节的第一位必项是1</li><li>Unicode字符集（统一码，也叫万国码）：Unicode是国际组织制定的，可以容纳世界上所有文字、符号的字符集。 <ul><li>UTF-32字符集编码：所有的都按照32位（4个字节）代表一个字符，占据存储空间大，通信效率低</li><li>UTF-16 是一种定长字符编码方案，使用 16 位（2 个字节）表示大部分字符</li><li>UTF-8字符集编码：采用可变编码的方案，汉字占了3个字节，英文、数宇占1个字节。 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab3532947dd145b99021759405e8526b~tplv-k3u1fbpfcp-watermark.image?" alt="WX20230608-194328@2x.png"></li></ul></li></ul><p>注意1：字符编码时使用的字符集，和解码时使用的字符集必须一致，否则会出现乱码</p><p>注意2：英文，数字一般不会乱码，因为很多字符集都兼容了ASCI编码。</p><h2 id="浏览器乱码的原因有哪些" tabindex="-1"><a class="header-anchor" href="#浏览器乱码的原因有哪些"><span>浏览器乱码的原因有哪些</span></a></h2><p>浏览器乱码通常是由以下原因导致的：</p><ul><li><p>字符编码不匹配： 当服务器返回的数据或网页的字符编码与浏览器预期的字符编码不一致时，就会出现乱码。常见的字符编码包括 UTF-8、GBK、ISO-8859-1 等，如果服务器返回的数据使用了与浏览器不匹配的字符编码，浏览器可能无法正确解析和显示文本内容，导致乱码。</p></li><li><p>错误的字符编码设置： 在 HTML 文档中，通过 <code>&lt;meta charset&gt;</code> 标签来指定文档使用的字符编码。如果该标签的设置与实际文档的字符编码不一致，浏览器会按照错误的编码进行解析，导致乱码。</p></li><li><p>字体缺失或不支持： 如果网页中使用了特殊的字符或字体，但用户的计算机上缺少该字体或浏览器不支持该字体，那么浏览器可能无法正确显示这些字符，导致乱码。</p></li><li><p>特殊字符转义问题： 在 HTML 中，一些特殊字符需要进行转义才能正确显示，例如 &lt;、&gt;、&amp; 等。如果这些特殊字符没有被正确转义，浏览器可能无法解析并显示它们，导致乱码。</p></li><li><p>文件编码错误： 当打开本地文件或服务器上的文件时，如果文件本身的编码与实际字符不匹配，或者文件被破坏或损坏，也可能导致乱码。</p></li></ul><p>为了解决乱码问题，可以尝试以下方法：</p><ul><li>确保服务器返回的数据或网页的字符编码与浏览器预期的字符编码一致，可以通过设置适当的 <code>&lt;meta charset&gt;</code> 标签或在服务器端正确配置字符编码来解决。</li><li>检查网页中特殊字符的转义是否正确，确保特殊字符被正确转义。</li><li>确保使用的字体在用户的计算机上可用或浏览器中被支持。</li><li>检查文件本身的编码，确保与实际字符一致，如果文件损坏，可以尝试重新下载或修复文件。</li><li>如果问题仍然存在，可能需要进一步检查服务器配置、文件编码或其他相关因素来解决乱码问题。</li></ul><h2 id="渐进增强和优雅降级" tabindex="-1"><a class="header-anchor" href="#渐进增强和优雅降级"><span>渐进增强和优雅降级</span></a></h2><p><strong>渐进增强</strong> ：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。</p><p><strong>优雅降级</strong>： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。</p><h2 id="img-的-srcset-属性的作用" tabindex="-1"><a class="header-anchor" href="#img-的-srcset-属性的作用"><span>img 的 srcset 属性的作⽤</span></a></h2><p>响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 srcset 属性。srcset 属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-128.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-256.png 2x<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用上面的代码，就能实现在屏幕密度为 1x 的情况下加载 image-128.png, 屏幕密度为 2x 时加载 image-256.png。</p><p>按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有 1x,2x,3x,4x 四种，如果每一个图片都设置 4 张图片，加载就会很慢。所以就有了新的 srcset 标准。代码如下：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-128.png<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-128.png 128w, image-256.png 256w, image-512.png 512w<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(max-width: 360px) 340px, 128px<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 srcset 指定图片的地址和对应的图片质量。sizes 用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。</p><p>sizes 语法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>sizes<span class="token operator">=</span><span class="token string">&quot;[media query] [length], [media query] [length] ... &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sizes 就是指默认显示 128px, 如果视区宽度大于 360px, 则显示 340px。</p>`,130),p=[l];function o(c,i){return a(),s("div",null,p)}const r=n(e,[["render",o],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/html/","title":"HTML","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"WEB标准以及W3C","slug":"web标准以及w3c","link":"#web标准以及w3c","children":[]},{"level":2,"title":"xml、html、xhtml的区别","slug":"xml、html、xhtml的区别","link":"#xml、html、xhtml的区别","children":[]},{"level":2,"title":"DOCTYPE的作用","slug":"doctype的作用","link":"#doctype的作用","children":[]},{"level":2,"title":"搜索引擎优化（seo）","slug":"搜索引擎优化-seo","link":"#搜索引擎优化-seo","children":[]},{"level":2,"title":"对 html 语义化的理解","slug":"对-html-语义化的理解","link":"#对-html-语义化的理解","children":[]},{"level":2,"title":"HTML5 有哪些更新","slug":"html5-有哪些更新","link":"#html5-有哪些更新","children":[]},{"level":2,"title":"如何处理HTML5新标签兼容问题","slug":"如何处理html5新标签兼容问题","link":"#如何处理html5新标签兼容问题","children":[]},{"level":2,"title":"src 和 href 的区别","slug":"src-和-href-的区别","link":"#src-和-href-的区别","children":[]},{"level":2,"title":"meta 标签的作用","slug":"meta-标签的作用","link":"#meta-标签的作用","children":[]},{"level":2,"title":"<img>的title和alt有什么区别","slug":"img-的title和alt有什么区别","link":"#img-的title和alt有什么区别","children":[]},{"level":2,"title":"web worker的理解","slug":"web-worker的理解","link":"#web-worker的理解","children":[]},{"level":2,"title":"webSocket的理解","slug":"websocket的理解","link":"#websocket的理解","children":[]},{"level":2,"title":"HTML5 的离线储存","slug":"html5-的离线储存","link":"#html5-的离线储存","children":[]},{"level":2,"title":"iframe 的优缺点","slug":"iframe-的优缺点","link":"#iframe-的优缺点","children":[]},{"level":2,"title":"Canvas 和 SVG 的区别","slug":"canvas-和-svg-的区别","link":"#canvas-和-svg-的区别","children":[]},{"level":2,"title":"字符集和字符集编码","slug":"字符集和字符集编码","link":"#字符集和字符集编码","children":[]},{"level":2,"title":"浏览器乱码的原因有哪些","slug":"浏览器乱码的原因有哪些","link":"#浏览器乱码的原因有哪些","children":[]},{"level":2,"title":"渐进增强和优雅降级","slug":"渐进增强和优雅降级","link":"#渐进增强和优雅降级","children":[]},{"level":2,"title":"img 的 srcset 属性的作⽤","slug":"img-的-srcset-属性的作用","link":"#img-的-srcset-属性的作用","children":[]}],"git":{"updatedTime":1712455531000,"contributors":[{"name":"zqy","email":"1324980809@qq.com","commits":2}]},"filePathRelative":"html/index.md"}');export{r as comp,d as data};