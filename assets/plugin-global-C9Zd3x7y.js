import{p as i,f as a,_ as p,o as _,c as m,d}from"./app-BIv4BGsj.js";import{E as f}from"./index-XVBT3eyP.js";const u=i({__name:"plugin-global",setup(c,{expose:n}){n();const t=a(12),e=a([121.59996,31.197646]),o={zoom:t,center:e,init:r=>{const l=new AMap.HawkEye;r.addControl(l),console.log("map init: ",r)},get ElAmap(){return f}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),g={class:"map-page-container"};function E(c,n,t,e,s,o){return _(),m("div",g,[d(e.ElAmap,{center:e.center,zoom:e.zoom,onInit:e.init},null,8,["center","zoom"])])}const z=p(u,[["render",E],["__file","plugin-global.vue"]]);export{z as default};
