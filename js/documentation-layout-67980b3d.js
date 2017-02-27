!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var i=n(1),a=r(i),c=n(2),u=r(c),l=n(11),s=r(l);(0,a["default"])({headersContainer:document.querySelector(".documentation-container"),sidebarContainer:document.querySelector("#sidebar"),headerStartLevel:2}),(0,s["default"])(document.querySelector(".documentation-container").querySelectorAll("h2, h3, .api-entry")),(0,u["default"])([].concat(o(document.querySelectorAll(".code"))))},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t){var e=t.headersContainer,r=t.sidebarContainer,u=t.headerStartLevel,l=e.querySelectorAll("h2, h3"),s=document.createElement("select"),f=document.createElement("ul"),d=u;f.classList.add("no-mobile");var h=f,p=d;[].concat(n(l)).forEach(function(t){var e=parseInt(t.tagName.split("")[1],10);e>p?(p=e,h=h.lastChild.appendChild(document.createElement("ul"))):e<p&&(p=e,h=h.parentNode.parentNode);var n=t.textContent,r=document.createElement("li"),o=document.createElement("a");o.setAttribute("href","#"+t.getAttribute("id")),o.textContent=n,r.appendChild(o),h.appendChild(r);var i=document.createElement("option");i.setAttribute("value",o.getAttribute("href")),i.textContent=""+c(p-d)+n,s.classList.add("display-on-small"),s.appendChild(i)}),s.addEventListener("change",function(t){window.location=t.target.value}),r.appendChild(f),r.appendChild(s),o(r),a(r),i(r,e)}function o(t){var e=function(){var e=document.querySelector(".hero-section"),n=document.querySelector(".ac-footer"),r=document.querySelector(".ac-nav"),o=document.querySelector(".sidebar > ul"),i=e.offsetHeight,a=r.offsetHeight,c=document.querySelector("html").getBoundingClientRect().height,u=n.offsetHeight,l=o.offsetHeight,s=window.pageYOffset,f=document.querySelector(".documentation-section"),d=window.getComputedStyle(f,null).getPropertyValue("padding-top").split("px")[0];if(d=parseInt(d,10),s>i-a+d){var h=c-u-l-d-50;s>h?t.style.top=h-s+"px":t.style.top=null,t.classList.add("fixed")}else t.classList.remove("fixed")};window.addEventListener("load",e),document.addEventListener("DOMContentLoaded",e),document.addEventListener("scroll",e)}function i(t,e){var r=[].concat(n(e.querySelectorAll("h2, h3"))),o=function(e){[].concat(n(t.querySelectorAll("a"))).forEach(function(t){t.getAttribute("href").slice(1)===e.getAttribute("id")?t.classList.add("active"):t.classList.remove("active")})},i=function(){var t=r.map(function(t){return{element:t,rect:t.getBoundingClientRect()}}).filter(function(t){var e=t.rect;return e.top<window.innerHeight/3&&e.bottom<window.innerHeight}).sort(function(t,e){return Math.abs(t.rect.top)<Math.abs(e.rect.top)?-1:1});return 0===t.length?void o(r[0]):void o(t[0].element)};i(),window.addEventListener("load",i),document.addEventListener("DOMContentLoaded",i),document.addEventListener("scroll",i)}function a(t){var e=t.querySelector("ul");e.addEventListener("click",function(t){"A"===t.target.tagName&&([].concat(n(e.querySelectorAll("a"))).forEach(function(t){return t.classList.remove("active")}),t.target.classList.add("active"))})}function c(t){if(0===t)return"";var e=new Array(t+1);return e.join("-")+"> "}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){t.forEach(function(t){var e=document.createElement("button");e.innerHTML='<img src="'+clippyPath+'" width="13" />',e.classList.add("clipboard"),t.appendChild(e);var n=new a["default"](e,{text:function(){return t.textContent}});e.addEventListener("mouseleave",function(){e.removeAttribute("aria-label"),e.classList.remove("hint--top")}),n.on("success",function(){e.classList.add("hint--top"),e.setAttribute("aria-label","Copied!")}),n.on("error",function(){return e.setAttribute("aria-label","Hit \u2318+C to copy")})})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o;var i=n(3),a=r(i)},function(t,e,n){var r,o,i;!function(a,c){o=[t,n(4),n(6),n(7)],r=c,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e,n,r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=o(e),s=o(n),f=o(r),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),h=function(t){function e(t,n){i(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return c(e,t),d(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f["default"])(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l["default"]({action:this.action(e),target:this.target(e),text:this.text(e),trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),e}(s["default"]);t.exports=h})},function(t,e,n){var r,o,i;!function(a,c){o=[t,n(5)],r=c,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i))}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e){r(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,n)),this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o["default"])(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o["default"])(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c})},function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}t.exports=e},function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e},function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return o(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(8),u=n(9);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){function r(t,e,n,r,i){var a=o.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}var i=n(10);t.exports=r},function(t){function e(t,e){for(;t&&t!==document;){if(t.matches(e))return t;t=t.parentNode}}if(Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=e},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t){[].concat(n(t)).forEach(function(t){t.setAttribute("name",t.getAttribute("id"));var e=document.createElement("a");e.setAttribute("href","#"+t.id),e.classList.add("anchor"),e.textContent="#",t.appendChild(e)})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r}]);