!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,n){},function(t,e,n){function l(t,e,n,o,r,u,i){try{var c=t[u](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(o,r)}var c={"/":"<app-index></app-index>","/daily-log":"<app-daily-log></app-daily-log>"},o=function(){var t=function(c){return function(){var t=this,i=arguments;return new Promise(function(e,n){var o=c.apply(t,i);function r(t){l(o,e,n,r,u,"next",t)}function u(t){l(o,e,n,r,u,"throw",t)}r(void 0)})}}(regeneratorRuntime.mark(function t(){var o,r,u,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.getElementById("router-outlet"),n=void 0,e=(location.hash.slice(1).toLowerCase()||"/").split("/"),(n={resource:null,id:null,verb:null}).resource=e[1],n.id=e[2],n.verb=e[3],u=((r=n).resource?"/"+r.resource:"/")+(r.id?"/:id":"")+(r.verb?"/"+r.verb:""),i=c[u]?c[u]:"Error404",o.innerHTML=i;case 5:case"end":return t.stop()}var e,n},t)}));return function(){return t.apply(this,arguments)}}();window.addEventListener("hashchange",o),window.addEventListener("load",o)},function(t,e,n){"use strict";n.r(e);n(0),n(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function u(t){var n="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return i(t,arguments,l(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),c(e,t)})(t)}function i(t,e,n){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=document.createElement("template");a.innerHTML='\n<style>\n  :host {\n    display: block;\n  }\n</style>\n<div>Index Works!</div>\n<a href="/#/daily-log">Daily Log</a>\n';var p=function(){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=r(this,l(e).call(this))).attachShadow({mode:"open"}),t.shadowRoot.appendChild(a.content.cloneNode(!0)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,u(HTMLElement)),e}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function y(t){var n="function"==typeof Map?new Map:void 0;return(y=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return b(t,arguments,h(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),d(e,t)})(t)}function b(t,e,n){return(b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&d(r,n.prototype),r}).apply(null,arguments)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=document.createElement("template");m.innerHTML='\n<style>\n  :host {\n    display: block;\n  }\n</style>\n<div>Daily Log Works!</div>\n<app-daily date="2019-06-05">\n<app-bullets>\n  <app-bullet label="I\'m a task!" type="task"></app-bullet>\n  <app-bullet label="I\'m a done task!" type="done"></app-bullet>\n  <app-bullet label="I\'m a migrated task!" type="task" status="migrated"></app-bullet>\n  <app-bullet label="I\'m a scheduled task!" type="task" status="scheduled"></app-bullet>\n  <app-bullet label="I\'m a irrelevant task!" type="task" status="irrelevant"></app-bullet>\n  <app-bullet label="I\'m a note!" type="note"></app-bullet>\n  <app-bullet label="I\'m a priority note!" type="note" signifier="priority"></app-bullet>\n  <app-bullet label="I\'m an inspiration note!" type="note" signifier="inspiration"></app-bullet>\n  <app-bullet label="I\'m a event!" type="event"></app-bullet>\n  <app-bullets>\n    <app-bullet label="I\'m a task!" type="task"></app-bullet>\n    <app-bullet label="I\'m a priority task!" type="task" signifier="priority"></app-bullet>\n    <app-bullets>\n      <app-bullet label="I\'m a task!" type="task"></app-bullet>\n      <app-bullet label="I\'m a priority task!" type="task" signifier="priority"></app-bullet>\n    </app-bullets>\n  </app-bullets>\n</app-bullets>\n</app-daily>\n';var v=function(){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=s(this,h(e).call(this))).attachShadow({mode:"open"}),t.shadowRoot.appendChild(m.content.cloneNode(!0)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,y(HTMLElement)),e}(),w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],g=13;function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function E(t){var n="function"==typeof Map?new Map:void 0;return(E=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return k(t,arguments,j(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),R(e,t)})(t)}function k(t,e,n){return(k=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&R(r,n.prototype),r}).apply(null,arguments)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T={TASK:"●",DONE:"x",MIGRATED:">",SCHEDULED:"<",IRRELEVANT:"",NOTE:"―",EVENT:"○"},P="bullet",x="label",M="item",L="signifier",C={PRIORITY:"*",INSPIRATION:"!"},D=document.createElement("template");D.innerHTML='\n<style>\n  :host {\n    display: block;\n  }\n\n  :host([status="irrelevant"]) .'.concat(M," {\n    text-decoration: line-through;\n  }\n\n  .").concat(M," {\n    list-style: none;\n  }\n\n  .").concat(L," {\n    display: inline-block;\n    width: .5rem;\n    margin-left: -1rem;\n    text-align: center;\n  }\n\n  .").concat(P,' {\n    display: inline-block;\n    width: 1rem;\n    margin-right: .5rem;\n    text-align: center;\n  }\n</style>\n<li class="').concat(M,'">\n  <span class="').concat(L,'"></span>\n  <span class="').concat(P,'"></span>\n  <span class="').concat(x,'"></span>\n</li>\n');var I=function(){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=_(this,j(e).call(this))).attachShadow({mode:"open"}),t.shadowRoot.appendChild(D.content.cloneNode(!0)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,E(HTMLElement)),function(t,e,n){e&&O(t.prototype,e),n&&O(t,n)}(e,[{key:"connectedCallback",value:function(){this._setBullet(this.getAttribute("type"),this.getAttribute("status")),this._setLabel(this.getAttribute("label")),this._setSignifier(this.getAttribute("signifier")),this._setEvents()}},{key:"disconnectedCallback",value:function(){this.shadowRoot.querySelector(".".concat(x)).removeEventListener("click",this._onBulletClick),this.shadowRoot.querySelector(".".concat(x)).removeEventListener("keydown",this._onBulletKeydown)}},{key:"_onBulletClick",value:function(t){t.target.setAttribute("contentEditable",!0)}},{key:"_onBulletKeydown",value:function(t){t.keyCode===g&&(t.preventDefault(),t.target.blur())}},{key:"_setEvents",value:function(){this.shadowRoot.querySelector(".".concat(x)).addEventListener("click",this._onBulletClick),this.shadowRoot.querySelector(".".concat(x)).addEventListener("keydown",this._onBulletKeydown)}},{key:"_setBullet",value:function(t,e){t&&(this.shadowRoot.querySelector(".".concat(P)).innerHTML=e?T[e.toUpperCase()]:T[t.toUpperCase()])}},{key:"_setLabel",value:function(t){t&&(this.shadowRoot.querySelector(".".concat(x)).innerHTML=t)}},{key:"_setSignifier",value:function(t){t&&(this.shadowRoot.querySelector(".".concat(L)).innerHTML=C[t.toUpperCase()])}}]),e}();function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function N(t){var n="function"==typeof Map?new Map:void 0;return(N=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return A(t,arguments,q(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),B(e,t)})(t)}function A(t,e,n){return(A=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&B(r,n.prototype),r}).apply(null,arguments)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var U="list",K=document.createElement("template");K.innerHTML="\n<style>\n  :host {\n    display: block;\n  }\n\n  .".concat(U,' {\n    padding-left: 1rem;\n  }\n</style>\n<ul class="').concat(U,'">\n<slot></slot>\n</ul>\n');var W=function(){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=F(this,q(e).call(this))).attachShadow({mode:"open"}),t.shadowRoot.appendChild(K.content.cloneNode(!0)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,N(HTMLElement)),e}();function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Y(t,e){return!e||"object"!==V(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function z(t){var n="function"==typeof Map?new Map:void 0;return(z=function(t){if(null===t||!function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return J(t,arguments,X(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Q(e,t)})(t)}function J(t,e,n){return(J=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&Q(r,n.prototype),r}).apply(null,arguments)}function Q(t,e){return(Q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z="daily-log",$="time",tt=document.createElement("template");tt.innerHTML='\n<style>\n  :host {\n    display: block;\n  }\n</style>\n<section class="'.concat(Z,'">\n<h2><time class="').concat($,'"></time></h2>\n<slot></slot>\n</section>\n');var et=function(){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=Y(this,X(e).call(this))).attachShadow({mode:"open"}),t.shadowRoot.appendChild(tt.content.cloneNode(!0)),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Q(t,e)}(e,z(HTMLElement)),function(t,e,n){e&&G(t.prototype,e),n&&G(t,n)}(e,[{key:"connectedCallback",value:function(){this._setDate(this.getAttribute("date"))}},{key:"_formatDate",value:function(t){var e=new Date(t);return"".concat(e.getUTCDate(),".").concat(e.getMonth()+1,". ").concat(w[e.getUTCDay()].substr(0,3))}},{key:"_setDate",value:function(t){t&&(this.shadowRoot.querySelector(".".concat($)).innerHTML=this._formatDate(t))}}]),e}();window.customElements.define("app-index",p),window.customElements.define("app-daily-log",v),window.customElements.define("app-bullets",W),window.customElements.define("app-bullet",I),window.customElements.define("app-daily",et)}]);
//# sourceMappingURL=main.52e964d67286f5cbabcf.js.map