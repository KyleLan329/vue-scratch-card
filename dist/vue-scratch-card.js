!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-scratch-card",[],e):"object"==typeof exports?exports["vue-scratch-card"]=e():t["vue-scratch-card"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"vueScratchCard",data:function(){return{supportTouch:!1,events:[],startMoveHandler:null,moveHandler:null,endMoveHandler:null,canDraw:!0,showLucky:!1,firstTouch:!0}},props:{elementId:{type:String,default:"scratch"},moveRadius:{type:Number,default:15},ratio:{type:Number,default:.3},startCallback:{type:Function,default:function(){}},clearCallback:{type:Function,default:function(){}},coverColor:{type:String,default:"#C5C5C5"},coverImg:{type:String},resultImg:{type:String,default:"https://raw.githubusercontent.com/ZENGzoe/imagesCollection/master/2018/default.jpg"}},computed:{},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{init:function(){if(!this.isSupportCanvas)return void alert("当前浏览器不支持canvas");var t=document.getElementById(this.elementId);this.canvas=t.querySelector("#scratchCanvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight,this.createCanvasStyle(),this.bindEvent()},isSupportCanvas:function(){return!(!document.createElement("canvas").getContext||!ele.getContext("2d"))},createCanvasStyle:function(){var t=this;if(this.coverImg){var e=new Image;e.src=this.coverImg,e.onload=function(){t.ctx.drawImage(e,0,0,t.canvas.width,t.canvas.height)}}else t.ctx.fillStyle=t.coverColor,t.ctx.fillRect(0,0,t.canvas.width,t.canvas.height)},bindEvent:function(){"ontouchstart"in window&&(this.supportTouch=!0),this.events=this.supportTouch?["touchstart","touchmove","touchend"]:["mousedown","mousemove","mouseup"],this.addEvent()},addEvent:function(){this.startMoveHandler=this.startEventHandler.bind(this),this.canvas.addEventListener(this.events[0],this.startMoveHandler,!1)},startEventHandler:function(t){t.preventDefault(),this.firstTouch&&(this.startCallback(),this.firstTouch=!1),this.showLucky=!0,this.moveHandler=this.moveEventHandler.bind(this),this.endMoveHandler=this.endEventHandler.bind(this),this.canvas.addEventListener(this.events[1],this.moveHandler,!1),document.addEventListener(this.events[2],this.endMoveHandler,!1)},moveEventHandler:function(t){t.preventDefault(),t=this.supportTouch?t.touches[0]:t;var e=this.canvas.getBoundingClientRect(),n=document.documentElement.scrollTop||document.body.scrollTop,r=document.documentElement.scrollLeft||document.body.scrollLeft,a=t.pageX-e.left-r,s=t.pageY-e.top-n;this.ctx.beginPath(),this.ctx.fillStyle="#FFFFFF",this.ctx.globalCompositeOperation="destination-out",this.ctx.arc(a,s,this.moveRadius,0,2*Math.PI),this.ctx.fill()},endEventHandler:function(t){t.preventDefault(),this.canvas.removeEventListener(this.events[1],this.moveHandler,!1),document.removeEventListener(this.events[2],this.endMoveHandler,!1),this.endMoveHandler=null,this.caleArea()},caleArea:function(){var t=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),e=[];t.data.map(function(n,r){var a=t.data[r+3];0===a&&e.push(a)}),e.length/t.data.length>this.ratio&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.removeEventListener(this.events[0],this.startMoveHandler),this.canvas.removeEventListener(this.events[1],this.moveHandler,!1),document.removeEventListener(this.events[2],this.endMoveHandler,!1),this.endMoveHandler=null,this.clearCallback())}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.component(r.a.name,r.a)};"undefined"!=typeof window&&window.Vue&&a(window.Vue),e.default={install:a,VueScratchCard:r.a}},function(t,e,n){"use strict";var r=n(3);r.a.install=function(t){return t.component(r.a.name,r.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),e.a=r.a},function(t,e,n){"use strict";function r(t){n(4)}var a=n(0),s=n(10),i=n(9),o=r,c=i(a.a,s.a,!1,o,null,null);e.a=c.exports},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(7)("334f6e70",r,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,".scratchCard{position:relative;width:90%;height:40vw;margin:0 auto}.scratchCard .result{position:absolute;top:0;left:0}.scratchCard .pic,.scratchCard .result{width:100%;height:100%}.scratchCard canvas{position:relative;z-index:2;position:absolute}",""])},function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var s=r(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(r[s]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(s(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(s(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function s(t){var e,n,r=document.querySelector("style["+g+'~="'+t.id+'"]');if(r){if(f)return p;r.parentNode.removeChild(r)}if(y){var s=v++;r=h||(h=a()),e=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=a(),e=o.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=C(e,a);else{var s=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function o(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),m.ssrId&&t.setAttribute(g,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(8),d={},l=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,v=0,f=!1,p=function(){},m=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,a){f=n,m=a||{};var s=u(t,e);return r(s),function(e){for(var n=[],a=0;a<s.length;a++){var i=s[a],o=d[i.id];o.refs--,n.push(o)}e?(s=u(t,e),r(s)):s=[];for(var a=0;a<n.length;a++){var o=n[a];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete d[o.id]}}}};var C=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var s=e[a],i=s[0],o=s[1],c=s[2],u=s[3],d={id:t+":"+a,css:o,media:c,sourceMap:u};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},function(t,e){t.exports=function(t,e,n,r,a,s){var i,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a);var d;if(s?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=d):r&&(d=r),d){var l=u.functional,h=l?u.render:u.beforeCreate;l?(u._injectStyles=d,u.render=function(t,e){return d.call(e),h(t,e)}):u.beforeCreate=h?[].concat(h,d):[d]}return{esModule:i,exports:o,options:u}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scratchCard",attrs:{id:t.elementId}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showLucky,expression:"showLucky"}],staticClass:"result"},[t._t("result"),t._v(" "),n("img",{staticClass:"pic",attrs:{src:t.resultImg,alt:""}})],2),t._v(" "),n("canvas",{attrs:{id:"scratchCanvas"}})])},a=[],s={render:r,staticRenderFns:a};e.a=s}])});
//# sourceMappingURL=vue-scratch-card.js.map