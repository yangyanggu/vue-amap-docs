import{p as t,_ as s,r,o as i,c,a as n,d as p,al as m}from"./app-BIv4BGsj.js";import{E as d}from"./index-XVBT3eyP.js";const l=t({components:{ElAmap:d},data(){return{zoom:12,center:[121.59996,31.197646],map:null}},methods:{init(o){const e=new AMap.Marker({position:[121.59996,31.197646]});o.add(e),this.map=o,console.log("map init: ",o)},add(){const o=new AMap.Marker({position:[121.59996,31.177646]});this.map.add(o)}}}),u={class:"map-page-container"},_={class:"toolbar"};function f(o,e,k,v,$,b){const a=r("el-amap");return i(),c(m,null,[n("div",u,[p(a,{center:o.center,zoom:o.zoom,onInit:o.init},null,8,["center","zoom","onInit"])]),n("div",_,[n("button",{onClick:e[0]||(e[0]=h=>o.add())}," 添加标号 ")])],64)}const B=s(l,[["render",f],["__file","basic.vue"]]);export{B as default};