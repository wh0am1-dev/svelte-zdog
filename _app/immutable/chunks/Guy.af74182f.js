import{S as Y,i as H,s as K,C as yt,a as O,c as T,b as A,D as xt,E as $t,F as wt,g as m,d as y,h as _,L as kt,o as Kt,M,N as B,w as At,O as ae,P as he,m as Qt,n as q,k as ue,l as fe,Q as Jt,R as Et,T as ce,y as w,z as b,A as R,B as S,H as Q}from"./index.5318f891.js";var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ct={},pe={get exports(){return Ct},set exports(h){Ct=h}},Z={},le={get exports(){return Z},set exports(h){Z=h}};/*!
 * Zdog v1.1.3
 * Round, flat, designer-friendly pseudo-3D engine
 * Licensed MIT
 * https://zzz.dog
 * Copyright 2020 Metafizzy
 */var Gt;function k(){return Gt||(Gt=1,function(h){(function(n,r){h.exports?h.exports=r():n.Zdog=r()})($,function(){var r={};r.TAU=Math.PI*2,r.extend=function(i,o){for(var f in o)i[f]=o[f];return i},r.lerp=function(i,o,f){return(o-i)*f+i},r.modulo=function(i,o){return(i%o+o)%o};var t={2:function(i){return i*i},3:function(i){return i*i*i},4:function(i){return i*i*i*i},5:function(i){return i*i*i*i*i}};return r.easeInOut=function(i,o){if(o==1)return i;i=Math.max(0,Math.min(1,i));var f=i<.5,e=f?i:1-i;e/=.5;var s=t[o]||t[2],u=s(e);return u/=2,f?u:1-u},r})}(le)),Z}var tt={},de={get exports(){return tt},set exports(h){tt=h}},qt;function Zt(){return qt||(qt=1,function(h){(function(n,r){h.exports?h.exports=r():n.Zdog.CanvasRenderer=r()})($,function(){var r={isCanvas:!0};return r.begin=function(t){t.beginPath()},r.move=function(t,i,o){t.moveTo(o.x,o.y)},r.line=function(t,i,o){t.lineTo(o.x,o.y)},r.bezier=function(t,i,o,f,e){t.bezierCurveTo(o.x,o.y,f.x,f.y,e.x,e.y)},r.closePath=function(t){t.closePath()},r.setPath=function(){},r.renderPath=function(t,i,o,f){this.begin(t,i),o.forEach(function(e){e.render(t,i,r)}),f&&this.closePath(t,i)},r.stroke=function(t,i,o,f,e){o&&(t.strokeStyle=f,t.lineWidth=e,t.stroke())},r.fill=function(t,i,o,f){o&&(t.fillStyle=f,t.fill())},r.end=function(){},r})}(de)),tt}var et={},ve={get exports(){return et},set exports(h){et=h}},Mt;function te(){return Mt||(Mt=1,function(h){(function(n,r){h.exports?h.exports=r():n.Zdog.SvgRenderer=r()})($,function(){var r={isSvg:!0},t=r.round=function(o){return Math.round(o*1e3)/1e3};function i(o){return t(o.x)+","+t(o.y)+" "}return r.begin=function(){},r.move=function(o,f,e){return"M"+i(e)},r.line=function(o,f,e){return"L"+i(e)},r.bezier=function(o,f,e,s,u){return"C"+i(e)+i(s)+i(u)},r.closePath=function(){return"Z"},r.setPath=function(o,f,e){f.setAttribute("d",e)},r.renderPath=function(o,f,e,s){var u="";e.forEach(function(a){u+=a.render(o,f,r)}),s&&(u+=this.closePath(o,f)),this.setPath(o,f,u)},r.stroke=function(o,f,e,s,u){e&&(f.setAttribute("stroke",s),f.setAttribute("stroke-width",u))},r.fill=function(o,f,e,s){var u=e?s:"none";f.setAttribute("fill",u)},r.end=function(o,f){o.appendChild(f)},r})}(ve)),et}var rt={},ge={get exports(){return rt},set exports(h){rt=h}},Dt;function j(){return Dt||(Dt=1,function(h){(function(n,r){if(h.exports)h.exports=r(k());else{var t=n.Zdog;t.Vector=r(t)}})($,function(r){function t(e){this.set(e)}var i=r.TAU;t.prototype.set=function(e){return this.x=e&&e.x||0,this.y=e&&e.y||0,this.z=e&&e.z||0,this},t.prototype.write=function(e){return e?(this.x=e.x!=null?e.x:this.x,this.y=e.y!=null?e.y:this.y,this.z=e.z!=null?e.z:this.z,this):this},t.prototype.rotate=function(e){if(e)return this.rotateZ(e.z),this.rotateY(e.y),this.rotateX(e.x),this},t.prototype.rotateZ=function(e){o(this,e,"x","y")},t.prototype.rotateX=function(e){o(this,e,"y","z")},t.prototype.rotateY=function(e){o(this,e,"x","z")};function o(e,s,u,a){if(!(!s||s%i===0)){var c=Math.cos(s),p=Math.sin(s),v=e[u],d=e[a];e[u]=v*c-d*p,e[a]=d*c+v*p}}t.prototype.isSame=function(e){return e?this.x===e.x&&this.y===e.y&&this.z===e.z:!1},t.prototype.add=function(e){return e?(this.x+=e.x||0,this.y+=e.y||0,this.z+=e.z||0,this):this},t.prototype.subtract=function(e){return e?(this.x-=e.x||0,this.y-=e.y||0,this.z-=e.z||0,this):this},t.prototype.multiply=function(e){return e==null?this:(typeof e=="number"?(this.x*=e,this.y*=e,this.z*=e):(this.x*=e.x!=null?e.x:1,this.y*=e.y!=null?e.y:1,this.z*=e.z!=null?e.z:1),this)},t.prototype.transform=function(e,s,u){return this.multiply(u),this.rotate(s),this.add(e),this},t.prototype.lerp=function(e,s){return this.x=r.lerp(this.x,e.x||0,s),this.y=r.lerp(this.y,e.y||0,s),this.z=r.lerp(this.z,e.z||0,s),this},t.prototype.magnitude=function(){var e=this.x*this.x+this.y*this.y+this.z*this.z;return f(e)};function f(e){return Math.abs(e-1)<1e-8?1:Math.sqrt(e)}return t.prototype.magnitude2d=function(){var e=this.x*this.x+this.y*this.y;return f(e)},t.prototype.copy=function(){return new t(this)},t})}(ge)),rt}var nt={},me={get exports(){return nt},set exports(h){nt=h}},Ft;function L(){return Ft||(Ft=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),j(),Zt(),te());else{var t=n.Zdog;t.Anchor=r(t,t.Vector,t.CanvasRenderer,t.SvgRenderer)}})($,function(r,t,i,o){var f=r.TAU,e={x:1,y:1,z:1};function s(a){this.create(a||{})}s.prototype.create=function(a){this.children=[],r.extend(this,this.constructor.defaults),this.setOptions(a),this.translate=new t(a.translate),this.rotate=new t(a.rotate),this.scale=new t(e).multiply(this.scale),this.origin=new t,this.renderOrigin=new t,this.addTo&&this.addTo.addChild(this)},s.defaults={},s.optionKeys=Object.keys(s.defaults).concat(["rotate","translate","scale","addTo"]),s.prototype.setOptions=function(a){var c=this.constructor.optionKeys;for(var p in a)c.indexOf(p)!=-1&&(this[p]=a[p])},s.prototype.addChild=function(a){this.children.indexOf(a)==-1&&(a.remove(),a.addTo=this,this.children.push(a))},s.prototype.removeChild=function(a){var c=this.children.indexOf(a);c!=-1&&this.children.splice(c,1)},s.prototype.remove=function(){this.addTo&&this.addTo.removeChild(this)},s.prototype.update=function(){this.reset(),this.children.forEach(function(a){a.update()}),this.transform(this.translate,this.rotate,this.scale)},s.prototype.reset=function(){this.renderOrigin.set(this.origin)},s.prototype.transform=function(a,c,p){this.renderOrigin.transform(a,c,p),this.children.forEach(function(v){v.transform(a,c,p)})},s.prototype.updateGraph=function(){this.update(),this.updateFlatGraph(),this.flatGraph.forEach(function(a){a.updateSortValue()}),this.flatGraph.sort(s.shapeSorter)},s.shapeSorter=function(a,c){return a.sortValue-c.sortValue},Object.defineProperty(s.prototype,"flatGraph",{get:function(){return this._flatGraph||this.updateFlatGraph(),this._flatGraph},set:function(a){this._flatGraph=a}}),s.prototype.updateFlatGraph=function(){this.flatGraph=this.getFlatGraph()},s.prototype.getFlatGraph=function(){var a=[this];return this.addChildFlatGraph(a)},s.prototype.addChildFlatGraph=function(a){return this.children.forEach(function(c){var p=c.getFlatGraph();Array.prototype.push.apply(a,p)}),a},s.prototype.updateSortValue=function(){this.sortValue=this.renderOrigin.z},s.prototype.render=function(){},s.prototype.renderGraphCanvas=function(a){if(!a)throw new Error("ctx is "+a+". Canvas context required for render. Check .renderGraphCanvas( ctx ).");this.flatGraph.forEach(function(c){c.render(a,i)})},s.prototype.renderGraphSvg=function(a){if(!a)throw new Error("svg is "+a+". SVG required for render. Check .renderGraphSvg( svg ).");this.flatGraph.forEach(function(c){c.render(a,o)})},s.prototype.copy=function(a){var c={},p=this.constructor.optionKeys;p.forEach(function(d){c[d]=this[d]},this),r.extend(c,a);var v=this.constructor;return new v(c)},s.prototype.copyGraph=function(a){var c=this.copy(a);return this.children.forEach(function(p){p.copyGraph({addTo:c})}),c},s.prototype.normalizeRotate=function(){this.rotate.x=r.modulo(this.rotate.x,f),this.rotate.y=r.modulo(this.rotate.y,f),this.rotate.z=r.modulo(this.rotate.z,f)};function u(a){return function(c){function p(v){this.create(v||{})}return p.prototype=Object.create(a.prototype),p.prototype.constructor=p,p.defaults=r.extend({},a.defaults),r.extend(p.defaults,c),p.optionKeys=a.optionKeys.slice(0),Object.keys(p.defaults).forEach(function(v){!p.optionKeys.indexOf(v)!=1&&p.optionKeys.push(v)}),p.subclass=u(p),p}}return s.subclass=u(s),s})}(me)),nt}var it={},ye={get exports(){return it},set exports(h){it=h}},Ot;function ee(){return Ot||(Ot=1,function(h){(function(n,r){h.exports?h.exports=r():n.Zdog.Dragger=r()})($,function(){var r=typeof window<"u",t="mousedown",i="mousemove",o="mouseup";r&&(window.PointerEvent?(t="pointerdown",i="pointermove",o="pointerup"):"ontouchstart"in window&&(t="touchstart",i="touchmove",o="touchend"));function f(){}function e(s){this.create(s||{})}return e.prototype.create=function(s){this.onDragStart=s.onDragStart||f,this.onDragMove=s.onDragMove||f,this.onDragEnd=s.onDragEnd||f,this.bindDrag(s.startElement)},e.prototype.bindDrag=function(s){s=this.getQueryElement(s),s&&(s.style.touchAction="none",s.addEventListener(t,this))},e.prototype.getQueryElement=function(s){return typeof s=="string"&&(s=document.querySelector(s)),s},e.prototype.handleEvent=function(s){var u=this["on"+s.type];u&&u.call(this,s)},e.prototype.onmousedown=e.prototype.onpointerdown=function(s){this.dragStart(s,s)},e.prototype.ontouchstart=function(s){this.dragStart(s,s.changedTouches[0])},e.prototype.dragStart=function(s,u){s.preventDefault(),this.dragStartX=u.pageX,this.dragStartY=u.pageY,r&&(window.addEventListener(i,this),window.addEventListener(o,this)),this.onDragStart(u)},e.prototype.ontouchmove=function(s){this.dragMove(s,s.changedTouches[0])},e.prototype.onmousemove=e.prototype.onpointermove=function(s){this.dragMove(s,s)},e.prototype.dragMove=function(s,u){s.preventDefault();var a=u.pageX-this.dragStartX,c=u.pageY-this.dragStartY;this.onDragMove(u,a,c)},e.prototype.onmouseup=e.prototype.onpointerup=e.prototype.ontouchend=e.prototype.dragEnd=function(){window.removeEventListener(i,this),window.removeEventListener(o,this),this.onDragEnd()},e})}(ye)),it}var st={},xe={get exports(){return st},set exports(h){st=h}},Tt;function $e(){return Tt||(Tt=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),L(),ee());else{var t=n.Zdog;t.Illustration=r(t,t.Anchor,t.Dragger)}})($,function(r,t,i){function o(){}var f=r.TAU,e=t.subclass({element:void 0,centered:!0,zoom:1,dragRotate:!1,resize:!1,onPrerender:o,onDragStart:o,onDragMove:o,onDragEnd:o,onResize:o});r.extend(e.prototype,i.prototype),e.prototype.create=function(u){t.prototype.create.call(this,u),i.prototype.create.call(this,u),this.setElement(this.element),this.setDragRotate(this.dragRotate),this.setResize(this.resize)},e.prototype.setElement=function(u){if(u=this.getQueryElement(u),!u)throw new Error("Zdog.Illustration element required. Set to "+u);var a=u.nodeName.toLowerCase();a=="canvas"?this.setCanvas(u):a=="svg"&&this.setSvg(u)},e.prototype.setSize=function(u,a){u=Math.round(u),a=Math.round(a),this.isCanvas?this.setSizeCanvas(u,a):this.isSvg&&this.setSizeSvg(u,a)},e.prototype.setResize=function(u){this.resize=u,this.resizeListener||(this.resizeListener=this.onWindowResize.bind(this)),u?(window.addEventListener("resize",this.resizeListener),this.onWindowResize()):window.removeEventListener("resize",this.resizeListener)},e.prototype.onWindowResize=function(){this.setMeasuredSize(),this.onResize(this.width,this.height)},e.prototype.setMeasuredSize=function(){var u,a,c=this.resize=="fullscreen";if(c)u=window.innerWidth,a=window.innerHeight;else{var p=this.element.getBoundingClientRect();u=p.width,a=p.height}this.setSize(u,a)},e.prototype.renderGraph=function(u){this.isCanvas?this.renderGraphCanvas(u):this.isSvg&&this.renderGraphSvg(u)},e.prototype.updateRenderGraph=function(u){this.updateGraph(),this.renderGraph(u)},e.prototype.setCanvas=function(u){this.element=u,this.isCanvas=!0,this.ctx=this.element.getContext("2d"),this.setSizeCanvas(u.width,u.height)},e.prototype.setSizeCanvas=function(u,a){this.width=u,this.height=a;var c=this.pixelRatio=window.devicePixelRatio||1;this.element.width=this.canvasWidth=u*c,this.element.height=this.canvasHeight=a*c;var p=c>1&&!this.resize;p&&(this.element.style.width=u+"px",this.element.style.height=a+"px")},e.prototype.renderGraphCanvas=function(u){u=u||this,this.prerenderCanvas(),t.prototype.renderGraphCanvas.call(u,this.ctx),this.postrenderCanvas()},e.prototype.prerenderCanvas=function(){var u=this.ctx;if(u.lineCap="round",u.lineJoin="round",u.clearRect(0,0,this.canvasWidth,this.canvasHeight),u.save(),this.centered){var a=this.width/2*this.pixelRatio,c=this.height/2*this.pixelRatio;u.translate(a,c)}var p=this.pixelRatio*this.zoom;u.scale(p,p),this.onPrerender(u)},e.prototype.postrenderCanvas=function(){this.ctx.restore()},e.prototype.setSvg=function(u){this.element=u,this.isSvg=!0,this.pixelRatio=1;var a=u.getAttribute("width"),c=u.getAttribute("height");this.setSizeSvg(a,c)},e.prototype.setSizeSvg=function(u,a){this.width=u,this.height=a;var c=u/this.zoom,p=a/this.zoom,v=this.centered?-c/2:0,d=this.centered?-p/2:0;this.element.setAttribute("viewBox",v+" "+d+" "+c+" "+p),this.resize?(this.element.removeAttribute("width"),this.element.removeAttribute("height")):(this.element.setAttribute("width",u),this.element.setAttribute("height",a))},e.prototype.renderGraphSvg=function(u){u=u||this,s(this.element),this.onPrerender(this.element),t.prototype.renderGraphSvg.call(u,this.element)};function s(u){for(;u.firstChild;)u.removeChild(u.firstChild)}return e.prototype.setDragRotate=function(u){if(u)u===!0&&(u=this);else return;this.dragRotate=u,this.bindDrag(this.element)},e.prototype.dragStart=function(){this.dragStartRX=this.dragRotate.rotate.x,this.dragStartRY=this.dragRotate.rotate.y,i.prototype.dragStart.apply(this,arguments)},e.prototype.dragMove=function(u,a){var c=a.pageX-this.dragStartX,p=a.pageY-this.dragStartY,v=Math.min(this.width,this.height),d=c/v*f,l=p/v*f;this.dragRotate.rotate.x=this.dragStartRX-l,this.dragRotate.rotate.y=this.dragStartRY-d,i.prototype.dragMove.apply(this,arguments)},e})}(xe)),st}var ot={},we={get exports(){return ot},set exports(h){ot=h}},Bt;function bt(){return Bt||(Bt=1,function(h){(function(n,r){if(h.exports)h.exports=r(j());else{var t=n.Zdog;t.PathCommand=r(t.Vector)}})($,function(r){function t(e,s,u){this.method=e,this.points=s.map(i),this.renderPoints=s.map(o),this.previousPoint=u,this.endRenderPoint=this.renderPoints[this.renderPoints.length-1],e=="arc"&&(this.controlPoints=[new r,new r])}function i(e){return e instanceof r?e:new r(e)}function o(e){return new r(e)}t.prototype.reset=function(){var e=this.points;this.renderPoints.forEach(function(s,u){var a=e[u];s.set(a)})},t.prototype.transform=function(e,s,u){this.renderPoints.forEach(function(a){a.transform(e,s,u)})},t.prototype.render=function(e,s,u){return this[this.method](e,s,u)},t.prototype.move=function(e,s,u){return u.move(e,s,this.renderPoints[0])},t.prototype.line=function(e,s,u){return u.line(e,s,this.renderPoints[0])},t.prototype.bezier=function(e,s,u){var a=this.renderPoints[0],c=this.renderPoints[1],p=this.renderPoints[2];return u.bezier(e,s,a,c,p)};var f=9/16;return t.prototype.arc=function(e,s,u){var a=this.previousPoint,c=this.renderPoints[0],p=this.renderPoints[1],v=this.controlPoints[0],d=this.controlPoints[1];return v.set(a).lerp(c,f),d.set(p).lerp(c,f),u.bezier(e,s,v,d,p)},t})}(we)),ot}var at={},be={get exports(){return at},set exports(h){at=h}},Ut;function V(){return Ut||(Ut=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),j(),bt(),L());else{var t=n.Zdog;t.Shape=r(t,t.Vector,t.PathCommand,t.Anchor)}})($,function(r,t,i,o){var f=o.subclass({stroke:1,fill:!1,color:"#333",closed:!0,visible:!0,path:[{}],front:{z:1},backface:!0});f.prototype.create=function(a){o.prototype.create.call(this,a),this.updatePath(),this.front=new t(a.front||this.front),this.renderFront=new t(this.front),this.renderNormal=new t};var e=["move","line","bezier","arc"];f.prototype.updatePath=function(){this.setPath(),this.updatePathCommands()},f.prototype.setPath=function(){},f.prototype.updatePathCommands=function(){var a;this.pathCommands=this.path.map(function(c,p){var v=Object.keys(c),d=v[0],l=c[d],g=v.length==1&&e.indexOf(d)!=-1;g||(d="line",l=c);var x=d=="line"||d=="move",E=Array.isArray(l);x&&!E&&(l=[l]),d=p===0?"move":d;var P=new i(d,l,a);return a=P.endRenderPoint,P})},f.prototype.reset=function(){this.renderOrigin.set(this.origin),this.renderFront.set(this.front),this.pathCommands.forEach(function(a){a.reset()})},f.prototype.transform=function(a,c,p){this.renderOrigin.transform(a,c,p),this.renderFront.transform(a,c,p),this.renderNormal.set(this.renderOrigin).subtract(this.renderFront),this.pathCommands.forEach(function(v){v.transform(a,c,p)}),this.children.forEach(function(v){v.transform(a,c,p)})},f.prototype.updateSortValue=function(){var a=this.pathCommands.length,c=this.pathCommands[0].endRenderPoint,p=this.pathCommands[a-1].endRenderPoint,v=a>2&&c.isSame(p);v&&(a-=1);for(var d=0,l=0;l<a;l++)d+=this.pathCommands[l].endRenderPoint.z;this.sortValue=d/a},f.prototype.render=function(a,c){var p=this.pathCommands.length;if(!(!this.visible||!p)&&(this.isFacingBack=this.renderNormal.z>0,!(!this.backface&&this.isFacingBack))){if(!c)throw new Error("Zdog renderer required. Set to "+c);var v=p==1;c.isCanvas&&v?this.renderCanvasDot(a,c):this.renderPath(a,c)}};var s=r.TAU;f.prototype.renderCanvasDot=function(a){var c=this.getLineWidth();if(c){a.fillStyle=this.getRenderColor();var p=this.pathCommands[0].endRenderPoint;a.beginPath();var v=c/2;a.arc(p.x,p.y,v,0,s),a.fill()}},f.prototype.getLineWidth=function(){return this.stroke?this.stroke==!0?1:this.stroke:0},f.prototype.getRenderColor=function(){var a=typeof this.backface=="string"&&this.isFacingBack,c=a?this.backface:this.color;return c},f.prototype.renderPath=function(a,c){var p=this.getRenderElement(a,c),v=this.pathCommands.length==2&&this.pathCommands[1].method=="line",d=!v&&this.closed,l=this.getRenderColor();c.renderPath(a,p,this.pathCommands,d),c.stroke(a,p,this.stroke,l,this.getLineWidth()),c.fill(a,p,this.fill,l),c.end(a,p)};var u="http://www.w3.org/2000/svg";return f.prototype.getRenderElement=function(a,c){if(c.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(u,"path"),this.svgElement.setAttribute("stroke-linecap","round"),this.svgElement.setAttribute("stroke-linejoin","round")),this.svgElement},f})}(be)),at}var ht={},Re={get exports(){return ht},set exports(h){ht=h}},Lt;function re(){return Lt||(Lt=1,function(h){(function(n,r){if(h.exports)h.exports=r(L());else{var t=n.Zdog;t.Group=r(t.Anchor)}})($,function(r){var t=r.subclass({updateSort:!1,visible:!0});return t.prototype.updateSortValue=function(){var i=0;this.flatGraph.forEach(function(o){o.updateSortValue(),i+=o.sortValue}),this.sortValue=i/this.flatGraph.length,this.updateSort&&this.flatGraph.sort(r.shapeSorter)},t.prototype.render=function(i,o){this.visible&&this.flatGraph.forEach(function(f){f.render(i,o)})},t.prototype.updateFlatGraph=function(){var i=[];this.flatGraph=this.addChildFlatGraph(i)},t.prototype.getFlatGraph=function(){return[this]},t})}(Re)),ht}var ut={},Se={get exports(){return ut},set exports(h){ut=h}},Vt;function ne(){return Vt||(Vt=1,function(h){(function(n,r){if(h.exports)h.exports=r(V());else{var t=n.Zdog;t.Rect=r(t.Shape)}})($,function(r){var t=r.subclass({width:1,height:1});return t.prototype.setPath=function(){var i=this.width/2,o=this.height/2;this.path=[{x:-i,y:-o},{x:i,y:-o},{x:i,y:o},{x:-i,y:o}]},t})}(Se)),ut}var ft={},Ce={get exports(){return ft},set exports(h){ft=h}},Nt;function Ee(){return Nt||(Nt=1,function(h){(function(n,r){if(h.exports)h.exports=r(V());else{var t=n.Zdog;t.RoundedRect=r(t.Shape)}})($,function(r){var t=r.subclass({width:1,height:1,cornerRadius:.25,closed:!1});return t.prototype.setPath=function(){var i=this.width/2,o=this.height/2,f=Math.min(i,o),e=Math.min(this.cornerRadius,f),s=i-e,u=o-e,a=[{x:s,y:-o},{arc:[{x:i,y:-o},{x:i,y:-u}]}];u&&a.push({x:i,y:u}),a.push({arc:[{x:i,y:o},{x:s,y:o}]}),s&&a.push({x:-s,y:o}),a.push({arc:[{x:-i,y:o},{x:-i,y:u}]}),u&&a.push({x:-i,y:-u}),a.push({arc:[{x:-i,y:-o},{x:-s,y:-o}]}),s&&a.push({x:s,y:-o}),this.path=a},t})}(Ce)),ft}var ct={},Pe={get exports(){return ct},set exports(h){ct=h}},It;function Rt(){return It||(It=1,function(h){(function(n,r){if(h.exports)h.exports=r(V());else{var t=n.Zdog;t.Ellipse=r(t.Shape)}})($,function(r){var t=r.subclass({diameter:1,width:void 0,height:void 0,quarters:4,closed:!1});return t.prototype.setPath=function(){var i=this.width!=null?this.width:this.diameter,o=this.height!=null?this.height:this.diameter,f=i/2,e=o/2;this.path=[{x:0,y:-e},{arc:[{x:f,y:-e},{x:f,y:0}]}],this.quarters>1&&this.path.push({arc:[{x:f,y:e},{x:0,y:e}]}),this.quarters>2&&this.path.push({arc:[{x:-f,y:e},{x:-f,y:0}]}),this.quarters>3&&this.path.push({arc:[{x:-f,y:-e},{x:0,y:-e}]})},t})}(Pe)),ct}var pt={},ze={get exports(){return pt},set exports(h){pt=h}},Wt;function _e(){return Wt||(Wt=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),V());else{var t=n.Zdog;t.Polygon=r(t,t.Shape)}})($,function(r,t){var i=t.subclass({sides:3,radius:.5}),o=r.TAU;return i.prototype.setPath=function(){this.path=[];for(var f=0;f<this.sides;f++){var e=f/this.sides*o-o/4,s=Math.cos(e)*this.radius,u=Math.sin(e)*this.radius;this.path.push({x:s,y:u})}},i})}(ze)),pt}var lt={},ke={get exports(){return lt},set exports(h){lt=h}},jt;function Ae(){return jt||(jt=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),j(),L(),Rt());else{var t=n.Zdog;t.Hemisphere=r(t,t.Vector,t.Anchor,t.Ellipse)}})($,function(r,t,i,o){var f=o.subclass({fill:!0}),e=r.TAU;f.prototype.create=function(){o.prototype.create.apply(this,arguments),this.apex=new i({addTo:this,translate:{z:this.diameter/2}}),this.renderCentroid=new t},f.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,3/8),this.sortValue=this.renderCentroid.z},f.prototype.render=function(u,a){this.renderDome(u,a),o.prototype.render.apply(this,arguments)},f.prototype.renderDome=function(u,a){if(this.visible){var c=this.getDomeRenderElement(u,a),p=Math.atan2(this.renderNormal.y,this.renderNormal.x),v=this.diameter/2*this.renderNormal.magnitude(),d=this.renderOrigin.x,l=this.renderOrigin.y;if(a.isCanvas){var g=p+e/4,x=p-e/4;u.beginPath(),u.arc(d,l,v,g,x)}else a.isSvg&&(p=(p-e/4)/e*360,this.domeSvgElement.setAttribute("d","M "+-v+",0 A "+v+","+v+" 0 0 1 "+v+",0"),this.domeSvgElement.setAttribute("transform","translate("+d+","+l+" ) rotate("+p+")"));a.stroke(u,c,this.stroke,this.color,this.getLineWidth()),a.fill(u,c,this.fill,this.color),a.end(u,c)}};var s="http://www.w3.org/2000/svg";return f.prototype.getDomeRenderElement=function(u,a){if(a.isSvg)return this.domeSvgElement||(this.domeSvgElement=document.createElementNS(s,"path"),this.domeSvgElement.setAttribute("stroke-linecap","round"),this.domeSvgElement.setAttribute("stroke-linejoin","round")),this.domeSvgElement},f})}(ke)),lt}var dt={},Ge={get exports(){return dt},set exports(h){dt=h}},Xt;function qe(){return Xt||(Xt=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),bt(),V(),re(),Rt());else{var t=n.Zdog;t.Cylinder=r(t,t.PathCommand,t.Shape,t.Group,t.Ellipse)}})($,function(r,t,i,o,f){function e(){}var s=o.subclass({color:"#333",updateSort:!0});s.prototype.create=function(){o.prototype.create.apply(this,arguments),this.pathCommands=[new t("move",[{}]),new t("line",[{}])]},s.prototype.render=function(d,l){this.renderCylinderSurface(d,l),o.prototype.render.apply(this,arguments)},s.prototype.renderCylinderSurface=function(d,l){if(this.visible){var g=this.getRenderElement(d,l),x=this.frontBase,E=this.rearBase,P=x.renderNormal.magnitude(),N=x.diameter*P+x.getLineWidth();this.pathCommands[0].renderPoints[0].set(x.renderOrigin),this.pathCommands[1].renderPoints[0].set(E.renderOrigin),l.isCanvas&&(d.lineCap="butt"),l.renderPath(d,g,this.pathCommands),l.stroke(d,g,!0,this.color,N),l.end(d,g),l.isCanvas&&(d.lineCap="round")}};var u="http://www.w3.org/2000/svg";s.prototype.getRenderElement=function(d,l){if(l.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(u,"path")),this.svgElement},s.prototype.copyGraph=e;var a=f.subclass();a.prototype.copyGraph=e;var c=i.subclass({diameter:1,length:1,frontFace:void 0,fill:!0}),p=r.TAU;c.prototype.create=function(){i.prototype.create.apply(this,arguments),this.group=new s({addTo:this,color:this.color,visible:this.visible});var d=this.length/2,l=this.backface||!0;this.frontBase=this.group.frontBase=new f({addTo:this.group,diameter:this.diameter,translate:{z:d},rotate:{y:p/2},color:this.color,stroke:this.stroke,fill:this.fill,backface:this.frontFace||l,visible:this.visible}),this.rearBase=this.group.rearBase=this.frontBase.copy({translate:{z:-d},rotate:{y:0},backface:l})},c.prototype.render=function(){};var v=["stroke","fill","color","visible"];return v.forEach(function(d){var l="_"+d;Object.defineProperty(c.prototype,d,{get:function(){return this[l]},set:function(g){this[l]=g,this.frontBase&&(this.frontBase[d]=g,this.rearBase[d]=g,this.group[d]=g)}})}),c})}(Ge)),dt}var vt={},Me={get exports(){return vt},set exports(h){vt=h}},Yt;function De(){return Yt||(Yt=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),j(),bt(),L(),Rt());else{var t=n.Zdog;t.Cone=r(t,t.Vector,t.PathCommand,t.Anchor,t.Ellipse)}})($,function(r,t,i,o,f){var e=f.subclass({length:1,fill:!0}),s=r.TAU;e.prototype.create=function(){f.prototype.create.apply(this,arguments),this.apex=new o({addTo:this,translate:{z:this.length}}),this.renderApex=new t,this.renderCentroid=new t,this.tangentA=new t,this.tangentB=new t,this.surfacePathCommands=[new i("move",[{}]),new i("line",[{}]),new i("line",[{}])]},e.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,1/3),this.sortValue=this.renderCentroid.z},e.prototype.render=function(a,c){this.renderConeSurface(a,c),f.prototype.render.apply(this,arguments)},e.prototype.renderConeSurface=function(a,c){if(this.visible){this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);var p=this.renderNormal.magnitude(),v=this.renderApex.magnitude2d(),d=this.renderNormal.magnitude2d(),l=Math.acos(d/p),g=Math.sin(l),x=this.diameter/2*p,E=x*g<v;if(E){var P=Math.atan2(this.renderNormal.y,this.renderNormal.x)+s/2,N=v/g,X=Math.acos(x/N),G=this.tangentA,F=this.tangentB;G.x=Math.cos(X)*x*g,G.y=Math.sin(X)*x,F.set(this.tangentA),F.y*=-1,G.rotateZ(P),F.rotateZ(P),G.add(this.renderOrigin),F.add(this.renderOrigin),this.setSurfaceRenderPoint(0,G),this.setSurfaceRenderPoint(1,this.apex.renderOrigin),this.setSurfaceRenderPoint(2,F);var I=this.getSurfaceRenderElement(a,c);c.renderPath(a,I,this.surfacePathCommands),c.stroke(a,I,this.stroke,this.color,this.getLineWidth()),c.fill(a,I,this.fill,this.color),c.end(a,I)}}};var u="http://www.w3.org/2000/svg";return e.prototype.getSurfaceRenderElement=function(a,c){if(c.isSvg)return this.surfaceSvgElement||(this.surfaceSvgElement=document.createElementNS(u,"path"),this.surfaceSvgElement.setAttribute("stroke-linecap","round"),this.surfaceSvgElement.setAttribute("stroke-linejoin","round")),this.surfaceSvgElement},e.prototype.setSurfaceRenderPoint=function(a,c){var p=this.surfacePathCommands[a].renderPoints[0];p.set(c)},e})}(Me)),vt}var gt={},Fe={get exports(){return gt},set exports(h){gt=h}},Ht;function Oe(){return Ht||(Ht=1,function(h){(function(n,r){if(h.exports)h.exports=r(k(),L(),V(),ne());else{var t=n.Zdog;t.Box=r(t,t.Anchor,t.Shape,t.Rect)}})($,function(r,t,i,o){var f=o.subclass();f.prototype.copyGraph=function(){};var e=r.TAU,s=["frontFace","rearFace","leftFace","rightFace","topFace","bottomFace"],u=r.extend({},i.defaults);delete u.path,s.forEach(function(p){u[p]=!0}),r.extend(u,{width:1,height:1,depth:1,fill:!0});var a=t.subclass(u);a.prototype.create=function(p){t.prototype.create.call(this,p),this.updatePath(),this.fill=this.fill},a.prototype.updatePath=function(){s.forEach(function(p){this[p]=this[p]},this)},s.forEach(function(p){var v="_"+p;Object.defineProperty(a.prototype,p,{get:function(){return this[v]},set:function(d){this[v]=d,this.setFace(p,d)}})}),a.prototype.setFace=function(p,v){var d=p+"Rect",l=this[d];if(!v){this.removeChild(l);return}var g=this.getFaceOptions(p);g.color=typeof v=="string"?v:this.color,l?l.setOptions(g):l=this[d]=new f(g),l.updatePath(),this.addChild(l)},a.prototype.getFaceOptions=function(p){return{frontFace:{width:this.width,height:this.height,translate:{z:this.depth/2}},rearFace:{width:this.width,height:this.height,translate:{z:-this.depth/2},rotate:{y:e/2}},leftFace:{width:this.depth,height:this.height,translate:{x:-this.width/2},rotate:{y:-e/4}},rightFace:{width:this.depth,height:this.height,translate:{x:this.width/2},rotate:{y:e/4}},topFace:{width:this.width,height:this.depth,translate:{y:-this.height/2},rotate:{x:-e/4}},bottomFace:{width:this.width,height:this.depth,translate:{y:this.height/2},rotate:{x:e/4}}}[p]};var c=["color","stroke","fill","backface","front","visible"];return c.forEach(function(p){var v="_"+p;Object.defineProperty(a.prototype,p,{get:function(){return this[v]},set:function(d){this[v]=d,s.forEach(function(l){var g=this[l+"Rect"],x=typeof this[l]=="string",E=p=="color"&&x;g&&!E&&(g[p]=d)},this)}})}),a})}(Fe)),gt}(function(h){(function(n,r){h.exports&&(h.exports=r(k(),Zt(),te(),j(),L(),ee(),$e(),bt(),V(),re(),ne(),Ee(),Rt(),_e(),Ae(),qe(),De(),Oe()))})($,function(r,t,i,o,f,e,s,u,a,c,p,v,d,l,g,x,E,P){return r.CanvasRenderer=t,r.SvgRenderer=i,r.Vector=o,r.Anchor=f,r.Dragger=e,r.Illustration=s,r.PathCommand=u,r.Shape=a,r.Group=c,r.Rect=p,r.RoundedRect=v,r.Ellipse=d,r.Polygon=l,r.Hemisphere=g,r.Cylinder=x,r.Cone=E,r.Box=P,r})})(pe);const W=Ct;function Te(h){let n;return{c(){n=ae("svg"),this.h()},l(r){n=he(r,"svg",{width:!0,height:!0}),Qt(n).forEach(_),this.h()},h(){q(n,"width",h[0]),q(n,"height",h[1])},m(r,t){A(r,n,t),h[8](n)},p(r,t){t&1&&q(n,"width",r[0]),t&2&&q(n,"height",r[1])},d(r){r&&_(n),h[8](null)}}}function Be(h){let n;return{c(){n=ue("canvas"),this.h()},l(r){n=fe(r,"CANVAS",{width:!0,height:!0}),Qt(n).forEach(_),this.h()},h(){q(n,"width",h[0]),q(n,"height",h[1])},m(r,t){A(r,n,t),h[7](n)},p(r,t){t&1&&q(n,"width",r[0]),t&2&&q(n,"height",r[1])},d(r){r&&_(n),h[7](null)}}}function Ue(h){let n,r;function t(s,u){if(s[2]==="canvas")return Be;if(s[2]==="svg")return Te}let i=t(h),o=i&&i(h);const f=h[6].default,e=yt(f,h,h[5],null);return{c(){o&&o.c(),n=O(),e&&e.c()},l(s){o&&o.l(s),n=T(s),e&&e.l(s)},m(s,u){o&&o.m(s,u),A(s,n,u),e&&e.m(s,u),r=!0},p(s,[u]){i===(i=t(s))&&o?o.p(s,u):(o&&o.d(1),o=i&&i(s),o&&(o.c(),o.m(n.parentNode,n))),e&&e.p&&(!r||u&32)&&xt(e,f,s,s[5],r?wt(f,s[5],u,null):$t(s[5]),null)},i(s){r||(m(e,s),r=!0)},o(s){y(e,s),r=!1},d(s){o&&o.d(s),s&&_(n),e&&e.d(s)}}}function Le(h,n,r){const t=["width","height","element","update"];let i=kt(n,t),{$$slots:o={},$$scope:f}=n,{width:e}=n,{height:s}=n,{element:u="canvas"}=n,{update:a=void 0}=n,c;const p={scene:new W.Anchor,subscribers:[],subscribe:l=>(p.subscribers.push(l),()=>p.subscribers=p.subscribers.filter(g=>g!==l))};Ke(p),oe(p.scene),Kt(()=>{var P,N,X,G;const l=new W.Illustration({...i,element:c});i.onResize&&(l.onResize=i.onResize.bind(l)),i.onPrerender&&(l.onPrerender=(P=i.onPrerender)==null?void 0:P.bind(l)),i.onDragStart&&(l.onDragStart=(N=i.onDragStart)==null?void 0:N.bind(l)),i.onDragMove&&(l.onDragMove=(X=i.onDragMove)==null?void 0:X.bind(l)),i.onDragEnd&&(l.onDragEnd=(G=i.onDragEnd)==null?void 0:G.bind(l)),l.addChild(p.scene),l.updateGraph();let g;a&&(g=p.subscribe(a(p.scene)));let x;const E=(F=0)=>{p.subscribers.forEach(I=>I(F)),l.updateRenderGraph(),x=requestAnimationFrame(E)};return E(),()=>{g==null||g(),cancelAnimationFrame(x)}});function v(l){At[l?"unshift":"push"](()=>{c=l,r(3,c)})}function d(l){At[l?"unshift":"push"](()=>{c=l,r(3,c)})}return h.$$set=l=>{n=M(M({},n),B(l)),r(10,i=kt(n,t)),"width"in l&&r(0,e=l.width),"height"in l&&r(1,s=l.height),"element"in l&&r(2,u=l.element),"update"in l&&r(4,a=l.update),"$$scope"in l&&r(5,f=l.$$scope)},[e,s,u,c,a,f,o,v,d]}class Ve extends Y{constructor(n){super(),H(this,n,Le,Ue,K,{width:0,height:1,element:2,update:4})}}function Ne(h){let n;const r=h[2].default,t=yt(r,h,h[1],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&2)&&xt(t,r,i,i[1],n?wt(r,i[1],o,null):$t(i[1]),null)},i(i){n||(m(t,i),n=!0)},o(i){y(t,i),n=!1},d(i){t&&t.d(i)}}}function Ie(h,n,r){let{$$slots:t={},$$scope:i}=n;const o=zt(W.Ellipse,n);return h.$$set=f=>{r(3,n=M(M({},n),B(f))),"$$scope"in f&&r(1,i=f.$$scope)},n=B(n),[o,i,t]}class St extends Y{constructor(n){super(),H(this,n,Ie,Ne,K,{node:0})}get node(){return this.$$.ctx[0]}}function We(h){let n;const r=h[2].default,t=yt(r,h,h[1],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&2)&&xt(t,r,i,i[1],n?wt(r,i[1],o,null):$t(i[1]),null)},i(i){n||(m(t,i),n=!0)},o(i){y(t,i),n=!1},d(i){t&&t.d(i)}}}function je(h,n,r){let{$$slots:t={},$$scope:i}=n;const o=zt(W.RoundedRect,n);return h.$$set=f=>{r(3,n=M(M({},n),B(f))),"$$scope"in f&&r(1,i=f.$$scope)},n=B(n),[o,i,t]}class ie extends Y{constructor(n){super(),H(this,n,je,We,K,{node:0})}get node(){return this.$$.ctx[0]}}function Xe(h){let n;const r=h[2].default,t=yt(r,h,h[1],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,o){t&&t.m(i,o),n=!0},p(i,[o]){t&&t.p&&(!n||o&2)&&xt(t,r,i,i[1],n?wt(r,i[1],o,null):$t(i[1]),null)},i(i){n||(m(t,i),n=!0)},o(i){y(t,i),n=!1},d(i){t&&t.d(i)}}}function Ye(h,n,r){let{$$slots:t={},$$scope:i}=n;const o=zt(W.Shape,n);return h.$$set=f=>{r(3,n=M(M({},n),B(f))),"$$scope"in f&&r(1,i=f.$$scope)},n=B(n),[o,i,t]}class z extends Y{constructor(n){super(),H(this,n,Ye,Xe,K,{node:0})}get node(){return this.$$.ctx[0]}}const Pt=Symbol(),He=()=>Et(Pt).scene,Ke=h=>Jt(Pt,h),Qe=h=>ce(Et(Pt).subscribe(h)),se=Symbol(),Je=()=>Et(se),oe=h=>Jt(se,h),zt=(h,n)=>{const r=He(),t=Je(),{update:i,...o}=n,f=new h(o);return oe(f),i&&Qe(i(f)),Kt(()=>(t.addChild(f),r.updateGraph(),()=>{t.removeChild(f),t.updateGraph(),r.updateGraph()})),f},{TAU:C,Vector:dr,easeInOut:vr,lerp:gr,modulo:mr}=W;function Ze(h){let n,r;return n=new ie({props:{width:2,height:4,cornerRadius:1,translate:{y:14,z:2},rotate:{x:C/4},color:_t,stroke:4,fill:!0}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p:Q,i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function tr(h){let n,r;return n=new ie({props:{width:2,height:4,cornerRadius:1,translate:{y:14,z:2},rotate:{x:-C/8},color:_t,stroke:4,fill:!0}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p:Q,i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function er(h){let n,r,t,i,o,f;return n=new St({props:{diameter:2,quarters:2,translate:{x:-2,y:1,z:4.5},rotate:{z:-C/4},color:U,stroke:.5,backface:!1}}),t=new St({props:{diameter:2,quarters:2,translate:{x:2,y:1,z:4.5},rotate:{z:-C/4},backface:!1,color:U,stroke:.5}}),o=new St({props:{diameter:3,quarters:2,translate:{y:2.5,z:4.5},rotate:{z:C/4},backface:!1,color:fr,stroke:.5,closed:!0,fill:!0}}),{c(){w(n.$$.fragment),r=O(),w(t.$$.fragment),i=O(),w(o.$$.fragment)},l(e){b(n.$$.fragment,e),r=T(e),b(t.$$.fragment,e),i=T(e),b(o.$$.fragment,e)},m(e,s){R(n,e,s),A(e,r,s),R(t,e,s),A(e,i,s),R(o,e,s),f=!0},p:Q,i(e){f||(m(n.$$.fragment,e),m(t.$$.fragment,e),m(o.$$.fragment,e),f=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(o.$$.fragment,e),f=!1},d(e){S(n,e),e&&_(r),S(t,e),e&&_(i),S(o,e)}}}function rr(h){let n,r;return n=new z({props:{translate:{z:1,y:D},color:J,stroke:6}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p:Q,i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function nr(h){let n,r;return n=new z({props:{path:[{y:0},{y:D}],translate:{y:D},rotate:{x:C/8},color:J,stroke:4,$$slots:{default:[rr]},$$scope:{ctx:h}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p(t,i){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function ir(h){let n,r;return n=new z({props:{translate:{z:1,y:D},color:J,stroke:6}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p:Q,i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function sr(h){let n,r;return n=new z({props:{path:[{y:0},{y:D}],translate:{y:D},rotate:{x:C/8},color:J,stroke:4,$$slots:{default:[ir]},$$scope:{ctx:h}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p(t,i){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function or(h){let n,r,t,i,o,f;return n=new z({props:{translate:{y:-9.5},color:J,stroke:12,$$slots:{default:[er]},$$scope:{ctx:h}}}),t=new z({props:{path:[{y:0},{y:D}],translate:{x:-5,y:-2},rotate:{x:-C/4},color:U,stroke:4,$$slots:{default:[nr]},$$scope:{ctx:h}}}),o=new z({props:{path:[{y:0},{y:D}],translate:{x:5,y:-2},rotate:{x:C/4},color:U,stroke:4,$$slots:{default:[sr]},$$scope:{ctx:h}}}),{c(){w(n.$$.fragment),r=O(),w(t.$$.fragment),i=O(),w(o.$$.fragment)},l(e){b(n.$$.fragment,e),r=T(e),b(t.$$.fragment,e),i=T(e),b(o.$$.fragment,e)},m(e,s){R(n,e,s),A(e,r,s),R(t,e,s),A(e,i,s),R(o,e,s),f=!0},p(e,s){const u={};s&1&&(u.$$scope={dirty:s,ctx:e}),n.$set(u);const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a);const c={};s&1&&(c.$$scope={dirty:s,ctx:e}),o.$set(c)},i(e){f||(m(n.$$.fragment,e),m(t.$$.fragment,e),m(o.$$.fragment,e),f=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(o.$$.fragment,e),f=!1},d(e){S(n,e),e&&_(r),S(t,e),e&&_(i),S(o,e)}}}function ar(h){let n,r,t,i,o,f;return n=new z({props:{path:[{y:0},{y:12}],translate:{x:-mt},rotate:{x:C/4},color:U,stroke:4,$$slots:{default:[Ze]},$$scope:{ctx:h}}}),t=new z({props:{path:[{y:0},{y:12}],translate:{x:mt},rotate:{x:-C/8},color:U,stroke:4,$$slots:{default:[tr]},$$scope:{ctx:h}}}),o=new z({props:{path:[{x:-1.5},{x:1.5}],translate:{y:-6.5},rotate:{x:C/8},color:_t,stroke:9,$$slots:{default:[or]},$$scope:{ctx:h}}}),{c(){w(n.$$.fragment),r=O(),w(t.$$.fragment),i=O(),w(o.$$.fragment)},l(e){b(n.$$.fragment,e),r=T(e),b(t.$$.fragment,e),i=T(e),b(o.$$.fragment,e)},m(e,s){R(n,e,s),A(e,r,s),R(t,e,s),A(e,i,s),R(o,e,s),f=!0},p(e,s){const u={};s&1&&(u.$$scope={dirty:s,ctx:e}),n.$set(u);const a={};s&1&&(a.$$scope={dirty:s,ctx:e}),t.$set(a);const c={};s&1&&(c.$$scope={dirty:s,ctx:e}),o.$set(c)},i(e){f||(m(n.$$.fragment,e),m(t.$$.fragment,e),m(o.$$.fragment,e),f=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(o.$$.fragment,e),f=!1},d(e){S(n,e),e&&_(r),S(t,e),e&&_(i),S(o,e)}}}function hr(h){let n,r;return n=new z({props:{path:[{x:-mt},{x:mt}],translate:{y:2},stroke:4,color:U,$$slots:{default:[ar]},$$scope:{ctx:h}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p(t,i){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}function ur(h){let n,r;return n=new Ve({props:{element:"svg",width:240,height:240,zoom:5,resize:!0,dragRotate:!0,rotate:{y:-C/8},update:cr,onResize:pr,$$slots:{default:[hr]},$$scope:{ctx:h}}}),{c(){w(n.$$.fragment)},l(t){b(n.$$.fragment,t)},m(t,i){R(n,t,i),r=!0},p(t,[i]){const o={};i&1&&(o.$$scope={dirty:i,ctx:t}),n.$set(o)},i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){y(n.$$.fragment,t),r=!1},d(t){S(n,t)}}}const fr="#e88",J="#ffe0da",_t="#fbbf24",U="#44403c",mt=3,D=6,cr=h=>n=>{h.rotate.y+=.005},pr=function(h,n){this.zoom=h/48};class yr extends Y{constructor(n){super(),H(this,n,null,ur,K,{})}}export{yr as G};
