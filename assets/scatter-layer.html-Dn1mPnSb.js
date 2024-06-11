import{_ as s,r as t,o as p,c as e,d as o,w as c,e as a,a as l}from"./app-BIv4BGsj.js";const r={},u=a('<h1 id="贴地点图层-loca-scatterlayer" tabindex="-1"><a class="header-anchor" href="#贴地点图层-loca-scatterlayer"><span>贴地点图层 (Loca.ScatterLayer)</span></a></h1><p>大地面上的点，可展示三种类型：颜色圆、图标、动画图标。动画开启需要使用 <strong>loca.animate.start();</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>来源 <code>@vuemap/vue-amap-loca</code> 组件库</p></div><h2 id="基础示例" tabindex="-1"><a class="header-anchor" href="#基础示例"><span>基础示例</span></a></h2>',4),i=l("p",null,"examples/loca/scatter",-1),E=a(`<h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性"><span>静态属性</span></a></h2><p>仅且可以初始化配置，不支持响应式。</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>initEvents</td><td>Boolean</td><td>是否创建事件，自动为loca图层创建click和mousemove事件。 默认 true</td></tr><tr><td>defaultStyleValue</td><td>Object</td><td>默认样式，可以查看下面属性说明</td></tr><tr><td>extraOptions</td><td>Object</td><td>额外扩展属性，会直接将属性拷贝到初始化的options中，当key与props内的一样时会被props覆盖</td></tr></tbody></table><h2 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性"><span>动态属性</span></a></h2><p>支持响应式。</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>visible</td><td>Boolean</td><td>点标记是否可见，默认为true。</td></tr><tr><td>zIndex</td><td>Number</td><td>点标记的叠加顺序。地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示，默认zIndex：12</td></tr><tr><td>sourceUrl</td><td>String</td><td>数据源的链接地址，一般是接口地址，返回的数据必须是 geojson 格式。</td></tr><tr><td>sourceData</td><td>Object</td><td>数据对象。如果你不想使用 url 方式请求数据，可以直接填写请求好的 geojson 对象。 sourceUrl与sourceData只会生效一个，默认优先判断sourceUrl</td></tr><tr><td>layerStyle</td><td>Object</td><td>图层样式</td></tr><tr><td>zooms</td><td>Array</td><td>图层缩放等级范围，默认[2,20]</td></tr><tr><td>opacity</td><td>Number</td><td>图层整体透明度，默认 1</td></tr><tr><td>visibleDuration</td><td>Number</td><td>图层显隐时候过渡的时间，默认为0</td></tr><tr><td>geoBufferSource</td><td>ArrayBuffer, String</td><td>protocol-buffers(PBF) 格式的数据源，能够大幅压缩数据体积，有效减少数据传输时间。目前仅支持基于 mapbox/geobuf 的 GeoJSON PBF 实现</td></tr></tbody></table><h3 id="layerstyle参数" tabindex="-1"><a class="header-anchor" href="#layerstyle参数"><span>layerStyle参数</span></a></h3><div class="custom-container warning"><p class="custom-container-title">警告</p><p>layerStyle参数覆盖所有默认值</p></div><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>[Number, Number], Function</td><td>图标长宽，单位取决于 unit 字段。default [20,20]</td></tr><tr><td>rotation</td><td>Number, Function</td><td>图标的旋转角度，以正北方向为起点，沿顺时针方向旋转。default 0</td></tr><tr><td>color</td><td>String , Function</td><td>没有纹理的情况下，圆片的填充颜色。default &#39;rgba(200,200,200,1)&#39;</td></tr><tr><td>altitude</td><td>Number , Function</td><td>图标的海拔高度。单位：米。default 0</td></tr><tr><td>borderWidth</td><td>Number, Function</td><td>描边宽度，单位和 size 保持一致。default 0</td></tr><tr><td>borderColor</td><td>String, Function</td><td>没有纹理的情况下，圆片的描边颜色。default &#39;rgba(250,250,250,1)&#39;</td></tr><tr><td>texture</td><td>Canvas , String , Base64</td><td>图标纹理资源，如果需要有动态效果，请使用帧序列图片资源：url，并且为了效果更好，我们建议使用宽高: 4096x128 像素的图片。⚠: 帧序列图片是头尾相连可以循环的图片。default null</td></tr><tr><td>unit</td><td>String</td><td>size 和 borderWidth 的单位，可以是 &#39;px&#39; 和 &#39;meter&#39;，meter 是实际地理的米，px 是屏幕像素。 default &#39;px&#39;</td></tr><tr><td>animate</td><td>Boolean</td><td>是否有动画，动画开启需要使用序列帧的纹理，否则没有动画效果。default false</td></tr><tr><td>duration</td><td>Number</td><td>一轮动画的时长，单位毫秒(ms)。需要开启 animate 才能使用。default 0</td></tr></tbody></table><h3 id="defaultstylevalue参数" tabindex="-1"><a class="header-anchor" href="#defaultstylevalue参数"><span>defaultStyleValue参数</span></a></h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>defaultStyleValue提供默认参数，但会被geojson的properties属性中的值覆盖</p></div><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>[Number, Number]</td><td>图标长宽，单位取决于 unit 字段。default [20,20]</td></tr><tr><td>rotation</td><td>Number</td><td>图标的旋转角度，以正北方向为起点，沿顺时针方向旋转。default 0</td></tr><tr><td>color</td><td>String</td><td>没有纹理的情况下，圆片的填充颜色。default &#39;rgba(200,200,200,1)&#39;</td></tr><tr><td>altitude</td><td>Number</td><td>图标的海拔高度。单位：米。default 0</td></tr><tr><td>borderWidth</td><td>Number</td><td>描边宽度，单位和 size 保持一致。default 0</td></tr><tr><td>borderColor</td><td>String</td><td>没有纹理的情况下，圆片的描边颜色。default &#39;rgba(250,250,250,1)&#39;</td></tr><tr><td>texture</td><td>Canvas , String , Base64</td><td>图标纹理资源，如果需要有动态效果，请使用帧序列图片资源：url，并且为了效果更好，我们建议使用宽高: 4096x128 像素的图片。⚠: 帧序列图片是头尾相连可以循环的图片。default null</td></tr><tr><td>unit</td><td>String</td><td>size 和 borderWidth 的单位，可以是 &#39;px&#39; 和 &#39;meter&#39;，meter 是实际地理的米，px 是屏幕像素。 default &#39;px&#39;</td></tr><tr><td>animate</td><td>Boolean</td><td>是否有动画，动画开启需要使用序列帧的纹理，否则没有动画效果。default false</td></tr><tr><td>duration</td><td>Number</td><td>一轮动画的时长，单位毫秒(ms)。需要开启 animate 才能使用。default 0</td></tr></tbody></table><h3 id="style说明" tabindex="-1"><a class="header-anchor" href="#style说明"><span>style说明</span></a></h3><p>所有loca的Layer组件对Style设置提供了默认处理，支持function回调方式的属性都提供了默认回调实现，优先读取geojson的properties中的值，读取不到的情况下会读取defaultStyleValue配置的值，最后会使用组件内默认设置的值。<br> 该默认处理可以被layerStyle中的设置给覆盖。目前默认设置已基本符合日常使用，如果需要在选中目标时做高亮处理，则推荐根据示例使用事件监听然后动态修改layerStyle来实现。<br> style数据有可以有三个来源，优先级按顺序处理，第一个最高<br></p><h5 id="_1、layerstyle属性配置" tabindex="-1"><a class="header-anchor" href="#_1、layerstyle属性配置"><span>1、layerStyle属性配置</span></a></h5><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">unit</span><span class="token operator">:</span> <span class="token string">&#39;meter&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2600</span><span class="token punctuation">,</span> <span class="token number">2600</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">texture</span><span class="token operator">:</span> <span class="token string">&#39;https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">animate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、geojson的properties属性" tabindex="-1"><a class="header-anchor" href="#_2、geojson的properties属性"><span>2、geojson的properties属性</span></a></h5><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FeatureCollection&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Polygon&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;crs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;urn:ogc:def:crs:OGC:1.3:CRS84&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;features&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Feature&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;geometry&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Point&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;coordinates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token number">119.958676782427744</span><span class="token punctuation">,</span> <span class="token number">32.121127961388339</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、defaultstylevalue属性配置" tabindex="-1"><a class="header-anchor" href="#_3、defaultstylevalue属性配置"><span>3、defaultStyleValue属性配置</span></a></h5><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rotation</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(200,200,200,1)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">altitude</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">borderWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(250,250,250,1)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">texture</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">unit</span><span class="token operator">:</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">animate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-可用方法" tabindex="-1"><a class="header-anchor" href="#ref-可用方法"><span>ref 可用方法</span></a></h2><p>提供无副作用的同步帮助方法</p><table><thead><tr><th>函数</th><th>返回</th><th>说明</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>Loca.ScatterLayer</td><td>获取实例</td></tr></tbody></table><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2><table><thead><tr><th>事件</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>init</td><td>Loca.ScatterLayer</td><td>实例</td></tr><tr><td>click</td><td>Feature, event</td><td>当点击到标号时返回对应的feature，否则返回undefined</td></tr><tr><td>mousemove</td><td>Feature, event</td><td>当鼠标移动滑过标号时返回对应的feature，否则返回undefined</td></tr><tr><td>rightclick</td><td>Feature, event</td><td>鼠标右击时返回对应的feature，否则返回undefined</td></tr></tbody></table>`,25);function C(d,k){const n=t("vp-demo");return p(),e("div",null,[u,o(n,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eview-mode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E3D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apitch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epitch%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ashow-label%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EclickMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40init%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinitMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-loca%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40init%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinitLoca%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-loca-scatter%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asource-url%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EsourceUrl%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Alayer-style%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3ElayerStyle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avisible-duration%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E500%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap-loca%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoolbar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EchangeVisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%7B%7B%20visible%20%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%20%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EElAmap%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%40vuemap%2Fvue-amap%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EElAmapLoca%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ElAmapLocaScatter%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%40vuemap%2Fvue-amap-loca%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20zoom%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E11%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20center%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E113.97199630737305%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E22.5807295363949%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20pitch%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E55%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20sourceUrl%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fa.amap.com%2FLoca%2Fstatic%2Floca-v2%2Fdemos%2Fmock_data%2Fsz_road_F.json'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20layerStyle%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eunit%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'meter'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E2600%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2600%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EborderWidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etexture%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fa.amap.com%2FLoca%2Fstatic%2Floca-v2%2Fdemos%2Fimages%2Fbreath_red.png'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eduration%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E500%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eanimate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20visible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EchangeVisible%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20visible%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EclickMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'click%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EinitMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Emap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'init%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20map%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EinitLoca%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eloca%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20loca%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eanimate%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Estart%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/loca/scatter","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0A%20%20%20%20%3Cel-amap%0A%20%20%20%20%20%20view-mode%3D%223D%22%0A%20%20%20%20%20%20%3Apitch%3D%22pitch%22%0A%20%20%20%20%20%20%3Ashow-label%3D%22false%22%0A%20%20%20%20%20%20%3Acenter%3D%22center%22%0A%20%20%20%20%20%20%3Azoom%3D%22zoom%22%0A%20%20%20%20%20%20%40click%3D%22clickMap%22%0A%20%20%20%20%20%20%40init%3D%22initMap%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cel-amap-loca%20%40init%3D%22initLoca%22%3E%0A%20%20%20%20%20%20%20%20%3Cel-amap-loca-scatter%0A%20%20%20%20%20%20%20%20%20%20%3Avisible%3D%22visible%22%0A%20%20%20%20%20%20%20%20%20%20%3Asource-url%3D%22sourceUrl%22%0A%20%20%20%20%20%20%20%20%20%20%3Alayer-style%3D%22layerStyle%22%0A%20%20%20%20%20%20%20%20%20%20%3Avisible-duration%3D%22500%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fel-amap-loca%3E%0A%20%20%20%20%3C%2Fel-amap%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22toolbar%22%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22changeVisible%22%3E%0A%20%20%20%20%20%20%7B%7B%20visible%20%3F%20'%E9%9A%90%E8%97%8F'%20%3A%20'%E6%98%BE%E7%A4%BA'%20%7D%7D%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%7D%20from%20%22vue%22%3B%0Aimport%20%7BElAmap%7D%20from%20%22%40vuemap%2Fvue-amap%22%3B%0Aimport%20%7BElAmapLoca%2C%20ElAmapLocaScatter%7D%20from%20%22%40vuemap%2Fvue-amap-loca%22%3B%0A%0Aconst%20zoom%20%3D%20ref(11)%3B%0Aconst%20center%20%3D%20ref(%5B113.97199630737305%2C%2022.5807295363949%5D)%3B%0Aconst%20pitch%20%3D%20ref(55)%0A%0Aconst%20sourceUrl%20%3D%20ref('https%3A%2F%2Fa.amap.com%2FLoca%2Fstatic%2Floca-v2%2Fdemos%2Fmock_data%2Fsz_road_F.json')%3B%0Aconst%20layerStyle%20%3D%20ref(%7B%0A%20%20unit%3A%20'meter'%2C%0A%20%20size%3A%20%5B2600%2C%202600%5D%2C%0A%20%20borderWidth%3A%200%2C%0A%20%20texture%3A%20'https%3A%2F%2Fa.amap.com%2FLoca%2Fstatic%2Floca-v2%2Fdemos%2Fimages%2Fbreath_red.png'%2C%0A%20%20duration%3A%20500%2C%0A%20%20animate%3A%20true%2C%0A%7D)%0A%0A%0Aconst%20visible%20%3D%20ref(true)%0Aconst%20changeVisible%20%3D%20()%20%3D%3E%20%7B%0A%20%20visible.value%20%3D%20!visible.value%3B%0A%7D%0A%0Aconst%20clickMap%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20console.log('click%20map%3A%20'%2C%20e)%3B%0A%7D%0Aconst%20initMap%20%3D%20(map)%20%3D%3E%20%7B%0A%20%20console.log('init%20map%3A%20'%2C%20map)%3B%0A%7D%0A%0Aconst%20initLoca%20%3D%20(loca%3A%20any)%20%3D%3E%20%7B%0A%20%20loca.animate.start()%3B%0A%7D%0A%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A%3C%2Fstyle%3E%0A",description:"","import-json":""},{default:c(()=>[i]),_:1}),E])}const F=s(r,[["render",C],["__file","scatter-layer.html.vue"]]);export{F as default};