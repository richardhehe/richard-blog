import{_ as n,o as s,c as a,e}from"./app-e94K_zRz.js";const t={},p=e(`<h2 id="ref-原理" tabindex="-1"><a class="header-anchor" href="#ref-原理"><span>ref 原理</span></a></h2><p><code>ref</code>是一个函数，它接受一个内部值并返回一个响应式且可变的引用对象。这个引用对象有一个 <code>.value</code> 属性，该属性指向内部值。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 深响应式</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">?</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createRef</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 浅响应式</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">?</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createRef</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">rawValue</span><span class="token operator">:</span> unknown<span class="token punctuation">,</span> <span class="token literal-property property">shallow</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果传入的值已经是一个 ref，则直接返回它</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> rawValue
  <span class="token punctuation">}</span>
  <span class="token comment">// 否则，创建一个新的 RefImpl 实例</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RefImpl</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">,</span> shallow<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RefImpl</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 存储响应式的值。我们追踪和更新的就是_value。（这个是重点）</span>
  <span class="token keyword">private</span> <span class="token literal-property property">_value</span><span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token comment">// 用于存储原始值，即未经任何响应式处理的值。（用于对比的，这块的内容可以不看）</span>
  <span class="token keyword">private</span> <span class="token literal-property property">_rawValue</span><span class="token operator">:</span> <span class="token constant">T</span> 

  <span class="token comment">// 用于依赖跟踪的 Dep 类实例</span>
  <span class="token keyword">public</span> dep<span class="token operator">?</span><span class="token operator">:</span> Dep <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token comment">// 一个标记，表示这是一个 ref 实例</span>
  <span class="token keyword">public</span> readonly __v_isRef <span class="token operator">=</span> <span class="token boolean">true</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> readonly __v_isShallow<span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果是浅响应式，直接使用原始值，否则转换为非响应式原始值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> __v_isShallow <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token comment">// 如果是浅响应式，直接使用原始值，否则转换为响应式值</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> __v_isShallow <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    
    <span class="token comment">// toRaw 用于将响应式引用转换回原始值</span>
    <span class="token comment">// toReactive 函数用于将传入的值转换为响应式对象。对于基本数据类型，toReactive 直接返回原始值。</span>
    <span class="token comment">// 对于对象和数组，toReactive 内部会调用 reactive 来创建一个响应式代理。</span>
    <span class="token comment">// 因此，对于 ref 来说，基本数据类型的值会被 RefImpl 直接包装，而对象和数组</span>
    <span class="token comment">// 会被 reactive 转换为响应式代理，最后也会被 RefImpl 包装。</span>
    <span class="token comment">// 这样，无论是哪种类型的数据，ref 都可以提供响应式的 value 属性，</span>
    <span class="token comment">// 使得数据变化可以被 Vue 正确追踪和更新。</span>
    <span class="token comment">// export const toReactive = (value) =&gt; isObject(value) ? reactive(value) : value</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 追踪依赖，这样当 ref 的值发生变化时，依赖这个 ref 的组件或副作用函数可以重新运行。</span>
    <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token comment">// 返回存储的响应式值</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是否应该使用新值的直接形式（浅响应式或只读）</span>
    <span class="token keyword">const</span> useDirectValue <span class="token operator">=</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">||</span> <span class="token function">isShallow</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isReadonly</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
    <span class="token comment">// 如果需要，将新值转换为非响应式原始值</span>
    newVal <span class="token operator">=</span> useDirectValue <span class="token operator">?</span> newVal <span class="token operator">:</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
    <span class="token comment">// 如果新值与旧值不同，更新 _rawValue 和 _value</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> newVal
      <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> useDirectValue <span class="token operator">?</span> newVal <span class="token operator">:</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
      <span class="token comment">// 触发依赖更新</span>
      <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> DirtyLevels<span class="token punctuation">.</span>Dirty<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，ref 函数通过 new RefImpl(value) 创建了一个新的 RefImpl 实例。这个实例包含 getter 和 setter，分别用于追踪依赖和触发更新。使用 ref 可以声明任何数据类型的响应式状态，包括对象和数组。</p><p>注意，ref核心是返回响应式且可变的引用对象，而reactive核心是返回的是响应式代理，这是两者本质上的核心区别，也就导致了ref优于reactive。</p><h2 id="reactive-原理" tabindex="-1"><a class="header-anchor" href="#reactive-原理"><span>reactive 原理</span></a></h2><p>reactive 是一个函数，它接受一个对象并返回该对象的响应式代理，也就是 Proxy。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">.</span>__v_isReactive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    mutableHandlers<span class="token punctuation">,</span>
    mutableCollectionHandlers<span class="token punctuation">,</span>
    reactiveMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
  <span class="token parameter">target<span class="token punctuation">,</span>
  isReadonly<span class="token punctuation">,</span>
  baseHandlers<span class="token punctuation">,</span>
  collectionHandlers<span class="token punctuation">,</span>
  proxyMap</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  
  <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> existingProxy
  <span class="token punctuation">}</span>
  
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> baseHandlers<span class="token punctuation">)</span>
  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reactive的源码相对就简单多了，reactive 通过 new Proxy(target, baseHandlers) 创建了一个代理。这个代理会拦截对目标对象的操作，从而实现响应式。</p><p>到这里我们可以看出 ref 和 reactive 在声明数据的响应式状态上，底层原理是不一样的。ref 采用 RefImpl对象实例，reactive采用Proxy代理对象。</p>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","原理.html.vue"]]),k=JSON.parse('{"path":"/vue3/%E5%8E%9F%E7%90%86.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"ref 原理","slug":"ref-原理","link":"#ref-原理","children":[]},{"level":2,"title":"reactive 原理","slug":"reactive-原理","link":"#reactive-原理","children":[]}],"git":{"updatedTime":1711422640000,"contributors":[{"name":"zqy","email":"1324980809@qq.com","commits":1}]},"filePathRelative":"vue3/原理.md"}');export{r as comp,k as data};
