import{p as g,f as o,_,o as k,c as h,a,d as r,w as m,ao as u,al as C}from"./app-BIv4BGsj.js";import{E as z}from"./index-XVBT3eyP.js";import{E as y,a as v}from"./index-CQuX1OzE.js";const x=g({__name:"labels",setup(b,{expose:t}){t();const l=o(14),e=o([121.5273285,31.21515044]),n=o({position:[121.5495395,31.21515044],text:{content:"测试slot",direction:"right",style:{fontSize:15,fillColor:"#fff",strokeColor:"rgba(255,0,0,0.5)",strokeWidth:2,padding:[3,10],backgroundColor:"yellow",borderColor:"#ccc",borderWidth:3}},icon:{image:"https://a.amap.com/jsapi_demos/static/images/poi-marker.png",anchor:"bottom-center",size:[25,34],clipOrigin:[459,92],clipSize:[50,68]}}),i=o(!0),s=()=>{i.value=!i.value},c=o(),p={zoom:l,center:e,labelOptions:n,visible:i,switchVisible:s,labelsRef:c,init:f=>{var d;(d=c.value)==null||d.$$add(new AMap.LabelMarker({position:[121.5273285,31.21515044],opacity:1,zIndex:2,icon:{image:"https://a.amap.com/jsapi_demos/static/images/poi-marker.png",anchor:"bottom-center",size:[25,34],clipOrigin:[459,92],clipSize:[50,68]},text:{content:"测试$refs $$add",direction:"right",style:{fontSize:15,fillColor:"#fff",strokeColor:"rgba(255,0,0,0.5)",strokeWidth:2,padding:[3,10],backgroundColor:"yellow",borderColor:"#ccc",borderWidth:3}}})),f.add(new AMap.LabelMarker({position:[121.4973285,31.21515044],opacity:1,zIndex:2,icon:{image:"https://a.amap.com/jsapi_demos/static/images/poi-marker.png",anchor:"bottom-center",size:[25,34],clipOrigin:[459,92],clipSize:[50,68]},text:{content:"测试layer.add",direction:"right",style:{fontSize:15,fillColor:"#fff",strokeColor:"rgba(255,0,0,0.5)",strokeWidth:2,padding:[3,10],backgroundColor:"yellow",borderColor:"#ccc",borderWidth:3}}}))},get ElAmap(){return z},get ElAmapLayerLabels(){return y},get ElAmapLabelMarker(){return v}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),E={class:"map-page-container"},A={class:"toolbar"};function L(b,t,l,e,n,i){return k(),h(C,null,[a("div",E,[r(e.ElAmap,{center:e.center,zoom:e.zoom},{default:m(()=>[r(e.ElAmapLayerLabels,{ref:"labelsRef",visible:e.visible,collision:!1,onInit:e.init},{default:m(()=>[r(e.ElAmapLabelMarker,{position:e.labelOptions.position,text:e.labelOptions.text,icon:e.labelOptions.icon},null,8,["position","text","icon"])]),_:1},8,["visible"])]),_:1},8,["center","zoom"])]),a("div",A,[a("button",{onClick:t[0]||(t[0]=s=>e.switchVisible())},u(e.visible?"隐藏":"显示"),1)])],64)}const W=_(x,[["render",L],["__file","labels.vue"]]);export{W as default};