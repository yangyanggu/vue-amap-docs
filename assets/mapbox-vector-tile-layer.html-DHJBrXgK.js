import{_ as o,r as p,o as c,c as l,a as n,b as a,d as s,w as r,e as i}from"./app-BIv4BGsj.js";const u={},d=n("h1",{id:"矢量瓦片块-amap-mapboxvectortilelayer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#矢量瓦片块-amap-mapboxvectortilelayer"},[n("span",null,"矢量瓦片块 (AMap.MapboxVectorTileLayer)")])],-1),E={href:"https://geohub.amap.com/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://lbs.amap.com/demo/jsapi-v2/example/thirdlayer/mvt-layer",target:"_blank",rel:"noopener noreferrer"},k=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"提示"),n("p",null,[a("来源 "),n("code",null,"@vuemap/vue-amap"),a(" 组件库")])],-1),D=n("h2",{id:"基础示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础示例"},[n("span",null,"基础示例")])],-1),F=n("p",null,"examples/layer/standard/mapbox-vector",-1),b=i(`<h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性"><span>静态属性</span></a></h2><p>仅且可以初始化配置，不支持响应式。</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>MVT 数据的链接地址</td></tr><tr><td>dataZooms</td><td>Array</td><td>瓦片数据等级范围，超过范围会使用最大/最小等级的数据，默认范围 [2,18]</td></tr><tr><td>extraOptions</td><td>Object</td><td>额外扩展属性，会直接将属性拷贝到初始化的options中，当key与props内的一样时会被props覆盖</td></tr></tbody></table><h2 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性"><span>动态属性</span></a></h2><p>支持响应式。</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>zooms</td><td>Array</td><td>支持的缩放级别范围，默认范围 [2,22]</td></tr><tr><td>visible</td><td>Boolean</td><td>是否显示，默认 true</td></tr><tr><td>zIndex</td><td>Number</td><td>图层叠加的顺序值，1 表示最底层。默认 zIndex：4</td></tr><tr><td>opacity</td><td>Number</td><td>透明度，默认 1</td></tr><tr><td>styles</td><td>Object</td><td>样式</td></tr></tbody></table><h3 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>styles</span></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>polygon</td><td>Object</td><td>面类型的样式</td></tr><tr><td>line</td><td>Object</td><td>线类型数据的样式</td></tr><tr><td>point</td><td>Object</td><td>点类型数据的样式</td></tr></tbody></table><h4 id="polygon-面类型的样式" tabindex="-1"><a class="header-anchor" href="#polygon-面类型的样式"><span>polygon 面类型的样式</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td>String, Function</td><td>面填充颜色</td></tr><tr><td>borderWidth</td><td>Number, Function</td><td>描边宽度</td></tr><tr><td>dash</td><td>Array[Number], Function</td><td>描边线的虚线配置，例如： [10,5,8,5]</td></tr><tr><td>borderColor</td><td>String, Function</td><td>描边颜色</td></tr><tr><td>injection</td><td>Array[any]</td><td>其他属性值中对于函数形式的值，假如需要获取外部变量，要使用数组的形式传入，便于在函数内部访问外部变量。请看下面的示例。</td></tr><tr><td>visible</td><td>Boolean, Function</td><td>是否显示</td></tr></tbody></table><h4 id="line-线类型数据的样式" tabindex="-1"><a class="header-anchor" href="#line-线类型数据的样式"><span>line 线类型数据的样式</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td>String, Function</td><td>线填充颜色</td></tr><tr><td>lineWidth</td><td>Number, Function</td><td>宽度</td></tr><tr><td>dash</td><td>Array[Number], Function</td><td>描边线的虚线配置，例如： [10,5,8,5]</td></tr><tr><td>injection</td><td>Array[any]</td><td>其他属性值中对于函数形式的值，假如需要获取外部变量，要使用数组的形式传入，便于在函数内部访问外部变量。请看下面的示例。</td></tr><tr><td>visible</td><td>Boolean, Function</td><td>是否显示</td></tr></tbody></table><h4 id="point-点类型数据的样式" tabindex="-1"><a class="header-anchor" href="#point-点类型数据的样式"><span>point 点类型数据的样式</span></a></h4><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>radius</td><td>String, Function</td><td>圆点的半径，单位像素</td></tr><tr><td>color</td><td>String, Function</td><td>圆的填充颜色</td></tr><tr><td>borderWidth</td><td>Number, Function</td><td>描边宽度</td></tr><tr><td>dash</td><td>Array[Number], Function</td><td>描边线的虚线配置，例如： [10,5,8,5]</td></tr><tr><td>borderColor</td><td>String, Function</td><td>描边颜色</td></tr><tr><td>injection</td><td>Array[any]</td><td>其他属性值中对于函数形式的值，假如需要获取外部变量，要使用数组的形式传入，便于在函数内部访问外部变量。请看下面的示例。</td></tr><tr><td>visible</td><td>Boolean, Function</td><td>是否显示</td></tr></tbody></table><h3 id="styles示例" tabindex="-1"><a class="header-anchor" href="#styles示例"><span>styles示例</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token function-variable function">visible</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span> inject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token comment">// 这里的 inject 参数就是一个数组，他的值就是 injection 字段的数组值：[visis]。</span>
           <span class="token keyword">return</span> inject<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;这是&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">injection</span><span class="token operator">:</span> <span class="token punctuation">[</span>globalVar<span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token function-variable function">radius</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(255,255,255,1)&#39;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">polygon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">return</span> <span class="token string">&#39;rgba(0,0,0,1)&#39;</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token literal-property property">dash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(30,112,255,1)&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(20,140,40,1)&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
       <span class="token literal-property property">dash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-可用方法" tabindex="-1"><a class="header-anchor" href="#ref-可用方法"><span>ref 可用方法</span></a></h2><p>提供无副作用的同步帮助方法</p><table><thead><tr><th>函数</th><th>返回</th><th>说明</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>AMap.TileLayer.WMS</td><td>获取实例</td></tr></tbody></table><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2><table><thead><tr><th>事件</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>init</td><td>TileLayer.WMS</td><td>实例初始化结束</td></tr></tbody></table>`,21);function m(h,v){const t=p("ExternalLinkIcon"),e=p("vp-demo");return c(),l("div",null,[d,n("p",null,[a("为了满足基于矢量瓦片块的数据可视化、矢量瓦片边界展示等开发需求，通过 AMap.MapboxVectorTileLayer 插件提供了简易矢量瓦片图层 此图层可以使用标准的 MVT 瓦片服务作为数据源。 可以配合"),n("a",E,[a("GeoHub-数据中心"),s(t)]),a("发布的矢量瓦片服务。 注意：使用高德数据平台发布服务，由于服务 URL 地址是明文，建议自行做服务代理转发，防止服务 ID 和 Key 明文传输导致数据泄露。 "),n("a",C,[a("相关示例"),s(t)])]),k,D,s(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-layer-mapbox-vector-tile%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aurl%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eurl%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoolbar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EswitchVisible()%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%7B%7B%20visible%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%20%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EElAmap%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ElAmapLayerMapboxVectorTile%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%40vuemap%2Fvue-amap%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20zoom%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E12%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20center%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E121.59996%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E31.197646%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20url%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Frestapi.amap.com%2Frest%2Flbs%2Fgeohub%2Ftiles%2Fmvt%3Fkey%3D747f980f217a31ba68d99301045a3fa7%26amp%3Bz%3D%5Bz%5D%26amp%3Bx%3D%5Bx%5D%26amp%3By%3D%5By%5D%26amp%3Bsize%3D512%26amp%3Bid%3D1ed4ee90-dd77-11eb-9642-a7be29d36ac6'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20visible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EswitchVisible%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20visible%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/layer/standard/mapbox-vector","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0A%20%20%20%20%3Cel-amap%0A%20%20%20%20%20%20%3Acenter%3D%22center%22%0A%20%20%20%20%20%20%3Azoom%3D%22zoom%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cel-amap-layer-mapbox-vector-tile%0A%20%20%20%20%20%20%20%20%3Avisible%3D%22visible%22%0A%20%20%20%20%20%20%20%20%3Aurl%3D%22url%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fel-amap%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22toolbar%22%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22switchVisible()%22%3E%0A%20%20%20%20%20%20%7B%7B%20visible%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%20%7D%7D%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%7D%20from%20%22vue%22%3B%0Aimport%20%7BElAmap%2C%20ElAmapLayerMapboxVectorTile%7D%20from%20%22%40vuemap%2Fvue-amap%22%3B%0A%0Aconst%20zoom%20%3D%20ref(12)%3B%0Aconst%20center%20%3D%20ref(%5B121.59996%2C%2031.197646%5D)%3B%0A%0Aconst%20url%20%3D%20ref('https%3A%2F%2Frestapi.amap.com%2Frest%2Flbs%2Fgeohub%2Ftiles%2Fmvt%3Fkey%3D747f980f217a31ba68d99301045a3fa7%26z%3D%5Bz%5D%26x%3D%5Bx%5D%26y%3D%5By%5D%26size%3D512%26id%3D1ed4ee90-dd77-11eb-9642-a7be29d36ac6')%3B%0A%0Aconst%20visible%20%3D%20ref(true)%0Aconst%20switchVisible%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20!visible.value%3B%0A%7D%0A%0A%3C%2Fscript%3E%0A%0A%3Cstyle%3E%0A%3C%2Fstyle%3E%0A",description:"","import-json":""},{default:r(()=>[F]),_:1}),b])}const A=o(u,[["render",m],["__file","mapbox-vector-tile-layer.html.vue"]]);export{A as default};
