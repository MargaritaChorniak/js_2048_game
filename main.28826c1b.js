parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r){return o(t)||e(t,r)||c(t,r)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i,u,c=[],a=!0,f=!1;try{if(i=(n=n.call(t)).next,0===r){if(Object(n)!==n)return;a=!1}else for(;!(a=(e=i.call(n)).done)&&(c.push(e.value),c.length!==r);a=!0);}catch(l){f=!0,o=l}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}function o(t){if(Array.isArray(t))return t}function i(t){return f(t)||a(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,r){if(t){if("string"==typeof t)return l(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,r):void 0}}function a(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function f(t){if(Array.isArray(t))return l(t)}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var s,d=document.querySelector("button"),y=document.querySelector(".message-start"),m=document.querySelector(".message-lose"),b=document.querySelector(".message-win"),h=document.querySelector("tbody"),v=document.querySelector(".game-score"),p=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],S=!1,g=0,w=i(h.children).map(function(t){return i(t.children)});function A(){d.classList.contains("start")?(d.classList.remove("start"),d.classList.add("restart"),d.innerText="Restart",y.classList.add("hidden")):(p=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],g=0,m.classList.toggle("hidden",!0),b.classList.toggle("hidden",!0)),L(),L(),k()}function L(){var t=r(E(),2),n=t[0],e=t[1];p[n][e]=j()}function E(){var t=[];return p.forEach(function(r,n){r.forEach(function(r,e){0===r&&t.push([n,e])})}),t[Math.floor(Math.random()*t.length)]}function j(){return Math.random()>=.9?4:2}function k(){p.forEach(function(t,r){t.forEach(function(t,n){var e=w[r][n];e.classList="field-cell",0===t?e.innerText="":(e.innerText=t,e.classList.add("field-cell--".concat(t)))})}),v.innerText=g}function q(t){switch(s=p,t.key){case"ArrowLeft":T();break;case"ArrowRight":I();break;case"ArrowDown":R();break;case"ArrowUp":O();break;default:return}for(var r=0;r<4;r++)for(var n=0;n<4;n++)if(s[r][n]!==p[r][n])return p=s,L(),k(),S?void b.classList.remove("hidden"):void(U()||m.classList.remove("hidden"))}function T(){C()&&(s=s.map(function(t){var r=t.filter(function(t){return 0!==t});return r.forEach(function(t,n){t===r[n+1]&&(r[n]*=2,r.splice(n+1,1),g+=r[n],2048===r[n]&&(S=!0))}),r.concat(Array(4-r.length).fill(0))}))}function x(){s.forEach(function(t){return t.reverse()})}function I(){C()&&(x(),T(),x())}function M(){s=s[0].map(function(t,r){return s.map(function(t){return t[r]})})}function O(){M(),T(),M()}function R(){M(),I(),M()}function U(){return!!C()||(M(),D())}function C(){for(var r=function(t){if(s[t].some(function(t){return 0===t})||s[t].some(function(r,n){return r===s[t][n+1]}))return{v:!0}},n=0;n<4;n++){var e=r(n);if("object"===t(e))return e.v}return!1}function D(){for(var r=function(t){if(s[t].some(function(r,n){return r===s[t][n+1]}))return{v:!0}},n=0;n<4;n++){var e=r(n);if("object"===t(e))return e.v}return!1}d.addEventListener("click",A),document.addEventListener("keydown",q);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.28826c1b.js.map