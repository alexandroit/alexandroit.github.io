(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),ee=e=>x(e).slice(8,-1),S=e=>x(e)===`[object Object]`,te=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ne=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),re=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ie=/-\w/g,C=re(e=>e.replace(ie,e=>e.slice(1).toUpperCase())),ae=/\B([A-Z])/g,oe=re(e=>e.replace(ae,`-$1`).toLowerCase()),se=re(e=>e.charAt(0).toUpperCase()+e.slice(1)),ce=re(e=>e?`on${se(e)}`:``),le=(e,t)=>!Object.is(e,t),ue=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},w=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},de=e=>{let t=parseFloat(e);return isNaN(t)?e:t},fe,pe=()=>fe||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function me(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?ve(r):me(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var he=/;(?![^(]*\))/g,ge=/:([^]+)/,_e=/\/\*[^]*?\*\//g;function ve(e){let t={};return e.replace(_e,``).split(he).forEach(e=>{if(e){let n=e.split(ge);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function T(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=T(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ye=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,be=e(ye);ye+``;function xe(e){return!!e||e===``}function Se(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ce(e[r],t[r]);return n}function Ce(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?Se(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Ce(e[n],t[n]))return!1}}return String(e)===String(t)}var we=e=>!!(e&&e.__v_isRef===!0),E=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?we(e)?E(e.value):JSON.stringify(e,Te,2):String(e),Te=(e,t)=>we(t)?Te(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ee(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ee(e))}:_(t)?Ee(t):v(t)&&!d(t)&&!S(t)?String(t):t,Ee=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,D,De=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&D&&(D.active?(this.parent=D,this.index=(D.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=D;try{return D=this,e()}finally{D=t}}}on(){++this._on===1&&(this.prevScope=D,D=this)}off(){if(this._on>0&&--this._on===0){if(D===this)D=this.prevScope;else{let e=D;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Oe(){return D}var O,ke=new WeakSet,Ae=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,D&&(D.active?D.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ke.has(this)&&(ke.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qe(this),Le(this);let e=O,t=Ue;O=this,Ue=!0;try{return this.fn()}finally{Re(this),O=e,Ue=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ve(e);this.deps=this.depsTail=void 0,qe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ke.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ze(this)&&this.run()}get dirty(){return ze(this)}},je=0,Me,Ne;function Pe(e,t=!1){if(e.flags|=8,t){e.next=Ne,Ne=e;return}e.next=Me,Me=e}function Fe(){je++}function Ie(){if(--je>0)return;if(Ne){let e=Ne;for(Ne=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Me;){let t=Me;for(Me=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Le(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Re(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ve(r),He(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Be(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Be(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Je)||(e.globalVersion=Je,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ze(e))))return;e.flags|=2;let t=e.dep,n=O,r=Ue;O=e,Ue=!0;try{Le(e);let n=e.fn(e._value);(t.version===0||le(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{O=n,Ue=r,Re(e),e.flags&=-3}}function Ve(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ve(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function He(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ue=!0,We=[];function Ge(){We.push(Ue),Ue=!1}function Ke(){let e=We.pop();Ue=e===void 0?!0:e}function qe(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=O;O=void 0;try{t()}finally{O=e}}}var Je=0,Ye=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xe=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!O||!Ue||O===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==O)t=this.activeLink=new Ye(O,this),O.deps?(t.prevDep=O.depsTail,O.depsTail.nextDep=t,O.depsTail=t):O.deps=O.depsTail=t,Ze(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=O.depsTail,t.nextDep=void 0,O.depsTail.nextDep=t,O.depsTail=t,O.deps===t&&(O.deps=e)}return t}trigger(e){this.version++,Je++,this.notify(e)}notify(e){Fe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ie()}}};function Ze(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ze(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Qe=new WeakMap,$e=Symbol(``),et=Symbol(``),tt=Symbol(``);function k(e,t,n){if(Ue&&O){let t=Qe.get(e);t||Qe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Xe),r.map=t,r.key=n),r.track()}}function nt(e,t,n,r,i,a){let o=Qe.get(e);if(!o){Je++;return}let s=e=>{e&&e.trigger()};if(Fe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&te(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===tt||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(tt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get($e)),f(e)&&s(o.get(et)));break;case`delete`:i||(s(o.get($e)),f(e)&&s(o.get(et)));break;case`set`:f(e)&&s(o.get($e));break}}Ie()}function rt(e){let t=A(e);return t===e?t:(k(t,`iterate`,tt),Ht(e)?t:t.map(Gt))}function it(e){return k(e=A(e),`iterate`,tt),e}function at(e,t){return Vt(e)?Kt(Bt(e)?Gt(t):t):Gt(t)}var ot={__proto__:null,[Symbol.iterator](){return st(this,Symbol.iterator,e=>at(this,e))},concat(...e){return rt(this).concat(...e.map(e=>d(e)?rt(e):e))},entries(){return st(this,`entries`,e=>(e[1]=at(this,e[1]),e))},every(e,t){return lt(this,`every`,e,t,void 0,arguments)},filter(e,t){return lt(this,`filter`,e,t,e=>e.map(e=>at(this,e)),arguments)},find(e,t){return lt(this,`find`,e,t,e=>at(this,e),arguments)},findIndex(e,t){return lt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return lt(this,`findLast`,e,t,e=>at(this,e),arguments)},findLastIndex(e,t){return lt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return lt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return dt(this,`includes`,e)},indexOf(...e){return dt(this,`indexOf`,e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return dt(this,`lastIndexOf`,e)},map(e,t){return lt(this,`map`,e,t,void 0,arguments)},pop(){return ft(this,`pop`)},push(...e){return ft(this,`push`,e)},reduce(e,...t){return ut(this,`reduce`,e,t)},reduceRight(e,...t){return ut(this,`reduceRight`,e,t)},shift(){return ft(this,`shift`)},some(e,t){return lt(this,`some`,e,t,void 0,arguments)},splice(...e){return ft(this,`splice`,e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return ft(this,`unshift`,e)},values(){return st(this,`values`,e=>at(this,e))}};function st(e,t,n){let r=it(e),i=r[t]();return r!==e&&!Ht(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ct=Array.prototype;function lt(e,t,n,r,i,a){let o=it(e),s=o!==e&&!Ht(e),c=o[t];if(c!==ct[t]){let t=c.apply(e,a);return s?Gt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,at(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ut(e,t,n,r){let i=it(e),a=i!==e&&!Ht(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=at(e,t)),n.call(this,t,at(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?at(e,c):c}function dt(e,t,n){let r=A(e);k(r,`iterate`,tt);let i=r[t](...n);return(i===-1||i===!1)&&Ut(n[0])?(n[0]=A(n[0]),r[t](...n)):i}function ft(e,t,n=[]){Ge(),Fe();let r=A(e)[t].apply(e,n);return Ie(),Ke(),r}var pt=e(`__proto__,__v_isRef,__isVue`),mt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ht(e){_(e)||(e=String(e));let t=A(this);return k(t,`has`,e),t.hasOwnProperty(e)}var gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Pt:Nt:i?Mt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=ot[t]))return e;if(t===`hasOwnProperty`)return ht}let o=Reflect.get(e,t,j(e)?e:n);if((_(t)?mt.has(t):pt(t))||(r||k(e,`get`,t),i))return o;if(j(o)){let e=a&&te(t)?o:o.value;return r&&v(e)?Rt(e):e}return v(o)?r?Rt(o):It(o):o}},_t=class extends gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&te(t);if(!this._isShallow){let e=Vt(i);if(!Ht(n)&&!Vt(n)&&(i=A(i),n=A(n)),!a&&j(i)&&!j(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,j(e)?e:r);return e===A(r)&&(o?le(n,i)&&nt(e,`set`,t,n,i):nt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&nt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!mt.has(t))&&k(e,`has`,t),n}ownKeys(e){return k(e,`iterate`,d(e)?`length`:$e),Reflect.ownKeys(e)}},vt=class extends gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},yt=new _t,bt=new vt,xt=new _t(!0),St=e=>e,Ct=e=>Reflect.getPrototypeOf(e);function wt(e,t,n){return function(...r){let i=this.__v_raw,a=A(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?St:t?Kt:Gt;return!t&&k(a,`iterate`,l?et:$e),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Tt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Et(e,t){let n={get(n){let r=this.__v_raw,i=A(r),a=A(n);e||(le(n,a)&&k(i,`get`,n),k(i,`get`,a));let{has:o}=Ct(i),s=t?St:e?Kt:Gt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&k(A(t),`iterate`,$e),t.size},has(t){let n=this.__v_raw,r=A(n),i=A(t);return e||(le(t,i)&&k(r,`has`,t),k(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=A(a),s=t?St:e?Kt:Gt;return!e&&k(o,`iterate`,$e),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Tt(`add`),set:Tt(`set`),delete:Tt(`delete`),clear:Tt(`clear`)}:{add(e){let n=A(this),r=Ct(n),i=A(e),a=!t&&!Ht(e)&&!Vt(e)?i:e;return r.has.call(n,a)||le(e,a)&&r.has.call(n,e)||le(i,a)&&r.has.call(n,i)||(n.add(a),nt(n,`add`,a,a)),this},set(e,n){!t&&!Ht(n)&&!Vt(n)&&(n=A(n));let r=A(this),{has:i,get:a}=Ct(r),o=i.call(r,e);o||=(e=A(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?le(n,s)&&nt(r,`set`,e,n,s):nt(r,`add`,e,n),this},delete(e){let t=A(this),{has:n,get:r}=Ct(t),i=n.call(t,e);i||=(e=A(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&nt(t,`delete`,e,void 0,a),o},clear(){let e=A(this),t=e.size!==0,n=e.clear();return t&&nt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=wt(r,e,t)}),n}function Dt(e,t){let n=Et(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Ot={get:Dt(!1,!1)},kt={get:Dt(!1,!0)},At={get:Dt(!0,!1)},jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap;function Ft(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function It(e){return Vt(e)?e:zt(e,!1,yt,Ot,jt)}function Lt(e){return zt(e,!1,xt,kt,Mt)}function Rt(e){return zt(e,!0,bt,At,Nt)}function zt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Ft(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Bt(e){return Vt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function Ht(e){return!!(e&&e.__v_isShallow)}function Ut(e){return e?!!e.__v_raw:!1}function A(e){let t=e&&e.__v_raw;return t?A(t):e}function Wt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&w(e,`__v_skip`,!0),e}var Gt=e=>v(e)?It(e):e,Kt=e=>v(e)?Rt(e):e;function j(e){return e?e.__v_isRef===!0:!1}function M(e){return qt(e,!1)}function qt(e,t){return j(e)?e:new Jt(e,t)}var Jt=class{constructor(e,t){this.dep=new Xe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:A(e),this._value=t?e:Gt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ht(e)||Vt(e);e=n?e:A(e),le(e,t)&&(this._rawValue=e,this._value=n?e:Gt(e),this.dep.trigger())}};function N(e){return j(e)?e.value:e}var Yt={get:(e,t,n)=>t===`__v_raw`?e:N(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return j(i)&&!j(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xt(e){return Bt(e)?e:new Proxy(e,Yt)}var Zt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Je-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&O!==this)return Pe(this,!0),!0}get value(){let e=this.dep.track();return Be(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Qt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Zt(r,i,n)}var $t={},en=new WeakMap,tn=void 0;function nn(e,t=!1,n=tn){if(n){let t=en.get(n);t||en.set(n,t=[]),t.push(e)}}function rn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Ht(e)||o===!1||o===0?an(e,1):an(e),m,g,_,v,y=!1,b=!1;if(j(e)?(g=()=>e.value,y=Ht(e)):Bt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Bt(e)||Ht(e)),g=()=>e.map(e=>{if(j(e))return e.value;if(Bt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ge();try{_()}finally{Ke()}}let t=tn;tn=m;try{return f?f(e,3,[v]):e(v)}finally{tn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>an(e(),t)}let x=Oe(),ee=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return ee(),n}}let S=b?Array(e.length).fill($t):$t,te=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>le(e,S[t])):le(t,S))){_&&_();let e=tn;tn=m;try{let e=[t,S===$t?void 0:b&&S[0]===$t?[]:S,v];S=t,f?f(n,3,e):n(...e)}finally{tn=e}}}else m.run()};return u&&u(te),m=new Ae(g),m.scheduler=l?()=>l(te,!1):te,v=e=>nn(e,!1,m),_=m.onStop=()=>{let e=en.get(m);if(e){if(f)f(e,4);else for(let t of e)t();en.delete(m)}},n?a?te(!0):S=m.run():l?l(te.bind(null,!0),!0):m.run(),ee.pause=m.pause.bind(m),ee.resume=m.resume.bind(m),ee.stop=ee,ee}function an(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,j(e))an(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)an(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{an(e,t,n)});else if(S(e)){for(let r in e)an(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&an(e[r],t,n)}return e}function on(e,t,n,r){try{return r?e(...r):e()}catch(e){cn(e,t,n)}}function sn(e,t,n,r){if(h(e)){let i=on(e,t,n,r);return i&&y(i)&&i.catch(e=>{cn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(sn(e[a],t,n,r));return i}}function cn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ge(),on(o,null,10,[e,i,a]),Ke();return}}ln(e,r,a,i,s)}function ln(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var P=[],un=-1,dn=[],fn=null,pn=0,mn=Promise.resolve(),hn=null;function gn(e){let t=hn||mn;return e?t.then(this?e.bind(this):e):t}function _n(e){let t=un+1,n=P.length;for(;t<n;){let r=t+n>>>1,i=P[r],a=Cn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function vn(e){if(!(e.flags&1)){let t=Cn(e),n=P[P.length-1];!n||!(e.flags&2)&&t>=Cn(n)?P.push(e):P.splice(_n(t),0,e),e.flags|=1,yn()}}function yn(){hn||=mn.then(wn)}function bn(e){d(e)?dn.push(...e):fn&&e.id===-1?fn.splice(pn+1,0,e):e.flags&1||(dn.push(e),e.flags|=1),yn()}function xn(e,t,n=un+1){for(;n<P.length;n++){let t=P[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;P.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Sn(e){if(dn.length){let e=[...new Set(dn)].sort((e,t)=>Cn(e)-Cn(t));if(dn.length=0,fn){fn.push(...e);return}for(fn=e,pn=0;pn<fn.length;pn++){let e=fn[pn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}fn=null,pn=0}}var Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wn(e){try{for(un=0;un<P.length;un++){let e=P[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),on(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<P.length;un++){let e=P[un];e&&(e.flags&=-2)}un=-1,P.length=0,Sn(e),hn=null,(P.length||dn.length)&&wn(e)}}var F=null,Tn=null;function En(e){let t=F;return F=e,Tn=e&&e.type.__scopeId||null,t}function I(e,t=F,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ii(-1);let i=En(t),a;try{a=e(...n)}finally{En(i),r._d&&Ii(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dn(e,n){if(F===null)return e;let r=ha(F),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&an(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function On(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ge(),sn(c,n,8,[e.el,s,e,t]),Ke())}}function kn(e,t){if(K){let n=K.provides,r=K.parent&&K.parent.provides;r===n&&(n=K.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){let r=ea();if(r||Br){let i=Br?Br._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var jn=Symbol.for(`v-scx`),Mn=()=>An(jn);function Nn(e,t,n){return Pn(e,t,n)}function Pn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(oa){if(c===`sync`){let e=Mn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=K;u.call=(e,t,n)=>sn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{R(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():vn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=rn(e,n,u);return oa&&(f?f.push(h):d&&h()),h}function Fn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?In(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ra(this),s=Pn(i,a.bind(r),n);return o(),s}function In(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Ln=Symbol(`_vte`),Rn=e=>e.__isTeleport,zn=Symbol(`_leaveCb`);function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Hn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Un=new WeakMap;function Wn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Wn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Kn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Wn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ha(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=A(v),b=v===t?i:e=>Hn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Hn(_,t));if(m!=null&&m!==p){if(Gn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(j(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))on(p,f,12,[l,_]);else{let t=g(p),n=j(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Un.delete(e)};t.id=-1,Un.set(e,t),R(t,r)}else Gn(e),i()}}}function Gn(e){let t=Un.get(e);t&&(t.flags|=8,Un.delete(e))}pe().requestIdleCallback,pe().cancelIdleCallback;var Kn=e=>!!e.type.__asyncLoader,qn=e=>e.type.__isKeepAlive;function Jn(e,t){Xn(e,`a`,t)}function Yn(e,t){Xn(e,`da`,t)}function Xn(e,t,n=K){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Qn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)qn(e.parent.vnode)&&Zn(r,t,n,e),e=e.parent}}function Zn(e,t,n,r){let i=Qn(t,e,r,!0);ar(()=>{c(r[t],i)},n)}function Qn(e,t,n=K,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ge();let i=ra(n),a=sn(t,n,e,r);return i(),Ke(),a};return r?i.unshift(a):i.push(a),a}}var $n=e=>(t,n=K)=>{(!oa||e===`sp`)&&Qn(e,(...e)=>t(...e),n)},er=$n(`bm`),tr=$n(`m`),nr=$n(`bu`),rr=$n(`u`),ir=$n(`bum`),ar=$n(`um`),or=$n(`sp`),sr=$n(`rtg`),cr=$n(`rtc`);function lr(e,t=K){Qn(`ec`,e,t)}var ur=`components`,dr=Symbol.for(`v-ndc`);function fr(e){return g(e)?pr(ur,e,!1)||e:e||dr}function pr(e,t,n=!0,r=!1){let i=F||K;if(i){let n=i.type;if(e===ur){let e=ga(n,!1);if(e&&(e===t||e===C(t)||e===se(C(t))))return n}let a=mr(i[e]||n[e],t)||mr(i.appContext[e],t);return!a&&r?n:a}}function mr(e,t){return e&&(e[t]||e[C(t)]||e[se(C(t))])}function hr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Bt(e),r=!1,s=!1;n&&(r=!Ht(e),s=Vt(e),e=it(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Kt(Gt(e[n])):Gt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function gr(e,t,n={},r,i){if(F.ce||F.parent&&Kn(F.parent)&&F.parent.ce){let e=Object.keys(n).length>0;return t!=="default"&&(n.name=t),B(),H(z,null,[W(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),B();let o=a&&_r(a(n)),s=n.key||o&&o.key,c=H(z,{key:(s&&!_(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function _r(e){return e.some(e=>Ri(e)?!(e.type===Ai||e.type===z&&!_r(e.children)):!0)?e:null}var vr=e=>e?aa(e)?ha(e):vr(e.parent):null,yr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vr(e.parent),$root:e=>vr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Or(e),$forceUpdate:e=>e.f||=()=>{vn(e.update)},$nextTick:e=>e.n||=gn.bind(e.proxy),$watch:e=>Fn.bind(e)}),br=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),xr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(br(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Cr&&(s[n]=0)}let d=yr[n],f,p;if(d)return n===`$attrs`&&k(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return br(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||br(n,c)||u(o,c)||u(i,c)||u(yr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Sr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Cr=!0;function wr(e){let t=Or(e),n=e.proxy,i=e.ctx;Cr=!1,t.beforeCreate&&Er(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:ee,destroyed:S,unmounted:te,render:ne,renderTracked:re,renderTriggered:ie,errorCaptured:C,serverPrefetch:ae,expose:oe,inheritAttrs:se,components:ce,directives:le,filters:ue}=t;if(u&&Tr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=It(t))}if(Cr=!0,o)for(let e in o){let t=o[e],a=q({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Dr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{kn(t,e[t])})}f&&Er(f,e,`c`);function w(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(w(er,p),w(tr,m),w(nr,g),w(rr,_),w(Jn,y),w(Yn,b),w(lr,C),w(cr,re),w(sr,ie),w(ir,ee),w(ar,te),w(or,ae),d(oe))if(oe.length){let t=e.exposed||={};oe.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ne&&e.render===r&&(e.render=ne),se!=null&&(e.inheritAttrs=se),ce&&(e.components=ce),le&&(e.directives=le),ae&&Vn(e)}function Tr(e,t,n=r){d(e)&&(e=Nr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?An(r.from||n,r.default,!0):An(r.from||n):An(r),j(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Er(e,t,n){sn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dr(e,t,n,r){let i=r.includes(`.`)?In(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Nn(i,n)}else if(h(e))Nn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Dr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Nn(i,r,e)}}function Or(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>kr(c,e,o,!0)),kr(c,t,o)),v(t)&&a.set(t,c),c}function kr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&kr(e,a,n,!0),i&&i.forEach(t=>kr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Ar[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Ar={data:jr,props:Fr,emits:Fr,methods:Pr,computed:Pr,beforeCreate:L,created:L,beforeMount:L,mounted:L,beforeUpdate:L,updated:L,beforeDestroy:L,beforeUnmount:L,destroyed:L,unmounted:L,activated:L,deactivated:L,errorCaptured:L,serverPrefetch:L,components:Pr,directives:Pr,watch:Ir,provide:jr,inject:Mr};function jr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Mr(e,t){return Pr(Nr(e),Nr(t))}function Nr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function L(e,t){return e?[...new Set([].concat(e,t))]:t}function Pr(e,t){return e?s(Object.create(null),e,t):t}function Fr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Sr(e),Sr(t??{})):t}function Ir(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=L(e[r],t[r]);return n}function Lr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Rr=0;function zr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Lr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Rr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ya,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||W(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ha(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(sn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Br;Br=l;try{return e()}finally{Br=t}}};return l}}var Br=null,Vr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${C(t)}Modifiers`]||e[`${oe(t)}Modifiers`];function Hr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Vr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(de)));let c,l=i[c=ce(n)]||i[c=ce(C(n))];!l&&o&&(l=i[c=ce(oe(n))]),l&&sn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,sn(u,e,6,a)}}var Ur=new WeakMap;function Wr(e,t,n=!1){let r=n?Ur:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Wr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Gr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,oe(t))||u(e,t))}function Kr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=En(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Ki(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Ki(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:qr(c)}}catch(t){Mi.length=0,cn(t,e,1),v=W(Ai)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Jr(y,a)),b=Wi(b,y,!1,!0))}return n.dirs&&(b=Wi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(b,n.transition),v=b,En(_),v}var qr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Jr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Yr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Zr(o,r,n)&&!Gr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Xr(r,o,l):!0:!!o;return!1}function Xr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Zr(t,e,a)&&!Gr(n,a))return!0}return!1}function Zr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!Ce(r,i):r!==i}function Qr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var $r={},ei=()=>Object.create($r),ti=e=>Object.getPrototypeOf(e)===$r;function ni(e,t,n,r=!1){let i={},a=ei();e.propsDefaults=Object.create(null),ii(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Lt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ri(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=A(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Gr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=C(o);i[t]=ai(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ii(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=oe(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ai(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&nt(e.attrs,`set`,``)}function ii(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ne(t))continue;let l=n[t],d;a&&u(a,d=C(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Gr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=A(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ai(a,n,s,i[s],e,!u(i,s))}}return s}function ai(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ra(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===oe(n))&&(r=!0))}return r}var oi=new WeakMap;function si(e,r,i=!1){let a=i?oi:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=si(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=C(c[e]);ci(n)&&(l[n]=t)}else if(c)for(let e in c){let t=C(e);if(ci(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ci(e){return e[0]!==`$`&&!ne(e)}var li=e=>e===`_`||e===`_ctx`||e===`$stable`,ui=e=>d(e)?e.map(Ki):[Ki(e)],di=(e,t,n)=>{if(t._n)return t;let r=I((...e)=>ui(t(...e)),n);return r._c=!1,r},fi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(li(n))continue;let i=e[n];if(h(i))t[n]=di(n,i,r);else if(i!=null){let e=ui(i);t[n]=()=>e}}},pi=(e,t)=>{let n=ui(t);e.slots.default=()=>n},mi=(e,t,n)=>{for(let r in t)(n||!li(r))&&(e[r]=t[r])},hi=(e,t,n)=>{let r=e.slots=ei();if(e.vnode.shapeFlag&32){let e=t._;e?(mi(r,t,n),n&&w(r,`_`,e,!0)):fi(t,r)}else t&&pi(e,t)},gi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:mi(a,n,r):(o=!n.$stable,fi(n,a)),s=n}else n&&(pi(e,n),s={default:1});if(o)for(let e in a)!li(e)&&s[e]==null&&delete a[e]},R=Oi;function _i(e){return vi(e)}function vi(e,i){let a=pe();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!zi(e,t)&&(r=Ce(e),T(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case ki:y(e,t,n,r);break;case Ai:b(e,t,n,r);break;case ji:e??x(t,n,r,o);break;case z:ce(e,t,n,r,i,a,o,s,c);break;default:d&1?te(e,t,n,r,i,a,o,s,c):d&6?le(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Te)}u!=null&&i?Wn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Wn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},ee=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},te=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)re(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ae(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},re=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&C(e.children,d,null,r,i,yi(e,a),s,u),_&&On(e,null,r,`created`),ie(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ne(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Xi(f,r,e)}_&&On(e,null,r,`beforeMount`);let v=xi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&R(()=>{try{f&&Xi(f,r,e),v&&g.enter(d),_&&On(e,null,r,`mounted`)}finally{}},i)},ie=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Di(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ie(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},C=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?qi(e[l]):Ki(e[l]),t,n,r,i,a,o,s)},ae=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&bi(r,!1),(g=h.onVnodeBeforeUpdate)&&Xi(g,r,n,e),f&&On(n,e,r,`beforeUpdate`),r&&bi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?oe(e.dynamicChildren,d,l,r,i,yi(n,a),o):s||he(e,n,l,null,r,i,yi(n,a),o,!1),u>0){if(u&16)se(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&se(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&R(()=>{g&&Xi(g,r,n,e),f&&On(n,e,r,`updated`)},i)},oe=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===z||!zi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},se=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ne(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ne(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ce=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),C(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(oe(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Si(e,t,!0)):he(e,t,n,f,i,a,s,c,l)},le=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):w(t,n,r,i,a,o,c):de(e,t,c)},w=(e,t,n,r,i,a,o)=>{let s=e.component=$i(e,r,i);if(qn(e)&&(s.ctx.renderer=Te),sa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,fe,o),!e.el){let r=s.subTree=W(Ai);b(null,r,t,n),e.placeholder=r.el}}else fe(s,e,t,n,i,a,o)},de=(e,t,n)=>{let r=t.component=e.component;if(Yr(e,t,n))if(r.asyncDep&&!r.asyncResolved){me(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},fe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=wi(e);if(n){t&&(t.el=c.el,me(e,t,o)),n.asyncDep.then(()=>{R(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;bi(e,!1),t?(t.el=c.el,me(e,t,o)):t=c,n&&ue(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Xi(d,s,t,c),bi(e,!0);let f=Kr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),Ce(p),e,i,a),t.el=f.el,u===null&&Qr(e,f.el),r&&R(r,i),(d=t.props&&t.props.onVnodeUpdated)&&R(()=>Xi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Kn(t);if(bi(e,!1),l&&ue(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Xi(o,d,t),bi(e,!0),s&&D){let t=()=>{e.subTree=Kr(e),D(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Kr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&R(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;R(()=>Xi(o,d,e),i)}(t.shapeFlag&256||d&&Kn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&R(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ae(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>vn(u),bi(e,!0),l()},me=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ri(e,t.props,r,n),gi(e,t.children,n),Ge(),xn(e),Ke()},he=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){_e(l,d,n,r,i,a,o,s,c);return}else if(f&256){ge(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&Se(l,i,a),d!==l&&p(n,d)):u&16?m&16?_e(l,d,n,r,i,a,o,s,c):Se(l,i,a,!0):(u&8&&p(n,``),m&16&&C(d,n,r,i,a,o,s,c))},ge=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?qi(t[p]):Ki(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?Se(e,a,o,!0,!1,f):C(t,r,i,a,o,s,c,l,f)},_e=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?qi(t[u]):Ki(t[u]);if(zi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?qi(t[p]):Ki(t[p]);if(zi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?qi(t[u]):Ki(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)T(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?qi(t[u]):Ki(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,ee=0,S=Array(b);for(u=0;u<b;u++)S[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){T(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(S[_-h]===0&&zi(n,t[_])){i=_;break}i===void 0?T(n,a,o,!0):(S[i-h]=u+1,i>=ee?ee=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let te=x?Ci(S):n;for(_=te.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Ei(f):i;S[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==te[_]?ve(n,r,p,2):_--)}}},ve=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ve(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Te);return}if(c===z){o(a,t,n);for(let e=0;e<u.length;e++)ve(u[e],t,n,r);o(e.anchor,t,n);return}if(c===ji){ee(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[zn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),R(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[zn];a._isLeaving&&a[zn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},T=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ge(),Wn(s,null,n,e,!0),Ke()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Kn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Xi(_,t,e),u&6)xe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&On(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Te,r):l&&!l.hasOnce&&(a!==z||d>0&&d&64)?Se(l,t,n,!1,!0):(a===z&&d&384||!i&&u&16)&&Se(c,t,n),r&&ye(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&R(()=>{_&&Xi(_,t,e),h&&On(e,null,t,`unmounted`),v&&(e.el=null)},n)},ye=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===z){be(n,r);return}if(t===ji){S(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},be=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},xe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ti(c),Ti(l),r&&ue(r),i.stop(),a&&(a.flags|=8,T(o,e,t,n)),s&&R(s,t),R(()=>{e.isUnmounted=!0},t)},Se=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)T(e[o],t,n,r,i)},Ce=e=>{if(e.shapeFlag&6)return Ce(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Ln];return n?h(n):t},we=!1,E=(e,t,n)=>{let r;e==null?t._vnode&&(T(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,we||=(we=!0,xn(r),Sn(),!1)},Te={p:v,um:T,m:ve,r:ye,mt:w,mc:C,pc:he,pbc:oe,n:Ce,o:e},Ee,D;return i&&([Ee,D]=i(Te)),{render:E,hydrate:Ee,createApp:zr(E,Ee)}}function yi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function bi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function xi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=qi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Si(t,a)),a.type===ki&&(a.patchFlag===-1&&(a=i[e]=qi(a)),a.el=t.el),a.type===Ai&&!a.el&&(a.el=t.el)}}function Ci(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function wi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wi(t)}function Ti(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ei(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Ei(t.subTree):null}var Di=e=>e.__isSuspense;function Oi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):bn(e)}var z=Symbol.for(`v-fgt`),ki=Symbol.for(`v-txt`),Ai=Symbol.for(`v-cmt`),ji=Symbol.for(`v-stc`),Mi=[],Ni=null;function B(e=!1){Mi.push(Ni=e?null:[])}function Pi(){Mi.pop(),Ni=Mi[Mi.length-1]||null}var Fi=1;function Ii(e,t=!1){Fi+=e,e<0&&Ni&&t&&(Ni.hasOnce=!0)}function Li(e){return e.dynamicChildren=Fi>0?Ni||n:null,Pi(),Fi>0&&Ni&&Ni.push(e),e}function V(e,t,n,r,i,a){return Li(U(e,t,n,r,i,a,!0))}function H(e,t,n,r,i){return Li(W(e,t,n,r,i,!0))}function Ri(e){return e?e.__v_isVNode===!0:!1}function zi(e,t){return e.type===t.type&&e.key===t.key}var Bi=({key:e})=>e??null,Vi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||j(e)||h(e)?{i:F,r:e,k:t,f:!!n}:e);function U(e,t=null,n=null,r=0,i=null,a=e===z?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bi(t),ref:t&&Vi(t),scopeId:Tn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:F};return s?(Ji(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Fi>0&&!o&&Ni&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ni.push(c),c}var W=Hi;function Hi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===dr)&&(e=Ai),Ri(e)){let r=Wi(e,t,!0);return n&&Ji(r,n),Fi>0&&!a&&Ni&&(r.shapeFlag&6?Ni[Ni.indexOf(e)]=r:Ni.push(r)),r.patchFlag=-2,r}if(_a(e)&&(e=e.__vccOpts),t){t=Ui(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=T(e)),v(n)&&(Ut(n)&&!d(n)&&(n=s({},n)),t.style=me(n))}let o=g(e)?1:Di(e)?128:Rn(e)?64:v(e)?4:h(e)?2:0;return U(e,t,n,r,i,o,a,!0)}function Ui(e){return e?Ut(e)||ti(e)?s({},e):e:null}function Wi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Yi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Bi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Vi(t)):[a,Vi(t)]:Vi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wi(e.ssContent),ssFallback:e.ssFallback&&Wi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Bn(u,c.clone(u)),u}function Gi(e=` `,t=0){return W(ki,null,e,t)}function G(e=``,t=!1){return t?(B(),H(Ai,null,e)):W(Ai,null,e)}function Ki(e){return e==null||typeof e==`boolean`?W(Ai):d(e)?W(z,null,e.slice()):Ri(e)?qi(e):W(ki,null,String(e))}function qi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wi(e)}function Ji(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ji(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ti(t)?t._ctx=F:r===3&&F&&(F.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:F},n=32):(t=String(t),r&64?(n=16,t=[Gi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=T([t.class,r.class]));else if(e===`style`)t.style=me([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Xi(e,t,n,r=null){sn(e,t,7,[n,r])}var Zi=Lr(),Qi=0;function $i(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Zi,o={uid:Qi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new De(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:si(i,a),emitsOptions:Wr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Hr.bind(null,o),e.ce&&e.ce(o),o}var K=null,ea=()=>K||F,ta,na;{let e=pe(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ta=t(`__VUE_INSTANCE_SETTERS__`,e=>K=e),na=t(`__VUE_SSR_SETTERS__`,e=>oa=e)}var ra=e=>{let t=K;return ta(e),e.scope.on(),()=>{e.scope.off(),ta(t)}},ia=()=>{K&&K.scope.off(),ta(null)};function aa(e){return e.vnode.shapeFlag&4}var oa=!1;function sa(e,t=!1,n=!1){t&&na(t);let{props:r,children:i}=e.vnode,a=aa(e);ni(e,r,a,t),hi(e,i,n||t);let o=a?ca(e,t):void 0;return t&&na(!1),o}function ca(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xr);let{setup:r}=n;if(r){Ge();let n=e.setupContext=r.length>1?ma(e):null,i=ra(e),a=on(r,e,0,[e.props,n]),o=y(a);if(Ke(),i(),(o||e.sp)&&!Kn(e)&&Vn(e),o){if(a.then(ia,ia),t)return a.then(n=>{la(e,n,t)}).catch(t=>{cn(t,e,0)});e.asyncDep=a}else la(e,a,t)}else fa(e,t)}function la(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Xt(t)),fa(e,n)}var ua,da;function fa(e,t,n){let i=e.type;if(!e.render){if(!t&&ua&&!i.render){let t=i.template||Or(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ua(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,da&&da(e)}{let t=ra(e);Ge();try{wr(e)}finally{Ke(),t()}}}var pa={get(e,t){return k(e,`get`,``),e[t]}};function ma(e){return{attrs:new Proxy(e.attrs,pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ha(e){return e.exposed?e.exposeProxy||=new Proxy(Xt(Wt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yr)return yr[n](e)},has(e,t){return t in e||t in yr}}):e.proxy}function ga(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function _a(e){return h(e)&&`__vccOpts`in e}var q=(e,t)=>Qt(e,t,oa);function va(e,t,n){try{Ii(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Ri(t)?W(e,null,[t]):W(e,t):W(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),W(e,t,n))}finally{Ii(1)}}var ya=`3.5.38`,ba=void 0,xa=typeof window<`u`&&window.trustedTypes;if(xa)try{ba=xa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Sa=ba?e=>ba.createHTML(e):e=>e,Ca=`http://www.w3.org/2000/svg`,wa=`http://www.w3.org/1998/Math/MathML`,Ta=typeof document<`u`?document:null,Ea=Ta&&Ta.createElement(`template`),Da={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ta.createElementNS(Ca,e):t===`mathml`?Ta.createElementNS(wa,e):n?Ta.createElement(e,{is:n}):Ta.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ta.createTextNode(e),createComment:e=>Ta.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ta.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ea.innerHTML=Sa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ea.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Oa=Symbol(`_vtc`);function ka(e,t,n){let r=e[Oa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Aa=Symbol(`_vod`),ja=Symbol(`_vsh`),Ma=Symbol(``),Na=/(?:^|;)\s*display\s*:/;function Pa(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ia(r,t,``)}else for(let e in t)n[e]??Ia(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ia(r,i,``):Ba(e,i,!g(t)&&t?t[i]:void 0,o)||Ia(r,i,o)}}else if(i){if(t!==n){let e=r[Ma];e&&(n+=`;`+e),r.cssText=n,a=Na.test(n)}}else t&&e.removeAttribute(`style`);Aa in e&&(e[Aa]=a?r.display:``,e[ja]&&(r.display=`none`))}var Fa=/\s*!important$/;function Ia(e,t,n){if(d(n))n.forEach(n=>Ia(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=za(e,t);Fa.test(n)?e.setProperty(oe(r),n.replace(Fa,``),`important`):e[r]=n}}var La=[`Webkit`,`Moz`,`ms`],Ra={};function za(e,t){let n=Ra[t];if(n)return n;let r=C(t);if(r!==`filter`&&r in e)return Ra[t]=r;r=se(r);for(let n=0;n<La.length;n++){let i=La[n]+r;if(i in e)return Ra[t]=i}return t}function Ba(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Va=`http://www.w3.org/1999/xlink`;function Ha(e,t,n,r,i,a=be(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Va,t.slice(6,t.length)):e.setAttributeNS(Va,t,n):n==null||a&&!xe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ua(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Sa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=xe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Wa(e,t,n,r){e.addEventListener(t,n,r)}function Ga(e,t,n,r){e.removeEventListener(t,n,r)}var Ka=Symbol(`_vei`);function qa(e,t,n,r,i=null){let a=e[Ka]||(e[Ka]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ya(t);r?Wa(e,n,a[t]=$a(r,i),s):o&&(Ga(e,n,o,s),a[t]=void 0)}}var Ja=/(?:Once|Passive|Capture)$/;function Ya(e){let t;if(Ja.test(e)){t={};let n;for(;n=e.match(Ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):oe(e.slice(2)),t]}var Xa=0,Za=Promise.resolve(),Qa=()=>Xa||=(Za.then(()=>Xa=0),Date.now());function $a(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&sn(e,t,5,a)}}else sn(r,t,5,[e])};return n.value=e,n.attached=Qa(),n}var eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,to=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?ka(e,r,c):t===`style`?Pa(e,n,r):a(t)?o(t)||qa(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):no(e,t,r,c))?(Ua(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ha(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ro(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ua(e,C(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ha(e,t,r,c))};function no(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return eo(t)&&g(n)?!1:t in e}function ro(e,t){let n=e._def.props;if(!n)return!1;let r=C(t);return Array.isArray(n)?n.some(e=>C(e)===r):Object.keys(n).some(e=>C(e)===r)}var io=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>ue(t,e):t};function ao(e){e.target.composing=!0}function oo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var so=Symbol(`_assign`);function co(e,t,n){return t&&(e=e.trim()),n&&(e=de(e)),e}var lo={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[so]=io(i);let a=r||i.props&&i.props.type===`number`;Wa(e,t?`change`:`input`,t=>{t.target.composing||e[so](co(e.value,n,a))}),(n||a)&&Wa(e,`change`,()=>{e.value=co(e.value,n,a)}),t||(Wa(e,`compositionstart`,ao),Wa(e,`compositionend`,oo),Wa(e,`change`,oo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[so]=io(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?de(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},uo=[`ctrl`,`shift`,`alt`,`meta`],fo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>uo.some(n=>e[`${n}Key`]&&!t.includes(n))},po=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=fo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},mo=s({patchProp:to},Da),ho;function go(){return ho||=_i(mo)}var _o=((...e)=>{let t=go().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=yo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,vo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function vo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function yo(e){return g(e)?document.querySelector(e):e}var bo=`stackline-vue-multiselect-dropdown-styles`,xo=`
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
  align-content: center;
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
  min-height: 1.45em;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-placeholder,
.vmsd-single-value {
  display: inline-flex;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  min-width: 0;
  min-height: 1.45em;
  max-width: 100%;
  color: var(--vmsd-muted);
  font-size: 0.95rem;
  line-height: 1.25;
  text-align: left;
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
  flex: 0 0 auto;
  min-width: 24px;
  min-height: 20px;
  color: var(--vmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
}

.vmsd-root.vmsd-has-overflow .vmsd-trigger {
  padding-right: 104px;
}

.vmsd-root.vmsd-has-overflow:not(.vmsd-has-clear) .vmsd-trigger {
  padding-right: 74px;
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
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--vmsd-border-strong);
  border-radius: 6px;
  background-color: var(--vmsd-bg);
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
  transform: translate(-50%, -58%) rotate(-45deg);
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
  align-content: center;
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
  min-width: 24px;
  min-height: 20px;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
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
  transform: translate(-50%, -58%) rotate(-45deg);
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
    align-items: center;
    padding-right: 54px;
  }
}
`;function So(){if(typeof document>`u`||document.getElementById(bo))return;let e=document.createElement(`style`);e.id=bo,e.textContent=xo,document.head.appendChild(e)}var Co={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`,keyboard:{space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}};function wo(e){return e===`remove`?`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`:e===`clear`?`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`:e===`search`?`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`:e===`angle-up`?`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`}function To(e,t,n=`vmsd-icon`){return e(`svg`,{class:n,attrs:{viewBox:t===`remove`?`0 0 47.971 47.971`:t===`clear`?`0 0 51.976 51.976`:t===`search`?`0 0 615.52 615.52`:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`}},[e(`path`,{attrs:{d:wo(t)}})])}function Eo(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function Do(e){if(!e)return null;let t={};for(let[n,r]of Object.entries(e)){if(n===`attrs`||n===`domProps`){Object.assign(t,r);continue}if(n===`on`&&r&&typeof r==`object`){for(let[e,n]of Object.entries(r))t[`on${Eo(e)}`]=n;continue}t[n]=r}return t}var J=(...e)=>{let[t,n,r]=e;return e.length===1?va(t):e.length===2&&(Array.isArray(n)||typeof n==`string`||typeof n==`number`||n==null)?va(t,null,n):va(t,Do(n),r)};function Oo(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function ko(e,t){if(Oo(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function Ao(e,t){if(Oo(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return ko(e,t)}function jo(e){return!Oo(e)&&!!e.disabled}function Mo(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set;if(i.add(ko(e,n).toLowerCase()),!Oo(e)){let t=n.searchBy.length?n.searchBy:[n.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}for(let e of i)if(e.indexOf(r)>=0)return!0;return!1}function No(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!Oo(e)){let n=t.groupBy,r=e;if(n in r)return String(r[n]||``)}return``}function Po(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=No(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function Fo(e,t,n){let r=new Map;for(let t of e)r.set(Ao(t,n),t);for(let e of t){let t=Ao(e,n);r.has(t)||r.set(t,e)}return Array.from(r.values())}function Io(e,t,n,r){return e?e(n,r,t):null}function Lo(e,t,n){let r=e.$slots&&e.$slots[t];return typeof r==`function`?r(n):null}function Ro(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/["\\]/g,`\\$&`)}function zo(e){return e.key===`Enter`||e.key===` `||e.key===`Spacebar`}function Bo(e){return e.key===` `||e.key===`Spacebar`}function Vo(e){let t=e;return t?t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable:!1}var Y={name:`VueMultiselectDropdown`,emits:[`update:modelValue`,`input`,`update:selectedItems`,`change`,`select`,`de-select`,`select-all`,`de-select-all`,`group-select`,`group-de-select`,`scroll-to-end`,`add-filter-new-item`,`open`,`close`],props:{data:{type:Array,default:()=>[]},modelValue:{type:Array,default:void 0},value:{type:Array,default:void 0},selectedItems:{type:Array,default:void 0},defaultSelectedItems:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},disabled:{type:Boolean,default:!1},renderItem:{type:Function,default:void 0},renderBadge:{type:Function,default:void 0},renderEmptyState:{type:Function,default:void 0}},data(){return{isOpen:!1,query:``,focusedKey:``,internalSelected:Array.isArray(this.defaultSelectedItems)?this.defaultSelectedItems.slice():[],menuStyle:{},bodyListMaxHeight:void 0,menuPlaceholder:null,menuAttachedToBody:!1,effectivePosition:`bottom`,instanceId:`stackline-vmsd-${Math.random().toString(36).slice(2)}`}},computed:{resolvedSettings(){let e=this.settings||{},t={...Co,...e,keyboard:{...Co.keyboard,...e.keyboard||{}}};typeof e.escapeToClose==`boolean`&&e.keyboard?.escape==null&&(t.keyboard.escape=e.escapeToClose),typeof t.keyboard.backspace==`boolean`&&(t.keyboard.backspaceRemovesLastWhenSearchEmpty=t.keyboard.backspace);let n=t.skin||t.theme||`classic`;return{...t,skin:n,disabled:!!(t.disabled||this.disabled),searchBy:Array.isArray(t.searchBy)?t.searchBy:[]}},selected(){return Array.isArray(this.selectedItems)?this.selectedItems:Array.isArray(this.modelValue)?this.modelValue:Array.isArray(this.value)?this.value:this.internalSelected},filteredItems(){let e=this.resolvedSettings;return(this.data||[]).filter(t=>Mo(t,this.query,e))},groupedItems(){return Po(this.filteredItems,this.resolvedSettings)},visibleSelected(){let e=this.resolvedSettings.badgeShowLimit;return this.selected.slice(0,e)},hiddenSelectedCount(){return Math.max(0,this.selected.length-this.visibleSelected.length)},openDirection(){return this.effectivePosition===`top`?`up`:`down`},shouldAppendToBody(){return!!(this.resolvedSettings.appendToBody||this.resolvedSettings.tagToBody)}},watch:{isOpen(e){this.$nextTick(()=>{e?(this.attachMenuToBody(),this.updateMenuPosition(),this.resolvedSettings.searchAutofocus&&this.resolvedSettings.enableSearchFilter&&this.focusSearch(),this.$emit(`open`)):(this.restoreMenuToComponent(),this.menuStyle={},this.bodyListMaxHeight=void 0,this.$emit(`close`))})},selected(){this.$nextTick(this.updateMenuPosition)},filteredItems(){this.$nextTick(this.updateMenuPosition)},settings:{deep:!0,handler(){this.$nextTick(this.updateMenuPosition)}}},mounted(){So(),document.addEventListener(`click`,this.onDocumentClick,!0),document.addEventListener(`keydown`,this.onDocumentKeydown,!0),window.addEventListener(`resize`,this.updateMenuPosition),window.addEventListener(`scroll`,this.updateMenuPosition,!0)},beforeUnmount(){document.removeEventListener(`click`,this.onDocumentClick,!0),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0),window.removeEventListener(`resize`,this.updateMenuPosition),window.removeEventListener(`scroll`,this.updateMenuPosition,!0),this.restoreMenuToComponent()},methods:{getLabel(e){return ko(e,this.resolvedSettings)},getKey(e){return Ao(e,this.resolvedSettings)},getOptionId(e){return`${this.instanceId}-option-${e}`},isSelected(e){let t=this.getKey(e);return this.selected.some(e=>this.getKey(e)===t)},visibleSelectableItems(){return this.filteredItems.filter(e=>!jo(e))},emitSelection(e){!Array.isArray(this.selectedItems)&&!Array.isArray(this.modelValue)&&!Array.isArray(this.value)&&(this.internalSelected=e),this.$emit(`update:modelValue`,e),this.$emit(`input`,e),this.$emit(`update:selectedItems`,e),this.$emit(`change`,e)},openDropdown(){this.resolvedSettings.disabled||(this.isOpen=!0)},closeDropdown(){this.isOpen=!1,this.query=``,this.focusedKey=``},toggleDropdown(){this.isOpen?this.closeDropdown():this.openDropdown()},focusSearch(){this.isOpen||this.openDropdown();let e=this.$refs.searchInput;e&&typeof e.focus==`function`&&e.focus()},clearSelection(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.selected.slice();this.emitSelection([]),this.$emit(`de-select-all`,t)},selectAll(e){e&&(e.preventDefault(),e.stopPropagation());let t=this.resolvedSettings,n=this.visibleSelectableItems();if(n.length>0&&n.every(e=>this.isSelected(e))){let e=new Set(n.map(e=>this.getKey(e))),t=this.selected.filter(t=>!e.has(this.getKey(t)));this.emitSelection(t),this.$emit(`de-select-all`,n);return}let r=t.limitSelection?Math.max(t.limitSelection-this.selected.length,0):2**53-1,i=new Set(this.selected.map(e=>this.getKey(e))),a=n.filter(e=>!i.has(this.getKey(e))).slice(0,r),o=t.singleSelection?n.slice(0,1):Fo(this.selected,a,t);this.emitSelection(o),this.$emit(`select-all`,o)},deSelectAll(e){this.clearSelection(e)},selectGroup(e,t,n){n.preventDefault(),n.stopPropagation();let r=this.resolvedSettings,i=t.filter(e=>!jo(e));if(i.every(e=>this.isSelected(e))){let t=new Set(i.map(e=>this.getKey(e))),n=this.selected.filter(e=>!t.has(this.getKey(e)));this.emitSelection(n),this.$emit(`group-de-select`,e,i);return}let a=r.singleSelection?i.slice(0,1):Fo(this.selected,i,r);this.emitSelection(a),this.$emit(`group-select`,e,i)},toggleItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.isSelected(e),r=!!this.resolvedSettings.limitSelection&&this.selected.length>=this.resolvedSettings.limitSelection;if(this.resolvedSettings.disabled||jo(e)||r&&!n)return;let i=this.getKey(e);if(this.selected.some(e=>this.getKey(e)===i)){if(this.resolvedSettings.singleSelection){this.closeDropdown();return}let t=this.selected.filter(e=>this.getKey(e)!==i);this.emitSelection(t),this.$emit(`de-select`,e);return}let a=this.resolvedSettings.singleSelection?[e]:this.selected.concat(e);this.resolvedSettings.limitSelection>0&&(a=a.slice(0,this.resolvedSettings.limitSelection)),this.emitSelection(a),this.$emit(`select`,e),(this.resolvedSettings.singleSelection||this.resolvedSettings.closeDropDownOnSelection)&&this.closeDropdown()},removeItem(e,t){t&&(t.preventDefault(),t.stopPropagation());let n=this.getKey(e),r=this.selected.filter(e=>this.getKey(e)!==n);this.emitSelection(r),this.$emit(`de-select`,e)},removeLastSelected(){let e=this.selected[this.selected.length-1];e&&this.removeItem(e)},addFilterItem(e){e.preventDefault(),e.stopPropagation();let t=this.query.trim();if(!t)return;let n={[this.resolvedSettings.primaryKey]:t.toLowerCase().replace(/\s+/g,`-`),[this.resolvedSettings.labelKey]:t};this.$emit(`add-filter-new-item`,t,n),this.toggleItem(n),this.query=``},onTriggerKeydown(e){let t=this.resolvedSettings.keyboard;if(e.key===`Enter`||Bo(e)&&t.space!==!1){e.preventDefault(),this.toggleDropdown();return}if(t.arrows!==!1&&e.key===`ArrowDown`){e.preventDefault(),this.openDropdown(),this.focusFirstOption();return}if(t.arrows!==!1&&e.key===`ArrowUp`){e.preventDefault(),this.openDropdown(),this.focusLastOption();return}t.escape!==!1&&e.key===`Escape`&&this.closeDropdown()},onListKeydown(e){let t=this.resolvedSettings.keyboard;if(t.escape!==!1&&e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.closeDropdown();return}if(e.key===`Tab`)return;if(Vo(e.target)){if(e.key===`Backspace`&&!this.query&&t.backspaceRemovesLastWhenSearchEmpty===!0){e.preventDefault(),e.stopPropagation(),this.removeLastSelected();return}if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return}if(t.arrows===!1&&[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.visibleSelectableItems();if(!n.length)return;let r=Math.max(0,n.findIndex(e=>this.getKey(e)===this.focusedKey));if(e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation();let t=n[Math.min(r+1,n.length-1)];this.focusOption(t);return}if(e.key===`ArrowUp`){e.preventDefault(),e.stopPropagation();let t=n[Math.max(r-1,0)];this.focusOption(t);return}if(e.key===`Home`){e.preventDefault(),e.stopPropagation(),this.focusFirstOption();return}if(e.key===`End`){e.preventDefault(),e.stopPropagation(),this.focusLastOption();return}if(zo(e)){if(Bo(e)&&t.space===!1)return;e.preventDefault(),e.stopPropagation();let r=n.find(e=>this.getKey(e)===this.focusedKey)||n[0];if(this.toggleItem(r),t.spaceOptionAction===`toggle-and-next`){let e=n.findIndex(e=>this.getKey(e)===this.getKey(r)),t=n[Math.min(e+1,n.length-1)];t&&this.focusOption(t)}else this.focusOption(r);return}},focusFirstOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems()[0];e&&this.focusOption(e)})},focusLastOption(){this.$nextTick(()=>{let e=this.visibleSelectableItems(),t=e[e.length-1];t&&this.focusOption(t)})},focusOption(e){let t=this.getKey(e);this.focusedKey=t,this.$nextTick(()=>{let e=this.$refs.menu?.querySelector(`[data-vmsd-key="${Ro(t)}"]`);e&&(e.focus(),e.scrollIntoView({block:`nearest`}))})},onInlineKeydown(e){zo(e)&&e.stopPropagation(),this.resolvedSettings.keyboard.arrows!==!1&&e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusFirstOption()),this.resolvedSettings.keyboard.arrows!==!1&&e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),this.openDropdown(),this.focusLastOption())},onRemoveButtonKeydown(e,t){if(this.resolvedSettings.keyboard.deleteRemovesFocusedBadge!==!1&&(t.key===`Backspace`||t.key===`Delete`)){this.removeItem(e,t);return}this.onInlineKeydown(t)},onTriggerClick(e){let t=e.target;t&&t.closest(`button`)||this.toggleDropdown()},onDocumentClick(e){if(!this.isOpen)return;let t=this.$el,n=this.$refs.menu,r=e.target;t&&t.contains(r)||n&&n.contains(r)||this.closeDropdown()},onDocumentKeydown(e){this.isOpen&&this.resolvedSettings.keyboard.escape!==!1&&e.key===`Escape`&&this.closeDropdown()},onListScroll(e){let t=e.target;if(!t)return;let n={scrollTop:t.scrollTop,scrollHeight:t.scrollHeight,clientHeight:t.clientHeight};t.scrollTop+t.clientHeight>=t.scrollHeight-4&&this.$emit(`scroll-to-end`,n)},attachMenuToBody(){if(!this.shouldAppendToBody||!this.isOpen||typeof document>`u`)return;let e=this.$refs.menu;!e||e.parentNode===document.body||(!this.menuPlaceholder&&e.parentNode&&(this.menuPlaceholder=document.createComment(`stackline-vue-multiselect-menu`),e.parentNode.insertBefore(this.menuPlaceholder,e)),document.body.appendChild(e),this.menuAttachedToBody=!0)},restoreMenuToComponent(){let e=this.$refs.menu;!e||!this.menuPlaceholder||!this.menuPlaceholder.parentNode||(this.menuPlaceholder.parentNode.insertBefore(e,this.menuPlaceholder.nextSibling),this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder),this.menuPlaceholder=null,this.menuAttachedToBody=!1,this.menuStyle={})},updateMenuPosition(){if(!this.isOpen||typeof window>`u`)return;let e=this.$refs.trigger,t=this.$refs.menu;if(!e||!t)return;let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=n.top,a=r-n.bottom,o=t.offsetHeight||Math.min(this.resolvedSettings.maxHeight+92,420),s=this.resolvedSettings.position===`top`?`top`:`bottom`,c=i>a+48,l=this.resolvedSettings.autoPosition?a<o&&c&&o<i?`top`:`bottom`:s;if(this.effectivePosition=l,!this.shouldAppendToBody){this.bodyListMaxHeight=void 0;return}let u=this.$refs.list?.offsetHeight||Math.min(this.resolvedSettings.maxHeight,o),d=Math.max(0,o-u),f=l===`top`?Math.max(0,n.top-8-8):Math.max(0,r-n.bottom-8-8),p=o>0?Math.max(0,Math.min(this.resolvedSettings.maxHeight,f-d)):this.resolvedSettings.maxHeight,m=d+p,h=l===`top`?n.top-m-8:n.bottom+8,g=l===`top`?Math.max(8,h):h,_=Math.max(0,window.innerWidth-16),v=Math.min(n.width,_),y=Math.min(Math.max(8,n.left),window.innerWidth-v-8),b={position:`fixed`,top:`${g}px`,left:`${y}px`,width:`${v}px`,maxWidth:`${_}px`,zIndex:`100000`,display:this.isOpen?`block`:`none`};this.bodyListMaxHeight=p,this.menuStyle=b}},render(){let e=this.resolvedSettings,t=String(e.skin||e.theme||`classic`),n=[`classic`,`material`,`dark`,`custom`].includes(t)?``:`theme-custom`,r=this.selected.length>0,i=this.visibleSelected,a=this.hiddenSelectedCount,o=e.clearAll&&r&&!e.disabled,s=this.visibleSelectableItems(),c=s.length>0&&s.every(e=>this.isSelected(e)),l=e.enableCheckAll&&!e.singleSelection||!!(e.addNewItemOnFilter&&this.query.trim()),u=[`vmsd-menu`,`vmsd-${this.effectivePosition}`,`skin-${t}`,`theme-${t}`,n,this.shouldAppendToBody?`vmsd-body-overlay`:``].filter(Boolean),d=e.singleSelection&&r?[J(`span`,{class:`vmsd-single-value`},[this.getLabel(this.selected[0])])]:i.map(t=>{let n=this.getLabel(t),r={item:t,label:n,selected:!0,disabled:!1,key:this.getKey(t),ariaSelected:`true`,ariaChecked:`true`,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},i=Lo(this,`badge`,r)||Io(this.renderBadge,J,t,r),a=typeof e.removeItemAriaLabel==`function`?e.removeItemAriaLabel(t):`${e.removeItemAriaLabel}: ${n}`;return J(`span`,{class:`vmsd-badge`,key:this.getKey(t)},[J(`span`,{class:`vmsd-badge-label`},[i||n]),e.disabled?null:J(`button`,{class:`vmsd-badge-remove`,attrs:{type:`button`,"aria-label":a},on:{click:e=>this.removeItem(t,e),keydown:e=>this.onRemoveButtonKeydown(t,e)}},[To(J,`remove`)])])}),f=r?[J(`span`,{class:`vmsd-badge-list`},d)]:[J(`span`,{class:`vmsd-placeholder`},[Lo(this,`placeholder`,{label:e.text,state:{isOpen:this.isOpen,query:this.query}})||e.text])],p=J(`div`,{ref:`trigger`,class:[`vmsd-trigger`,e.disabled?`vmsd-disabled`:``],attrs:{role:`combobox`,tabindex:e.disabled?`-1`:`0`,"aria-label":r?`${e.ariaLabel}: ${this.selected.map(e=>this.getLabel(e)).join(`, `)}`:e.ariaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-haspopup":`listbox`,"aria-disabled":e.disabled?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`,"aria-activedescendant":this.focusedKey?this.getOptionId(this.focusedKey):void 0},on:{click:this.onTriggerClick,keydown:this.onTriggerKeydown}},[Lo(this,`trigger`,{selected:this.selected,label:r?this.selected.map(e=>this.getLabel(e)).join(`, `):e.text,isOpen:this.isOpen,clearSelection:this.clearSelection,toggleDropdown:this.toggleDropdown})||J(`div`,{class:`vmsd-value`},f),J(`div`,{class:`vmsd-actions`},[a>0?J(`span`,{class:`vmsd-overflow`,attrs:{"aria-label":`${a} more selected options`}},[`+${a}`]):null,o?J(`button`,{class:`vmsd-clear`,attrs:{type:`button`,"aria-label":e.clearAllAriaLabel},on:{click:e=>this.clearSelection(e),keydown:this.onInlineKeydown}},[To(J,`remove`)]):null,J(`button`,{class:`vmsd-arrow-button`,attrs:{type:`button`,disabled:e.disabled,"aria-label":this.isOpen?e.closeDropdownAriaLabel:e.openDropdownAriaLabel,"aria-expanded":this.isOpen?`true`:`false`,"aria-controls":`${this.instanceId}-listbox`},on:{click:e=>{e.preventDefault(),e.stopPropagation(),this.toggleDropdown()},keydown:this.onInlineKeydown}},[J(`span`,{class:`vmsd-arrow`,attrs:{"aria-hidden":`true`}},[To(J,this.isOpen?`angle-up`:`angle-down`)])])])]),m=e.enableSearchFilter?J(`div`,{class:`vmsd-search-shell`},[To(J,`search`,`vmsd-search-icon`),J(`input`,{ref:`searchInput`,class:`vmsd-search-input`,domProps:{value:this.query},attrs:{type:`text`,placeholder:e.searchPlaceholderText,"aria-label":e.searchAriaLabel},on:{input:e=>{this.query=String(e.target.value||``)},keydown:this.onListKeydown}}),this.query?J(`button`,{class:`vmsd-search-clear`,attrs:{type:`button`,"aria-label":e.clearSearchAriaLabel},on:{click:()=>this.query=``,keydown:this.onInlineKeydown}},[To(J,`clear`)]):null]):null,h=l?J(`div`,{class:`vmsd-bulk-actions`},[e.enableCheckAll&&!e.singleSelection?J(`button`,{class:`vmsd-inline-button vmsd-select-all-button`,attrs:{type:`button`,disabled:e.disabled||s.length===0},on:{click:e=>this.selectAll(e),keydown:this.onInlineKeydown}},[e.showCheckbox?J(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":c?`true`:`false`,"aria-hidden":`true`}}):null,J(`span`,[c?e.unSelectAllText:e.selectAllText])]):null,e.addNewItemOnFilter&&this.query.trim()?J(`button`,{class:`vmsd-inline-button vmsd-add-button`,attrs:{type:`button`},on:{click:this.addFilterItem,keydown:this.onInlineKeydown}},[`${e.addNewButtonText} "${this.query.trim()}"`]):null]):null,g=t=>{let n=this.getLabel(t),r=this.isSelected(t),i=!!e.limitSelection&&this.selected.length>=e.limitSelection,a=e.disabled||jo(t)||i&&!r,o=this.getKey(t),s={item:t,label:n,selected:r,disabled:a,index:this.filteredItems.findIndex(e=>this.getKey(e)===o),group:No(t,e),key:o,optionId:this.getOptionId(o),ariaSelected:r?`true`:`false`,ariaChecked:r?`true`:`false`,query:this.query,toggle:()=>this.toggleItem(t),remove:()=>this.removeItem(t)},c=Lo(this,`option`,s)||Io(this.renderItem,J,t,s);return J(`div`,{key:o,class:[`vmsd-option`,r?`vmsd-selected`:``,a?`vmsd-disabled`:``],attrs:{id:this.getOptionId(o),role:`option`,tabindex:a?`-1`:`0`,"data-vmsd-option":`true`,"data-vmsd-key":o,"aria-disabled":a?`true`:`false`,"aria-selected":r?`true`:`false`,"aria-checked":r?`true`:`false`},on:{click:e=>{a||(this.toggleItem(t,e),this.focusOption(t))},focus:()=>this.focusedKey=o,mouseenter:()=>this.focusedKey=o,keydown:this.onListKeydown}},[e.showCheckbox?J(`span`,{class:`vmsd-checkbox`,attrs:{"data-checked":r?`true`:`false`,"aria-hidden":`true`}}):null,c||J(`div`,{class:`vmsd-option-body`},[J(`div`,{class:`vmsd-option-label`},[n]),!Oo(t)&&t.caption?J(`span`,{class:`vmsd-option-hint`},[String(t.caption)]):null])])},_=this.isOpen?e.loading?[J(`div`,{class:`vmsd-state`,attrs:{role:`status`}},[Lo(this,`loading`,{label:e.loadingText})||e.loadingText])]:e.groupBy?this.groupedItems.map(t=>J(`div`,{class:`vmsd-group`,key:t.name,attrs:{role:`group`,"aria-label":t.name}},[Lo(this,`group-header`,{group:t,selected:t.items.filter(e=>!jo(e)).every(e=>this.isSelected(e)),selectGroup:e=>this.selectGroup(t.name,t.items,e)})||J(`div`,{class:`vmsd-group-header`},[J(`span`,[`${t.name} \xB7 ${t.items.length}`]),e.selectGroup?J(`button`,{class:`vmsd-group-action`,attrs:{type:`button`},on:{click:e=>this.selectGroup(t.name,t.items,e)}},[t.items.filter(e=>!jo(e)).every(e=>this.isSelected(e))?`Unselect`:`Select`]):null]),t.items.map(g)])):this.filteredItems.map(g):[];if(this.isOpen&&!this.filteredItems.length&&!e.loading){let t=Lo(this,`empty`,{query:this.query,label:e.noDataLabel})||(this.renderEmptyState?this.renderEmptyState(this.query,J):e.noDataLabel);_.push(J(`div`,{class:`vmsd-state`},[t]))}let v=J(`div`,{ref:`menu`,class:u,style:{...this.shouldAppendToBody?this.menuStyle:{},display:this.isOpen?`block`:`none`},attrs:{role:`presentation`,"aria-hidden":this.isOpen?`false`:`true`},on:{keydown:this.onListKeydown}},[J(`div`,{class:`vmsd-toolbar`},[h,m]),J(`div`,{ref:`list`,class:`vmsd-list`,style:{maxHeight:`${this.shouldAppendToBody&&this.bodyListMaxHeight!=null?this.bodyListMaxHeight:e.maxHeight}px`},attrs:{id:`${this.instanceId}-listbox`,role:`listbox`,"aria-label":e.listboxAriaLabel,"aria-multiselectable":e.singleSelection?`false`:`true`},on:{scroll:this.onListScroll}},_),this.isOpen?Lo(this,`menu-footer`,{selected:this.selected,filteredItems:this.filteredItems,close:this.closeDropdown}):null]);return J(`div`,{class:[`vmsd-root`,`skin-${t}`,`theme-${t}`,n,this.isOpen?`vmsd-open`:``,this.effectivePosition===`top`?`vmsd-opens-up`:`vmsd-opens-down`,e.classes,r?`vmsd-has-selection`:``,o?`vmsd-has-clear`:``,a>0?`vmsd-has-overflow`:``],attrs:{"data-open":this.isOpen?`true`:`false`}},[p,v])}},Ho={labelKey:`itemName`,primaryKey:`id`};function Uo(e,t){return e==null?t:N(e)}function Wo(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function Go(e){let t=Uo(e,{});return{...t,text:t.text||`Select`,singleSelection:!!t.singleSelection,labelKey:t.labelKey||Ho.labelKey,primaryKey:t.primaryKey||Ho.primaryKey,searchBy:Array.isArray(t.searchBy)?t.searchBy:[],groupBy:t.groupBy||``}}function Ko(e,t){if(Wo(e))return String(e);let n=[t.labelKey||Ho.labelKey,`itemName`,`name`,`label`,`title`,`value`];for(let t of n)if(e[t]!=null)return String(e[t]);return JSON.stringify(e)}function qo(e,t){if(Wo(e))return String(e);let n=[t.primaryKey||Ho.primaryKey,`id`,`value`,`key`];for(let t of n)if(e[t]!=null)return String(e[t]);return Ko(e,t)}function Jo(e,t){if(t.groupBy)return typeof t.groupBy==`function`?t.groupBy(e):!Wo(e)&&e[t.groupBy]!=null?String(e[t.groupBy]):void 0}function Yo(e){return!Wo(e)&&!!e.disabled}function Xo(e,t,n){let r=t.trim().toLowerCase();if(!r)return!0;let i=new Set([Ko(e,n).toLowerCase()]);if(!Wo(e)){let t=n.searchBy&&n.searchBy.length?n.searchBy:[n.labelKey||Ho.labelKey];for(let n of t)n&&e[n]!=null&&i.add(String(e[n]).toLowerCase())}return Array.from(i).some(e=>e.includes(r))}function Zo(e,t,n){let r=new Map;for(let t of e)r.set(qo(t,n),t);for(let e of t){let t=qo(e,n);r.has(t)||r.set(t,e)}return Array.from(r.values())}function Qo(e,t){if(t.singleSelection)return e.length;let n=Number(t.badgeShowLimit);return!Number.isFinite(n)||n<=0?e.length:Math.floor(n)}function $o(e={}){let t={...e};return t.className&&!t.class&&(t.class=t.className),delete t.className,t}function es(e,t={}){let n=$o(t),r={...n,...e};(e.class||n.class)&&(r.class=[n.class,e.class].filter(Boolean).join(` `)),(e.style||n.style)&&(r.style={...typeof n.style==`object`?n.style:{},...typeof e.style==`object`?e.style:{}});for(let t of Object.keys(e))/^on[A-Z]/.test(t)&&typeof e[t]==`function`&&typeof n[t]==`function`&&(r[t]=(...r)=>{n[t](...r),e[t](...r)});return r}function ts(e){return e}function ns(e){return e}function rs(e={}){let t=M(e.defaultSelectedItems?e.defaultSelectedItems.slice():[]),n=M(``),r=q(()=>Go(e.settings)),i=q(()=>Uo(e.data,[])),a=q(()=>Uo(e.selectedItems,t.value)),o=q(()=>i.value.filter(e=>Xo(e,n.value,r.value))),s=e=>{let t=qo(e,r.value);return a.value.some(e=>qo(e,r.value)===t)},c=n=>{e.selectedItems||(t.value=n),e.onChange?.(n)},l=e=>qo(e,r.value),u=e=>Ko(e,r.value),d=q(()=>o.value.filter(e=>!Yo(e))),f=q(()=>{let e=Qo(a.value,r.value);return a.value.slice(0,e)}),p=q(()=>Math.max(a.value.length-f.value.length,0)),m=q(()=>d.value.length>0&&d.value.every(e=>s(e))),h=t=>{let n=l(t);c(a.value.filter(e=>l(e)!==n)),e.onDeSelect?.(t)},g=t=>{if(!Yo(t)){if(r.value.singleSelection){c([t]),e.onSelect?.(t);return}s(t)||(c(a.value.concat(t)),e.onSelect?.(t))}},_=e=>{if(!Yo(e)){if(s(e)){if(r.value.singleSelection)return;h(e);return}g(e)}},v=()=>{let t=a.value.slice();c([]),e.onDeSelectAll?.(t)},y=t=>{if(!t||!t.length){v();return}let n=new Set(t.map(l));c(a.value.filter(e=>!n.has(l(e)))),e.onDeSelectAll?.(t)},b=t=>{let n=(t||d.value).filter(e=>!Yo(e)),i=a.value.length;c(r.value.singleSelection?n.slice(0,1):Zo(a.value,n,r.value)),e.onSelectAll?.(n),!n.length&&i!==a.value.length&&e.onChange?.(a.value)};return{data:i,settings:r,filter:n,filteredItems:o,selectableItems:d,selectedItems:a,visibleBadges:f,hiddenBadgeCount:p,allFilteredSelected:m,isSelected:s,getItemKey:l,getItemLabel:u,setFilter:e=>{n.value=e},selectItem:g,removeItem:h,removeLastSelectedItem:()=>{let e=a.value[a.value.length-1];e&&h(e)},toggleItem:_,clearSelection:v,selectAll:b,deSelectAll:y,toggleGroup:(t,n)=>{let r=n.filter(e=>!Yo(e));if(r.length){if(r.every(e=>s(e))){y(r),e.onGroupDeSelect?.(t,r);return}b(r),e.onGroupSelect?.(t,r)}}}}function is(e={}){let t=rs(e),n=M(!1),r=M(``),i=M(``),a=`stackline-vmsd-headless-${Math.random().toString(36).slice(2)}`,o=`${a}-listbox`,s=q(()=>{let e=0;return t.filteredItems.value.map(n=>({item:n,key:qo(n,t.settings.value),label:Ko(n,t.settings.value),selected:t.isSelected(n),disabled:Yo(n),group:Jo(n,t.settings.value),index:e++}))}),c=q(()=>i.value?`${a}-option-${i.value}`:void 0),l=q(()=>{let e=new Map;for(let t of s.value){let n=t.group||`Ungrouped`,r=e.get(n)||[];r.push(t),e.set(n,r)}return Array.from(e.entries()).map(([e,t])=>{let n=t.filter(e=>!e.disabled);return{name:e,items:t,enabledItems:n,selected:n.length>0&&n.every(e=>e.selected),disabled:n.length===0}})}),u=q(()=>t.selectedItems.value.length?t.selectedItems.value.map(e=>Ko(e,t.settings.value)).join(`, `):t.settings.value.text||`Select`),d=()=>{n.value=!0,!i.value&&s.value[0]&&(i.value=s.value[0].key)},f=()=>{n.value=!1},p=()=>n.value?f():d(),m=e=>{let t=s.value.filter(e=>!e.disabled),n=Math.max(0,t.findIndex(e=>e.key===i.value)),r=t[Math.min(Math.max(n+e,0),t.length-1)];r&&(i.value=r.key)},h=(e={})=>es({"data-stackline-multiselect":`true`,"data-open":n.value?`true`:`false`},e),g=(e={})=>es({type:`button`,role:`combobox`,"aria-expanded":n.value?`true`:`false`,"aria-haspopup":`listbox`,"aria-controls":o,"aria-activedescendant":c.value,onClick:p,onKeydown:e=>{(e.key===`Enter`||e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),p()),e.key===`ArrowDown`&&(e.preventDefault(),d(),m(1)),e.key===`ArrowUp`&&(e.preventDefault(),d(),m(-1)),e.key===`Escape`&&f()}},e),_=(e={})=>es({value:r.value,"aria-label":`Search options`,onInput:e=>{r.value=String(e.target.value||``),t.setFilter(r.value)},onKeydown:e=>{e.key===`ArrowDown`&&(e.preventDefault(),m(1)),e.key===`ArrowUp`&&(e.preventDefault(),m(-1)),e.key===`Escape`&&f()}},e),v=(e={})=>es({id:o,role:`listbox`,"aria-multiselectable":t.settings.value.singleSelection?`false`:`true`},e),y=e=>{e.disabled||(t.toggleItem(e.item),i.value=e.key,t.settings.value.singleSelection&&f())};return{isOpen:n,query:r,filter:t.filter,activeKey:i,activeDescendantId:c,listboxId:o,settings:t.settings,filteredItems:t.filteredItems,selectableItems:t.selectableItems,selectedItems:t.selectedItems,visibleBadges:t.visibleBadges,hiddenBadgeCount:t.hiddenBadgeCount,visibleOptions:s,groups:l,allFilteredSelected:t.allFilteredSelected,label:u,open:d,close:f,toggleOpen:p,clearSelection:t.clearSelection,selectAll:t.selectAll,deSelectAll:t.deSelectAll,toggleGroup:t.toggleGroup,toggleItem:t.toggleItem,selectItem:t.selectItem,removeItem:t.removeItem,removeLastSelectedItem:t.removeLastSelectedItem,isSelected:t.isSelected,setFilter:e=>{r.value=e,t.setFilter(e)},getItemKey:t.getItemKey,getItemLabel:t.getItemLabel,getRootProps:h,getTriggerProps:g,getSearchInputProps:_,getListboxProps:v,getOptionProps:(e,t={})=>es({id:`${a}-option-${e.key}`,role:`option`,tabindex:e.disabled?-1:0,"aria-selected":e.selected?`true`:`false`,"aria-checked":e.selected?`true`:`false`,"aria-disabled":e.disabled?`true`:`false`,onMouseenter:()=>{i.value=e.key},onClick:()=>{y(e)},onKeydown:t=>{t.key===`ArrowDown`&&(t.preventDefault(),m(1)),t.key===`ArrowUp`&&(t.preventDefault(),m(-1)),(t.key===`Enter`||t.key===` `||t.key===`Spacebar`)&&(t.preventDefault(),y(e)),t.key===`Escape`&&f()}},t),getClearAllButtonProps:(e={})=>es({type:`button`,"aria-label":`Clear selected options`,onClick:t.clearSelection},e),getRemoveButtonProps:(e,n={})=>es({type:`button`,"aria-label":`Remove ${Ko(e,t.settings.value)}`,onClick:()=>{t.removeItem(e)},onKeydown:n=>{(n.key===`Backspace`||n.key===`Delete`)&&(n.preventDefault(),t.removeItem(e))}},n)}}function as(){return{defineSettings:e=>ts(e),defineSlots:ns,useMultiSelectState:(e={})=>rs(e),useMultiSelectDropdown:(e={})=>is(e)}}var os={class:`code-grid`},ss={class:`code-card`},cs={class:`code-card`},ls={class:`code-card`},us={__name:`SourcePanels`,props:{sources:{type:Object,required:!0}},setup(e){return(t,n)=>(B(),V(`div`,os,[U(`section`,ss,[n[0]||=U(`strong`,null,`Vue`,-1),U(`pre`,null,E(e.sources.component),1)]),U(`section`,cs,[n[1]||=U(`strong`,null,`Data`,-1),U(`pre`,null,E(e.sources.data),1)]),U(`section`,ls,[n[2]||=U(`strong`,null,`CSS`,-1),U(`pre`,null,E(e.sources.css||`/* No custom CSS for this example. */`),1)])]))}},ds={class:`skin-section`},fs={class:`section-heading`},ps={class:`eyebrow`},ms={class:`example-copy`},hs=[`href`],gs={class:`example-row`},_s={class:`demo-cell`},vs={class:`code-cell`},ys={key:0,class:`activity`},bs={key:1,class:`activity`},X={__name:`ExampleShell`,props:{meta:{type:Object,required:!0},sources:{type:Object,required:!0},events:{type:Array,default:()=>[]}},setup(e){let t=q(()=>{let e=window.location.hash.replace(/^#\/?/,``)||window.location.pathname.replace(/^\/+|\/+$/g,``)||`basic`;return`https://stackblitz.com/github/alexandroit/stackline-vue-multiselect-vue-3?file=`+encodeURIComponent(`src/examples/`+e+`/`+e+`.component.vue`)+`&startScript=start&initialpath=`+encodeURIComponent(`/`+e)});return(n,r)=>(B(),V(z,null,[U(`section`,ds,[U(`div`,fs,[U(`p`,ps,E(e.meta.eyebrow||`Vue example`),1),U(`h2`,null,E(e.meta.title),1),U(`p`,ms,E(e.meta.description),1),U(`a`,{class:`stackblitz-row-link`,href:t.value,target:`_blank`,rel:`noopener`},`Open this route in StackBlitz`,8,hs)]),U(`article`,gs,[U(`div`,_s,[gr(n.$slots,`default`)]),U(`div`,vs,[W(us,{sources:e.sources},null,8,[`sources`])])])]),e.events.length?(B(),V(`section`,ys,[r[0]||=U(`h2`,null,`Event log`,-1),(B(!0),V(z,null,hr(e.events,(e,t)=>(B(),V(`p`,{key:e+t},E(e),1))),128))])):(B(),V(`section`,bs,[...r[1]||=[U(`h2`,null,`Event log`,-1),U(`p`,null,`ready`,-1)]]))],64))}};function Z(e=`classic`,t=`Select options`,n={}){return{singleSelection:!1,text:t,selectAllText:`Select all`,unSelectAllText:`Deselect all`,enableCheckAll:!0,enableSearchFilter:!0,searchPlaceholderText:`Search`,badgeShowLimit:2,maxHeight:220,showCheckbox:!0,noDataLabel:`No data`,clearAll:!0,primaryKey:`id`,labelKey:`itemName`,skin:e,...n}}function xs(e){return e?`country-flag fi fi-`+String(e).toLowerCase():`country-flag`}function Ss(e){return Array.isArray(e)?e.length+` items`:e&&typeof e==`object`&&e.itemName?e.itemName:String(e??``)}function Q(e,t){return e+`: `+Ss(t)}var $=[{id:1,itemName:`Brazil`,name:`BR`,flag:`BR`,capital:`Brasilia`,region:`South America`,category:`Americas`,disabled:!1},{id:2,itemName:`Canada`,name:`CA`,flag:`CA`,capital:`Ottawa`,region:`North America`,category:`Americas`,disabled:!1},{id:3,itemName:`Portugal`,name:`PT`,flag:`PT`,capital:`Lisbon`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:4,itemName:`Argentina`,name:`AR`,flag:`AR`,capital:`Buenos Aires`,region:`South America`,category:`Americas`,disabled:!1},{id:5,itemName:`Germany`,name:`DE`,flag:`DE`,capital:`Berlin`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:6,itemName:`Mexico`,name:`MX`,flag:`MX`,capital:`Mexico City`,region:`North America`,category:`Americas`,disabled:!1},{id:7,itemName:`Colombia`,name:`CO`,flag:`CO`,capital:`Bogota`,region:`South America`,category:`Americas`,disabled:!1},{id:8,itemName:`Uruguay`,name:`UY`,flag:`UY`,capital:`Montevideo`,region:`South America`,category:`Americas`,disabled:!1},{id:9,itemName:`Costa Rica`,name:`CR`,flag:`CR`,capital:`San Jose`,region:`Central America`,category:`Americas`,disabled:!0},{id:10,itemName:`Chile`,name:`CL`,flag:`CL`,capital:`Santiago`,region:`South America`,category:`Americas`,disabled:!1},{id:11,itemName:`Peru`,name:`PE`,flag:`PE`,capital:`Lima`,region:`South America`,category:`Americas`,disabled:!1},{id:12,itemName:`Ecuador`,name:`EC`,flag:`EC`,capital:`Quito`,region:`South America`,category:`Americas`,disabled:!1},{id:13,itemName:`Panama`,name:`PA`,flag:`PA`,capital:`Panama City`,region:`Central America`,category:`Americas`,disabled:!1},{id:14,itemName:`Dominican Republic`,name:`DO`,flag:`DO`,capital:`Santo Domingo`,region:`Caribbean`,category:`Americas`,disabled:!1},{id:15,itemName:`Jamaica`,name:`JM`,flag:`JM`,capital:`Kingston`,region:`Caribbean`,category:`Americas`,disabled:!1},{id:16,itemName:`Bahamas`,name:`BS`,flag:`BS`,capital:`Nassau`,region:`Caribbean`,category:`Americas`,disabled:!1},{id:17,itemName:`Barbados`,name:`BB`,flag:`BB`,capital:`Bridgetown`,region:`Caribbean`,category:`Americas`,disabled:!1},{id:18,itemName:`Belize`,name:`BZ`,flag:`BZ`,capital:`Belmopan`,region:`Central America`,category:`Americas`,disabled:!1},{id:19,itemName:`Paraguay`,name:`PY`,flag:`PY`,capital:`Asuncion`,region:`South America`,category:`Americas`,disabled:!1},{id:20,itemName:`Ireland`,name:`IE`,flag:`IE`,capital:`Dublin`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:21,itemName:`Spain`,name:`ES`,flag:`ES`,capital:`Madrid`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:22,itemName:`France`,name:`FR`,flag:`FR`,capital:`Paris`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:23,itemName:`Italy`,name:`IT`,flag:`IT`,capital:`Rome`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:24,itemName:`Netherlands`,name:`NL`,flag:`NL`,capital:`Amsterdam`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:25,itemName:`Belgium`,name:`BE`,flag:`BE`,capital:`Brussels`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:26,itemName:`Switzerland`,name:`CH`,flag:`CH`,capital:`Bern`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:27,itemName:`Austria`,name:`AT`,flag:`AT`,capital:`Vienna`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:28,itemName:`Sweden`,name:`SE`,flag:`SE`,capital:`Stockholm`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:29,itemName:`Norway`,name:`NO`,flag:`NO`,capital:`Oslo`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:30,itemName:`Denmark`,name:`DK`,flag:`DK`,capital:`Copenhagen`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:31,itemName:`Finland`,name:`FI`,flag:`FI`,capital:`Helsinki`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:32,itemName:`Iceland`,name:`IS`,flag:`IS`,capital:`Reykjavik`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:33,itemName:`Czech Republic`,name:`CZ`,flag:`CZ`,capital:`Prague`,region:`Central Europe`,category:`Europe`,disabled:!1},{id:34,itemName:`Slovakia`,name:`SK`,flag:`SK`,capital:`Bratislava`,region:`Central Europe`,category:`Europe`,disabled:!1},{id:35,itemName:`Slovenia`,name:`SI`,flag:`SI`,capital:`Ljubljana`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:36,itemName:`Croatia`,name:`HR`,flag:`HR`,capital:`Zagreb`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:37,itemName:`Greece`,name:`GR`,flag:`GR`,capital:`Athens`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:38,itemName:`Malta`,name:`MT`,flag:`MT`,capital:`Valletta`,region:`Southern Europe`,category:`Europe`,disabled:!1},{id:39,itemName:`Luxembourg`,name:`LU`,flag:`LU`,capital:`Luxembourg`,region:`Western Europe`,category:`Europe`,disabled:!1},{id:40,itemName:`Estonia`,name:`EE`,flag:`EE`,capital:`Tallinn`,region:`Northern Europe`,category:`Europe`,disabled:!1},{id:41,itemName:`South Africa`,name:`ZA`,flag:`ZA`,capital:`Pretoria`,region:`Southern Africa`,category:`Africa`,disabled:!1},{id:42,itemName:`Kenya`,name:`KE`,flag:`KE`,capital:`Nairobi`,region:`East Africa`,category:`Africa`,disabled:!1},{id:43,itemName:`Ghana`,name:`GH`,flag:`GH`,capital:`Accra`,region:`West Africa`,category:`Africa`,disabled:!1},{id:44,itemName:`Botswana`,name:`BW`,flag:`BW`,capital:`Gaborone`,region:`Southern Africa`,category:`Africa`,disabled:!1},{id:45,itemName:`Namibia`,name:`NA`,flag:`NA`,capital:`Windhoek`,region:`Southern Africa`,category:`Africa`,disabled:!1},{id:46,itemName:`Rwanda`,name:`RW`,flag:`RW`,capital:`Kigali`,region:`East Africa`,category:`Africa`,disabled:!1},{id:47,itemName:`Tanzania`,name:`TZ`,flag:`TZ`,capital:`Dodoma`,region:`East Africa`,category:`Africa`,disabled:!1},{id:48,itemName:`Senegal`,name:`SN`,flag:`SN`,capital:`Dakar`,region:`West Africa`,category:`Africa`,disabled:!1},{id:49,itemName:`Mauritius`,name:`MU`,flag:`MU`,capital:`Port Louis`,region:`East Africa`,category:`Africa`,disabled:!1},{id:50,itemName:`Seychelles`,name:`SC`,flag:`SC`,capital:`Victoria`,region:`East Africa`,category:`Africa`,disabled:!1},{id:51,itemName:`Cabo Verde`,name:`CV`,flag:`CV`,capital:`Praia`,region:`West Africa`,category:`Africa`,disabled:!1},{id:52,itemName:`Japan`,name:`JP`,flag:`JP`,capital:`Tokyo`,region:`East Asia`,category:`Asia`,disabled:!1},{id:53,itemName:`Singapore`,name:`SG`,flag:`SG`,capital:`Singapore`,region:`Southeast Asia`,category:`Asia`,disabled:!1},{id:54,itemName:`Malaysia`,name:`MY`,flag:`MY`,capital:`Kuala Lumpur`,region:`Southeast Asia`,category:`Asia`,disabled:!1},{id:55,itemName:`Thailand`,name:`TH`,flag:`TH`,capital:`Bangkok`,region:`Southeast Asia`,category:`Asia`,disabled:!1},{id:56,itemName:`Indonesia`,name:`ID`,flag:`ID`,capital:`Jakarta`,region:`Southeast Asia`,category:`Asia`,disabled:!1},{id:57,itemName:`Philippines`,name:`PH`,flag:`PH`,capital:`Manila`,region:`Southeast Asia`,category:`Asia`,disabled:!1},{id:58,itemName:`Nepal`,name:`NP`,flag:`NP`,capital:`Kathmandu`,region:`South Asia`,category:`Asia`,disabled:!1},{id:59,itemName:`Bhutan`,name:`BT`,flag:`BT`,capital:`Thimphu`,region:`South Asia`,category:`Asia`,disabled:!1},{id:60,itemName:`Sri Lanka`,name:`LK`,flag:`LK`,capital:`Sri Jayawardenepura Kotte`,region:`South Asia`,category:`Asia`,disabled:!1},{id:61,itemName:`Australia`,name:`AU`,flag:`AU`,capital:`Canberra`,region:`Oceania`,category:`Oceania`,disabled:!1},{id:62,itemName:`New Zealand`,name:`NZ`,flag:`NZ`,capital:`Wellington`,region:`Oceania`,category:`Oceania`,disabled:!1},{id:63,itemName:`Fiji`,name:`FJ`,flag:`FJ`,capital:`Suva`,region:`Oceania`,category:`Oceania`,disabled:!1},{id:64,itemName:`Samoa`,name:`WS`,flag:`WS`,capital:`Apia`,region:`Oceania`,category:`Oceania`,disabled:!1}],Cs=[{id:1,itemName:`Vue`,category:`Framework`},{id:2,itemName:`TypeScript`,category:`Language`},{id:3,itemName:`JavaScript`,category:`Language`},{id:4,itemName:`HTML`,category:`Web`},{id:5,itemName:`CSS`,category:`Web`},{id:6,itemName:`Accessibility`,category:`Quality`}],ws=[{id:1,itemName:`Revenue`,detail:`Finance metric`,color:`#2563eb`},{id:2,itemName:`Retention`,detail:`Customer metric`,color:`#0f766e`},{id:3,itemName:`Risk`,detail:`Operations metric`,color:`#b45309`},{id:4,itemName:`Quality`,detail:`Product metric`,color:`#7c3aed`},{id:5,itemName:`Support`,detail:`Service metric`,color:`#dc2626`}],Ts=Array.from({length:140},(e,t)=>({id:t+1,itemName:`Person `+(t+1),name:`Person `+(t+1),region:[`Brazilian`,`Canadian`,`Mexican`,`Colombian`][t%4]})),Es={eyebrow:`Basic`,title:`Basic usage`,description:`Classic multi-select with chips, clear all, and selected counters.`},Ds=$,Os=$.slice(0,3),ks=Z(`classic`,`Basic usage`,{enableSearchFilter:!0,text:`Basic usage`,badgeShowLimit:3}),As=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './basic.data';
import componentSource from './basic.component.vue?raw';
import dataSource from './basic.data.js?raw';
import styleSource from './basic.component.css?raw';
import './basic.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('basic')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,js=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Basic",
  title: "Basic usage",
  description: "Classic multi-select with chips, clear all, and selected counters."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Basic usage", {
  enableSearchFilter: true,
  text: "Basic usage",
  badgeShowLimit: 3
});
`,Ms=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Ns={class:`demo-surface`},Ps={key:2,class:`validation-message`},Fs={__name:`basic.component`,setup(e){let t=M(Ds.slice(0,Ds.length)),n=M(Os.slice()),r=M({...ks}),i=M([]),a={component:As,data:js,css:Ms},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`basic`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Es),sources:a,events:i.value},{default:I(()=>[U(`div`,Ns,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Ps,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Is={eyebrow:`Keyboard contract`,title:`Keyboard feature switches`,description:`Turn individual keyboard behaviors on or off and compare how Space behaves on focused options.`},Ls=$.slice(0,2);Z(`classic`,`Keyboard contract`,{enableSearchFilter:!0,text:`Keyboard contract`});var Rs=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="keyboard-demo">
      <div class="keyboard-switches" aria-label="Keyboard feature toggles">
        <button v-for="feature in features" :key="feature.key" type="button" :class="{ active: keyboard[feature.key] }" @click="keyboard[feature.key] = !keyboard[feature.key]">
          {{ feature.label }}
        </button>
      </div>

      <div class="space-mode-switches" aria-label="Space option action">
        <button type="button" :class="{ active: spaceOptionAction === 'toggle' }" @click="spaceOptionAction = 'toggle'">Toggle current</button>
        <button type="button" :class="{ active: spaceOptionAction === 'toggle-and-next' }" @click="spaceOptionAction = 'toggle-and-next'">Toggle + next</button>
      </div>

      <VueMultiselectDropdown
        :data="countries"
        v-model="selected"
        :settings="settings"
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
      />

      <pre class="keyboard-json">{{ keyboardJson }}</pre>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta, selectedSeed } from './keyboard-contract.data';
import componentSource from './keyboard-contract.component.vue?raw';
import dataSource from './keyboard-contract.data.js?raw';
import styleSource from './keyboard-contract.component.css?raw';
import './keyboard-contract.component.css';

const selected = ref([...selectedSeed]);
const events = ref(['keyboard ready']);
const spaceOptionAction = ref('toggle');
const keyboard = reactive({
  space: true,
  tab: true,
  arrows: true,
  escape: true,
  backspaceRemovesLastWhenSearchEmpty: false,
  deleteRemovesFocusedBadge: true
});
const features = [
  { key: 'space', label: 'Space' },
  { key: 'tab', label: 'Tab' },
  { key: 'arrows', label: 'Arrows' },
  { key: 'escape', label: 'Escape' },
  { key: 'backspaceRemovesLastWhenSearchEmpty', label: 'Empty search Backspace' },
  { key: 'deleteRemovesFocusedBadge', label: 'Focused badge Delete' }
];
const settings = computed(() => makeSettings('classic', 'Keyboard contract', {
  groupBy: 'category',
  selectGroup: true,
  badgeShowLimit: 3,
  keyboard: { ...keyboard, spaceOptionAction: spaceOptionAction.value }
}));
const keyboardJson = computed(() => JSON.stringify({ keyboard: settings.value.keyboard }, null, 2));
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}
<\/script>
`,zs=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Keyboard contract",
  title: "Keyboard feature switches",
  description: "Turn individual keyboard behaviors on or off and compare how Space behaves on focused options."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Keyboard contract", {
  enableSearchFilter: true,
  text: "Keyboard contract"
});
`,Bs=`.keyboard-demo {
  display: grid;
  gap: 14px;
  min-width: 0;
}

.keyboard-switches,
.space-mode-switches {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.keyboard-switches button,
.space-mode-switches button {
  min-height: 32px;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #334155;
  font-weight: 800;
}

.keyboard-switches button.active {
  border-color: #0f766e;
  background: #0f766e;
  color: #ffffff;
}

.space-mode-switches button.active {
  border-color: #4f46e5;
  background: #4f46e5;
  color: #ffffff;
}

.keyboard-json {
  margin: 0;
  overflow: auto;
  padding: 12px;
  border: 1px solid #d9dee8;
  background: #ffffff;
  color: #334155;
  font-family: "Courier New", monospace;
  font-size: 12px;
}
`,Vs={class:`keyboard-demo`},Hs={class:`keyboard-switches`,"aria-label":`Keyboard feature toggles`},Us=[`onClick`],Ws={class:`space-mode-switches`,"aria-label":`Space option action`},Gs={class:`keyboard-json`},Ks={__name:`keyboard-contract.component`,setup(e){let t=M([...Ls]),n=M([`keyboard ready`]),r=M(`toggle`),i=It({space:!0,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0}),a=[{key:`space`,label:`Space`},{key:`tab`,label:`Tab`},{key:`arrows`,label:`Arrows`},{key:`escape`,label:`Escape`},{key:`backspaceRemovesLastWhenSearchEmpty`,label:`Empty search Backspace`},{key:`deleteRemovesFocusedBadge`,label:`Focused badge Delete`}],o=q(()=>Z(`classic`,`Keyboard contract`,{groupBy:`category`,selectGroup:!0,badgeShowLimit:3,keyboard:{...i,spaceOptionAction:r.value}})),s=q(()=>JSON.stringify({keyboard:o.value.keyboard},null,2)),c={component:Rs,data:zs,css:Bs};function l(e,t){n.value.unshift(Q(e,t)),n.value=n.value.slice(0,6)}return(e,u)=>(B(),H(X,{meta:N(Is),sources:c,events:n.value},{default:I(()=>[U(`div`,Vs,[U(`div`,Hs,[(B(),V(z,null,hr(a,e=>U(`button`,{key:e.key,type:`button`,class:T({active:i[e.key]}),onClick:t=>i[e.key]=!i[e.key]},E(e.label),11,Us)),64))]),U(`div`,Ws,[U(`button`,{type:`button`,class:T({active:r.value===`toggle`}),onClick:u[0]||=e=>r.value=`toggle`},`Toggle current`,2),U(`button`,{type:`button`,class:T({active:r.value===`toggle-and-next`}),onClick:u[1]||=e=>r.value=`toggle-and-next`},`Toggle + next`,2)]),W(N(Y),{data:N($),modelValue:t.value,"onUpdate:modelValue":u[2]||=e=>t.value=e,settings:o.value,onChange:u[3]||=e=>l(`change`,e),onSelect:u[4]||=e=>l(`select`,e),onDeSelect:u[5]||=e=>l(`de-select`,e)},null,8,[`data`,`modelValue`,`settings`]),U(`pre`,Gs,E(s.value),1)])]),_:1},8,[`meta`,`events`]))}},qs={eyebrow:`ARIA audit`,title:`aria-selected plus aria-checked`,description:`Open the list and confirm the active multiselect option exposes both values for screen reader compatibility.`},Js=$,Ys=$.slice(0,3),Xs=Z(`classic`,`ARIA state audit`,{enableSearchFilter:!0,text:`ARIA state audit`,groupBy:`category`,selectGroup:!0,badgeShowLimit:3,maxHeight:180}),Zs=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './aria-state.data';
import componentSource from './aria-state.component.vue?raw';
import dataSource from './aria-state.data.js?raw';
import styleSource from './aria-state.component.css?raw';
import './aria-state.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('aria-state')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Qs=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "ARIA audit",
  title: "aria-selected plus aria-checked",
  description: "Open the list and confirm the active multiselect option exposes both values for screen reader compatibility."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "ARIA state audit", {
  enableSearchFilter: true,
  text: "ARIA state audit",
  groupBy: "category",
  selectGroup: true,
  badgeShowLimit: 3,
  maxHeight: 180
});
`,$s=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,ec={class:`demo-surface`},tc={key:2,class:`validation-message`},nc={__name:`aria-state.component`,setup(e){let t=M(Js.slice(0,Js.length)),n=M(Ys.slice()),r=M({...Xs}),i=M([]),a={component:Zs,data:Qs,css:$s},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`aria-state`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(qs),sources:a,events:i.value},{default:I(()=>[U(`div`,ec,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,tc,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},rc={eyebrow:`Headless HTML`,title:`100% custom HTML with ARIA getters`,description:`Use Stackline state, filtering, grouping, keyboard handling, ARIA ids, and callbacks while owning every element and class.`};$.slice(0,3),Z(`classic`,`Headless and ARIA`,{enableSearchFilter:!0,text:`Headless and ARIA`});var ic=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="headless-shell" v-bind="dropdown.getRootProps()">
      <div class="headless-toolbar">
        <span>{{ selected.length }} selected</span>
        <button v-bind="dropdown.getClearAllButtonProps()" :disabled="!selected.length">Clear all</button>
      </div>

      <button class="headless-trigger" v-bind="dropdown.getTriggerProps()">
        <span>
          <small>Country filter</small>
          <strong>{{ label }}</strong>
        </span>
        <b>{{ isOpen ? 'Close' : 'Open' }}</b>
      </button>

      <div class="headless-chips" aria-live="polite">
        <span v-for="item in visibleBadges" :key="dropdown.getItemKey(item)" class="headless-chip">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ dropdown.getItemLabel(item) }}
          <button v-bind="dropdown.getRemoveButtonProps(item)">x</button>
        </span>
        <span v-if="hiddenBadgeCount" class="headless-counter">+{{ hiddenBadgeCount }}</span>
      </div>

      <div v-if="isOpen" class="headless-panel">
        <label class="headless-search-label" :for="dropdown.listboxId + '-search'">Search</label>
        <input
          class="headless-search"
          v-bind="dropdown.getSearchInputProps({ id: dropdown.listboxId + '-search' })"
        />

        <div class="headless-listbox" v-bind="dropdown.getListboxProps()">
          <section v-for="group in groups" :key="group.name" class="headless-group">
            <div class="headless-group-head">
              <span>{{ group.name }}</span>
              <button type="button" @click="dropdown.toggleGroup(group.name, group.items.map((option) => option.item))">
                {{ group.selected ? 'Clear group' : 'Select group' }}
              </button>
            </div>

            <div
              v-for="option in group.items"
              :key="option.key"
              :class="['headless-option', { selected: option.selected }]"
              v-bind="dropdown.getOptionProps(option)"
            >
              <span class="headless-check" :data-checked="option.selected ? 'true' : 'false'" aria-hidden="true"></span>
              <span :class="countryOptionClass(option.item.flag)" aria-hidden="true"></span>
              <span class="headless-option-copy">
                <strong>{{ option.label }}</strong>
                <small>{{ option.item.capital }} · {{ option.item.region }}</small>
              </span>
              <code>selected={{ String(option.selected) }}</code>
            </div>
          </section>
        </div>
      </div>
    </section>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, makeSettings } from '../../shared/settings';
import { meta } from './headless-aria.data';
import componentSource from './headless-aria.component.vue?raw';
import dataSource from './headless-aria.data.js?raw';
import styleSource from './headless-aria.component.css?raw';
import './headless-aria.component.css';

const selected = ref(countries.slice(0, 3));
const events = ref([]);
const dropdown = useMultiSelectDropdown({
  data: countries,
  selectedItems: selected,
  onChange(items) {
    selected.value = items;
    events.value.unshift('headless change: ' + items.length + ' selected');
  },
  settings: makeSettings('classic', 'Choose countries', {
    enableSearchFilter: true,
    groupBy: 'category',
    selectGroup: true,
    badgeShowLimit: 2,
    clearAll: true,
    ariaLabel: 'Headless countries'
  })
});
const label = dropdown.label;
const isOpen = dropdown.isOpen;
const visibleBadges = dropdown.visibleBadges;
const hiddenBadgeCount = dropdown.hiddenBadgeCount;
const groups = dropdown.groups;
const sources = { component: componentSource, data: dataSource, css: styleSource };
<\/script>
`,ac=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Headless HTML",
  title: "100% custom HTML with ARIA getters",
  description: "Use Stackline state, filtering, grouping, keyboard handling, ARIA ids, and callbacks while owning every element and class."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Headless and ARIA", {
  enableSearchFilter: true,
  text: "Headless and ARIA"
});
`,oc=`.headless-shell {
  display: grid;
  gap: 12px;
  min-width: 0;
  padding: 14px;
  border: 1px solid rgba(15, 118, 110, 0.28);
  background: linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(37, 99, 235, 0.08)), #ffffff;
}

.headless-toolbar,
.headless-trigger,
.headless-group-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.headless-toolbar {
  color: #475569;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.headless-toolbar button,
.headless-chip button,
.headless-group-head button {
  min-height: 30px;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f766e;
  font-weight: 900;
}

.headless-toolbar button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.headless-trigger {
  width: 100%;
  min-height: 58px;
  padding: 8px 14px;
  cursor: pointer;
  border: 1px solid rgba(15, 118, 110, 0.24);
  background: #ffffff;
  color: #0f172a;
  text-align: left;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
}

.headless-trigger span {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.headless-trigger small {
  color: #64748b;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
}

.headless-trigger strong {
  overflow-wrap: anywhere;
  color: #0f172a;
}

.headless-trigger b {
  flex: none;
  color: #0f766e;
  font-size: 12px;
  text-transform: uppercase;
}

.headless-chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  min-height: 38px;
}

.headless-chip,
.headless-counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 30px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
}

.headless-chip {
  padding: 0 6px 0 8px;
  background: #0f766e;
  color: #ffffff;
}

.headless-chip button {
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.headless-counter {
  min-width: 32px;
  padding: 0 10px;
  border: 1px solid rgba(15, 118, 110, 0.24);
  background: #ecfdf5;
  color: #0f766e;
}

.headless-panel {
  display: grid;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.16);
}

.headless-search-label {
  padding: 10px 12px 0;
  color: #475569;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.headless-search {
  width: calc(100% - 24px);
  min-height: 40px;
  margin: 8px 12px 10px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
}

.headless-listbox {
  display: grid;
  max-height: 300px;
  overflow: auto;
  border-top: 1px solid #e2e8f0;
}

.headless-group + .headless-group {
  border-top: 1px solid #e2e8f0;
}

.headless-group-head {
  min-height: 42px;
  padding: 8px 12px;
  background: #f8fafc;
  color: #475569;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.headless-option {
  display: grid;
  grid-template-columns: 20px 26px minmax(0, 1fr) minmax(96px, auto);
  align-items: center;
  gap: 10px;
  min-height: 56px;
  padding: 8px 12px;
  cursor: pointer;
  border-top: 1px solid #e2e8f0;
}

.headless-option:hover,
.headless-option:focus-visible,
.headless-option.selected {
  background: #f0fdfa;
  outline: none;
}

.headless-check {
  display: inline-grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border: 2px solid #0f766e;
  background: #ffffff;
}

.headless-check[data-checked="true"] {
  background: #0f766e;
  box-shadow: inset 0 0 0 4px #ffffff;
}

.headless-option-copy {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.headless-option-copy small {
  color: #64748b;
}

.headless-option code {
  color: #64748b;
  text-align: right;
}

@media (max-width: 640px) {
  .headless-trigger,
  .headless-toolbar,
  .headless-group-head {
    align-items: stretch;
    flex-direction: column;
  }

  .headless-option {
    grid-template-columns: 20px minmax(0, 1fr);
  }

  .headless-option .fi,
  .headless-option code {
    display: none;
  }
}
`,sc={class:`headless-toolbar`},cc=[`disabled`],lc={class:`headless-chips`,"aria-live":`polite`},uc={key:0,class:`headless-counter`},dc={key:0,class:`headless-panel`},fc=[`for`],pc={class:`headless-group-head`},mc=[`onClick`],hc=[`data-checked`],gc={class:`headless-option-copy`},_c={__name:`headless-aria.component`,setup(e){let t=M($.slice(0,3)),n=M([]),r=is({data:$,selectedItems:t,onChange(e){t.value=e,n.value.unshift(`headless change: `+e.length+` selected`)},settings:Z(`classic`,`Choose countries`,{enableSearchFilter:!0,groupBy:`category`,selectGroup:!0,badgeShowLimit:2,clearAll:!0,ariaLabel:`Headless countries`})}),i=r.label,a=r.isOpen,o=r.visibleBadges,s=r.hiddenBadgeCount,c=r.groups,l={component:ic,data:ac,css:oc};return(e,u)=>(B(),H(X,{meta:N(rc),sources:l,events:n.value},{default:I(()=>[U(`section`,Yi({class:`headless-shell`},N(r).getRootProps()),[U(`div`,sc,[U(`span`,null,E(t.value.length)+` selected`,1),U(`button`,Yi(N(r).getClearAllButtonProps(),{disabled:!t.value.length}),`Clear all`,16,cc)]),U(`button`,Yi({class:`headless-trigger`},N(r).getTriggerProps()),[U(`span`,null,[u[0]||=U(`small`,null,`Country filter`,-1),U(`strong`,null,E(N(i)),1)]),U(`b`,null,E(N(a)?`Close`:`Open`),1)],16),U(`div`,lc,[(B(!0),V(z,null,hr(N(o),e=>(B(),V(`span`,{key:N(r).getItemKey(e),class:`headless-chip`},[U(`span`,{class:T(N(xs)(e.flag)),"aria-hidden":`true`},null,2),Gi(` `+E(N(r).getItemLabel(e))+` `,1),U(`button`,Yi({ref_for:!0},N(r).getRemoveButtonProps(e)),`x`,16)]))),128)),N(s)?(B(),V(`span`,uc,`+`+E(N(s)),1)):G(``,!0)]),N(a)?(B(),V(`div`,dc,[U(`label`,{class:`headless-search-label`,for:N(r).listboxId+`-search`},`Search`,8,fc),U(`input`,Yi({class:`headless-search`},N(r).getSearchInputProps({id:N(r).listboxId+`-search`})),null,16),U(`div`,Yi({class:`headless-listbox`},N(r).getListboxProps()),[(B(!0),V(z,null,hr(N(c),e=>(B(),V(`section`,{key:e.name,class:`headless-group`},[U(`div`,pc,[U(`span`,null,E(e.name),1),U(`button`,{type:`button`,onClick:t=>N(r).toggleGroup(e.name,e.items.map(e=>e.item))},E(e.selected?`Clear group`:`Select group`),9,mc)]),(B(!0),V(z,null,hr(e.items,e=>(B(),V(`div`,Yi({key:e.key,class:[`headless-option`,{selected:e.selected}]},{ref_for:!0},N(r).getOptionProps(e)),[U(`span`,{class:`headless-check`,"data-checked":e.selected?`true`:`false`,"aria-hidden":`true`},null,8,hc),U(`span`,{class:T(N(xs)(e.item.flag)),"aria-hidden":`true`},null,2),U(`span`,gc,[U(`strong`,null,E(e.label),1),U(`small`,null,E(e.item.capital)+` · `+E(e.item.region),1)]),U(`code`,null,`selected=`+E(String(e.selected)),1)],16))),128))]))),128))],16)])):G(``,!0)],16)]),_:1},8,[`meta`,`events`]))}},vc={eyebrow:`State hook`,title:`useMultiSelectState`,description:`Use the Stackline selection, filtering, grouping, badge counter, and callbacks while rendering your own controls.`};$.slice(0,3),Z(`classic`,`State hook`,{enableSearchFilter:!0,text:`State hook`});var yc=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="state-hook-demo">
      <div class="state-toolbar">
        <input v-model="filter" type="search" placeholder="Filter countries" />
        <button type="button" @click="state.selectAll(filteredItems)">Select filtered</button>
        <button type="button" @click="state.deSelectAll(filteredItems)">Clear filtered</button>
      </div>
      <div class="state-selected">
        <span v-for="item in visibleBadges" :key="state.getItemKey(item)" class="state-chip">
          {{ state.getItemLabel(item) }}
          <button type="button" @click="state.removeItem(item)">x</button>
        </span>
        <span v-if="hiddenBadgeCount" class="state-counter">+{{ hiddenBadgeCount }}</span>
      </div>
      <div class="state-options">
        <button v-for="item in filteredItems" :key="state.getItemKey(item)" type="button" :class="{ selected: state.isSelected(item) }" @click="state.toggleItem(item)">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ state.getItemLabel(item) }}
        </button>
      </div>
    </section>
  </ExampleShell>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useMultiSelectState } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, makeSettings } from '../../shared/settings';
import { meta } from './state-hook.data';
import componentSource from './state-hook.component.vue?raw';
import dataSource from './state-hook.data.js?raw';
import styleSource from './state-hook.component.css?raw';
import './state-hook.component.css';

const selected = ref(countries.slice(0, 4));
const events = ref([]);
const state = useMultiSelectState({
  data: countries,
  selectedItems: selected,
  onChange(items) {
    selected.value = items;
    events.value.unshift('state change: ' + items.length + ' selected');
  },
  settings: makeSettings('classic', 'State hook countries', { badgeShowLimit: 3 })
});
const filter = state.filter;
const filteredItems = state.filteredItems;
const visibleBadges = state.visibleBadges;
const hiddenBadgeCount = state.hiddenBadgeCount;
watch(filter, (value) => state.setFilter(value));
const sources = { component: componentSource, data: dataSource, css: styleSource };
<\/script>
`,bc=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "State hook",
  title: "useMultiSelectState",
  description: "Use the Stackline selection, filtering, grouping, badge counter, and callbacks while rendering your own controls."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "State hook", {
  enableSearchFilter: true,
  text: "State hook"
});
`,xc=`.state-hook-demo {
  display: grid;
  gap: 14px;
}

.state-toolbar,
.state-selected,
.state-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.state-toolbar input {
  flex: 1 1 220px;
  min-height: 38px;
  border: 1px solid #cbd5e1;
  padding: 0 12px;
}

.state-toolbar button,
.state-options button {
  min-height: 36px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
  font-weight: 800;
  cursor: pointer;
  padding: 0 12px;
}

.state-options button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.state-options button.selected {
  color: #fff;
  border-color: #0f766e;
  background: #0f766e;
}

.state-chip,
.state-counter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  border-radius: 999px;
  font-weight: 900;
}

.state-chip {
  gap: 8px;
  color: #fff;
  background: #2563eb;
  padding: 0 6px 0 10px;
}

.state-chip button {
  color: #fff;
  border: 0;
  background: #ffffff33;
  border-radius: 999px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.state-counter {
  color: #2563eb;
  background: #dbeafe;
  padding: 0 10px;
}
`,Sc={class:`state-hook-demo`},Cc={class:`state-toolbar`},wc={class:`state-selected`},Tc=[`onClick`],Ec={key:0,class:`state-counter`},Dc={class:`state-options`},Oc=[`onClick`],kc={__name:`state-hook.component`,setup(e){let t=M($.slice(0,4)),n=M([]),r=rs({data:$,selectedItems:t,onChange(e){t.value=e,n.value.unshift(`state change: `+e.length+` selected`)},settings:Z(`classic`,`State hook countries`,{badgeShowLimit:3})}),i=r.filter,a=r.filteredItems,o=r.visibleBadges,s=r.hiddenBadgeCount;Nn(i,e=>r.setFilter(e));let c={component:yc,data:bc,css:xc};return(e,t)=>(B(),H(X,{meta:N(vc),sources:c,events:n.value},{default:I(()=>[U(`section`,Sc,[U(`div`,Cc,[Dn(U(`input`,{"onUpdate:modelValue":t[0]||=e=>j(i)?i.value=e:null,type:`search`,placeholder:`Filter countries`},null,512),[[lo,N(i)]]),U(`button`,{type:`button`,onClick:t[1]||=e=>N(r).selectAll(N(a))},`Select filtered`),U(`button`,{type:`button`,onClick:t[2]||=e=>N(r).deSelectAll(N(a))},`Clear filtered`)]),U(`div`,wc,[(B(!0),V(z,null,hr(N(o),e=>(B(),V(`span`,{key:N(r).getItemKey(e),class:`state-chip`},[Gi(E(N(r).getItemLabel(e))+` `,1),U(`button`,{type:`button`,onClick:t=>N(r).removeItem(e)},`x`,8,Tc)]))),128)),N(s)?(B(),V(`span`,Ec,`+`+E(N(s)),1)):G(``,!0)]),U(`div`,Dc,[(B(!0),V(z,null,hr(N(a),e=>(B(),V(`button`,{key:N(r).getItemKey(e),type:`button`,class:T({selected:N(r).isSelected(e)}),onClick:t=>N(r).toggleItem(e)},[U(`span`,{class:T(N(xs)(e.flag)),"aria-hidden":`true`},null,2),Gi(` `+E(N(r).getItemLabel(e)),1)],10,Oc))),128))])])]),_:1},8,[`meta`,`events`]))}},Ac={eyebrow:`Slots API`,title:`Custom HTML slots`,description:`Replace the trigger, badges, search shell, group header, options, and footer while preserving package behavior.`};$.slice(0,3),Z(`classic`,`Slots API`,{enableSearchFilter:!0,text:`Slots API`});var jc=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <VueMultiselectDropdown
      :data="countries"
      v-model="selected"
      :settings="settings"
      @change="record('change', $event)"
    >
      <template #option="{ item, label, selected: optionSelected }">
        <span class="slot-option">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          <span>
            <strong>{{ label }}</strong>
            <small>{{ item.capital }} - {{ item.region }}</small>
          </span>
          <b>{{ optionSelected ? 'Selected' : 'Available' }}</b>
        </span>
      </template>
      <template #badge="{ item, label, remove }">
        <span class="slot-badge">
          <span :class="countryOptionClass(item.flag)" aria-hidden="true"></span>
          {{ label }}
          <button type="button" @click.stop="remove">x</button>
        </span>
      </template>
      <template #group-header="{ group, selected: groupSelected, selectGroup }">
        <button class="slot-group" type="button" @click="selectGroup">
          {{ group.name }} - {{ group.items.length }} options - {{ groupSelected ? 'selected' : 'select group' }}
        </button>
      </template>
    </VueMultiselectDropdown>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { countryOptionClass, eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './slots-api.data';
import componentSource from './slots-api.component.vue?raw';
import dataSource from './slots-api.data.js?raw';
import styleSource from './slots-api.component.css?raw';
import './slots-api.component.css';

const selected = ref(countries.slice(0, 4));
const events = ref([]);
const settings = makeSettings('classic', 'Scoped slot countries', {
  groupBy: 'category',
  selectGroup: true,
  badgeShowLimit: 2
});
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}
<\/script>
`,Mc=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Slots API",
  title: "Custom HTML slots",
  description: "Replace the trigger, badges, search shell, group header, options, and footer while preserving package behavior."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Slots API", {
  enableSearchFilter: true,
  text: "Slots API"
});
`,Nc=`.slot-option,
.slot-badge,
.slot-group {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.slot-option {
  width: 100%;
  justify-content: space-between;
}

.slot-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.slot-badge {
  color: #075985;
  background: #e0f2fe;
  min-height: 28px;
  padding: 4px 8px;
  font-weight: 800;
}

.slot-badge button,
.slot-group {
  border: 1px solid #cbd5e1;
  background: #fff;
  cursor: pointer;
}

.slot-badge button {
  width: 18px;
  height: 18px;
  color: inherit;
}

.slot-group {
  width: 100%;
  justify-content: space-between;
  min-height: 38px;
  padding: 0 12px;
  color: #334155;
  font-weight: 900;
}
`,Pc={class:`slot-option`},Fc={class:`slot-badge`},Ic=[`onClick`],Lc=[`onClick`],Rc={__name:`slots-api.component`,setup(e){let t=M($.slice(0,4)),n=M([]),r=Z(`classic`,`Scoped slot countries`,{groupBy:`category`,selectGroup:!0,badgeShowLimit:2}),i={component:jc,data:Mc,css:Nc};function a(e,t){n.value.unshift(Q(e,t)),n.value=n.value.slice(0,6)}return(e,o)=>(B(),H(X,{meta:N(Ac),sources:i,events:n.value},{default:I(()=>[W(N(Y),{data:N($),modelValue:t.value,"onUpdate:modelValue":o[0]||=e=>t.value=e,settings:N(r),onChange:o[1]||=e=>a(`change`,e)},{option:I(({item:e,label:t,selected:n})=>[U(`span`,Pc,[U(`span`,{class:T(N(xs)(e.flag)),"aria-hidden":`true`},null,2),U(`span`,null,[U(`strong`,null,E(t),1),U(`small`,null,E(e.capital)+` - `+E(e.region),1)]),U(`b`,null,E(n?`Selected`:`Available`),1)])]),badge:I(({item:e,label:t,remove:n})=>[U(`span`,Fc,[U(`span`,{class:T(N(xs)(e.flag)),"aria-hidden":`true`},null,2),Gi(` `+E(t)+` `,1),U(`button`,{type:`button`,onClick:po(n,[`stop`])},`x`,8,Ic)])]),"group-header":I(({group:e,selected:t,selectGroup:n})=>[U(`button`,{class:`slot-group`,type:`button`,onClick:n},E(e.name)+` - `+E(e.items.length)+` options - `+E(t?`selected`:`select group`),9,Lc)]),_:1},8,[`data`,`modelValue`,`settings`])]),_:1},8,[`meta`,`events`]))}},zc={eyebrow:`Type-safe factory`,title:`createVueMultiselectDropdown()`,description:`Bind the object shape once, then reuse typed settings, typed slots, and the typed composable helpers.`};$.slice(0,3),Z(`classic`,`Typed helper API`,{enableSearchFilter:!0,text:`Typed helper API`});var Bc=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <VueMultiselectDropdown :data="countries" v-model="selected" :settings="settings" @change="record('change', $event)" />
    <p class="factory-note">The helper keeps settings and composables shaped around the same item contract.</p>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown, createVueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel } from '../../shared/settings';
import { meta } from './type-safe-factory.data';
import componentSource from './type-safe-factory.component.vue?raw';
import dataSource from './type-safe-factory.data.js?raw';
import styleSource from './type-safe-factory.component.css?raw';
import './type-safe-factory.component.css';

const stackline = createVueMultiselectDropdown();
const selected = ref(countries.slice(0, 3));
const events = ref([]);
const settings = stackline.defineSettings({
  text: 'Typed helper countries',
  primaryKey: 'id',
  labelKey: 'itemName',
  enableSearchFilter: true,
  badgeShowLimit: 3,
  skin: 'classic'
});
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
<\/script>
`,Vc=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Type-safe factory",
  title: "createVueMultiselectDropdown()",
  description: "Bind the object shape once, then reuse typed settings, typed slots, and the typed composable helpers."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Typed helper API", {
  enableSearchFilter: true,
  text: "Typed helper API"
});
`,Hc=`.factory-note {
  color: #475569;
  margin: 14px 0 0;
  line-height: 1.6;
}
`,Uc={__name:`type-safe-factory.component`,setup(e){let t=as(),n=M($.slice(0,3)),r=M([]),i=t.defineSettings({text:`Typed helper countries`,primaryKey:`id`,labelKey:`itemName`,enableSearchFilter:!0,badgeShowLimit:3,skin:`classic`}),a={component:Bc,data:Vc,css:Hc};function o(e,t){r.value.unshift(Q(e,t))}return(e,t)=>(B(),H(X,{meta:N(zc),sources:a,events:r.value},{default:I(()=>[W(N(Y),{data:N($),modelValue:n.value,"onUpdate:modelValue":t[0]||=e=>n.value=e,settings:N(i),onChange:t[1]||=e=>o(`change`,e)},null,8,[`data`,`modelValue`,`settings`]),t[2]||=U(`p`,{class:`factory-note`},`The helper keeps settings and composables shaped around the same item contract.`,-1)]),_:1},8,[`meta`,`events`]))}},Wc={eyebrow:`Async contract`,title:`Async object preservation`,description:`Refresh the option source while selected objects stay intact, then add a new item from search.`},Gc=$,Kc=$.slice(0,3),qc=Z(`classic`,`Async object preservation`,{enableSearchFilter:!0,text:`Async object preservation`,groupBy:`category`,selectGroup:!0,badgeShowLimit:3,maxHeight:180}),Jc=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="true">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './async-object-preservation.data';
import componentSource from './async-object-preservation.component.vue?raw';
import dataSource from './async-object-preservation.data.js?raw';
import styleSource from './async-object-preservation.component.css?raw';
import './async-object-preservation.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('async-object-preservation')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Yc=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Async contract",
  title: "Async object preservation",
  description: "Refresh the option source while selected objects stay intact, then add a new item from search."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Async object preservation", {
  enableSearchFilter: true,
  text: "Async object preservation",
  groupBy: "category",
  selectGroup: true,
  badgeShowLimit: 3,
  maxHeight: 180
});
`,Xc=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Zc={class:`demo-surface`},Qc={key:1,class:`demo-actions`},$c={key:2,class:`validation-message`},el={__name:`async-object-preservation.component`,setup(e){let t=M(Gc.slice(0,Gc.length)),n=M(Kc.slice()),r=M({...qc}),i=M([]),a={component:Jc,data:Yc,css:Xc},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`async-object-preservation`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(){let e=t.value.length>20?$.slice(12,42):$;t.value=e.slice(),s(`async data refresh`,e.length+` rows`)}return(e,l)=>(B(),H(X,{meta:N(Wc),sources:a,events:i.value},{default:I(()=>[U(`div`,Zc,[G(``,!0),(B(),V(`div`,Qc,[U(`button`,{type:`button`,onClick:c},`Swap async data`)])),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":l[0]||=e=>n.value=e,settings:r.value,onChange:l[1]||=e=>s(`change`,e),onSelect:l[2]||=e=>s(`select`,e),onDeSelect:l[3]||=e=>s(`de-select`,e),onSelectAll:l[4]||=e=>s(`select-all`,e),onDeSelectAll:l[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,$c,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},tl={eyebrow:`Single mode`,title:`Single selection`,description:`Single-value selection with checkbox-free option rows.`},nl=$,rl=$.slice(0,1),il=Z(`classic`,`Single selection`,{enableSearchFilter:!0,text:`Single selection`,singleSelection:!0,showCheckbox:!1,enableCheckAll:!1}),al=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './single-selection.data';
import componentSource from './single-selection.component.vue?raw';
import dataSource from './single-selection.data.js?raw';
import styleSource from './single-selection.component.css?raw';
import './single-selection.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('single-selection')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,ol=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Single mode",
  title: "Single selection",
  description: "Single-value selection with checkbox-free option rows."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("classic", "Single selection", {
  enableSearchFilter: true,
  text: "Single selection",
  singleSelection: true,
  showCheckbox: false,
  enableCheckAll: false
});
`,sl=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,cl={class:`demo-surface`},ll={key:2,class:`validation-message`},ul={__name:`single-selection.component`,setup(e){let t=M(nl.slice(0,nl.length)),n=M(rl.slice()),r=M({...il}),i=M([]),a={component:al,data:ol,css:sl},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`single-selection`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(tl),sources:a,events:i.value},{default:I(()=>[U(`div`,cl,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,ll,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},dl={eyebrow:`Search`,title:`Search filter`,description:`Search across country names and capitals while keeping controlled Vue state.`},fl=$,pl=$.slice(0,3),ml=Z(`classic`,`Search filter`,{enableSearchFilter:!0,text:`Search filter`,badgeShowLimit:3}),hl=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './search-filter.data';
import componentSource from './search-filter.component.vue?raw';
import dataSource from './search-filter.data.js?raw';
import styleSource from './search-filter.component.css?raw';
import './search-filter.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('search-filter')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,gl=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Search",
  title: "Search filter",
  description: "Search across country names and capitals while keeping controlled Vue state."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search filter", {
  enableSearchFilter: true,
  text: "Search filter",
  badgeShowLimit: 3
});
`,_l=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,vl={class:`demo-surface`},yl={key:2,class:`validation-message`},bl={__name:`search-filter.component`,setup(e){let t=M(fl.slice(0,fl.length)),n=M(pl.slice()),r=M({...ml}),i=M([]),a={component:hl,data:gl,css:_l},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`search-filter`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(dl),sources:a,events:i.value},{default:I(()=>[U(`div`,vl,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,yl,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},xl={eyebrow:`Remote search`,title:`Custom search from API`,description:`Replace the search control with a Vue input and feed the dropdown with API-filtered data.`},Sl=$,Cl=$.slice(0,3),wl=Z(`classic`,`Custom search from API`,{enableSearchFilter:!0,text:`Custom search from API`,searchBy:[`itemName`,`capital`],loadingText:`Loading countries...`}),Tl=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="true">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './custom-search-api.data';
import componentSource from './custom-search-api.component.vue?raw';
import dataSource from './custom-search-api.data.js?raw';
import styleSource from './custom-search-api.component.css?raw';
import './custom-search-api.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('custom-search-api')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,El=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Remote search",
  title: "Custom search from API",
  description: "Replace the search control with a Vue input and feed the dropdown with API-filtered data."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Custom search from API", {
  enableSearchFilter: true,
  text: "Custom search from API",
  searchBy: [
    "itemName",
    "capital"
  ],
  loadingText: "Loading countries..."
});
`,Dl=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Ol={class:`demo-surface`},kl={key:1,class:`demo-actions`},Al={key:2,class:`validation-message`},jl={__name:`custom-search-api.component`,setup(e){let t=M(Sl.slice(0,Sl.length)),n=M(Cl.slice()),r=M({...wl}),i=M([]),a={component:Tl,data:El,css:Dl},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`custom-search-api`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(){let e=t.value.length>20?$.slice(12,42):$;t.value=e.slice(),s(`async data refresh`,e.length+` rows`)}return(e,l)=>(B(),H(X,{meta:N(xl),sources:a,events:i.value},{default:I(()=>[U(`div`,Ol,[G(``,!0),(B(),V(`div`,kl,[U(`button`,{type:`button`,onClick:c},`Swap async data`)])),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":l[0]||=e=>n.value=e,settings:r.value,onChange:l[1]||=e=>s(`change`,e),onSelect:l[2]||=e=>s(`select`,e),onDeSelect:l[3]||=e=>s(`de-select`,e),onSelectAll:l[4]||=e=>s(`select-all`,e),onDeSelectAll:l[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Al,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Ml={eyebrow:`Search fields`,title:`Search filter by property`,description:`Use settings.searchBy so the filter checks name, capital, and region fields.`},Nl=$,Pl=$.slice(0,3),Fl=Z(`classic`,`Search filter by property`,{enableSearchFilter:!0,text:`Search filter by property`,searchBy:[`itemName`,`region`,`capital`]}),Il=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './search-filter-by-property.data';
import componentSource from './search-filter-by-property.component.vue?raw';
import dataSource from './search-filter-by-property.data.js?raw';
import styleSource from './search-filter-by-property.component.css?raw';
import './search-filter-by-property.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('search-filter-by-property')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Ll=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Search fields",
  title: "Search filter by property",
  description: "Use settings.searchBy so the filter checks name, capital, and region fields."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search filter by property", {
  enableSearchFilter: true,
  text: "Search filter by property",
  searchBy: [
    "itemName",
    "region",
    "capital"
  ]
});
`,Rl=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,zl={class:`demo-surface`},Bl={key:2,class:`validation-message`},Vl={__name:`search-filter-by-property.component`,setup(e){let t=M(Nl.slice(0,Nl.length)),n=M(Pl.slice()),r=M({...Fl}),i=M([]),a={component:Il,data:Ll,css:Rl},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`search-filter-by-property`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Ml),sources:a,events:i.value},{default:I(()=>[U(`div`,zl,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Bl,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Hl={eyebrow:`Dynamic input`,title:`Search and Add New Item`,description:`Create a new item from the current search query and keep it in local Vue state.`},Ul=$,Wl=$.slice(0,3),Gl=Z(`classic`,`Search and add new item`,{enableSearchFilter:!0,text:`Search and add new item`,addNewItemOnFilter:!0,addNewButtonText:`Add country`}),Kl=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        @add-filter-new-item="addFilterNewItem"
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './search-add-new-item.data';
import componentSource from './search-add-new-item.component.vue?raw';
import dataSource from './search-add-new-item.data.js?raw';
import styleSource from './search-add-new-item.component.css?raw';
import './search-add-new-item.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('search-add-new-item')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,ql=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Dynamic input",
  title: "Search and Add New Item",
  description: "Create a new item from the current search query and keep it in local Vue state."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Search and add new item", {
  enableSearchFilter: true,
  text: "Search and add new item",
  addNewItemOnFilter: true,
  addNewButtonText: "Add country"
});
`,Jl=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Yl={class:`demo-surface`},Xl={key:2,class:`validation-message`},Zl={__name:`search-add-new-item.component`,setup(e){let t=M(Ul.slice(0,Ul.length)),n=M(Wl.slice()),r=M({...Gl}),i=M([]),a={component:Kl,data:ql,css:Jl},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`search-add-new-item`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(e,n){t.value=t.value.concat({...n,flag:`BR`,region:`Custom`,category:`Custom`}),s(`add-filter-new-item`,e)}return(e,l)=>(B(),H(X,{meta:N(Hl),sources:a,events:i.value},{default:I(()=>[U(`div`,Yl,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":l[0]||=e=>n.value=e,settings:r.value,onChange:l[1]||=e=>s(`change`,e),onSelect:l[2]||=e=>s(`select`,e),onDeSelect:l[3]||=e=>s(`de-select`,e),onSelectAll:l[4]||=e=>s(`select-all`,e),onDeSelectAll:l[5]||=e=>s(`de-select-all`,e),onAddFilterNewItem:c},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Xl,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Ql={eyebrow:`Grouping`,title:`Group By`,description:`Group options by a field and allow group-level selection.`},$l=$,eu=$.slice(0,3),tu=Z(`classic`,`Group By`,{enableSearchFilter:!0,text:`Group By`,groupBy:`region`,selectGroup:!0,badgeShowLimit:3}),nu=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './group-by.data';
import componentSource from './group-by.component.vue?raw';
import dataSource from './group-by.data.js?raw';
import styleSource from './group-by.component.css?raw';
import './group-by.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('group-by')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,ru=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Grouping",
  title: "Group By",
  description: "Group options by a field and allow group-level selection."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Group By", {
  enableSearchFilter: true,
  text: "Group By",
  groupBy: "region",
  selectGroup: true,
  badgeShowLimit: 3
});
`,iu=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,au={class:`demo-surface`},ou={key:2,class:`validation-message`},su={__name:`group-by.component`,setup(e){let t=M($l.slice(0,$l.length)),n=M(eu.slice()),r=M({...tu}),i=M([]),a={component:nu,data:ru,css:iu},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`group-by`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Ql),sources:a,events:i.value},{default:I(()=>[U(`div`,au,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,ou,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},cu={eyebrow:`Render functions`,title:`Templating`,description:`Use Vue render functions for option rows and selected badges.`},lu=ws,uu=ws.slice(0,2),du=Z(`classic`,`Templating`,{enableSearchFilter:!0,text:`Templating`,badgeShowLimit:3}),fu=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        :render-item="renderOption"
        :render-badge="renderBadge"
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './templating.data';
import componentSource from './templating.component.vue?raw';
import dataSource from './templating.data.js?raw';
import styleSource from './templating.component.css?raw';
import './templating.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('templating')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,pu=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Render functions",
  title: "Templating",
  description: "Use Vue render functions for option rows and selected badges."
};
export const dataSeed = metricItems;
export const selectedSeed = metricItems.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Templating", {
  enableSearchFilter: true,
  text: "Templating",
  badgeShowLimit: 3
});
`,mu=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,hu={class:`demo-surface`},gu={key:2,class:`validation-message`},_u={__name:`templating.component`,setup(e){let t=M(lu.slice(0,lu.length)),n=M(uu.slice()),r=M({...du}),i=M([]),a={component:fu,data:pu,css:mu},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`templating`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(e,t){return va(`span`,{class:`template-option`},[e.flag?va(`span`,{class:xs(e.flag),"aria-hidden":`true`}):null,va(`span`,{class:`metric-dot`,style:{backgroundColor:e.color||`#0f766e`}}),va(`span`,[va(`strong`,t.label),va(`small`,e.detail||e.capital||e.region||``)])])}function l(e,t){return va(`span`,{class:`template-badge`},[e.flag?va(`span`,{class:xs(e.flag),"aria-hidden":`true`}):null,va(`span`,{class:`metric-dot`,style:{backgroundColor:e.color||`#0f766e`}}),t.label])}return(e,u)=>(B(),H(X,{meta:N(cu),sources:a,events:i.value},{default:I(()=>[U(`div`,hu,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":u[0]||=e=>n.value=e,settings:r.value,"render-item":c,"render-badge":l,onChange:u[1]||=e=>s(`change`,e),onSelect:u[2]||=e=>s(`select`,e),onDeSelect:u[3]||=e=>s(`de-select`,e),onSelectAll:u[4]||=e=>s(`select-all`,e),onDeSelectAll:u[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,gu,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},vu={eyebrow:`Forms`,title:`Template-style form`,description:`Vue keeps the form values in refs while the dropdown stays controlled.`},yu=$,bu=$.slice(0,3),xu=Z(`classic`,`Template-style forms`,{enableSearchFilter:!0,text:`Template-style forms`,badgeShowLimit:3}),Su=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './template-driven-forms.data';
import componentSource from './template-driven-forms.component.vue?raw';
import dataSource from './template-driven-forms.data.js?raw';
import styleSource from './template-driven-forms.component.css?raw';
import './template-driven-forms.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('template-driven-forms')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Cu=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Forms",
  title: "Template-style form",
  description: "Vue keeps the form values in refs while the dropdown stays controlled."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Template-style forms", {
  enableSearchFilter: true,
  text: "Template-style forms",
  badgeShowLimit: 3
});
`,wu=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Tu={class:`demo-surface`},Eu={key:2,class:`validation-message`},Du={__name:`template-driven-forms.component`,setup(e){let t=M(yu.slice(0,yu.length)),n=M(bu.slice()),r=M({...xu}),i=M([]),a={component:Su,data:Cu,css:wu},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`template-driven-forms`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(vu),sources:a,events:i.value},{default:I(()=>[U(`div`,Tu,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Eu,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Ou={eyebrow:`Forms`,title:`Reactive form validation`,description:`Derive validity from Vue state and selected dropdown items.`},ku=$,Au=$.slice(0,3),ju=Z(`classic`,`Reactive forms`,{enableSearchFilter:!0,text:`Reactive forms`,badgeShowLimit:3}),Mu=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './reactive-forms.data';
import componentSource from './reactive-forms.component.vue?raw';
import dataSource from './reactive-forms.data.js?raw';
import styleSource from './reactive-forms.component.css?raw';
import './reactive-forms.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('reactive-forms')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Nu=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Forms",
  title: "Reactive form validation",
  description: "Derive validity from Vue state and selected dropdown items."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Reactive forms", {
  enableSearchFilter: true,
  text: "Reactive forms",
  badgeShowLimit: 3
});
`,Pu=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Fu={class:`demo-surface`},Iu={key:2,class:`validation-message`},Lu={__name:`reactive-forms.component`,setup(e){let t=M(ku.slice(0,ku.length)),n=M(Au.slice()),r=M({...ju}),i=M([]),a={component:Mu,data:Nu,css:Pu},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`reactive-forms`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Ou),sources:a,events:i.value},{default:I(()=>[U(`div`,Fu,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Iu,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Ru={eyebrow:`Long lists`,title:`Virtual Scrolling`,description:`Constrain a long list with keyboard-friendly scrolling and a fixed dropdown height.`},zu=Ts,Bu=Ts.slice(0,3),Vu=Z(`classic`,`Virtual Scrolling`,{enableSearchFilter:!0,text:`Virtual Scrolling`,maxHeight:145,badgeShowLimit:3}),Hu=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './virtual-scrolling.data';
import componentSource from './virtual-scrolling.component.vue?raw';
import dataSource from './virtual-scrolling.data.js?raw';
import styleSource from './virtual-scrolling.component.css?raw';
import './virtual-scrolling.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('virtual-scrolling')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Uu=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Long lists",
  title: "Virtual Scrolling",
  description: "Constrain a long list with keyboard-friendly scrolling and a fixed dropdown height."
};
export const dataSeed = largeList;
export const selectedSeed = largeList.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Virtual Scrolling", {
  enableSearchFilter: true,
  text: "Virtual Scrolling",
  maxHeight: 145,
  badgeShowLimit: 3
});
`,Wu=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Gu={class:`demo-surface`},Ku={key:2,class:`validation-message`},qu={__name:`virtual-scrolling.component`,setup(e){let t=M(zu.slice(0,zu.length)),n=M(Bu.slice()),r=M({...Vu}),i=M([]),a={component:Hu,data:Uu,css:Wu},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`virtual-scrolling`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Ru),sources:a,events:i.value},{default:I(()=>[U(`div`,Gu,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Ku,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Ju={eyebrow:`Lazy API`,title:`Lazy loading from API`,description:`Append more remote rows when the dropdown scroll reaches the end.`},Yu=Ts,Xu=Ts.slice(0,3),Zu=Z(`classic`,`Lazy Loading from API`,{enableSearchFilter:!0,text:`Lazy Loading from API`,lazyLoading:!0,maxHeight:145,badgeShowLimit:3}),Qu=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        @scroll-to-end="appendNextChunk"
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './lazy-loading-api.data';
import componentSource from './lazy-loading-api.component.vue?raw';
import dataSource from './lazy-loading-api.data.js?raw';
import styleSource from './lazy-loading-api.component.css?raw';
import './lazy-loading-api.component.css';

const items = ref(dataSeed.slice(0, 30));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('lazy-loading-api')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,$u=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Lazy API",
  title: "Lazy loading from API",
  description: "Append more remote rows when the dropdown scroll reaches the end."
};
export const dataSeed = largeList;
export const selectedSeed = largeList.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Lazy Loading from API", {
  enableSearchFilter: true,
  text: "Lazy Loading from API",
  lazyLoading: true,
  maxHeight: 145,
  badgeShowLimit: 3
});
`,ed=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,td={class:`demo-surface`},nd={key:2,class:`validation-message`},rd={__name:`lazy-loading-api.component`,setup(e){let t=M(Yu.slice(0,30)),n=M(Xu.slice()),r=M({...Zu}),i=M([]),a={component:Qu,data:$u,css:ed},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`lazy-loading-api`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(){let e=Ts.slice(t.value.length,t.value.length+20);e.length&&(t.value=t.value.concat(e),s(`scroll-to-end`,e.length+` rows added`))}return(e,l)=>(B(),H(X,{meta:N(Ju),sources:a,events:i.value},{default:I(()=>[U(`div`,td,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":l[0]||=e=>n.value=e,settings:r.value,onChange:l[1]||=e=>s(`change`,e),onSelect:l[2]||=e=>s(`select`,e),onDeSelect:l[3]||=e=>s(`de-select`,e),onSelectAll:l[4]||=e=>s(`select-all`,e),onDeSelectAll:l[5]||=e=>s(`de-select-all`,e),onScrollToEnd:c},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,nd,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},id={eyebrow:`Remote API`,title:`Data from remote API`,description:`Swap remote result sets while preserving the controlled selected array.`},ad=$,od=$.slice(0,3),sd=Z(`classic`,`Data from remote API`,{enableSearchFilter:!0,text:`Data from remote API`,badgeShowLimit:3}),cd=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="true">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './remote-data.data';
import componentSource from './remote-data.component.vue?raw';
import dataSource from './remote-data.data.js?raw';
import styleSource from './remote-data.component.css?raw';
import './remote-data.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('remote-data')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,ld=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Remote API",
  title: "Data from remote API",
  description: "Swap remote result sets while preserving the controlled selected array."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Data from remote API", {
  enableSearchFilter: true,
  text: "Data from remote API",
  badgeShowLimit: 3
});
`,ud=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,dd={class:`demo-surface`},fd={key:1,class:`demo-actions`},pd={key:2,class:`validation-message`},md={__name:`remote-data.component`,setup(e){let t=M(ad.slice(0,ad.length)),n=M(od.slice()),r=M({...sd}),i=M([]),a={component:cd,data:ld,css:ud},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`remote-data`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(){let e=t.value.length>20?$.slice(12,42):$;t.value=e.slice(),s(`async data refresh`,e.length+` rows`)}return(e,l)=>(B(),H(X,{meta:N(id),sources:a,events:i.value},{default:I(()=>[U(`div`,dd,[G(``,!0),(B(),V(`div`,fd,[U(`button`,{type:`button`,onClick:c},`Swap async data`)])),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":l[0]||=e=>n.value=e,settings:r.value,onChange:l[1]||=e=>s(`change`,e),onSelect:l[2]||=e=>s(`select`,e),onDeSelect:l[3]||=e=>s(`de-select`,e),onSelectAll:l[4]||=e=>s(`select-all`,e),onDeSelectAll:l[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,pd,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},hd={eyebrow:`Loop`,title:`Using in list for loop`,description:`Render multiple dropdowns from an array of configuration objects.`};$.slice(0,3),Z(`classic`,`Using in list for loop`,{enableSearchFilter:!0,text:`Using in list for loop`});var gd=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="loop-grid">
      <section v-for="row in rows" :key="row.region" class="loop-card">
        <h2>{{ row.region }}</h2>
        <VueMultiselectDropdown
          :data="row.items"
          v-model="row.selected"
          :settings="row.settings"
          @change="record(row.region + ' change', $event)"
        />
      </section>
    </div>
  </ExampleShell>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './list-loop.data';
import componentSource from './list-loop.component.vue?raw';
import dataSource from './list-loop.data.js?raw';
import styleSource from './list-loop.component.css?raw';
import './list-loop.component.css';

const rows = reactive(['Americas', 'Europe', 'Africa'].map((region) => {
  const items = countries.filter((item) => item.category === region);
  return {
    region,
    items,
    selected: items.slice(0, 2),
    settings: makeSettings('classic', region + ' markets', { badgeShowLimit: 2 })
  };
}));
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
<\/script>
`,_d=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Loop",
  title: "Using in list for loop",
  description: "Render multiple dropdowns from an array of configuration objects."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Using in list for loop", {
  enableSearchFilter: true,
  text: "Using in list for loop"
});
`,vd=`.loop-grid {
  display: grid;
  gap: 16px;
}

.loop-card {
  display: grid;
  gap: 10px;
  padding: 14px;
  border: 1px solid #e2e8f0;
  background: #fff;
}

.loop-card h2 {
  margin: 0;
  font-size: 16px;
}
`,yd={class:`loop-grid`},bd={__name:`list-loop.component`,setup(e){let t=It([`Americas`,`Europe`,`Africa`].map(e=>{let t=$.filter(t=>t.category===e);return{region:e,items:t,selected:t.slice(0,2),settings:Z(`classic`,e+` markets`,{badgeShowLimit:2})}})),n=M([]),r={component:gd,data:_d,css:vd};function i(e,t){n.value.unshift(Q(e,t))}return(e,a)=>(B(),H(X,{meta:N(hd),sources:r,events:n.value},{default:I(()=>[U(`div`,yd,[(B(!0),V(z,null,hr(t,e=>(B(),V(`section`,{key:e.region,class:`loop-card`},[U(`h2`,null,E(e.region),1),W(N(Y),{data:e.items,modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t,settings:e.settings,onChange:t=>i(e.region+` change`,t)},null,8,[`data`,`modelValue`,`onUpdate:modelValue`,`settings`,`onChange`])]))),128))])]),_:1},8,[`meta`,`events`]))}},xd={eyebrow:`Dialog`,title:`Using inside dialog`,description:`Append the panel to document.body so overflow containers do not clip it.`},Sd=$,Cd=$.slice(0,1),wd=Z(`material`,`Using inside dialog`,{enableSearchFilter:!0,text:`Using inside dialog`,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2,skin:`material`}),Td=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface dialog-demo-frame">
      <div v-if="true" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './dialog.data';
import componentSource from './dialog.component.vue?raw';
import dataSource from './dialog.data.js?raw';
import styleSource from './dialog.component.css?raw';
import './dialog.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('dialog')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Ed=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Dialog",
  title: "Using inside dialog",
  description: "Append the panel to document.body so overflow containers do not clip it."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("material", "Using inside dialog", {
  enableSearchFilter: true,
  text: "Using inside dialog",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom",
  maxHeight: 180,
  badgeShowLimit: 2,
  skin: "material"
});
`,Dd=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}

.dialog-demo-frame {
  border: 1px solid #93c5fd;
  background: repeating-linear-gradient(135deg, #eff6ff, #eff6ff 10px, #dbeafe 10px, #dbeafe 20px);
  padding: 18px;
  min-height: 190px;
  align-content: end;
  overflow: hidden;
  position: relative;
}

.dialog-surface-note {
  color: #1e3a8a;
  font-size: 13px;
  font-weight: 800;
}

`,Od={class:`demo-surface dialog-demo-frame`},kd={key:0,class:`dialog-surface-note`},Ad={key:2,class:`validation-message`},jd={__name:`dialog.component`,setup(e){let t=M(Sd.slice(0,Sd.length)),n=M(Cd.slice()),r=M({...wd}),i=M([]),a={component:Td,data:Ed,css:Dd},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`dialog`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(xd),sources:a,events:i.value},{default:I(()=>[U(`div`,Od,[(B(),V(`div`,kd,`Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.`)),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Ad,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Md={eyebrow:`Multiple`,title:`Multiple dropdowns`,description:`Use independent controlled state for each dropdown instance.`};$.slice(0,3),Z(`classic`,`Multiple dropdowns`,{enableSearchFilter:!0,text:`Multiple dropdowns`});var Nd=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="multi-grid">
      <VueMultiselectDropdown :data="countries" v-model="markets" :settings="marketSettings" @change="record('markets change', $event)" />
      <VueMultiselectDropdown :data="skills" v-model="skillSelection" :settings="skillSettings" @change="record('skills change', $event)" />
    </div>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries, skills } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './multiple-dropdowns.data';
import componentSource from './multiple-dropdowns.component.vue?raw';
import dataSource from './multiple-dropdowns.data.js?raw';
import styleSource from './multiple-dropdowns.component.css?raw';
import './multiple-dropdowns.component.css';

const markets = ref(countries.slice(0, 3));
const skillSelection = ref(skills.slice(0, 2));
const events = ref([]);
const marketSettings = makeSettings('classic', 'Markets', { badgeShowLimit: 3 });
const skillSettings = makeSettings('material', 'Skills', { badgeShowLimit: 2 });
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
<\/script>
`,Pd=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Multiple",
  title: "Multiple dropdowns",
  description: "Use independent controlled state for each dropdown instance."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Multiple dropdowns", {
  enableSearchFilter: true,
  text: "Multiple dropdowns"
});
`,Fd=`.multi-grid {
  display: grid;
  gap: 18px;
}
`,Id={class:`multi-grid`},Ld={__name:`multiple-dropdowns.component`,setup(e){let t=M($.slice(0,3)),n=M(Cs.slice(0,2)),r=M([]),i=Z(`classic`,`Markets`,{badgeShowLimit:3}),a=Z(`material`,`Skills`,{badgeShowLimit:2}),o={component:Nd,data:Pd,css:Fd};function s(e,t){r.value.unshift(Q(e,t))}return(e,c)=>(B(),H(X,{meta:N(Md),sources:o,events:r.value},{default:I(()=>[U(`div`,Id,[W(N(Y),{data:N($),modelValue:t.value,"onUpdate:modelValue":c[0]||=e=>t.value=e,settings:N(i),onChange:c[1]||=e=>s(`markets change`,e)},null,8,[`data`,`modelValue`,`settings`]),W(N(Y),{data:N(Cs),modelValue:n.value,"onUpdate:modelValue":c[2]||=e=>n.value=e,settings:N(a),onChange:c[3]||=e=>s(`skills change`,e)},null,8,[`data`,`modelValue`,`settings`])])]),_:1},8,[`meta`,`events`]))}},Rd={eyebrow:`Dynamic`,title:`Load dynamic data`,description:`Change the option collection after the component is already mounted.`},zd=$,Bd=$.slice(0,3),Vd=Z(`classic`,`Load dynamic data`,{enableSearchFilter:!0,text:`Load dynamic data`,badgeShowLimit:3}),Hd=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="true">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './dynamic-data.data';
import componentSource from './dynamic-data.component.vue?raw';
import dataSource from './dynamic-data.data.js?raw';
import styleSource from './dynamic-data.component.css?raw';
import './dynamic-data.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('dynamic-data')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Ud=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Dynamic",
  title: "Load dynamic data",
  description: "Change the option collection after the component is already mounted."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Load dynamic data", {
  enableSearchFilter: true,
  text: "Load dynamic data",
  badgeShowLimit: 3
});
`,Wd=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Gd={class:`demo-surface`},Kd={key:1,class:`demo-actions`},qd={key:2,class:`validation-message`},Jd={__name:`dynamic-data.component`,setup(e){let t=M(zd.slice(0,zd.length)),n=M(Bd.slice()),r=M({...Vd}),i=M([]),a={component:Hd,data:Ud,css:Wd},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`dynamic-data`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}function c(){let e=t.value.length>20?$.slice(12,42):$;t.value=e.slice(),s(`async data refresh`,e.length+` rows`)}return(e,l)=>(B(),H(X,{meta:N(Rd),sources:a,events:i.value},{default:I(()=>[U(`div`,Gd,[G(``,!0),(B(),V(`div`,Kd,[U(`button`,{type:`button`,onClick:c},`Swap async data`)])),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":l[0]||=e=>n.value=e,settings:r.value,onChange:l[1]||=e=>s(`change`,e),onSelect:l[2]||=e=>s(`select`,e),onDeSelect:l[3]||=e=>s(`de-select`,e),onSelectAll:l[4]||=e=>s(`select-all`,e),onDeSelectAll:l[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,qd,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Yd={eyebrow:`Ref methods`,title:`Methods`,description:`Call the public ref API for open, close, focus, select all, and clear selection.`};$.slice(0,3),Z(`classic`,`Methods`,{enableSearchFilter:!0,text:`Methods`});var Xd=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="method-demo">
      <div class="method-bar">
        <button type="button" @click="dropdown.openDropdown()">Open</button>
        <button type="button" @click="dropdown.closeDropdown()">Close</button>
        <button type="button" @click="dropdown.focusSearch()">Focus search</button>
        <button type="button" @click="dropdown.selectAll()">Select all</button>
        <button type="button" @click="dropdown.clearSelection()">Clear</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="countries"
        v-model="selected"
        :settings="settings"
        @change="record('change', $event)"
      />
    </div>
  </ExampleShell>
</template>

<script setup>
import { ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './methods.data';
import componentSource from './methods.component.vue?raw';
import dataSource from './methods.data.js?raw';
import styleSource from './methods.component.css?raw';
import './methods.component.css';

const dropdown = ref(null);
const selected = ref(countries.slice(0, 2));
const events = ref([]);
const settings = makeSettings('classic', 'Methods example', { badgeShowLimit: 3 });
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
<\/script>
`,Zd=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Ref methods",
  title: "Methods",
  description: "Call the public ref API for open, close, focus, select all, and clear selection."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Methods", {
  enableSearchFilter: true,
  text: "Methods"
});
`,Qd=`.method-demo {
  display: grid;
  gap: 14px;
}

.method-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.method-bar button {
  min-height: 36px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
  cursor: pointer;
  font-weight: 800;
  padding: 0 12px;
}
`,$d={class:`method-demo`},ef={class:`method-bar`},tf={__name:`methods.component`,setup(e){let t=M(null),n=M($.slice(0,2)),r=M([]),i=Z(`classic`,`Methods example`,{badgeShowLimit:3}),a={component:Xd,data:Zd,css:Qd};function o(e,t){r.value.unshift(Q(e,t))}return(e,s)=>(B(),H(X,{meta:N(Yd),sources:a,events:r.value},{default:I(()=>[U(`div`,$d,[U(`div`,ef,[U(`button`,{type:`button`,onClick:s[0]||=e=>t.value.openDropdown()},`Open`),U(`button`,{type:`button`,onClick:s[1]||=e=>t.value.closeDropdown()},`Close`),U(`button`,{type:`button`,onClick:s[2]||=e=>t.value.focusSearch()},`Focus search`),U(`button`,{type:`button`,onClick:s[3]||=e=>t.value.selectAll()},`Select all`),U(`button`,{type:`button`,onClick:s[4]||=e=>t.value.clearSelection()},`Clear`)]),W(N(Y),{ref_key:`dropdown`,ref:t,data:N($),modelValue:n.value,"onUpdate:modelValue":s[5]||=e=>n.value=e,settings:N(i),onChange:s[6]||=e=>o(`change`,e)},null,8,[`data`,`modelValue`,`settings`])])]),_:1},8,[`meta`,`events`]))}},nf={eyebrow:`Events`,title:`Events`,description:`Record open, close, select, deselect, select-all, and clear-all callbacks.`},rf=$,af=$.slice(0,3),of=Z(`classic`,`Events`,{enableSearchFilter:!0,text:`Events`,badgeShowLimit:3}),sf=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './events.data';
import componentSource from './events.component.vue?raw';
import dataSource from './events.data.js?raw';
import styleSource from './events.component.css?raw';
import './events.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('events')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,cf=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Events",
  title: "Events",
  description: "Record open, close, select, deselect, select-all, and clear-all callbacks."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Events", {
  enableSearchFilter: true,
  text: "Events",
  badgeShowLimit: 3
});
`,lf=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,uf={class:`demo-surface`},df={key:2,class:`validation-message`},ff={__name:`events.component`,setup(e){let t=M(rf.slice(0,rf.length)),n=M(af.slice()),r=M({...of}),i=M([]),a={component:sf,data:cf,css:lf},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`events`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(nf),sources:a,events:i.value},{default:I(()=>[U(`div`,uf,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,df,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},pf={eyebrow:`State`,title:`Disabled state`,description:`Render a disabled dropdown while preserving the current value.`},mf=$,hf=$.slice(0,3),gf=Z(`classic`,`Disabled state`,{enableSearchFilter:!0,text:`Disabled state`,disabled:!0,badgeShowLimit:3}),_f=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './disabled.data';
import componentSource from './disabled.component.vue?raw';
import dataSource from './disabled.data.js?raw';
import styleSource from './disabled.component.css?raw';
import './disabled.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('disabled')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,vf=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "State",
  title: "Disabled state",
  description: "Render a disabled dropdown while preserving the current value."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Disabled state", {
  enableSearchFilter: true,
  text: "Disabled state",
  disabled: true,
  badgeShowLimit: 3
});
`,yf=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,bf={class:`demo-surface`},xf={key:2,class:`validation-message`},Sf={__name:`disabled.component`,setup(e){let t=M(mf.slice(0,mf.length)),n=M(hf.slice()),r=M({...gf}),i=M([]),a={component:_f,data:vf,css:yf},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`disabled`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(pf),sources:a,events:i.value},{default:I(()=>[U(`div`,bf,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,xf,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Cf={eyebrow:`Selection rules`,title:`Limit selection`,description:`Prevent choosing more than the configured maximum.`},wf=$,Tf=$.slice(0,2),Ef=Z(`classic`,`Limit selection`,{enableSearchFilter:!0,text:`Limit selection`,limitSelection:2,badgeShowLimit:2}),Df=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './limit-selection.data';
import componentSource from './limit-selection.component.vue?raw';
import dataSource from './limit-selection.data.js?raw';
import styleSource from './limit-selection.component.css?raw';
import './limit-selection.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('limit-selection')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Of=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Selection rules",
  title: "Limit selection",
  description: "Prevent choosing more than the configured maximum."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 2);
export const settingsSeed = makeSettings("classic", "Limit selection", {
  enableSearchFilter: true,
  text: "Limit selection",
  limitSelection: 2,
  badgeShowLimit: 2
});
`,kf=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Af={class:`demo-surface`},jf={key:2,class:`validation-message`},Mf={__name:`limit-selection.component`,setup(e){let t=M(wf.slice(0,wf.length)),n=M(Tf.slice()),r=M({...Ef}),i=M([]),a={component:Df,data:Of,css:kf},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`limit-selection`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Cf),sources:a,events:i.value},{default:I(()=>[U(`div`,Af,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,jf,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Nf={eyebrow:`Badge counter`,title:`Limit badges`,description:`Show only a fixed number of chips and move the rest into the + counter.`},Pf=$,Ff=$.slice(0,8),If=Z(`classic`,`Limit badges`,{enableSearchFilter:!0,text:`Limit badges`,badgeShowLimit:2}),Lf=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './limit-badges.data';
import componentSource from './limit-badges.component.vue?raw';
import dataSource from './limit-badges.data.js?raw';
import styleSource from './limit-badges.component.css?raw';
import './limit-badges.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('limit-badges')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Rf=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Badge counter",
  title: "Limit badges",
  description: "Show only a fixed number of chips and move the rest into the + counter."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 8);
export const settingsSeed = makeSettings("classic", "Limit badges", {
  enableSearchFilter: true,
  text: "Limit badges",
  badgeShowLimit: 2
});
`,zf=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Bf={class:`demo-surface`},Vf={key:2,class:`validation-message`},Hf={__name:`limit-badges.component`,setup(e){let t=M(Pf.slice(0,Pf.length)),n=M(Ff.slice()),r=M({...If}),i=M([]),a={component:Lf,data:Rf,css:zf},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`limit-badges`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Nf),sources:a,events:i.value},{default:I(()=>[U(`div`,Bf,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Vf,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Uf={eyebrow:`Placeholder`,title:`Custom placeholder`,description:`Keep an empty controlled value while showing project-specific placeholder and empty labels.`},Wf=$,Gf=$.slice(0,3),Kf=Z(`classic`,`Pick deployment markets`,{enableSearchFilter:!0,text:`Pick deployment markets`,badgeShowLimit:3}),qf=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './custom-placeholder.data';
import componentSource from './custom-placeholder.component.vue?raw';
import dataSource from './custom-placeholder.data.js?raw';
import styleSource from './custom-placeholder.component.css?raw';
import './custom-placeholder.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('custom-placeholder')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Jf=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Placeholder",
  title: "Custom placeholder",
  description: "Keep an empty controlled value while showing project-specific placeholder and empty labels."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Pick deployment markets", {
  enableSearchFilter: true,
  text: "Pick deployment markets",
  badgeShowLimit: 3
});
`,Yf=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Xf={class:`demo-surface`},Zf={key:2,class:`validation-message`},Qf={__name:`custom-placeholder.component`,setup(e){let t=M(Wf.slice(0,Wf.length)),n=M(Gf.slice()),r=M({...Kf}),i=M([]),a={component:qf,data:Jf,css:Yf},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`custom-placeholder`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(Uf),sources:a,events:i.value},{default:I(()=>[U(`div`,Xf,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Zf,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},$f={eyebrow:`CSS`,title:`Styling`,description:`Apply a custom class while keeping the package skin contract intact.`};$.slice(0,3),Z(`classic`,`Styling`,{enableSearchFilter:!0,text:`Styling`});var ep=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <section class="styling-demo">
      <div class="skin-buttons">
        <button v-for="item in skins" :key="item" type="button" :class="{ active: skin === item }" @click="skin = item">{{ item }}</button>
      </div>
      <VueMultiselectDropdown :data="countries" v-model="selected" :settings="settings" @change="record('change', $event)" />
      <p><code>settings.skin: '{{ skin }}'</code></p>
    </section>
  </ExampleShell>
</template>

<script setup>
import { computed, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countries } from '../../shared/country-data';
import { eventLabel, makeSettings } from '../../shared/settings';
import { meta } from './styling.data';
import componentSource from './styling.component.vue?raw';
import dataSource from './styling.data.js?raw';
import styleSource from './styling.component.css?raw';
import './styling.component.css';

const skins = ['classic', 'material', 'dark', 'custom', 'brand'];
const skin = ref('classic');
const selected = ref(countries.slice(0, 3));
const events = ref([]);
const settings = computed(() => makeSettings(skin.value, 'Skinned dropdown', { badgeShowLimit: 3 }));
const sources = { component: componentSource, data: dataSource, css: styleSource };
function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
}
<\/script>
`,tp=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "CSS",
  title: "Styling",
  description: "Apply a custom class while keeping the package skin contract intact."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 3);
export const settingsSeed = makeSettings("classic", "Styling", {
  enableSearchFilter: true,
  text: "Styling"
});
`,np=`.styling-demo {
  display: grid;
  gap: 14px;
}

.skin-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skin-buttons button {
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
  font-weight: 800;
  text-transform: capitalize;
  cursor: pointer;
}

.skin-buttons button.active {
  color: #fff;
  background: #0f766e;
  border-color: #0f766e;
}

.styling-demo p {
  margin: 0;
  color: #475569;
}
`,rp={class:`styling-demo`},ip={class:`skin-buttons`},ap=[`onClick`],op={__name:`styling.component`,setup(e){let t=[`classic`,`material`,`dark`,`custom`,`brand`],n=M(`classic`),r=M($.slice(0,3)),i=M([]),a=q(()=>Z(n.value,`Skinned dropdown`,{badgeShowLimit:3})),o={component:ep,data:tp,css:np};function s(e,t){i.value.unshift(Q(e,t))}return(e,c)=>(B(),H(X,{meta:N($f),sources:o,events:i.value},{default:I(()=>[U(`section`,rp,[U(`div`,ip,[(B(),V(z,null,hr(t,e=>U(`button`,{key:e,type:`button`,class:T({active:n.value===e}),onClick:t=>n.value=e},E(e),11,ap)),64))]),W(N(Y),{data:N($),modelValue:r.value,"onUpdate:modelValue":c[0]||=e=>r.value=e,settings:a.value,onChange:c[1]||=e=>s(`change`,e)},null,8,[`data`,`modelValue`,`settings`]),U(`p`,null,[U(`code`,null,`settings.skin: '`+E(n.value)+`'`,1)])])]),_:1},8,[`meta`,`events`]))}},sp={eyebrow:`Auto direction`,title:`Body Overlay Auto`,description:`Prefer opening upward only when the viewport really needs it.`},cp=$,lp=$.slice(0,1),up=Z(`material`,`Body Overlay Auto`,{enableSearchFilter:!0,text:`Body Overlay Auto`,appendToBody:!0,tagToBody:!0,autoPosition:!0,position:`bottom`,maxHeight:180,badgeShowLimit:2,skin:`material`}),dp=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface dialog-demo-frame">
      <div v-if="true" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './body-overlay-auto.data';
import componentSource from './body-overlay-auto.component.vue?raw';
import dataSource from './body-overlay-auto.data.js?raw';
import styleSource from './body-overlay-auto.component.css?raw';
import './body-overlay-auto.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('body-overlay-auto')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,fp=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Auto direction",
  title: "Body Overlay Auto",
  description: "Prefer opening upward only when the viewport really needs it."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 1);
export const settingsSeed = makeSettings("material", "Body Overlay Auto", {
  enableSearchFilter: true,
  text: "Body Overlay Auto",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "bottom",
  maxHeight: 180,
  badgeShowLimit: 2,
  skin: "material"
});
`,pp=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}

.dialog-demo-frame {
  border: 1px solid #93c5fd;
  background: repeating-linear-gradient(135deg, #eff6ff, #eff6ff 10px, #dbeafe 10px, #dbeafe 20px);
  padding: 18px;
  min-height: 190px;
  align-content: end;
  overflow: hidden;
  position: relative;
}

.dialog-surface-note {
  color: #1e3a8a;
  font-size: 13px;
  font-weight: 800;
}

`,mp={class:`demo-surface dialog-demo-frame`},hp={key:0,class:`dialog-surface-note`},gp={key:2,class:`validation-message`},_p={__name:`body-overlay-auto.component`,setup(e){let t=M(cp.slice(0,cp.length)),n=M(lp.slice()),r=M({...up}),i=M([]),a={component:dp,data:fp,css:pp},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`body-overlay-auto`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(sp),sources:a,events:i.value},{default:I(()=>[U(`div`,mp,[(B(),V(`div`,hp,`Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.`)),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,gp,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},vp={eyebrow:`Counter`,title:`All visible counter`,description:`Selected badges stay visible and the overflow counter disappears when no selected items are hidden.`},yp=$,bp=$.slice(0,6),xp=Z(`classic`,`All visible counter`,{enableSearchFilter:!1,text:`All visible counter`,badgeShowLimit:12}),Sp=`<template>
  <ExampleShell :meta="meta" :sources="sources" :events="events">
    <div class="demo-surface">
      <div v-if="false" class="dialog-surface-note">Clipped parent: overflow hidden, dropdown panel escapes with appendToBody.</div>
      <div class="demo-actions" v-if="false">
        <button type="button" @click="swapData">Swap async data</button>
      </div>
      <VueMultiselectDropdown
        ref="dropdown"
        :data="items"
        v-model="selected"
        :settings="settings"
        
        @change="record('change', $event)"
        @select="record('select', $event)"
        @de-select="record('de-select', $event)"
        @select-all="record('select-all', $event)"
        @de-select-all="record('de-select-all', $event)"
        
        
      />
      <p v-if="validationMessage" class="validation-message">{{ validationMessage }}</p>
    </div>
  </ExampleShell>
</template>

<script setup>
import { computed, h, ref } from 'vue';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import ExampleShell from '../../shared/ExampleShell.vue';
import { countryOptionClass, eventLabel } from '../../shared/settings';
import { countries, largeList } from '../../shared/country-data';
import { dataSeed, meta, selectedSeed, settingsSeed } from './all-visible-counter.data';
import componentSource from './all-visible-counter.component.vue?raw';
import dataSource from './all-visible-counter.data.js?raw';
import styleSource from './all-visible-counter.component.css?raw';
import './all-visible-counter.component.css';

const items = ref(dataSeed.slice(0, dataSeed.length));
const selected = ref(selectedSeed.slice());
const settings = ref({ ...settingsSeed });
const events = ref([]);
const sources = { component: componentSource, data: dataSource, css: styleSource };

const validationMessage = computed(() => {
  if (!['template-driven-forms', 'reactive-forms'].includes('all-visible-counter')) {
    return '';
  }
  return selected.value.length ? 'Form status: VALID' : 'Select at least one option.';
});

function record(type, payload) {
  events.value.unshift(eventLabel(type, payload));
  events.value = events.value.slice(0, 6);
}

function addFilterNewItem(label, item) {
  items.value = items.value.concat({ ...item, flag: 'BR', region: 'Custom', category: 'Custom' });
  record('add-filter-new-item', label);
}

function appendNextChunk() {
  const next = largeList.slice(items.value.length, items.value.length + 20);
  if (next.length) {
    items.value = items.value.concat(next);
    record('scroll-to-end', next.length + ' rows added');
  }
}

function swapData() {
  const next = items.value.length > 20 ? countries.slice(12, 42) : countries;
  items.value = next.slice();
  record('async data refresh', next.length + ' rows');
}

function renderOption(item, context) {
  return h('span', { class: 'template-option' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    h('span', [h('strong', context.label), h('small', item.detail || item.capital || item.region || '')])
  ]);
}

function renderBadge(item, context) {
  return h('span', { class: 'template-badge' }, [
    item.flag ? h('span', { class: countryOptionClass(item.flag), 'aria-hidden': 'true' }) : null,
    h('span', { class: 'metric-dot', style: { backgroundColor: item.color || '#0f766e' } }),
    context.label
  ]);
}
<\/script>
`,Cp=`import { countries, largeList, metricItems } from '../../shared/country-data';
import { makeSettings } from '../../shared/settings';

export const meta = {
  eyebrow: "Counter",
  title: "All visible counter",
  description: "Selected badges stay visible and the overflow counter disappears when no selected items are hidden."
};
export const dataSeed = countries;
export const selectedSeed = countries.slice(0, 6);
export const settingsSeed = makeSettings("classic", "All visible counter", {
  enableSearchFilter: false,
  text: "All visible counter",
  badgeShowLimit: 12
});
`,wp=`.demo-surface {
  display: grid;
  gap: 14px;
}

.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-actions button {
  min-height: 34px;
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #0f172a;
  font-weight: 800;
  padding: 0 12px;
  cursor: pointer;
}

.validation-message {
  margin: 0;
  color: #047857;
  font-weight: 800;
}

.template-option,
.template-badge {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.template-option small {
  display: block;
  color: #64748b;
  font-size: 12px;
}

.metric-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  flex: none;
}


`,Tp={class:`demo-surface`},Ep={key:2,class:`validation-message`},Dp={__name:`all-visible-counter.component`,setup(e){let t=M(yp.slice(0,yp.length)),n=M(bp.slice()),r=M({...xp}),i=M([]),a={component:Sp,data:Cp,css:wp},o=q(()=>[`template-driven-forms`,`reactive-forms`].includes(`all-visible-counter`)?n.value.length?`Form status: VALID`:`Select at least one option.`:``);function s(e,t){i.value.unshift(Q(e,t)),i.value=i.value.slice(0,6)}return(e,c)=>(B(),H(X,{meta:N(vp),sources:a,events:i.value},{default:I(()=>[U(`div`,Tp,[G(``,!0),G(``,!0),W(N(Y),{ref:`dropdown`,data:t.value,modelValue:n.value,"onUpdate:modelValue":c[0]||=e=>n.value=e,settings:r.value,onChange:c[1]||=e=>s(`change`,e),onSelect:c[2]||=e=>s(`select`,e),onDeSelect:c[3]||=e=>s(`de-select`,e),onSelectAll:c[4]||=e=>s(`select-all`,e),onDeSelectAll:c[5]||=e=>s(`de-select-all`,e)},null,8,[`data`,`modelValue`,`settings`]),o.value?(B(),V(`p`,Ep,E(o.value),1)):G(``,!0)])]),_:1},8,[`meta`,`events`]))}},Op=[{slug:`basic`,title:`Basic usage`,description:`Classic multi-select with chips, clear all, and selected counters.`,component:Fs},{slug:`keyboard-contract`,title:`Keyboard contract`,description:`Turn individual keyboard behaviors on or off and compare how Space behaves on focused options.`,component:Ks},{slug:`aria-state`,title:`ARIA state audit`,description:`Open the list and confirm the active multiselect option exposes both values for screen reader compatibility.`,component:nc},{slug:`headless-aria`,title:`Headless + ARIA`,description:`Use Stackline state, filtering, grouping, keyboard handling, ARIA ids, and callbacks while owning every element and class.`,component:_c},{slug:`state-hook`,title:`State hook`,description:`Use the Stackline selection, filtering, grouping, badge counter, and callbacks while rendering your own controls.`,component:kc},{slug:`slots-api`,title:`Slots API`,description:`Replace the trigger, badges, search shell, group header, options, and footer while preserving package behavior.`,component:Rc},{slug:`type-safe-factory`,title:`Type-safe factory`,description:`Bind the object shape once, then reuse typed settings, typed slots, and the typed composable helpers.`,component:Uc},{slug:`async-object-preservation`,title:`Async object preservation`,description:`Refresh the option source while selected objects stay intact, then add a new item from search.`,component:el},{slug:`single-selection`,title:`Single selection`,description:`Single-value selection with checkbox-free option rows.`,component:ul},{slug:`search-filter`,title:`Search filter`,description:`Search across country names and capitals while keeping controlled Vue state.`,component:bl},{slug:`custom-search-api`,title:`Custom search from API`,description:`Replace the search control with a Vue input and feed the dropdown with API-filtered data.`,component:jl},{slug:`search-filter-by-property`,title:`Search filter by property`,description:`Use settings.searchBy so the filter checks name, capital, and region fields.`,component:Vl},{slug:`search-add-new-item`,title:`Search and Add New Item`,description:`Create a new item from the current search query and keep it in local Vue state.`,component:Zl},{slug:`group-by`,title:`Group By`,description:`Group options by a field and allow group-level selection.`,component:su},{slug:`templating`,title:`Templating`,description:`Use Vue render functions for option rows and selected badges.`,component:_u},{slug:`template-driven-forms`,title:`Template-style forms`,description:`Vue keeps the form values in refs while the dropdown stays controlled.`,component:Du},{slug:`reactive-forms`,title:`Reactive forms`,description:`Derive validity from Vue state and selected dropdown items.`,component:Lu},{slug:`virtual-scrolling`,title:`Virtual Scrolling`,description:`Constrain a long list with keyboard-friendly scrolling and a fixed dropdown height.`,component:qu},{slug:`lazy-loading-api`,title:`Lazy Loading from API`,description:`Append more remote rows when the dropdown scroll reaches the end.`,component:rd},{slug:`remote-data`,title:`Data from remote API`,description:`Swap remote result sets while preserving the controlled selected array.`,component:md},{slug:`list-loop`,title:`Using in list for loop`,description:`Render multiple dropdowns from an array of configuration objects.`,component:bd},{slug:`dialog`,title:`Using inside dialog`,description:`Append the panel to document.body so overflow containers do not clip it.`,component:jd},{slug:`multiple-dropdowns`,title:`Multiple dropdowns`,description:`Use independent controlled state for each dropdown instance.`,component:Ld},{slug:`dynamic-data`,title:`Load dynamic data`,description:`Change the option collection after the component is already mounted.`,component:Jd},{slug:`methods`,title:`Methods`,description:`Call the public ref API for open, close, focus, select all, and clear selection.`,component:tf},{slug:`events`,title:`Events`,description:`Record open, close, select, deselect, select-all, and clear-all callbacks.`,component:ff},{slug:`disabled`,title:`Disabled state`,description:`Render a disabled dropdown while preserving the current value.`,component:Sf},{slug:`limit-selection`,title:`Limit selection`,description:`Prevent choosing more than the configured maximum.`,component:Mf},{slug:`limit-badges`,title:`Limit badges`,description:`Show only a fixed number of chips and move the rest into the + counter.`,component:Hf},{slug:`custom-placeholder`,title:`Custom placeholder`,description:`Keep an empty controlled value while showing project-specific placeholder and empty labels.`,component:Qf},{slug:`styling`,title:`Styling`,description:`Apply a custom class while keeping the package skin contract intact.`,component:op},{slug:`body-overlay-auto`,title:`Body Overlay Auto`,description:`Prefer opening upward only when the viewport really needs it.`,component:_p}],kp=[{slug:`all-visible-counter`,title:`All visible counter`,description:`Selected badges stay visible and the overflow counter disappears when no selected items are hidden.`,component:Dp}],Ap=[...Op,...kp],jp={class:`page shell-page`},Mp={class:`docs-main`},Np={class:`example-footer`,"aria-label":`Vue 3 example routes`},Pp={class:`footer-link-grid`},Fp=[`href`,`onClick`],Ip={class:`route-title`},Lp={class:`route-path`};_o({__name:`App`,setup(e){function t(){return window.location.hash.replace(/^#\/?/,``)||window.location.pathname.replace(/^\/+|\/+$/g,``)||`basic`}let n=M(t()),r=q(()=>Ap.find(e=>e.slug===n.value)||Op[0]);function i(){n.value=t()}function a(e){window.history.pushState(null,``,`/`+e),n.value=e,window.scrollTo({top:0,left:0})}return tr(()=>{window.addEventListener(`hashchange`,i),window.addEventListener(`popstate`,i)}),ir(()=>{window.removeEventListener(`hashchange`,i),window.removeEventListener(`popstate`,i)}),(e,t)=>(B(),V(`main`,jp,[t[1]||=U(`header`,{class:`topbar`},[U(`p`,{class:`eyebrow`},`Vue 3.5.38 runtime`),U(`h1`,null,`@stackline/vue-multiselect-dropdown 3.1.4`)],-1),U(`section`,Mp,[(B(),H(fr(r.value.component)))]),U(`footer`,Np,[t[0]||=U(`div`,{class:`footer-heading`},[U(`p`,{class:`eyebrow`},`Example routes`),U(`h2`,null,`Open a focused Vue 3 example`)],-1),U(`nav`,Pp,[(B(!0),V(z,null,hr(N(Op),e=>(B(),V(`a`,{key:e.slug,href:`/`+e.slug,class:T({active:e.slug===r.value.slug}),onClick:po(t=>a(e.slug),[`prevent`])},[U(`span`,Ip,E(e.title),1),U(`span`,Lp,`/`+E(e.slug),1)],10,Fp))),128))])])]))}}).mount(`#app`);