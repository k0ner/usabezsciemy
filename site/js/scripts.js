/* reframe.js
   ====================================================
   Version : 3.0.2
   Website : dollarshaveclub.github.io/reframe.js
   Repo    : github.com/yowainwright/reframe.js
   Author  : Jeff Wainwright
   License : MIT
   ==================================================== */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reframe=t()}(this,function(){"use strict";function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),o=0,t=0;t<n;t++)for(var r=arguments[t],f=0,d=r.length;f<d;f++,o++)i[o]=r[f];return i}return function(e,s){return void 0===s&&(s="js-reframe"),("string"==typeof e?t(document.querySelectorAll(e)):"length"in e?t(e):[e]).forEach(function(e){var t,n,i,o,r,f,d,l;-1!==e.className.split(" ").indexOf(s)||-1<e.style.width.indexOf("%")||(i=e.getAttribute("height")||e.offsetHeight,o=e.getAttribute("width")||e.offsetWidth,r=("string"==typeof i?parseInt(i):i)/("string"==typeof o?parseInt(o):o)*100,(f=document.createElement("div")).className=s,(d=f.style).position="relative",d.width="100%",d.paddingTop=r+"%",(l=e.style).position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null!==(t=e.parentNode)&&void 0!==t&&t.insertBefore(f,e),null!==(n=e.parentNode)&&void 0!==n&&n.removeChild(e),f.appendChild(e))})}});


/* ityped
   ====================================================
   Version : 1.0.3
   Website : https://ityped.surge.sh/
   Repo    : https://github.com/luisvinicius167/ityped
   Author  : Luis Vinicius
   License : MIT
   ==================================================== */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.ityped={})}(this,function(e){"use strict";e.init=function(e,t){var n=0,o=void 0,r=void 0,i=function(e,t){n===o&&t.loop&&(n=0),setTimeout(function(){a(e[n],t)},t.startDelay)},a=function(t,n){var o=0,r=t.length,i=setInterval(function(){if(n.placeholder?e.placeholder+=t[o]:e.textContent+=t[o],++o===r)return d(i,n)},n.typeSpeed)},d=function(e,t){return clearInterval(e),t.disableBackTyping&&n===o-1?t.onFinished():t.loop||n!==o-1?void setTimeout(function(){return c(t)},t.backDelay):t.onFinished()},c=function(t){var n=t.placeholder?e.placeholder:e.textContent,o=n.length,r=setInterval(function(){if(t.placeholder?e.placeholder=e.placeholder.substr(0,--o):e.textContent=n.substr(0,--o),0===o)return s(r,t)},t.backSpeed)},s=function(e,t){clearInterval(e),++n,i(r,t)};return function(t){var n=function(e){var t=e.strings,n=void 0===t?["Put your strings here...","and Enjoy!"]:t,o=e.typeSpeed,r=void 0===o?100:o,i=e.backSpeed,a=void 0===i?50:i,d=e.backDelay,c=void 0===d?500:d,s=e.startDelay,l=void 0===s?500:s,u=e.cursorChar,p=void 0===u?"|":u,f=e.placeholder,v=void 0!==f&&f,h=e.showCursor,y=void 0===h||h,b=e.disableBackTyping,g=void 0!==b&&b,C=e.onFinished,k=void 0===C?function(){}:C,m=e.loop;return{strings:n,typeSpeed:r,backSpeed:a,cursorChar:p,backDelay:c,placeholder:v,startDelay:l,showCursor:y,loop:void 0===m||m,disableBackTyping:g,onFinished:k}}(t||{}),a=n.strings;r=a,o=a.length,"string"==typeof e&&(e=document.querySelector(e)),n.showCursor&&function(e,t){var n=document.createElement("span");n.classList.add("ityped-cursor"),n.textContent="|",n.textContent=t.cursorChar,e.insertAdjacentElement("afterend",n)}(e,n),i(a,n)}(t)},Object.defineProperty(e,"__esModule",{value:!0})});


/* Smooth Scroll behavior polyfill
   ====================================================
   Version : 0.4.0
   Website : http://iamdustan.com/smoothscroll/
   Repo    : https://github.com/iamdustan/smoothscroll
   Author  : Dustan Kasten
   License : MIT
   ==================================================== */

!function(){"use strict";function o(o){var t=["MSIE ","Trident/","Edge/"];return new RegExp(t.join("|")).test(o)}function t(){function t(o,t){this.scrollLeft=o,this.scrollTop=t}function r(o){return.5*(1-Math.cos(Math.PI*o))}function i(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(o,t){return"Y"===t?o.clientHeight+h<o.scrollHeight:"X"===t?o.clientWidth+h<o.scrollWidth:void 0}function c(o,t){var e=l.getComputedStyle(o,null)["overflow"+t];return"auto"===e||"scroll"===e}function n(o){var t=s(o,"Y")&&c(o,"Y"),l=s(o,"X")&&c(o,"X");return t||l}function f(o){var t;do{t=(o=o.parentNode)===e.body}while(!1===t&&!1===n(o));return t=null,o}function a(o){var t,e,i,s=(y()-o.startTime)/v;t=r(s=s>1?1:s),e=o.startX+(o.x-o.startX)*t,i=o.startY+(o.y-o.startY)*t,o.method.call(o.scrollable,e,i),e===o.x&&i===o.y||l.requestAnimationFrame(a.bind(l,o))}function p(o,r,i){var s,c,n,f,p=y();o===e.body?(s=l,c=l.scrollX||l.pageXOffset,n=l.scrollY||l.pageYOffset,f=u.scroll):(s=o,c=o.scrollLeft,n=o.scrollTop,f=t),a({scrollable:s,method:f,startTime:p,startX:c,startY:n,x:r,y:i})}if(!("scrollBehavior"in e.documentElement.style&&!0!==l.__forceSmoothScrollPolyfill__)){var d=l.HTMLElement||l.Element,v=468,h=o(l.navigator.userAgent)?1:0,u={scroll:l.scroll||l.scrollTo,scrollBy:l.scrollBy,elementScroll:d.prototype.scroll||t,scrollIntoView:d.prototype.scrollIntoView},y=l.performance&&l.performance.now?l.performance.now.bind(l.performance):Date.now;l.scroll=l.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?p.call(l,e.body,void 0!==arguments[0].left?~~arguments[0].left:l.scrollX||l.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:l.scrollY||l.pageYOffset):u.scroll.call(l,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:l.scrollX||l.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:l.scrollY||l.pageYOffset))},l.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?u.scrollBy.call(l,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(l,e.body,~~arguments[0].left+(l.scrollX||l.pageXOffset),~~arguments[0].top+(l.scrollY||l.pageYOffset)))},d.prototype.scroll=d.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var o=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value couldn't be converted");u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},d.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):u.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},d.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var o=f(this),t=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==e.body?(p.call(this,o,o.scrollLeft+r.left-t.left,o.scrollTop+r.top-t.top),"fixed"!==l.getComputedStyle(o).position&&l.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):l.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else u.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}}var l=window,e=document;"object"==typeof exports?module.exports={polyfill:t}:t()}();
