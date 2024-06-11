import{b as k,c as z,u as B,a as H,E as V}from"./index-C2AhXWuI.js";import{p as S,_ as x,o as E,c as L,f as p,a as f,d as b,w as v,ao as w,al as j}from"./app-BIv4BGsj.js";import{u as F,E as O}from"./index-XVBT3eyP.js";const P=S({name:"ElAmapLocaHeatmap",inheritAttrs:!1,__name:"HeatMapLayer",props:k({depth:{type:Boolean,default:!0}}),emits:z,setup(s,{expose:u,emit:m}){const e=s,i=m;let t,c,r;const{$$getInstance:h,parentInstance:g}=F(a=>new Promise(l=>{t=new Loca.HeatMapLayer(a);const d=H({parentInstance:g,$amapComponent:t,emits:i,props:e,setStyle(){const o=Object.assign({},{radius:20,value:10,gradient:{.5:"blue",.65:"rgb(117,211,248)",.7:"rgb(0, 255, 0)",.9:"#ffea00",1:"red"},opacity:[0,1],height:100,heightBezier:[.4,.2,.4,.8],max:null,min:null,unit:"px",difference:!1},e.defaultStyleValue),C={radius:(M,n)=>(n.properties=n.properties||{},n.properties.radius===void 0?o.radius:n.properties.radius),value:(M,n)=>(n.properties=n.properties||{},n.properties.value===void 0?o.value:n.properties.value),gradient:o.gradient,opacity:o.opacity,height:o.height,heightBezier:o.heightBezier,max:o.max,min:o.min,unit:o.unit,difference:o.difference},A=Object.assign({},C,e.layerStyle);t.setStyle(A)}});c=d._destroyComponent,r=d.setSource,l(t)}),{emits:i,watchRedirectFn:B({setSource(){r&&r()},$amapComponent:()=>t,props:e}),destroyComponent(){c&&c(),t=null}});u({$$getInstance:h});const y={props:e,emits:i,get $amapComponent(){return t},set $amapComponent(a){t=a},get _destroyComponent(){return c},set _destroyComponent(a){c=a},get _setSource(){return r},set _setSource(a){r=a},$$getInstance:h,parentInstance:g};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}});function I(s,u,m,e,i,t){return E(),L("div")}const _=x(P,[["render",I],["__file","HeatMapLayer.vue"]]);_.install=s=>(s.component(_.name,_),s);const N=_,R=S({__name:"heat-map",setup(s,{expose:u}){u();const m=p(10),e=p([120.115196,30.17133]),i=p(55),t=p("https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_house_order.json"),c=p({radius:20,unit:"px",height:90,gradient:{.1:"rgba(50,48,118,1)",.2:"rgba(127,60,255,1)",.4:"rgba(166,53,219,1)",.6:"rgba(254,64,95,1)",.8:"rgba(255,98,4,1)",1:"rgba(236,220,79,1)"},value(l,d){return d.properties.count},min:0,max:10,heightBezier:[0,.53,.37,.98]}),r=p(!0),a={zoom:m,center:e,pitch:i,sourceUrl:t,layerStyle:c,visible:r,changeVisible:()=>{r.value=!r.value},clickMap:l=>{console.log("click map: ",l)},initMap:l=>{console.log("init map: ",l)},get ElAmap(){return O},get ElAmapLoca(){return V},get ElAmapLocaHeatmap(){return N}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),$={class:"map-page-container"},D={class:"toolbar"};function U(s,u,m,e,i,t){return E(),L(j,null,[f("div",$,[b(e.ElAmap,{"view-mode":"3D",pitch:e.pitch,"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:v(()=>[b(e.ElAmapLoca,null,{default:v(()=>[b(e.ElAmapLocaHeatmap,{visible:e.visible,"source-url":e.sourceUrl,"layer-style":e.layerStyle},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom"])]),f("div",D,[f("button",{onClick:e.changeVisible},w(e.visible?"隐藏":"显示"),1)])],64)}const K=x(R,[["render",U],["__file","heat-map.vue"]]);export{K as default};
