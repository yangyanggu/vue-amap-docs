import{_ as a,o as e,c as n,e as s}from"./app-BIv4BGsj.js";const i={},p=s(`<h1 id="从1-x迁移" tabindex="-1"><a class="header-anchor" href="#从1-x迁移"><span>从1.x迁移</span></a></h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>从2.0.0开始 @vuemap/vue-amap的默认版本将调整为2.x，也就是Vue3将作为默认版本</p></div><p>将@vuemap/vue-amap 升级到2.x版本需要从以下几个方向调整：</p><hr><h2 id="修改库版本" tabindex="-1"><a class="header-anchor" href="#修改库版本"><span>修改库版本</span></a></h2><p>将<code>@vuemap/vue-amap</code>的版本修改为 2.x</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @vuemap/vue-amap@2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装需要使用的loca或者threejs的库" tabindex="-1"><a class="header-anchor" href="#安装需要使用的loca或者threejs的库"><span>安装需要使用的loca或者threejs的库</span></a></h2><p>如果项目中使用了loca或者threejs的组件库，需要安装对应的组件库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>// loca组件库
<span class="token function">npm</span> i @vuemap/vue-amap-loca@2

// threejs组件库
<span class="token function">npm</span> i @vuemap/vue-amap-extra@2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-initamapapiloader" tabindex="-1"><a class="header-anchor" href="#修改-initamapapiloader"><span>修改 initAMapApiLoader</span></a></h2><p>现在<code>initAMapApiLoader</code>默认不再加载loca插件，如果项目中使用了loca，需要在参数中增加Loca说明：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">,</span>
  Loca<span class="token operator">:</span> <span class="token punctuation">{</span>
    version<span class="token operator">:</span> <span class="token string">&#39;2.0.0&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="升级-vuemap-unplugin-resolver" tabindex="-1"><a class="header-anchor" href="#升级-vuemap-unplugin-resolver"><span>升级@vuemap/unplugin-resolver</span></a></h2><p>如果项目中使用了<code>@vuemap/unplugin-resolver</code>来作为自动导入组件，需要将该插件升级到2.x版本</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @vuemap/unplugin-resolver@2 <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改所有手动导入" tabindex="-1"><a class="header-anchor" href="#修改所有手动导入"><span>修改所有手动导入</span></a></h2><p>如果项目中使用了手动导入依赖组件的方式的话，需要调整对应的库，所有loca功能需要从<code>@vuemap/vue-amap-loca</code>中导入，所有threejs组件需要从<code>@vuemap/vue-amap-extra</code>中导入</p>`,18),c=[p];function t(l,d){return e(),n("div",null,c)}const r=a(i,[["render",t],["__file","v1tov2.html.vue"]]);export{r as default};