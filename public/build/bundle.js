(()=>{"use strict";var e;function t(e,t){navigator.onLine||e("offline"),e("error",t)}function n(e,n,o){navigator.serviceWorker.register(e,o).then((function(e){n("registered",e),e.waiting?n("updated",e):e.onupdatefound=function(){n("updatefound",e);var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?n("updated",e):n("cached",e))}}})).catch((function(e){return t(n,e)}))}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return t(emit,e)}))}function r(){}function i(e){return e()}function a(){return Object.create(null)}function c(e){e.forEach(i)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e){return 0===Object.keys(e).length}"undefined"!=typeof window&&(e="undefined"!=typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}}),function(r,i){void 0===i&&(i={});var a=i.registrationOptions;void 0===a&&(a={}),delete i.registrationOptions;var c=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];i&&i[e]&&i[e].apply(i,t)};"serviceWorker"in navigator&&e.then((function(){Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))?(function(e,r,i){fetch(e).then((function(t){404===t.status?(r("error",new Error("Service worker not found at "+e)),o()):-1===t.headers.get("content-type").indexOf("javascript")?(r("error",new Error("Expected "+e+" to have javascript content-type, but received "+t.headers.get("content-type"))),o()):n(e,r,i)})).catch((function(e){return t(r,e)}))}(r,c,a),navigator.serviceWorker.ready.then((function(e){c("ready",e)})).catch((function(e){return t(c,e)}))):(n(r,c,a),navigator.serviceWorker.ready.then((function(e){c("ready",e)})).catch((function(e){return t(c,e)})))}))}("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),new Set;let d,f=!1;function h(e,t){e.appendChild(t)}function p(e){e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){d=e}new Set;const w=[],y=[],b=[],k=[],_=Promise.resolve();let x=!1;function E(e){b.push(e)}let S=!1;const C=new Set;function A(){if(!S){S=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];v(t),O(t.$$)}for(v(null),w.length=0;y.length;)y.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];C.has(t)||(C.add(t),t())}b.length=0}while(w.length);for(;k.length;)k.pop()();x=!1,S=!1,C.clear()}}function O(e){if(null!==e.fragment){e.update(),c(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const T=new Set;let W;function j(e,t){const n=e.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t,n,o,l,u,h,g=[-1]){const $=d;v(e);const m=e.$$={fragment:null,ctx:null,props:u,update:r,not_equal:l,bound:a(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map($?$.$$.context:t.context||[]),callbacks:a(),dirty:g,skip_bound:!1,root:t.target||$.$$.root};h&&h(m.root);let y=!1;if(m.ctx=n?n(e,t.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),y&&function(e,t){-1===e.$$.dirty[0]&&(w.push(e),x||(x=!0,_.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(e,t)),n})):[],m.update(),y=!0,c(m.before_update),m.fragment=!!o&&o(m.ctx),t.target){if(t.hydrate){f=!0;const e=(S=t.target,Array.from(S.childNodes));m.fragment&&m.fragment.l(e),e.forEach(p)}else m.fragment&&m.fragment.c();t.intro&&((b=e.$$.fragment)&&b.i&&(T.delete(b),b.i(k))),function(e,t,n,o){const{fragment:r,on_mount:a,on_destroy:l,after_update:u}=e.$$;r&&r.m(t,n),o||E((()=>{const t=a.map(i).filter(s);l?l.push(...t):c(t),e.$$.on_mount=[]})),u.forEach(E)}(e,t.target,t.anchor,t.customElement),f=!1,A()}var b,k,S;v($)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(W=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(i).filter(s);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){c(this.$$.on_disconnect)}$destroy(){j(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!u(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});function N(e){let t,n,o,i,a,c,s;return{c(){t=g("main"),n=g("h1"),o=$("Hello "),i=$(e[0]),a=$("!"),c=$(" "),s=g("p"),s.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte\n    apps.',m(n,"class","svelte-1e9puaw"),m(t,"class","svelte-1e9puaw")},m(e,r){(function(e,t,n){e.insertBefore(t,n||null)})(e,t,r),h(t,n),h(n,o),h(n,i),h(n,a),h(t,c),h(t,s)},p(e,[t]){var n,o;1&t&&(n=i,o=""+(o=e[0]),n.wholeText!==o&&(n.data=o))},i:r,o:r,d(e){e&&p(t)}}}function q(e,t,n){let{name:o}=t;return e.$$set=e=>{"name"in e&&n(0,o=e.name)},[o]}new class extends class{$destroy(){j(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!u(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),L(this,e,q,N,l,{name:0})}}({target:document.body,props:{name:"world"}})})();