import{E as g,a as E}from"./index-CrMMG-jN.js";import{E as A}from"./index-DC_FVfKx.js";import{p as b,f as r,aD as y,_ as T,o,c as _,d as n,w as u,al as v,az as x,q as L}from"./app-BIv4BGsj.js";import{E as z}from"./index-XVBT3eyP.js";import"./three.module-BVXrWKE2.js";import"./arrayEach-Bzrg1Ilf.js";const k=b({__name:"three-gltf-cache",setup(d,{expose:l}){l();const s=r(18),e=r([121.59996,31.197646]),i=r({x:90,y:0,z:0}),a=r([]),t="https://vue-amap.guyixi.cn/";y(()=>{const m=[],p=[121.59996,31.197646];for(let f=0;f<1e3;f++){const h=[p[0]+Math.random()*.01,p[1]+Math.random()*.01];m.push({lnglat:h,id:h.join(",")})}a.value=m});const c={zoom:s,center:e,rotation:i,positions:a,baseUrl:t,get ElAmap(){return z},get ElAmapLayerThree(){return g},get ElAmapThreeGltf(){return A},get ElAmapThreeLightAmbient(){return E}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),w={class:"map-page-container"};function B(d,l,s,e,i,a){return o(),_("div",w,[n(e.ElAmap,{"show-label":!1,center:e.center,zoom:e.zoom,"view-mode":"3D",pitch:60,"show-building-block":!1,features:["bg","road"]},{default:u(()=>[n(e.ElAmapLayerThree,{"create-canvas":!0},{default:u(()=>[n(e.ElAmapThreeLightAmbient,{color:"rgb(255,255,255)",intensity:.6}),(o(!0),_(v,null,x(e.positions,t=>(o(),L(e.ElAmapThreeGltf,{key:t.id,url:e.baseUrl+"/gltf/sgyj_point_animation.gltf",position:t.lnglat,"use-model-cache":!0,scale:[10,10,10],rotation:e.rotation},null,8,["url","position","rotation"]))),128))]),_:1})]),_:1},8,["center","zoom"])])}const U=T(k,[["render",B],["__file","three-gltf-cache.vue"]]);export{U as default};