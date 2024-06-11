import{_ as a,o as e,c,e as o}from"./app-BIv4BGsj.js";const n={},t=o('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h1><div class="custom-container warning"><p class="custom-container-title">警告</p><p>@vuemap/vue-amap 2.0版本以作为默认版本存在，并且原1.0包拆分为三个组件库，灵活使用。</p></div><hr><h2 id="为什么升级2-0" tabindex="-1"><a class="header-anchor" href="#为什么升级2-0"><span>为什么升级2.0</span></a></h2><p>不管是0.x版本还是1.0版本，在开发初期都没有考虑后续扩展、包体积等问题，导致在扩展功能时，依赖包的安装越来越大，且在使用<code>initAMapApiLoader</code>加载高德地图JS文件时默认加载了loca库，这就导致页面初始化时等待时间会变长。 为了解决这几个核心问题，原<code>@vuemap/vue-amap</code>库被拆分为三个库，核心库保留原名，新增加<code>@vuemap/vue-amap-loca</code>库用于提供loca相关组件，增加<code>@vuemap/vue-amap-extra</code>提供扩展组件，主要用于提供扩展的threejs相关组件。</p><h2 id="怎么从1-x升级到2-x" tabindex="-1"><a class="header-anchor" href="#怎么从1-x升级到2-x"><span>怎么从1.x升级到2.x</span></a></h2><p>从1.x升级到2.x请看<a href="">升级文档</a></p>',7),s=[t];function r(d,p){return e(),c("div",null,s)}const h=a(n,[["render",r],["__file","introduction.html.vue"]]);export{h as default};