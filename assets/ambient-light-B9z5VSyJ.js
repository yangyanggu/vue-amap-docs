import{E as b}from"./index-C2AhXWuI.js";import{E as A}from"./index-D34mQpmt.js";import{E as v}from"./index-CMV7vHea.js";import{p as E,f as r,_ as L,o as y,c as k,a as c,d as i,w as _,ao as x,al as C}from"./app-BIv4BGsj.js";import{E as F}from"./index-XVBT3eyP.js";const B=E({__name:"ambient-light",setup(d,{expose:s}){s();const o=["#FFF8B4","#D3F299","#9FE084","#5ACA70","#00AF53","#00873A","#006B31","#004835","#003829"].reverse(),t=[1e3,2e3,4e3,6e3,8e3,1e4,12e3,14e3,16e3],m=r(11),p=r([120.109233,30.246411]),g=r(55),u=r("https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_gn.json"),f=r({topColor(a,n){const e=n.properties.health*100;return e<40?o[8]:e<50?o[7]:e<55?o[6]:e<60?o[5]:e<65?o[4]:e<70?o[3]:e<75?o[2]:e<80?o[1]:e<100?o[0]:"green"},sideTopColor(a,n){const e=n.properties.health*100;return e<40?o[8]:e<50?o[7]:e<55?o[6]:e<60?o[5]:e<65?o[4]:e<70?o[3]:e<75?o[2]:e<80?o[1]:e<100?o[0]:"green"},sideBottomColor(a,n){const e=n.properties.health*100;return e<40?o[8]:e<50?o[7]:e<55?o[6]:e<60?o[5]:e<65?o[4]:e<70?o[3]:e<75?o[2]:e<80?o[1]:e<100?o[0]:"green"},height(a,n){const e=n.properties.health*100;return e<40?t[8]:e<50?t[7]:e<55?t[6]:e<60?t[5]:e<65?t[4]:e<70?t[3]:e<75?t[2]:e<80?t[1]:e<100?t[0]:0},altitude:0}),l=r(!0),h={colors:o,height:t,zoom:m,center:p,pitch:g,sourceUrl:u,layerStyle:f,visible:l,changeVisible:()=>{l.value=!l.value},clickMap:a=>{console.log("click map: ",a)},initMap:a=>{console.log("init map: ",a)},get ElAmap(){return F},get ElAmapLoca(){return b},get ElAmapLocaAmbientLight(){return A},get ElAmapLocaPolygon(){return v}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),M={class:"map-page-container"},z={class:"toolbar"};function S(d,s,o,t,m,p){return y(),k(C,null,[c("div",M,[i(t.ElAmap,{"view-mode":"3D",pitch:t.pitch,"show-label":!1,center:t.center,zoom:t.zoom,onClick:t.clickMap,onInit:t.initMap},{default:_(()=>[i(t.ElAmapLoca,null,{default:_(()=>[i(t.ElAmapLocaAmbientLight,{color:"#fff"}),i(t.ElAmapLocaPolygon,{visible:t.visible,"source-url":t.sourceUrl,"layer-style":t.layerStyle,"visible-duration":500},null,8,["visible","source-url","layer-style"])]),_:1})]),_:1},8,["pitch","center","zoom"])]),c("div",z,[c("button",{onClick:t.changeVisible},x(t.visible?"隐藏":"显示"),1)])],64)}const O=L(B,[["render",S],["__file","ambient-light.vue"]]);export{O as default};
