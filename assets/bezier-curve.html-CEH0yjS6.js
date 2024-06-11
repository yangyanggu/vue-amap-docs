import{_ as e,r as a,o,c as C,d as s,w as c,a as n,b as l,e as t}from"./app-BIv4BGsj.js";const u={},F=t('<h1 id="贝塞尔曲线-amap-beziercurve" tabindex="-1"><a class="header-anchor" href="#贝塞尔曲线-amap-beziercurve"><span>贝塞尔曲线(AMap.BezierCurve)</span></a></h1><p>贝塞尔曲线,支持二次、三次贝赛尔曲线</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>来源 <code>@vuemap/vue-amap</code> 组件库</p></div><h2 id="基础示例" tabindex="-1"><a class="header-anchor" href="#基础示例"><span>基础示例</span></a></h2>',4),D=n("p",null,"examples/vector/bezier-curve",-1),i=n("h2",{id:"静态属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#静态属性"},[n("span",null,"静态属性")])],-1),r=n("p",null,"仅且可以初始化配置，不支持响应式。",-1),k=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"类型"),n("th",null,"说明")])],-1),d=n("tr",null,[n("td",null,"bubble"),n("td",null,"Boolean"),n("td",null,"是否将覆盖物的鼠标或touch等事件冒泡到地图上 默认 false")],-1),A=n("td",null,"editOptions",-1),B=n("td",null,"Object",-1),g={href:"https://a.amap.com/jsapi/static/doc/20210906/index.html?v=2#polylineeditor",target:"_blank",rel:"noopener noreferrer"},m=n("tr",null,[n("td",null,"reEventWhenUpdate"),n("td",null,"Boolean"),n("td",null,"是否在组件更新时重新注册事件，主要用于数组更新时，解决绑定了事件但事件的对象不会更新问题，默认false")],-1),b=n("tr",null,[n("td",null,"extraOptions"),n("td",null,"Object"),n("td",null,"额外扩展属性，会直接将属性拷贝到初始化的options中，当key与props内的一样时会被props覆盖")],-1),h=t('<h2 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性"><span>动态属性</span></a></h2><p>支持响应式。</p><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>visible</td><td>Boolean</td><td>是否可见</td></tr><tr><td>editable</td><td>Boolean</td><td>折线当前是否可编辑</td></tr><tr><td>path</td><td>Array</td><td><code>1.1.11开始支持v-model</code>贝瑟尔曲线的路径。描述为一个二维数组规则如下：第一个元素是起点， 之后的元素同时描述控制点和途经点，之后每个元素可以有0个到2个控制点 控制点在前，途经点在最后 [ [lng,lat] ,//起点0 [lng,lat,lng,lat,lng,lat] ,//控制点、控制点、途经点2 [lng,lat,lng,lat] //控制点、途经点3 ] 或者 [ [ [lng,lat] ],//起点0 [ [lng,lat] , [lng,lat] ],//控制点、途经点1 [ [lng,lat] , [lng,lat] , [lng,lat] ],//控制点、控制点、途经点2 [ [lng,lat] , [lng,lat] ]//控制点、途经点3 ]</td></tr><tr><td>zIndex</td><td>Number</td><td>折线覆盖物的叠加顺序。默认叠加顺序，先添加的线在底层，后添加的线在上层。通过该属性可调整叠加顺序，使级别较高的折线覆盖物在上层显示。默认zIndex：10</td></tr><tr><td>strokeColor</td><td>String</td><td>线条颜色，使用16进制颜色代码赋值。默认值为#006600</td></tr><tr><td>strokeOpacity</td><td>Number</td><td>线条透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9</td></tr><tr><td>strokeWeight</td><td>Number</td><td>线条宽度，单位：像素</td></tr><tr><td>borderWeight</td><td>Number</td><td>描边线宽度</td></tr><tr><td>isOutline</td><td>Boolean</td><td>线条是否带描边，默认false</td></tr><tr><td>outlineColor</td><td>String</td><td>线条描边颜色，此项仅在isOutline为true时有效，默认：#000000</td></tr><tr><td>draggable</td><td>Boolean</td><td>设置多边形是否可拖拽移动，默认为false</td></tr><tr><td>strokeStyle</td><td>String</td><td>线样式，实线:solid，虚线:dashed</td></tr><tr><td>strokeDasharray</td><td>Array</td><td>勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9+浏览器有效 取值： 实线： [0,0,0] 虚线： [10,10] ， [10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线 点画线： [10,2,10] ， [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线</td></tr><tr><td>lineJoin</td><td>String</td><td>折线拐点的绘制样式，默认值为&#39;miter&#39;尖角，其他可选值：&#39;round&#39;圆角、&#39;bevel&#39;斜角</td></tr><tr><td>lineCap</td><td>String</td><td>折线两端线帽的绘制样式，默认值为&#39;butt&#39;无头，其他可选值：&#39;round&#39;圆头、&#39;square&#39;方头</td></tr><tr><td>geodesic</td><td>Boolean</td><td>是否绘制大地线，默认false</td></tr><tr><td>showDir</td><td>Boolean</td><td>是否延路径显示白色方向箭头,默认false。建议折线宽度大于6时使用</td></tr><tr><td>extData</td><td>any</td><td>用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等</td></tr></tbody></table><h2 id="ref-可用方法" tabindex="-1"><a class="header-anchor" href="#ref-可用方法"><span>ref 可用方法</span></a></h2><p>提供无副作用的同步帮助方法</p><table><thead><tr><th>函数</th><th>返回</th><th>说明</th></tr></thead><tbody><tr><td>$$getInstance()</td><td>AMap.BezierCurve</td><td>获取实例</td></tr></tbody></table><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2><table><thead><tr><th>事件</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>init</td><td>Object</td><td>高德组件实例</td></tr><tr><td>click</td><td>MapsEvent</td><td>鼠标左键单击事件</td></tr><tr><td>dblclick</td><td>MapsEvent</td><td>鼠标左键双击事件</td></tr><tr><td>rightclick</td><td>MapsEvent</td><td>鼠标右键单击事件</td></tr><tr><td>hide</td><td>{type, target}</td><td>隐藏</td></tr><tr><td>show</td><td>{type, target}</td><td>显示</td></tr><tr><td>mousedown</td><td>MapsEvent</td><td>鼠标按下</td></tr><tr><td>mouseup</td><td>MapsEvent</td><td>鼠标抬起</td></tr><tr><td>mouseover</td><td>MapsEvent</td><td>鼠标经过</td></tr><tr><td>mouseout</td><td>MapsEvent</td><td>鼠标移出</td></tr><tr><td>touchstart</td><td>MapsEvent</td><td>触摸开始时触发事件，仅适用移动设备</td></tr><tr><td>touchmove</td><td>MapsEvent</td><td>触摸移动进行中时触发事件，仅适用移动设备</td></tr><tr><td>touchend</td><td>MapsEvent</td><td>触摸结束时触发事件，仅适用移动设备</td></tr><tr><td>dragstart</td><td>MapsEvent</td><td>开始拖拽点标记时触发事件</td></tr><tr><td>dragging</td><td>MapsEvent</td><td>鼠标拖拽移动点标记时触发事件</td></tr><tr><td>dragend</td><td>MapsEvent</td><td>点标记拖拽移动结束触发事件</td></tr><tr><td>addnode</td><td>{target: Polygon, lnglat: Lnglat, pixel: Pixel}</td><td>编辑状态下，通过鼠标在折线上增加一个节点或在多边形上增加一个顶点时触发此事件</td></tr><tr><td>removenode</td><td>{target: Polygon, lnglat: Lnglat, pixel: Pixel}</td><td>编辑状态下，通过鼠标在折线上删除一个节点或在多边形上删除一个顶点时触发此事件</td></tr><tr><td>adjust</td><td>{target: Polygon, lnglat: Lnglat, pixel: Pixel}</td><td>编辑状态下，鼠标调整折线上某个节点或多边形上某个顶点的位置时触发此事件</td></tr><tr><td>add</td><td>{target: target}</td><td>创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象</td></tr><tr><td>end</td><td>{type,target}</td><td>关闭编辑状态，触发该事件，target即为编辑后的折线/多边形对象</td></tr></tbody></table>',8);function v(y,f){const p=a("vp-demo"),E=a("ExternalLinkIcon");return o(),C("div",null,[F,s(p,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Emap-page-container%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ashow-label%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ezoom%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EclickMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40init%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EinitMap%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-amap-bezier-curve%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aeditable%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epolyline.editable%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Avisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epolyline.visible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Astroke-weight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E6%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adraggable%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epolyline.draggable%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epolyline.path%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eclick%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-amap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoolbar%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EtoggleVisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%7B%7B%20polyline.visible%20%3F%20'%E9%9A%90%E8%97%8F%E6%A0%87%E8%AE%B0'%20%3A%20'%E6%98%BE%E7%A4%BA%E6%A0%87%E8%AE%B0'%20%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EchangeDraggable%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%7B%7B%20polyline.draggable%20%3F%20'%E7%A6%81%E6%AD%A2%E6%A0%87%E8%AE%B0%E7%A7%BB%E5%8A%A8'%20%3A%20'%E5%85%81%E8%AE%B8%E6%A0%87%E8%AE%B0%E7%A7%BB%E5%8A%A8'%20%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EchangeEditable%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%7B%7B%20polyline.editable%20%3F%20'%E5%81%9C%E6%AD%A2%E7%BC%96%E8%BE%91'%20%3A%20'%E5%BC%80%E5%A7%8B%E7%BC%96%E8%BE%91'%20%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20reactive%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EElAmap%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ElAmapBezierCurve%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22%40vuemap%2Fvue-amap%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20zoom%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E13%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20center%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.397637%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.900001%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20polyline%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Ereactive%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Epath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E6%AF%8F%E4%B8%AA%E5%BC%A7%E7%BA%BF%E6%AE%B5%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%8F%8F%E8%BF%B0%E6%96%B9%E5%BC%8F%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.37%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.91%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E8%B5%B7%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E7%AC%AC%E4%B8%80%E6%AE%B5%E5%BC%A7%E7%BA%BF%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.380298%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.907771%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.38%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.90%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E9%80%94%E7%BB%8F%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E7%AC%AC%E4%BA%8C%E6%AE%B5%E5%BC%A7%E7%BA%BF%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.385298%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.907771%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.40%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.90%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E9%80%94%E7%BB%8F%E7%82%B9%2F%2F%E5%BC%A7%E7%BA%BF%E6%AE%B5%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%8F%8F%E8%BF%B0%E6%96%B9%E5%BC%8F1%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E7%AC%AC%E4%B8%89%E6%AE%B5%E5%BC%A7%E7%BA%BF%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E5%BC%A7%E7%BA%BF%E6%AE%B5%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%8F%8F%E8%BF%B0%E6%96%B9%E5%BC%8F2%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.392872%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.887391%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.40772%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.909252%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.41%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.89%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E9%80%94%E7%BB%8F%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E7%AC%AC%E5%9B%9B%E6%AE%B5%E5%BC%A7%E7%BA%BF%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.423857%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.889498%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.422312%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.899639%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E116.425273%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E39.902273%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E9%80%94%E7%BB%8F%E7%82%B9%EF%BC%8C%E6%AF%8F%E6%AE%B5%E6%9C%80%E5%A4%9A%E4%B8%A4%E4%B8%AA%E6%8E%A7%E5%88%B6%E7%82%B9%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eeditable%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edraggable%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EclickMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'click%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20e%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EinitMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Emap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'init%20map%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20map%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EchangeEditable%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20polyline%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eeditable%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3Epolyline%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eeditable%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EtoggleVisible%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20polyline%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3Epolyline%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EchangeDraggable%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20polyline%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Edraggable%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E!%3C%2Fspan%3Epolyline%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Edraggable%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3Eclick%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Ee%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Ealert%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'click%20BezierCurve'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"examples/vector/bezier-curve","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22map-page-container%22%3E%0A%20%20%20%20%3Cel-amap%0A%20%20%20%20%20%20%3Ashow-label%3D%22false%22%0A%20%20%20%20%20%20%3Acenter%3D%22center%22%0A%20%20%20%20%20%20%3Azoom%3D%22zoom%22%0A%20%20%20%20%20%20%40click%3D%22clickMap%22%0A%20%20%20%20%20%20%40init%3D%22initMap%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cel-amap-bezier-curve%0A%20%20%20%20%20%20%20%20%3Aeditable%3D%22polyline.editable%22%0A%20%20%20%20%20%20%20%20%3Avisible%3D%22polyline.visible%22%0A%20%20%20%20%20%20%20%20%3Astroke-weight%3D%226%22%0A%20%20%20%20%20%20%20%20%3Adraggable%3D%22polyline.draggable%22%0A%20%20%20%20%20%20%20%20%3Apath%3D%22polyline.path%22%0A%20%20%20%20%20%20%20%20%40click%3D%22click%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fel-amap%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22toolbar%22%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22toggleVisible%22%3E%0A%20%20%20%20%20%20%7B%7B%20polyline.visible%20%3F%20'%E9%9A%90%E8%97%8F%E6%A0%87%E8%AE%B0'%20%3A%20'%E6%98%BE%E7%A4%BA%E6%A0%87%E8%AE%B0'%20%7D%7D%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22changeDraggable%22%3E%0A%20%20%20%20%20%20%7B%7B%20polyline.draggable%20%3F%20'%E7%A6%81%E6%AD%A2%E6%A0%87%E8%AE%B0%E7%A7%BB%E5%8A%A8'%20%3A%20'%E5%85%81%E8%AE%B8%E6%A0%87%E8%AE%B0%E7%A7%BB%E5%8A%A8'%20%7D%7D%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22changeEditable%22%3E%0A%20%20%20%20%20%20%7B%7B%20polyline.editable%20%3F%20'%E5%81%9C%E6%AD%A2%E7%BC%96%E8%BE%91'%20%3A%20'%E5%BC%80%E5%A7%8B%E7%BC%96%E8%BE%91'%20%7D%7D%0A%20%20%20%20%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20reactive%7D%20from%20%22vue%22%3B%0Aimport%20%7BElAmap%2C%20ElAmapBezierCurve%7D%20from%20%22%40vuemap%2Fvue-amap%22%3B%0A%0Aconst%20zoom%20%3D%20ref(13)%3B%0Aconst%20center%20%3D%20ref(%5B116.397637%2C%2039.900001%5D)%3B%0Aconst%20polyline%20%3D%20reactive(%7B%0A%20%20path%3A%20%5B%2F%2F%E6%AF%8F%E4%B8%AA%E5%BC%A7%E7%BA%BF%E6%AE%B5%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%8F%8F%E8%BF%B0%E6%96%B9%E5%BC%8F%0A%20%20%20%20%5B116.37%2C%2039.91%5D%2C%2F%2F%E8%B5%B7%E7%82%B9%0A%20%20%20%20%2F%2F%E7%AC%AC%E4%B8%80%E6%AE%B5%E5%BC%A7%E7%BA%BF%0A%20%20%20%20%5B116.380298%2C%2039.907771%2C%20116.38%2C%2039.90%5D%2C%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E9%80%94%E7%BB%8F%E7%82%B9%0A%20%20%20%20%2F%2F%E7%AC%AC%E4%BA%8C%E6%AE%B5%E5%BC%A7%E7%BA%BF%0A%20%20%20%20%5B116.385298%2C%2039.907771%2C%20116.40%2C%2039.90%5D%2C%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E9%80%94%E7%BB%8F%E7%82%B9%2F%2F%E5%BC%A7%E7%BA%BF%E6%AE%B5%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%8F%8F%E8%BF%B0%E6%96%B9%E5%BC%8F1%0A%20%20%20%20%2F%2F%E7%AC%AC%E4%B8%89%E6%AE%B5%E5%BC%A7%E7%BA%BF%0A%20%20%20%20%5B%2F%2F%E5%BC%A7%E7%BA%BF%E6%AE%B5%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%8F%8F%E8%BF%B0%E6%96%B9%E5%BC%8F2%0A%20%20%20%20%20%20%5B116.392872%2C%2039.887391%5D%2C%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%0A%20%20%20%20%20%20%5B116.40772%2C%2039.909252%5D%2C%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%0A%20%20%20%20%20%20%5B116.41%2C%2039.89%5D%2F%2F%E9%80%94%E7%BB%8F%E7%82%B9%0A%20%20%20%20%5D%2C%0A%20%20%20%20%2F%2F%E7%AC%AC%E5%9B%9B%E6%AE%B5%E5%BC%A7%E7%BA%BF%0A%20%20%20%20%5B116.423857%2C%2039.889498%2C%20116.422312%2C%2039.899639%2C%20116.425273%2C%2039.902273%5D%0A%20%20%20%20%2F%2F%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E6%8E%A7%E5%88%B6%E7%82%B9%EF%BC%8C%E9%80%94%E7%BB%8F%E7%82%B9%EF%BC%8C%E6%AF%8F%E6%AE%B5%E6%9C%80%E5%A4%9A%E4%B8%A4%E4%B8%AA%E6%8E%A7%E5%88%B6%E7%82%B9%0A%20%20%5D%2C%0A%20%20editable%3A%20false%2C%0A%20%20visible%3A%20true%2C%0A%20%20draggable%3A%20false%2C%0A%7D)%3B%0A%0Aconst%20clickMap%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20console.log('click%20map%3A%20'%2C%20e)%3B%0A%7D%0Aconst%20initMap%20%3D%20(map)%20%3D%3E%20%7B%0A%20%20console.log('init%20map%3A%20'%2C%20map)%3B%0A%7D%0Aconst%20changeEditable%20%3D%20()%20%3D%3E%20%7B%0A%20%20polyline.editable%20%3D%20!polyline.editable%3B%0A%7D%0Aconst%20toggleVisible%20%3D%20()%20%3D%3E%20%7B%0A%20%20polyline.visible%20%3D%20!polyline.visible%3B%0A%7D%0Aconst%20changeDraggable%20%3D%20()%20%3D%3E%20%7B%0A%20%20polyline.draggable%20%3D%20!polyline.draggable%3B%0A%7D%0Aconst%20click%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20alert('click%20BezierCurve')%3B%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A%3C%2Fstyle%3E%0A",description:"","import-json":""},{default:c(()=>[D]),_:1}),i,r,n("table",null,[k,n("tbody",null,[d,n("tr",null,[A,B,n("td",null,[n("a",g,[l("设置编辑参数参数"),s(E)])])]),m,b])]),h])}const x=e(u,[["render",v],["__file","bezier-curve.html.vue"]]);export{x as default};
