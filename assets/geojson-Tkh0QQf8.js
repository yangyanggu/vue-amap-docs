import{p as k,aJ as y,_ as j,o as O,c as M,f as s,a as b,d as v,w as S,q as A,s as C,ao as h,al as N}from"./app-BIv4BGsj.js";import{b as P,u as J,E}from"./index-XVBT3eyP.js";const G=k({name:"ElAmapGeojson",inheritAttrs:!1,__name:"GeoJSON",props:P({geo:{type:Object,required:!0},markerOptions:{type:Object},getMarker:{type:Function},polylineOptions:{type:Object},getPolyline:{type:Function},polygonOptions:{type:Object},getPolygon:{type:Function}}),emits:["init"],setup(i,{expose:c,emit:p}){const e=i,l=p;let n;const{$$getInstance:g,parentInstance:r}=J((o,a)=>new Promise(t=>{AMap.plugin(["AMap.GeoJSON"],()=>{o.getMarker||(o.getMarker=u),o.getPolyline||(o.getPolyline=_),o.getPolygon||(o.getPolygon=d),n=new AMap.GeoJSON(o),a.add(n),t(n)})}),{emits:l,propsRedirect:{geo:"geoJSON"},watchRedirectFn:{__geoJSON(o){n&&n.importData(o)}},destroyComponent(){n&&(r!=null&&r.$amapComponent)&&(r!=null&&r.isDestroy||r==null||r.$amapComponent.remove(n),n=null)}}),u=(o,a)=>{let t=e.markerOptions||{};return t=y({},t,o.properties),t.position=a,new AMap.Marker(t)},_=(o,a)=>{let t=e.polylineOptions||{};return t=y({},t,o.properties),t.path=a,new AMap.Polyline(t)},d=(o,a)=>{let t=e.polygonOptions||{};return t=y({},t,o.properties),t.path=a,new AMap.Polygon(t)};c({$$getInstance:g});const f={props:e,emits:l,get $amapComponent(){return n},set $amapComponent(o){n=o},$$getInstance:g,parentInstance:r,createMarker:u,createPolyline:_,createPolygon:d};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function w(i,c,p,e,l,n){return O(),M("div")}const m=j(G,[["render",w],["__file","GeoJSON.vue"]]);m.install=i=>(i.component(m.name,m),i);const B=m,x=k({__name:"geojson",setup(i,{expose:c}){c();const p=s(7),e=s([107.943579,30.131735]),l=s(!1),n=s(!0),g=s(null),r=s({strokeColor:"red",fillColor:"blue"}),o={zoom:p,center:e,draggable:l,visible:n,geoJSON:g,polygonOptions:r,clickMap:a=>{console.log("click map: ",a)},initMap:a=>{console.log("init map: ",a),fetch("//a.amap.com/jsapi_demos/static/geojson/chongqing.json").then(t=>t.json()).then(t=>{g.value=t})},toggleVisible:()=>{n.value=!n.value},click:a=>{alert("click GeoJSON")},get ElAmap(){return E},get ElAmapGeojson(){return B}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),F={class:"map-page-container"},V={class:"toolbar"};function z(i,c,p,e,l,n){return O(),M(N,null,[b("div",F,[v(e.ElAmap,{"show-label":!1,center:e.center,zoom:e.zoom,onClick:e.clickMap,onInit:e.initMap},{default:S(()=>[e.geoJSON?(O(),A(e.ElAmapGeojson,{key:0,geo:e.geoJSON,"polygon-options":e.polygonOptions,visible:e.visible,draggable:e.draggable,onClick:e.click},null,8,["geo","polygon-options","visible","draggable"])):C("",!0)]),_:1},8,["center","zoom"])]),b("div",V,[b("button",{onClick:e.toggleVisible},h(e.visible?"隐藏标记":"显示标记"),1)])],64)}const R=j(x,[["render",z],["__file","geojson.vue"]]);export{R as default};
