import{_ as p,r as t,o,c as l,a as n,b as s,d as e,e as c}from"./app-BIv4BGsj.js";const i={},u=c(`<h1 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h1><hr><h2 id="完整导入" tabindex="-1"><a class="header-anchor" href="#完整导入"><span>完整导入</span></a></h2><p>一般项目中，对于 vue-amap 的初始化只需要调用 <code>initAMapApiLoader</code> 方法即可。</p><p>NPM 安装：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> VueAMap<span class="token punctuation">,</span> <span class="token punctuation">{</span>initAMapApiLoader<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// import VueAMapLoca from &#39;@vuemap/vue-amap-loca&#39;;</span>
<span class="token comment">// import VueAMapExtra from &#39;@vuemap/vue-amap-extra&#39;;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vuemap/vue-amap/dist/style.css&#39;</span>
<span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">securityJsCode</span><span class="token operator">:</span> <span class="token string">&#39;securityJsCode&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 新版key需要配合安全密钥使用</span>
  <span class="token comment">//Loca:{</span>
  <span class="token comment">//  version: &#39;2.0.0&#39;</span>
  <span class="token comment">//} // 如果需要使用loca组件库，需要加载Loca</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAMap<span class="token punctuation">)</span>
  <span class="token comment">//.use(VueAMapLoca)</span>
  <span class="token comment">//.use(VueAMapExtra)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN 引入：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动导入" tabindex="-1"><a class="header-anchor" href="#自动导入"><span>自动导入</span></a></h2><p>首先你需要安装<code>unplugin-vue-components</code> 、 <code>unplugin-auto-import</code> 、 <code>@vuemap/unplugin-resolver</code>这三款插件</p><div class="custom-container warning"><p class="custom-container-title">警告</p><p>注意，对于使用@vuemap/vue-amap@1版本的来说，<code>@vuemap/unplugin-resolver</code>版本必须使用1.x.x版本</p></div><h3 id="使用-vuemap-vue-amap-latest-版本" tabindex="-1"><a class="header-anchor" href="#使用-vuemap-vue-amap-latest-版本"><span>使用@vuemap/vue-amap@latest 版本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import @vuemap/unplugin-resolver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-vuemap-vue-amap-1-版本" tabindex="-1"><a class="header-anchor" href="#使用-vuemap-vue-amap-1-版本"><span>使用@vuemap/vue-amap@1 版本</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import @vuemap/unplugin-resolver@1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在main.ts中导入css和进行初始化key</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>initAMapApiLoader<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@vuemap/vue-amap/dist/style.css&#39;</span>
<span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">//Loca:{</span>
  <span class="token comment">//  version: &#39;2.0.0&#39;</span>
  <span class="token comment">//} // 如果需要使用loca组件库，需要加载Loca</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再修改配置文件，把下列代码插入到你的 Vite 或 Webpack 的配置文件中</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>VueAmapResolver<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/unplugin-resolver&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VueAmapResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VueAmapResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">警告</p><p>当项目中Element-Plus也使用自动导入功能时会与地图组件冲突，需要使用unplugin-vue-components@0.17.15之后的版本</p></div><p>使用Element-plus的自动导入时，配置需要修改为如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>VueAmapResolver<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/unplugin-resolver&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ElAmap[A-Z]*</span><span class="token regex-delimiter">/</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">VueAmapResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ElAmap[A-Z]*</span><span class="token regex-delimiter">/</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">VueAmapResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volar兼容" tabindex="-1"><a class="header-anchor" href="#volar兼容"><span>Volar兼容</span></a></h2><p>在使用vscode开发时，需要配置global.d.ts才能在按需导入时有对应的typescript提示，<code>tsconfig.json</code>配置方式：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./node_modules/@vuemap/vue-amap/global.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./node_modules/@vuemap/vue-amap-loca/global.d.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./node_modules/@vuemap/vue-amap-extra/global.d.ts&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h2><p>在<strong>定制化程度较高</strong>的项目中，开发者可能只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的 sdk 完成。这个时候就需要 <code>lazyAMapApiLoaderInstance</code>。</p><p>NPM 安装：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VueAMap<span class="token punctuation">,</span> <span class="token punctuation">{</span>initAMapApiLoader<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lazyAMapApiLoaderInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuemap/vue-amap&#39;</span><span class="token punctuation">;</span>

<span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAMap<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

lazyAMapApiLoaderInstance<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// your code ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&#39;amapContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">121.59996</span><span class="token punctuation">,</span> <span class="token number">31.197646</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN 引入：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_KEY&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span>lazyAMapApiLoaderInstance<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// your code ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&#39;amapContainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">121.59996</span><span class="token punctuation">,</span> <span class="token number">31.197646</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2>`,32),r=n("thead",null,[n("tr",null,[n("th",null,"参数名"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"描述")])],-1),d=n("tr",null,[n("td",null,"key"),n("td",null,[n("code",null,"String")]),n("td",null,"``"),n("td",null,"高德 Key")],-1),k=n("tr",null,[n("td",null,"version"),n("td",null,[n("code",null,"String")]),n("td",null,[n("code",null,"2.0")]),n("td",null,"指定要加载的 JSAPI 的版本，缺省时默认为 2.0")],-1),v=n("td",null,"plugins",-1),m=n("td",null,[n("code",null,"Array")],-1),b=n("td",null,"``",-1),g={href:"https://lbs.amap.com/api/jsapi-v2/guide/abc/plugins",target:"_blank",rel:"noopener noreferrer"},h=n("td",null,"AMapUI",-1),f=n("td",null,[n("code",null,"Object({version:1.1,plugins:[]})")],-1),y=n("td",null,"``",-1),_={href:"https://lbs.amap.com/api/amap-ui/intro",target:"_blank",rel:"noopener noreferrer"},A=n("tr",null,[n("td",null,"Loca"),n("td",null,[n("code",null,"Object")]),n("td",null,[n("code",null,"{version: '2.0.0'}")]),n("td",null,"Loca 版本")],-1),w=n("td",null,"serviceHost",-1),x=n("td",null,"String",-1),M=n("td",null,"''",-1),j=n("code",null,"1.1.0版本新增",-1),L={href:"https://lbs.amap.com/api/jsapi-v2/guide/abc/load",target:"_blank",rel:"noopener noreferrer"},V=n("td",null,"securityJsCode",-1),E=n("td",null,"String",-1),C=n("td",null,"''",-1),I=n("code",null,"1.1.0版本新增",-1),R={href:"https://lbs.amap.com/api/jsapi-v2/guide/abc/load",target:"_blank",rel:"noopener noreferrer"},P=n("tr",null,[n("td",null,"offline"),n("td",null,[n("code",null,"Boolean")]),n("td",null,[n("code",null,"false")]),n("td",null,[n("code",null,"1.1.5版本新增"),s("是否离线部署，默认false，当设置为true时将不加载JS API，需要自己在html里加载所需要的JS API和loca，主要用于局域网使用")])],-1);function Y(S,q){const a=t("ExternalLinkIcon");return o(),l("div",null,[u,n("table",null,[r,n("tbody",null,[d,k,n("tr",null,[v,m,b,n("td",null,[s("需要使用的的插件列表，如比例尺'AMap.Scale'等 "),n("a",g,[s("插件列表"),e(a)])])]),n("tr",null,[h,f,y,n("td",null,[s("UI的参数配置 "),n("a",_,[s("示例"),e(a)]),s("，version默认就是1.1，plugins是需要加载的插件，可以看示例连接")])]),A,n("tr",null,[w,x,M,n("td",null,[j,s("，代理服务器域名或ip地址，新版本密钥必须配置代理服务器或者安全密钥，优先使用该配置，"),n("a",L,[s("参考网址"),e(a)])])]),n("tr",null,[V,E,C,n("td",null,[I,s("，静态安全密钥(不安全，建议开发环境用),新版本密钥必须配置代理服务器或者安全密钥，"),n("a",R,[s("参考网址"),e(a)])])]),P])])])}const O=p(i,[["render",Y],["__file","init.html.vue"]]);export{O as default};
