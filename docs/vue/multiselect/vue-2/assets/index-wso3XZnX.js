var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):n.Vue=r()})(e,(function(){function e(e){return e==null?``:typeof e==`object`?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||t===0?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(`,`),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var r=n(`slot,component`,!0);function i(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var a=Object.prototype.hasOwnProperty;function o(e,t){return a.call(e,t)}function s(e){return typeof e==`string`||typeof e==`number`}function c(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var l=/-(\w)/g,u=c(function(e){return e.replace(l,function(e,t){return t?t.toUpperCase():``})}),d=c(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),f=/([^-])([A-Z])/g,p=c(function(e){return e.replace(f,`$1-$2`).replace(f,`$1-$2`).toLowerCase()});function m(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function h(e,t){t||=0;for(var n=e.length-t,r=Array(n);n--;)r[n]=e[n+t];return r}function g(e,t){for(var n in t)e[n]=t[n];return e}function _(e){return typeof e==`object`&&!!e}var v=Object.prototype.toString,y=`[object Object]`;function b(e){return v.call(e)===y}function x(e){for(var t={},n=0;n<e.length;n++)e[n]&&g(t,e[n]);return t}function S(){}var C=function(){return!1};function w(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(`,`)}function T(e,t){return e==t||(_(e)&&_(t)?JSON.stringify(e)===JSON.stringify(t):!1)}function E(e,t){for(var n=0;n<e.length;n++)if(T(e[n],t))return n;return-1}var D={optionMergeStrategies:Object.create(null),silent:!1,devtools:!0,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:C,isUnknownElement:C,getTagNamespace:S,mustUseProp:C,_assetTypes:[`component`,`directive`,`filter`],_lifecycleHooks:[`beforeCreate`,`created`,`beforeMount`,`mounted`,`beforeUpdate`,`updated`,`beforeDestroy`,`destroyed`,`activated`,`deactivated`],_maxUpdateCount:100,_isServer:!1};function ee(e){var t=(e+``).charCodeAt(0);return t===36||t===95}function O(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var te=/[^\w\.\$]/;function k(e){if(!te.test(e)){var t=e.split(`.`);return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var ne=`__proto__`in{},A=typeof window<`u`&&Object.prototype.toString.call(window)!==`[object Object]`,j=A&&window.navigator.userAgent.toLowerCase(),M=j&&/msie|trident/.test(j),N=j&&j.indexOf(`msie 9.0`)>0,re=j&&j.indexOf(`edge/`)>0,P=j&&j.indexOf(`android`)>0,ie=j&&/iphone|ipad|ipod|ios/.test(j),F=A&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ae(e){return/native code/.test(e.toString())}var oe=(function(){var e=[],t=!1,n;function r(){t=!1;var n=e.slice(0);e.length=0;for(var r=0;r<n.length;r++)n[r]()}if(typeof Promise<`u`&&ae(Promise)){var i=Promise.resolve();n=function(){i.then(r),ie&&setTimeout(S)}}else if(typeof MutationObserver<`u`&&(ae(MutationObserver)||MutationObserver.toString()===`[object MutationObserverConstructor]`)){var a=1,o=new MutationObserver(r),s=document.createTextNode(String(a));o.observe(s,{characterData:!0}),n=function(){a=(a+1)%2,s.data=String(a)}}else n=setTimeout;return function(i,a){var o=a?function(){i.call(a)}:i;e.push(o),t||(t=!0,n(r,0))}})(),se=typeof Set<`u`&&ae(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return this.set[e]!==void 0},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}(),ce,le,ue,de=n(`Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require`);ce=typeof Proxy<`u`&&Proxy.toString().match(/native code/),le={has:function(e,t){var n=t in e,r=de(t)||t.charAt(0)===`_`;return!n&&!r&&G(`Property or method "`+t+`" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.`,e),n||!r}},ue=function(e){ce?e._renderProxy=new Proxy(e,le):e._renderProxy=e};var fe=0,I=function(){this.id=fe++,this.subs=[]};I.prototype.addSub=function(e){this.subs.push(e)},I.prototype.removeSub=function(e){i(this.subs,e)},I.prototype.depend=function(){I.target&&I.target.addDep(this)},I.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},I.target=null;var pe=[];function me(e){I.target&&pe.push(I.target),I.target=e}function he(){I.target=pe.pop()}var L=[],ge={},_e={},ve=!1,ye=!1,be=0;function xe(){L.length=0,ge={},_e={},ve=ye=!1}function Se(){for(ye=!0,L.sort(function(e,t){return e.id-t.id}),be=0;be<L.length;be++){var e=L[be],t=e.id;if(ge[t]=null,e.run(),ge[t]!=null&&(_e[t]=(_e[t]||0)+1,_e[t]>D._maxUpdateCount)){G(`You may have an infinite update loop `+(e.user?`in watcher with expression "`+e.expression+`"`:`in a component render function.`),e.vm);break}}F&&D.devtools&&F.emit(`flush`),xe()}function Ce(e){var t=e.id;if(ge[t]==null){if(ge[t]=!0,!ye)L.push(e);else{for(var n=L.length-1;n>=0&&L[n].id>e.id;)n--;L.splice(Math.max(n,be)+1,0,e)}ve||(ve=!0,oe(Se))}}var we=0,R=function(e,t,n,r){r===void 0&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++we,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new se,this.newDepIds=new se,typeof t==`function`?this.getter=t:(this.getter=k(t),this.getter||(this.getter=function(){},G(`Failed watching path: "`+t+`" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.`,e))),this.value=this.lazy?void 0:this.get()};R.prototype.get=function(){me(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&Ee(e),he(),this.cleanupDeps(),e},R.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},R.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},R.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ce(this)},R.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||_(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(G(`Error in watcher "`+this.expression+`"`,this.vm),D.errorHandler)D.errorHandler.call(null,e,this.vm);else throw e}else this.cb.call(this.vm,e,t)}}},R.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},R.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},R.prototype.teardown=function(){var e=this;if(this.active){!this.vm._isBeingDestroyed&&!this.vm._vForRemoving&&i(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Te=new se;function Ee(e,t){var n,r;t||(t=Te,t.clear());var i=Array.isArray(e),a=_(e);if((i||a)&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)Ee(e[n],t);else if(a)for(r=Object.keys(e),n=r.length;n--;)Ee(e[r[n]],t)}}var De=Array.prototype,Oe=Object.create(De);[`push`,`pop`,`shift`,`unshift`,`splice`,`sort`,`reverse`].forEach(function(e){var t=De[e];O(Oe,e,function(){for(var n=arguments,r=arguments.length,i=Array(r);r--;)i[r]=n[r];var a=t.apply(this,i),o=this.__ob__,s;switch(e){case`push`:s=i;break;case`unshift`:s=i;break;case`splice`:s=i.slice(2);break}return s&&o.observeArray(s),o.dep.notify(),a})});var ke=Object.getOwnPropertyNames(Oe),z={shouldConvert:!0,isSettingProps:!1},Ae=function(e){this.value=e,this.dep=new I,this.vmCount=0,O(e,`__ob__`,this),Array.isArray(e)?((ne?je:Me)(e,Oe,ke),this.observeArray(e)):this.walk(e)};Ae.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Pe(e,t[n],e[t[n]])},Ae.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ne(e[t])};function je(e,t){e.__proto__=t}function Me(e,t,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];O(e,a,t[a])}}function Ne(e){if(_(e)){var t;return o(e,`__ob__`)&&e.__ob__ instanceof Ae?t=e.__ob__:z.shouldConvert&&!D._isServer&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new Ae(e)),t}}function Pe(e,t,n,r){var i=new I,a=Object.getOwnPropertyDescriptor(e,t);if(!(a&&a.configurable===!1)){var o=a&&a.get,s=a&&a.set,c=Ne(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=o?o.call(e):n;if(I.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)))for(var r=void 0,a=0,s=t.length;a<s;a++)r=t[a],r&&r.__ob__&&r.__ob__.dep.depend();return t},set:function(t){t!==(o?o.call(e):n)&&(r&&r(),s?s.call(e,t):n=t,c=Ne(t),i.notify())}})}}function Fe(e,t,n){if(Array.isArray(e))return e.splice(t,1,n),n;if(o(e,t)){e[t]=n;return}var r=e.__ob__;if(e._isVue||r&&r.vmCount){G(`Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.`);return}if(!r){e[t]=n;return}return Pe(r.value,t,n),r.dep.notify(),n}function Ie(e,t){var n=e.__ob__;if(e._isVue||n&&n.vmCount){G(`Avoid deleting properties on a Vue instance or its root $data - just set it to null.`);return}o(e,t)&&(delete e[t],n&&n.dep.notify())}function Le(e){e._watchers=[],Re(e),ze(e),Ve(e),Ue(e),We(e)}function Re(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t);z.shouldConvert=!e.$parent;for(var i=function(i){var a=r[i];Pe(e,a,Bt(a,t,n,e),function(){e.$parent&&!z.isSettingProps&&G(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "`+a+`"`,e)})},a=0;a<r.length;a++)i(a);z.shouldConvert=!0}}function ze(e){var t=e.$options.data;t=e._data=typeof t==`function`?t.call(e):t||{},b(t)||(t={},G(`data functions should return an object.`,e));for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;)r&&o(r,n[i])?G(`The data property "`+n[i]+`" is already declared as a prop. Use prop default value instead.`,e):qe(e,n[i]);Ne(t),t.__ob__&&t.__ob__.vmCount++}var Be={enumerable:!0,configurable:!0,get:S,set:S};function Ve(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];typeof r==`function`?(Be.get=He(r,e),Be.set=S):(Be.get=r.get?r.cache===!1?m(r.get,e):He(r.get,e):S,Be.set=r.set?m(r.set,e):S),Object.defineProperty(e,n,Be)}}function He(e,t){var n=new R(t,e,S,{lazy:!0});return function(){return n.dirty&&n.evaluate(),I.target&&n.depend(),n.value}}function Ue(e){var t=e.$options.methods;if(t)for(var n in t)t[n]==null?G(`Method "`+n+`" is undefined in options.`,e):e[n]=m(t[n],e)}function We(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Ge(e,n,r[i]);else Ge(e,n,r)}}function Ge(e,t,n){var r;b(n)&&(r=n,n=n.handler),typeof n==`string`&&(n=e[n]),e.$watch(t,n,r)}function Ke(e){var t={};t.get=function(){return this._data},t.set=function(e){G(`Avoid replacing instance root $data. Use nested data properties instead.`,this)},Object.defineProperty(e.prototype,`$data`,t),e.prototype.$set=Fe,e.prototype.$delete=Ie,e.prototype.$watch=function(e,t,n){var r=this;n||={},n.user=!0;var i=new R(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function qe(e,t){ee(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}var B=function(e,t,n,r,i,a,o,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=a,this.context=o,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1},Je=function(){var e=new B;return e.text=``,e.isComment=!0,e};function Ye(e){var t=new B(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function Xe(e){for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=Ye(e[n]);return t}function Ze(e,t,n){if(s(e))return[Qe(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var o=e[i],c=r[r.length-1];Array.isArray(o)?r.push.apply(r,Ze(o,t,i)):s(o)?c&&c.text?c.text+=String(o):o!==``&&r.push(Qe(o)):o instanceof B&&(o.text&&c&&c.text?c.text+=o.text:(t&&$e(o,t),o.tag&&o.key==null&&n!=null&&(o.key=`__vlist_`+n+`_`+i+`__`),r.push(o)))}return r}}function Qe(e){return new B(void 0,void 0,void 0,String(e))}function $e(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)$e(e.children[n],t)}function et(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function V(e,t,n){var r=e[t];if(r){var i=e.__injected||={};i[t]||(i[t]=!0,e[t]=function(){r.apply(this,arguments),n.apply(this,arguments)})}else e[t]=n}function tt(e,t,n,r){var i,a,o,s,c,l;for(i in e)if(a=e[i],o=t[i],!a)G(`Handler for event "`+i+`" is undefined.`);else if(!o)l=i.charAt(0)===`!`,c=l?i.slice(1):i,Array.isArray(a)?n(c,a.invoker=nt(a),l):(a.invoker||(s=a,a=e[i]={},a.fn=s,a.invoker=rt(a)),n(c,a.invoker,l));else if(a!==o)if(Array.isArray(o)){o.length=a.length;for(var u=0;u<o.length;u++)o[u]=a[u];e[i]=o}else o.fn=a,e[i]=o;for(i in t)e[i]||(c=i.charAt(0)===`!`?i.slice(1):i,r(c,t[i].invoker))}function nt(e){return function(t){for(var n=arguments,r=arguments.length===1,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function rt(e){return function(t){arguments.length===1?e.fn(t):e.fn.apply(null,arguments)}}var H=null;function it(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function at(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=Je,n.$options.template?G(`You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.`,n):G(`Failed to mount component: template or render function not defined.`,n)),U(n,`beforeMount`),n._watcher=new R(n,function(){n._update(n._render(),t)},S),t=!1,n.$root===n&&(n._isMounted=!0,U(n,`mounted`)),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&U(n,`beforeUpdate`);var r=n.$el,i=H;H=n;var a=n._vnode;n._vnode=e,a?n.$el=n.__patch__(a,e):n.$el=n.__patch__(n.$el,e,t),H=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&U(n,`updated`)},e.prototype._updateFromParent=function(e,t,n,r){var i=this,a=!!(i.$options._renderChildren||r);if(i.$options._parentVnode=n,i.$options._renderChildren=r,e&&i.$options.props){z.shouldConvert=!1,z.isSettingProps=!0;for(var o=i.$options._propKeys||[],s=0;s<o.length;s++){var c=o[s];i[c]=Bt(c,i.$options.props,e,i)}z.shouldConvert=!0,z.isSettingProps=!1}if(t){var l=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,l)}a&&(i.$slots=wt(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){U(e,`beforeDestroy`),e._isBeingDestroyed=!0;var t=e.$parent;t&&!t._isBeingDestroyed&&!e.$options.abstract&&i(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,U(e,`destroyed`),e.$off(),e.$el&&(e.$el.__vue__=null)}}}function U(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit(`hook:`+t)}var ot={init:dt,prepatch:ft,insert:pt,destroy:mt},st=Object.keys(ot);function ct(e,t,n,r,i){if(e){if(_(e)&&(e=W.extend(e)),typeof e!=`function`){G(`Invalid Component definition: `+String(e),n);return}if(!e.cid){if(e.resolved)e=e.resolved;else if(e=ht(e,function(){n.$forceUpdate()}),!e)return}t||={};var a=gt(t,e);if(e.options.functional)return lt(e,a,t,n,r);var o=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),vt(t);var s=e.options.name||i;return new B(`vue-component-`+e.cid+(s?`-`+s:``),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:o,tag:i,children:r})}}function lt(e,t,n,r,i){var a={},o=e.options.props;if(o)for(var s in o)a[s]=Bt(s,o,t);return e.options.render.call(null,m(bt,{_self:Object.create(r)}),{props:a,data:n,parent:r,children:Ze(i),slots:function(){return wt(i,r)}})}function ut(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function dt(e,t){(!e.child||e.child._isDestroyed)&&(e.child=ut(e,H)).$mount(t?e.elm:void 0,t)}function ft(e,t){var n=t.componentOptions;(t.child=e.child)._updateFromParent(n.propsData,n.listeners,t,n.children)}function pt(e){e.child._isMounted||(e.child._isMounted=!0,U(e.child,`mounted`)),e.data.keepAlive&&(e.child._inactive=!1,U(e.child,`activated`))}function mt(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,U(e.child,`deactivated`)):e.child.$destroy())}function ht(e,t){if(e.requested)e.pendingCallbacks.push(t);else{e.requested=!0;var n=e.pendingCallbacks=[t],r=!0,i=function(t){if(_(t)&&(t=W.extend(t)),e.resolved=t,!r)for(var i=0,a=n.length;i<a;i++)n[i](t)},a=function(t){G(`Failed to resolve async component: `+String(e)+(t?`
Reason: `+t:``))},o=e(i,a);return o&&typeof o.then==`function`&&!e.resolved&&o.then(i,a),r=!1,e.resolved}}function gt(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,a=e.props,o=e.domProps;if(i||a||o)for(var s in n){var c=p(s);_t(r,a,s,c,!0)||_t(r,i,s,c)||_t(r,o,s,c)}return r}}function _t(e,t,n,r,i){if(t){if(o(t,n))return e[n]=t[n],i||delete t[n],!0;if(o(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function vt(e){e.hook||={};for(var t=0;t<st.length;t++){var n=st[t],r=e.hook[n],i=ot[n];e.hook[n]=r?yt(i,r):i}}function yt(e,t){return function(n,r){e(n,r),t(n,r)}}function bt(e,t,n){return t&&(Array.isArray(t)||typeof t!=`object`)&&(n=t,t=void 0),xt(this._self,e,t,n)}function xt(e,t,n,r){if(n&&n.__ob__){G(`Avoid using observed data object as vnode data: `+JSON.stringify(n)+`
Always create fresh vnode data objects in each render!`,e);return}if(!t)return Je();if(typeof t==`string`){var i,a=D.getTagNamespace(t);return D.isReservedTag(t)?new B(t,n,Ze(r,a),void 0,void 0,a,e):(i=zt(e.$options,`components`,t))?ct(i,n,e,r,t):new B(t,n,Ze(r,a),void 0,void 0,a,e)}else return ct(t,n,e,r)}function St(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=wt(e.$options._renderChildren,e._renderContext),e.$createElement=m(bt,e),e.$options.el&&e.$mount(e.$options.el)}function Ct(n){n.prototype.$nextTick=function(e){oe(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=Xe(e.$slots[a]);r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var o;try{o=n.call(e._renderProxy,e.$createElement)}catch(t){if(G(`Error when rendering `+kt(e)+`:`),D.errorHandler)D.errorHandler.call(null,t,e);else if(D._isServer)throw t;else setTimeout(function(){throw t},0);o=e._vnode}return o instanceof B||(Array.isArray(o)&&G(`Multiple root nodes returned from render function. Render function should return a single root node.`,e),o=Je()),o.parent=i,o},n.prototype._h=bt,n.prototype._s=e,n.prototype._n=t,n.prototype._e=Je,n.prototype._q=T,n.prototype._i=E,n.prototype._m=function(e,t){var n=this._staticTrees[e];if(n&&!t)return Array.isArray(n)?Xe(n):Ye(n);if(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),Array.isArray(n))for(var r=0;r<n.length;r++)n[r].isStatic=!0,n[r].key=`__static__`+e+`_`+r;else n.isStatic=!0,n.key=`__static__`+e;return n};var r=function(e){return e};n.prototype._f=function(e){return zt(this.$options,`filters`,e,!0)||r},n.prototype._l=function(e,t){var n,r,i,a,o;if(Array.isArray(e))for(n=Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if(typeof e==`number`)for(n=Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(_(e))for(a=Object.keys(e),n=Array(a.length),r=0,i=a.length;r<i;r++)o=a[r],n[r]=t(e[o],o,r);return n},n.prototype._t=function(e,t){var n=this.$slots[e];return n&&(n._rendered&&G(`Duplicate presence of slot "`+e+`" found in the same render tree - this will likely cause render errors.`,this),n._rendered=!0),n||t},n.prototype._b=function(e,t,n){if(t)if(!_(t))G(`v-bind without argument expects an Object or Array value`,this);else for(var r in Array.isArray(t)&&(t=x(t)),t)if(r===`class`||r===`style`)e[r]=t[r];else{var i=n||D.mustUseProp(r)?e.domProps||={}:e.attrs||={};i[r]=t[r]}return e},n.prototype._k=function(e){return D.keyCodes[e]}}function wt(e,t){var n={};if(!e)return n;for(var r=Ze(e)||[],i=[],a,o,s=0,c=r.length;s<c;s++)if(o=r[s],o.context===t&&o.data&&(a=o.data.slot)){var l=n[a]||(n[a]=[]);o.tag===`template`?l.push.apply(l,o.children):l.push(o)}else i.push(o);return i.length&&!(i.length===1&&(i[0].text===` `||i[0].isComment))&&(n.default=i),n}function Tt(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=m(e.$on,e),r=m(e.$off,e);e._updateListeners=function(e,t){tt(e,t||{},n,r)},t&&e._updateListeners(t)}function Et(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(arguments.length===1)return n._events[e]=null,n;for(var i,a=r.length;a--;)if(i=r[a],i===t||i.fn===t){r.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?h(n):n;for(var r=h(arguments,1),i=0,a=n.length;i<a;i++)n[i].apply(t,r)}return t}}var Dt=0;function Ot(e){e.prototype._init=function(e){var r=this;r._uid=Dt++,r._isVue=!0,e&&e._isComponent?t(r,e):r.$options=q(n(r),e||{},r),ue(r),r._self=r,it(r),Tt(r),U(r,`beforeCreate`),Le(r),U(r,`created`),St(r)};function t(e,t){var r=e.$options=Object.create(n(e));r.parent=t.parent,r.propsData=t.propsData,r._parentVnode=t._parentVnode,r._parentListeners=t._parentListeners,r._renderChildren=t._renderChildren,r._componentTag=t._componentTag,t.render&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns)}function n(e){var t=e.constructor,n=t.options;if(t.super){var r=t.super.options;r!==t.superOptions&&(t.superOptions=r,n=t.options=q(r,t.extendOptions),n.name&&(n.components[n.name]=t))}return n}}function W(e){this instanceof W||G("Vue is a constructor and should be called with the `new` keyword"),this._init(e)}Ot(W),Ke(W),Et(W),at(W),Ct(W);var G=S,kt,At=typeof console<`u`;G=function(e,t){At&&!D.silent&&console.error(`[Vue warn]: `+e+` `+(t?jt(kt(t)):``))},kt=function(e){if(e.$root===e)return`root instance`;var t=e._isVue?e.$options.name||e.$options._componentTag:e.name;return t?`component <`+t+`>`:`anonymous component`};var jt=function(e){return e===`anonymous component`&&(e+=` - use the "name" option for better debugging messages.`),`(found in `+e+`)`},K=D.optionMergeStrategies;K.el=K.propsData=function(e,t,n,r){return n||G(`option "`+r+'" can only be used during instance creation with the `new` keyword.'),Ft(e,t)},K.name=function(e,t,n){return n&&t&&G(`options "name" can only be used as a component definition option, not during instance creation.`),Ft(e,t)};function Mt(e,t){var n,r,i;for(n in t)r=e[n],i=t[n],o(e,n)?_(r)&&_(i)&&Mt(r,i):Fe(e,n,i);return e}K.data=function(e,t,n){if(!n)return t?typeof t==`function`?e?function(){return Mt(t.call(this),e.call(this))}:t:(G(`The "data" option should be a function that returns a per-instance value in component definitions.`,n),e):e;if(e||t)return function(){var r=typeof t==`function`?t.call(n):t,i=typeof e==`function`?e.call(n):void 0;return r?Mt(r,i):i}};function Nt(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}D._lifecycleHooks.forEach(function(e){K[e]=Nt});function Pt(e,t){var n=Object.create(e||null);return t?g(n,t):n}D._assetTypes.forEach(function(e){K[e+`s`]=Pt}),K.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};for(var r in g(n,e),t){var i=n[r],a=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(a):[a]}return n},K.props=K.methods=K.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return g(n,e),g(n,t),n};var Ft=function(e,t){return t===void 0?e:t};function It(e){if(e.components){var t=e.components,n;for(var i in t){var a=i.toLowerCase();if(r(a)||D.isReservedTag(a)){G(`Do not use built-in or reserved HTML elements as component id: `+i);continue}n=t[i],b(n)&&(t[i]=W.extend(n))}}}function Lt(e){var t=e.props;if(t){var n={},r,i,a;if(Array.isArray(t))for(r=t.length;r--;)i=t[r],typeof i==`string`?(a=u(i),n[a]={type:null}):G(`props must be strings when using array syntax.`);else if(b(t))for(var o in t)i=t[o],a=u(o),n[a]=b(i)?i:{type:i};e.props=n}}function Rt(e){var t=e.directives;if(t)for(var n in t){var r=t[n];typeof r==`function`&&(t[n]={bind:r,update:r})}}function q(e,t,n){It(t),Lt(t),Rt(t);var r=t.extends;if(r&&(e=typeof r==`function`?q(e,r.options,n):q(e,r,n)),t.mixins)for(var i=0,a=t.mixins.length;i<a;i++){var s=t.mixins[i];s.prototype instanceof W&&(s=s.options),e=q(e,s,n)}var c={},l;for(l in e)u(l);for(l in t)o(e,l)||u(l);function u(r){c[r]=(K[r]||Ft)(e[r],t[r],n,r)}return c}function zt(e,t,n,r){if(typeof n==`string`){var i=e[t],a=i[n]||i[u(n)]||i[d(u(n))];return r&&!a&&G(`Failed to resolve `+t.slice(0,-1)+`: `+n,e),a}}function Bt(e,t,n,r){var i=t[e],a=!o(n,e),s=n[e];if(Wt(i.type)===`Boolean`&&(a&&!o(i,`default`)?s=!1:(s===``||s===p(e))&&(s=!0)),s===void 0){s=Vt(r,i,e);var c=z.shouldConvert;z.shouldConvert=!0,Ne(s),z.shouldConvert=c}return Ht(i,e,s,r,a),s}function Vt(e,t,n){if(o(t,`default`)){var r=t.default;return _(r)&&G(`Invalid default value for prop "`+n+`": Props with type Object/Array must use a factory function to return the default value.`,e),typeof r==`function`&&t.type!==Function?r.call(e):r}}function Ht(e,t,n,r,i){if(e.required&&i){G(`Missing required prop: "`+t+`"`,r);return}if(!(n==null&&!e.required)){var a=e.type,o=!a||a===!0,s=[];if(a){Array.isArray(a)||(a=[a]);for(var c=0;c<a.length&&!o;c++){var l=Ut(n,a[c]);s.push(l.expectedType),o=l.valid}}if(!o){G(`Invalid prop: type check failed for prop "`+t+`". Expected `+s.map(d).join(`, `)+`, got `+Object.prototype.toString.call(n).slice(8,-1)+`.`,r);return}var u=e.validator;u&&(u(n)||G(`Invalid prop: custom validator check failed for prop "`+t+`".`,r))}}function Ut(e,t){var n,r=Wt(t);return n=r===`String`?typeof e==(r=`string`):r===`Number`?typeof e==(r=`number`):r===`Boolean`?typeof e==(r=`boolean`):r===`Function`?typeof e==(r=`function`):r===`Object`?b(e):r===`Array`?Array.isArray(e):e instanceof t,{valid:n,expectedType:r}}function Wt(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}var Gt=Object.freeze({defineReactive:Pe,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:r,remove:i,hasOwn:o,isPrimitive:s,cached:c,camelize:u,capitalize:d,hyphenate:p,bind:m,toArray:h,extend:g,isObject:_,isPlainObject:b,toObject:x,noop:S,no:C,genStaticKeys:w,looseEqual:T,looseIndexOf:E,isReserved:ee,def:O,parsePath:k,hasProto:ne,inBrowser:A,UA:j,isIE:M,isIE9:N,isEdge:re,isAndroid:P,isIOS:ie,devtools:F,nextTick:oe,get _Set(){return se},mergeOptions:q,resolveAsset:zt,get warn(){return G},get formatComponentName(){return kt},validateProp:Bt});function Kt(e){e.use=function(e){if(!e.installed){var t=h(arguments,1);return t.unshift(this),typeof e.install==`function`?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function qt(e){e.mixin=function(t){e.options=q(e.options,t)}}function Jt(e){e.cid=0;var t=1;e.extend=function(e){e||={};var n=this,r=n.cid===0;if(r&&e._Ctor)return e._Ctor;var i=e.name||n.options.name;/^[a-zA-Z][\w-]*$/.test(i)||(G(`Invalid component name: "`+i+`". Component names can only contain alphanumeric characaters and the hyphen.`),i=null);var a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=q(n.options,e),a.super=n,a.extend=n.extend,D._assetTypes.forEach(function(e){a[e]=n[e]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=e,r&&(e._Ctor=a),a}}function Yt(e){D._assetTypes.forEach(function(t){e[t]=function(n,r){return r?(t===`component`&&D.isReservedTag(n)&&G(`Do not use built-in or reserved HTML elements as component id: `+n),t===`component`&&b(r)&&(r.name=r.name||n,r=e.extend(r)),t===`directive`&&typeof r==`function`&&(r={bind:r,update:r}),this.options[t+`s`][n]=r,r):this.options[t+`s`][n]}})}var Xt={KeepAlive:{name:`keep-alive`,abstract:!0,created:function(){this.cache=Object.create(null)},render:function(){var e=et(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=e.key==null?t.Ctor.cid+`::`+t.tag:e.key;this.cache[n]?e.child=this.cache[n].child:this.cache[n]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];U(n.child,`deactivated`),n.child.$destroy()}}}};function Zt(e){var t={};t.get=function(){return D},t.set=function(){G(`Do not replace the Vue.config object, set individual fields instead.`)},Object.defineProperty(e,`config`,t),e.util=Gt,e.set=Fe,e.delete=Ie,e.nextTick=oe,e.options=Object.create(null),D._assetTypes.forEach(function(t){e.options[t+`s`]=Object.create(null)}),g(e.options.components,Xt),Kt(e),qt(e),Jt(e),Yt(e)}Zt(W),Object.defineProperty(W.prototype,`$isServer`,{get:function(){return D._isServer}}),W.version=`2.0.0`;var Qt=n(`value,selected,checked,muted`),$t=n(`contenteditable,draggable,spellcheck`),en=n(`allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible`);n(`accept,accept-charset,accesskey,action,align,alt,async,autocomplete,autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,name,contenteditable,contextmenu,controls,coords,data,datetime,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,type,usemap,value,width,wrap`);var tn=`http://www.w3.org/1999/xlink`,nn=function(e){return e.charAt(5)===`:`&&e.slice(0,5)===`xlink`},rn=function(e){return nn(e)?e.slice(6,e.length):``},an=function(e){return e==null||e===!1};function on(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=sn(r.data,t));for(;n=n.parent;)n.data&&(t=sn(t,n.data));return cn(t)}function sn(e,t){return{staticClass:ln(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function cn(e){var t=e.class,n=e.staticClass;return n||t?ln(n,un(t)):``}function ln(e,t){return e?t?e+` `+t:e:t||``}function un(e){var t=``;if(!e)return t;if(typeof e==`string`)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=un(e[r]))&&(t+=n+` `);return t.slice(0,-1)}if(_(e)){for(var a in e)e[a]&&(t+=a+` `);return t.slice(0,-1)}return t}var dn={svg:`http://www.w3.org/2000/svg`,math:`http://www.w3.org/1998/Math/MathML`},fn=n(`html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template`),pn=n(`area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr`,!0),mn=n(`colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source`,!0),hn=n(`address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track`,!0),gn=n(`svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view`,!0),_n=function(e){return e===`pre`},vn=function(e){return fn(e)||gn(e)};function yn(e){if(gn(e))return`svg`;if(e===`math`)return`math`}var bn=Object.create(null);function xn(e){if(!A)return!0;if(vn(e))return!1;if(e=e.toLowerCase(),bn[e]!=null)return bn[e];var t=document.createElement(e);return e.indexOf(`-`)>-1?bn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:bn[e]=/HTMLUnknownElement/.test(t.toString())}function Sn(e){if(typeof e==`string`){var t=e;if(e=document.querySelector(e),!e)return G(`Cannot find element: `+t),document.createElement(`div`)}return e}function Cn(e){return document.createElement(e)}function wn(e,t){return document.createElementNS(dn[e],t)}function Tn(e){return document.createTextNode(e)}function En(e){return document.createComment(e)}function Dn(e,t,n){e.insertBefore(t,n)}function On(e,t){e.removeChild(t)}function kn(e,t){e.appendChild(t)}function An(e){return e.parentNode}function jn(e){return e.nextSibling}function Mn(e){return e.tagName}function Nn(e,t){e.textContent=t}function Pn(e){return e.childNodes}function Fn(e,t,n){e.setAttribute(t,n)}var In=Object.freeze({createElement:Cn,createElementNS:wn,createTextNode:Tn,createComment:En,insertBefore:Dn,removeChild:On,appendChild:kn,parentNode:An,nextSibling:jn,tagName:Mn,setTextContent:Nn,childNodes:Pn,setAttribute:Fn}),Ln={create:function(e,t){Rn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Rn(e,!0),Rn(t))},destroy:function(e){Rn(e,!0)}};function Rn(e,t){var n=e.data.ref;if(n){var r=e.context,a=e.child||e.elm,o=r.$refs;t?Array.isArray(o[n])?i(o[n],a):o[n]===a&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].push(a):o[n]=[a]:o[n]=a}}var zn=new B(``,{},[]),Bn=[`create`,`update`,`postpatch`,`remove`,`destroy`];function Vn(e){return e==null}function J(e){return e!=null}function Hn(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function Un(e,t,n){var r,i,a={};for(r=t;r<=n;++r)i=e[r].key,J(i)&&(a[i]=r);return a}function Wn(t){var n,r,i={},a=t.modules,o=t.nodeOps;for(n=0;n<Bn.length;++n)for(i[Bn[n]]=[],r=0;r<a.length;++r)a[r][Bn[n]]!==void 0&&i[Bn[n]].push(a[r][Bn[n]]);function c(e){return new B(o.tagName(e).toLowerCase(),{},[],void 0,e)}function l(e,t){function n(){--n.listeners===0&&u(e)}return n.listeners=t,n}function u(e){var t=o.parentNode(e);o.removeChild(t,e)}function d(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,J(i)&&(J(r=i.hook)&&J(r=r.init)&&r(e),J(r=e.child)))return h(e,t),e.elm;var a=e.children,s=e.tag;return J(s)?(!e.ns&&!(D.ignoredElements&&D.ignoredElements.indexOf(s)>-1)&&D.isUnknownElement(s)&&G(`Unknown custom element: <`+s+`> - did you register the component correctly? For recursive components, make sure to provide the "name" option.`,e.context),e.elm=e.ns?o.createElementNS(e.ns,s):o.createElement(s),g(e),f(e,a,t),J(i)&&m(e,t)):e.isComment?e.elm=o.createComment(e.text):e.elm=o.createTextNode(e.text),e.elm}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)o.appendChild(e.elm,d(t[r],n,!0));else s(e.text)&&o.appendChild(e.elm,o.createTextNode(e.text))}function p(e){for(;e.child;)e=e.child._vnode;return J(e.tag)}function m(e,t){for(var r=0;r<i.create.length;++r)i.create[r](zn,e);n=e.data.hook,J(n)&&(n.create&&n.create(zn,e),n.insert&&t.push(e))}function h(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,p(e)?(m(e,t),g(e)):(Rn(e),t.push(e))}function g(e){var t;J(t=e.context)&&J(t=t.$options._scopeId)&&o.setAttribute(e.elm,t,``),J(t=H)&&t!==e.context&&J(t=t.$options._scopeId)&&o.setAttribute(e.elm,t,``)}function _(e,t,n,r,i,a){for(;r<=i;++r)o.insertBefore(e,d(n[r],a),t)}function v(e){var t,n,r=e.data;if(J(r))for(J(t=r.hook)&&J(t=t.destroy)&&t(e),t=0;t<i.destroy.length;++t)i.destroy[t](e);if(J(t=e.child)&&!r.keepAlive&&v(t._vnode),J(t=e.children))for(n=0;n<e.children.length;++n)v(e.children[n])}function y(e,t,n,r){for(;n<=r;++n){var i=t[n];J(i)&&(J(i.tag)?(b(i),v(i)):o.removeChild(e,i.elm))}}function b(e,t){if(t||J(e.data)){var r=i.remove.length+1;for(t?t.listeners+=r:t=l(e.elm,r),J(n=e.child)&&J(n=n._vnode)&&J(n.data)&&b(n,t),n=0;n<i.remove.length;++n)i.remove[n](e,t);J(n=e.data.hook)&&J(n=n.remove)?n(e,t):t()}else u(e.elm)}function x(e,t,n,r,i){for(var a=0,s=0,c=t.length-1,l=t[0],u=t[c],f=n.length-1,p=n[0],m=n[f],h,g,v,b,x=!i;a<=c&&s<=f;)Vn(l)?l=t[++a]:Vn(u)?u=t[--c]:Hn(l,p)?(S(l,p,r),l=t[++a],p=n[++s]):Hn(u,m)?(S(u,m,r),u=t[--c],m=n[--f]):Hn(l,m)?(S(l,m,r),x&&o.insertBefore(e,l.elm,o.nextSibling(u.elm)),l=t[++a],m=n[--f]):Hn(u,p)?(S(u,p,r),x&&o.insertBefore(e,u.elm,l.elm),u=t[--c],p=n[++s]):(Vn(h)&&(h=Un(t,a,c)),g=J(p.key)?h[p.key]:null,Vn(g)?(o.insertBefore(e,d(p,r),l.elm),p=n[++s]):(v=t[g],v||G(`It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key.`),v.tag===p.tag?(S(v,p,r),t[g]=void 0,x&&o.insertBefore(e,p.elm,l.elm),p=n[++s]):(o.insertBefore(e,d(p,r),l.elm),p=n[++s])));a>c?(b=Vn(n[f+1])?null:n[f+1].elm,_(e,b,n,s,f,r)):s>f&&y(e,t,a,c)}function S(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&t.isCloned){t.elm=e.elm;return}var a,s,c=J(a=t.data);c&&J(s=a.hook)&&J(a=s.prepatch)&&a(e,t);var l=t.elm=e.elm,u=e.children,d=t.children;if(c&&p(t)){for(a=0;a<i.update.length;++a)i.update[a](e,t);J(s)&&J(a=s.update)&&a(e,t)}if(Vn(t.text)?J(u)&&J(d)?u!==d&&x(l,u,d,n,r):J(d)?(J(e.text)&&o.setTextContent(l,``),_(l,null,d,0,d.length-1,n)):J(u)?y(l,u,0,u.length-1):J(e.text)&&o.setTextContent(l,``):e.text!==t.text&&o.setTextContent(l,t.text),c){for(a=0;a<i.postpatch.length;++a)i.postpatch[a](e,t);J(s)&&J(a=s.postpatch)&&a(e,t)}}}function C(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var w=!1;function T(e,t,r){if(!E(e,t))return!1;t.elm=e;var i=t.tag,a=t.data,s=t.children;if(J(a)&&(J(n=a.hook)&&J(n=n.init)&&n(t,!0),J(n=t.child)))return h(t,r),!0;if(J(i)){if(J(s)){var c=o.childNodes(e);if(!c.length)f(t,s,r);else{var l=!0;if(c.length!==s.length)l=!1;else for(var u=0;u<s.length;u++)if(!T(c[u],s[u],r)){l=!1;break}if(!l)return typeof console<`u`&&!w&&(w=!0,console.warn(`Parent: `,e),console.warn(`Mismatching childNodes vs. VNodes: `,c,s)),!1}}J(a)&&m(t,r)}return!0}function E(t,n){return n.tag?n.tag.indexOf(`vue-component`)===0||n.tag===o.tagName(t).toLowerCase():e(n.text)===t.data}return function(e,t,n,r){var a,s,l=!1,u=[];if(!e)l=!0,d(t,u);else{var f=J(e.nodeType);if(!f&&Hn(e,t))S(e,t,u,r);else{if(f){if(e.nodeType===1&&e.hasAttribute(`server-rendered`)&&(e.removeAttribute(`server-rendered`),n=!0),n){if(T(e,t,u))return C(t,u,!0),e;G(`The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.`)}e=c(e)}if(a=e.elm,s=o.parentNode(a),d(t,u),t.parent&&(t.parent.elm=t.elm,p(t)))for(var m=0;m<i.create.length;++m)i.create[m](zn,t.parent);s===null?J(e.tag)&&v(e):(o.insertBefore(s,t.elm,o.nextSibling(a)),y(s,[e],0,0))}}return C(t,u,l),t.elm}}var Gn={create:function(e,t){var n=!1;qn(e,t,function(r,i){Yn(r,i,`bind`,t,e),r.inserted&&(n=!0)}),n&&V(t.data.hook||(t.data.hook={}),`insert`,function(){Jn(e,t,`inserted`)})},update:function(e,t){Jn(e,t,`update`),e.data.directives&&!t.data.directives&&Jn(e,e,`unbind`)},postpatch:function(e,t){Jn(e,t,`componentUpdated`)},destroy:function(e){Jn(e,e,`unbind`)}},Kn=Object.create(null);function qn(e,t,n){var r=t.data.directives;if(r)for(var i=0;i<r.length;i++){var a=r[i],o=zt(t.context.$options,`directives`,a.name,!0);if(o){var s=e&&e.data.directives;s&&(a.oldValue=s[i].value),a.modifiers||=Kn,n(o,a)}}}function Jn(e,t,n){qn(e,t,function(r,i){Yn(r,i,n,t,e)})}function Yn(e,t,n,r,i){var a=e&&e[n];a&&a(r.elm,t,r,i)}var Xn=[Ln,Gn];function Zn(e,t){if(!(!e.data.attrs&&!t.data.attrs)){var n,r,i,a=t.elm,o=e.data.attrs||{},s=t.data.attrs||{};for(n in s.__ob__&&(s=t.data.attrs=g({},s)),s)r=s[n],i=o[n],i!==r&&Qn(a,n,r);for(n in o)s[n]??(nn(n)?a.removeAttributeNS(tn,rn(n)):$t(n)||a.removeAttribute(n))}}function Qn(e,t,n){en(t)?an(n)?e.removeAttribute(t):e.setAttribute(t,t):$t(t)?e.setAttribute(t,an(n)||n===`false`?`false`:`true`):nn(t)?an(n)?e.removeAttributeNS(tn,rn(t)):e.setAttributeNS(tn,t,n):an(n)?e.removeAttribute(t):e.setAttribute(t,n)}var $n={create:Zn,update:Zn};function er(e,t){var n=t.elm,r=t.data,i=e.data;if(!(!r.staticClass&&!r.class&&(!i||!i.staticClass&&!i.class))){var a=on(t),o=n._transitionClasses;o&&(a=ln(a,un(o))),a!==n._prevClass&&(n.setAttribute(`class`,a),n._prevClass=a)}}var tr={create:er,update:er};function nr(e,t){!e.data.on&&!t.data.on||tt(t.data.on||{},e.data.on||{},t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)}))}var rr={create:nr,update:nr};function ir(e,t){if(!(!e.data.domProps&&!t.data.domProps)){var n,r,i=t.elm,a=e.data.domProps||{},o=t.data.domProps||{};for(n in o.__ob__&&(o=t.data.domProps=g({},o)),a)o[n]??(i[n]=void 0);for(n in o)if((n===`textContent`||n===`innerHTML`)&&t.children&&(t.children.length=0),r=o[n],n===`value`){i._value=r;var s=r==null?``:String(r);i.value!==s&&(i.value=s)}else i[n]=r}}var ar={create:ir,update:ir},or=[`Webkit`,`Moz`,`ms`],sr,cr=c(function(e){if(sr||=document.createElement(`div`),e=u(e),e!==`filter`&&e in sr.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<or.length;n++){var r=or[n]+t;if(r in sr.style)return r}});function lr(e,t){if(!((!e.data||!e.data.style)&&!t.data.style)){var n,r,i=t.elm,a=e.data.style||{},o=t.data.style||{};if(typeof o==`string`){i.style.cssText=o;return}var s=o.__ob__;for(r in Array.isArray(o)&&(o=t.data.style=x(o)),s&&(o=t.data.style=g({},o)),a)o[r]||(i.style[cr(r)]=``);for(r in o)n=o[r],n!==a[r]&&(i.style[cr(r)]=n??``)}}var ur={create:lr,update:lr};function dr(e,t){if(e.classList)t.indexOf(` `)>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=` `+e.getAttribute(`class`)+` `;n.indexOf(` `+t+` `)<0&&e.setAttribute(`class`,(n+t).trim())}}function fr(e,t){if(e.classList)t.indexOf(` `)>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=` `+e.getAttribute(`class`)+` `,r=` `+t+` `;n.indexOf(r)>=0;)n=n.replace(r,` `);e.setAttribute(`class`,n.trim())}}var pr=A&&!N,mr=`transition`,hr=`animation`,gr=`transition`,_r=`transitionend`,vr=`animation`,yr=`animationend`;pr&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(gr=`WebkitTransition`,_r=`webkitTransitionEnd`),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(vr=`WebkitAnimation`,yr=`webkitAnimationEnd`));var br=A&&window.requestAnimationFrame||setTimeout;function xr(e){br(function(){br(e)})}function Sr(e,t){(e._transitionClasses||=[]).push(t),dr(e,t)}function Y(e,t){e._transitionClasses&&i(e._transitionClasses,t),fr(e,t)}function Cr(e,t,n){var r=Tr(e,t),i=r.type,a=r.timeout,o=r.propCount;if(!i)return n();var s=i===mr?_r:yr,c=0,l=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=o&&l()};setTimeout(function(){c<o&&l()},a+1),e.addEventListener(s,u)}var wr=/\b(transform|all)(,|$)/;function Tr(e,t){var n=window.getComputedStyle(e),r=n[gr+`Delay`].split(`, `),i=n[gr+`Duration`].split(`, `),a=Er(r,i),o=n[vr+`Delay`].split(`, `),s=n[vr+`Duration`].split(`, `),c=Er(o,s),l,u=0,d=0;t===mr?a>0&&(l=mr,u=a,d=i.length):t===hr?c>0&&(l=hr,u=c,d=s.length):(u=Math.max(a,c),l=u>0?a>c?mr:hr:null,d=l?l===mr?i.length:s.length:0);var f=l===mr&&wr.test(n[gr+`Property`]);return{type:l,timeout:u,propCount:d,hasTransform:f}}function Er(e,t){return Math.max.apply(null,t.map(function(t,n){return Dr(t)+Dr(e[n])}))}function Dr(e){return Number(e.slice(0,-1))*1e3}function Or(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Ar(e.data.transition);if(n&&!(t._enterCb||t.nodeType!==1)){var r=n.css,i=n.type,a=n.enterClass,o=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,l=n.beforeEnter,u=n.enter,d=n.afterEnter,f=n.enterCancelled,p=n.beforeAppear,m=n.appear,h=n.afterAppear,g=n.appearCancelled,_=H.$vnode,v=!(_&&_.parent?_.parent.context:H)._isMounted||!e.isRootInsert;if(!(v&&!m&&m!==``)){var y=v?s:a,b=v?c:o,x=v&&p||l,S=v&&typeof m==`function`?m:u,C=v&&h||d,w=v&&g||f,T=r!==!1&&!N,E=S&&(S._length||S.length)>1,D=t._enterCb=Mr(function(){T&&Y(t,b),D.cancelled?(T&&Y(t,y),w&&w(t)):C&&C(t),t._enterCb=null});e.data.show||V(e.data.hook||(e.data.hook={}),`insert`,function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),S&&S(t,D)}),x&&x(t),T&&(Sr(t,y),Sr(t,b),xr(function(){Y(t,y),!D.cancelled&&!E&&Cr(t,i,D)})),e.data.show&&S&&S(t,D),!T&&!E&&D()}}}function kr(e,t){var n=e.elm;n._enterCb&&(n._enterCb.cancelled=!0,n._enterCb());var r=Ar(e.data.transition);if(!r)return t();if(n._leaveCb||n.nodeType!==1)return;var i=r.css,a=r.type,o=r.leaveClass,s=r.leaveActiveClass,c=r.beforeLeave,l=r.leave,u=r.afterLeave,d=r.leaveCancelled,f=r.delayLeave,p=i!==!1&&!N,m=l&&(l._length||l.length)>1,h=n._leaveCb=Mr(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),p&&Y(n,s),h.cancelled?(p&&Y(n,o),d&&d(n)):(t(),u&&u(n)),n._leaveCb=null});f?f(g):g();function g(){h.cancelled||(e.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),c&&c(n),p&&(Sr(n,o),Sr(n,s),xr(function(){Y(n,o),!h.cancelled&&!m&&Cr(n,a,h)})),l&&l(n,h),!p&&!m&&h())}}function Ar(e){if(e){if(typeof e==`object`){var t={};return e.css!==!1&&g(t,jr(e.name||`v`)),g(t,e),t}else if(typeof e==`string`)return jr(e)}}var jr=c(function(e){return{enterClass:e+`-enter`,leaveClass:e+`-leave`,appearClass:e+`-enter`,enterActiveClass:e+`-enter-active`,leaveActiveClass:e+`-leave-active`,appearActiveClass:e+`-enter-active`}});function Mr(e){var t=!1;return function(){t||(t=!0,e())}}var Nr=Wn({nodeOps:In,modules:[$n,tr,rr,ar,ur,A?{create:function(e,t){t.data.show||Or(t)},remove:function(e,t){e.data.show?t():kr(e,t)}}:{}].concat(Xn)}),Pr=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;N&&document.addEventListener(`selectionchange`,function(){var e=document.activeElement;e&&e.vmodel&&Vr(e,`input`)});var Fr={bind:function(e,t,n){if(Pr.test(n.tag)||G(`v-model is not supported on element type: <`+n.tag+`>. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.`,n.context),n.tag===`select`){if(Ir(e,t,n.context),M||re){var r=function(){Ir(e,t,n.context)};oe(r),setTimeout(r,0)}}else (n.tag===`textarea`||e.type===`text`)&&(P||(e.addEventListener(`compositionstart`,zr),e.addEventListener(`compositionend`,Br)),N&&(e.vmodel=!0))},componentUpdated:function(e,t,n){n.tag===`select`&&(Ir(e,t,n.context),(e.multiple?t.value.some(function(t){return Lr(t,e.options)}):Lr(t.value,e.options))&&Vr(e,`change`))}};function Ir(e,t,n){var r=t.value,i=e.multiple;if(i&&!Array.isArray(r)){G(`<select multiple v-model="`+t.expression+`"> expects an Array value for its binding, but got `+Object.prototype.toString.call(r).slice(8,-1),n);return}for(var a,o,s=0,c=e.options.length;s<c;s++)if(o=e.options[s],i)a=E(r,Rr(o))>-1,o.selected!==a&&(o.selected=a);else if(T(Rr(o),r)){e.selectedIndex!==s&&(e.selectedIndex=s);return}i||(e.selectedIndex=-1)}function Lr(e,t){for(var n=0,r=t.length;n<r;n++)if(T(Rr(t[n]),e))return!1;return!0}function Rr(e){return`_value`in e?e._value:e.value}function zr(e){e.target.composing=!0}function Br(e){e.target.composing=!1,Vr(e.target,`input`)}function Vr(e,t){var n=document.createEvent(`HTMLEvents`);n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Hr(e){return e.child&&(!e.data||!e.data.transition)?Hr(e.child._vnode):e}var Ur={model:Fr,show:{bind:function(e,t,n){var r=t.value;n=Hr(n);var i=n.data&&n.data.transition;r&&i&&!N&&Or(n);var a=e.style.display===`none`?``:e.style.display;e.style.display=r?a:`none`,e.__vOriginalDisplay=a},update:function(e,t,n){var r=t.value;r!==t.oldValue&&(n=Hr(n),n.data&&n.data.transition&&!N?r?(Or(n),e.style.display=e.__vOriginalDisplay):kr(n,function(){e.style.display=`none`}):e.style.display=r?e.__vOriginalDisplay:`none`)}}},Wr={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String};function Gr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Gr(et(t.children)):e}function Kr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var a in i)t[u(a)]=i[a].fn;return t}function qr(e,t){return/\d-keep-alive$/.test(t.tag)?e(`keep-alive`):null}function Jr(e){for(;e=e.parent;)if(e.data.transition)return!0}var Yr={name:`transition`,props:Wr,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){n.length>1&&G(`<transition> can only be used on a single element. Use <transition-group> for lists.`,this.$parent);var r=this.mode;r&&r!==`in-out`&&r!==`out-in`&&G(`invalid <transition> mode: `+r,this.$parent);var i=n[0];if(Jr(this.$vnode))return i;var a=Gr(i);if(!a)return i;if(this._leaving)return qr(e,i);a.key=a.key==null||a.isStatic?`__v`+(a.tag+this._uid)+`__`:a.key;var o=(a.data||={}).transition=Kr(this),s=this._vnode,c=Gr(s);if(a.data.directives&&a.data.directives.some(function(e){return e.name===`show`})&&(a.data.show=!0),c&&c.data&&c.key!==a.key){var l=c.data.transition=g({},o);if(r===`out-in`)return this._leaving=!0,V(l,`afterLeave`,function(){t._leaving=!1,t.$forceUpdate()}),qr(e,i);if(r===`in-out`){var u,d=function(){u()};V(o,`afterEnter`,d),V(o,`enterCancelled`,d),V(l,`delayLeave`,function(e){u=e})}}return i}}},Xr=g({tag:String,moveClass:String},Wr);delete Xr.mode;var Zr={props:Xr,render:function(e){for(var t=this.tag||this.$vnode.data.tag||`span`,n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],a=this.children=[],o=Kr(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(c.key!=null&&String(c.key).indexOf(`__vlist`)!==0)a.push(c),n[c.key]=c,(c.data||={}).transition=o;else{var l=c.componentOptions,u=l?l.Ctor.options.name||l.tag:c.tag;G(`<transition-group> children must be keyed: <`+u+`>`)}}if(r){for(var d=[],f=[],p=0;p<r.length;p++){var m=r[p];m.data.transition=o,m.data.pos=m.elm.getBoundingClientRect(),n[m.key]?d.push(m):f.push(m)}this.kept=e(t,null,d),this.removed=f}return e(t,null,a)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||this.name+`-move`;!e.length||!this.hasMove(e[0].elm,t)||(e.forEach(Qr),e.forEach($r),e.forEach(ei),document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Sr(n,t),r.transform=r.WebkitTransform=r.transitionDuration=``,n.addEventListener(_r,n._moveCb=function e(r){(!r||/transform$/.test(r.propertyName))&&(n.removeEventListener(_r,e),n._moveCb=null,Y(n,t))})}}))},methods:{hasMove:function(e,t){if(!pr)return!1;if(this._hasMove!=null)return this._hasMove;Sr(e,t);var n=Tr(e);return Y(e,t),this._hasMove=n.hasTransform}}};function Qr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function $r(e){e.data.newPos=e.elm.getBoundingClientRect()}function ei(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var a=e.elm.style;a.transform=a.WebkitTransform=`translate(`+r+`px,`+i+`px)`,a.transitionDuration=`0s`}}var ti={Transition:Yr,TransitionGroup:Zr};W.config.isUnknownElement=xn,W.config.isReservedTag=vn,W.config.getTagNamespace=yn,W.config.mustUseProp=Qt,g(W.options.directives,Ur),g(W.options.components,ti),W.prototype.__patch__=D._isServer?S:Nr,W.prototype.$mount=function(e,t){return e=e&&!D._isServer?Sn(e):void 0,this._mount(e,t)},setTimeout(function(){D.devtools&&(F?F.emit(`init`,W):A&&/Chrome\/\d+/.test(window.navigator.userAgent)&&console.log(`Download the Vue Devtools for a better development experience:
https://github.com/vuejs/vue-devtools`))},0);function ni(e,t){var n=document.createElement(`div`);return n.innerHTML=`<div a="`+e+`">`,n.innerHTML.indexOf(t)>0}var ri=A?ni(`>`,`&gt;`):!1,ii=A?ni(`
`,`&#10;`):!1,ai=document.createElement(`div`);function oi(e){return ai.innerHTML=e,ai.textContent}var si=RegExp(`^\\s*([^\\s"'<>\\/=]+)(?:\\s*((?:=))\\s*(?:`+[`"([^"]*)"+`,`'([^']*)'+`,`([^\\s"'=<>\`]+)`].join(`|`)+`))?`),ci=`[a-zA-Z_][\\w\\-\\.]*`,li=`((?:`+ci+`\\:)?`+ci+`)`,ui=RegExp(`^<`+li),di=/^\s*(\/?)>/,fi=RegExp(`^<\\/`+li+`[^>]*>`),pi=/^<!DOCTYPE [^>]+>/i,mi=!1;`x`.replace(/x(.)?/g,function(e,t){mi=t===``});var hi=n(`script,style`,!0),gi={},_i=/&lt;/g,vi=/&gt;/g,yi=/&#10;/g,bi=/&amp;/g,xi=/&quot;/g;function Si(e,t,n){return t&&(e=e.replace(_i,`<`).replace(vi,`>`)),n&&(e=e.replace(yi,`
`)),e.replace(bi,`&`).replace(xi,`"`)}function Ci(e,t){for(var n=[],r=t.expectHTML,i=t.isUnaryTag||C,a=t.isFromDOM,o=0,s,c;e;){if(s=e,!c||!hi(c)){var l=e.indexOf(`<`);if(l===0){if(/^<!--/.test(e)){var u=e.indexOf(`-->`);if(u>=0){x(u+3);continue}}if(/^<!\[/.test(e)){var d=e.indexOf(`]>`);if(d>=0){x(d+2);continue}}var f=e.match(pi);if(f){x(f[0].length);continue}var p=e.match(fi);if(p){var m=o;x(p[0].length),T(p[0],p[1],m,o);continue}var h=S();if(h){w(h);continue}}var g=void 0;l>=0?(g=e.substring(0,l),x(l)):(g=e,e=``),t.chars&&t.chars(g)}else{var _=c.toLowerCase(),v=gi[_]||(gi[_]=RegExp(`([\\s\\S]*?)(</`+_+`[^>]*>)`,`i`)),y=0,b=e.replace(v,function(e,n,r){return y=r.length,_!==`script`&&_!==`style`&&_!==`noscript`&&(n=n.replace(/<!--([\s\S]*?)-->/g,`$1`).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,`$1`)),t.chars&&t.chars(n),``});o+=e.length-b.length,e=b,T(`</`+_+`>`,_,o-y,o)}if(e===s)throw Error(`Error parsing template:

`+e)}T();function x(t){o+=t,e=e.substring(t)}function S(){var t=e.match(ui);if(t){var n={tagName:t[1],attrs:[],start:o};x(t[0].length);for(var r,i;!(r=e.match(di))&&(i=e.match(si));)x(i[0].length),n.attrs.push(i);if(r)return n.unarySlash=r[1],x(r[0].length),n.end=o,n}}function w(e){var o=e.tagName,s=e.unarySlash;r&&(c===`p`&&hn(o)&&T(``,c),mn(o)&&c===o&&T(``,o));for(var l=i(o)||o===`html`&&c===`head`||!!s,u=e.attrs.length,d=Array(u),f=0;f<u;f++){var p=e.attrs[f];mi&&p[0].indexOf(`""`)===-1&&(p[3]===``&&delete p[3],p[4]===``&&delete p[4],p[5]===``&&delete p[5]);var m=p[3]||p[4]||p[5]||``;d[f]={name:p[1],value:a?Si(m,t.shouldDecodeTags,t.shouldDecodeNewlines):m}}l||(n.push({tag:o,attrs:d}),c=o,s=``),t.start&&t.start(o,d,l,e.start,e.end)}function T(e,r,i,a){var s;if(i??=o,a??=o,r){var l=r.toLowerCase();for(s=n.length-1;s>=0&&n[s].tag.toLowerCase()!==l;s--);}else s=0;if(s>=0){for(var u=n.length-1;u>=s;u--)t.end&&t.end(n[u].tag,i,a);n.length=s,c=s&&n[s-1].tag}else r.toLowerCase()===`br`?t.start&&t.start(r,[],!0,i,a):r.toLowerCase()===`p`&&(t.start&&t.start(r,[],!1,i,a),t.end&&t.end(r,i,a))}}function wi(e){var t=!1,n=!1,r=0,i=0,a=0,o=0,s,c,l,u,d;for(l=0;l<e.length;l++)if(c=s,s=e.charCodeAt(l),t)s===39&&c!==92&&(t=!t);else if(n)s===34&&c!==92&&(n=!n);else if(s===124&&e.charCodeAt(l+1)!==124&&e.charCodeAt(l-1)!==124&&!r&&!i&&!a)u===void 0?(o=l+1,u=e.slice(0,l).trim()):f();else switch(s){case 34:n=!0;break;case 39:t=!0;break;case 40:a++;break;case 41:a--;break;case 91:i++;break;case 93:i--;break;case 123:r++;break;case 125:r--;break}u===void 0?u=e.slice(0,l).trim():o!==0&&f();function f(){(d||=[]).push(e.slice(o,l).trim()),o=l+1}if(d)for(l=0;l<d.length;l++)u=Ti(u,d[l]);return u}function Ti(e,t){var n=t.indexOf(`(`);if(n<0)return`_f("`+t+`")(`+e+`)`;var r=t.slice(0,n),i=t.slice(n+1);return`_f("`+r+`")(`+e+`,`+i}var Ei=/\{\{((?:.|\n)+?)\}\}/g,Di=/[-.*+?^${}()|[\]\/\\]/g,Oi=c(function(e){var t=e[0].replace(Di,`\\$&`),n=e[1].replace(Di,`\\$&`);return RegExp(t+`((?:.|\\n)+?)`+n,`g`)});function ki(e,t){var n=t?Oi(t):Ei;if(n.test(e)){for(var r=[],i=n.lastIndex=0,a,o;a=n.exec(e);){o=a.index,o>i&&r.push(JSON.stringify(e.slice(i,o)));var s=wi(a[1].trim());r.push(`_s(`+s+`)`),i=o+a[0].length}return i<e.length&&r.push(JSON.stringify(e.slice(i))),r.join(`+`)}}function Ai(e){console.error(`[Vue parser]: `+e)}function ji(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Mi(e,t,n){(e.props||=[]).push({name:t,value:n})}function Ni(e,t,n){(e.attrs||=[]).push({name:t,value:n})}function Pi(e,t,n,r,i){(e.directives||=[]).push({name:t,value:n,arg:r,modifiers:i})}function Fi(e,t,n,r,i){r&&r.capture&&(delete r.capture,t=`!`+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||={}):a=e.events||={};var o={value:n,modifiers:r},s=a[t];Array.isArray(s)?i?s.unshift(o):s.push(o):s?a[t]=i?[o,s]:[s,o]:a[t]=o}function X(e,t,n){var r=Z(e,`:`+t)||Z(e,`v-bind:`+t);if(r!=null)return r;if(n!==!1){var i=Z(e,t);if(i!=null)return JSON.stringify(i)}}function Z(e,t){var n;if((n=e.attrsMap[t])!=null){for(var r=e.attrsList,i=0,a=r.length;i<a;i++)if(r[i].name===t){r.splice(i,1);break}}return n}var Ii=/^v-|^@|^:/,Li=/(.*)\s+(?:in|of)\s+(.*)/,Ri=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/,zi=/^:|^v-bind:/,Bi=/^@|^v-on:/,Vi=/:(.*)$/,Hi=/\.[^\.]+/g,Ui=c(oi),Q,Wi,Gi,Ki,qi,Ji,Yi,Xi;function Zi(e,t){Q=t.warn||Ai,Wi=t.getTagNamespace||C,Gi=t.mustUseProp||C,Ki=t.isPreTag||C,qi=ji(t.modules,`preTransformNode`),Ji=ji(t.modules,`transformNode`),Yi=ji(t.modules,`postTransformNode`),Xi=t.delimiters;var n=[],r=t.preserveWhitespace!==!1,i,a,o=!1,s=!1,c=!1;return Ci(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,isFromDOM:t.isFromDOM,shouldDecodeTags:t.shouldDecodeTags,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(r,l,u){var d=a&&a.ns||Wi(r);t.isIE&&d===`svg`&&(l=ga(l));var f={type:1,tag:r,attrsList:l,attrsMap:da(l),parent:a,children:[]};d&&(f.ns=d),pa(f)&&(f.forbidden=!0,Q(`Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <`+r+`>.`));for(var p=0;p<qi.length;p++)qi[p](f,t);if(o||(Qi(f),f.pre&&(o=!0)),Ki(f.tag)&&(s=!0),o)$i(f);else{na(f),ra(f),aa(f),ea(f),f.plain=!f.key&&!l.length,ta(f),oa(f),sa(f);for(var m=0;m<Ji.length;m++)Ji[m](f,t);ca(f)}function h(t){(t.tag===`slot`||t.tag===`template`)&&Q(`Cannot use <`+t.tag+`> as component root element because it may contain multiple nodes:
`+e),t.attrsMap.hasOwnProperty(`v-for`)&&Q(`Cannot use v-for on stateful component root element because it renders multiple elements:
`+e)}i?!n.length&&!c&&(i.attrsMap.hasOwnProperty(`v-if`)&&f.attrsMap.hasOwnProperty(`v-else`)?h(f):(c=!0,Q(`Component template should contain exactly one root element:

`+e))):(i=f,h(i)),a&&!f.forbidden&&(f.else?ia(f,a):(a.children.push(f),f.parent=a)),u||(a=f,n.push(f));for(var g=0;g<Yi.length;g++)Yi[g](f,t)},end:function(){var e=n[n.length-1],t=e.children[e.children.length-1];t&&t.type===3&&t.text===` `&&e.children.pop(),--n.length,a=n[n.length-1],e.pre&&(o=!1),Ki(e.tag)&&(s=!1)},chars:function(t){if(!a){c||(c=!0,Q(`Component template should contain exactly one root element:

`+e));return}if(t=s||t.trim()?Ui(t):r&&a.children.length?` `:``,t){var n;!o&&t!==` `&&(n=ki(t,Xi))?a.children.push({type:2,expression:n,text:t}):a.children.push({type:3,text:t})}}}),i}function Qi(e){Z(e,`v-pre`)!=null&&(e.pre=!0)}function $i(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function ea(e){var t=X(e,`key`);t&&(e.tag===`template`&&Q(`<template> cannot be keyed. Place the key on real elements instead.`),e.key=t)}function ta(e){var t=X(e,`ref`);t&&(e.ref=t,e.refInFor=la(e))}function na(e){var t;if(t=Z(e,`v-for`)){var n=t.match(Li);if(!n){Q(`Invalid v-for expression: `+t);return}e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ri);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function ra(e){var t=Z(e,`v-if`);t&&(e.if=t),Z(e,`v-else`)!=null&&(e.else=!0)}function ia(e,t){var n=fa(t.children);n&&n.if?n.elseBlock=e:Q(`v-else used on element <`+e.tag+`> without corresponding v-if.`)}function aa(e){Z(e,`v-once`)!=null&&(e.once=!0)}function oa(e){if(e.tag===`slot`)e.slotName=X(e,`name`);else{var t=X(e,`slot`);t&&(e.slotTarget=t)}}function sa(e){var t;(t=X(e,`is`))&&(e.component=t),Z(e,`inline-template`)!=null&&(e.inlineTemplate=!0)}function ca(e){var t=e.attrsList,n,r,i,a,o,s,c;for(n=0,r=t.length;n<r;n++)if(i=t[n].name,a=t[n].value,Ii.test(i))if(e.hasBindings=!0,s=ua(i),s&&(i=i.replace(Hi,``)),zi.test(i))i=i.replace(zi,``),s&&s.prop&&(c=!0,i=u(i),i===`innerHtml`&&(i=`innerHTML`)),c||Gi(i)?Mi(e,i,a):Ni(e,i,a);else if(Bi.test(i))i=i.replace(Bi,``),Fi(e,i,a,s);else{i=i.replace(Ii,``);var l=i.match(Vi);l&&(o=l[1])&&(i=i.slice(0,-(o.length+1))),Pi(e,i,a,o,s)}else ki(a,Xi)&&Q(i+`="`+a+`": Interpolation inside attributes has been deprecated. Use v-bind or the colon shorthand instead.`),Ni(e,i,JSON.stringify(a))}function la(e){for(var t=e;t;){if(t.for!==void 0)return!0;t=t.parent}return!1}function ua(e){var t=e.match(Hi);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function da(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]&&Q(`duplicate attribute: `+e[n].name),t[e[n].name]=e[n].value;return t}function fa(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function pa(e){return e.tag===`style`||e.tag===`script`&&(!e.attrsMap.type||e.attrsMap.type===`text/javascript`)}var ma=/^xmlns:NS\d+/,ha=/^NS\d+:/;function ga(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ma.test(r.name)||(r.name=r.name.replace(ha,``),t.push(r))}return t}var _a,va,ya=c(xa);function ba(e,t){e&&(_a=ya(t.staticKeys||``),va=t.isReservedTag||(function(){return!1}),Sa(e),Ca(e,!1))}function xa(e){return n(`type,tag,attrsList,attrsMap,plain,parent,children,attrs`+(e?`,`+e:``))}function Sa(e){if(e.static=wa(e),e.type===1)for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Sa(r),r.static||(e.static=!1)}}function Ca(e,t){if(e.type===1){if(e.once||e.static){e.staticRoot=!0,e.staticInFor=t;return}if(e.children)for(var n=0,r=e.children.length;n<r;n++)Ca(e.children[n],!!e.for)}}function wa(e){return e.type===2?!1:e.type===3?!0:!!(e.pre||!e.hasBindings&&!e.if&&!e.for&&!r(e.tag)&&va(e.tag)&&Object.keys(e).every(_a))}var Ta=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,Ea={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Da={stop:`$event.stopPropagation();`,prevent:`$event.preventDefault();`,self:`if($event.target !== $event.currentTarget)return;`};function Oa(e,t){var n=t?`nativeOn:{`:`on:{`;for(var r in e)n+=`"`+r+`":`+ka(e[r])+`,`;return n.slice(0,-1)+`}`}function ka(e){if(!e)return`function(){}`;if(Array.isArray(e))return`[`+e.map(ka).join(`,`)+`]`;if(e.modifiers){var t=``,n=[];for(var r in e.modifiers)Da[r]?t+=Da[r]:n.push(r);n.length&&(t=Aa(n)+t);var i=Ta.test(e.value)?e.value+`($event)`:e.value;return`function($event){`+t+i+`}`}else return Ta.test(e.value)?e.value:`function($event){`+e.value+`}`}function Aa(e){var t=e.length===1?ja(e[0]):Array.prototype.concat.apply([],e.map(ja));return Array.isArray(t)?`if(`+t.map(function(e){return`$event.keyCode!==`+e}).join(`&&`)+`)return;`:`if($event.keyCode!==`+t+`)return;`}function ja(e){return parseInt(e,10)||Ea[e]||`_k(`+JSON.stringify(e)+`)`}function Ma(e,t){e.wrapData=function(e){return`_b(`+e+`,`+t.value+(t.modifiers&&t.modifiers.prop?`,true`:``)+`)`}}var Na={bind:Ma,cloak:S},Pa,Fa,Ia,La,Ra,za;function Ba(e,t){var n=Ra,r=Ra=[];za=t,Pa=t.warn||Ai,Fa=ji(t.modules,`transformCode`),Ia=ji(t.modules,`genData`),La=t.directives||{};var i=e?Va(e):`_h("div")`;return Ra=n,{render:`with(this){return `+i+`}`,staticRenderFns:r}}function Va(e){if(e.staticRoot&&!e.staticProcessed)return e.staticProcessed=!0,Ra.push(`with(this){return `+Va(e)+`}`),`_m(`+(Ra.length-1)+(e.staticInFor?`,true`:``)+`)`;if(e.for&&!e.forProcessed)return Wa(e);if(e.if&&!e.ifProcessed)return Ha(e);if(e.tag===`template`&&!e.slotTarget)return qa(e)||`void 0`;if(e.tag===`slot`)return Xa(e);var t;if(e.component)t=Za(e);else{var n=Ga(e),r=e.inlineTemplate?null:qa(e);t=`_h('`+e.tag+`'`+(n?`,`+n:``)+(r?`,`+r:``)+`)`}for(var i=0;i<Fa.length;i++)t=Fa[i](e,t);return t}function Ha(e){var t=e.if;return e.ifProcessed=!0,`(`+t+`)?`+Va(e)+`:`+Ua(e)}function Ua(e){return e.elseBlock?Va(e.elseBlock):`_e()`}function Wa(e){var t=e.for,n=e.alias,r=e.iterator1?`,`+e.iterator1:``,i=e.iterator2?`,`+e.iterator2:``;return e.forProcessed=!0,`_l((`+t+`),function(`+n+r+i+`){return `+Va(e)+`})`}function Ga(e){if(!e.plain){var t=`{`,n=Ka(e);n&&(t+=n+`,`),e.key&&(t+=`key:`+e.key+`,`),e.ref&&(t+=`ref:`+e.ref+`,`),e.refInFor&&(t+=`refInFor:true,`),e.component&&(t+=`tag:"`+e.tag+`",`),e.slotTarget&&(t+=`slot:`+e.slotTarget+`,`);for(var r=0;r<Ia.length;r++)t+=Ia[r](e);if(e.attrs&&(t+=`attrs:{`+Qa(e.attrs)+`},`),e.props&&(t+=`domProps:{`+Qa(e.props)+`},`),e.events&&(t+=Oa(e.events)+`,`),e.nativeEvents&&(t+=Oa(e.nativeEvents,!0)+`,`),e.inlineTemplate){var i=e.children[0];if((e.children.length>1||i.type!==1)&&Pa(`Inline-template components must have exactly one child element.`),i.type===1){var a=Ba(i,za);t+=`inlineTemplate:{render:function(){`+a.render+`},staticRenderFns:[`+a.staticRenderFns.map(function(e){return`function(){`+e+`}`}).join(`,`)+`]}`}}return t=t.replace(/,$/,``)+`}`,e.wrapData&&(t=e.wrapData(t)),t}}function Ka(e){var t=e.directives;if(t){var n=`directives:[`,r=!1,i,a,o,s;for(i=0,a=t.length;i<a;i++){o=t[i],s=!0;var c=La[o.name]||Na[o.name];c&&(s=!!c(e,o,Pa)),s&&(r=!0,n+=`{name:"`+o.name+`"`+(o.value?`,value:(`+o.value+`),expression:`+JSON.stringify(o.value):``)+(o.arg?`,arg:"`+o.arg+`"`:``)+(o.modifiers?`,modifiers:`+JSON.stringify(o.modifiers):``)+`},`)}if(r)return n.slice(0,-1)+`]`}}function qa(e){if(e.children.length)return`[`+e.children.map(Ja).join(`,`)+`]`}function Ja(e){return e.type===1?Va(e):Ya(e)}function Ya(e){return e.type===2?e.expression:JSON.stringify(e.text)}function Xa(e){var t=e.slotName||`"default"`,n=qa(e);return n?`_t(`+t+`,`+n+`)`:`_t(`+t+`)`}function Za(e){var t=qa(e);return`_h(`+e.component+`,`+Ga(e)+(t?`,`+t:``)+`)`}function Qa(e){for(var t=``,n=0;n<e.length;n++){var r=e[n];t+=`"`+r.name+`":`+r.value+`,`}return t.slice(0,-1)}function $a(e,t){var n=Zi(e.trim(),t);ba(n,t);var r=Ba(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}var eo=RegExp(`\\b`+`do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments`.split(`,`).join(`\\b|\\b`)+`\\b`),to=/[A-Za-z_$][\w$]*/,no=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;function ro(e){var t=[];return e&&io(e,t),t}function io(e,t){if(e.type===1){for(var n in e.attrsMap)if(Ii.test(n)){var r=e.attrsMap[n];r&&(n===`v-for`?ao(e,`v-for="`+r+`"`,t):so(r,n+`="`+r+`"`,t))}if(e.children)for(var i=0;i<e.children.length;i++)io(e.children[i],t)}else e.type===2&&so(e.expression,e.text,t)}function ao(e,t,n){so(e.for||``,t,n),oo(e.alias,`v-for alias`,t,n),oo(e.iterator1,`v-for iterator`,t,n),oo(e.iterator2,`v-for iterator`,t,n)}function oo(e,t,n,r){typeof e==`string`&&!to.test(e)&&r.push(`- invalid `+t+` "`+e+`" in expression: `+n)}function so(e,t,n){try{Function(`return `+e)}catch{var r=e.replace(no,``).match(eo);r?n.push(`- avoid using JavaScript keyword as property name: "`+r[0]+`" in expression `+t):n.push(`- invalid expression: `+t)}}function co(e,t){var n=t.warn||Ai,r=Z(e,`class`);r&&ki(r,t.delimiters)&&n(`class="`+r+`": Interpolation inside attributes has been deprecated. Use v-bind or the colon shorthand instead.`),r&&(e.staticClass=JSON.stringify(r));var i=X(e,`class`,!1);i&&(e.classBinding=i)}function lo(e){var t=``;return e.staticClass&&(t+=`staticClass:`+e.staticClass+`,`),e.classBinding&&(t+=`class:`+e.classBinding+`,`),t}var uo={staticKeys:[`staticClass`],transformNode:co,genData:lo};function fo(e){var t=X(e,`style`,!1);t&&(e.styleBinding=t)}function po(e){return e.styleBinding?`style:(`+e.styleBinding+`),`:``}var mo=[uo,{transformNode:fo,genData:po}],$;function ho(e,t,n){$=n;var r=t.value,i=t.modifiers,a=e.tag,o=e.attrsMap.type;if(a===`select`)return yo(e,r);if(a===`input`&&o===`checkbox`)go(e,r);else if(a===`input`&&o===`radio`)_o(e,r);else return vo(e,r,i)}function go(e,t){e.attrsMap.checked!=null&&$(`<`+e.tag+` v-model="`+t+`" checked>:
inline checked attributes will be ignored when using v-model. Declare initial values in the component's data option instead.`);var n=X(e,`value`)||`null`,r=X(e,`true-value`)||`true`,i=X(e,`false-value`)||`false`;Mi(e,`checked`,`Array.isArray(`+t+`)?_i(`+t+`,`+n+`)>-1:_q(`+t+`,`+r+`)`),Fi(e,`change`,`var $$a=`+t+`,$$el=$event.target,$$c=$$el.checked?(`+r+`):(`+i+`);if(Array.isArray($$a)){var $$v=`+n+`,$$i=_i($$a,$$v);if($$c){$$i<0&&(`+t+`=$$a.concat($$v))}else{$$i>-1&&(`+t+`=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{`+t+`=$$c}`,null,!0)}function _o(e,t){e.attrsMap.checked!=null&&$(`<`+e.tag+` v-model="`+t+`" checked>:
inline checked attributes will be ignored when using v-model. Declare initial values in the component's data option instead.`);var n=X(e,`value`)||`null`;Mi(e,`checked`,`_q(`+t+`,`+n+`)`),Fi(e,`change`,t+`=`+n,null,!0)}function vo(e,t,n){e.tag===`input`&&e.attrsMap.value&&$(`<`+e.tag+` v-model="`+t+`" value="`+e.attrsMap.value+`">:
inline value attributes will be ignored when using v-model. Declare initial values in the component's data option instead.`),e.tag===`textarea`&&e.children.length&&$(`<textarea v-model="`+t+`">:
inline content inside <textarea> will be ignored when using v-model. Declare initial values in the component's data option instead.`);var r=e.attrsMap.type,i=n||{},a=i.lazy,o=i.number,s=i.trim,c=a||M&&r===`range`?`change`:`input`,l=!a&&r!==`range`,u=e.tag===`input`||e.tag===`textarea`,d=u?`$event.target.value`+(s?`.trim()`:``):`$event`,f=o||r===`number`?t+`=_n(`+d+`)`:t+`=`+d;if(u&&l&&(f=`if($event.target.composing)return;`+f),r===`file`&&$(`<`+e.tag+` v-model="`+t+`" type="file">:
File inputs are read only. Use a v-on:change listener instead.`),Mi(e,`value`,u?`_s(`+t+`)`:`(`+t+`)`),Fi(e,c,f,null,!0),l)return!0}function yo(e,t){return e.children.some(bo),Fi(e,`change`,t+`=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){return "_value" in o ? o._value : o.value})`+(e.attrsMap.multiple==null?`[0]`:``),null,!0),!0}function bo(e){return e.type===1&&e.tag===`option`&&e.attrsMap.selected!=null?($(`<select v-model="`+e.parent.attrsMap[`v-model`]+`">:
inline selected attributes on <option> will be ignored when using v-model. Declare initial values in the component's data option instead.`),!0):!1}function xo(e,t){t.value&&Mi(e,`textContent`,`_s(`+t.value+`)`)}function So(e,t){t.value&&Mi(e,`innerHTML`,`_s(`+t.value+`)`)}var Co={model:ho,text:xo,html:So},wo=Object.create(null),To={isIE:M,expectHTML:!0,modules:mo,staticKeys:w(mo),directives:Co,isReservedTag:vn,isUnaryTag:pn,mustUseProp:Qt,getTagNamespace:yn,isPreTag:_n};function Eo(e,t){return t=t?g(g({},To),t):To,$a(e,t)}function Do(e,t,n){var r=t&&t.warn||G;try{Function(`return 1`)}catch(e){e.toString().match(/unsafe-eval|CSP/)&&r(`It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.`)}var i=t&&t.delimiters?String(t.delimiters)+e:e;if(wo[i])return wo[i];var a={},o=Eo(e,t);a.render=Oo(o.render);var s=o.staticRenderFns.length;a.staticRenderFns=Array(s);for(var c=0;c<s;c++)a.staticRenderFns[c]=Oo(o.staticRenderFns[c]);return(a.render===S||a.staticRenderFns.some(function(e){return e===S}))&&r(`failed to compile template:

`+e+`

`+ro(o.ast).join(`
`)+`

`,n),wo[i]=a}function Oo(e){try{return Function(e)}catch{return S}}var ko=c(function(e){var t=Sn(e);return t&&t.innerHTML}),Ao=W.prototype.$mount;W.prototype.$mount=function(e,t){if(e&&=Sn(e),e===document.body||e===document.documentElement)return G(`Do not mount Vue to <html> or <body> - mount to normal elements instead.`),this;var n=this.$options;if(!n.render){var r=n.template,i=!1;if(r)if(typeof r==`string`)r.charAt(0)===`#`&&(i=!0,r=ko(r));else if(r.nodeType)i=!0,r=r.innerHTML;else return G(`invalid template option:`+r,this),this;else e&&(i=!0,r=jo(e));if(r){var a=Do(r,{warn:G,isFromDOM:i,shouldDecodeTags:ri,shouldDecodeNewlines:ii,delimiters:n.delimiters},this),o=a.render,s=a.staticRenderFns;n.render=o,n.staticRenderFns=s}}return Ao.call(this,e,t)};function jo(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement(`div`);return t.appendChild(e.cloneNode(!0)),t.innerHTML}return W.compile=Do,W}))}))()),u=`stackline-vue-multiselect-dropdown-styles`,d=`
.vmsd-root {
  --vmsd-primary: #3f51b5;
  --vmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f7fb;
  --vmsd-surface-muted: #e8eaf6;
  --vmsd-border: #c5cae9;
  --vmsd-border-strong: #7986cb;
  --vmsd-ink: #212121;
  --vmsd-muted: #5f6368;
  --vmsd-chip-bg: #e8eaf6;
  --vmsd-chip-text: #303f9f;
  --vmsd-chip-remove: #303f9f;
  --vmsd-divider: rgba(125, 119, 134, 0.16);
  --vmsd-section-bg: #f5f7fb;
  --vmsd-focus: rgba(63, 81, 181, 0.32);
  --vmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --vmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
  position: relative;
  display: block;
  width: 100%;
  color: var(--vmsd-ink);
  font: inherit;
}

.vmsd-root *,
.vmsd-root *::before,
.vmsd-root *::after,
.vmsd-menu,
.vmsd-menu *,
.vmsd-menu *::before,
.vmsd-menu *::after {
  box-sizing: border-box;
}

.vmsd-trigger {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 56px;
  gap: 8px;
  border: 1px solid var(--vmsd-border);
  border-radius: 18px;
  background-color: var(--vmsd-bg);
  color: var(--vmsd-ink);
  padding: 11px 54px 11px 16px;
  box-shadow: var(--vmsd-shadow-soft);
  text-align: left;
  cursor: pointer;
  line-height: 1.45;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease, transform 160ms ease;
}

.vmsd-trigger:hover {
  border-color: var(--vmsd-border-strong);
}

.vmsd-root[data-open="true"] .vmsd-trigger,
.vmsd-trigger:focus-visible {
  outline: none;
  border-color: var(--vmsd-primary);
  box-shadow: 0 0 0 3px var(--vmsd-focus), var(--vmsd-shadow-soft);
}

.vmsd-trigger.vmsd-disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

.vmsd-value {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-placeholder,
.vmsd-single-value {
  min-width: 0;
  color: var(--vmsd-muted);
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vmsd-single-value {
  color: var(--vmsd-ink);
  font-weight: 500;
}

.vmsd-badge-list {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-height: 32px;
  max-width: 100%;
  border-radius: 999px;
  background-color: var(--vmsd-chip-bg);
  color: var(--vmsd-chip-text);
  padding: 6px 30px 6px 12px;
  box-shadow: inset 0 0 0 1px rgba(103, 80, 164, 0.08);
  line-height: 1.35;
  white-space: normal;
  overflow-wrap: anywhere;
}

.vmsd-badge-label {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  line-height: 1.3;
  font-weight: 500;
  white-space: normal;
  overflow-wrap: anywhere;
}

.vmsd-badge-remove,
.vmsd-clear,
.vmsd-search-clear,
.vmsd-arrow-button,
.vmsd-group-action {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
}

.vmsd-badge-remove {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-grid;
  width: 16px;
  height: 16px;
  place-items: center;
  transform: translateY(-50%);
  color: var(--vmsd-chip-remove);
  font-size: 12px;
  line-height: 1;
}

.vmsd-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  color: var(--vmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic) .vmsd-trigger {
  padding-right: 104px;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic):not(.vmsd-has-clear) .vmsd-trigger {
  padding-right: 74px;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic) .vmsd-overflow {
  position: absolute;
  top: 50%;
  right: 76px;
  transform: translateY(-50%);
  z-index: 1;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic):not(.vmsd-has-clear) .vmsd-overflow {
  right: 42px;
}

.vmsd-actions {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(-50%);
}

.vmsd-clear {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--vmsd-muted);
  font-size: 14px;
  line-height: 1;
}

.vmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.vmsd-badge-remove .vmsd-icon {
  width: 10px;
  height: 10px;
}

.vmsd-clear .vmsd-icon {
  width: 12px;
  height: 12px;
}

.vmsd-search-clear .vmsd-icon {
  width: 18px;
  height: 18px;
}

.vmsd-arrow-button {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--vmsd-muted);
}

.vmsd-arrow-button:disabled {
  cursor: not-allowed;
}

.vmsd-badge-remove:focus-visible,
.vmsd-clear:focus-visible,
.vmsd-search-clear:focus-visible,
.vmsd-arrow-button:focus-visible,
.vmsd-group-action:focus-visible,
.vmsd-inline-button:focus-visible {
  outline: 3px solid var(--vmsd-focus);
  outline-offset: 2px;
}

.vmsd-arrow {
  display: inline-flex;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.vmsd-arrow .vmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.vmsd-menu {
  position: absolute;
  left: 0;
  z-index: 99999;
  width: 100%;
  border: 1px solid var(--vmsd-border);
  border-radius: 22px;
  background-color: var(--vmsd-bg);
  box-shadow: var(--vmsd-shadow);
  overflow: hidden;
}

.vmsd-menu.vmsd-body-overlay {
  position: fixed;
  right: auto;
  top: auto;
  bottom: auto;
  max-width: calc(100vw - 16px);
  z-index: 100000;
}

.vmsd-menu.vmsd-bottom {
  top: calc(100% + 8px);
}

.vmsd-menu.vmsd-top {
  bottom: calc(100% + 8px);
}

.vmsd-menu.vmsd-body-overlay.vmsd-bottom,
.vmsd-menu.vmsd-body-overlay.vmsd-top {
  top: auto;
  bottom: auto;
}

.vmsd-toolbar {
  display: grid;
  gap: 0;
  padding: 0;
  background-color: var(--vmsd-bg);
}

.vmsd-search-shell {
  position: relative;
  min-height: 52px;
  border-bottom: 1px solid var(--vmsd-divider);
  background-color: var(--vmsd-bg);
}

.vmsd-search-icon {
  position: absolute;
  top: 50%;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--vmsd-muted);
  fill: currentColor;
  pointer-events: none;
  transform: translateY(-50%);
}

.vmsd-search-input {
  width: 100%;
  min-height: 52px;
  border: 0;
  border-radius: 0;
  background-color: var(--vmsd-bg);
  color: var(--vmsd-ink);
  font: inherit;
  padding: 0 44px 0 48px;
}

.vmsd-search-input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--vmsd-primary);
}

.vmsd-search-clear {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-grid;
  width: 18px;
  height: 18px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 999px;
  color: var(--vmsd-muted);
}

.vmsd-bulk-actions {
  display: block;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid var(--vmsd-divider);
  background: var(--vmsd-section-bg);
}

.vmsd-inline-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 39px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--vmsd-ink);
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  padding: 10px 14px;
  text-align: left;
}

.vmsd-inline-button:hover {
  background-color: var(--vmsd-surface);
}

.vmsd-inline-button:disabled {
  opacity: 0.58;
  cursor: not-allowed;
}

.vmsd-add-button {
  justify-content: center;
  border-top: 1px solid var(--vmsd-divider);
  color: var(--vmsd-primary);
  font-weight: 700;
}

.vmsd-list {
  max-height: 300px;
  overflow: auto;
  padding: 8px;
  background: var(--vmsd-bg);
  scrollbar-width: thin;
  scrollbar-color: rgba(125, 119, 134, 0.34) transparent;
}

.vmsd-list:focus {
  outline: none;
}

.vmsd-menu ::-webkit-scrollbar {
  width: 10px;
}

.vmsd-menu ::-webkit-scrollbar-thumb {
  background: rgba(125, 119, 134, 0.34);
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

.vmsd-menu ::-webkit-scrollbar-track {
  background: transparent;
}

.vmsd-option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 0;
  margin: 4px;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  line-height: 1.35;
}

.vmsd-option:hover {
  background-color: var(--vmsd-surface);
}

.vmsd-option:focus-visible {
  outline: 3px solid var(--vmsd-focus);
  outline-offset: 1px;
}

.vmsd-option.vmsd-selected {
  background-color: var(--vmsd-primary-soft);
  color: var(--vmsd-primary);
}

.vmsd-option.vmsd-disabled {
  opacity: 0.54;
  cursor: not-allowed;
}

.vmsd-checkbox {
  position: relative;
  box-sizing: content-box;
  display: inline-grid;
  place-items: center;
  align-self: center;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--vmsd-border-strong);
  border-radius: 6px;
  background-color: var(--vmsd-bg);
  line-height: 0;
  vertical-align: middle;
}

.vmsd-checkbox[data-checked="true"] {
  border-color: var(--vmsd-primary);
  background-color: var(--vmsd-primary);
}

.vmsd-checkbox[data-checked="true"]::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 4px;
  margin-top: 0;
  border-color: #fff;
  border-style: solid;
  border-width: 0 0 2px 2px;
  transform: translate(-50%, -62%) rotate(-45deg);
  transform-origin: 50%;
}

.vmsd-option-body {
  min-width: 0;
  flex: 1;
}

.vmsd-option-label {
  font-weight: 500;
}

.vmsd-option-hint {
  display: block;
  margin-top: 3px;
  color: var(--vmsd-muted);
  font-size: 12px;
}

.vmsd-group {
  margin-bottom: 8px;
}

.vmsd-group:last-child {
  margin-bottom: 0;
}

.vmsd-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 10px;
  color: var(--vmsd-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.vmsd-group-action {
  color: var(--vmsd-primary);
  font-size: 12px;
  font-weight: 800;
}

.vmsd-state {
  padding: 18px 12px;
  text-align: center;
  color: var(--vmsd-muted);
}

.theme-material,
.skin-material {
  --vmsd-primary: #3f51b5;
  --vmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f7fb;
  --vmsd-surface-muted: #e8eaf6;
  --vmsd-border: #c5cae9;
  --vmsd-border-strong: #7986cb;
  --vmsd-ink: #212121;
  --vmsd-muted: #5f6368;
  --vmsd-chip-bg: #e8eaf6;
  --vmsd-chip-text: #303f9f;
  --vmsd-chip-remove: #303f9f;
  --vmsd-divider: rgba(125, 119, 134, 0.16);
  --vmsd-section-bg: #f5f7fb;
  --vmsd-focus: rgba(63, 81, 181, 0.32);
  --vmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --vmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
}

.theme-material .vmsd-trigger,
.skin-material .vmsd-trigger {
  min-height: 56px;
  border-radius: 18px;
  padding: 11px 54px 11px 16px;
}

.theme-material .vmsd-menu,
.skin-material .vmsd-menu,
.vmsd-menu.theme-material,
.vmsd-menu.skin-material {
  border-radius: 22px;
}

.theme-material .vmsd-option,
.skin-material .vmsd-option {
  border-radius: 14px;
  margin: 4px;
  padding: 12px 14px;
}

.theme-dark,
.skin-dark {
  --vmsd-primary: #8ab4f8;
  --vmsd-primary-soft: rgba(138, 180, 248, 0.18);
  --vmsd-bg: #151a23;
  --vmsd-surface: #202736;
  --vmsd-surface-muted: #111722;
  --vmsd-border: #384456;
  --vmsd-border-strong: #8ab4f8;
  --vmsd-ink: #edf2f7;
  --vmsd-muted: #aab6c5;
  --vmsd-chip-bg: #263247;
  --vmsd-chip-text: #d7e6ff;
  --vmsd-chip-remove: #d7e6ff;
  --vmsd-divider: rgba(170, 182, 197, 0.18);
  --vmsd-section-bg: #202736;
  --vmsd-focus: rgba(138, 180, 248, 0.34);
  --vmsd-shadow: 0 20px 50px rgba(0, 0, 0, 0.42);
  --vmsd-shadow-soft: 0 1px 2px rgba(0, 0, 0, 0.45), 0 10px 24px rgba(0, 0, 0, 0.28);
}

.theme-custom,
.skin-custom {
  --vmsd-primary: var(--stackline-ms-primary, #0f766e);
  --vmsd-primary-soft: var(--stackline-ms-primary-soft, rgba(15, 118, 110, 0.14));
  --vmsd-bg: var(--stackline-ms-surface, #ffffff);
  --vmsd-surface: var(--stackline-ms-surface-soft, #ecfdf5);
  --vmsd-surface-muted: var(--stackline-ms-surface-muted, #d1fae5);
  --vmsd-border: var(--stackline-ms-outline, #99f6e4);
  --vmsd-border-strong: var(--stackline-ms-outline-strong, #0f766e);
  --vmsd-ink: var(--stackline-ms-on-surface, #102a2a);
  --vmsd-muted: var(--stackline-ms-on-surface-muted, #47615f);
  --vmsd-chip-bg: var(--stackline-ms-chip-bg, #ccfbf1);
  --vmsd-chip-text: var(--stackline-ms-chip-text, #115e59);
  --vmsd-chip-remove: var(--stackline-ms-chip-remove, #115e59);
  --vmsd-divider: var(--stackline-ms-divider, rgba(15, 118, 110, 0.18));
  --vmsd-section-bg: var(--stackline-ms-section-bg, #ecfdf5);
  --vmsd-focus: var(--stackline-ms-focus, rgba(15, 118, 110, 0.28));
  --vmsd-shadow: var(--stackline-ms-shadow, 0 18px 42px rgba(15, 118, 110, 0.15));
  --vmsd-shadow-soft: var(--stackline-ms-shadow-soft, 0 1px 2px rgba(15, 118, 110, 0.16), 0 8px 18px rgba(15, 118, 110, 0.09));
}

.theme-brand,
.skin-brand {
  --stackline-ms-primary: #7c3aed;
  --stackline-ms-primary-soft: rgba(124, 58, 237, 0.14);
  --stackline-ms-surface: #ffffff;
  --stackline-ms-surface-soft: #f5f3ff;
  --stackline-ms-surface-muted: #ede9fe;
  --stackline-ms-outline: #c4b5fd;
  --stackline-ms-outline-strong: #7c3aed;
  --stackline-ms-on-surface: #22183f;
  --stackline-ms-on-surface-muted: #6b5d80;
  --stackline-ms-chip-bg: #ede9fe;
  --stackline-ms-chip-text: #5b21b6;
  --stackline-ms-chip-remove: #5b21b6;
  --stackline-ms-divider: rgba(124, 58, 237, 0.16);
  --stackline-ms-section-bg: #f5f3ff;
}

.theme-classic,
.skin-classic {
  --vmsd-primary: #0079fe;
  --vmsd-primary-soft: #e9f4ff;
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f5f5;
  --vmsd-surface-muted: #e9f4ff;
  --vmsd-border: #cccccc;
  --vmsd-border-strong: #0079fe;
  --vmsd-ink: #333333;
  --vmsd-muted: #333333;
  --vmsd-chip-bg: #0079fe;
  --vmsd-chip-text: #ffffff;
  --vmsd-chip-remove: #ffffff;
  --vmsd-focus: rgba(0, 121, 254, 0.26);
  --vmsd-divider: #cccccc;
  --vmsd-section-bg: #ffffff;
  --vmsd-shadow: 0 1px 5px #959595;
  --vmsd-shadow-soft: 0 1px 5px #959595;
  color: #333333;
}

.theme-classic .vmsd-trigger,
.skin-classic .vmsd-trigger {
  flex-wrap: nowrap;
  gap: 6px;
  min-height: 42px;
  border-radius: 3px;
  padding: 10px 68px 10px 10px;
  border: 1px solid #cccccc;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
  color: #333333;
  font-size: 14px;
  line-height: 1.35;
}

.theme-classic .vmsd-trigger:hover,
.skin-classic .vmsd-trigger:hover,
.theme-classic[data-open="true"] .vmsd-trigger,
.skin-classic[data-open="true"] .vmsd-trigger {
  border-color: #cccccc;
  box-shadow: 0 1px 5px #959595;
}

.theme-classic .vmsd-trigger.vmsd-disabled,
.skin-classic .vmsd-trigger.vmsd-disabled {
  background: #cccccc;
  opacity: 1;
}

.theme-classic .vmsd-placeholder,
.theme-classic .vmsd-single-value,
.skin-classic .vmsd-placeholder,
.skin-classic .vmsd-single-value {
  color: #333333;
  font-size: 14px;
}

.theme-classic .vmsd-value,
.theme-classic .vmsd-badge-list,
.skin-classic .vmsd-value,
.skin-classic .vmsd-badge-list {
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
}

.theme-classic .vmsd-badge,
.skin-classic .vmsd-badge {
  display: inline-block;
  min-height: 0;
  margin: 2px 0 0;
  border-radius: 2px;
  padding: 2px 24px 2px 6px;
  box-shadow: none;
  color: #ffffff;
  line-height: 1.4;
}

.theme-classic .vmsd-badge-label,
.skin-classic .vmsd-badge-label {
  display: inline;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

.theme-classic .vmsd-badge-remove,
.skin-classic .vmsd-badge-remove {
  right: 5px;
  width: 14px;
  height: 14px;
  color: #ffffff;
}

.theme-classic .vmsd-badge-remove .vmsd-icon,
.skin-classic .vmsd-badge-remove .vmsd-icon {
  width: 9px;
  height: 9px;
}

.theme-classic .vmsd-overflow,
.skin-classic .vmsd-overflow {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
}

.theme-classic .vmsd-actions,
.skin-classic .vmsd-actions {
  right: 10px;
  gap: 12px;
}

.theme-classic .vmsd-clear,
.skin-classic .vmsd-clear {
  width: 18px;
  height: 18px;
  color: #333333;
}

.theme-classic .vmsd-clear .vmsd-icon,
.skin-classic .vmsd-clear .vmsd-icon {
  width: 11px;
  height: 11px;
}

.theme-classic .vmsd-arrow-button,
.skin-classic .vmsd-arrow-button {
  width: 20px;
  height: 20px;
  color: #333333;
}

.theme-classic .vmsd-menu,
.skin-classic .vmsd-menu,
.vmsd-menu.theme-classic,
.vmsd-menu.skin-classic {
  overflow: visible;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
}

.vmsd-menu.theme-classic.vmsd-bottom,
.vmsd-menu.skin-classic.vmsd-bottom {
  top: calc(100% + 14px);
}

.vmsd-menu.theme-classic.vmsd-top,
.vmsd-menu.skin-classic.vmsd-top {
  bottom: calc(100% + 14px);
}

.vmsd-menu.vmsd-body-overlay.vmsd-bottom,
.vmsd-menu.vmsd-body-overlay.vmsd-top {
  bottom: auto;
}

.vmsd-menu.theme-classic::before,
.vmsd-menu.theme-classic::after,
.vmsd-menu.skin-classic::before,
.vmsd-menu.skin-classic::after {
  content: "";
  position: absolute;
  left: 15px;
  width: 0;
  height: 0;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
}

.vmsd-menu.theme-classic.vmsd-bottom::before,
.vmsd-menu.skin-classic.vmsd-bottom::before {
  top: -15px;
  border-bottom: 15px solid #cccccc;
}

.vmsd-menu.theme-classic.vmsd-bottom::after,
.vmsd-menu.skin-classic.vmsd-bottom::after {
  top: -14px;
  border-bottom: 15px solid #ffffff;
}

.vmsd-menu.theme-classic.vmsd-top::before,
.vmsd-menu.skin-classic.vmsd-top::before {
  bottom: -15px;
  border-top: 15px solid #cccccc;
}

.vmsd-menu.theme-classic.vmsd-top::after,
.vmsd-menu.skin-classic.vmsd-top::after {
  bottom: -14px;
  border-top: 15px solid #ffffff;
}

.theme-classic .vmsd-toolbar,
.skin-classic .vmsd-toolbar,
.vmsd-menu.theme-classic .vmsd-toolbar,
.vmsd-menu.skin-classic .vmsd-toolbar {
  gap: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .vmsd-search-shell,
.skin-classic .vmsd-search-shell,
.vmsd-menu.theme-classic .vmsd-search-shell,
.vmsd-menu.skin-classic .vmsd-search-shell {
  min-height: 35px;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .vmsd-search-icon,
.skin-classic .vmsd-search-icon,
.vmsd-menu.theme-classic .vmsd-search-icon,
.vmsd-menu.skin-classic .vmsd-search-icon {
  left: 13px;
  width: 18px;
  height: 18px;
}

.theme-classic .vmsd-search-input,
.skin-classic .vmsd-search-input,
.vmsd-menu.theme-classic .vmsd-search-input,
.vmsd-menu.skin-classic .vmsd-search-input {
  min-height: 35px;
  height: 35px;
  padding: 0 35px;
  border: 0;
  color: #333333;
}

.theme-classic .vmsd-search-input:focus,
.skin-classic .vmsd-search-input:focus,
.vmsd-menu.theme-classic .vmsd-search-input:focus,
.vmsd-menu.skin-classic .vmsd-search-input:focus {
  box-shadow: none;
}

.theme-classic .vmsd-search-clear,
.skin-classic .vmsd-search-clear,
.vmsd-menu.theme-classic .vmsd-search-clear,
.vmsd-menu.skin-classic .vmsd-search-clear {
  right: 13px;
}

.theme-classic .vmsd-bulk-actions,
.skin-classic .vmsd-bulk-actions,
.vmsd-menu.theme-classic .vmsd-bulk-actions,
.vmsd-menu.skin-classic .vmsd-bulk-actions {
  border-top: 0;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .vmsd-inline-button,
.skin-classic .vmsd-inline-button,
.vmsd-menu.theme-classic .vmsd-inline-button,
.vmsd-menu.skin-classic .vmsd-inline-button {
  min-height: 35px;
  border-radius: 0;
  color: #333333;
  font-weight: 400;
  padding: 10px;
}

.theme-classic .vmsd-inline-button:hover,
.skin-classic .vmsd-inline-button:hover,
.vmsd-menu.theme-classic .vmsd-inline-button:hover,
.vmsd-menu.skin-classic .vmsd-inline-button:hover {
  background: #f5f5f5;
}

.theme-classic .vmsd-list,
.skin-classic .vmsd-list,
.vmsd-menu.theme-classic .vmsd-list,
.vmsd-menu.skin-classic .vmsd-list {
  margin: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .vmsd-option,
.skin-classic .vmsd-option,
.vmsd-menu.theme-classic .vmsd-option,
.vmsd-menu.skin-classic .vmsd-option {
  border-radius: 0;
  margin: 0;
  padding: 10px;
  color: #333333;
  line-height: 1.35;
}

.theme-classic .vmsd-option:hover,
.skin-classic .vmsd-option:hover,
.vmsd-menu.theme-classic .vmsd-option:hover,
.vmsd-menu.skin-classic .vmsd-option:hover {
  background: #f5f5f5;
}

.theme-classic .vmsd-option.vmsd-selected,
.skin-classic .vmsd-option.vmsd-selected,
.vmsd-menu.theme-classic .vmsd-option.vmsd-selected,
.vmsd-menu.skin-classic .vmsd-option.vmsd-selected {
  background: #e9f4ff;
  color: #333333;
}

.theme-classic .vmsd-checkbox,
.skin-classic .vmsd-checkbox,
.vmsd-menu.theme-classic .vmsd-checkbox,
.vmsd-menu.skin-classic .vmsd-checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #0079fe;
  border-radius: 0;
  background: #ffffff;
}

.theme-classic .vmsd-checkbox[data-checked="true"],
.skin-classic .vmsd-checkbox[data-checked="true"],
.vmsd-menu.theme-classic .vmsd-checkbox[data-checked="true"],
.vmsd-menu.skin-classic .vmsd-checkbox[data-checked="true"] {
  border-color: #0079fe;
  background: #0079fe;
}

.theme-classic .vmsd-checkbox[data-checked="true"]::after,
.skin-classic .vmsd-checkbox[data-checked="true"]::after,
.vmsd-menu.theme-classic .vmsd-checkbox[data-checked="true"]::after,
.vmsd-menu.skin-classic .vmsd-checkbox[data-checked="true"]::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 3px;
  margin-top: 0;
  border-width: 0 0 3px 3px;
  transform: translate(-50%, -62%) rotate(-45deg);
}

.theme-classic .vmsd-option-label,
.skin-classic .vmsd-option-label,
.vmsd-menu.theme-classic .vmsd-option-label,
.vmsd-menu.skin-classic .vmsd-option-label {
  color: #000000;
  font-weight: 300;
}

.theme-classic .vmsd-group-header,
.skin-classic .vmsd-group-header,
.vmsd-menu.theme-classic .vmsd-group-header,
.vmsd-menu.skin-classic .vmsd-group-header {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: capitalize;
}

.custom-class-example {
  --vmsd-primary: #0f766e;
  --vmsd-primary-soft: #ccfbf1;
  --vmsd-bg: #f8fffd;
  --vmsd-surface: #ecfdf5;
  --vmsd-border: #99f6e4;
  --vmsd-border-strong: #0f766e;
}

@media (max-width: 720px) {
  .vmsd-trigger {
    align-items: flex-start;
    padding-right: 54px;
  }
}

/* stackline-vue2-live-20260527 */
`;function f(){if(typeof document>`u`||document.getElementById(u))return;let e=document.createElement(`style`);e.id=u,e.textContent=d,document.head.appendChild(e)}var p={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`};function m(e){return e===`remove`?`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`:e===`clear`?`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`:e===`search`?`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`:e===`angle-up`?`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`}function h(e,t,n=`vmsd-icon`){return e(`svg`,{class:n,attrs:{viewBox:t===`remove`?`0 0 47.971 47.971`:t===`clear`?`0 0 51.976 51.976`:t===`search`?`0 0 615.52 615.52`:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`}},[e(`path`,{attrs:{d:m(t)}})])}function g(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function _(e,t){if(g(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function v(e,t){if(g(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return _(e,t)}function y(e){return!g(e)&&!!e.disabled}function b(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(_(e,n).toLowerCase()),!g(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.indexOf(r)>=0)return!0;return!1}function x(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!g(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]||``)}return``}function S(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=x(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function C(e,t,n){let r=new Map;for(let i of e.concat(t))r.set(v(i,n),i);return Array.from(r.values())}function w(e,t,n,r){return e?e(n,r,t):null}function T(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/["\\]/g,`\\$&`)}function E(e){return e.key===`Enter`||e.key===` `||e.key===`Spacebar`}function D(e){let t=e;return t?t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable:!1}var ee={name:`VueMultiselectDropdown`,model:{prop:`value`,event:`input`},props:{data:{type:Array,default:()=>[]},value:{type:Array,default:void 0},selectedItems:{type:Array,default:void 0},defaultSelectedItems:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},renderItem:{type:Function,default:void 0},renderBadge:{type:Function,default:void 0},renderEmptyState:{type:Function,default:void 0}},data(){return{isOpen:!1,query:``,focusedKey:``,internalSelected:Array.isArray(this.defaultSelectedItems)?this.defaultSelectedItems.slice():[],menuStyle:{},bodyListMaxHeight:void 0,menuPlaceholder:null,menuAttachedToBody:!1,effectivePosition:`bottom`,instanceId:`stackline-vmsd-${Math.random().toString(36).slice(2)}`}},computed:{resolvedSettings(){let e={...p,...this.settings||{}},t=e.skin||e.theme||`classic`;return{...e,skin:t,disabled:!!(e.disabled||this.disabled),searchBy:Array.isArray(e.searchBy)?e.searchBy:[]}},selected(){return Array.isArray(this.selectedItems)?this.selectedItems:Array.isArray(this.value)?this.value:this.internalSelected},filteredItems(){let e=this.resolvedSettings;return(this.data||[]).filter(t=>b(t,this.query,e))},groupedItems(){return S(this.filteredItems,this.resolvedSettings)},visibleSelected(){let e=this.resolvedSettings.badgeShowLimit;return this.selected.slice(0,e)},hiddenSelectedCount(){return Math.max(0,this.selected.length-this.visibleSelected.length)},openDirection(){return this.effectivePosition===`top`?`up`:`down`},shouldAppendToBody(){return!!(this.resolvedSettings.appendToBody||this.resolvedSettings.tagToBody)}},watch:{isOpen(e){this.$nextTick(()=>{e?(this.attachMenuToBody(),this.updateMenuPosition(),this.resolvedSettings.searchAutofocus&&this.resolvedSettings.enableSearchFilter&&this.focusSearch(),this.$emit(`open`)):(this.restoreMenuToComponent(),this.menuStyle={},this.bodyListMaxHeight=void 0,this.$emit(`close`))})},selected(){this.$nextTick(this.updateMenuPosition)},filteredItems(){this.$nextTick(this.updateMenuPosition)},settings:{deep:!0,handler(){this.$nextTick(this.updateMenuPosition)}}},mounted(){f(),document.addEventListener(`click`,this.onDocumentClick,!0),document.addEventListener(`keydown`,this.onDocumentKeydown,!0),window.addEventListener(`resize`,this.updateMenuPosition),window.addEventListener(`scroll`,this.updateMenuPosition,!0)},beforeDestroy(){document.removeEventListener(`click`,this.onDocumentClick,!0),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0),window.removeEventListener(`resize`,this.updateMenuPosition),window.removeEventListener(`scroll`,this.updateMenuPosition,!0),this.restoreMenuToComponent()},methods:{getLabel(e){return _(e,this.resolvedSettings)},getKey(e){return v(e,this.resolvedSettings)},isSelected(e){let t=this.getKey(e);return this.selected.some(e=>this.getKey(e)===t)},visibleSelectableItems(){return this.filteredItems.filter(e=>!y(e))},emitSelection(e){!Array.isArray(this.selectedItems)&&!Array.isArray(this.value)&&(this.internalSelected=e),this.$emit(`input`,e),this.$emit(`update:selectedItems`,e),this.$emit(`change`,e)},openDropdown(){this.resolvedSettings.disabled||(this.isOpen=!0)},closeDropdown(){this.isOpen=!1,this.query=``,this.focusedKey=``},toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()},focusSearch(){this.isOpen||this.openDropdown();let e=this.$refs.searchInput;e&&typeof e.focus==`function`&&e.focus()},clearSelection(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.selected.slice();this.emitSelection([]),this.$emit(`de-select-all`,t)},selectAll(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.resolvedSettings,n=this.visibleSelectableItems();if(n.length>0&&n.every(e=>this.isSelected(e))){let e=new Set(n.map(e=>this.getKey(e))),t=this.selected.filter(t=>!e.has(this.getKey(t)));this.emitSelection(t),this.$emit(`de-select-all`,n);return}let r=t.limitSelection?Math.max(t.limitSelection-this.selected.length,0):2**53-1,i=new Set(this.selected.map(e=>this.getKey(e))),a=n.filter(e=>!i.has(this.getKey(e))).slice(0,r),o=t.singleSelection?n.slice(0,1):C(this.selected,a,t);this.emitSelection(o),this.$emit(`select-all`,o)},deSelectAll(e){this.clearSelection(e)},selectGroup(e,t,n){n.preventDefault(),n.stopPropagation();let r=this.resolvedSettings,i=t.filter(e=>!y(e));if(i.every(e=>this.isSelected(e))){let t=new Set(i.map(e=>this.getKey(e))),n=this.selected.filter(e=>!t.has(this.getKey(e)));this.emitSelection(n),this.$emit(`group-de-select`,e,i);return}let a=r.singleSelection?i.slice(0,1):C(this.selected,i,r);this.emitSelection(a),this.$emit(`group-select`,e,i)},toggleItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.isSelected(e),r=!!this.resolvedSettings.limitSelection&&this.selected.length>=this.resolvedSettings.limitSelection;if(this.resolvedSettings.disabled||y(e)||r&&!n)return;let i=this.getKey(e);if(this.selected.some(e=>this.getKey(e)===i)){let t=this.selected.filter(e=>this.getKey(e)!==i);this.emitSelection(t),this.$emit(`de-select`,e);return}let a=this.resolvedSettings.singleSelection?[e]:this.selected.concat(e);this.resolvedSettings.limitSelection>0&&(a=a.slice(0,this.resolvedSettings.limitSelection)),this.emitSelection(a),this.$emit(`select`,e),(this.resolvedSettings.singleSelection||this.resolvedSettings.closeDropDownOnSelection)&&this.closeDropdown()},removeItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.getKey(e),r=this.selected.filter(e=>this.getKey(e)!==n);this.emitSelection(r),this.$emit(`de-select`,e)},addFilterItem(e){e.preventDefault(),e.stopPropagation();let t=this.query.trim();if(!t)return;let n={[this.resolvedSettings.primaryKey]:t.toLowerCase().replace(/\s+/g,`-`),[this.resolvedSettings.labelKey]:t};this.$emit(`add-filter-new-item`,t,n),this.toggleItem(n),this.query=``},onTriggerKeydown(e){if(E(e)){e.preventDefault(),this.toggleDropdown();return}if(e.key===`ArrowDown`){e.preventDefault(),this.openDropdown(),this.focusFirstOption();return}if(e.key===`ArrowUp`){e.preventDefault(),this.openDropdown(),this.focusLastOption();return}e.key===`Escape`&&this.closeDropdown()},onListKeydown(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.closeDropdown();return}if(D(e.target)&&e.key!==`ArrowDown`)return;let t=this.visibleSelectableItems();if(!t.length)return;let n=Math.max(0,t.findIndex(e=>this.getKey(e)===this.focusedKey));if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation();let r=t[Math.min(n+1,t.length-1)];this.focusOption(r);return}if(e.key===`ArrowUp`){e.preventDefault(),e.stopPropagation();let r=t[Math.max(n-1,0)];this.focusOption(r);return}if(e.key===`Home`){e.preventDefault(),e.stopPropagation(),this.focusFirstOption();return}if(e.key===`End`){e.preventDefault(),e.stopPropagation(),this.focusLastOption();return}if(E(e)){e.preventDefault(),e.stopPropagation();let n=t.find(e=>this.getKey(e)===this.focusedKey)||t[0];this.toggleItem(n);return}},focusFirstOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems()[0];e&&this.focusOption(e)})},focusLastOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems(),t=e[e.length-1];t&&this.focusOption(t)})},focusOption(e){let t=this.getKey(e);this.focusedKey=t,this.$nextTick(()=>{let e=this.$refs.menu?.querySelector(`[data-vmsd-key="${T(t)}"]`);e&&(e.focus(),e.scrollIntoView({block:`nearest`}))})},onInlineKeydown(e){E(e)&&e.stopPropagation(),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusFirstOption()),e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusLastOption())},onTriggerClick(e){let t=e.target;t&&t.closest(`button`)||this.toggleDropdown()},onDocumentClick(e){if(!this.isOpen)return;let t=this.$el,n=this.$refs.menu,r=e.target;t&&t.contains(r)||n&&n.contains(r)||this.closeDropdown()},onDocumentKeydown(e){this.isOpen&&this.resolvedSettings.escapeToClose&&e.key===`Escape`&&this.closeDropdown()},onListScroll(e){let t=e.target;if(!t)return;let n={scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,clientHeight:t.clientHeight};t.scrollTop+t.clientHeight>=t.scrollHeight-4&&this.$emit(`scroll-to-end`,n)},attachMenuToBody(){if(!this.shouldAppendToBody||!this.isOpen||typeof document>`u`)return;let e=this.$refs.menu;!e||e.parentNode===document.body||(!this.menuPlaceholder&&e.parentNode&&(this.menuPlaceholder=document.createComment(`stackline-vue-multiselect-menu`),e.parentNode.insertBefore(this.menuPlaceholder,e)),document.body.appendChild(e),this.menuAttachedToBody=!0)},restoreMenuToComponent(){let e=this.$refs.menu;!e||!this.menuPlaceholder||!this.menuPlaceholder.parentNode||(this.menuPlaceholder.parentNode.insertBefore(e,this.menuPlaceholder.nextSibling),this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder),this.menuPlaceholder=null,this.menuAttachedToBody=!1,this.menuStyle={})},updateMenuPosition(){if(!this.isOpen||typeof window>`u`)return;let e=this.$refs.trigger,t=this.$refs.menu;if(!e||!t)return;let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=n.top,a=r-n.bottom,o=t.offsetHeight||Math.min(this.resolvedSettings.maxHeight+92,420),s=this.resolvedSettings.position===`top`?`top`:`bottom`,c=i>a+48,l=this.resolvedSettings.autoPosition?a<o&&c&&o<i?`top`:`bottom`:s;if(this.effectivePosition=l,!this.shouldAppendToBody){this.bodyListMaxHeight=void 0;return}let u=this.$refs.list?.offsetHeight||Math.min(this.resolvedSettings.maxHeight,o),d=Math.max(0,o-u),f=l===`top`?Math.max(0,n.top-8-8):Math.max(0,r-n.bottom-8-8),p=o>0?Math.max(0,Math.min(this.resolvedSettings.maxHeight,f-d)):this.resolvedSettings.maxHeight,m=d+p,h=l===`top`?n.top-m-8:n.bottom+8,g=l===`top`?Math.max(8,h):h,_=Math.max(0,window.innerWidth-16),v=Math.min(n.width,_),y=Math.min(Math.max(8,n.left),window.innerWidth-v-8),b={position:`fixed`,top:`${g}px`,left:`${y}px`,width:`${v}px`,maxWidth:`${_}px`,zIndex:`100000`,display:this.isOpen?`block`:`none`};this.bodyListMaxHeight=p,this.menuStyle=b}},render(e){let t=this.resolvedSettings,n=String(t.skin||t.theme||`classic`),r=[`classic`,`material`,`dark`,`custom`].includes(n)?``:`theme-custom`,i=this.selected.length>0,a=this.visibleSelected,o=this.hiddenSelectedCount,s=t.clearAll&&i&&!t.disabled,c=this.visibleSelectableItems(),l=c.length>0&&c.every(e=>this.isSelected(e)),u=t.enableCheckAll&&!t.singleSelection||!!(t.addNewItemOnFilter&&this.query.trim()),d=[`vmsd-menu`,`vmsd-${this.effectivePosition}`,`skin-${n}`,`theme-${n}`,r,this.shouldAppendToBody?`vmsd-body-overlay`:``].filter(Boolean),f=t.singleSelection&&i?[e(`span`,{class:`vmsd-single-value`},[this.getLabel(this.selected[0])])]:a.map(n=>{let r=this.getLabel(n),i={item:n,label:r,selected:!0,disabled:!1,query:this.query,toggle:()=>this.toggleItem(n),remove:()=>this.removeItem(n)},a=w(this.renderBadge,e,n,i),o=typeof t.removeItemAriaLabel==`function`?t.removeItemAriaLabel(n):`${t.removeItemAriaLabel}: ${r}`;return e(`span`,{class:`vmsd-badge`,key:this.getKey(n)},[e(`span`,{class:`vmsd-badge-label`},[a||r]),t.disabled?null:e(`button`,{class:`vmsd-badge-remove`,attrs:{type:`button`,"aria-label":o},on:{click:e=>this.removeItem(n,e),keydown:this.onInlineKeydown}},[h(e,`remove`)])])}),p=i?[e(`span`,{class:`vmsd-badge-list`},f)]:[e(`span`,{class:`vmsd-placeholder`},[t.text])];o>0&&p.push(e(`span`,{class:`vmsd-overflow`,attrs:{"aria-label":`${o} more selected options`}},[`+${o}`]));let m=e(`div`,{ref:`trigger`,class:[`vmsd-trigger`,t.disabled?`vmsd-disabled`:``],attrs:{role:`combobox`,tabindex:t.disabled?`-1`:`0`,"aria-label":i?`${t.ariaLabel}: ${this.selected.map(e=>this.getLabel(e)).join(`, `)}`:t.ariaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-haspopup":`listbox`,"aria-disabled":t.disabled?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:this.onTriggerClick,keydown:this.onTriggerKeydown}},[e(`div`,{class:`vmsd-value`},p),e(`div`,{class:`vmsd-actions`},[s?e(`button`,{class:`vmsd-clear`,attrs:{type:`button`,"aria-label":t.clearAllAriaLabel},on:{click:e=>this.clearSelection(e),keydown:this.onInlineKeydown}},[h(e,`remove`)]):null,e(`button`,{class:`vmsd-arrow-button`,attrs:{type:`button`,disabled:t.disabled,"aria-label":this.isOpen?t.closeDropdownAriaLabel:t.openDropdownAriaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:e=>{e.preventDefault(),e.stopPropagation(),this.toggleDropdown()},keydown:this.onInlineKeydown}},[e(`span`,{class:`vmsd-arrow`,attrs:{"aria-hidden":`true`}},[h(e,this.isOpen?`angle-up`:`angle-down`)])])])]),_=t.enableSearchFilter?e(`div`,{class:`vmsd-search-shell`},[h(e,`search`,`vmsd-search-icon`),e(`input`,{ref:`searchInput`,class:`vmsd-search-input`,domProps:{value:this.query},attrs:{type:`text`,placeholder:t.searchPlaceholderText,"aria-label":t.searchAriaLabel},on:{input:e=>{this.query=String(e.target.value||``)},keydown:this.onListKeydown}}),this.query?e(`button`,{class:`vmsd-search-clear`,attrs:{type:`button`,"aria-label":t.clearSearchAriaLabel},on:{click:()=>this.query=``,keydown:this.onInlineKeydown}},[h(e,`clear`)]):null]):null,v=u?e(`div`,{class:`vmsd-bulk-actions`},[t.enableCheckAll&&!t.singleSelection?e(`button`,{class:`vmsd-inline-button vmsd-select-all-button`,attrs:{type:`button`,disabled:t.disabled||c.length===0},on:{click:e=>this.selectAll(e),keydown:this.onInlineKeydown}},[t.showCheckbox?e(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":l?`true`:`false`,"aria-hidden":`true`}}):null,e(`span`,[l?t.unSelectAllText:t.selectAllText])]):null,t.addNewItemOnFilter&&this.query.trim()?e(`button`,{class:`vmsd-inline-button vmsd-add-button`,attrs:{type:`button`},on:{click:this.addFilterItem,keydown:this.onInlineKeydown}},[`${t.addNewButtonText} "${this.query.trim()}"`]):null]):null,b=n=>{let r=this.getLabel(n),i=this.isSelected(n),a=!!t.limitSelection&&this.selected.length>=t.limitSelection,o=t.disabled||y(n)||a&&!i,s=this.getKey(n),c={item:n,label:r,selected:i,disabled:o,query:this.query,toggle:()=>this.toggleItem(n),remove:()=>this.removeItem(n)},l=w(this.renderItem,e,n,c);return e(`div`,{key:s,class:[`vmsd-option`,i?`vmsd-selected`:``,o?`vmsd-disabled`:``],attrs:{role:`option`,tabindex:o?`-1`:`0`,"data-vmsd-option":`true`,"data-vmsd-key":s,"aria-disabled":o?`true`:`false`,"aria-selected":i?`true`:`false`},on:{click:e=>{o||this.toggleItem(n,e)},focus:()=>this.focusedKey=s,mouseenter:()=>this.focusedKey=s,keydown:this.onListKeydown}},[t.showCheckbox?e(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":i?`true`:`false`,"aria-hidden":`true`}}):null,l||e(`div`,{class:`vmsd-option-body`},[e(`div`,{class:`vmsd-option-label`},[r]),!g(n)&&n.caption?e(`span`,{class:`vmsd-option-hint`},[String(n.caption)]):null])])},x=t.loading?[e(`div`,{class:`vmsd-state`,attrs:{role:`status`}},[t.loadingText])]:t.groupBy?this.groupedItems.map(n=>e(`div`,{class:`vmsd-group`,key:n.name,attrs:{role:`group`,"aria-label":n.name}},[e(`div`,{class:`vmsd-group-header`},[e(`span`,[`${n.name} \xB7 ${n.items.length}`]),t.selectGroup?e(`button`,{class:`vmsd-group-action`,attrs:{type:`button`},on:{click:e=>this.selectGroup(n.name,n.items,e)}},[n.items.filter(e=>!y(e)).every(e=>this.isSelected(e))?`Unselect`:`Select`]):null]),n.items.map(b)])):this.filteredItems.map(b);if(!this.filteredItems.length&&!t.loading){let n=this.renderEmptyState?this.renderEmptyState(this.query,e):t.noDataLabel;x.push(e(`div`,{class:`vmsd-state`},[n]))}let S=e(`div`,{ref:`menu`,class:d,style:{...this.shouldAppendToBody?this.menuStyle:{},display:this.isOpen?`block`:`none`},attrs:{role:`presentation`,"aria-hidden":this.isOpen?`false`:`true`},on:{keydown:this.onListKeydown}},[e(`div`,{class:`vmsd-toolbar`},[v,_]),e(`div`,{ref:`list`,class:`vmsd-list`,style:{maxHeight:`${this.shouldAppendToBody&&this.bodyListMaxHeight!=null?this.bodyListMaxHeight:t.maxHeight}px`},attrs:{id:`${this.instanceId}-listbox`,role:`listbox`,"aria-label":t.listboxAriaLabel,"aria-multiselectable":t.singleSelection?`false`:`true`},on:{scroll:this.onListScroll}},x)]);return e(`div`,{class:[`vmsd-root`,`skin-${n}`,`theme-${n}`,r,this.isOpen?`vmsd-open`:``,this.effectivePosition===`top`?`vmsd-opens-up`:`vmsd-opens-down`,t.classes,i?`vmsd-has-selection`:``,s?`vmsd-has-clear`:``,o>0?`vmsd-has-overflow`:``],attrs:{"data-open":this.isOpen?`true`:`false`}},[m,S])}},O=`2.0.0`,te=l.default.version,k=[{id:1,itemName:`Brazil`,name:`BR`,capital:`Brasilia`,category:`South America`,region:`Americas`,flag:`BR`,caption:`Brasilia - Americas`},{id:2,itemName:`Canada`,name:`CA`,capital:`Ottawa`,category:`North America`,region:`Americas`,flag:`CA`,caption:`Ottawa - Americas`},{id:3,itemName:`Portugal`,name:`PT`,capital:`Lisbon`,category:`Europe`,region:`Europe`,flag:`PT`,caption:`Lisbon - Europe`},{id:4,itemName:`United States`,name:`US`,capital:`Washington, DC`,category:`North America`,region:`Americas`,flag:`US`,caption:`Washington, DC - Americas`},{id:5,itemName:`Argentina`,name:`AR`,capital:`Buenos Aires`,category:`South America`,region:`Americas`,flag:`AR`,caption:`Buenos Aires - Americas`},{id:6,itemName:`Germany`,name:`DE`,capital:`Berlin`,category:`Europe`,region:`Europe`,flag:`DE`,caption:`Berlin - Europe`},{id:7,itemName:`Mexico`,name:`MX`,capital:`Mexico City`,category:`North America`,region:`Americas`,flag:`MX`,caption:`Mexico City - Americas`},{id:8,itemName:`Colombia`,name:`CO`,capital:`Bogota`,category:`South America`,region:`Americas`,flag:`CO`,caption:`Bogota - Americas`},{id:9,itemName:`Uruguay`,name:`UY`,capital:`Montevideo`,category:`South America`,region:`Americas`,flag:`UY`,caption:`Montevideo - Americas`},{id:10,itemName:`Costa Rica`,name:`CR`,capital:`San Jose`,category:`Central America`,region:`Americas`,flag:`CR`,caption:`San Jose - Americas`,disabled:!0}],ne=[{id:1,itemName:`Vue`,category:`Frontend`},{id:2,itemName:`JavaScript`,category:`Frontend`},{id:3,itemName:`Node.js`,category:`Backend`},{id:4,itemName:`GraphQL`,category:`Backend`},{id:5,itemName:`Docker`,category:`DevOps`},{id:6,itemName:`Kubernetes`,category:`DevOps`},{id:7,itemName:`Cypress`,category:`Testing`},{id:8,itemName:`Playwright`,category:`Testing`}],A=[`Brazilian`,`Canadian`,`Mexican`,`Colombian`],j=[`Smith`,`Johnson`,`Williams`,`Brown`,`Jones`,`Miller`,`Davis`,`Garcia`,`Wilson`,`Taylor`,`Thomas`,`Moore`,`Martin`,`Jackson`,`Thompson`,`White`,`Lopez`,`Lee`,`Harris`,`Clark`],M=Array.from({length:180},(e,t)=>({id:t+1,name:`${j[t%j.length]} ${t+1}`,category:A[t%A.length]}));function N(e,t){return{id:t+100,itemName:e,name:e.slice(0,2).toUpperCase(),capital:e,category:`Custom`,region:`Custom`,flag:`NA`,caption:`${e} - Custom`}}function re(e,t,n){return Object.assign({},e,{disabled:!!(e.disabled||n),skin:t})}var P=[{id:`basic-counter`,title:`01. Basic multi select`,description:`Search, select all, clear all, and a real overflow counter with only three visible badges.`,dataName:`countries`,data:k,initialSelected:k.slice(0,4),settings:{text:`Select Countries`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3,clearAll:!0}},{id:`all-visible-counter`,title:`02. All selected badges visible`,description:`The counter disappears when every selected item is visible in the trigger.`,dataName:`countries`,data:k.slice(0,6),initialSelected:k.slice(0,4),settings:{text:`All Selected Visible`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:10,clearAll:!0}},{id:`single-selection`,title:`03. Single selection`,description:`One selected value, searchable data, and close-on-selection behavior.`,dataName:`countries`,data:k,initialSelected:k.slice(0,1),settings:{text:`Select Country`,singleSelection:!0,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`}},{id:`search-by`,title:`04. Search by specific fields`,description:`Search only in the configured object keys and keep the display label stable.`,dataName:`countries`,data:k,initialSelected:k.slice(2,5),settings:{text:`Search by Country or Capital`,enableSearchFilter:!0,searchBy:[`itemName`,`capital`],searchPlaceholderText:`Search country or capital`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`grouped`,title:`05. Grouped options`,description:`Group rows by category and select or unselect a whole group.`,dataName:`countries`,data:k,initialSelected:[k[0],k[4]],settings:{text:`Grouped Countries`,enableSearchFilter:!0,groupBy:`category`,selectGroup:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`limit-selection`,title:`06. Selection limit`,description:`Stop new selections after the configured limit while keeping removal available.`,dataName:`countries`,data:k,initialSelected:k.slice(0,2),settings:{text:`Pick Two Countries`,enableSearchFilter:!0,limitSelection:2,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2}},{id:`custom-rendering`,title:`07. Custom item and badge rendering`,description:`Use Vue render functions for menu rows and selected chips.`,dataName:`countries`,data:k,initialSelected:k.slice(0,3),customRenderer:!0,settings:{text:`Countries With Renderers`,enableSearchFilter:!0,groupBy:`region`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`add-filter-item`,title:`08. Search and add item`,description:`Create a new option from the current filter text and select it immediately.`,dataName:`countries`,data:k.slice(0,6),initialSelected:k.slice(0,2),addFromFilter:!0,settings:{text:`Add Country`,enableSearchFilter:!0,addNewItemOnFilter:!0,addNewButtonText:`Add country`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`disabled-toggle`,title:`09. Disabled state`,description:`Toggle disabled mode without losing the controlled selection state.`,dataName:`countries`,data:k.slice(0,6),initialSelected:k.slice(0,3),allowDisabledToggle:!0,settings:{text:`Toggle Disabled`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`form-validation`,title:`10. Controlled form validation`,description:`Keep selected items in Vue form state and derive validation from the array.`,dataName:`skills`,data:ne,initialSelected:ne.slice(0,1),settings:{text:`Select Skills`,enableSearchFilter:!0,groupBy:`category`,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}},{id:`long-list`,title:`11. Long list with keyboard scroll`,description:`A compact max height keeps the list scrollable with pointer and keyboard navigation.`,dataName:`people`,data:M.slice(0,120),initialSelected:M.slice(0,3),settings:{text:`Select People`,enableSearchFilter:!0,maxHeight:140,primaryKey:`id`,labelKey:`name`,badgeShowLimit:3}},{id:`lazy-loading`,title:`12. Local lazy loading`,description:`Append more rows when the scrollable menu reaches the end.`,dataName:`people`,data:M.slice(0,30),initialSelected:[],lazy:!0,settings:{text:`Lazy People`,enableSearchFilter:!0,lazyLoading:!0,maxHeight:140,primaryKey:`id`,labelKey:`name`,badgeShowLimit:3}},{id:`body-overlay`,title:`13. Dialog and overflow container`,description:`Use appendToBody/tagToBody to escape clipping inside overflow, dialogs, drawers, and modal surfaces.`,dataName:`countries`,data:k,initialSelected:k.slice(0,3),overflowDemo:!0,settings:{text:`Dialog dropdown`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2,maxHeight:180,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`}},{id:`body-overlay-top`,title:`14. Body overlay auto direction`,description:`Prefer opening above the trigger, but let autoPosition choose below when the viewport has room.`,dataName:`countries`,data:k,initialSelected:k.slice(2,5),overflowDemo:!0,settings:{text:`Dialog dropdown top`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:2,maxHeight:180,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`top`}},{id:`methods`,title:`15. Instance methods`,description:`Open, close, focus search, select all, and clear from external controls.`,dataName:`countries`,data:k.slice(0,8),initialSelected:k.slice(0,2),showMethods:!0,settings:{text:`Method Controlled`,enableSearchFilter:!0,primaryKey:`id`,labelKey:`itemName`,badgeShowLimit:3}}],ie=[{path:`basic`,label:`Basic example`,example:P[0]},{path:`allvisible`,label:`All visible counter`,example:P[1]},{path:`singleselection`,label:`Single selection`,example:P[2]},{path:`searchfilter`,label:`Search filter`,example:P[3]},{path:`groupby`,label:`Group By`,example:P[4]},{path:`limitselection`,label:`Selection limit`,example:P[5]},{path:`templating`,label:`Templating`,example:P[6]},{path:`searchfilterAddNewItem`,label:`Search and Add New Item`,example:P[7]},{path:`disabledstate`,label:`Disabled state`,example:P[8]},{path:`usinginform`,label:`Using in Forms`,example:P[9]},{path:`virtualscrolling`,label:`Virtual Scrolling`,example:P[10]},{path:`lazyloading`,label:`Lazy Loading`,example:P[11]},{path:`usingInDialog`,label:`Using Inside Dialog`,example:P[12]},{path:`bodyOverlayTop`,label:`Body Overlay Auto`,example:P[13]},{path:`dropdownMethods`,label:`Methods`,example:P[14]}];function F(){return window.location.hash.replace(/^#\/?/,``).trim()||`basic`}l.default.component(`example-preview`,{components:{VueMultiselectDropdown:ee},props:{example:{type:Object,required:!0},skin:{type:String,required:!0}},data(){return{dataItems:this.example.data.slice(),selectedItems:this.example.initialSelected.slice(),disabled:!1,formName:``,formEmail:`ascasc@aa.com`}},computed:{settings(){return re(this.example.settings,this.skin,this.example.allowDisabledToggle?this.disabled:!1)},formIsValid(){return this.formEmail.trim().length>0&&this.selectedItems.length>0},formValue(){return{name:this.formName,email:this.formEmail,skills:this.selectedItems}}},watch:{example:{handler(){this.dataItems=this.example.data.slice(),this.selectedItems=this.example.initialSelected.slice(),this.disabled=!1,this.formName=``,this.formEmail=`ascasc@aa.com`},deep:!1}},methods:{pushLog(e){},onChange(e){this.selectedItems=e,this.pushLog(`${this.example.title}: ${e.length} selected`)},appendNextChunk(){if(!this.example.lazy)return;let e=M.slice(this.dataItems.length,this.dataItems.length+20);if(!e.length){this.pushLog(`${this.example.title}: no more lazy rows`);return}this.dataItems=this.dataItems.concat(e),this.pushLog(`${this.example.title}: appended ${e.length} rows`)},handleCreateCountry(e,t){let n=t||N(e,this.dataItems.length);this.dataItems=this.dataItems.concat(n),this.pushLog(`${this.example.title}: created ${e}`)},renderOption(e,t,n){return n(`div`,{class:`country-row`},[n(`span`,{class:`country-flag`},[e.flag||`NA`]),n(`span`,[n(`strong`,[t.label]),n(`small`,[e.capital||e.category||``])])])},renderBadge(e,t,n){return n(`span`,{class:`country-badge`},[`${e.flag||`NA`} ${e.name||t.label}`])},openDropdown(){this.$refs.dropdown.openDropdown()},closeDropdown(){this.$refs.dropdown.closeDropdown()},focusSearch(){this.$refs.dropdown.focusSearch()},selectAll(){this.$refs.dropdown.selectAll()},clearSelection(){this.$refs.dropdown.clearSelection()}},template:`
    <div class="preview-example">
      <div class="example-live" v-if="example.id === 'form-validation'">
        <form class="docs-form" @submit.prevent="pushLog(example.title + ': submitted')">
          <label class="form-field">
            <span>Name</span>
            <input v-model="formName" />
          </label>

          <label class="form-field">
            <span>Email Address <em>* required</em></span>
            <input v-model="formEmail" />
          </label>

          <div class="form-field">
            <span>Skills <em>* required</em></span>
            <vue-multiselect-dropdown
              ref="dropdown"
              :data="dataItems"
              :value="selectedItems"
              :settings="settings"
              @input="onChange"
            />
          </div>

          <button class="submit-button" type="submit" :disabled="!formIsValid">Submit</button>
        </form>

        <table class="form-output">
          <tbody>
            <tr><td><label>Name</label></td><td>{{ formName }}</td></tr>
            <tr><td><label>Email</label></td><td>{{ formEmail }}</td></tr>
            <tr><td><label>Skills</label></td><td>{{ selectedItems.map((item) => item.itemName).join(', ') }}</td></tr>
          </tbody>
        </table>

        <p class="form-json">{{ JSON.stringify(formValue) }}</p>
        <p class="form-json">Form status: "{{ formIsValid ? 'VALID' : 'INVALID' }}"</p>
      </div>

      <div class="example-live" v-else>
        <div v-if="example.allowDisabledToggle" class="method-bar">
          <button class="small-button" type="button" @click="disabled = !disabled">
            {{ disabled ? 'Enable' : 'Disable' }}
          </button>
        </div>

        <div v-if="example.showMethods" class="method-bar">
          <button type="button" @click="openDropdown">Open</button>
          <button type="button" @click="closeDropdown">Close</button>
          <button type="button" @click="focusSearch">Focus search</button>
          <button type="button" @click="selectAll">Select all</button>
          <button type="button" @click="clearSelection">Clear</button>
        </div>

        <div :class="example.overflowDemo ? 'overflow-lab' : null">
          <div v-if="example.overflowDemo" class="overflow-label">
            Simulated dialog surface with <code>overflow: hidden</code>
          </div>
          <vue-multiselect-dropdown
            ref="dropdown"
            :data="dataItems"
            :value="selectedItems"
            :settings="settings"
            :render-item="example.customRenderer ? renderOption : undefined"
            :render-badge="example.customRenderer ? renderBadge : undefined"
            @input="onChange"
            @add-filter-new-item="handleCreateCountry"
            @scroll-to-end="appendNextChunk"
            @open="pushLog(example.title + ': opened')"
            @close="pushLog(example.title + ': closed')"
          />
        </div>
      </div>
    </div>
  `}),new l.default({el:`#app`,components:{VueMultiselectDropdown:ee},data(){return{routes:ie,currentPath:F(),skin:`classic`}},computed:{currentRoute(){return this.routes.find(e=>e.path===this.currentPath)||this.routes[0]},installCode(){return`npm install @stackline/vue-multiselect-dropdown@${O} --save-exact`},setupCode(){return[`import Vue from 'vue';`,`import { VueMultiselect } from '@stackline/vue-multiselect-dropdown';`,``,`Vue.use(VueMultiselect);`].join(`
`)},settingsCode(){return[`settings: {`,`  text: 'Select countries',`,`  primaryKey: 'id',`,`  labelKey: 'itemName',`,`  enableSearchFilter: true,`,`  badgeShowLimit: 3,`,`  clearAll: true,`,`  skin: 'classic'`,`}`].join(`
`)},renderCode(){return[`<vue-multiselect-dropdown`,`  :data="countries"`,`  v-model="selectedCountries"`,`  :settings="settings"`,`/>`].join(`
`)},featurePills(){return[`Vue v-model`,`Search`,`Grouping`,`Render functions`,`Lazy loading`,`Instance methods`,`ADA-compliant keyboard/ARIA`,`appendToBody`,`Classic and modern skins`]},apiCards(){return[{kicker:`Component`,title:`<vue-multiselect-dropdown />`,copy:`Use a controlled Vue array through v-model while keeping the settings object familiar.`},{kicker:`Settings`,title:`settings.skin`,copy:`Use settings.skin for classic, material, dark, custom, and brand visual modes. The legacy theme alias stays compatibility-only.`},{kicker:`Events`,title:`@select and @de-select`,copy:`Vue events expose selection changes, select-all, clear-all, lazy scrolling, and custom item creation.`},{kicker:`Rendering`,title:`renderItem and renderBadge`,copy:`Pass Vue render functions for option rows and selected chips.`},{kicker:`Accessibility`,title:`ADA-compliant keyboard and ARIA support`,copy:`The trigger, clear-all action, option rows, lazy lists, selected chips, and listbox states expose keyboard flow and ARIA metadata.`},{kicker:`Dialogs`,title:`appendToBody / tagToBody`,copy:`Set appendToBody inside modals, drawers, and overflow containers so the list is moved to document.body and avoids clipping.`}]}},created(){let e=()=>{this.currentPath=F()};window.location.hash||(window.history.replaceState(null,``,`#/basic`),this.currentPath=`basic`),window.addEventListener(`hashchange`,e),this.$once(`hook:beforeDestroy`,function(){window.removeEventListener(`hashchange`,e)})},template:`
    <div class="docs-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">V</div>
          <div>
            <div class="topbar-eyebrow">Stackline maintained line</div>
            <h1>@stackline/vue-multiselect-dropdown</h1>
          </div>
        </div>

        <div class="topbar-meta">
          <span class="meta-pill">Vue 2.x</span>
          <span class="meta-pill primary">v${O}</span>
        </div>
      </header>

      <div class="docs-layout">
        <aside class="rail">
          <section class="rail-card">
            <div class="rail-label">Overview</div>
            <a class="rail-link" href="#install">Install</a>
            <a class="rail-link" href="#preview">Preview</a>
            <a class="rail-link" href="live/" target="_blank" rel="noopener">Live project</a>
            <a class="rail-link" href="#api">API</a>
          </section>

          <section class="rail-card">
            <div class="rail-label">Examples</div>
            <nav class="example-nav" aria-label="Vue multiselect examples">
              <a
                v-for="route in routes"
                :key="route.path"
                :class="route.path === currentRoute.path ? 'example-link active' : 'example-link'"
                :href="'#/' + route.path">
                {{ route.label }}
              </a>
            </nav>
          </section>

          <section class="rail-card">
            <div class="rail-label">Release line</div>
            <div class="release-item"><strong>Package</strong><span>${O}</span></div>
            <div class="release-item"><strong>Vue</strong><span>${te}</span></div>
            <div class="release-item"><strong>Docs path</strong><span>/vue-2/</span></div>
            <div class="release-item"><strong>Promise</strong><span>ADA-compliant keyboard/ARIA support</span></div>
          </section>
        </aside>

        <main class="docs-main">
          <section class="preview-card" id="preview">
            <div class="preview-head">
              <div>
                <div class="setup-label">Live preview</div>
                <h3>{{ currentRoute.label }}</h3>
                <p>Running against package line <code>${O}</code> and Vue <code>${te}</code>.</p>
              </div>
              <span class="status-pill">Classic selector preserved</span>
            </div>

            <div class="preview-canvas">
              <example-preview :key="currentRoute.path" :example="currentRoute.example" :skin="skin" />
            </div>
          </section>

          <section class="hero-card">
            <span class="hero-badge">Vue 2 family · Multiselect dropdown</span>
            <h2>Material-inspired multiselect, shaped for maintained Vue 2 applications.</h2>
            <p class="hero-copy">
              This Vue 2 line keeps the familiar Stackline settings contract while using idiomatic Vue v-model,
              render functions, instance methods, and component events. Version <code>${O}</code> includes
              ADA-compliant keyboard and ARIA behavior, accurate badge counters, clear-all controls, dialog-safe body
              overlays, and matching classic/material/dark/custom/brand skins.
            </p>

            <div class="pill-row">
              <span class="feature-pill" v-for="pill in featurePills" :key="pill">{{ pill }}</span>
            </div>

            <div class="compat-grid">
              <div class="compat-card"><strong>Vue v-model first</strong>Keep selection in component state through <code>v-model</code> and <code>@input</code>.</div>
              <div class="compat-card"><strong>Consistent behavior where it matters</strong>Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.</div>
              <div class="compat-card"><strong>Render functions instead of templates</strong>Customize option rows and selected chips with Vue render functions.</div>
            </div>
          </section>

          <section class="setup-grid" id="install">
            <article class="setup-card"><div class="setup-label">Step 1</div><h3>Install the package</h3><pre>{{ installCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 2</div><h3>Register the plugin</h3><pre>{{ setupCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 3</div><h3>Create settings</h3><pre>{{ settingsCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 4</div><h3>Render with v-model</h3><pre>{{ renderCode }}</pre></article>
          </section>

          <section class="api-grid" id="api">
            <article class="api-card" v-for="card in apiCards" :key="card.title">
              <div class="setup-label">{{ card.kicker }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.copy }}</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  `});