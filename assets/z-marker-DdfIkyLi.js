import{b as w,c as A,u as $,a as F,E as V}from"./index-C2AhXWuI.js";import{p as E,_ as L,o as z,c as M,f as u,a as f,d as k,w as C,ao as Z,al as j}from"./app-BIv4BGsj.js";import{u as O,E as P}from"./index-XVBT3eyP.js";const B=E({name:"ElAmapLocaZMarker",inheritAttrs:!1,__name:"ZMarkerLayer",props:w({}),emits:A,setup(a,{expose:d,emit:p}){const e=a,s=p;let o,i,c;const{$$getInstance:m,parentInstance:h}=O(n=>new Promise(y=>{o=new Loca.ZMarkerLayer(n);const l=F({parentInstance:h,$amapComponent:o,emits:s,props:e,setStyle(){const r=Object.assign({},{unit:"px",content:"",size:[20,20],rotation:0,alwaysFront:!1,altitude:0},e.defaultStyleValue),g={unit:r.unit,content:(_,t)=>(t.properties=t.properties||{},t.properties.content===void 0?r.content:t.properties.content),size:(_,t)=>(t.properties=t.properties||{},t.properties.size===void 0?r.size:t.properties.size),rotation:(_,t)=>(t.properties=t.properties||{},t.properties.rotation===void 0?r.rotation:t.properties.rotation),alwaysFront:r.alwaysFront,altitude:(_,t)=>(t.properties=t.properties||{},t.properties.altitude===void 0?r.altitude:t.properties.altitude)},x=Object.assign({},g,e.layerStyle);o.setStyle(x)}});i=l._destroyComponent,c=l.setSource,y(o)}),{emits:s,watchRedirectFn:$({setSource(){c&&c()},$amapComponent:()=>o,props:e}),destroyComponent(){i&&i(),o=null}});d({$$getInstance:m});const v={props:e,emits:s,get $amapComponent(){return o},set $amapComponent(n){o=n},get _destroyComponent(){return i},set _destroyComponent(n){i=n},get _setSource(){return c},set _setSource(n){c=n},$$getInstance:m,parentInstance:h};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}});function I(a,d,p,e,s,o){return z(),M("div")}const b=L(B,[["render",I],["__file","ZMarkerLayer.vue"]]);b.install=a=>(a.component(b.name,b),a);const N=b,R=E({__name:"z-marker",setup(a,{expose:d}){d();const p="https://vue-amap.guyixi.cn/",e=u(16),s=u([116.597005,39.914388]),o=u(55),i=u(`${p}/json/zmarker.json`),c=u({unit:"meter",content:(l,S)=>{const r=S.properties,g=r.price<6e4?"rgba(0, 28, 52, 0.6)":"rgba(33,33,33,0.6)",x=r.price<6e4?"#038684":"rgba(172, 137, 51, 0.3)",_=r.price<6e4?"#038684":"rgba(172, 137, 51, 1)";return`<div style="width: 490px; height: 228px; padding: 0 0;"><p style="display: block; height:80px; line-height:80px;font-size:40px;background-image: linear-gradient(to right, ${g},${g},${x},rgba(0,0,0,0.4)); border:4px solid ${_}; color:#fff; border-radius: 15px; text-align:center; margin:0; padding:5px;">${r.name}: ${r.price/1e4}</p><span style="width: 130px; height: 130px; margin: 0 auto; display: block; background: url(https://a.amap.com/Loca/static/loca-v2/demos/images/prism_${r.price<6e4?"blue":"yellow"}.png);"></span></div>`},alwaysFront:!0,size:[490/2,222/2],rotation:0}),m=u(!0),y={baseUrl:p,zoom:e,center:s,pitch:o,sourceUrl:i,layerStyle:c,visible:m,changeVisible:()=>{m.value=!m.value},clickMap:l=>{console.log("click map: ",l)},initMap:l=>{console.log("init map: ",l)},get ElAmap(){return P},get ElAmapLoca(){return V},get ElAmapLocaZMarker(){return N}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),U={class:"map-page-container"},D={class:"toolbar"};function W(a,d,p,e,s,o){return z(),M(j,null,[f("div",U,[k(e.ElAmap,{"view-mode":"3D",pitch:e.pitch,"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:C(()=>[k(e.ElAmapLoca,null,{default:C(()=>[k(e.ElAmapLocaZMarker,{visible:e.visible,"source-url":e.sourceUrl,"layer-style":e.layerStyle,"visible-duration":500},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom"])]),f("div",D,[f("button",{onClick:e.changeVisible},Z(e.visible?"隐藏":"显示"),1)])],64)}const J=L(R,[["render",W],["__file","z-marker.vue"]]);export{J as default};