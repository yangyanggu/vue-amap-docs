import{p as g,_ as b,o as d,c as h,f as p,a as k,d as y,w as v,q as A,s as E,al as x}from"./app-BIv4BGsj.js";import{b as B,u as w,E as N}from"./index-XVBT3eyP.js";const P=g({name:"ElAmapMarkerCluster",inheritAttrs:!1,__name:"MarkerCluster",props:B({points:{type:Object,required:!0},gridSize:{type:Number},maxZoom:{type:Number},averageCenter:{type:Boolean,default:!0},clusterByZoomChange:{type:Boolean,default:!1},styles:{type:Array},renderClusterMarker:{type:Function},renderMarker:{type:Function}}),emits:["init"],setup(o,{expose:s,emit:c}){const e=c;let t;const{$$getInstance:r,parentInstance:i}=w((a,f)=>new Promise(C=>{AMap.plugin(["AMap.MarkerCluster"],()=>{const l=a.points;delete a.points,t=new AMap.MarkerCluster(f,l,a),C(t)})}),{emits:e,watchRedirectFn:{__points(a){t&&t.setData(a)}},destroyComponent(){t&&(i!=null&&i.$amapComponent)&&(t.setMap(null),t=null)}});s({$$getInstance:r});const u={emits:e,get $amapComponent(){return t},set $amapComponent(a){t=a},$$getInstance:r,parentInstance:i};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function S(o,s,c,e,t,r){return d(),h("div")}const m=b(P,[["render",S],["__file","MarkerCluster.vue"]]);m.install=o=>(o.component(m.name,m),o);const V=m,j=g({__name:"marker-cluster",setup(o,{expose:s}){s();const c=p([104.937478,35.439575]),e=p(5),t=p([]),r=p(!0),l={center:c,zoom:e,markerPoints:t,visible:r,clickMap:n=>{console.log("click map: ",n)},initMap:n=>{console.log("init map: ",n),fetch("//a.amap.com/jsapi_demos/static/china.js").then(_=>_.text()).then(_=>{const M=_.split("=");M.length===2&&(t.value=JSON.parse(M[1].trim()))})},changeVisible:()=>{r.value=!r.value},markerInit:n=>{console.log("marker init: ",n)},clickMarker:n=>{console.log("marker click: ",n)},get ElAmap(){return N},get ElAmapMarkerCluster(){return V}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),z={class:"map-page-container"};function I(o,s,c,e,t,r){return d(),h(x,null,[k("div",z,[y(e.ElAmap,{"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:v(()=>[e.visible?(d(),A(e.ElAmapMarkerCluster,{key:0,points:e.markerPoints,onInit:e.markerInit,onClick:e.clickMarker},null,8,["points"])):E("",!0)]),_:1},8,["center","zoom"])]),k("div",{class:"toolbar"},[k("button",{onClick:e.changeVisible}," 显隐 ")])],64)}const O=b(j,[["render",I],["__file","marker-cluster.vue"]]);export{O as default};