import{E as m}from"./index-XVBT3eyP.js";import{p as _,f as c,_ as u,o as f,c as b,a,d as k,al as A}from"./app-BIv4BGsj.js";const g=_({__name:"basic-setup",setup(i,{expose:n}){n();const r=c(12),e=c([121.59996,31.197646]);let t=null;const s={zoom:r,center:e,get map(){return t},set map(o){t=o},init:o=>{const d=new AMap.Marker({position:[121.59996,31.197646]});o.add(d),t=o,console.log("map init: ",t)},add:()=>{const o=new AMap.Marker({position:[121.59996,31.177646]});t.add(o)},get ElAmap(){return m}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),v={class:"map-page-container"},E={class:"toolbar"};function x(i,n,r,e,t,p){return f(),b(A,null,[a("div",v,[k(e.ElAmap,{center:e.center,zoom:e.zoom,onInit:e.init},null,8,["center","zoom"])]),a("div",E,[a("button",{onClick:n[0]||(n[0]=l=>e.add())}," 添加标号 ")])],64)}const M=u(g,[["render",x],["__file","basic-setup.vue"]]);export{M as default};