!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector('button[type="submit"]'),u=document.querySelector(".form");function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(e){e.preventDefault(),i.disabled=!0;var t=e.currentTarget.elements,n=t.delay,o=t.step,l=t.amount,c=Number(n.value),d=Number(o.value),f=Number(l.value),s=c+d*f;if(c<0||d<0||f<0)return void r.Notify.failure("WTF");for(var p=1;p<=f;p+=1)a(p,c).then((function(e){var t=e.position,n=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),c+=d;u.reset(),m=s,setTimeout((function(){i.disabled=!1}),m);var m}))}();
//# sourceMappingURL=03-promises.321de348.js.map
