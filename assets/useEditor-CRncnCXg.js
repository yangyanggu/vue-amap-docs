import{e as r,f as a,h as c}from"./index-XVBT3eyP.js";function i(n,o){if(!n)return;const f=["addnode","adjust","removenode","end","move","add"],t={};Object.keys(o).forEach(e=>{if(r.test(e)){const s=a(e);f.indexOf(s)!==-1&&(t[s]=o[e])}}),Object.keys(t).forEach(e=>{c(n,e,t[e])})}export{i as u};