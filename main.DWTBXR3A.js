import{a as de,b as vt,c as Uu}from"./chunk-YGFNLDZQ.js";function Pe(n){return typeof n=="function"}function Qr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var La=Qr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function wo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Bt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Pe(i))try{i()}catch(s){e=s instanceof La?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{xm(s)}catch(o){e=e??[],o instanceof La?e=[...e,...o.errors]:e.push(o)}}if(e)throw new La(e)}}add(e){var t;if(e&&e!==this)if(this.closed)xm(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&wo(t,e)}remove(e){let{_finalizers:t}=this;t&&wo(t,e),e instanceof n&&e._removeParent(this)}};Bt.EMPTY=(()=>{let n=new Bt;return n.closed=!0,n})();var ku=Bt.EMPTY;function Fa(n){return n instanceof Bt||n&&"closed"in n&&Pe(n.remove)&&Pe(n.add)&&Pe(n.unsubscribe)}function xm(n){Pe(n)?n():n.unsubscribe()}var Ln={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var es={setTimeout(n,e,...t){let{delegate:i}=es;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=es;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Ua(n){es.setTimeout(()=>{let{onUnhandledError:e}=Ln;if(e)e(n);else throw n})}function So(){}var Mm=(()=>Bu("C",void 0,void 0))();function bm(n){return Bu("E",void 0,n)}function Em(n){return Bu("N",n,void 0)}function Bu(n,e,t){return{kind:n,value:e,error:t}}var ur=null;function ts(n){if(Ln.useDeprecatedSynchronousErrorHandling){let e=!ur;if(e&&(ur={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ur;if(ur=null,t)throw i}}else n()}function wm(n){Ln.useDeprecatedSynchronousErrorHandling&&ur&&(ur.errorThrown=!0,ur.error=n)}var dr=class extends Bt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Fa(e)&&e.add(this)):this.destination=qM}static create(e,t,i){return new di(e,t,i)}next(e){this.isStopped?Hu(Em(e),this):this._next(e)}error(e){this.isStopped?Hu(bm(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Hu(Mm,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},jM=Function.prototype.bind;function Vu(n,e){return jM.call(n,e)}var zu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){ka(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){ka(i)}else ka(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){ka(t)}}},di=class extends dr{constructor(e,t,i){super();let r;if(Pe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Ln.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Vu(e.next,s),error:e.error&&Vu(e.error,s),complete:e.complete&&Vu(e.complete,s)}):r=e}this.destination=new zu(r)}};function ka(n){Ln.useDeprecatedSynchronousErrorHandling?wm(n):Ua(n)}function $M(n){throw n}function Hu(n,e){let{onStoppedNotification:t}=Ln;t&&es.setTimeout(()=>t(n,e))}var qM={closed:!0,next:So,error:$M,complete:So};var ns=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function en(n){return n}function Gu(...n){return Wu(n)}function Wu(n){return n.length===0?en:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var rt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=YM(t)?t:new di(t,i,r);return ts(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Sm(i),new i((r,s)=>{let o=new di({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ns](){return this}pipe(...t){return Wu(t)(this)}toPromise(t){return t=Sm(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Sm(n){var e;return(e=n??Ln.Promise)!==null&&e!==void 0?e:Promise}function XM(n){return n&&Pe(n.next)&&Pe(n.error)&&Pe(n.complete)}function YM(n){return n&&n instanceof dr||XM(n)&&Fa(n)}function ju(n){return Pe(n?.lift)}function Ye(n){return e=>{if(ju(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ze(n,e,t,i,r){return new $u(n,e,t,i,r)}var $u=class extends dr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function is(){return Ye((n,e)=>{let t=null;n._refCount++;let i=Ze(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var rs=class extends rt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,ju(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Bt;let t=this.getSubject();e.add(this.source.subscribe(Ze(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Bt.EMPTY)}return e}refCount(){return is()(this)}};var Cm=Qr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var $t=(()=>{class n extends rt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Ba(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Cm}next(t){ts(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){ts(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ts(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?ku:(this.currentObservers=null,s.push(t),new Bt(()=>{this.currentObservers=null,wo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new rt;return t.source=this,t}}return n.create=(e,t)=>new Ba(e,t),n})(),Ba=class extends $t{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:ku}};var zt=class extends $t{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var cn=new rt(n=>n.complete());function Am(n){return n&&Pe(n.schedule)}function qu(n){return n[n.length-1]}function Va(n){return Pe(qu(n))?n.pop():void 0}function Zn(n){return Am(qu(n))?n.pop():void 0}function Tm(n,e){return typeof qu(n)=="number"?n.pop():e}function Im(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Dm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function hr(n){return this instanceof hr?(this.v=n,this):new hr(n)}function Rm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,v){s.push([h,m,g,v])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof hr?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Pm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Dm=="function"?Dm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ha=n=>n&&typeof n.length=="number"&&typeof n!="function";function za(n){return Pe(n?.then)}function Ga(n){return Pe(n[ns])}function Wa(n){return Symbol.asyncIterator&&Pe(n?.[Symbol.asyncIterator])}function ja(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function ZM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var $a=ZM();function qa(n){return Pe(n?.[$a])}function Xa(n){return Rm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield hr(t.read());if(r)return yield hr(void 0);yield yield hr(i)}}finally{t.releaseLock()}})}function Ya(n){return Pe(n?.getReader)}function yt(n){if(n instanceof rt)return n;if(n!=null){if(Ga(n))return JM(n);if(Ha(n))return KM(n);if(za(n))return QM(n);if(Wa(n))return Nm(n);if(qa(n))return eb(n);if(Ya(n))return tb(n)}throw ja(n)}function JM(n){return new rt(e=>{let t=n[ns]();if(Pe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function KM(n){return new rt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function QM(n){return new rt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Ua)})}function eb(n){return new rt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Nm(n){return new rt(e=>{nb(n,e).catch(t=>e.error(t))})}function tb(n){return Nm(Xa(n))}function nb(n,e){var t,i,r,s;return Im(this,void 0,void 0,function*(){try{for(t=Pm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function ln(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Za(n,e=0){return Ye((t,i)=>{t.subscribe(Ze(i,r=>ln(i,n,()=>i.next(r),e),()=>ln(i,n,()=>i.complete(),e),r=>ln(i,n,()=>i.error(r),e)))})}function Ja(n,e=0){return Ye((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Om(n,e){return yt(n).pipe(Ja(e),Za(e))}function Lm(n,e){return yt(n).pipe(Ja(e),Za(e))}function Fm(n,e){return new rt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Um(n,e){return new rt(t=>{let i;return ln(t,e,()=>{i=n[$a](),ln(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Pe(i?.return)&&i.return()})}function Ka(n,e){if(!n)throw new Error("Iterable cannot be null");return new rt(t=>{ln(t,e,()=>{let i=n[Symbol.asyncIterator]();ln(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function km(n,e){return Ka(Xa(n),e)}function Bm(n,e){if(n!=null){if(Ga(n))return Om(n,e);if(Ha(n))return Fm(n,e);if(za(n))return Lm(n,e);if(Wa(n))return Ka(n,e);if(qa(n))return Um(n,e);if(Ya(n))return km(n,e)}throw ja(n)}function xt(n,e){return e?Bm(n,e):yt(n)}function Te(...n){let e=Zn(n);return xt(n,e)}function fr(n,e){let t=Pe(n)?n:()=>n,i=r=>r.error(t());return new rt(e?r=>e.schedule(i,0,r):i)}function Xu(n){return!!n&&(n instanceof rt||Pe(n.lift)&&Pe(n.subscribe))}var hi=Qr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function Be(n,e){return Ye((t,i)=>{let r=0;t.subscribe(Ze(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:ib}=Array;function rb(n,e){return ib(e)?n(...e):n(e)}function Qa(n){return Be(e=>rb(n,e))}var{isArray:sb}=Array,{getPrototypeOf:ob,prototype:ab,keys:cb}=Object;function ec(n){if(n.length===1){let e=n[0];if(sb(e))return{args:e,keys:null};if(lb(e)){let t=cb(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function lb(n){return n&&typeof n=="object"&&ob(n)===ab}function tc(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function nc(...n){let e=Zn(n),t=Va(n),{args:i,keys:r}=ec(n);if(i.length===0)return xt([],e);let s=new rt(ub(i,e,r?o=>tc(r,o):en));return t?s.pipe(Qa(t)):s}function ub(n,e,t=en){return i=>{Vm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Vm(e,()=>{let l=xt(n[c],e),u=!1;l.subscribe(Ze(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Vm(n,e,t){n?ln(t,n,e):e()}function Hm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let p=!1;yt(t(v,u++)).subscribe(Ze(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?ln(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(Ze(e,m,()=>{d=!0,h()})),()=>{a?.()}}function Dt(n,e,t=1/0){return Pe(e)?Dt((i,r)=>Be((s,o)=>e(i,s,r,o))(yt(n(i,r))),t):(typeof e=="number"&&(t=e),Ye((i,r)=>Hm(i,r,n,t)))}function Co(n=1/0){return Dt(en,n)}function zm(){return Co(1)}function ss(...n){return zm()(xt(n,Zn(n)))}function ic(n){return new rt(e=>{yt(n()).subscribe(e)})}function Yu(...n){let e=Va(n),{args:t,keys:i}=ec(n),r=new rt(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;yt(t[u]).subscribe(Ze(s,h=>{d||(d=!0,l--),a[u]=h},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?tc(i,a):a),s.complete())}))}});return e?r.pipe(Qa(e)):r}function Zu(...n){let e=Zn(n),t=Tm(n,1/0),i=n;return i.length?i.length===1?yt(i[0]):Co(t)(xt(i,e)):cn}function _n(n,e){return Ye((t,i)=>{let r=0;t.subscribe(Ze(i,s=>n.call(e,s,r++)&&i.next(s)))})}function fi(n){return Ye((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Ze(t,void 0,void 0,o=>{s=yt(n(o,fi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Gm(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Ze(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Oi(n,e){return Pe(e)?Dt(n,e,1):Dt(n,1)}function Li(n){return Ye((e,t)=>{let i=!1;e.subscribe(Ze(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function pi(n){return n<=0?()=>cn:Ye((e,t)=>{let i=0;e.subscribe(Ze(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Ju(n){return Be(()=>n)}function Ku(n,e=en){return n=n??db,Ye((t,i)=>{let r,s=!0;t.subscribe(Ze(i,o=>{let a=e(o);(s||!n(r,a))&&(s=!1,r=a,i.next(o))}))})}function db(n,e){return n===e}function rc(n=hb){return Ye((e,t)=>{let i=!1;e.subscribe(Ze(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function hb(){return new hi}function Fi(n){return Ye((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Fn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?_n((r,s)=>n(r,s,i)):en,pi(1),t?Li(e):rc(()=>new hi))}function os(n){return n<=0?()=>cn:Ye((e,t)=>{let i=[];e.subscribe(Ze(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function Qu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?_n((r,s)=>n(r,s,i)):en,os(1),t?Li(e):rc(()=>new hi))}function ed(n,e){return Ye(Gm(n,e,arguments.length>=2,!0))}function sc(n={}){let{connector:e=()=>new $t,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return s=>{let o,a,c,l=0,u=!1,d=!1,h=()=>{a?.unsubscribe(),a=void 0},m=()=>{h(),o=c=void 0,u=d=!1},g=()=>{let v=o;m(),v?.unsubscribe()};return Ye((v,p)=>{l++,!d&&!u&&h();let f=c=c??e();p.add(()=>{l--,l===0&&!d&&!u&&(a=td(g,r))}),f.subscribe(p),!o&&l>0&&(o=new di({next:S=>f.next(S),error:S=>{d=!0,h(),a=td(m,t,S),f.error(S)},complete:()=>{u=!0,h(),a=td(m,i),f.complete()}}),yt(v).subscribe(o))})(s)}}function td(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new di({next:()=>{i.unsubscribe(),n()}});return yt(e(...t)).subscribe(i)}function nd(...n){let e=Zn(n);return Ye((t,i)=>{(e?ss(n,t,e):ss(n,t)).subscribe(i)})}function un(n,e){return Ye((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Ze(i,c=>{r?.unsubscribe();let l=0,u=s++;yt(n(c,u)).subscribe(r=Ze(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function id(n){return Ye((e,t)=>{yt(n).subscribe(Ze(t,()=>t.complete(),So)),!t.closed&&e.subscribe(t)})}function Ot(n,e,t){let i=Pe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ye((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Ze(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):en}function ft(n){for(let e in n)if(n[e]===ft)return e;throw Error("Could not find renamed property on target object.")}function oc(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function nn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(nn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Wm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var fb=ft({__forward_ref__:ft});function _s(n){return n.__forward_ref__=_s,n.toString=function(){return nn(this())},n}function tn(n){return Tg(n)?n():n}function Tg(n){return typeof n=="function"&&n.hasOwnProperty(fb)&&n.__forward_ref__===_s}function Dg(n){return n&&!!n.\u0275providers}var Ig="https://g.co/ng/security#xss",ye=class extends Error{constructor(e,t){super(ih(e,t)),this.code=e}};function ih(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function kc(n){return typeof n=="string"?n:n==null?"":String(n)}function pb(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():kc(n)}function mb(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new ye(-200,`Circular dependency in DI detected for ${n}${t}`)}function rh(n,e){let t=e?` in ${e}`:"";throw new ye(-201,!1)}function gb(n,e){n==null&&vb(e,n,null,"!=")}function vb(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function we(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function ri(n){return{providers:n.providers||[],imports:n.imports||[]}}function Bc(n){return jm(n,Pg)||jm(n,Ng)}function Rg(n){return Bc(n)!==null}function jm(n,e){return n.hasOwnProperty(e)?n[e]:null}function yb(n){let e=n&&(n[Pg]||n[Ng]);return e||null}function $m(n){return n&&(n.hasOwnProperty(qm)||n.hasOwnProperty(_b))?n[qm]:null}var Pg=ft({\u0275prov:ft}),qm=ft({\u0275inj:ft}),Ng=ft({ngInjectableDef:ft}),_b=ft({ngInjectorDef:ft}),Je=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Je||{}),_d;function xb(){return _d}function Jn(n){let e=_d;return _d=n,e}function Og(n,e,t){let i=Bc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Je.Optional)return null;if(e!==void 0)return e;rh(nn(n),"Injector")}var pr=globalThis;var be=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=we({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var Mb={},No=Mb,xd="__NG_DI_FLAG__",gc="ngTempTokenPath",bb="ngTokenPath",Eb=/\n/gm,wb="\u0275",Xm="__source",To;function as(n){let e=To;return To=n,e}function Sb(n,e=Je.Default){if(To===void 0)throw new ye(-203,!1);return To===null?Og(n,void 0,e):To.get(n,e&Je.Optional?null:void 0,e)}function De(n,e=Je.Default){return(xb()||Sb)(tn(n),e)}function me(n,e=Je.Default){return De(n,Vc(e))}function Vc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Md(n){let e=[];for(let t=0;t<n.length;t++){let i=tn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ye(900,!1);let r,s=Je.Default;for(let o=0;o<i.length;o++){let a=i[o],c=Cb(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(De(r,s))}else e.push(De(i))}return e}function Lg(n,e){return n[xd]=e,n.prototype[xd]=e,n}function Cb(n){return n[xd]}function Ab(n,e,t,i){let r=n[gc];throw e[Xm]&&r.unshift(e[Xm]),n.message=Tb(`
`+n.message,r,t,i),n[bb]=r,n[gc]=null,n}function Tb(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==wb?n.slice(2):n;let r=nn(e);if(Array.isArray(e))r=e.map(nn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):nn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Eb,`
  `)}`}function zo(n){return{toString:n}.toString()}var Fg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Fg||{}),ei=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ei||{}),hs={},wn=[],Db=ft({\u0275cmp:ft}),Ib=ft({\u0275dir:ft}),Rb=ft({\u0275pipe:ft}),Pb=ft({\u0275mod:ft}),vc=ft({\u0275fac:ft}),Do=ft({__NG_ELEMENT_ID__:ft}),Ym=ft({__NG_ENV_ID__:ft});function Ug(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function bd(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Nb(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function kg(n){return n===3||n===4||n===6}function Nb(n){return n.charCodeAt(0)===64}function Oo(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Zm(n,t,r,null,e[++i]):Zm(n,t,r,null,null))}}return n}function Zm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Bg="ng-template";function Ob(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&Ug(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function Vg(n){return n.type===4&&n.value!==Bg}function Lb(n,e,t){let i=n.type===4&&!t?Bg:n.value;return e===i}function Fb(n,e,t){let i=4,r=n.attrs||[],s=Bb(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Un(i)&&!Un(c))return!1;if(o&&Un(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Lb(n,c,t)||c===""&&e.length===1){if(Un(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!Ob(n.attrs,l,t)){if(Un(i))return!1;o=!0}continue}let u=i&8?"class":c,d=Ub(u,r,Vg(n),t);if(d===-1){if(Un(i))return!1;o=!0;continue}if(l!==""){let h;d>s?h="":h=r[d+1].toLowerCase();let m=i&8?h:null;if(m&&Ug(m,l,0)!==-1||i&2&&l!==h){if(Un(i))return!1;o=!0}}}}return Un(i)||o}function Un(n){return(n&1)===0}function Ub(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Vb(e,n)}function kb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Fb(n,e[i],t))return!0;return!1}function Bb(n){for(let e=0;e<n.length;e++){let t=n[e];if(kg(t))return e}return n.length}function Vb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Jm(n,e){return n?":not("+e.trim()+")":e}function Hb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Un(o)&&(e+=Jm(s,r),r=""),i=o,s=s||!Un(i);t++}return r!==""&&(e+=Jm(s,r)),e}function zb(n){return n.map(Hb).join(",")}function Gb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Un(r))break;r=s}i++}return{attrs:e,classes:t}}function Rt(n){return zo(()=>{let e=jg(n),t=vt(de({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Fg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ei.Emulated,styles:n.styles||wn,_:null,schemas:n.schemas||null,tView:null,id:""});$g(t);let i=n.dependencies;return t.directiveDefs=Qm(i,!1),t.pipeDefs=Qm(i,!0),t.id=$b(t),t})}function Wb(n){return vr(n)||Hg(n)}function jb(n){return n!==null}function si(n){return zo(()=>({type:n.type,bootstrap:n.bootstrap||wn,declarations:n.declarations||wn,imports:n.imports||wn,exports:n.exports||wn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Km(n,e){if(n==null)return hs;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}function hn(n){return zo(()=>{let e=jg(n);return $g(e),e})}function vr(n){return n[Db]||null}function Hg(n){return n[Ib]||null}function zg(n){return n[Rb]||null}function Gg(n){let e=vr(n)||Hg(n)||zg(n);return e!==null?e.standalone:!1}function Wg(n,e){let t=n[Pb]||null;if(!t&&e===!0)throw new Error(`Type ${nn(n)} does not have '\u0275mod' property.`);return t}function jg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||hs,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||wn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Km(n.inputs,e),outputs:Km(n.outputs)}}function $g(n){n.features?.forEach(e=>e(n))}function Qm(n,e){if(!n)return null;let t=e?zg:Wb;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(jb)}function $b(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483647+1,"c"+e}var vi=0,Ke=1,tt=2,It=3,kn=4,Ao=5,Bn=6,Lo=7,Cn=8,fs=9,ps=10,Vt=11,Fo=12,eg=13,xs=14,ti=15,Hc=16,cs=17,Uo=18,zc=19,qg=20,Io=21,Ed=22,Ro=23,Po=24,Ui=25;var Xg=1,Yg=2,yr=7,yc=8,_c=9;var Sn=11;function mr(n){return Array.isArray(n)&&typeof n[Xg]=="object"}function yi(n){return Array.isArray(n)&&n[Xg]===!0}function Zg(n){return(n.flags&4)!==0}function Gc(n){return n.componentOffset>-1}function sh(n){return(n.flags&1)===1}function ki(n){return!!n.template}function qb(n){return(n[tt]&512)!==0}function ms(n,e){let t=n.hasOwnProperty(vc);return t?n[vc]:null}var tg=null,rd=!1;function ni(n){let e=tg;return tg=n,e}var Jg={version:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{}};function Xb(n){if(!(lh(n)&&!n.dirty)){if(!n.producerMustRecompute(n)&&!Qg(n)){n.dirty=!1;return}n.producerRecomputeValue(n),n.dirty=!1}}function Yb(n){if(n.liveConsumerNode===void 0)return;let e=rd;rd=!0;try{for(let t of n.liveConsumerNode)t.dirty||Kg(t)}finally{rd=e}}function Kg(n){n.dirty=!0,Yb(n),n.consumerMarkedDirty?.(n)}function oh(n){return n&&(n.nextProducerIndex=0),ni(n)}function ah(n,e){if(ni(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(lh(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)ch(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Qg(n){xc(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Xb(t),i!==t.version))return!0}return!1}function ng(n){if(xc(n),lh(n))for(let e=0;e<n.producerNode.length;e++)ch(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function ch(n,e){if(Zb(n),xc(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)ch(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];xc(r),r.producerIndexOfThis[i]=e}}function lh(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function xc(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Zb(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function Jb(){throw new Error}var Kb=Jb;function Qb(n){Kb=n}function eE(n,e,t){let i=Object.create(tE);t&&(i.consumerAllowSignalWrites=!0),i.fn=n,i.schedule=e;let r=o=>{i.cleanupFn=o},s=()=>{if(i.dirty=!1,i.hasRun&&!Qg(i))return;i.hasRun=!0;let o=oh(i);try{i.cleanupFn(),i.cleanupFn=ev,i.fn(r)}finally{ah(i,o)}};return i.ref={notify:()=>Kg(i),run:s,cleanup:()=>i.cleanupFn()},i.ref}var ev=()=>{},tE=(()=>vt(de({},Jg),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:n=>{n.schedule(n.ref)},hasRun:!1,cleanupFn:ev}))();var wd=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Vi(){return tv}function tv(n){return n.type.prototype.ngOnChanges&&(n.setInput=iE),nE}Vi.ngInherit=!0;function nE(){let n=iv(this),e=n?.current;if(e){let t=n.previous;if(t===hs)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function iE(n,e,t,i){let r=this.declaredInputs[t],s=iv(n)||rE(n,{previous:hs,current:null}),o=s.current||(s.current={}),a=s.previous,c=a[r];o[r]=new wd(c&&c.currentValue,e,a===hs),n[i]=e}var nv="__ngSimpleChanges__";function iv(n){return n[nv]||null}function rE(n,e){return n[nv]=e}var ig=null;var Kn=function(n,e,t){ig?.(n,e,t)},sE="svg",oE="math";function ii(n){for(;Array.isArray(n);)n=n[vi];return n}function rv(n,e){return ii(e[n])}function An(n,e){return ii(e[n.index])}function sv(n,e){return n.data[e]}function Hi(n,e){let t=e[n];return mr(t)?t:t[vi]}function aE(n){return(n[tt]&128)===128}function cE(n){return yi(n[It])}function Mc(n,e){return e==null?null:n[e]}function ov(n){n[cs]=0}function lE(n){n[tt]&1024||(n[tt]|=1024,cv(n,1))}function av(n){n[tt]&1024&&(n[tt]&=-1025,cv(n,-1))}function cv(n,e){let t=n[It];if(t===null)return;t[Ao]+=e;let i=t;for(t=t[It];t!==null&&(e===1&&i[Ao]===1||e===-1&&i[Ao]===0);)t[Ao]+=e,i=t,t=t[It]}function uE(n,e){if((n[tt]&256)===256)throw new ye(911,!1);n[Io]===null&&(n[Io]=[]),n[Io].push(e)}var nt={lFrame:vv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function dE(){return nt.lFrame.elementDepthCount}function hE(){nt.lFrame.elementDepthCount++}function fE(){nt.lFrame.elementDepthCount--}function lv(){return nt.bindingsEnabled}function pE(){return nt.skipHydrationRootTNode!==null}function mE(n){return nt.skipHydrationRootTNode===n}function gE(){nt.skipHydrationRootTNode=null}function Et(){return nt.lFrame.lView}function Vn(){return nt.lFrame.tView}function uv(n){return nt.lFrame.contextLView=n,n[Cn]}function dv(n){return nt.lFrame.contextLView=null,n}function xn(){let n=hv();for(;n!==null&&n.type===64;)n=n.parent;return n}function hv(){return nt.lFrame.currentTNode}function vE(){let n=nt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Go(n,e){let t=nt.lFrame;t.currentTNode=n,t.isParent=e}function fv(){return nt.lFrame.isParent}function yE(){nt.lFrame.isParent=!1}function _E(){let n=nt.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function xE(n){return nt.lFrame.bindingIndex=n}function uh(){return nt.lFrame.bindingIndex++}function ME(n){let e=nt.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function bE(){return nt.lFrame.inI18n}function EE(n,e){let t=nt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Sd(e)}function wE(){return nt.lFrame.currentDirectiveIndex}function Sd(n){nt.lFrame.currentDirectiveIndex=n}function SE(n){let e=nt.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function pv(n){nt.lFrame.currentQueryIndex=n}function CE(n){let e=n[Ke];return e.type===2?e.declTNode:e.type===1?n[Bn]:null}function mv(n,e,t){if(t&Je.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Je.Host);)if(r=CE(s),r===null||(s=s[xs],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=nt.lFrame=gv();return i.currentTNode=e,i.lView=n,!0}function dh(n){let e=gv(),t=n[Ke];nt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function gv(){let n=nt.lFrame,e=n===null?null:n.child;return e===null?vv(n):e}function vv(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function yv(){let n=nt.lFrame;return nt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var _v=yv;function hh(){let n=yv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function AE(n){return(nt.lFrame.contextLView=TE(n,nt.lFrame.contextLView))[Cn]}function TE(n,e){for(;n>0;)e=e[xs],n--;return e}function Ms(){return nt.lFrame.selectedIndex}function _r(n){nt.lFrame.selectedIndex=n}function xv(){let n=nt.lFrame;return sv(n.tView,n.selectedIndex)}function DE(){return nt.lFrame.currentNamespace}var Mv=!0;function fh(){return Mv}function ph(n){Mv=n}function IE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=tv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function mh(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function dc(n,e,t){bv(n,e,3,t)}function hc(n,e,t,i){(n[tt]&3)===t&&bv(n,e,t,i)}function sd(n,e){let t=n[tt];(t&3)===e&&(t&=8191,t+=1,n[tt]=t)}function bv(n,e,t,i){let r=i!==void 0?n[cs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[cs]+=65536),(a<s||s==-1)&&(RE(n,t,e,c),n[cs]=(n[cs]&4294901760)+c+2),c++}function rg(n,e){Kn(4,n,e);let t=ni(null);try{e.call(n)}finally{ni(t),Kn(5,n,e)}}function RE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[tt]>>13<n[cs]>>16&&(n[tt]&3)===e&&(n[tt]+=8192,rg(a,s)):rg(a,s)}var ds=-1,xr=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function PE(n){return n instanceof xr}function NE(n){return(n.flags&8)!==0}function OE(n){return(n.flags&16)!==0}function Ev(n){return n!==ds}function bc(n){let e=n&32767;return n&32767}function LE(n){return n>>16}function Ec(n,e){let t=LE(n),i=e;for(;t>0;)i=i[xs],t--;return i}var Cd=!0;function sg(n){let e=Cd;return Cd=n,e}var FE=256,wv=FE-1,Sv=5,UE=0,Qn={};function kE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Do)&&(i=t[Do]),i==null&&(i=t[Do]=UE++);let r=i&wv,s=1<<r;e.data[n+(r>>Sv)]|=s}function wc(n,e){let t=Cv(n,e);if(t!==-1)return t;let i=e[Ke];i.firstCreatePass&&(n.injectorIndex=e.length,od(i.data,n),od(e,null),od(i.blueprint,null));let r=gh(n,e),s=n.injectorIndex;if(Ev(r)){let o=bc(r),a=Ec(r,e),c=a[Ke].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function od(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Cv(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function gh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Rv(r),i===null)return ds;if(t++,r=r[xs],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ds}function Ad(n,e,t){kE(n,e,t)}function BE(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let s=t[r];if(kg(s))break;if(s===0)r=r+2;else if(typeof s=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(s===e)return t[r+1];r=r+2}}}return null}function Av(n,e,t){if(t&Je.Optional||n!==void 0)return n;rh(e,"NodeInjector")}function Tv(n,e,t,i){if(t&Je.Optional&&i===void 0&&(i=null),!(t&(Je.Self|Je.Host))){let r=n[fs],s=Jn(void 0);try{return r?r.get(e,i,t&Je.Optional):Og(e,i,t&Je.Optional)}finally{Jn(s)}}return Av(i,e,t)}function Dv(n,e,t,i=Je.Default,r){if(n!==null){if(e[tt]&2048&&!(i&Je.Self)){let o=WE(n,e,t,i,Qn);if(o!==Qn)return o}let s=Iv(n,e,t,i,Qn);if(s!==Qn)return s}return Tv(e,t,i,r)}function Iv(n,e,t,i,r){let s=zE(t);if(typeof s=="function"){if(!mv(e,n,i))return i&Je.Host?Av(r,t,i):Tv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Je.Optional))rh(t);else return o}finally{_v()}}else if(typeof s=="number"){let o=null,a=Cv(n,e),c=ds,l=i&Je.Host?e[ti][Bn]:null;for((a===-1||i&Je.SkipSelf)&&(c=a===-1?gh(n,e):e[a+8],c===ds||!ag(i,!1)?a=-1:(o=e[Ke],a=bc(c),e=Ec(c,e)));a!==-1;){let u=e[Ke];if(og(s,a,u.data)){let d=VE(a,e,t,o,i,l);if(d!==Qn)return d}c=e[a+8],c!==ds&&ag(i,e[Ke].data[a+8]===l)&&og(s,a,e)?(o=u,a=bc(c),e=Ec(c,e)):a=-1}}return r}function VE(n,e,t,i,r,s){let o=e[Ke],a=o.data[n+8],c=i==null?Gc(a)&&Cd:i!=o&&(a.type&3)!==0,l=r&Je.Host&&s===a,u=HE(a,o,t,c,l);return u!==null?gs(e,o,u,a):Qn}function HE(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&ki(m)&&m.type===t)return c}return null}function gs(n,e,t,i){let r=n[t],s=e.data;if(PE(r)){let o=r;o.resolving&&mb(pb(s[t]));let a=sg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?Jn(o.injectImpl):null,u=mv(n,i,Je.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&IE(t,s[t],e)}finally{l!==null&&Jn(l),sg(a),o.resolving=!1,_v()}}return r}function zE(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Do)?n[Do]:void 0;return typeof e=="number"?e>=0?e&wv:GE:e}function og(n,e,t){let i=1<<n;return!!(t[e+(n>>Sv)]&i)}function ag(n,e){return!(n&Je.Self)&&!(n&Je.Host&&e)}var gr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Dv(this._tNode,this._lView,e,Vc(i),t)}};function GE(){return new gr(xn(),Et())}function Wc(n){return zo(()=>{let e=n.prototype.constructor,t=e[vc]||Td(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[vc]||Td(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Td(n){return Tg(n)?()=>{let e=Td(tn(n));return e&&e()}:ms(n)}function WE(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[tt]&2048&&!(o[tt]&512);){let a=Iv(s,o,t,i|Je.Self,Qn);if(a!==Qn)return a;let c=s.parent;if(!c){let l=o[qg];if(l){let u=l.get(t,Qn,i);if(u!==Qn)return u}c=Rv(o),o=o[xs]}s=c}return r}function Rv(n){let e=n[Ke],t=e.type;return t===2?e.declTNode:t===1?n[Bn]:null}function vh(n){return BE(xn(),n)}var ac="__parameters__";function jE(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function Pv(n,e,t){return zo(()=>{let i=jE(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(ac)?c[ac]:Object.defineProperty(c,ac,{value:[]})[ac];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}function $E(n){return typeof n=="function"}function yh(n,e){n.forEach(t=>Array.isArray(t)?yh(t,e):e(t))}function Nv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Sc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function qE(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function XE(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function YE(n,e,t){let i=Wo(n,e);return i>=0?n[i|1]=t:(i=~i,XE(n,i,e,t)),i}function ad(n,e){let t=Wo(n,e);if(t>=0)return n[t|1]}function Wo(n,e){return ZE(n,e,1)}function ZE(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var _h=Lg(Pv("Optional"),8);var Ov=Lg(Pv("SkipSelf"),4);function Dd(n){return(n.flags&128)===128}var mi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(mi||{});var Lv=new Map,JE=0;function KE(){return JE++}function QE(n){Lv.set(n[zc],n)}function ew(n){Lv.delete(n[zc])}var cg="__ngContext__";function Mr(n,e){mr(e)?(n[cg]=e[zc],QE(e)):n[cg]=e}var tw;function xh(n,e){return tw(n,e)}function Mh(n){let e=n[It];return yi(e)?e[It]:e}function Fv(n){return kv(n[Fo])}function Uv(n){return kv(n[kn])}function kv(n){for(;n!==null&&!yi(n);)n=n[kn];return n}function ls(n,e,t,i,r){if(i!=null){let s,o=!1;yi(i)?s=i:mr(i)&&(o=!0,i=i[vi]);let a=ii(i);n===0&&t!==null?r==null?zv(e,t,a):Cc(e,t,a,r||null,!0):n===1&&t!==null?Cc(e,t,a,r||null,!0):n===2?_w(e,a,o):n===3&&e.destroyNode(a),s!=null&&Mw(e,n,s,t,r)}}function nw(n,e){return n.createText(e)}function iw(n,e,t){n.setValue(e,t)}function Bv(n,e,t){return n.createElement(e,t)}function rw(n,e){let t=e[Vt];jo(n,e,t,2,null,null),e[vi]=null,e[Bn]=null}function sw(n,e,t,i,r,s){i[vi]=r,i[Bn]=e,jo(n,i,t,1,r,s)}function ow(n,e){jo(n,e,e[Vt],2,null,null)}function aw(n){let e=n[Fo];if(!e)return cd(n[Ke],n);for(;e;){let t=null;if(mr(e))t=e[Fo];else{let i=e[Sn];i&&(t=i)}if(!t){for(;e&&!e[kn]&&e!==n;)mr(e)&&cd(e[Ke],e),e=e[It];e===null&&(e=n),mr(e)&&cd(e[Ke],e),t=e&&e[kn]}e=t}}function cw(n,e,t,i){let r=Sn+i,s=t.length;i>0&&(t[r-1][kn]=e),i<s-Sn?(e[kn]=t[r],Nv(t,Sn+i,e)):(t.push(e),e[kn]=null),e[It]=t;let o=e[Hc];o!==null&&t!==o&&lw(o,e);let a=e[Uo];a!==null&&a.insertView(n),e[tt]|=128}function lw(n,e){let t=n[_c],r=e[It][It][ti];e[ti]!==r&&(n[Yg]=!0),t===null?n[_c]=[e]:t.push(e)}function Vv(n,e){let t=n[_c],i=t.indexOf(e),r=e[It];av(e),t.splice(i,1)}function Id(n,e){if(n.length<=Sn)return;let t=Sn+e,i=n[t];if(i){let r=i[Hc];r!==null&&r!==n&&Vv(r,i),e>0&&(n[t-1][kn]=i[kn]);let s=Sc(n,Sn+e);rw(i[Ke],i);let o=s[Uo];o!==null&&o.detachView(s[Ke]),i[It]=null,i[kn]=null,i[tt]&=-129}return i}function Hv(n,e){if(!(e[tt]&256)){let t=e[Vt];e[Ro]&&ng(e[Ro]),e[Po]&&ng(e[Po]),t.destroyNode&&jo(n,e,t,3,null,null),aw(e)}}function cd(n,e){if(!(e[tt]&256)){e[tt]&=-129,e[tt]|=256,dw(n,e),uw(n,e),e[Ke].type===1&&e[Vt].destroy();let t=e[Hc];if(t!==null&&yi(e[It])){t!==e[It]&&Vv(t,e);let i=e[Uo];i!==null&&i.detachView(n)}ew(e)}}function uw(n,e){let t=n.cleanup,i=e[Lo];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[Lo]=null);let r=e[Io];if(r!==null){e[Io]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function dw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof xr)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Kn(4,a,c);try{c.call(a)}finally{Kn(5,a,c)}}else{Kn(4,r,s);try{s.call(r)}finally{Kn(5,r,s)}}}}}function hw(n,e,t){return fw(n,e.parent,t)}function fw(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[vi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===ei.None||s===ei.Emulated)return null}return An(i,t)}}function Cc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function zv(n,e,t){n.appendChild(e,t)}function lg(n,e,t,i,r){i!==null?Cc(n,e,t,i,r):zv(n,e,t)}function pw(n,e,t,i){n.removeChild(e,t,i)}function bh(n,e){return n.parentNode(e)}function mw(n,e){return n.nextSibling(e)}function gw(n,e,t){return yw(n,e,t)}function vw(n,e,t){return n.type&40?An(n,t):null}var yw=vw,ug;function Eh(n,e,t,i){let r=hw(n,i,e),s=e[Vt],o=i.parent||e[Bn],a=gw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)lg(s,r,t[c],a,!1);else lg(s,r,t,a,!1);ug!==void 0&&ug(s,i,e,t,r)}function fc(n,e){if(e!==null){let t=e.type;if(t&3)return An(e,n);if(t&4)return Rd(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return fc(n,i);{let r=n[e.index];return yi(r)?Rd(-1,r):ii(r)}}else{if(t&32)return xh(e,n)()||ii(n[e.index]);{let i=Gv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Mh(n[ti]);return fc(r,i)}else return fc(n,e.next)}}}return null}function Gv(n,e){if(e!==null){let i=n[ti][Bn],r=e.projection;return i.projection[r]}return null}function Rd(n,e){let t=Sn+n+1;if(t<e.length){let i=e[t],r=i[Ke].firstChild;if(r!==null)return fc(i,r)}return e[yr]}function _w(n,e,t){let i=bh(n,e);i&&pw(n,i,e,t)}function wh(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Mr(ii(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)wh(n,e,t.child,i,r,s,!1),ls(e,n,r,a,s);else if(c&32){let l=xh(t,i),u;for(;u=l();)ls(e,n,r,u,s);ls(e,n,r,a,s)}else c&16?xw(n,e,i,t,r,s):ls(e,n,r,a,s);t=o?t.projectionNext:t.next}}function jo(n,e,t,i,r,s){wh(t,i,n.firstChild,e,r,s,!1)}function xw(n,e,t,i,r,s){let o=t[ti],c=o[Bn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];ls(e,n,r,u,s)}else{let l=c,u=o[It];Dd(i)&&(l.flags|=128),wh(n,e,l,u,r,s,!0)}}function Mw(n,e,t,i,r){let s=t[yr],o=ii(t);s!==o&&ls(e,n,i,s,r);for(let a=Sn;a<t.length;a++){let c=t[a];jo(c[Ke],c,n,e,i,s)}}function bw(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:mi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=mi.Important),n.setStyle(t,i,r,s))}}function Ew(n,e,t){n.setAttribute(e,"style",t)}function Wv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function jv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&bd(n,e,i),r!==null&&Wv(n,e,r),s!==null&&Ew(n,e,s)}var Pd;function $v(n){Pd=n}function ww(){if(Pd!==void 0)return Pd;if(typeof document<"u")return document;throw new ye(210,!1)}var cc;function Sw(){if(cc===void 0&&(cc=null,pr.trustedTypes))try{cc=pr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return cc}function dg(n){return Sw()?.createScriptURL(n)||n}var Ac=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ig})`}};function $o(n){return n instanceof Ac?n.changingThisBreaksApplicationSecurity:n}function Sh(n,e){let t=Cw(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${Ig})`)}return t===e}function Cw(n){return n instanceof Ac&&n.getTypeName()||null}var Aw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function qv(n){return n=String(n),n.match(Aw)?n:"unsafe:"+n}var jc=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(jc||{});function Tw(n){let e=Yv();return e?e.sanitize(jc.URL,n)||"":Sh(n,"URL")?$o(n):qv(kc(n))}function Dw(n){let e=Yv();if(e)return dg(e.sanitize(jc.RESOURCE_URL,n)||"");if(Sh(n,"ResourceURL"))return dg($o(n));throw new ye(904,!1)}function Iw(n,e){return e==="src"&&(n==="embed"||n==="frame"||n==="iframe"||n==="media"||n==="script")||e==="href"&&(n==="base"||n==="link")?Dw:Tw}function Xv(n,e,t){return Iw(e,t)(n)}function Yv(){let n=Et();return n&&n[ps].sanitizer}var qo=new be("ENVIRONMENT_INITIALIZER"),Zv=new be("INJECTOR",-1),Jv=new be("INJECTOR_DEF_TYPES"),Tc=class{get(e,t=No){if(t===No){let i=new Error(`NullInjectorError: No provider for ${nn(e)}!`);throw i.name="NullInjectorError",i}return t}};function bs(n){return{\u0275providers:n}}function Ch(...n){return{\u0275providers:Kv(!0,n),\u0275fromNgModule:!0}}function Kv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return yh(e,o=>{let a=o;Nd(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Qv(r,s),t}function Qv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Ah(r,s=>{e(s,i)})}}function Nd(n,e,t,i){if(n=tn(n),!n)return!1;let r=null,s=$m(n),o=!s&&vr(n);if(!s&&!o){let c=n.ngModule;if(s=$m(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Nd(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{yh(s.imports,u=>{Nd(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Qv(l,e)}if(!a){let l=ms(r)||(()=>new r);e({provide:r,useFactory:l,deps:wn},r),e({provide:Jv,useValue:r,multi:!0},r),e({provide:qo,useValue:()=>De(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Ah(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Ah(n,e){for(let t of n)Dg(t)&&(t=t.\u0275providers),Array.isArray(t)?Ah(t,e):e(t)}var Rw=ft({provide:String,useValue:ft});function ey(n){return n!==null&&typeof n=="object"&&Rw in n}function Pw(n){return!!(n&&n.useExisting)}function Nw(n){return!!(n&&n.useFactory)}function vs(n){return typeof n=="function"}function Ow(n){return!!n.useClass}var $c=new be("Set Injector scope."),pc={},Lw={},ld;function Th(){return ld===void 0&&(ld=new Tc),ld}var dn=class{},Dc=class extends dn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Ld(e,o=>this.processProvider(o)),this.records.set(Zv,us(void 0,this)),r.has("environment")&&this.records.set(dn,us(void 0,this));let s=this.records.get($c);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Jv.multi,wn,Je.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=as(this),i=Jn(void 0),r;try{return e()}finally{as(t),Jn(i)}}get(e,t=No,i=Je.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Ym))return e[Ym](this);i=Vc(i);let r,s=as(this),o=Jn(void 0);try{if(!(i&Je.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=Vw(e)&&Bc(e);l&&this.injectableDefInScope(l)?c=us(Od(e),pc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Je.Self?Th():this.parent;return t=i&Je.Optional&&t===No?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[gc]=a[gc]||[]).unshift(nn(e)),s)throw a;return Ab(a,e,"R3InjectorError",this.source)}else throw a}finally{Jn(o),as(s)}}resolveInjectorInitializers(){let e=as(this),t=Jn(void 0),i;try{let r=this.get(qo.multi,wn,Je.Self);for(let s of r)s()}finally{as(e),Jn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(nn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ye(205,!1)}processProvider(e){e=tn(e);let t=vs(e)?e:tn(e&&e.provide),i=Uw(e);if(!vs(e)&&e.multi===!0){let r=this.records.get(t);r||(r=us(void 0,pc,!0),r.factory=()=>Md(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}else{let r=this.records.get(t)}this.records.set(t,i)}hydrate(e,t){return t.value===pc&&(t.value=Lw,t.value=t.factory()),typeof t.value=="object"&&t.value&&Bw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=tn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Od(n){let e=Bc(n),t=e!==null?e.factory:ms(n);if(t!==null)return t;if(n instanceof be)throw new ye(204,!1);if(n instanceof Function)return Fw(n);throw new ye(204,!1)}function Fw(n){let e=n.length;if(e>0){let i=qE(e,"?");throw new ye(204,!1)}let t=yb(n);return t!==null?()=>t.factory(n):()=>new n}function Uw(n){if(ey(n))return us(void 0,n.useValue);{let e=ty(n);return us(e,pc)}}function ty(n,e,t){let i;if(vs(n)){let r=tn(n);return ms(r)||Od(r)}else if(ey(n))i=()=>tn(n.useValue);else if(Nw(n))i=()=>n.useFactory(...Md(n.deps||[]));else if(Pw(n))i=()=>De(tn(n.useExisting));else{let r=tn(n&&(n.useClass||n.provide));if(kw(n))i=()=>new r(...Md(n.deps));else return ms(r)||Od(r)}return i}function us(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function kw(n){return!!n.deps}function Bw(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Vw(n){return typeof n=="function"||typeof n=="object"&&n instanceof be}function Ld(n,e){for(let t of n)Array.isArray(t)?Ld(t,e):t&&Dg(t)?Ld(t.\u0275providers,e):e(t)}var Dh=new be("AppId",{providedIn:"root",factory:()=>Hw}),Hw="ng",Ih=new be("Platform Initializer"),zi=new be("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var Rh=new be("CSP nonce",{providedIn:"root",factory:()=>ww().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var zw="h",Gw="b";var Ww=(n,e,t)=>null;function Ph(n,e,t=!1){return Ww(n,e,t)}var Fd=class{},Ic=class{};function jw(n){let e=Error(`No component factory found for ${nn(n)}.`);return e[$w]=n,e}var $w="ngComponent";var Ud=class{resolveComponentFactory(e){throw jw(e)}},qc=(()=>{let e=class e{};e.NULL=new Ud;let n=e;return n})();function qw(){return Xc(xn(),Et())}function Xc(n,e){return new Gi(An(n,e))}var Gi=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=qw;let n=e;return n})();var ko=class{},Sr=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>Xw();let n=e;return n})();function Xw(){let n=Et(),e=xn(),t=Hi(e.index,n);return(mr(t)?t:n)[Vt]}var Yw=(()=>{let e=class e{};e.\u0275prov=we({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),br=class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}},Zw=new br("16.2.12"),ud={};function hg(n,e=null,t=null,i){let r=ny(n,e,t,i);return r.resolveInjectorInitializers(),r}function ny(n,e=null,t=null,i,r=new Set){let s=[t||wn,Ch(n)];return i=i||(typeof n=="object"?void 0:nn(n)),new Dc(s,e||Th(),i||null,r)}var Cr=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return hg({name:""},r,i,"");{let s=i.name??"";return hg({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=No,e.NULL=new Tc,e.\u0275prov=we({token:e,providedIn:"any",factory:()=>De(Zv)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})(),Jw="ngOriginalError";function dd(n){return n[Jw]}var gi=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&dd(e);for(;t&&dd(t);)t=dd(t);return t||null}};var kd=class extends $t{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=hd(s),r&&(r=hd(r)),o&&(o=hd(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Bt&&e.add(a),a}};function hd(n){return e=>{setTimeout(n,void 0,e)}}var qt=kd;function fg(...n){}function Kw(){let n=typeof pr.requestAnimationFrame=="function",e=pr[n?"requestAnimationFrame":"setTimeout"],t=pr[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var At=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new qt(!1),this.onMicrotaskEmpty=new qt(!1),this.onStable=new qt(!1),this.onError=new qt(!1),typeof Zone>"u")throw new ye(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=Kw().nativeRequestAnimationFrame,tS(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Qw,fg,fg);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Qw={};function Nh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function eS(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(pr,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Bd(n),n.isCheckStableRunning=!0,Nh(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Bd(n))}function tS(n){let e=()=>{eS(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(nS(a))return t.invokeTask(r,s,o,a);try{return pg(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),mg(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return pg(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),mg(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Bd(n),Nh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Bd(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function pg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function mg(n){n._nesting--,Nh(n)}var iy=new be("",{providedIn:"root",factory:ry});function ry(){let n=me(At),e=!0,t=new rt(r=>{e=n.isStable&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks,n.runOutsideAngular(()=>{r.next(e),r.complete()})}),i=new rt(r=>{let s;n.runOutsideAngular(()=>{s=n.onStable.subscribe(()=>{At.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks&&(e=!0,r.next(!0))})})});let o=n.onUnstable.subscribe(()=>{At.assertInAngularZone(),e&&(e=!1,n.runOutsideAngular(()=>{r.next(!1)}))});return()=>{s.unsubscribe(),o.unsubscribe()}});return Zu(t,i.pipe(sc()))}function nS(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function sy(n){return n instanceof Function?n():n}var iS=(()=>{let e=class e{constructor(){this.renderDepth=0,this.handler=null}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){this.renderDepth--,this.renderDepth===0&&this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null}};e.\u0275prov=we({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Yc(n){for(;n;){n[tt]|=64;let e=Mh(n);if(qb(n)&&!e)return n;n=e}return null}var oy=!1,rS=new be("",{providedIn:"root",factory:()=>oy});var Rc=null;function ay(n,e){return n[e]??uy()}function cy(n,e){let t=uy();t.producerNode?.length&&(n[e]=Rc,t.lView=n,Rc=ly())}var sS=vt(de({},Jg),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Yc(n.lView)},lView:null});function ly(){return Object.create(sS)}function uy(){return Rc??=ly(),Rc}var Ar={};function Tn(n){dy(Vn(),Et(),Ms()+n,!1)}function dy(n,e,t,i){if(!i)if((e[tt]&3)===3){let s=n.preOrderCheckHooks;s!==null&&dc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&hc(e,s,0,t)}_r(t)}function it(n,e=Je.Default){let t=Et();if(t===null)return De(n,e);let i=xn();return Dv(i,t,tn(n),e)}function oS(n,e){let t=n.hostBindingOpCodes;if(t===null)return;let i=ay(e,Po);try{for(let r=0;r<t.length;r++){let s=t[r];if(s<0)_r(~s);else{let o=s,a=t[++r],c=t[++r];EE(a,o),i.dirty=!1;let l=oh(i);try{let u=e[o];c(2,u)}finally{ah(i,l)}}}}finally{e[Po]===null&&cy(e,Po),_r(-1)}}function Zc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[vi]=r,d[tt]=i|4|128|8,(l!==null||n&&n[tt]&2048)&&(d[tt]|=2048),ov(d),d[It]=d[xs]=n,d[Cn]=t,d[ps]=o||n&&n[ps],d[Vt]=a||n&&n[Vt],d[fs]=c||n&&n[fs]||null,d[Bn]=s,d[zc]=KE(),d[Ed]=u,d[qg]=l,d[ti]=e.type==2?n[ti]:d,d}function Jc(n,e,t,i,r){let s=n.data[e];if(s===null)s=aS(n,e,t,i,r),bE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=vE();s.injectorIndex=o===null?-1:o.injectorIndex}return Go(s,!0),s}function aS(n,e,t,i,r){let s=hv(),o=fv(),a=o?s:s&&s.parent,c=n.data[e]=hS(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function hy(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function fy(n,e,t,i,r){let s=ay(e,Ro),o=Ms(),a=i&2;try{_r(-1),a&&e.length>Ui&&dy(n,e,Ui,!1),Kn(a?2:0,r);let l=a?s:null,u=oh(l);try{l!==null&&(l.dirty=!1),t(i,r)}finally{ah(l,u)}}finally{a&&e[Ro]===null&&cy(e,Ro),_r(o),Kn(a?3:1,r)}}function py(n,e,t){if(Zg(e)){let i=ni(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];a.contentQueries&&a.contentQueries(1,t[o],o)}}finally{ni(i)}}}function my(n,e,t){lv()&&(_S(n,e,t,An(t,e)),(t.flags&64)===64&&xy(n,e,t))}function gy(n,e,t=An){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function vy(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Oh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Oh(n,e,t,i,r,s,o,a,c,l,u){let d=Ui+i,h=d+r,m=cS(d,h),g=typeof l=="function"?l():l;return m[Ke]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function cS(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ar);return t}function lS(n,e,t,i){let s=i.get(rS,oy)||t===ei.ShadowDom,o=n.selectRootElement(e,s);return uS(o),o}function uS(n){dS(n)}var dS=n=>null;function hS(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return pE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function gg(n,e,t,i){for(let r in n)if(n.hasOwnProperty(r)){t=t===null?{}:t;let s=n[r];i===null?vg(t,e,r,s):i.hasOwnProperty(r)&&vg(t,e,i[r],s)}return t}function vg(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function fS(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=gg(d.inputs,u,c,m),l=gg(d.outputs,u,l,g);let v=c!==null&&o!==null&&!Vg(e)?IS(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function pS(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function mS(n,e,t,i,r,s,o,a){let c=An(e,t),l=e.inputs,u;!a&&l!=null&&(u=l[i])?(Lh(n,t,u,i,r),Gc(e)&&gS(t,e.index)):e.type&3?(i=pS(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)):e.type&12}function gS(n,e){let t=Hi(e,n);t[tt]&16||(t[tt]|=64)}function yy(n,e,t,i){if(lv()){let r=i===null?null:{"":-1},s=MS(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&_y(n,e,t,o,r,a),r&&bS(t,i,r)}t.mergedAttrs=Oo(t.mergedAttrs,t.attrs)}function _y(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Ad(wc(t,e),n,i[l].type);wS(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=hy(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Oo(t.mergedAttrs,u.hostAttrs),SS(n,t,e,c,u),ES(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}fS(n,t,s)}function vS(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;yS(o)!=a&&o.push(a),o.push(t,i,s)}}function yS(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function _S(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;Gc(t)&&CS(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||wc(t,e),Mr(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=gs(e,n,a,t);if(Mr(l,e),o!==null&&DS(e,a-r,l,c,t,o),ki(c)){let u=Hi(t.index,e);u[Cn]=gs(e,n,a,t)}}}function xy(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=wE();try{_r(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Sd(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&xS(c,l)}}finally{_r(-1),Sd(o)}}function xS(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function MS(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(kb(e,o.selectors,!1))if(i||(i=[]),ki(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Vd(n,e,c)}else i.unshift(o),Vd(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Vd(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function bS(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ye(-301,!1);i.push(e[r],s)}}}function ES(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;ki(e)&&(t[""]=n)}}function wS(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function SS(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ms(r.type,!0)),o=new xr(s,ki(r),it);n.blueprint[i]=o,t[i]=o,vS(n,e,i,hy(n,t,r.hostVars,Ar),r)}function CS(n,e,t){let i=An(e,n),r=vy(t),s=n[ps].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Kc(n,Zc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function AS(n,e,t,i,r,s){let o=An(n,e);TS(e[Vt],o,s,n.value,t,i,r)}function TS(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?kc(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function DS(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++];My(i,t,c,l,u)}}function My(n,e,t,i,r){let s=ni(null);try{let o=n.inputTransforms;o!==null&&o.hasOwnProperty(i)&&(r=o[i].call(e,r)),n.setInput!==null?n.setInput(e,r,t,i):e[i]=r}finally{ni(s)}}function IS(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i.push(s,o[a+1],t[r+1]);break}}r+=2}return i}function by(n,e,t,i){return[n,!0,!1,e,null,0,i,t,null,null,null]}function Ey(n,e){let t=n.contentQueries;if(t!==null)for(let i=0;i<t.length;i+=2){let r=t[i],s=t[i+1];if(s!==-1){let o=n.data[s];pv(r),o.contentQueries(2,e[s],s)}}}function Kc(n,e){return n[Fo]?n[eg][kn]=e:n[Fo]=e,n[eg]=e,e}function Hd(n,e,t){pv(0);let i=ni(null);try{e(n,t)}finally{ni(i)}}function RS(n){return n[Lo]||(n[Lo]=[])}function PS(n){return n.cleanup||(n.cleanup=[])}function wy(n,e){let t=n[fs],i=t?t.get(gi,null):null;i&&i.handleError(e)}function Lh(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=e[o],l=n.data[o];My(l,c,i,a,r)}}function NS(n,e,t){let i=rv(e,n);iw(n[Vt],i,t)}function OS(n,e){let t=Hi(e,n),i=t[Ke];LS(i,t);let r=t[vi];r!==null&&t[Ed]===null&&(t[Ed]=Ph(r,t[fs])),Fh(i,t,t[Cn])}function LS(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Fh(n,e,t){dh(e);try{let i=n.viewQuery;i!==null&&Hd(1,i,t);let r=n.template;r!==null&&fy(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&Ey(n,e),n.staticViewQueries&&Hd(2,n.viewQuery,t);let s=n.components;s!==null&&FS(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[tt]&=-5,hh()}}function FS(n,e){for(let t=0;t<e.length;t++)OS(n,e[t])}var US=(()=>{let e=class e{constructor(){this.all=new Set,this.queue=new Map}create(i,r,s){let o=typeof Zone>"u"?null:Zone.current,a=eE(i,u=>{this.all.has(u)&&this.queue.set(u,o)},s);this.all.add(a),a.notify();let c,l=()=>{a.cleanup(),c?.(),this.all.delete(a),this.queue.delete(a)};return c=r?.onDestroy(l),{destroy:l}}flush(){if(this.queue.size!==0)for(let[i,r]of this.queue)this.queue.delete(i),r?r.run(()=>i.run()):i.run()}get isQueueEmpty(){return this.queue.size===0}};e.\u0275prov=we({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function zd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Wm(r,a);else if(s==2){let c=a,l=e[++o];i=Wm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Pc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(ii(s)),yi(s)&&kS(s,i);let o=t.type;if(o&8)Pc(n,e,t.child,i);else if(o&32){let a=xh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Gv(e,t);if(Array.isArray(a))i.push(...a);else{let c=Mh(e[ti]);Pc(c[Ke],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function kS(n,e){for(let t=Sn;t<n.length;t++){let i=n[t],r=i[Ke].firstChild;r!==null&&Pc(i[Ke],i,r,e)}n[yr]!==n[vi]&&e.push(n[yr])}function Sy(n,e,t,i=!0){let r=e[ps],s=r.rendererFactory,o=r.afterRenderEventManager,a=!1;a||(s.begin?.(),o?.begin());try{Cy(n,e,n.template,t)}catch(c){throw i&&wy(e,c),c}finally{a||(s.end?.(),r.effectManager?.flush(),o?.end())}}function Cy(n,e,t,i){let r=e[tt];if((r&256)===256)return;let s=!1;!s&&e[ps].effectManager?.flush(),dh(e);try{ov(e),xE(n.bindingStartIndex),t!==null&&fy(n,e,t,2,i);let o=(r&3)===3;if(!s)if(o){let l=n.preOrderCheckHooks;l!==null&&dc(e,l,null)}else{let l=n.preOrderHooks;l!==null&&hc(e,l,0,null),sd(e,0)}if(BS(e),Ay(e,2),n.contentQueries!==null&&Ey(n,e),!s)if(o){let l=n.contentCheckHooks;l!==null&&dc(e,l)}else{let l=n.contentHooks;l!==null&&hc(e,l,1),sd(e,1)}oS(n,e);let a=n.components;a!==null&&Dy(e,a,0);let c=n.viewQuery;if(c!==null&&Hd(2,c,i),!s)if(o){let l=n.viewCheckHooks;l!==null&&dc(e,l)}else{let l=n.viewHooks;l!==null&&hc(e,l,2),sd(e,2)}n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),s||(e[tt]&=-73),av(e)}finally{hh()}}function Ay(n,e){for(let t=Fv(n);t!==null;t=Uv(t))for(let i=Sn;i<t.length;i++){let r=t[i];Ty(r,e)}}function BS(n){for(let e=Fv(n);e!==null;e=Uv(e)){if(!e[Yg])continue;let t=e[_c];for(let i=0;i<t.length;i++){let r=t[i],s=r[It];lE(r)}}}function VS(n,e,t){let i=Hi(e,n);Ty(i,t)}function Ty(n,e){if(!aE(n))return;let t=n[Ke],i=n[tt];if(i&80&&e===0||i&1024||e===2)Cy(t,n,t.template,n[Cn]);else if(n[Ao]>0){Ay(n,1);let r=t.components;r!==null&&Dy(n,r,1)}}function Dy(n,e,t){for(let i=0;i<e.length;i++)VS(n,e[i],t)}var Er=class{get rootNodes(){let e=this._lView,t=e[Ke];return Pc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Cn]}set context(e){this._lView[Cn]=e}get destroyed(){return(this._lView[tt]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[It];if(yi(e)){let t=e[yc],i=t?t.indexOf(this):-1;i>-1&&(Id(e,i),Sc(t,i))}this._attachedToViewContainer=!1}Hv(this._lView[Ke],this._lView)}onDestroy(e){uE(this._lView,e)}markForCheck(){Yc(this._cdRefInjectingView||this._lView)}detach(){this._lView[tt]&=-129}reattach(){this._lView[tt]|=128}detectChanges(){Sy(this._lView[Ke],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,ow(this._lView[Ke],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ye(902,!1);this._appRef=e}},Gd=class extends Er{constructor(e){super(e),this._view=e}detectChanges(){let e=this._view,t=e[Ke],i=e[Cn];Sy(t,e,i,!1)}checkNoChanges(){}get context(){return null}},Nc=class extends qc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=vr(e);return new Bo(t,this.ngModule)}};function yg(n){let e=[];for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];e.push({propName:i,templateName:t})}return e}function HS(n){let e=n.toLowerCase();return e==="svg"?sE:e==="math"?oE:null}var Wd=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Vc(i);let r=this.injector.get(e,ud,i);return r!==ud||t===ud?r:this.parentInjector.get(e,t,i)}},Bo=class extends Ic{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=yg(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return yg(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=zb(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof dn?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new Wd(e,s):e,a=o.get(ko,null);if(a===null)throw new ye(407,!1);let c=o.get(Yw,null),l=o.get(US,null),u=o.get(iS,null),d={rendererFactory:a,sanitizer:c,effectManager:l,afterRenderEventManager:u},h=a.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",g=i?lS(h,i,this.componentDef.encapsulation,o):Bv(h,m,HS(m)),v=4608,p=this.componentDef.onPush?576:528,f=this.componentDef.signals?v:p,S=null;g!==null&&(S=Ph(g,o,!0));let b=Oh(0,null,null,1,0,null,null,null,null,null,null),E=Zc(null,b,null,f,null,null,d,h,o,null,S);dh(E);let I,T;try{let C=this.componentDef,q,x=null;C.findHostDirectiveDefs?(q=[],x=new Map,C.findHostDirectiveDefs(C,q,x),q.push(C)):q=[C];let w=zS(E,g),V=GS(w,g,C,q,E,d,h);T=sv(b,Ui),g&&$S(h,C,g,i),t!==void 0&&qS(T,this.ngContentSelectors,t),I=jS(V,C,q,x,E,[XS]),Fh(b,E,null)}finally{hh()}return new jd(this.componentType,I,Xc(T,E),E,T)}},jd=class extends Fd{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new Gd(r),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Lh(s[Ke],s,r,e,t),this.previousInputValues.set(e,t);let o=Hi(this._tNode.index,s);Yc(o)}}get injector(){return new gr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function zS(n,e){let t=n[Ke],i=Ui;return n[i]=e,Jc(t,i,2,"#host",null)}function GS(n,e,t,i,r,s,o){let a=r[Ke];WS(i,n,e,o);let c=null;e!==null&&(c=Ph(e,r[fs]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Zc(r,vy(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Vd(a,n,i.length-1),Kc(r,d),r[n.index]=d}function WS(n,e,t,i){for(let r of n)e.mergedAttrs=Oo(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(zd(e,e.mergedAttrs,!0),t!==null&&jv(i,t,e))}function jS(n,e,t,i,r,s){let o=xn(),a=r[Ke],c=An(o,r);_y(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=gs(r,a,d,o);Mr(h,r)}xy(a,r,o),c&&Mr(c,r);let l=gs(r,a,o.directiveStart+o.componentOffset,o);if(n[Cn]=r[Cn]=l,s!==null)for(let u of s)u(l,e);return py(a,o,n),l}function $S(n,e,t,i){if(i)bd(n,t,["ng-version",Zw.full]);else{let{attrs:r,classes:s}=Gb(e.selectors[0]);r&&bd(n,t,r),s&&s.length>0&&Wv(n,t,s.join(" "))}}function qS(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function XS(){let n=xn();mh(Et()[Ke],n)}function YS(n){return Object.getPrototypeOf(n.prototype).constructor}function Wi(n){let e=YS(n.type),t=!0,i=[n];for(;e;){let r;if(ki(n))r=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new ye(903,!1);r=e.\u0275dir}if(r){if(t){i.push(r);let o=n;o.inputs=lc(n.inputs),o.inputTransforms=lc(n.inputTransforms),o.declaredInputs=lc(n.declaredInputs),o.outputs=lc(n.outputs);let a=r.hostBindings;a&&QS(n,a);let c=r.viewQuery,l=r.contentQueries;if(c&&JS(n,c),l&&KS(n,l),oc(n.inputs,r.inputs),oc(n.declaredInputs,r.declaredInputs),oc(n.outputs,r.outputs),r.inputTransforms!==null&&(o.inputTransforms===null&&(o.inputTransforms={}),oc(o.inputTransforms,r.inputTransforms)),ki(r)&&r.data.animation){let u=n.data;u.animation=(u.animation||[]).concat(r.data.animation)}}let s=r.features;if(s)for(let o=0;o<s.length;o++){let a=s[o];a&&a.ngInherit&&a(n),a===Wi&&(t=!1)}}e=Object.getPrototypeOf(e)}ZS(i)}function ZS(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=e+=r.hostVars,r.hostAttrs=Oo(r.hostAttrs,t=Oo(t,r.hostAttrs))}}function lc(n){return n===hs?{}:n===wn?[]:n}function JS(n,e){let t=n.viewQuery;t?n.viewQuery=(i,r)=>{e(i,r),t(i,r)}:n.viewQuery=e}function KS(n,e){let t=n.contentQueries;t?n.contentQueries=(i,r,s)=>{e(i,r,s),t(i,r,s)}:n.contentQueries=e}function QS(n,e){let t=n.hostBindings;t?n.hostBindings=(i,r)=>{e(i,r),t(i,r)}:n.hostBindings=e}function Uh(n){let e=n.inputConfig,t={};for(let i in e)if(e.hasOwnProperty(i)){let r=e[i];Array.isArray(r)&&r[2]&&(t[i]=r[2])}n.inputTransforms=t}function Iy(n){return tC(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function eC(n,e){if(Array.isArray(n))for(let t=0;t<n.length;t++)e(n[t]);else{let t=n[Symbol.iterator](),i;for(;!(i=t.next()).done;)e(i.value)}}function tC(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function nC(n,e,t){return n[e]=t}function iC(n,e){return n[e]}function Qc(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function el(n,e,t,i){let r=Et(),s=uh();if(Qc(r,s,e)){let o=Vn(),a=xv();AS(a,r,n,e,t,i)}return el}function rC(n,e,t,i){return Qc(n,uh(),t)?e+kc(t)+i:Ar}var HB=new RegExp(`^(\\d+)*(${Gw}|${zw})*(.*)`);function sC(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Jc(e,n,4,o||null,Mc(l,a));yy(e,t,u,Mc(l,c)),mh(e,u);let d=u.tView=Oh(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function Ry(n,e,t,i,r,s,o,a){let c=Et(),l=Vn(),u=n+Ui,d=l.firstCreatePass?sC(u,l,c,e,t,i,r,s,o):l.data[u];Go(d,!1);let h=oC(l,c,d,n);fh()&&Eh(l,c,h,d),Mr(h,c),Kc(c,c[u]=by(h,c,h,d)),sh(d)&&my(l,c,d),o!=null&&gy(c,d,a)}var oC=aC;function aC(n,e,t,i){return ph(!0),e[Vt].createComment("")}function oi(n,e,t){let i=Et(),r=uh();if(Qc(i,r,e)){let s=Vn(),o=xv();mS(s,o,i,n,e,i[Vt],t,!1)}return oi}function _g(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Lh(n,t,s[o],o,i)}function cC(n,e,t,i,r,s){let o=e.consts,a=Mc(o,r),c=Jc(e,n,2,i,a);return yy(e,t,c,Mc(o,s)),c.attrs!==null&&zd(c,c.attrs,!1),c.mergedAttrs!==null&&zd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Le(n,e,t,i){let r=Et(),s=Vn(),o=Ui+n,a=r[Vt],c=s.firstCreatePass?cC(o,s,r,e,t,i):s.data[o],l=lC(s,r,c,a,e,n);r[o]=l;let u=sh(c);return Go(c,!0),jv(a,l,c),(c.flags&32)!==32&&fh()&&Eh(s,r,l,c),dE()===0&&Mr(l,r),hE(),u&&(my(s,r,c),py(s,c,r)),i!==null&&gy(r,c),Le}function ze(){let n=xn();fv()?yE():(n=n.parent,Go(n,!1));let e=n;mE(e)&&gE(),fE();let t=Vn();return t.firstCreatePass&&(mh(t,n),Zg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&NE(e)&&_g(t,e,Et(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&OE(e)&&_g(t,e,Et(),e.stylesWithoutHost,!1),ze}function ai(n,e,t,i){return Le(n,e,t,i),ze(),ai}var lC=(n,e,t,i,r,s)=>(ph(!0),Bv(i,r,DE()));function Py(){return Et()}function Tr(n){return!!n&&typeof n.then=="function"}function Ny(n){return!!n&&typeof n.subscribe=="function"}function fn(n,e,t,i){let r=Et(),s=Vn(),o=xn();return dC(s,r,r[Vt],o,n,e,i),fn}function uC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Lo],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function dC(n,e,t,i,r,s,o){let a=sh(i),l=n.firstCreatePass&&PS(n),u=e[Cn],d=RS(e),h=!0;if(i.type&3||o){let v=An(i,e),p=o?o(v):v,f=d.length,S=o?E=>o(ii(E[i.index])):i.index,b=null;if(!o&&a&&(b=uC(n,e,r,i.index)),b!==null){let E=b.__ngLastListenerFn__||b;E.__ngNextListenerFn__=s,b.__ngLastListenerFn__=s,h=!1}else{s=Mg(i,e,u,s,!1);let E=t.listen(p,r,s);d.push(s,E),l&&l.push(r,S,f,f+1)}}else s=Mg(i,e,u,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let v=g.length;if(v)for(let p=0;p<v;p+=2){let f=g[p],S=g[p+1],I=e[f][S].subscribe(s),T=d.length;d.push(s,I),l&&l.push(r,i.index,T,-(T+1))}}}function xg(n,e,t,i){try{return Kn(6,e,t),t(i)!==!1}catch(r){return wy(n,r),!1}finally{Kn(7,e,t)}}function Mg(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?Hi(n.index,e):e;Yc(a);let c=xg(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=xg(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function Oy(n=1){return AE(n)}function uc(n,e){return n<<17|e<<2}function wr(n){return n>>17&32767}function hC(n){return(n&2)==2}function fC(n,e){return n&131071|e<<17}function $d(n){return n|2}function ys(n){return(n&131068)>>2}function fd(n,e){return n&-131069|e<<2}function pC(n){return(n&1)===1}function qd(n){return n|1}function mC(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=wr(o),c=ys(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Wo(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let h=wr(n[a+1]);n[i+1]=uc(h,a),h!==0&&(n[h+1]=fd(n[h+1],i)),n[a+1]=fC(n[a+1],i)}else n[i+1]=uc(a,0),a!==0&&(n[a+1]=fd(n[a+1],i)),a=i;else n[i+1]=uc(c,0),a===0?a=i:n[c+1]=fd(n[c+1],i),c=i;l&&(n[i+1]=$d(n[i+1])),bg(n,u,i,!0,s),bg(n,u,i,!1,s),gC(e,u,n,i,s),o=uc(a,c),s?e.classBindings=o:e.styleBindings=o}function gC(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Wo(s,e)>=0&&(t[i+1]=qd(t[i+1]))}function bg(n,e,t,i,r){let s=n[t+1],o=e===null,a=i?wr(s):ys(s),c=!1;for(;a!==0&&(c===!1||o);){let l=n[a],u=n[a+1];vC(l,e)&&(c=!0,n[a+1]=i?qd(u):$d(u)),a=i?wr(u):ys(u)}c&&(n[t+1]=i?$d(s):qd(s))}function vC(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Wo(n,e)>=0:!1}function tl(n,e){return yC(n,e,null,!0),tl}function yC(n,e,t,i){let r=Et(),s=Vn(),o=ME(2);if(s.firstUpdatePass&&xC(s,n,o,i),e!==Ar&&Qc(r,o,e)){let a=s.data[Ms()];SC(s,a,r,r[Vt],n,r[o+1]=CC(e,t),i,o)}}function _C(n,e){return e>=n.expandoStartIndex}function xC(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Ms()],o=_C(n,t);AC(s,i)&&e===null&&!o&&(e=!1),e=MC(r,s,e,i),mC(r,s,e,t,o,i)}}function MC(n,e,t,i){let r=SE(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=pd(null,n,e,t,i),t=Vo(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=pd(r,n,e,t,i),s===null){let c=bC(n,e,i);c!==void 0&&Array.isArray(c)&&(c=pd(null,n,e,c[1],i),c=Vo(c,e.attrs,i),EC(n,e,i,c))}else s=wC(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function bC(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ys(i)!==0)return n[wr(i)]}function EC(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[wr(r)]=i}function wC(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Vo(i,o,t)}return Vo(i,e.attrs,t)}function pd(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Vo(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Vo(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),YE(n,o,t?!0:e[++s]))}return n===void 0?null:n}function SC(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=pC(l)?Eg(c,e,t,r,ys(l),o):void 0;if(!Oc(u)){Oc(s)||hC(l)&&(s=Eg(c,null,t,r,a,o));let d=rv(Ms(),t);bw(i,o,d,r,s)}}function Eg(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,h=t[r+1];h===Ar&&(h=d?wn:void 0);let m=d?ad(h,i):u===i?h:void 0;if(l&&!Oc(m)&&(m=ad(c,i)),Oc(m)&&(a=m,o))return a;let g=n[r+1];r=o?wr(g):ys(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=ad(c,i))}return a}function Oc(n){return n!==void 0}function CC(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=nn($o(n)))),n}function AC(n,e){return(n.flags&(e?8:16))!==0}function ot(n,e=""){let t=Et(),i=Vn(),r=n+Ui,s=i.firstCreatePass?Jc(i,r,1,e,null):i.data[r],o=TC(i,t,s,e,n);t[r]=o,fh()&&Eh(i,t,o,s),Go(s,!1)}var TC=(n,e,t,i,r)=>(ph(!0),nw(e[Vt],i));function kh(n){return nl("",n,""),kh}function nl(n,e,t){let i=Et(),r=rC(i,n,e,t);return r!==Ar&&NS(i,Ms(),r),nl}var Lc="en-US";var DC=Lc;function IC(n){gb(n,"Expected localeId to be defined"),typeof n=="string"&&(DC=n.toLowerCase().replace(/_/g,"-"))}function RC(n,e,t){let i=Vn();if(i.firstCreatePass){let r=ki(n);Xd(t,i.data,i.blueprint,r,!0),Xd(e,i.data,i.blueprint,r,!1)}}function Xd(n,e,t,i,r){if(n=tn(n),Array.isArray(n))for(let s=0;s<n.length;s++)Xd(n[s],e,t,i,r);else{let s=Vn(),o=Et(),a=xn(),c=vs(n)?n:tn(n.provide),l=ty(n),u=a.providerIndexes&1048575,d=a.directiveStart,h=a.providerIndexes>>20;if(vs(n)||!n.multi){let m=new xr(l,r,it),g=gd(c,e,r?u:u+h,d);g===-1?(Ad(wc(a,o),s,c),md(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(m),o.push(m)):(t[g]=m,o[g]=m)}else{let m=gd(c,e,u+h,d),g=gd(c,e,u,u+h),v=m>=0&&t[m],p=g>=0&&t[g];if(r&&!p||!r&&!v){Ad(wc(a,o),s,c);let f=OC(r?NC:PC,t.length,r,i,l);!r&&p&&(t[g].providerFactory=f),md(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(f),o.push(f)}else{let f=Ly(t[r?g:m],l,!r&&i);md(s,n,m>-1?m:g,f)}!r&&i&&p&&t[g].componentProviders++}}}function md(n,e,t,i){let r=vs(e),s=Ow(e);if(r||s){let c=(s?tn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function Ly(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function gd(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function PC(n,e,t,i){return Yd(this.multi,[])}function NC(n,e,t,i){let r=this.multi,s;if(this.providerFactory){let o=this.providerFactory.componentProviders,a=gs(t,t[Ke],this.providerFactory.index,i);s=a.slice(0,o),Yd(r,s);for(let c=o;c<a.length;c++)s.push(a[c])}else s=[],Yd(r,s);return s}function Yd(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function OC(n,e,t,i,r){let s=new xr(n,t,it);return s.multi=[],s.index=e,s.componentProviders=0,Ly(s,r,i&&!t),s}function Es(n,e=[]){return t=>{t.providersResolver=(i,r)=>RC(i,r?r(n):n,e)}}var Bi=class{},Ho=class{};var Zd=class extends Bi{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Nc(this);let r=Wg(e);this._bootstrapComponents=sy(r.bootstrap),this._r3Injector=ny(e,t,[{provide:Bi,useValue:this},{provide:qc,useValue:this.componentFactoryResolver},...i],nn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Jd=class extends Ho{constructor(e){super(),this.moduleType=e}create(e){return new Zd(this.moduleType,e,[])}};var Fc=class extends Bi{constructor(e){super(),this.componentFactoryResolver=new Nc(this),this.instance=null;let t=new Dc([...e.providers,{provide:Bi,useValue:this},{provide:qc,useValue:this.componentFactoryResolver}],e.parent||Th(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Bh(n,e,t=null){return new Fc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var LC=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Kv(!1,i.type),s=r.length>0?Bh([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=we({token:e,providedIn:"environment",factory:()=>new e(De(dn))});let n=e;return n})();function Pt(n){n.getStandaloneInjector=e=>e.get(LC).getOrCreateStandaloneInjector(n)}function Fy(n,e,t){let i=_E()+n,r=Et();return r[i]===Ar?nC(r,i,t?e.call(t):e()):iC(r,i)}function FC(n,e,t,i){let r=e.tView,o=n[tt]&4096?4096:16,a=Zc(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.hydrationInfo??null),c=n[e.index];a[Hc]=c;let l=n[Uo];return l!==null&&(a[Uo]=l.createEmbeddedView(r)),Fh(r,a,t),a}function UC(n,e,t,i=!0){let r=e[Ke];if(cw(r,e,n,t),i){let s=Rd(t,n),o=e[Vt],a=bh(o,n[yr]);a!==null&&sw(r,n[Bn],o,e,a,s)}}var Vh=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=VC;let n=e;return n})(),kC=Vh,BC=class extends kC{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=FC(this._declarationLView,this._declarationTContainer,e,{injector:t,hydrationInfo:i});return new Er(r)}};function VC(){return HC(xn(),Et())}function HC(n,e){return n.type&4?new BC(e,n,Xc(n,e)):null}var zC=(n,e)=>null;function wg(n,e){return zC(n,e)}var Xo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=GC;let n=e;return n})();function GC(){let n=xn();return jC(n,Et())}var WC=Xo,Uy=class extends WC{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Xc(this._hostTNode,this._hostLView)}get injector(){return new gr(this._hostTNode,this._hostLView)}get parentInjector(){let e=gh(this._hostTNode,this._hostLView);if(Ev(e)){let t=Ec(e,this._hostLView),i=bc(e),r=t[Ke].data[i+8];return new gr(r,t)}else return new gr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Sg(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Sn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=wg(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o),c=!!o&&!Dd(this._hostTNode);return this.insertImpl(a,r,c),a}createComponent(e,t,i,r,s){let o=e&&!$E(e),a;if(o)a=t;else{let v=t||{};a=v.index,i=v.injector,r=v.projectableNodes,s=v.environmentInjector||v.ngModuleRef}let c=o?e:new Bo(vr(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let p=(o?l:this.parentInjector).get(dn,null);p&&(s=p)}let u=vr(c.componentType??{}),d=wg(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s),g=!!d&&!Dd(this._hostTNode);return this.insertImpl(m.hostView,a,g),m}insert(e,t){return this.insertImpl(e,t,!1)}insertImpl(e,t,i){let r=e._lView,s=r[Ke];if(cE(r)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let l=r[It],u=new Uy(l,l[Bn],l[It]);u.detach(u.indexOf(e))}}let o=this._adjustIndex(t),a=this._lContainer;return UC(a,r,o,!i),e.attachToViewContainerRef(),Nv(vd(a),o,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Sg(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Id(this._lContainer,t);i&&(Sc(vd(this._lContainer),t),Hv(i[Ke],i))}detach(e){let t=this._adjustIndex(e,-1),i=Id(this._lContainer,t);return i&&Sc(vd(this._lContainer),t)!=null?new Er(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Sg(n){return n[yc]}function vd(n){return n[yc]||(n[yc]=[])}function jC(n,e){let t,i=e[n.index];return yi(i)?t=i:(t=by(i,e,null,n),e[n.index]=t,Kc(e,t)),qC(t,e,n,i),new Uy(t,n,e)}function $C(n,e){let t=n[Vt],i=t.createComment(""),r=An(e,n),s=bh(t,r);return Cc(t,s,i,mw(t,r),!1),i}var qC=XC;function XC(n,e,t,i){if(n[yr])return;let r;t.type&8?r=ii(i):r=$C(e,t),n[yr]=r}var ky=new be("Application Initializer"),By=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=me(ky,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Tr(o))i.push(o);else if(Ny(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),il=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function YC(){return typeof $localize<"u"&&$localize.locale||Lc}var Hh=new be("LocaleId",{providedIn:"root",factory:()=>me(Hh,Je.Optional|Je.SkipSelf)||YC()});var ws=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new zt(!1)}add(){this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Kd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},zh=(()=>{let e=class e{compileModuleSync(i){return new Jd(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=Wg(i),o=sy(s.declarations).reduce((a,c)=>{let l=vr(c);return l&&a.push(new Bo(l)),a},[]);return new Kd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Vy=new be("");var mc=null;var Hy=new be("PlatformDestroyListeners"),rl=new be("appBootstrapListener");function ZC(){Qb(()=>{throw new ye(600,!1)})}function JC(n){return n.isBoundToModule}function KC(n=[]){if(mc)return mc;let e=eA(n);return mc=e,ZC(),QC(e),e}function QC(n){n.get(Ih,null)?.forEach(t=>t())}function zy(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=KC(i),s=[oA(),...t||[]],a=new Fc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(At);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(gi,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:m=>{l.handleError(m)}})});let d=()=>a.destroy(),h=r.get(Hy);return h.add(d),a.onDestroy(()=>{u.unsubscribe(),h.delete(d)}),nA(l,c,()=>{let m=a.get(By);return m.runInitializers(),m.donePromise.then(()=>{let g=a.get(Hh,Lc);IC(g||Lc);let v=a.get(Ss);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}function eA(n=[],e){return Cr.create({name:e,providers:[{provide:$c,useValue:"platform"},{provide:Hy,useValue:new Set([()=>mc=null])},...n]})}function tA(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}function nA(n,e,t){try{let i=t();return Tr(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Ss=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=me(Gy),this.zoneIsStable=me(iy),this.componentTypes=[],this.components=[],this.isStable=me(ws).hasPendingTasks.pipe(un(i=>i?Te(!1):this.zoneIsStable),Ku(),sc()),this._injector=me(dn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof Ic;if(!this._injector.get(By).done){let g="Cannot bootstrap as there are still asynchronous initializers running."+(!s&&Gg(i)?"":" Bootstrap components in the `ngDoBootstrap` method of the root module.");throw new ye(405,!1)}let a;s?a=i:a=this._injector.get(qc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=JC(a)?void 0:this._injector.get(Bi),l=r||a.selector,u=a.create(Cr.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(Vy,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),yd(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new ye(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;yd(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(rl,[]);r.push(...this._bootstrapListeners),r.forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>yd(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new ye(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function yd(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var Gy=new be("",{providedIn:"root",factory:()=>me(gi).handleError.bind(void 0)});function iA(){let n=me(At),e=me(gi);return t=>n.runOutsideAngular(()=>e.handleError(t))}var rA=(()=>{let e=class e{constructor(){this.zone=me(At),this.applicationRef=me(Ss)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function sA(n){return[{provide:At,useFactory:n},{provide:qo,multi:!0,useFactory:()=>{let e=me(rA,{optional:!0});return()=>e.initialize()}},{provide:Gy,useFactory:iA},{provide:iy,useFactory:ry}]}function oA(n){let e=sA(()=>new At(tA(n)));return bs([[],e])}var Yo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=aA;let n=e;return n})();function aA(n){return cA(xn(),Et(),(n&16)===16)}function cA(n,e,t){if(Gc(n)&&!t){let i=Hi(n.index,e);return new Er(i,i)}else if(n.type&47){let i=e[ti];return new Er(i,e)}return null}var Qd=class{constructor(){}supports(e){return Iy(e)}create(e){return new eh(e)}},lA=(n,e)=>e,eh=class{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||lA}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,i=this._removalsHead,r=0,s=null;for(;t||i;){let o=!i||t&&t.currentIndex<Cg(i,r,s)?t:i,a=Cg(o,r,s),c=o.currentIndex;if(o===i)r--,i=i._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let m=h<s.length?s[h]:s[h]=0,g=m+h;u<=g&&g<l&&(s[h]=m+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!Iy(e))throw new ye(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,i=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),i=!0):(i&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,eC(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),i=!0):(i&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,i,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(i,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new th(t,i),s,r)),e}_verifyReinsertion(e,t,i,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,i),this._addToMoves(e,i),e}_moveAfter(e,t,i){return this._unlink(e),this._insertAfter(e,t,i),this._addToMoves(e,i),e}_addAfter(e,t,i){return this._insertAfter(e,t,i),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,i){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new Uc),this._linkedRecords.put(e),e.currentIndex=i,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,i=e._next;return t===null?this._itHead=i:t._next=i,i===null?this._itTail=t:i._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Uc),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},th=class{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}},nh=class{constructor(){this._head=null,this._tail=null}add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let i;for(i=this._head;i!==null;i=i._nextDup)if((t===null||t<=i.currentIndex)&&Object.is(i.trackById,e))return i;return null}remove(e){let t=e._prevDup,i=e._nextDup;return t===null?this._head=i:t._nextDup=i,i===null?this._tail=t:i._prevDup=t,this._head===null}},Uc=class{constructor(){this.map=new Map}put(e){let t=e.trackById,i=this.map.get(t);i||(i=new nh,this.map.set(t,i)),i.add(e)}get(e,t){let i=e,r=this.map.get(i);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Cg(n,e,t){let i=n.previousIndex;if(i===null)return i;let r=0;return t&&i<t.length&&(r=t[i]),i+e+r}function Ag(){return new Gh([new Qd])}var Gh=(()=>{let e=class e{constructor(i){this.factories=i}static create(i,r){if(r!=null){let s=r.factories.slice();i=i.concat(s)}return new e(i)}static extend(i){return{provide:e,useFactory:r=>e.create(i,r||Ag()),deps:[[e,new Ov,new _h]]}}find(i){let r=this.factories.find(s=>s.supports(i));if(r!=null)return r;throw new ye(901,!1)}};e.\u0275prov=we({token:e,providedIn:"root",factory:Ag});let n=e;return n})();function Cs(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}var Wh=null;function _i(){return Wh}function qy(n){Wh||(Wh=n)}var sl=class{},pn=new be("DocumentToken"),Xy=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>me(uA))()},providedIn:"platform"});let n=e;return n})();var uA=(()=>{let e=class e extends Xy{constructor(){super(),this._doc=me(pn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _i().getBaseHref(this._doc)}onPopState(i){let r=_i().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=_i().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>new e)()},providedIn:"platform"});let n=e;return n})();function Yy(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Wy(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Dr(n){return n&&n[0]!=="?"?"?"+n:n}var Ts=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>me(Zy))()},providedIn:"root"});let n=e;return n})(),dA=new be("appBaseHref"),Zy=(()=>{let e=class e extends Ts{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??me(pn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Yy(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Dr(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Dr(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Dr(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(De(Xy),De(dA,8))},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var $h=(()=>{let e=class e{constructor(i){this._subject=new qt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=pA(Wy(jy(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Dr(r))}normalize(i){return e.stripTrailingSlash(fA(this._basePath,jy(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Dr(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Dr(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Dr,e.joinWithSlash=Yy,e.stripTrailingSlash=Wy,e.\u0275fac=function(r){return new(r||e)(De(Ts))},e.\u0275prov=we({token:e,factory:function(){return hA()},providedIn:"root"});let n=e;return n})();function hA(){return new $h(De(Ts))}function fA(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function jy(n){return n.replace(/\/index.html$/,"")}function pA(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function ol(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var jh=class{constructor(e,t,i,r){this.$implicit=e,this.ngForOf=t,this.index=i,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Jy=(()=>{let e=class e{set ngForOf(i){this._ngForOf=i,this._ngForOfDirty=!0}set ngForTrackBy(i){this._trackByFn=i}get ngForTrackBy(){return this._trackByFn}constructor(i,r,s){this._viewContainer=i,this._template=r,this._differs=s,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(i){i&&(this._template=i)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let i=this._ngForOf;if(!this._differ&&i)if(!1)try{}catch{}else this._differ=this._differs.find(i).create(this.ngForTrackBy)}if(this._differ){let i=this._differ.diff(this._ngForOf);i&&this._applyChanges(i)}}_applyChanges(i){let r=this._viewContainer;i.forEachOperation((s,o,a)=>{if(s.previousIndex==null)r.createEmbeddedView(this._template,new jh(s.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)r.remove(o===null?void 0:o);else if(o!==null){let c=r.get(o);r.move(c,a),$y(c,s)}});for(let s=0,o=r.length;s<o;s++){let c=r.get(s).context;c.index=s,c.count=o,c.ngForOf=this._ngForOf}i.forEachIdentityChange(s=>{let o=r.get(s.currentIndex);$y(o,s)})}static ngTemplateContextGuard(i,r){return!0}};e.\u0275fac=function(r){return new(r||e)(it(Xo),it(Vh),it(Gh))},e.\u0275dir=hn({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let n=e;return n})();function $y(n,e){n.context.$implicit=e.item}var qh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=si({type:e}),e.\u0275inj=ri({});let n=e;return n})(),Ky="browser",mA="server";function Xh(n){return n===mA}var As=class{};var Jo=class{},cl=class{},Ir=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=r.toLowerCase(),o=t.slice(i+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.setHeaderEntries(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Zh=class{encodeKey(e){return e_(e)}encodeValue(e){return e_(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function yA(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],c=t.get(o)||[];c.push(a),t.set(o,c)}),t}var _A=/%(\d[a-f0-9])/gi,xA={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function e_(n){return encodeURIComponent(n).replace(_A,(e,t)=>xA[t]??e)}function al(n){return`${n}`}var ji=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Zh,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=yA(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(al):[al(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(s=>{t.push({param:i,value:s,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(al(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=this.map.get(e.param)||[],r=i.indexOf(al(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Jh=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function MA(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function t_(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function n_(n){return typeof Blob<"u"&&n instanceof Blob}function i_(n){return typeof FormData<"u"&&n instanceof FormData}function bA(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Zo=class n{constructor(e,t,i,r){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let s;if(MA(this.method)||r?(this.body=i!==void 0?i:null,s=r):s=i,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params)),this.headers||(this.headers=new Ir),this.context||(this.context=new Jh),!this.params)this.params=new ji,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),c=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+c+o}}}serializeBody(){return this.body===null?null:t_(this.body)||n_(this.body)||i_(this.body)||bA(this.body)||typeof this.body=="string"?this.body:this.body instanceof ji?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||i_(this.body)?null:n_(this.body)?this.body.type||null:t_(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof ji?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,s=e.body!==void 0?e.body:this.body,o=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,a=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,c=e.headers||this.headers,l=e.params||this.params,u=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((d,h)=>d.set(h,e.setHeaders[h]),c)),e.setParams&&(l=Object.keys(e.setParams).reduce((d,h)=>d.set(h,e.setParams[h]),l)),new n(t,i,s,{params:l,headers:c,context:u,reportProgress:a,responseType:r,withCredentials:o})}},Ds=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(Ds||{}),Ko=class{constructor(e,t=200,i="OK"){this.headers=e.headers||new Ir,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},Kh=class n extends Ko{constructor(e={}){super(e),this.type=Ds.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ll=class n extends Ko{constructor(e={}){super(e),this.type=Ds.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},ul=class extends Ko{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}};function Yh(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}var Qh=(()=>{let e=class e{constructor(i){this.handler=i}request(i,r,s={}){let o;if(i instanceof Zo)o=i;else{let l;s.headers instanceof Ir?l=s.headers:l=new Ir(s.headers);let u;s.params&&(s.params instanceof ji?u=s.params:u=new ji({fromObject:s.params})),o=new Zo(i,r,s.body!==void 0?s.body:null,{headers:l,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}let a=Te(o).pipe(Oi(l=>this.handler.handle(l)));if(i instanceof Zo||s.observe==="events")return a;let c=a.pipe(_n(l=>l instanceof ll));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(Be(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return c.pipe(Be(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return c.pipe(Be(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return c.pipe(Be(l=>l.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(i,r={}){return this.request("DELETE",i,r)}get(i,r={}){return this.request("GET",i,r)}head(i,r={}){return this.request("HEAD",i,r)}jsonp(i,r){return this.request("JSONP",i,{params:new ji().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(i,r={}){return this.request("OPTIONS",i,r)}patch(i,r,s={}){return this.request("PATCH",i,Yh(s,r))}post(i,r,s={}){return this.request("POST",i,Yh(s,r))}put(i,r,s={}){return this.request("PUT",i,Yh(s,r))}};e.\u0275fac=function(r){return new(r||e)(De(Jo))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})();function a_(n,e){return e(n)}function EA(n,e){return(t,i)=>e.intercept(t,{handle:r=>n(r,i)})}function wA(n,e,t){return(i,r)=>t.runInContext(()=>e(i,s=>n(s,r)))}var SA=new be(""),ef=new be(""),CA=new be("");function AA(){let n=null;return(e,t)=>{n===null&&(n=(me(SA,{optional:!0})??[]).reduceRight(EA,a_));let i=me(ws),r=i.add();return n(e,t).pipe(Fi(()=>i.remove(r)))}}var r_=(()=>{let e=class e extends Jo{constructor(i,r){super(),this.backend=i,this.injector=r,this.chain=null,this.pendingTasks=me(ws)}handle(i){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(ef),...this.injector.get(CA,[])]));this.chain=s.reduceRight((o,a)=>wA(o,a,this.injector),a_)}let r=this.pendingTasks.add();return this.chain(i,s=>this.backend.handle(s)).pipe(Fi(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(De(cl),De(dn))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})();var TA=/^\)\]\}',?\n/;function DA(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var s_=(()=>{let e=class e{constructor(i){this.xhrFactory=i}handle(i){if(i.method==="JSONP")throw new ye(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?xt(r.\u0275loadImpl()):Te(null)).pipe(un(()=>new rt(o=>{let a=r.build();if(a.open(i.method,i.urlWithParams),i.withCredentials&&(a.withCredentials=!0),i.headers.forEach((p,f)=>a.setRequestHeader(p,f.join(","))),i.headers.has("Accept")||a.setRequestHeader("Accept","application/json, text/plain, */*"),!i.headers.has("Content-Type")){let p=i.detectContentTypeHeader();p!==null&&a.setRequestHeader("Content-Type",p)}if(i.responseType){let p=i.responseType.toLowerCase();a.responseType=p!=="json"?p:"text"}let c=i.serializeBody(),l=null,u=()=>{if(l!==null)return l;let p=a.statusText||"OK",f=new Ir(a.getAllResponseHeaders()),S=DA(a)||i.url;return l=new Kh({headers:f,status:a.status,statusText:p,url:S}),l},d=()=>{let{headers:p,status:f,statusText:S,url:b}=u(),E=null;f!==204&&(E=typeof a.response>"u"?a.responseText:a.response),f===0&&(f=E?200:0);let I=f>=200&&f<300;if(i.responseType==="json"&&typeof E=="string"){let T=E;E=E.replace(TA,"");try{E=E!==""?JSON.parse(E):null}catch(C){E=T,I&&(I=!1,E={error:C,text:E})}}I?(o.next(new ll({body:E,headers:p,status:f,statusText:S,url:b||void 0})),o.complete()):o.error(new ul({error:E,headers:p,status:f,statusText:S,url:b||void 0}))},h=p=>{let{url:f}=u(),S=new ul({error:p,status:a.status||0,statusText:a.statusText||"Unknown Error",url:f||void 0});o.error(S)},m=!1,g=p=>{m||(o.next(u()),m=!0);let f={type:Ds.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(f.total=p.total),i.responseType==="text"&&a.responseText&&(f.partialText=a.responseText),o.next(f)},v=p=>{let f={type:Ds.UploadProgress,loaded:p.loaded};p.lengthComputable&&(f.total=p.total),o.next(f)};return a.addEventListener("load",d),a.addEventListener("error",h),a.addEventListener("timeout",h),a.addEventListener("abort",h),i.reportProgress&&(a.addEventListener("progress",g),c!==null&&a.upload&&a.upload.addEventListener("progress",v)),a.send(c),o.next({type:Ds.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",d),a.removeEventListener("timeout",h),i.reportProgress&&(a.removeEventListener("progress",g),c!==null&&a.upload&&a.upload.removeEventListener("progress",v)),a.readyState!==a.DONE&&a.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(De(As))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})(),c_=new be("XSRF_ENABLED"),IA="XSRF-TOKEN",RA=new be("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>IA}),PA="X-XSRF-TOKEN",NA=new be("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>PA}),dl=class{},OA=(()=>{let e=class e{constructor(i,r,s){this.doc=i,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let i=this.doc.cookie||"";return i!==this.lastCookieString&&(this.parseCount++,this.lastToken=ol(i,this.cookieName),this.lastCookieString=i),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(De(pn),De(zi),De(RA))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})();function LA(n,e){let t=n.url.toLowerCase();if(!me(c_)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let i=me(dl).getToken(),r=me(NA);return i!=null&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,i)})),e(n)}var l_=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(l_||{});function FA(n,e){return{\u0275kind:n,\u0275providers:e}}function UA(...n){let e=[Qh,s_,r_,{provide:Jo,useExisting:r_},{provide:cl,useExisting:s_},{provide:ef,useValue:LA,multi:!0},{provide:c_,useValue:!0},{provide:dl,useClass:OA}];for(let t of n)e.push(...t.\u0275providers);return bs(e)}var o_=new be("LEGACY_INTERCEPTOR_FN");function kA(){return FA(l_.LegacyInterceptors,[{provide:o_,useFactory:AA},{provide:ef,useExisting:o_,multi:!0}])}var u_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=si({type:e}),e.\u0275inj=ri({providers:[UA(kA())]});let n=e;return n})();var rf=class extends sl{constructor(){super(...arguments),this.supportsDOMEvents=!0}},sf=class n extends rf{static makeCurrent(){qy(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=VA();return t==null?null:HA(t)}resetBaseElement(){Qo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return ol(document.cookie,e)}},Qo=null;function VA(){return Qo=Qo||document.querySelector("base"),Qo?Qo.getAttribute("href"):null}var hl;function HA(n){hl=hl||document.createElement("a"),hl.setAttribute("href",n);let e=hl.pathname;return e.charAt(0)==="/"?e:`/${e}`}var zA=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})(),of=new be("EventManagerPlugins"),p_=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new ye(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(De(of),De(At))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})(),fl=class{constructor(e){this._doc=e}},tf="ng-app-id",m_=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Xh(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${tf}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(tf),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(tf,this.appId),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r);i.appendChild(s);let o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(De(pn),De(Dh),De(Rh,8),De(zi))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})(),nf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},cf=/%COMP%/g,g_="%COMP%",GA=`_nghost-${g_}`,WA=`_ngcontent-${g_}`,jA=!1,$A=new be("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>jA});function qA(n){return WA.replace(cf,n)}function XA(n){return GA.replace(cf,n)}function v_(n,e){return e.map(t=>t.replace(cf,n))}var d_=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=Xh(c),this.defaultRenderer=new ea(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===ei.ShadowDom&&(r=vt(de({},r),{encapsulation:ei.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof pl?s.applyToHost(i):s instanceof ta&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case ei.Emulated:o=new pl(l,u,r,this.appId,d,a,c,h);break;case ei.ShadowDom:return new af(l,u,i,r,a,c,this.nonce,h);default:o=new ta(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(De(p_),De(m_),De(Dh),De($A),De(pn),De(zi),De(At),De(Rh))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})(),ea=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(nf[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(h_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(h_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ye(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=nf[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=nf[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(mi.DashCase|mi.Important)?e.style.setProperty(t,i,r&mi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&mi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e[t]=i}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=_i().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function h_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var af=class extends ea{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=v_(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ta=class extends ea{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?v_(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},pl=class extends ta{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=qA(l),this.hostAttr=XA(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},YA=(()=>{let e=class e extends fl{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(De(pn))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})(),f_=["alt","control","meta","shift"],ZA={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},JA={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},KA=(()=>{let e=class e extends fl{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_i().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),f_.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=ZA[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),f_.forEach(a=>{if(a!==s){let c=JA[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){switch(i){case"esc":return"escape";default:return i}}};e.\u0275fac=function(r){return new(r||e)(De(pn))},e.\u0275prov=we({token:e,factory:e.\u0275fac});let n=e;return n})();function y_(n,e){return zy(de({rootComponent:n},QA(e)))}function QA(n){return{appProviders:[...rT,...n?.providers??[]],platformProviders:iT}}function eT(){sf.makeCurrent()}function tT(){return new gi}function nT(){return $v(document),document}var iT=[{provide:zi,useValue:Ky},{provide:Ih,useValue:eT,multi:!0},{provide:pn,useFactory:nT,deps:[]}];var rT=[{provide:$c,useValue:"root"},{provide:gi,useFactory:tT,deps:[]},{provide:of,useClass:YA,multi:!0,deps:[pn,At,zi]},{provide:of,useClass:KA,multi:!0,deps:[pn]},d_,m_,p_,{provide:ko,useExisting:d_},{provide:As,useClass:zA,deps:[]},[]];function sT(){return new lf(De(pn))}var lf=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(De(pn))},e.\u0275prov=we({token:e,factory:function(r){let s=null;return r?s=new r:s=sT(),s},providedIn:"root"});let n=e;return n})();var Fe="primary",ca=Symbol("RouteTitle"),pf=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Fs(n){return new pf(n)}function aT(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function cT(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ci(n[t],e[t]))return!1;return!0}function ci(n,e){let t=n?Object.keys(n):void 0,i=e?Object.keys(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!I_(n[r],e[r]))return!1;return!0}function I_(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function R_(n){return n.length>0?n[n.length-1]:null}function qi(n){return Xu(n)?n:Tr(n)?xt(Promise.resolve(n)):Te(n)}var lT={exact:N_,subset:O_},P_={exact:uT,subset:dT,ignored:()=>!0};function __(n,e,t){return lT[t.paths](n.root,e.root,t.matrixParams)&&P_[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function uT(n,e){return ci(n,e)}function N_(n,e,t){if(!Pr(n.segments,e.segments)||!vl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!N_(n.children[i],e.children[i],t))return!1;return!0}function dT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>I_(n[t],e[t]))}function O_(n,e,t){return L_(n,e,e.segments,t)}function L_(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Pr(r,t)||e.hasChildren()||!vl(r,t,i))}else if(n.segments.length===t.length){if(!Pr(n.segments,t)||!vl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!O_(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Pr(n.segments,r)||!vl(n.segments,r,i)||!n.children[Fe]?!1:L_(n.children[Fe],e,s,i)}}function vl(n,e,t){return e.every((i,r)=>P_[t](n[r].parameters,i.parameters))}var $i=class{constructor(e=new at([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Fs(this.queryParams)),this._queryParamMap}toString(){return pT.serialize(this)}},at=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yl(this)}},Rr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=Fs(this.parameters)),this._parameterMap}toString(){return k_(this)}};function hT(n,e){return Pr(n,e)&&n.every((t,i)=>ci(t.parameters,e[i].parameters))}function Pr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function fT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Fe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Fe&&(t=t.concat(e(r,i)))}),t}var F_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>new xl)()},providedIn:"root"});let n=e;return n})(),xl=class{parse(e){let t=new gf(e);return new $i(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${na(e.root,!0)}`,i=vT(e.queryParams),r=typeof e.fragment=="string"?`#${mT(e.fragment)}`:"";return`${t}${i}${r}`}},pT=new xl;function yl(n){return n.segments.map(e=>k_(e)).join("/")}function na(n,e){if(!n.hasChildren())return yl(n);if(e){let t=n.children[Fe]?na(n.children[Fe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Fe&&i.push(`${r}:${na(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=fT(n,(i,r)=>r===Fe?[na(n.children[Fe],!1)]:[`${r}:${na(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Fe]!=null?`${yl(n)}/${t[0]}`:`${yl(n)}/(${t.join("//")})`}}function U_(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ml(n){return U_(n).replace(/%3B/gi,";")}function mT(n){return encodeURI(n)}function mf(n){return U_(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _l(n){return decodeURIComponent(n)}function x_(n){return _l(n.replace(/\+/g,"%20"))}function k_(n){return`${mf(n.path)}${gT(n.parameters)}`}function gT(n){return Object.keys(n).map(e=>`;${mf(e)}=${mf(n[e])}`).join("")}function vT(n){let e=Object.keys(n).map(t=>{let i=n[t];return Array.isArray(i)?i.map(r=>`${ml(t)}=${ml(r)}`).join("&"):`${ml(t)}=${ml(i)}`}).filter(t=>!!t);return e.length?`?${e.join("&")}`:""}var yT=/^[^\/()?;#]+/;function uf(n){let e=n.match(yT);return e?e[0]:""}var _T=/^[^\/()?;=#]+/;function xT(n){let e=n.match(_T);return e?e[0]:""}var MT=/^[^=?&#]+/;function bT(n){let e=n.match(MT);return e?e[0]:""}var ET=/^[^&#]+/;function wT(n){let e=n.match(ET);return e?e[0]:""}var gf=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new at([],{}):new at([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Fe]=new at(e,t)),i}parseSegment(){let e=uf(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ye(4009,!1);return this.capture(e),new Rr(_l(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=xT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=uf(this.remaining);r&&(i=r,this.capture(i))}e[_l(t)]=_l(i)}parseQueryParam(e){let t=bT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=wT(this.remaining);o&&(i=o,this.capture(i))}let r=x_(t),s=x_(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=uf(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ye(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Fe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Fe]:new at([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ye(4011,!1)}};function B_(n){return n.segments.length>0?new at([],{[Fe]:n}):n}function V_(n){let e={};for(let i of Object.keys(n.children)){let r=n.children[i],s=V_(r);if(i===Fe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new at(n.segments,e);return ST(t)}function ST(n){if(n.numberOfChildren===1&&n.children[Fe]){let e=n.children[Fe];return new at(n.segments.concat(e.segments),e.children)}return n}function Us(n){return n instanceof $i}function CT(n,e,t=null,i=null){let r=H_(n);return z_(r,e,t,i)}function H_(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new at(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=B_(i);return e??r}function z_(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return df(r,r,r,t,i);let s=AT(e);if(s.toRoot())return df(r,r,new at([],{}),t,i);let o=TT(s,r,n),a=o.processChildren?sa(o.segmentGroup,o.index,s.commands):W_(o.segmentGroup,o.index,s.commands);return df(r,o.segmentGroup,a,t,i)}function Ml(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function la(n){return typeof n=="object"&&n!=null&&n.outlets}function df(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=G_(n,e,t);let a=B_(V_(o));return new $i(a,s,r)}function G_(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=G_(s,e,t)}),new at(n.segments,i)}var bl=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Ml(i[0]))throw new ye(4003,!1);let r=i.find(la);if(r&&r!==R_(i))throw new ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function AT(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new bl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new bl(t,e,i)}var Ps=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function TT(n,e,t){if(n.isAbsolute)return new Ps(e,!0,0);if(!t)return new Ps(e,!1,NaN);if(t.parent===null)return new Ps(t,!0,0);let i=Ml(n.commands[0])?0:1,r=t.segments.length-1+i;return DT(t,r,n.numberOfDoubleDots)}function DT(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new ye(4005,!1);r=i.segments.length}return new Ps(i,!1,r-s)}function IT(n){return la(n[0])?n[0].outlets:{[Fe]:n}}function W_(n,e,t){if(n||(n=new at([],{})),n.segments.length===0&&n.hasChildren())return sa(n,e,t);let i=RT(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new at(n.segments.slice(0,i.pathIndex),{});return s.children[Fe]=new at(n.segments.slice(i.pathIndex),n.children),sa(s,0,r)}else return i.match&&r.length===0?new at(n.segments,{}):i.match&&!n.hasChildren()?vf(n,e,t):i.match?sa(n,0,r):vf(n,e,t)}function sa(n,e,t){if(t.length===0)return new at(n.segments,{});{let i=IT(t),r={};if(Object.keys(i).some(s=>s!==Fe)&&n.children[Fe]&&n.numberOfChildren===1&&n.children[Fe].segments.length===0){let s=sa(n.children[Fe],e,t);return new at(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=W_(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new at(n.segments,r)}}function RT(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(la(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!b_(c,l,o))return s;i+=2}else{if(!b_(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function vf(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(la(s)){let c=PT(s.outlets);return new at(i,c)}if(r===0&&Ml(t[0])){let c=n.segments[e];i.push(new Rr(c.path,M_(t[0]))),r++;continue}let o=la(s)?s.outlets[Fe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Ml(a)?(i.push(new Rr(o,M_(a))),r+=2):(i.push(new Rr(o,{})),r++)}return new at(i,{})}function PT(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=vf(new at([],{}),0,i))}),e}function M_(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function b_(n,e,t){return n==t.path&&ci(e,t.parameters)}var oa="imperative",Dn=class{constructor(e,t){this.id=e,this.url=t}},ua=class extends Dn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=0,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Nr=class extends Dn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Or=class extends Dn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Lr=class extends Dn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=16}},da=class extends Dn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},El=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yf=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_f=class extends Dn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},xf=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mf=class extends Dn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},bf=class{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ef=class{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},wf=class{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sf=class{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Cf=class{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Af=class{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ha=class{},fa=class{constructor(e){this.url=e}};var Tf=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Dl,this.attachRef=null}},Dl=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Tf,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),wl=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Df(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Df(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=If(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return If(e,this._root).map(t=>t.value)}};function Df(n,e){if(n===e.value)return e;for(let t of e.children){let i=Df(n,t);if(i)return i}return null}function If(n,e){if(n===e.value)return[e];for(let t of e.children){let i=If(n,t);if(i.length)return i.unshift(e),i}return[]}var Hn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Rs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Sl=class extends wl{constructor(e,t){super(e),this.snapshot=t,kf(this,e)}toString(){return this.snapshot.toString()}};function j_(n,e){let t=NT(n,e),i=new zt([new Rr("",{})]),r=new zt({}),s=new zt({}),o=new zt({}),a=new zt(""),c=new Fr(i,r,o,a,s,Fe,e,t.root);return c.snapshot=t.root,new Sl(new Hn(c,[]),t)}function NT(n,e){let t={},i={},r={},s="",o=new Ns([],t,r,s,i,Fe,e,null,{});return new Cl("",new Hn(o,[]))}var Fr=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Be(l=>l[ca]))??Te(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Be(e=>Fs(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Be(e=>Fs(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function $_(n,e="emptyOnly"){let t=n.pathFromRoot,i=0;if(e!=="always")for(i=t.length-1;i>=1;){let r=t[i],s=t[i-1];if(r.routeConfig&&r.routeConfig.path==="")i--;else if(!s.component)i--;else break}return OT(t.slice(i))}function OT(n){return n.reduce((e,t)=>{let i=de(de({},e.params),t.params),r=de(de({},e.data),t.data),s=de(de(de(de({},t.data),e.resolve),t.routeConfig?.data),t._resolvedData);return{params:i,data:r,resolve:s}},{params:{},data:{},resolve:{}})}var Ns=class{get title(){return this.data?.[ca]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Fs(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Fs(this.queryParams)),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Cl=class extends wl{constructor(e,t){super(t),this.url=e,kf(this,t)}toString(){return q_(this._root)}};function kf(n,e){e.value._routerState=n,e.children.forEach(t=>kf(n,t))}function q_(n){let e=n.children.length>0?` { ${n.children.map(q_).join(", ")} } `:"";return`${n.value}${e}`}function hf(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ci(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ci(e.params,t.params)||n.paramsSubject.next(t.params),cT(e.url,t.url)||n.urlSubject.next(t.url),ci(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Rf(n,e){let t=ci(n.params,e.params)&&hT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Rf(n.parent,e.parent))}var Bf=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Fe,this.activateEvents=new qt,this.deactivateEvents=new qt,this.attachEvents=new qt,this.detachEvents=new qt,this.parentContexts=me(Dl),this.location=me(Xo),this.changeDetector=me(Yo),this.environmentInjector=me(dn),this.inputBinder=me(Vf,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ye(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new ye(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Pf(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=hn({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Vi]});let n=e;return n})(),Pf=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Fr?this.route:e===Dl?this.childContexts:this.parent.get(e,t)}},Vf=new be("");function LT(n,e,t){let i=pa(n,e._root,t?t._root:void 0);return new Sl(i,e)}function pa(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=FT(n,e,t);return new Hn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>pa(n,a)),o}}let i=UT(e.value),r=e.children.map(s=>pa(n,s));return new Hn(i,r)}}function FT(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return pa(n,i,r);return pa(n,i)})}function UT(n){return new Fr(new zt(n.url),new zt(n.params),new zt(n.queryParams),new zt(n.fragment),new zt(n.data),n.outlet,n.component,n)}var X_="ngNavigationCancelingError";function Y_(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Us(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Z_(!1,0,e);return r.url=t,r.navigationBehaviorOptions=i,r}function Z_(n,e,t){let i=new Error("NavigationCancelingError: "+(n||""));return i[X_]=!0,i.cancellationCode=e,t&&(i.url=t),i}function kT(n){return J_(n)&&Us(n.url)}function J_(n){return n&&n[X_]}var BT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Rt({type:e,selectors:[["ng-component"]],standalone:!0,features:[Pt],decls:1,vars:0,template:function(r,s){r&1&&ai(0,"router-outlet")},dependencies:[Bf],encapsulation:2});let n=e;return n})();function VT(n,e){return n.providers&&!n._injector&&(n._injector=Bh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Hf(n){let e=n.children&&n.children.map(Hf),t=e?vt(de({},n),{children:e}):de({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Fe&&(t.component=BT),t}function zn(n){return n.outlet||Fe}function HT(n,e){let t=n.filter(i=>zn(i)===e);return t.push(...n.filter(i=>zn(i)!==e)),t}function ma(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var zT=(n,e,t,i)=>Be(r=>(new Nf(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Nf=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),hf(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Rs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Rs(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Rs(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Rs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Af(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Sf(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(hf(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),hf(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=ma(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Al=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Os=class{constructor(e,t){this.component=e,this.route=t}};function GT(n,e,t){let i=n._root,r=e?e._root:null;return ia(i,r,t,[i.value])}function WT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Bs(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Rg(n)?n:e.get(n):i}function ia(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Rs(e);return n.children.forEach(o=>{jT(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>aa(a,t.getContext(o),r)),r}function jT(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=$T(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Al(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ia(n,e,a?a.children:null,i,r):ia(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Os(a.outlet.component,o))}else o&&aa(e,a,r),r.canActivateChecks.push(new Al(i)),s.component?ia(n,null,a?a.children:null,i,r):ia(n,null,t,i,r);return r}function $T(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Pr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Pr(n.url,e.url)||!ci(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Rf(n,e)||!ci(n.queryParams,e.queryParams);case"paramsChange":default:return!Rf(n,e)}}function aa(n,e,t){let i=Rs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?aa(o,e.children.getContext(s),t):aa(o,null,t):aa(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Os(e.outlet.component,r)):t.canDeactivateChecks.push(new Os(null,r)):t.canDeactivateChecks.push(new Os(null,r))}function ga(n){return typeof n=="function"}function qT(n){return typeof n=="boolean"}function XT(n){return n&&ga(n.canLoad)}function YT(n){return n&&ga(n.canActivate)}function ZT(n){return n&&ga(n.canActivateChild)}function JT(n){return n&&ga(n.canDeactivate)}function KT(n){return n&&ga(n.canMatch)}function K_(n){return n instanceof hi||n?.name==="EmptyError"}var gl=Symbol("INITIAL_VALUE");function ks(){return un(n=>nc(n.map(e=>e.pipe(pi(1),nd(gl)))).pipe(Be(e=>{for(let t of e)if(t!==!0){if(t===gl)return gl;if(t===!1||t instanceof $i)return t}return!0}),_n(e=>e!==gl),pi(1)))}function QT(n,e){return Dt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Te(vt(de({},t),{guardsResult:!0})):eD(o,i,r,n).pipe(Dt(a=>a&&qT(a)?tD(i,s,n,e):Te(a)),Be(a=>vt(de({},t),{guardsResult:a})))})}function eD(n,e,t,i){return xt(n).pipe(Dt(r=>oD(r.component,r.route,t,e,i)),Fn(r=>r!==!0,!0))}function tD(n,e,t,i){return xt(e).pipe(Oi(r=>ss(iD(r.route.parent,i),nD(r.route,i),sD(n,r.path,t),rD(n,r.route,t))),Fn(r=>r!==!0,!0))}function nD(n,e){return n!==null&&e&&e(new Cf(n)),Te(!0)}function iD(n,e){return n!==null&&e&&e(new wf(n)),Te(!0)}function rD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Te(!0);let r=i.map(s=>ic(()=>{let o=ma(e)??t,a=Bs(s,o),c=YT(a)?a.canActivate(e,n):o.runInContext(()=>a(e,n));return qi(c).pipe(Fn())}));return Te(r).pipe(ks())}function sD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>WT(o)).filter(o=>o!==null).map(o=>ic(()=>{let a=o.guards.map(c=>{let l=ma(o.node)??t,u=Bs(c,l),d=ZT(u)?u.canActivateChild(i,n):l.runInContext(()=>u(i,n));return qi(d).pipe(Fn())});return Te(a).pipe(ks())}));return Te(s).pipe(ks())}function oD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Te(!0);let o=s.map(a=>{let c=ma(e)??r,l=Bs(a,c),u=JT(l)?l.canDeactivate(n,e,t,i):c.runInContext(()=>l(n,e,t,i));return qi(u).pipe(Fn())});return Te(o).pipe(ks())}function aD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Te(!0);let s=r.map(o=>{let a=Bs(o,n),c=XT(a)?a.canLoad(e,t):n.runInContext(()=>a(e,t));return qi(c)});return Te(s).pipe(ks(),Q_(i))}function Q_(n){return Gu(Ot(e=>{if(Us(e))throw Y_(n,e)}),Be(e=>e===!0))}function cD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Te(!0);let s=r.map(o=>{let a=Bs(o,n),c=KT(a)?a.canMatch(e,t):n.runInContext(()=>a(e,t));return qi(c)});return Te(s).pipe(ks(),Q_(i))}var Ls=class{constructor(e){this.segmentGroup=e||null}},Tl=class{constructor(e){this.urlTree=e}};function Is(n){return fr(new Ls(n))}function E_(n){return fr(new Tl(n))}function lD(n){return fr(new ye(4e3,!1))}function uD(n){return fr(Z_(!1,3))}var Of=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}noMatchError(e){return new ye(4002,!1)}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Te(i);if(r.numberOfChildren>1||!r.children[Fe])return lD(e.redirectTo);r=r.children[Fe]}}applyRedirectCommands(e,t,i){return this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i)}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new $i(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new at(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new ye(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Lf={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function dD(n,e,t,i,r){let s=zf(n,e,t);return s.matched?(i=VT(e,i),cD(i,e,t,r).pipe(Be(o=>o===!0?s:de({},Lf)))):Te(s)}function zf(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?de({},Lf):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||aT)(t,n,e);if(!r)return de({},Lf);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?de(de({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function w_(n,e,t,i){return t.length>0&&pD(n,t,i)?{segmentGroup:new at(e,fD(i,new at(t,n.children))),slicedSegments:[]}:t.length===0&&mD(n,t,i)?{segmentGroup:new at(n.segments,hD(n,e,t,i,n.children)),slicedSegments:t}:{segmentGroup:new at(n.segments,n.children),slicedSegments:t}}function hD(n,e,t,i,r){let s={};for(let o of i)if(Il(n,t,o)&&!r[zn(o)]){let a=new at([],{});s[zn(o)]=a}return de(de({},r),s)}function fD(n,e){let t={};t[Fe]=e;for(let i of n)if(i.path===""&&zn(i)!==Fe){let r=new at([],{});t[zn(i)]=r}return t}function pD(n,e,t){return t.some(i=>Il(n,e,i)&&zn(i)!==Fe)}function mD(n,e,t){return t.some(i=>Il(n,e,i))}function Il(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function gD(n,e,t,i){return zn(n)!==i&&(i===Fe||!Il(e,t,n))?!1:n.path==="**"?!0:zf(e,n,t).matched}function vD(n,e,t){return e.length===0&&!n.children[t]}function yD(n,e,t,i,r,s,o="emptyOnly"){return new Ff(n,e,t,i,r,o,s).recognize()}var Ff=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.allowRedirects=!0,this.applyRedirects=new Of(this.urlSerializer,this.urlTree)}noMatchError(e){return new ye(4002,!1)}recognize(){let e=w_(this.urlTree.root,[],[],this.config).segmentGroup;return this.processSegmentGroup(this.injector,this.config,e,Fe).pipe(fi(t=>{if(t instanceof Tl)return this.allowRedirects=!1,this.urlTree=t.urlTree,this.match(t.urlTree);throw t instanceof Ls?this.noMatchError(t):t}),Be(t=>{let i=new Ns([],Object.freeze({}),Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,{},Fe,this.rootComponentType,null,{}),r=new Hn(i,t),s=new Cl("",r),o=CT(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e.root,Fe).pipe(fi(i=>{throw i instanceof Ls?this.noMatchError(i):i}))}inheritParamsAndData(e){let t=e.value,i=$_(t,this.paramsInheritanceStrategy);t.params=Object.freeze(i.params),t.data=Object.freeze(i.data),e.children.forEach(r=>this.inheritParamsAndData(r))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0)}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return xt(r).pipe(Oi(s=>{let o=i.children[s],a=HT(t,s);return this.processSegmentGroup(e,a,o,s)}),ed((s,o)=>(s.push(...o),s)),Li(null),Qu(),Dt(s=>{if(s===null)return Is(i);let o=e0(s);return _D(o),Te(o)}))}processSegment(e,t,i,r,s,o){return xt(t).pipe(Oi(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(fi(c=>{if(c instanceof Ls)return Te(null);throw c}))),Fn(a=>!!a),fi(a=>{if(K_(a))return vD(i,r,s)?Te([]):Is(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return gD(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,a):a&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Is(r):Is(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){return r.path==="**"?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,i,r,o):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,i,r){let s=this.applyRedirects.applyRedirectCommands([],i.redirectTo,{});return i.redirectTo.startsWith("/")?E_(s):this.applyRedirects.lineralizeSegments(i,s).pipe(Dt(o=>{let a=new at(o,{});return this.processSegment(e,t,a,o,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,remainingSegments:l,positionalParamSegments:u}=zf(t,r,s);if(!a)return Is(t);let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,u);return r.redirectTo.startsWith("/")?E_(d):this.applyRedirects.lineralizeSegments(r,d).pipe(Dt(h=>this.processSegment(e,i,t,h.concat(l),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a;if(i.path==="**"){let c=r.length>0?R_(r).parameters:{},l=new Ns(r,c,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,S_(i),zn(i),i.component??i._loadedComponent??null,i,C_(i));a=Te({snapshot:l,consumedSegments:[],remainingSegments:[]}),t.children={}}else a=dD(t,i,r,e,this.urlSerializer).pipe(Be(({matched:c,consumedSegments:l,remainingSegments:u,parameters:d})=>c?{snapshot:new Ns(l,d,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,S_(i),zn(i),i.component??i._loadedComponent??null,i,C_(i)),consumedSegments:l,remainingSegments:u}:null));return a.pipe(un(c=>c===null?Is(t):(e=i._injector??e,this.getChildConfig(e,i,r).pipe(un(({routes:l})=>{let u=i._loadedInjector??e,{snapshot:d,consumedSegments:h,remainingSegments:m}=c,{segmentGroup:g,slicedSegments:v}=w_(t,h,m,l);if(v.length===0&&g.hasChildren())return this.processChildren(u,l,g).pipe(Be(f=>f===null?null:[new Hn(d,f)]));if(l.length===0&&v.length===0)return Te([new Hn(d,[])]);let p=zn(i)===s;return this.processSegment(u,l,g,v,p?Fe:s,!0).pipe(Be(f=>[new Hn(d,f)]))})))))}getChildConfig(e,t,i){return t.children?Te({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Te({routes:t._loadedRoutes,injector:t._loadedInjector}):aD(e,t,i,this.urlSerializer).pipe(Dt(r=>r?this.configLoader.loadChildren(e,t).pipe(Ot(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):uD(t))):Te({routes:[],injector:e})}};function _D(n){n.sort((e,t)=>e.value.outlet===Fe?-1:t.value.outlet===Fe?1:e.value.outlet.localeCompare(t.value.outlet))}function xD(n){let e=n.value.routeConfig;return e&&e.path===""}function e0(n){let e=[],t=new Set;for(let i of n){if(!xD(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=e0(i.children);e.push(new Hn(i.value,r))}return e.filter(i=>!t.has(i))}function S_(n){return n.data||{}}function C_(n){return n.resolve||{}}function MD(n,e,t,i,r,s){return Dt(o=>yD(n,e,t,i,o.extractedUrl,r,s).pipe(Be(({state:a,tree:c})=>vt(de({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function bD(n,e){return Dt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Te(t);let s=0;return xt(r).pipe(Oi(o=>ED(o.route,i,n,e)),Ot(()=>s++),os(1),Dt(o=>s===r.length?Te(t):cn))})}function ED(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!A_(r)&&(s[ca]=r.title),wD(s,n,e,i).pipe(Be(o=>(n._resolvedData=o,n.data=$_(n,t).resolve,r&&A_(r)&&(n.data[ca]=r.title),null)))}function wD(n,e,t,i){let r=SD(n);if(r.length===0)return Te({});let s={};return xt(r).pipe(Dt(o=>CD(n[o],e,t,i).pipe(Fn(),Ot(a=>{s[o]=a}))),os(1),Ju(s),fi(o=>K_(o)?cn:fr(o)))}function SD(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function CD(n,e,t,i){let r=ma(e)??i,s=Bs(n,r),o=s.resolve?s.resolve(e,t):r.runInContext(()=>s(e,t));return qi(o)}function A_(n){return typeof n.title=="string"||n.title===null}function ff(n){return un(e=>{let t=n(e);return t?xt(t).pipe(Be(()=>e)):Te(e)})}var Gf=new be("ROUTES"),AD=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=me(zh)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Te(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=qi(i.loadComponent()).pipe(Be(t0),Ot(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Fi(()=>{this.componentLoaders.delete(i)})),s=new rs(r,()=>new $t).pipe(is());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Te({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=TD(r,this.compiler,i,this.onLoadEndListener).pipe(Fi(()=>{this.childrenLoaders.delete(r)})),a=new rs(o,()=>new $t).pipe(is());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function TD(n,e,t,i){return qi(n.loadChildren()).pipe(Be(t0),Dt(r=>r instanceof Ho||Array.isArray(r)?Te(r):xt(e.compileModuleAsync(r))),Be(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Gf,[],{optional:!0,self:!0}).flat()),{routes:o.map(Hf),injector:s}}))}function DD(n){return n&&typeof n=="object"&&"default"in n}function t0(n){return DD(n)?n.default:n}var ID=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new $t,this.transitionAbortSubject=new $t,this.configLoader=me(AD),this.environmentInjector=me(dn),this.urlSerializer=me(F_),this.rootContexts=me(Dl),this.inputBindingEnabled=me(Vf,{optional:!0})!==null,this.navigationId=0,this.afterPreactivation=()=>Te(void 0),this.rootComponentType=null;let i=s=>this.events.next(new bf(s)),r=s=>this.events.next(new Ef(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(vt(de(de({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new zt({id:0,currentUrlTree:r,currentRawUrl:r,currentBrowserUrl:r,extractedUrl:i.urlHandlingStrategy.extract(r),urlAfterRedirects:i.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:oa,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(_n(o=>o.id!==0),Be(o=>vt(de({},o),{extractedUrl:i.urlHandlingStrategy.extract(o.rawUrl)})),un(o=>{this.currentTransition=o;let a=!1,c=!1;return Te(o).pipe(Ot(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?vt(de({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),un(l=>{let u=l.currentBrowserUrl.toString(),d=!i.navigated||l.extractedUrl.toString()!==u||u!==l.currentUrlTree.toString(),h=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!d&&h!=="reload"){let m="";return this.events.next(new Lr(l.id,this.urlSerializer.serialize(l.rawUrl),m,0)),l.resolve(null),cn}if(i.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Te(l).pipe(un(m=>{let g=this.transitions?.getValue();return this.events.next(new ua(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),g!==this.transitions?.getValue()?cn:Promise.resolve(m)}),MD(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,i.paramsInheritanceStrategy),Ot(m=>{o.targetSnapshot=m.targetSnapshot,o.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation=vt(de({},this.currentNavigation),{finalUrl:m.urlAfterRedirects});let g=new El(m.id,this.urlSerializer.serialize(m.extractedUrl),this.urlSerializer.serialize(m.urlAfterRedirects),m.targetSnapshot);this.events.next(g)}));if(d&&i.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:m,extractedUrl:g,source:v,restoredState:p,extras:f}=l,S=new ua(m,this.urlSerializer.serialize(g),v,p);this.events.next(S);let b=j_(g,this.rootComponentType).snapshot;return this.currentTransition=o=vt(de({},l),{targetSnapshot:b,urlAfterRedirects:g,extras:vt(de({},f),{skipLocationChange:!1,replaceUrl:!1})}),Te(o)}else{let m="";return this.events.next(new Lr(l.id,this.urlSerializer.serialize(l.extractedUrl),m,1)),l.resolve(null),cn}}),Ot(l=>{let u=new yf(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),Be(l=>(this.currentTransition=o=vt(de({},l),{guards:GT(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),QT(this.environmentInjector,l=>this.events.next(l)),Ot(l=>{if(o.guardsResult=l.guardsResult,Us(l.guardsResult))throw Y_(this.urlSerializer,l.guardsResult);let u=new _f(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),_n(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),ff(l=>{if(l.guards.canActivateChecks.length)return Te(l).pipe(Ot(u=>{let d=new xf(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),un(u=>{let d=!1;return Te(u).pipe(bD(i.paramsInheritanceStrategy,this.environmentInjector),Ot({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",2)}}))}),Ot(u=>{let d=new Mf(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),ff(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Ot(m=>{d.component=m}),Be(()=>{})));for(let m of d.children)h.push(...u(m));return h};return nc(u(l.targetSnapshot.root)).pipe(Li(),pi(1))}),ff(()=>this.afterPreactivation()),Be(l=>{let u=LT(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=vt(de({},l),{targetRouterState:u}),o}),Ot(()=>{this.events.next(new ha)}),zT(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),pi(1),Ot({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Nr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),i.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),id(this.transitionAbortSubject.pipe(Ot(l=>{throw l}))),Fi(()=>{if(!a&&!c){let l="";this.cancelNavigationTransition(o,l,1)}this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),fi(l=>{if(c=!0,J_(l))this.events.next(new Or(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),kT(l)?this.events.next(new fa(l.url)):o.resolve(!1);else{this.events.next(new da(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){o.reject(u)}}return cn}))}))}cancelNavigationTransition(i,r,s){let o=new Or(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function T_(n){return n!==oa}var n0=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Fe);return r}getResolvedTitleForRoute(i){return i.data[ca]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>me(RD))()},providedIn:"root"});let n=e;return n})(),RD=(()=>{let e=class e extends n0{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(De(lf))},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),PD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>me(ND))()},providedIn:"root"});let n=e;return n})(),Uf=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},ND=(()=>{let e=class e extends Uf{};e.\u0275fac=function(){let i;return function(s){return(i||(i=Wc(e)))(s||e)}}(),e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),OD=new be("",{providedIn:"root",factory:()=>({})}),LD=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:function(){return(()=>me(FD))()},providedIn:"root"});let n=e;return n})(),FD=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ra=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(ra||{});function UD(n,e){n.events.pipe(_n(t=>t instanceof Nr||t instanceof Or||t instanceof da||t instanceof Lr),Be(t=>t instanceof Nr||t instanceof Lr?ra.COMPLETE:(t instanceof Or?t.code===0||t.code===1:!1)?ra.REDIRECTING:ra.FAILED),_n(t=>t!==ra.REDIRECTING),pi(1)).subscribe(()=>{e()})}function kD(n){throw n}function BD(n,e,t){return e.parse("/")}var VD={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},HD={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},va=(()=>{let e=class e{get navigationId(){return this.navigationTransitions.navigationId}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.location.getState()?.\u0275routerPageId??this.currentPageId}get events(){return this._events}constructor(){this.disposed=!1,this.currentPageId=0,this.console=me(il),this.isNgZoneEnabled=!1,this._events=new $t,this.options=me(OD,{optional:!0})||{},this.pendingTasks=me(ws),this.errorHandler=this.options.errorHandler||kD,this.malformedUriErrorHandler=this.options.malformedUriErrorHandler||BD,this.navigated=!1,this.lastSuccessfulId=-1,this.urlHandlingStrategy=me(LD),this.routeReuseStrategy=me(PD),this.titleStrategy=me(n0),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.config=me(Gf,{optional:!0})?.flat()??[],this.navigationTransitions=me(ID),this.urlSerializer=me(F_),this.location=me($h),this.componentInputBindingEnabled=!!me(Vf,{optional:!0}),this.eventsSubscription=new Bt,this.isNgZoneEnabled=me(At)instanceof At&&At.isInAngularZone(),this.resetConfig(this.config),this.currentUrlTree=new $i,this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=j_(this.currentUrlTree,null),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe(i=>{this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId},i=>{this.console.warn(`Unhandled Navigation Error: ${i}`)}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let{currentTransition:s}=this.navigationTransitions;if(s===null){D_(r)&&this._events.next(r);return}if(r instanceof ua)T_(s.source)&&(this.browserUrlTree=s.extractedUrl);else if(r instanceof Lr)this.rawUrlTree=s.rawUrl;else if(r instanceof El){if(this.urlUpdateStrategy==="eager"){if(!s.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(s.urlAfterRedirects,s.rawUrl);this.setBrowserUrl(o,s)}this.browserUrlTree=s.urlAfterRedirects}}else if(r instanceof ha)this.currentUrlTree=s.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(s.urlAfterRedirects,s.rawUrl),this.routerState=s.targetRouterState,this.urlUpdateStrategy==="deferred"&&(s.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,s),this.browserUrlTree=s.urlAfterRedirects);else if(r instanceof Or)r.code!==0&&r.code!==1&&(this.navigated=!0),(r.code===3||r.code===2)&&this.restoreHistory(s);else if(r instanceof fa){let o=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),a={skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||T_(s.source)};this.scheduleNavigation(o,oa,null,a,{resolve:s.resolve,reject:s.reject,promise:s.promise})}r instanceof da&&this.restoreHistory(s,!0),r instanceof Nr&&(this.navigated=!0),D_(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){if(this.setUpLocationChangeListener(),!this.navigationTransitions.hasRequestedNavigation){let i=this.location.getState();this.navigateToSyncWithBrowser(this.location.path(!0),oa,i)}}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(i=>{let r=i.type==="popstate"?"popstate":"hashchange";r==="popstate"&&setTimeout(()=>{this.navigateToSyncWithBrowser(i.url,r,i.state)},0)}))}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=de({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Hf),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=de(de({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=H_(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return z_(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Us(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,oa,null,r)}navigate(i,r={skipLocationChange:!1}){return zD(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){let r;try{r=this.urlSerializer.parse(i)}catch(s){r=this.malformedUriErrorHandler(s,this.urlSerializer,i)}return r}isActive(i,r){let s;if(r===!0?s=de({},VD):r===!1?s=de({},HD):s=r,Us(i))return __(this.currentUrlTree,i,s);let o=this.parseUrl(i);return __(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.keys(i).reduce((r,s)=>{let o=i[s];return o!=null&&(r[s]=o),r},{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return UD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,currentBrowserUrl:this.browserUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=de(de({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=de(de({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===this.getCurrentNavigation()?.finalUrl&&o===0&&(this.resetState(i),this.browserUrlTree=i.currentUrlTree,this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=i.currentRouterState,this.currentUrlTree=i.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function zD(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new ye(4008,!1)}function D_(n){return!(n instanceof ha)&&!(n instanceof fa)}var i0=(()=>{let e=class e{constructor(i,r,s,o,a,c){this.router=i,this.route=r,this.tabIndexAttribute=s,this.renderer=o,this.el=a,this.locationStrategy=c,this.href=null,this.commands=null,this.onChanges=new $t,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=i.events.subscribe(u=>{u instanceof Nr&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(i){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",i)}ngOnChanges(i){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(i){i!=null?(this.commands=Array.isArray(i)?i:[i],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(i,r,s,o,a){if(this.urlTree===null||this.isAnchorElement&&(i!==0||r||s||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state};return this.router.navigateByUrl(this.urlTree,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){this.href=this.urlTree!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null;let i=this.href===null?null:Xv(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",i)}applyAttributeValue(i,r){let s=this.renderer,o=this.el.nativeElement;r!==null?s.setAttribute(o,i,r):s.removeAttribute(o,i)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};e.\u0275fac=function(r){return new(r||e)(it(va),it(Fr),vh("tabindex"),it(Sr),it(Gi),it(Ts))},e.\u0275dir=hn({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,s){r&1&&fn("click",function(a){return s.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&el("target",s.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:["preserveFragment","preserveFragment",Cs],skipLocationChange:["skipLocationChange","skipLocationChange",Cs],replaceUrl:["replaceUrl","replaceUrl",Cs],routerLink:"routerLink"},standalone:!0,features:[Uh,Vi]});let n=e;return n})();var GD=new be("");function r0(n,...e){return bs([{provide:Gf,multi:!0,useValue:n},[],{provide:Fr,useFactory:WD,deps:[va]},{provide:rl,multi:!0,useFactory:jD},e.map(t=>t.\u0275providers)])}function WD(n){return n.routerState.root}function jD(){let n=me(Cr);return e=>{let t=n.get(Ss);if(e!==t.components[0])return;let i=n.get(va),r=n.get($D);n.get(qD)===1&&i.initialNavigation(),n.get(XD,null,Je.Optional)?.setUpPreloading(),n.get(GD,null,Je.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var $D=new be("",{factory:()=>new $t}),qD=new be("",{providedIn:"root",factory:()=>1});var XD=new be("");var s0=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Rt({type:e,selectors:[["app-homepage"]],standalone:!0,features:[Pt],decls:17,vars:0,consts:[[1,"container"],[1,"no-margin-bottom"]],template:function(r,s){r&1&&(Le(0,"div",0)(1,"h1",1),ot(2,"Nathan Brown"),ze(),Le(3,"h2",1),ot(4,"Full Stack Software Engineer"),ze(),Le(5,"h3"),ot(6,"JavaScript;"),ze(),Le(7,"h3"),ot(8,"TypeScript;"),ze(),Le(9,"h3"),ot(10,"Angular;"),ze(),Le(11,"h3"),ot(12,"React;"),ze(),Le(13,"h3"),ot(14,"Node.js;"),ze(),Le(15,"h3"),ot(16,"Python;"),ze()())},styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}h2[_ngcontent-%COMP%]{color:#fff;font-size:45px;font-family:Tektur;margin-top:1.5rem}h3[_ngcontent-%COMP%]{color:#726890;font-family:Tektur}"]});let n=e;return n})();var o0=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Rt({type:e,selectors:[["app-not-found"]],standalone:!0,features:[Pt],decls:2,vars:0,consts:[[1,"no-margin-bottom"]],template:function(r,s){r&1&&(Le(0,"h1",0),ot(1,"not-found works!"),ze())},styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}"]});let n=e;return n})();var p0=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(it(Sr),it(Gi))},e.\u0275dir=hn({type:e});let n=e;return n})(),ZD=(()=>{let e=class e extends p0{};e.\u0275fac=function(){let i;return function(s){return(i||(i=Wc(e)))(s||e)}}(),e.\u0275dir=hn({type:e,features:[Wi]});let n=e;return n})(),m0=new be("NgValueAccessor");var JD={provide:m0,useExisting:_s(()=>g0),multi:!0};function KD(){let n=_i()?_i().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var QD=new be("CompositionEventMode"),g0=(()=>{let e=class e extends p0{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!KD())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(it(Sr),it(Gi),it(QD,8))},e.\u0275dir=hn({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&fn("input",function(a){return s._handleInput(a.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(a){return s._compositionEnd(a.target.value)})},features:[Es([JD]),Wi]});let n=e;return n})();function Xi(n){return n==null||(typeof n=="string"||Array.isArray(n))&&n.length===0}function v0(n){return n!=null&&typeof n.length=="number"}var y0=new be("NgValidators"),_0=new be("NgAsyncValidators"),eI=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ur=class{static min(e){return tI(e)}static max(e){return nI(e)}static required(e){return iI(e)}static requiredTrue(e){return rI(e)}static email(e){return sI(e)}static minLength(e){return oI(e)}static maxLength(e){return aI(e)}static pattern(e){return cI(e)}static nullValidator(e){return x0(e)}static compose(e){return C0(e)}static composeAsync(e){return T0(e)}};function tI(n){return e=>{if(Xi(e.value)||Xi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function nI(n){return e=>{if(Xi(e.value)||Xi(n))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function iI(n){return Xi(n.value)?{required:!0}:null}function rI(n){return n.value===!0?null:{required:!0}}function sI(n){return Xi(n.value)||eI.test(n.value)?null:{email:!0}}function oI(n){return e=>Xi(e.value)||!v0(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function aI(n){return e=>v0(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}function cI(n){if(!n)return x0;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(Xi(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function x0(n){return null}function M0(n){return n!=null}function b0(n){return Tr(n)?xt(n):n}function E0(n){let e={};return n.forEach(t=>{e=t!=null?de(de({},e),t):e}),Object.keys(e).length===0?null:e}function w0(n,e){return e.map(t=>t(n))}function lI(n){return!n.validate}function S0(n){return n.map(e=>lI(e)?e:t=>e.validate(t))}function C0(n){if(!n)return null;let e=n.filter(M0);return e.length==0?null:function(t){return E0(w0(t,e))}}function A0(n){return n!=null?C0(S0(n)):null}function T0(n){if(!n)return null;let e=n.filter(M0);return e.length==0?null:function(t){let i=w0(t,e).map(b0);return Yu(i).pipe(Be(E0))}}function D0(n){return n!=null?T0(S0(n)):null}function a0(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function I0(n){return n._rawValidators}function R0(n){return n._rawAsyncValidators}function Wf(n){return n?Array.isArray(n)?n:[n]:[]}function Pl(n,e){return Array.isArray(n)?n.includes(e):n===e}function c0(n,e){let t=Wf(e);return Wf(n).forEach(r=>{Pl(t,r)||t.push(r)}),t}function l0(n,e){return Wf(e).filter(t=>!Pl(n,t))}var Nl=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=A0(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=D0(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Hs=class extends Nl{get formDirective(){return null}get path(){return null}},xi=class extends Nl{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Ol=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},uI={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},OH=vt(de({},uI),{"[class.ng-submitted]":"isSubmitted"}),P0=(()=>{let e=class e extends Ol{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(it(xi,2))},e.\u0275dir=hn({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&tl("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[Wi]});let n=e;return n})(),N0=(()=>{let e=class e extends Ol{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(it(Hs,10))},e.\u0275dir=hn({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&tl("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[Wi]});let n=e;return n})();var ya="VALID",Rl="INVALID",Vs="PENDING",_a="DISABLED";function O0(n){return(Bl(n)?n.validators:n)||null}function dI(n){return Array.isArray(n)?A0(n):n||null}function L0(n,e){return(Bl(e)?e.asyncValidators:n)||null}function hI(n){return Array.isArray(n)?D0(n):n||null}function Bl(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function fI(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new ye(1e3,"");if(!i[t])throw new ye(1001,"")}function pI(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new ye(1002,"")})}var Ll=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===ya}get invalid(){return this.status===Rl}get pending(){return this.status==Vs}get disabled(){return this.status===_a}get enabled(){return this.status!==_a}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(c0(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(c0(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(l0(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(l0(e,this._rawAsyncValidators))}hasValidator(e){return Pl(this._rawValidators,e)}hasAsyncValidator(e){return Pl(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=Vs,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=_a,this.errors=null,this._forEachChild(i=>{i.disable(vt(de({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(vt(de({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ya,this._forEachChild(i=>{i.enable(vt(de({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(vt(de({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ya||this.status===Vs)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?_a:ya}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=Vs,this._hasOwnPendingAsyncValidator=!0;let t=b0(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new qt,this.statusChanges=new qt}_calculateStatus(){return this._allControlsDisabled()?_a:this.errors?Rl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Vs)?Vs:this._anyControlsHaveStatus(Rl)?Rl:ya}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Bl(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=dI(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=hI(this._rawAsyncValidators)}},Fl=class extends Ll{constructor(e,t,i){super(O0(t),L0(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){pI(this,!0,e),Object.keys(e).forEach(i=>{fI(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,s)=>{i=t(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var F0=new be("CallSetDisabledState",{providedIn:"root",factory:()=>jf}),jf="always";function mI(n,e){return[...e.path,n]}function u0(n,e,t=jf){$f(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),vI(n,e),_I(n,e),yI(n,e),gI(n,e)}function d0(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),kl(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ul(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function gI(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function $f(n,e){let t=I0(n);e.validator!==null?n.setValidators(a0(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=R0(n);e.asyncValidator!==null?n.setAsyncValidators(a0(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Ul(e._rawValidators,r),Ul(e._rawAsyncValidators,r)}function kl(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=I0(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,n.setValidators(s))}}if(e.asyncValidator!==null){let r=R0(n);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,n.setAsyncValidators(s))}}}let i=()=>{};return Ul(e._rawValidators,i),Ul(e._rawAsyncValidators,i),t}function vI(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&U0(n,e)})}function yI(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&U0(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function U0(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function _I(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function xI(n,e){n==null,$f(n,e)}function MI(n,e){return kl(n,e)}function bI(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function EI(n){return Object.getPrototypeOf(n.constructor)===ZD}function wI(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function SI(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(s=>{s.constructor===g0?t=s:EI(s)?i=s:r=s}),r||i||t||null}function CI(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function h0(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function f0(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var zs=class extends Ll{constructor(e=null,t,i){super(O0(t),L0(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bl(t)&&(t.nonNullable||t.initialValueIsDefault)&&(f0(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){h0(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){h0(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){f0(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var AI=n=>n instanceof zs;var k0=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=hn({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var TI=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=si({type:e}),e.\u0275inj=ri({});let n=e;return n})();var B0=new be("NgModelWithFormControlWarning");var DI={provide:Hs,useExisting:_s(()=>qf)},qf=(()=>{let e=class e extends Hs{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new qt,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(kl(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return u0(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){d0(i.control||null,i,!1),CI(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,wI(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(d0(r||null,i),AI(s)&&(u0(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);xI(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&MI(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$f(this.form,this),this._oldForm&&kl(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(it(y0,10),it(_0,10),it(F0,8))},e.\u0275dir=hn({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&fn("submit",function(a){return s.onSubmit(a)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[Es([DI]),Wi,Vi]});let n=e;return n})();var II={provide:xi,useExisting:_s(()=>Xf)},Xf=(()=>{let e=class e extends xi{set isDisabled(i){}constructor(i,r,s,o,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new qt,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=SI(this,o)}ngOnChanges(i){this._added||this._setUpControl(),bI(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return mI(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(it(Hs,13),it(y0,10),it(_0,10),it(m0,10),it(B0,8))},e.\u0275dir=hn({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[Es([II]),Wi,Vi]});let n=e;return n})();var RI=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=si({type:e}),e.\u0275inj=ri({imports:[TI]});let n=e;return n})();var V0=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:B0,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:F0,useValue:i.callSetDisabledState??jf}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=si({type:e}),e.\u0275inj=ri({imports:[RI]});let n=e;return n})();var H0=(()=>{let e=class e{constructor(i){this.control=i,this.placeholder="",this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.control.valueAccessor=this}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}updateValue(i){let r=i.target;this.onChange(r.value)}};e.\u0275fac=function(r){return new(r||e)(it(xi,10))},e.\u0275cmp=Rt({type:e,selectors:[["app-input-field"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[Pt],decls:2,vars:1,consts:[[1,"input-container"],["type","text",3,"placeholder","change"]],template:function(r,s){r&1&&(Le(0,"div",0)(1,"input",1),fn("change",function(a){return s.updateValue(a)}),ze()()),r&2&&(Tn(1),oi("placeholder",s.placeholder))},styles:["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px #FFF inset!important;box-shadow:0 0 0 30px #fff inset!important}.input-container[_ngcontent-%COMP%]{margin-top:1rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:2.5rem;border:3px solid transparent;width:20.5rem;border-radius:.5rem;padding-left:1rem}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border:3px solid #726890}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-family:Tektur;color:#020202}"]});let n=e;return n})();var z0=(()=>{let e=class e{constructor(i){this.control=i,this.placeholder="",this.value="",this.onChange=()=>{},this.onTouched=()=>{},this.control.valueAccessor=this}writeValue(i){this.value=i}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}updateValue(i){let r=i.target;this.onChange(r.value)}};e.\u0275fac=function(r){return new(r||e)(it(xi,10))},e.\u0275cmp=Rt({type:e,selectors:[["app-large-text"]],inputs:{placeholder:"placeholder"},standalone:!0,features:[Pt],decls:2,vars:1,consts:[[1,"container"],[3,"placeholder","change"]],template:function(r,s){r&1&&(Le(0,"div",0)(1,"textarea",1),fn("change",function(a){return s.updateValue(a)}),ze()()),r&2&&(Tn(1),oi("placeholder",s.placeholder))},styles:[".container[_ngcontent-%COMP%]{margin-top:1rem}.container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:30.5rem;height:15rem;resize:none;border-radius:.5rem;padding:1rem}.container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{font-family:Tektur;color:#020202}"]});let n=e;return n})();var G0=(()=>{let e=class e{constructor(){this.label=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Rt({type:e,selectors:[["app-button"]],inputs:{label:"label"},standalone:!0,features:[Pt],decls:2,vars:1,template:function(r,s){r&1&&(Le(0,"button"),ot(1),ze()),r&2&&(Tn(1),kh(s.label))},styles:["button[_ngcontent-%COMP%]{margin-top:1rem;height:2.5rem;width:7rem;border-radius:.5rem;cursor:pointer;background-color:#726890;border:none;color:#fff;font-family:Tektur}"]});let n=e;return n})();var W0={production:!0,baseUrl:"https://nejb-portfolio.onrender.com/"};var Vl=(()=>{let e=class e{constructor(i){this.http=i,this.baseUrl=W0.baseUrl}sendEmail(i){let r=this.baseUrl+"send-email";return this.http.post(r,i).pipe(Be(s=>{console.log("res",s)}))}};e.\u0275fac=function(r){return new(r||e)(De(Qh))},e.\u0275prov=we({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var j0=(()=>{let e=class e{constructor(i){this.sendEmailHttpService=i,this.errorMessage="",this.contactForm=new Fl({name:new zs("",{validators:[Ur.required]}),email:new zs("",{validators:[Ur.required,Ur.email]}),subject:new zs(""),message:new zs("",{validators:[Ur.required]})})}sendEmail(){if(console.log("called?",this.contactForm),this.contactForm.valid){this.errorMessage="";let i={name:this.contactForm.controls.name.value,email:this.contactForm.controls.email.value,subject:this.contactForm.controls.subject.value,message:this.contactForm.controls.message.value};this.sendEmailHttpService.sendEmail(i).subscribe(r=>{console.log("res",r)})}else this.errorMessage="Name, email, and message fields are required."}};e.\u0275fac=function(r){return new(r||e)(it(Vl))},e.\u0275cmp=Rt({type:e,selectors:[["app-contact"]],standalone:!0,features:[Es([Vl]),Pt],decls:8,vars:1,consts:[[1,"no-margin-bottom"],[3,"formGroup"],["type","text","placeholder","Name","formControlName","name"],["type","text","placeholder","Email","formControlName","email"],["type","text","placeholder","Subject","formControlName","subject"],["placeholder","Message","formControlName","message"],["label","Submit",3,"click"]],template:function(r,s){r&1&&(Le(0,"h1",0),ot(1,"Contact"),ze(),Le(2,"form",1),ai(3,"app-input-field",2)(4,"app-input-field",3)(5,"app-input-field",4)(6,"app-large-text",5),Le(7,"app-button",6),fn("click",function(){return s.sendEmail()}),ze()()),r&2&&(Tn(2),oi("formGroup",s.contactForm))},dependencies:[V0,k0,P0,N0,qf,Xf,H0,z0,G0],styles:["h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}app-button[_ngcontent-%COMP%]{align-self:flex-end}"]});let n=e;return n})();var $0=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Rt({type:e,selectors:[["app-about"]],standalone:!0,features:[Pt],decls:26,vars:0,consts:[[1,"container"]],template:function(r,s){r&1&&(Le(0,"div",0)(1,"h1"),ot(2,"About Me"),ze(),Le(3,"p"),ot(4," Hello! I'm Nathan, a passionate and versatile full-stack software engineer with a penchant for crafting seamless and engaging user experiences. Over the course of my dynamic career, I've had the privilege of contributing my skills to a diverse range of companies \u2013 from nimble startups to industry giants in the Fortune 500. "),ze(),Le(5,"h3"),ot(6,"Tech Enthusiast"),ze(),Le(7,"p"),ot(8," My journey in the world of software engineering has been marked by a profound love for crafting innovative solutions. I specialize in JavaScript and TypeScript, leveraging the power of these languages to build robust and scalable applications. With an inclination towards front-end development, I've honed my expertise in both Angular and React, ensuring that every interface I create is not just functional but also delightful for users. "),ze(),Le(9,"h3"),ot(10,"Full-Stack Proficiency"),ze(),Le(11,"p"),ot(12," While I've specialized in front-end development, my skills extend seamlessly to the back end. I'm well-versed in Node.js, utilizing its asynchronous capabilities to create efficient and responsive server-side applications. Additionally, my proficiency in Python empowers me to tackle diverse challenges in backend development with a focus on clarity and maintainability. "),ze(),Le(13,"h3"),ot(14,"Experience Across the Spectrum"),ze(),Le(15,"p"),ot(16," Having navigated through companies of all sizes, I bring a wealth of experience that spans the entire software development lifecycle. From the agility demanded by startups to the scale and structure required by Fortune 500 companies, I've cultivated adaptability and a keen understanding of the unique challenges each setting presents. "),ze(),Le(17,"h3"),ot(18,"Let's Build Something Extraordinary"),ze(),Le(19,"p"),ot(20," I thrive on turning ideas into reality and transforming challenges into opportunities. Whether it's bringing pixel-perfect designs to life on the front end or architecting robust server-side solutions, I'm driven by a commitment to excellence. "),ze(),Le(21,"p"),ot(22," Let's embark on a journey of innovation together. Feel free to explore my portfolio and discover the projects that define my passion for software engineering. "),ai(23,"br")(24,"br"),ot(25," Happy coding! "),ze()())},styles:[".container[_ngcontent-%COMP%]{max-width:50rem}h1[_ngcontent-%COMP%]{color:#fff;line-height:80px;font-size:75px;font-family:Tektur;margin-top:2rem}h3[_ngcontent-%COMP%]{color:#fff;font-size:35px;font-family:Tektur}p[_ngcontent-%COMP%]{color:#fff;font-family:Tektur}"]});let n=e;return n})();var q0=[{path:"",component:s0},{path:"contact",component:j0},{path:"about",component:$0},{path:"**",component:o0}];var X0={providers:[r0(q0),Ch(u_)]};var cm="160";var NI=0,Y0=1,OI=2;var yM=1,LI=2,Ci=3,sr=0,vn=1,Ti=2;var nr=0,lo=1,Z0=2,J0=3,K0=4,FI=5,Gr=100,UI=101,kI=102,Q0=103,ex=104,BI=200,VI=201,HI=202,zI=203,Ap=204,Tp=205,GI=206,WI=207,jI=208,$I=209,qI=210,XI=211,YI=212,ZI=213,JI=214,KI=0,QI=1,e1=2,uu=3,t1=4,n1=5,i1=6,r1=7,_M=0,s1=1,o1=2,ir=0,a1=1,c1=2,l1=3,u1=4,d1=5,h1=6;var tx=300,fo=301,po=302,Dp=303,Ip=304,Iu=306,Rp=1e3,$n=1001,Pp=1002,on=1003,nx=1004;var Zf=1005;var Rn=1006,f1=1007;var Aa=1008;var rr=1009,p1=1010,m1=1011,lm=1012,xM=1013,er=1014,tr=1015,Ta=1016,MM=1017,bM=1018,jr=1020,g1=1021,qn=1023,v1=1024,y1=1025,$r=1026,mo=1027,_1=1028,EM=1029,x1=1030,wM=1031,SM=1033,Jf=33776,Kf=33777,Qf=33778,ep=33779,ix=35840,rx=35841,sx=35842,ox=35843,CM=36196,ax=37492,cx=37496,lx=37808,ux=37809,dx=37810,hx=37811,fx=37812,px=37813,mx=37814,gx=37815,vx=37816,yx=37817,_x=37818,xx=37819,Mx=37820,bx=37821,tp=36492,Ex=36494,wx=36495,M1=36283,Sx=36284,Cx=36285,Ax=36286;var du=2300,hu=2301,np=2302,Tx=2400,Dx=2401,Ix=2402;var AM=3e3,qr=3001,b1=3200,E1=3201,w1=0,S1=1,Pn="",Gt="srgb",Ri="srgb-linear",um="display-p3",Ru="display-p3-linear",fu="linear",_t="srgb",pu="rec709",mu="p3";var Gs=7680;var Rx=519,C1=512,A1=513,T1=514,TM=515,D1=516,I1=517,R1=518,P1=519,Px=35044;var Nx="300 es",Np=1035,Di=2e3,gu=2001,or=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ip=Math.PI/180,Op=180/Math.PI;function Pa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function N1(n,e){return(n%e+e)%e}function rp(n,e,t){return(1-t)*n+t*e}function Ox(n){return(n&n-1)===0&&n!==0}function Lp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ht=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],v=r[0],p=r[3],f=r[6],S=r[1],b=r[4],E=r[7],I=r[2],T=r[5],C=r[8];return s[0]=o*v+a*S+c*I,s[3]=o*p+a*b+c*T,s[6]=o*f+a*E+c*C,s[1]=l*v+u*S+d*I,s[4]=l*p+u*b+d*T,s[7]=l*f+u*E+d*C,s[2]=h*v+m*S+g*I,s[5]=h*p+m*b+g*T,s[8]=h*f+m*E+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sp.makeScale(e,t)),this}rotate(e){return this.premultiply(sp.makeRotation(-e)),this}translate(e,t){return this.premultiply(sp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sp=new Qe;function DM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O1(){let n=vu("canvas");return n.style.display="block",n}var Lx={};function Sa(n){n in Lx||(Lx[n]=!0,console.warn(n))}var Fx=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ux=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hl={[Ri]:{transfer:fu,primaries:pu,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:_t,primaries:pu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ru]:{transfer:fu,primaries:mu,toReference:n=>n.applyMatrix3(Ux),fromReference:n=>n.applyMatrix3(Fx)},[um]:{transfer:_t,primaries:mu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ux),fromReference:n=>n.applyMatrix3(Fx).convertLinearToSRGB()}},L1=new Set([Ri,Ru]),dt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!L1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Hl[e].toReference,r=Hl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hl[n].primaries},getTransfer:function(n){return n===Pn?fu:Hl[n].transfer}};function uo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function op(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ws,yu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=vu("canvas")),Ws.width=e.width,Ws.height=e.height;let i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vu("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=uo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(uo(t[i]/255)*255):t[i]=uo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},F1=0,_u=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=Pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ap(r[o].image)):s.push(ap(r[o]))}else s=ap(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ap(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var U1=0,xo=(()=>{class n extends or{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=$n,s=$n,o=Rn,a=Aa,c=qn,l=rr,u=n.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=Pa(),this.name="",this.source=new _u(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===qr?Gt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rp:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Pp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rp:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Pp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?qr:AM}set encoding(t){Sa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qr?Gt:Pn}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=tx,n.DEFAULT_ANISOTROPY=1,n})(),Wt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(m+1)/2,I=(f+1)/2,T=(u+h)/4,C=(d+v)/4,q=(g+p)/4;return b>E&&b>I?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=C/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=q/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=q/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-v)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fp=class extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Sa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qr?Gt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xo(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _u(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends Fp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xu=class extends xo{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Up=class extends xo{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*v,S=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let I=Math.sqrt(b),T=Math.atan2(I,f*S);p=Math.sin(p*T)/I,a=Math.sin(a*T)/I}let E=a*S;if(c=c*p+h*E,l=l*p+m*E,u=u*p+g*E,d=d*p+v*E,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cp.copy(this).projectOnVector(e),this.sub(cp)}reflect(e){return this.sub(cp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cp=new F,kx=new ar,Xr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Gl.subVectors(this.max,Ma),js.subVectors(e.a,Ma),$s.subVectors(e.b,Ma),qs.subVectors(e.c,Ma),Yi.subVectors($s,js),Zi.subVectors(qs,$s),kr.subVectors(js,qs);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-kr.z,kr.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,kr.z,0,-kr.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-kr.y,kr.x,0];return!lp(t,js,$s,qs,Gl)||(t=[1,0,0,0,1,0,0,0,1],!lp(t,js,$s,qs,Gl))?!1:(Wl.crossVectors(Yi,Zi),t=[Wl.x,Wl.y,Wl.z],lp(t,js,$s,qs,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new F,new F,new F,new F,new F,new F,new F,new F],Gn=new F,zl=new Xr,js=new F,$s=new F,qs=new F,Yi=new F,Zi=new F,kr=new F,Ma=new F,Gl=new F,Wl=new F,Br=new F;function lp(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Br.fromArray(n,s);let a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),c=e.dot(Br),l=t.dot(Br),u=i.dot(Br);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var k1=new Xr,ba=new F,up=new F,Da=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):k1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(up.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(up)),this.expandByPoint(ba.copy(e.center).sub(up))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new F,dp=new F,jl=new F,Ji=new F,hp=new F,$l=new F,fp=new F,kp=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){dp.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(dp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(jl),a=Ji.dot(this.direction),c=-Ji.dot(jl),l=Ji.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(dp).addScaledVector(jl,h),m}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){hp.subVectors(t,e),$l.subVectors(i,e),fp.crossVectors(hp,$l);let o=this.direction.dot(fp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let c=a*this.direction.dot($l.crossVectors(Ji,$l));if(c<0)return null;let l=a*this.direction.dot(hp.cross(Ji));if(l<0||c+l>o)return null;let u=-a*Ji.dot(fp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,v,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,v=l*d;t[0]=h+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B1,e,V1)}lookAt(e,t,i){let r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ki.crossVectors(i,Mn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ki.crossVectors(i,Mn)),Ki.normalize(),ql.crossVectors(Mn,Ki),r[0]=Ki.x,r[4]=ql.x,r[8]=Mn.x,r[1]=Ki.y,r[5]=ql.y,r[9]=Mn.y,r[2]=Ki.z,r[6]=ql.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],S=i[3],b=i[7],E=i[11],I=i[15],T=r[0],C=r[4],q=r[8],x=r[12],w=r[1],V=r[5],G=r[9],ie=r[13],D=r[2],k=r[6],H=r[10],j=r[14],z=r[3],W=r[7],$=r[11],Q=r[15];return s[0]=o*T+a*w+c*D+l*z,s[4]=o*C+a*V+c*k+l*W,s[8]=o*q+a*G+c*H+l*$,s[12]=o*x+a*ie+c*j+l*Q,s[1]=u*T+d*w+h*D+m*z,s[5]=u*C+d*V+h*k+m*W,s[9]=u*q+d*G+h*H+m*$,s[13]=u*x+d*ie+h*j+m*Q,s[2]=g*T+v*w+p*D+f*z,s[6]=g*C+v*V+p*k+f*W,s[10]=g*q+v*G+p*H+f*$,s[14]=g*x+v*ie+p*j+f*Q,s[3]=S*T+b*w+E*D+I*z,s[7]=S*C+b*V+E*k+I*W,s[11]=S*q+b*G+E*H+I*$,s[15]=S*x+b*ie+E*j+I*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+v*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],S=d*p*l-v*h*l+v*c*m-a*p*m-d*c*f+a*h*f,b=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,E=u*v*l-g*d*l+g*a*m-o*v*m-u*a*f+o*d*f,I=g*d*c-u*v*c-g*a*h+o*v*h+u*a*p-o*d*p,T=t*S+i*b+r*E+s*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=S*C,e[1]=(v*h*s-d*p*s-v*r*m+i*p*m+d*r*f-i*h*f)*C,e[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*f+i*c*f)*C,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*C,e[4]=b*C,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*C,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*C,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*C,e[8]=E*C,e[9]=(g*d*s-u*v*s-g*i*m+t*v*m+u*i*f-t*d*f)*C,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*f+t*a*f)*C,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*C,e[12]=I*C,e[13]=(u*v*r-g*d*r+g*i*h-t*v*h-u*i*p+t*d*p)*C,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*p-t*a*p)*C,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*C,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,v=o*u,p=o*d,f=a*d,S=c*l,b=c*u,E=c*d,I=i.x,T=i.y,C=i.z;return r[0]=(1-(v+f))*I,r[1]=(m+E)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(m-E)*T,r[5]=(1-(h+f))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(g+b)*C,r[9]=(p-S)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Xs.set(r[0],r[1],r[2]).length(),o=Xs.set(r[4],r[5],r[6]).length(),a=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);let l=1/s,u=1/o,d=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Di){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===Di)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===gu)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Di){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,v;if(a===Di)g=(o+s)*d,v=-2*d;else if(a===gu)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xs=new F,Wn=new Zt,B1=new F(0,0,0),V1=new F(1,1,1),Ki=new F,ql=new F,Mn=new F,Bx=new Zt,Vx=new ar,H1=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(gn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Mu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z1=0,Hx=new F,Ys=new ar,Ei=new Zt,Xl=new F,Ea=new F,G1=new F,W1=new ar,zx=new F(1,0,0),Gx=new F(0,1,0),Wx=new F(0,0,1),j1={type:"added"},$1={type:"removed"},Mo=(()=>{class n extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,i=new H1,r=new ar,s=new F(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Qe}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ys.setFromAxisAngle(t,i),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,i){return Ys.setFromAxisAngle(t,i),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(zx,t)}rotateY(t){return this.rotateOnAxis(Gx,t)}rotateZ(t){return this.rotateOnAxis(Wx,t)}translateOnAxis(t,i){return Hx.copy(t).applyQuaternion(this.quaternion),this.position.add(Hx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zx,t)}translateY(t){return this.translateOnAxis(Gx,t)}translateZ(t){return this.translateOnAxis(Wx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Xl.copy(t):Xl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ea,Xl,this.up):Ei.lookAt(Xl,Ea,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(j1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($1)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,G1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,W1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new F(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),jn=new F,wi=new F,pp=new F,Si=new F,Zs=new F,Js=new F,jx=new F,mp=new F,gp=new F,vp=new F,Yl=!1,so=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jn.subVectors(e,t),r.cross(jn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jn.subVectors(r,t),wi.subVectors(i,t),pp.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(wi),c=jn.dot(pp),l=wi.dot(wi),u=wi.dot(pp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,r,s,o,a,c){return Yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yl=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static isFrontFacing(e,t,i,r){return jn.subVectors(i,t),wi.subVectors(e,t),jn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),jn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Zs.subVectors(r,i),Js.subVectors(s,i),mp.subVectors(e,i);let c=Zs.dot(mp),l=Js.dot(mp);if(c<=0&&l<=0)return t.copy(i);gp.subVectors(e,r);let u=Zs.dot(gp),d=Js.dot(gp);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Zs,o);vp.subVectors(e,s);let m=Zs.dot(vp),g=Js.dot(vp);if(g>=0&&m<=g)return t.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Js,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return jx.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(jx,a);let f=1/(p+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(Zs,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},IM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function yp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=dt.workingColorSpace){if(e=N1(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yp(o,s,e+1/3),this.g=yp(o,s,e),this.b=yp(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=IM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=op(e.r),this.g=op(e.g),this.b=op(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return dt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(gn(Yt.r*255,0,255))*65536+Math.round(gn(Yt.g*255,0,255))*256+Math.round(gn(Yt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Gt){dt.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Zl);let i=rp(Qi.h,Zl.h,t),r=rp(Qi.s,Zl.s,t),s=rp(Qi.l,Zl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new ct;ct.NAMES=IM;var q1=0,go=class extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=lo,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Tp,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ap&&(i.blendSrc=this.blendSrc),this.blendDst!==Tp&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vo=class extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_M,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new F,Jl=new ht,On=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Px,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jl.fromBufferAttribute(this,t),Jl.applyMatrix3(e),this.setXY(t,Jl.x,Jl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Px&&(e.usage=this.usage),e}};var bu=class extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Eu=class extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ii=class extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}};var X1=0,In=new Zt,_p=new Mo,Ks=new F,bn=new Xr,wa=new Xr,Ht=new F,Yr=class n extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DM(e)?Eu:bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return _p.lookAt(e),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(bn.min,wa.min),bn.expandByPoint(Ht),Ht.addVectors(bn.max,wa.max),bn.expandByPoint(Ht)):(bn.expandByPoint(wa.min),bn.expandByPoint(wa.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(Ks.fromBufferAttribute(e,l),Ht.add(Ks)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new F,u[w]=new F;let d=new F,h=new F,m=new F,g=new ht,v=new ht,p=new ht,f=new F,S=new F;function b(w,V,G){d.fromArray(r,w*3),h.fromArray(r,V*3),m.fromArray(r,G*3),g.fromArray(o,w*2),v.fromArray(o,V*2),p.fromArray(o,G*2),h.sub(d),m.sub(d),v.sub(g),p.sub(g);let ie=1/(v.x*p.y-p.x*v.y);isFinite(ie)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ie),S.copy(m).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(ie),l[w].add(f),l[V].add(f),l[G].add(f),u[w].add(S),u[V].add(S),u[G].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,V=E.length;w<V;++w){let G=E[w],ie=G.start,D=G.count;for(let k=ie,H=ie+D;k<H;k+=3)b(i[k+0],i[k+1],i[k+2])}let I=new F,T=new F,C=new F,q=new F;function x(w){C.fromArray(s,w*3),q.copy(C);let V=l[w];I.copy(V),I.sub(C.multiplyScalar(C.dot(V))).normalize(),T.crossVectors(q,V);let ie=T.dot(u[w])<0?-1:1;c[w*4]=I.x,c[w*4+1]=I.y,c[w*4+2]=I.z,c[w*4+3]=ie}for(let w=0,V=E.length;w<V;++w){let G=E[w],ie=G.start,D=G.count;for(let k=ie,H=ie+D;k<H;k+=3)x(i[k+0]),x(i[k+1]),x(i[k+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new On(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$x=new Zt,Vr=new kp,Kl=new Da,qx=new F,Qs=new F,eo=new F,to=new F,xp=new F,Ql=new F,eu=new ht,tu=new ht,nu=new ht,Xx=new F,Yx=new F,Zx=new F,iu=new F,ru=new F,Nn=class extends Mo{constructor(e=new Yr,t=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ql.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(xp.fromBufferAttribute(d,e),o?Ql.addScaledVector(xp,u):Ql.addScaledVector(xp.sub(t),u))}t.add(Ql)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Kl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Kl,qx)===null||Vr.origin.distanceToSquared(qx)>(e.far-e.near)**2))&&($x.copy(s).invert(),Vr.copy(e.ray).applyMatrix4($x),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,I=b;E<I;E+=3){let T=a.getX(E),C=a.getX(E+1),q=a.getX(E+2);r=su(this,f,e,i,l,u,d,T,C,q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=a.getX(p),b=a.getX(p+1),E=a.getX(p+2);r=su(this,o,e,i,l,u,d,S,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,I=b;E<I;E+=3){let T=E,C=E+1,q=E+2;r=su(this,f,e,i,l,u,d,T,C,q),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let S=p,b=p+1,E=p+2;r=su(this,o,e,i,l,u,d,S,b,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Y1(n,e,t,i,r,s,o,a){let c;if(e.side===vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===sr,a),c===null)return null;ru.copy(a),ru.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ru);return l<t.near||l>t.far?null:{distance:l,point:ru.clone(),object:n}}function su(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Qs),n.getVertexPosition(c,eo),n.getVertexPosition(l,to);let u=Y1(n,e,t,i,Qs,eo,to,iu);if(u){r&&(eu.fromBufferAttribute(r,a),tu.fromBufferAttribute(r,c),nu.fromBufferAttribute(r,l),u.uv=so.getInterpolation(iu,Qs,eo,to,eu,tu,nu,new ht)),s&&(eu.fromBufferAttribute(s,a),tu.fromBufferAttribute(s,c),nu.fromBufferAttribute(s,l),u.uv1=so.getInterpolation(iu,Qs,eo,to,eu,tu,nu,new ht),u.uv2=u.uv1),o&&(Xx.fromBufferAttribute(o,a),Yx.fromBufferAttribute(o,c),Zx.fromBufferAttribute(o,l),u.normal=so.getInterpolation(iu,Qs,eo,to,Xx,Yx,Zx,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};so.getNormal(Qs,eo,to,d.normal),u.face=d}return u}var Zr=class n extends Yr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ii(l,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(d,2));function g(v,p,f,S,b,E,I,T,C,q,x){let w=E/C,V=I/q,G=E/2,ie=I/2,D=T/2,k=C+1,H=q+1,j=0,z=0,W=new F;for(let $=0;$<H;$++){let Q=$*V-ie;for(let ee=0;ee<k;ee++){let B=ee*w-G;W[v]=B*S,W[p]=Q*b,W[f]=D,l.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[f]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(ee/C),d.push(1-$/q),j+=1}}for(let $=0;$<q;$++)for(let Q=0;Q<C;Q++){let ee=h+Q+k*$,B=h+Q+k*($+1),X=h+(Q+1)+k*($+1),ae=h+(Q+1)+k*$;c.push(ee,B,ae),c.push(B,X,ae),z+=6}a.addGroup(m,z,x),m+=z,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function sn(n){let e={};for(let t=0;t<n.length;t++){let i=yo(n[t]);for(let r in i)e[r]=i[r]}return e}function Z1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function RM(n){return n.getRenderTarget()===null?n.outputColorSpace:dt.workingColorSpace}var J1={clone:yo,merge:sn},K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ni=class extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=Q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=Z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},wu=class extends Mo{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},an=class extends wu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Op*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ip*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(ip*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ip*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},no=-90,io=1,Bp=class extends Mo{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new an(no,io,e,t);r.layers=this.layers,this.add(r);let s=new an(no,io,e,t);s.layers=this.layers,this.add(s);let o=new an(no,io,e,t);o.layers=this.layers,this.add(o);let a=new an(no,io,e,t);a.layers=this.layers,this.add(a);let c=new an(no,io,e,t);c.layers=this.layers,this.add(c);let l=new an(no,io,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Su=class extends xo{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vp=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Sa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qr?Gt:Pn),this.texture=new Su(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zr(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:nr});s.uniforms.tEquirect.value=t;let o=new Nn(r,s),a=t.minFilter;return t.minFilter===Aa&&(t.minFilter=Rn),new Bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Mp=new F,eR=new F,tR=new Qe,Ai=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Mp.subVectors(i,t).cross(eR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Mp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||tR.getNormalMatrix(e),r=this.coplanarPoint(Mp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hr=new Da,ou=new F,Cu=class{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],S=r[13],b=r[14],E=r[15];if(i[0].setComponents(c-s,h-l,p-m,E-f).normalize(),i[1].setComponents(c+s,h+l,p+m,E+f).normalize(),i[2].setComponents(c+o,h+u,p+g,E+S).normalize(),i[3].setComponents(c-o,h-u,p-g,E-S).normalize(),i[4].setComponents(c-a,h-d,p-v,E-b).normalize(),t===Di)i[5].setComponents(c+a,h+d,p+v,E+b).normalize();else if(t===gu)i[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ou.x=r.normal.x>0?e.max.x:e.min.x,ou.y=r.normal.y>0?e.max.y:e.min.y,ou.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ou)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function PM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nR(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let v=0,p=g.length;v<p;v++){let f=g[v];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var Hp=class n extends Yr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let b=0;b<l;b++){let E=b*d-s;g.push(E,-S,0),v.push(0,0,1),p.push(b/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let b=S+l*f,E=S+l*(f+1),I=S+1+l*(f+1),T=S+1+l*f;m.push(b,E,T),m.push(E,I,T)}this.setIndex(m),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(v,3)),this.setAttribute("uv",new Ii(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},iR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ER=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NR="gl_FragColor = linearToOutputTexel( gl_FragColor );",OR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$R=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_P=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,BP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$P=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_N=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ON=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:iR,alphahash_pars_fragment:rR,alphamap_fragment:sR,alphamap_pars_fragment:oR,alphatest_fragment:aR,alphatest_pars_fragment:cR,aomap_fragment:lR,aomap_pars_fragment:uR,batching_pars_vertex:dR,batching_vertex:hR,begin_vertex:fR,beginnormal_vertex:pR,bsdfs:mR,iridescence_fragment:gR,bumpmap_pars_fragment:vR,clipping_planes_fragment:yR,clipping_planes_pars_fragment:_R,clipping_planes_pars_vertex:xR,clipping_planes_vertex:MR,color_fragment:bR,color_pars_fragment:ER,color_pars_vertex:wR,color_vertex:SR,common:CR,cube_uv_reflection_fragment:AR,defaultnormal_vertex:TR,displacementmap_pars_vertex:DR,displacementmap_vertex:IR,emissivemap_fragment:RR,emissivemap_pars_fragment:PR,colorspace_fragment:NR,colorspace_pars_fragment:OR,envmap_fragment:LR,envmap_common_pars_fragment:FR,envmap_pars_fragment:UR,envmap_pars_vertex:kR,envmap_physical_pars_fragment:ZR,envmap_vertex:BR,fog_vertex:VR,fog_pars_vertex:HR,fog_fragment:zR,fog_pars_fragment:GR,gradientmap_pars_fragment:WR,lightmap_fragment:jR,lightmap_pars_fragment:$R,lights_lambert_fragment:qR,lights_lambert_pars_fragment:XR,lights_pars_begin:YR,lights_toon_fragment:JR,lights_toon_pars_fragment:KR,lights_phong_fragment:QR,lights_phong_pars_fragment:eP,lights_physical_fragment:tP,lights_physical_pars_fragment:nP,lights_fragment_begin:iP,lights_fragment_maps:rP,lights_fragment_end:sP,logdepthbuf_fragment:oP,logdepthbuf_pars_fragment:aP,logdepthbuf_pars_vertex:cP,logdepthbuf_vertex:lP,map_fragment:uP,map_pars_fragment:dP,map_particle_fragment:hP,map_particle_pars_fragment:fP,metalnessmap_fragment:pP,metalnessmap_pars_fragment:mP,morphcolor_vertex:gP,morphnormal_vertex:vP,morphtarget_pars_vertex:yP,morphtarget_vertex:_P,normal_fragment_begin:xP,normal_fragment_maps:MP,normal_pars_fragment:bP,normal_pars_vertex:EP,normal_vertex:wP,normalmap_pars_fragment:SP,clearcoat_normal_fragment_begin:CP,clearcoat_normal_fragment_maps:AP,clearcoat_pars_fragment:TP,iridescence_pars_fragment:DP,opaque_fragment:IP,packing:RP,premultiplied_alpha_fragment:PP,project_vertex:NP,dithering_fragment:OP,dithering_pars_fragment:LP,roughnessmap_fragment:FP,roughnessmap_pars_fragment:UP,shadowmap_pars_fragment:kP,shadowmap_pars_vertex:BP,shadowmap_vertex:VP,shadowmask_pars_fragment:HP,skinbase_vertex:zP,skinning_pars_vertex:GP,skinning_vertex:WP,skinnormal_vertex:jP,specularmap_fragment:$P,specularmap_pars_fragment:qP,tonemapping_fragment:XP,tonemapping_pars_fragment:YP,transmission_fragment:ZP,transmission_pars_fragment:JP,uv_pars_fragment:KP,uv_pars_vertex:QP,uv_vertex:eN,worldpos_vertex:tN,background_vert:nN,background_frag:iN,backgroundCube_vert:rN,backgroundCube_frag:sN,cube_vert:oN,cube_frag:aN,depth_vert:cN,depth_frag:lN,distanceRGBA_vert:uN,distanceRGBA_frag:dN,equirect_vert:hN,equirect_frag:fN,linedashed_vert:pN,linedashed_frag:mN,meshbasic_vert:gN,meshbasic_frag:vN,meshlambert_vert:yN,meshlambert_frag:_N,meshmatcap_vert:xN,meshmatcap_frag:MN,meshnormal_vert:bN,meshnormal_frag:EN,meshphong_vert:wN,meshphong_frag:SN,meshphysical_vert:CN,meshphysical_frag:AN,meshtoon_vert:TN,meshtoon_frag:DN,points_vert:IN,points_frag:RN,shadow_vert:PN,shadow_frag:NN,sprite_vert:ON,sprite_frag:LN},ne={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},li={basic:{uniforms:sn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:sn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:sn([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:sn([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:sn([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:sn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:sn([ne.points,ne.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:sn([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:sn([ne.common,ne.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:sn([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:sn([ne.sprite,ne.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:sn([ne.common,ne.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:sn([ne.lights,ne.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};li.physical={uniforms:sn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var au={r:0,b:0,g:0};function FN(n,e,t,i,r,s,o){let a=new ct(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let S=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,c):b&&b.isColor&&(v(b,1),S=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Iu)?(u===void 0&&(u=new Nn(new Zr(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:yo(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=dt.getTransfer(b.colorSpace)!==_t,(d!==b||h!==b.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Nn(new Hp(2,2),new Ni({name:"BackgroundMaterial",uniforms:yo(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==_t,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,f){p.getRGB(au,RM(n)),i.buffers.color.setClear(au.r,au.g,au.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function UN(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(D,k,H,j,z){let W=!1;if(o){let $=v(j,H,k);l!==$&&(l=$,m(l.object)),W=f(D,j,H,z),W&&S(D,j,H,z)}else{let $=k.wireframe===!0;(l.geometry!==j.id||l.program!==H.id||l.wireframe!==$)&&(l.geometry=j.id,l.program=H.id,l.wireframe=$,W=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,q(D,k,H,j),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function v(D,k,H){let j=H.wireframe===!0,z=a[D.id];z===void 0&&(z={},a[D.id]=z);let W=z[k.id];W===void 0&&(W={},z[k.id]=W);let $=W[j];return $===void 0&&($=p(h()),W[j]=$),$}function p(D){let k=[],H=[],j=[];for(let z=0;z<r;z++)k[z]=0,H[z]=0,j[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:j,object:D,attributes:{},index:null}}function f(D,k,H,j){let z=l.attributes,W=k.attributes,$=0,Q=H.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let X=z[ee],ae=W[ee];if(ae===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;$++}return l.attributesNum!==$||l.index!==j}function S(D,k,H,j){let z={},W=k.attributes,$=0,Q=H.getAttributes();for(let ee in Q)if(Q[ee].location>=0){let X=W[ee];X===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));let ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),z[ee]=ae,$++}l.attributes=z,l.attributesNum=$,l.index=j}function b(){let D=l.newAttributes;for(let k=0,H=D.length;k<H;k++)D[k]=0}function E(D){I(D,0)}function I(D,k){let H=l.newAttributes,j=l.enabledAttributes,z=l.attributeDivisors;H[D]=1,j[D]===0&&(n.enableVertexAttribArray(D),j[D]=1),z[D]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),z[D]=k)}function T(){let D=l.newAttributes,k=l.enabledAttributes;for(let H=0,j=k.length;H<j;H++)k[H]!==D[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function C(D,k,H,j,z,W,$){$===!0?n.vertexAttribIPointer(D,k,H,z,W):n.vertexAttribPointer(D,k,H,j,z,W)}function q(D,k,H,j){if(i.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let z=j.attributes,W=H.getAttributes(),$=k.defaultAttributeValues;for(let Q in W){let ee=W[Q];if(ee.location>=0){let B=z[Q];if(B===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(B=D.instanceColor)),B!==void 0){let X=B.normalized,ae=B.itemSize,ve=t.get(B);if(ve===void 0)continue;let ge=ve.buffer,Ue=ve.type,Ve=ve.bytesPerElement,Ce=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||B.gpuType===xM);if(B.isInterleavedBufferAttribute){let st=B.data,P=st.stride,Jt=B.offset;if(st.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)I(ee.location+xe,st.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let xe=0;xe<ee.locationSize;xe++)E(ee.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let xe=0;xe<ee.locationSize;xe++)C(ee.location+xe,ae/ee.locationSize,Ue,X,P*Ve,(Jt+ae/ee.locationSize*xe)*Ve,Ce)}else{if(B.isInstancedBufferAttribute){for(let st=0;st<ee.locationSize;st++)I(ee.location+st,B.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let st=0;st<ee.locationSize;st++)E(ee.location+st);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let st=0;st<ee.locationSize;st++)C(ee.location+st,ae/ee.locationSize,Ue,X,ae*Ve,ae/ee.locationSize*st*Ve,Ce)}}else if($!==void 0){let X=$[Q];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(ee.location,X);break;case 3:n.vertexAttrib3fv(ee.location,X);break;case 4:n.vertexAttrib4fv(ee.location,X);break;default:n.vertexAttrib1fv(ee.location,X)}}}}T()}function x(){G();for(let D in a){let k=a[D];for(let H in k){let j=k[H];for(let z in j)g(j[z].object),delete j[z];delete k[H]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;let k=a[D.id];for(let H in k){let j=k[H];for(let z in j)g(j[z].object),delete j[z];delete k[H]}delete a[D.id]}function V(D){for(let k in a){let H=a[k];if(H[D.id]===void 0)continue;let j=H[D.id];for(let z in j)g(j[z].object),delete j[z];delete H[D.id]}}function G(){ie(),u=!0,l!==c&&(l=c,m(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:ie,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:E,disableUnusedAttributes:T}}function kN(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function BN(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=h>0,E=o||e.has("OES_texture_float"),I=b&&E,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:T}}function VN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Ai,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,b=S*4,E=f.clippingState||null;c.value=E,E=u(g,h,b,m);for(let I=0;I!==b;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,E=m;b!==v;++b,E+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function HN(n){let e=new WeakMap;function t(o,a){return a===Dp?o.mapping=fo:a===Ip&&(o.mapping=po),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dp||a===Ip)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Vp(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var zp=class extends wu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oo=4,Jx=[.125,.215,.35,.446,.526,.582],Wr=20,bp=new zp,Kx=new ct,Ep=null,wp=0,Sp=0,zr=(1+Math.sqrt(5))/2,ro=1/zr,Qx=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,zr,ro),new F(0,zr,-ro),new F(ro,0,zr),new F(-ro,0,zr),new F(zr,ro,0),new F(-zr,ro,0)],Au=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ep=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Sp=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ep,wp,Sp),e.scissorTest=!1,cu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ep=this._renderer.getRenderTarget(),wp=this._renderer.getActiveCubeFace(),Sp=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ta,format:qn,colorSpace:Ri,depthBuffer:!1},r=eM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zN(s)),this._blurMaterial=GN(s,e,t)}return r}_compileMaterial(e){let t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,bp)}_sceneToCubeUV(e,t,i,r){let a=new an(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Kx),u.toneMapping=ir,u.autoClear=!1;let m=new vo({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Nn(new Zr,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Kx),v=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let b=this._cubeSize;cu(r,S*b,f>2?b:0,b,b),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fo||e.mapping===po;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;cu(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,bp)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qx[(r-1)%Qx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Nn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wr-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):Wr;p>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wr}`);let f=[],S=0;for(let C=0;C<Wr;++C){let q=C/v,x=Math.exp(-q*q/2);f.push(x),C===0?S+=x:C<p&&(S+=2*x)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-i;let E=this._sizeLods[r],I=3*E*(r>b-oo?r-b+oo:0),T=4*(this._cubeSize-E);cu(t,I,T,3*E,2*E),c.setRenderTarget(t),c.render(d,bp)}};function zN(n){let e=[],t=[],i=[],r=n,s=n-oo+1+Jx.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-oo?c=Jx[o-n+oo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,f=1,S=new Float32Array(v*g*m),b=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let T=0;T<m;T++){let C=T%3*2/3-1,q=T>2?0:-1,x=[C,q,0,C+2/3,q,0,C+2/3,q+1,0,C,q,0,C+2/3,q+1,0,C,q+1,0];S.set(x,v*g*T),b.set(h,p*g*T);let w=[T,T,T,T,T,T];E.set(w,f*g*T)}let I=new Yr;I.setAttribute("position",new On(S,v)),I.setAttribute("uv",new On(b,p)),I.setAttribute("faceIndex",new On(E,f)),e.push(I),r>oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function eM(n,e,t){let i=new Pi(n,e,t);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function GN(n,e,t){let i=new Float32Array(Wr),r=new F(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function tM(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function nM(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function dm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Dp||c===Ip,u=c===fo||c===po;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Au(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Au(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $N(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let S=m.array;v=m.version;for(let b=0,E=S.length;b<E;b+=3){let I=S[b+0],T=S[b+1],C=S[b+2];h.push(I,T,T,C,C,I)}}else if(g!==void 0){let S=g.array;v=g.version;for(let b=0,E=S.length/3-1;b<E;b+=3){let I=b+0,T=b+1,C=b+2;h.push(I,T,T,C,C,I)}}else return;let p=new(DM(h)?Eu:bu)(h,1);p.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function qN(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,v){if(v===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,v),t.update(g,s,v)}function h(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,v);let f=0;for(let S=0;S<v;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function XN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function YN(n,e){return n[0]-e[0]}function ZN(n,e){return Math.abs(e[1])-Math.abs(n[1])}function JN(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==v){let k=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();let b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],q=u.morphAttributes.color||[],x=0;b===!0&&(x=1),E===!0&&(x=2),I===!0&&(x=3);let w=u.attributes.position.count*x,V=1;w>e.maxTextureSize&&(V=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let G=new Float32Array(w*V*4*v),ie=new xu(G,w,V,v);ie.type=tr,ie.needsUpdate=!0;let D=x*4;for(let H=0;H<v;H++){let j=T[H],z=C[H],W=q[H],$=w*V*4*H;for(let Q=0;Q<j.count;Q++){let ee=Q*D;b===!0&&(o.fromBufferAttribute(j,Q),G[$+ee+0]=o.x,G[$+ee+1]=o.y,G[$+ee+2]=o.z,G[$+ee+3]=0),E===!0&&(o.fromBufferAttribute(z,Q),G[$+ee+4]=o.x,G[$+ee+5]=o.y,G[$+ee+6]=o.z,G[$+ee+7]=0),I===!0&&(o.fromBufferAttribute(W,Q),G[$+ee+8]=o.x,G[$+ee+9]=o.y,G[$+ee+10]=o.z,G[$+ee+11]=W.itemSize===4?o.w:1)}}p={count:v,texture:ie,size:new ht(w,V)},s.set(u,p),u.addEventListener("dispose",k)}let f=0;for(let b=0;b<h.length;b++)f+=h[b];let S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let E=0;E<g;E++)v[E]=[E,0];i[u.id]=v}for(let E=0;E<g;E++){let I=v[E];I[0]=E,I[1]=h[E]}v.sort(ZN);for(let E=0;E<8;E++)E<g&&v[E][1]?(a[E][0]=v[E][0],a[E][1]=v[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(YN);let p=u.morphAttributes.position,f=u.morphAttributes.normal,S=0;for(let E=0;E<8;E++){let I=a[E],T=I[0],C=I[1];T!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+E)!==p[T]&&u.setAttribute("morphTarget"+E,p[T]),f&&u.getAttribute("morphNormal"+E)!==f[T]&&u.setAttribute("morphNormal"+E,f[T]),r[E]=C,S+=C):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),f&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}let b=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function KN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Tu=class extends xo{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:$r,u!==$r&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$r&&(i=er),i===void 0&&u===mo&&(i=jr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},NM=new xo,OM=new Tu(1,1);OM.compareFunction=TM;var LM=new xu,FM=new Up,UM=new Su,iM=[],rM=[],sM=new Float32Array(16),oM=new Float32Array(9),aM=new Float32Array(4);function bo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=iM[r];if(s===void 0&&(s=new Float32Array(r),iM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pu(n,e){let t=rM[e];t===void 0&&(t=new Int32Array(e),rM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function tO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function nO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function iO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;aM.set(i),n.uniformMatrix2fv(this.addr,!1,aM),Ft(t,i)}}function rO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;oM.set(i),n.uniformMatrix3fv(this.addr,!1,oM),Ft(t,i)}}function sO(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Lt(t,i))return;sM.set(i),n.uniformMatrix4fv(this.addr,!1,sM),Ft(t,i)}}function oO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function cO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function lO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function uO(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function hO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function fO(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function pO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?OM:NM;t.setTexture2D(e||s,r)}function mO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||FM,r)}function gO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||UM,r)}function vO(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||LM,r)}function yO(n){switch(n){case 5126:return QN;case 35664:return eO;case 35665:return tO;case 35666:return nO;case 35674:return iO;case 35675:return rO;case 35676:return sO;case 5124:case 35670:return oO;case 35667:case 35671:return aO;case 35668:case 35672:return cO;case 35669:case 35673:return lO;case 5125:return uO;case 36294:return dO;case 36295:return hO;case 36296:return fO;case 35678:case 36198:case 36298:case 36306:case 35682:return pO;case 35679:case 36299:case 36307:return mO;case 35680:case 36300:case 36308:case 36293:return gO;case 36289:case 36303:case 36311:case 36292:return vO}}function _O(n,e){n.uniform1fv(this.addr,e)}function xO(n,e){let t=bo(e,this.size,2);n.uniform2fv(this.addr,t)}function MO(n,e){let t=bo(e,this.size,3);n.uniform3fv(this.addr,t)}function bO(n,e){let t=bo(e,this.size,4);n.uniform4fv(this.addr,t)}function EO(n,e){let t=bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wO(n,e){let t=bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function SO(n,e){let t=bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CO(n,e){n.uniform1iv(this.addr,e)}function AO(n,e){n.uniform2iv(this.addr,e)}function TO(n,e){n.uniform3iv(this.addr,e)}function DO(n,e){n.uniform4iv(this.addr,e)}function IO(n,e){n.uniform1uiv(this.addr,e)}function RO(n,e){n.uniform2uiv(this.addr,e)}function PO(n,e){n.uniform3uiv(this.addr,e)}function NO(n,e){n.uniform4uiv(this.addr,e)}function OO(n,e,t){let i=this.cache,r=e.length,s=Pu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||NM,s[o])}function LO(n,e,t){let i=this.cache,r=e.length,s=Pu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||FM,s[o])}function FO(n,e,t){let i=this.cache,r=e.length,s=Pu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||UM,s[o])}function UO(n,e,t){let i=this.cache,r=e.length,s=Pu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||LM,s[o])}function kO(n){switch(n){case 5126:return _O;case 35664:return xO;case 35665:return MO;case 35666:return bO;case 35674:return EO;case 35675:return wO;case 35676:return SO;case 5124:case 35670:return CO;case 35667:case 35671:return AO;case 35668:case 35672:return TO;case 35669:case 35673:return DO;case 5125:return IO;case 36294:return RO;case 36295:return PO;case 36296:return NO;case 35678:case 36198:case 36298:case 36306:case 35682:return OO;case 35679:case 36299:case 36307:return LO;case 35680:case 36300:case 36308:case 36293:return FO;case 36289:case 36303:case 36311:case 36292:return UO}}var Gp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yO(t.type)}},Wp=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kO(t.type)}},jp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Cp=/(\w+)(\])?(\[|\.)?/g;function cM(n,e){n.seq.push(e),n.map[e.id]=e}function BO(n,e,t){let i=n.name,r=i.length;for(Cp.lastIndex=0;;){let s=Cp.exec(i),o=Cp.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cM(t,l===void 0?new Gp(a,n,e):new Wp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new jp(a),cM(t,d)),t=d}}}var ho=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);BO(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function lM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var VO=37297,HO=0;function zO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function GO(n){let e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(n),i;switch(e===t?i="":e===mu&&t===pu?i="LinearDisplayP3ToLinearSRGB":e===pu&&t===mu&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case Ru:return[i,"LinearTransferOETF"];case Gt:case um:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zO(n.getShaderSource(e),o)}else return r}function WO(n,e){let t=GO(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jO(n,e){let t;switch(e){case a1:t="Linear";break;case c1:t="Reinhard";break;case l1:t="OptimizedCineon";break;case u1:t="ACESFilmic";break;case h1:t="AgX";break;case d1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $O(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function qO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ao).join(`
`)}function XO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ao(n){return n!==""}function dM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZO=/^[ \t]*#include +<([\w\d./]+)>/gm;function $p(n){return n.replace(ZO,KO)}var JO=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function KO(n,e){let t=Ge[e];if(t===void 0){let i=JO.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $p(t)}var QO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fM(n){return n.replace(QO,eL)}function eL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pM(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===LI?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function nL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function rL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _M:e="ENVMAP_BLENDING_MULTIPLY";break;case s1:e="ENVMAP_BLENDING_MIX";break;case o1:e="ENVMAP_BLENDING_ADD";break}return e}function sL(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function oL(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=tL(t),l=nL(t),u=iL(t),d=rL(t),h=sL(t),m=t.isWebGL2?"":$O(t),g=qO(t),v=XO(s),p=r.createProgram(),f,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ao).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ao).join(`
`),S.length>0&&(S+=`
`)):(f=[pM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),S=[m,pM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ir?jO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,WO("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=$p(o),o=dM(o,t),o=hM(o,t),a=$p(a),a=dM(a,t),a=hM(a,t),o=fM(o),a=fM(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let E=b+f+o,I=b+S+a,T=lM(r,r.VERTEX_SHADER,E),C=lM(r,r.FRAGMENT_SHADER,I);r.attachShader(p,T),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function q(G){if(n.debug.checkShaderErrors){let ie=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(C).trim(),H=!0,j=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,T,C);else{let z=uM(r,T,"vertex"),W=uM(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+z+`
`+W)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(D===""||k==="")&&(j=!1);j&&(G.diagnostics={runnable:H,programLog:ie,vertexShader:{log:D,prefix:f},fragmentShader:{log:k,prefix:S}})}r.deleteShader(T),r.deleteShader(C),x=new ho(r,p),w=YO(r,p)}let x;this.getUniforms=function(){return x===void 0&&q(this),x};let w;this.getAttributes=function(){return w===void 0&&q(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(p,VO)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HO++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=C,this}var aL=0,qp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xp(e),t.set(e,i)),i}},Xp=class{constructor(e){this.id=aL++,this.code=e,this.usedTimes=0}};function cL(n,e,t,i,r,s,o){let a=new Mu,c=new qp,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function p(x,w,V,G,ie){let D=G.fog,k=ie.geometry,H=x.isMeshStandardMaterial?G.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),z=j&&j.mapping===Iu?j.image.height:null,W=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Q=$!==void 0?$.length:0,ee=0;k.morphAttributes.position!==void 0&&(ee=1),k.morphAttributes.normal!==void 0&&(ee=2),k.morphAttributes.color!==void 0&&(ee=3);let B,X,ae,ve;if(W){let Kt=li[W];B=Kt.vertexShader,X=Kt.fragmentShader}else B=x.vertexShader,X=x.fragmentShader,c.update(x),ae=c.getVertexShaderID(x),ve=c.getFragmentShaderID(x);let ge=n.getRenderTarget(),Ue=ie.isInstancedMesh===!0,Ve=ie.isBatchedMesh===!0,Ce=!!x.map,st=!!x.matcap,P=!!j,Jt=!!x.aoMap,xe=!!x.lightMap,Ne=!!x.bumpMap,he=!!x.normalMap,Mt=!!x.displacementMap,We=!!x.emissiveMap,M=!!x.metalnessMap,y=!!x.roughnessMap,O=x.anisotropy>0,J=x.clearcoat>0,Z=x.iridescence>0,K=x.sheen>0,fe=x.transmission>0,oe=O&&!!x.anisotropyMap,le=J&&!!x.clearcoatMap,Se=J&&!!x.clearcoatNormalMap,je=J&&!!x.clearcoatRoughnessMap,Y=Z&&!!x.iridescenceMap,ut=Z&&!!x.iridescenceThicknessMap,et=K&&!!x.sheenColorMap,Re=K&&!!x.sheenRoughnessMap,_e=!!x.specularMap,ue=!!x.specularColorMap,He=!!x.specularIntensityMap,lt=fe&&!!x.transmissionMap,wt=fe&&!!x.thicknessMap,qe=!!x.gradientMap,te=!!x.alphaMap,A=x.alphaTest>0,re=!!x.alphaHash,se=!!x.extensions,Ae=!!k.attributes.uv1,Me=!!k.attributes.uv2,pt=!!k.attributes.uv3,mt=ir;return x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(mt=n.toneMapping),{isWebGL2:u,shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:B,fragmentShader:X,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Ve,instancing:Ue,instancingColor:Ue&&ie.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ri,map:Ce,matcap:st,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:z,aoMap:Jt,lightMap:xe,bumpMap:Ne,normalMap:he,displacementMap:h&&Mt,emissiveMap:We,normalMapObjectSpace:he&&x.normalMapType===S1,normalMapTangentSpace:he&&x.normalMapType===w1,metalnessMap:M,roughnessMap:y,anisotropy:O,anisotropyMap:oe,clearcoat:J,clearcoatMap:le,clearcoatNormalMap:Se,clearcoatRoughnessMap:je,iridescence:Z,iridescenceMap:Y,iridescenceThicknessMap:ut,sheen:K,sheenColorMap:et,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:ue,specularIntensityMap:He,transmission:fe,transmissionMap:lt,thicknessMap:wt,gradientMap:qe,opaque:x.transparent===!1&&x.blending===lo,alphaMap:te,alphaTest:A,alphaHash:re,combine:x.combine,mapUv:Ce&&v(x.map.channel),aoMapUv:Jt&&v(x.aoMap.channel),lightMapUv:xe&&v(x.lightMap.channel),bumpMapUv:Ne&&v(x.bumpMap.channel),normalMapUv:he&&v(x.normalMap.channel),displacementMapUv:Mt&&v(x.displacementMap.channel),emissiveMapUv:We&&v(x.emissiveMap.channel),metalnessMapUv:M&&v(x.metalnessMap.channel),roughnessMapUv:y&&v(x.roughnessMap.channel),anisotropyMapUv:oe&&v(x.anisotropyMap.channel),clearcoatMapUv:le&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(x.sheenRoughnessMap.channel),specularMapUv:_e&&v(x.specularMap.channel),specularColorMapUv:ue&&v(x.specularColorMap.channel),specularIntensityMapUv:He&&v(x.specularIntensityMap.channel),transmissionMapUv:lt&&v(x.transmissionMap.channel),thicknessMapUv:wt&&v(x.thicknessMap.channel),alphaMapUv:te&&v(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(he||O),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Me,vertexUv3s:pt,pointsUvs:ie.isPoints===!0&&!!k.attributes.uv&&(Ce||te),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ti,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:se&&x.extensions.derivatives===!0,extensionFragDepth:se&&x.extensions.fragDepth===!0,extensionDrawBuffers:se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let V in x.defines)w.push(V),w.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(S(w,x),b(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function E(x){let w=g[x.type],V;if(w){let G=li[w];V=J1.clone(G.uniforms)}else V=x.uniforms;return V}function I(x,w){let V;for(let G=0,ie=l.length;G<ie;G++){let D=l[G];if(D.cacheKey===w){V=D,++V.usedTimes;break}}return V===void 0&&(V=new oL(n,w,x,s),l.push(V)),V}function T(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function q(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:T,releaseShaderCache:C,programs:l,dispose:q}}function lL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function uL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,v,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=p),e++,f}function a(d,h,m,g,v,p){let f=o(d,h,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,v,p){let f=o(d,h,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||uL),i.length>1&&i.sort(h||mM),r.length>1&&r.sort(h||mM)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function dL(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new gM,n.set(i,[o])):r>=s.length?(o=new gM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ct};break;case"SpotLight":t={position:new F,direction:new F,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function fL(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var pL=0;function mL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gL(n,e){let t=new hL,i=fL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);let s=new F,o=new Zt,a=new Zt;function c(u,d){let h=0,m=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,p=0,f=0,S=0,b=0,E=0,I=0,T=0,C=0,q=0,x=0;u.sort(mL);let w=d===!0?Math.PI:1;for(let G=0,ie=u.length;G<ie;G++){let D=u[G],k=D.color,H=D.intensity,j=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*H*w,m+=k.g*H*w,g+=k.b*H*w;else if(D.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(D.sh.coefficients[W],H);x++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){let $=D.shadow,Q=i.get(D);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,r.directionalShadow[v]=Q,r.directionalShadowMap[v]=z,r.directionalShadowMatrix[v]=D.shadow.matrix,E++}r.directional[v]=W,v++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(H*w),W.distance=j,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,r.spot[f]=W;let $=D.shadow;if(D.map&&(r.spotLightMap[C]=D.map,C++,$.updateMatrices(D),D.castShadow&&q++),r.spotLightMatrix[f]=$.matrix,D.castShadow){let Q=i.get(D);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=z,T++}f++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(k).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=W,S++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*w),W.distance=D.distance,W.decay=D.decay,D.castShadow){let $=D.shadow,Q=i.get(D);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=D.shadow.matrix,I++}r.point[p]=W,p++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(H*w),W.groundColor.copy(D.groundColor).multiplyScalar(H*w),r.hemi[b]=W,b++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let V=r.hash;(V.directionalLength!==v||V.pointLength!==p||V.spotLength!==f||V.rectAreaLength!==S||V.hemiLength!==b||V.numDirectionalShadows!==E||V.numPointShadows!==I||V.numSpotShadows!==T||V.numSpotMaps!==C||V.numLightProbes!==x)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=b,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=T+C-q,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=x,V.directionalLength=v,V.pointLength=p,V.spotLength=f,V.rectAreaLength=S,V.hemiLength=b,V.numDirectionalShadows=E,V.numPointShadows=I,V.numSpotShadows=T,V.numSpotMaps=C,V.numLightProbes=x,r.version=pL++)}function l(u,d){let h=0,m=0,g=0,v=0,p=0,f=d.matrixWorldInverse;for(let S=0,b=u.length;S<b;S++){let E=u[S];if(E.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(E.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let I=r.rectArea[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function vM(n,e){let t=new gL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function vL(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new vM(n,e),t.set(s,[c])):o>=a.length?(c=new vM(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Yp=class extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zp=class extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},yL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_L=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xL(n,e,t){let i=new Cu,r=new ht,s=new ht,o=new Wt,a=new Yp({depthPacking:E1}),c=new Zp,l={},u=t.maxTextureSize,d={[sr]:vn,[vn]:sr,[Ti]:Ti},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:yL,fragmentShader:_L}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Yr;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Nn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yM;let f=this.type;this.render=function(T,C,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let x=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),G=n.state;G.setBlending(nr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let ie=f!==Ci&&this.type===Ci,D=f===Ci&&this.type!==Ci;for(let k=0,H=T.length;k<H;k++){let j=T[k],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let W=z.getFrameExtents();if(r.multiply(W),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||ie===!0||D===!0){let Q=this.type!==Ci?{minFilter:on,magFilter:on}:{};z.map!==null&&z.map.dispose(),z.map=new Pi(r.x,r.y,Q),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let $=z.getViewportCount();for(let Q=0;Q<$;Q++){let ee=z.getViewport(Q);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),G.viewport(o),z.updateMatrices(j,Q),i=z.getFrustum(),E(C,q,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===Ci&&S(z,q),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(x,w,V)};function S(T,C){let q=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,q,h,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,q,m,v,null)}function b(T,C,q,x){let w=null,V=q.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)w=V;else if(w=q.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=w.uuid,ie=C.uuid,D=l[G];D===void 0&&(D={},l[G]=D);let k=D[ie];k===void 0&&(k=w.clone(),D[ie]=k,C.addEventListener("dispose",I)),w=k}if(w.visible=C.visible,w.wireframe=C.wireframe,x===Ci?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:d[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=n.properties.get(w);G.light=q}return w}function E(T,C,q,x,w){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld);let ie=e.update(T),D=T.material;if(Array.isArray(D)){let k=ie.groups;for(let H=0,j=k.length;H<j;H++){let z=k[H],W=D[z.materialIndex];if(W&&W.visible){let $=b(T,W,x,w);T.onBeforeShadow(n,T,C,q,ie,$,z),n.renderBufferDirect(q,null,ie,$,T,z),T.onAfterShadow(n,T,C,q,ie,$,z)}}}else if(D.visible){let k=b(T,D,x,w);T.onBeforeShadow(n,T,C,q,ie,k,null),n.renderBufferDirect(q,null,ie,k,T,null),T.onAfterShadow(n,T,C,q,ie,k,null)}}let G=T.children;for(let ie=0,D=G.length;ie<D;ie++)E(G[ie],C,q,x,w)}function I(T){T.target.removeEventListener("dispose",I);for(let q in l){let x=l[q],w=T.target.uuid;w in x&&(x[w].dispose(),delete x[w])}}}function ML(n,e,t){let i=t.isWebGL2;function r(){let A=!1,re=new Wt,se=null,Ae=new Wt(0,0,0,0);return{setMask:function(Me){se!==Me&&!A&&(n.colorMask(Me,Me,Me,Me),se=Me)},setLocked:function(Me){A=Me},setClear:function(Me,pt,mt,Ut,Kt){Kt===!0&&(Me*=Ut,pt*=Ut,mt*=Ut),re.set(Me,pt,mt,Ut),Ae.equals(re)===!1&&(n.clearColor(Me,pt,mt,Ut),Ae.copy(re))},reset:function(){A=!1,se=null,Ae.set(-1,0,0,0)}}}function s(){let A=!1,re=null,se=null,Ae=null;return{setTest:function(Me){Me?Ve(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Me){re!==Me&&!A&&(n.depthMask(Me),re=Me)},setFunc:function(Me){if(se!==Me){switch(Me){case KI:n.depthFunc(n.NEVER);break;case QI:n.depthFunc(n.ALWAYS);break;case e1:n.depthFunc(n.LESS);break;case uu:n.depthFunc(n.LEQUAL);break;case t1:n.depthFunc(n.EQUAL);break;case n1:n.depthFunc(n.GEQUAL);break;case i1:n.depthFunc(n.GREATER);break;case r1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Me}},setLocked:function(Me){A=Me},setClear:function(Me){Ae!==Me&&(n.clearDepth(Me),Ae=Me)},reset:function(){A=!1,re=null,se=null,Ae=null}}}function o(){let A=!1,re=null,se=null,Ae=null,Me=null,pt=null,mt=null,Ut=null,Kt=null;return{setTest:function(gt){A||(gt?Ve(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(gt){re!==gt&&!A&&(n.stencilMask(gt),re=gt)},setFunc:function(gt,Qt,Yn){(se!==gt||Ae!==Qt||Me!==Yn)&&(n.stencilFunc(gt,Qt,Yn),se=gt,Ae=Qt,Me=Yn)},setOp:function(gt,Qt,Yn){(pt!==gt||mt!==Qt||Ut!==Yn)&&(n.stencilOp(gt,Qt,Yn),pt=gt,mt=Qt,Ut=Yn)},setLocked:function(gt){A=gt},setClear:function(gt){Kt!==gt&&(n.clearStencil(gt),Kt=gt)},reset:function(){A=!1,re=null,se=null,Ae=null,Me=null,pt=null,mt=null,Ut=null,Kt=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,b=null,E=null,I=null,T=null,C=null,q=null,x=new ct(0,0,0),w=0,V=!1,G=null,ie=null,D=null,k=null,H=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),z=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=W>=2);let Q=null,ee={},B=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),ae=new Wt().fromArray(B),ve=new Wt().fromArray(X);function ge(A,re,se,Ae){let Me=new Uint8Array(4),pt=n.createTexture();n.bindTexture(A,pt),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<se;mt++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(re+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return pt}let Ue={};Ue[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ve(n.DEPTH_TEST),c.setFunc(uu),We(!1),M(Y0),Ve(n.CULL_FACE),he(nr);function Ve(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function Ce(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function st(A,re){return m[A]!==re?(n.bindFramebuffer(A,re),m[A]=re,i&&(A===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=re),A===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function P(A,re){let se=v,Ae=!1;if(A)if(se=g.get(re),se===void 0&&(se=[],g.set(re,se)),A.isWebGLMultipleRenderTargets){let Me=A.texture;if(se.length!==Me.length||se[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,mt=Me.length;pt<mt;pt++)se[pt]=n.COLOR_ATTACHMENT0+pt;se.length=Me.length,Ae=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,Ae=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,Ae=!0);Ae&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Jt(A){return p!==A?(n.useProgram(A),p=A,!0):!1}let xe={[Gr]:n.FUNC_ADD,[UI]:n.FUNC_SUBTRACT,[kI]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[Q0]=n.MIN,xe[ex]=n.MAX;else{let A=e.get("EXT_blend_minmax");A!==null&&(xe[Q0]=A.MIN_EXT,xe[ex]=A.MAX_EXT)}let Ne={[BI]:n.ZERO,[VI]:n.ONE,[HI]:n.SRC_COLOR,[Ap]:n.SRC_ALPHA,[qI]:n.SRC_ALPHA_SATURATE,[jI]:n.DST_COLOR,[GI]:n.DST_ALPHA,[zI]:n.ONE_MINUS_SRC_COLOR,[Tp]:n.ONE_MINUS_SRC_ALPHA,[$I]:n.ONE_MINUS_DST_COLOR,[WI]:n.ONE_MINUS_DST_ALPHA,[XI]:n.CONSTANT_COLOR,[YI]:n.ONE_MINUS_CONSTANT_COLOR,[ZI]:n.CONSTANT_ALPHA,[JI]:n.ONE_MINUS_CONSTANT_ALPHA};function he(A,re,se,Ae,Me,pt,mt,Ut,Kt,gt){if(A===nr){f===!0&&(Ce(n.BLEND),f=!1);return}if(f===!1&&(Ve(n.BLEND),f=!0),A!==FI){if(A!==S||gt!==V){if((b!==Gr||T!==Gr)&&(n.blendEquation(n.FUNC_ADD),b=Gr,T=Gr),gt)switch(A){case lo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Z0:n.blendFunc(n.ONE,n.ONE);break;case J0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case K0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Z0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case J0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case K0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}E=null,I=null,C=null,q=null,x.set(0,0,0),w=0,S=A,V=gt}return}Me=Me||re,pt=pt||se,mt=mt||Ae,(re!==b||Me!==T)&&(n.blendEquationSeparate(xe[re],xe[Me]),b=re,T=Me),(se!==E||Ae!==I||pt!==C||mt!==q)&&(n.blendFuncSeparate(Ne[se],Ne[Ae],Ne[pt],Ne[mt]),E=se,I=Ae,C=pt,q=mt),(Ut.equals(x)===!1||Kt!==w)&&(n.blendColor(Ut.r,Ut.g,Ut.b,Kt),x.copy(Ut),w=Kt),S=A,V=!1}function Mt(A,re){A.side===Ti?Ce(n.CULL_FACE):Ve(n.CULL_FACE);let se=A.side===vn;re&&(se=!se),We(se),A.blending===lo&&A.transparent===!1?he(nr):he(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let Ae=A.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),O(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(A){G!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),G=A)}function M(A){A!==NI?(Ve(n.CULL_FACE),A!==ie&&(A===Y0?n.cullFace(n.BACK):A===OI?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),ie=A}function y(A){A!==D&&(z&&n.lineWidth(A),D=A)}function O(A,re,se){A?(Ve(n.POLYGON_OFFSET_FILL),(k!==re||H!==se)&&(n.polygonOffset(re,se),k=re,H=se)):Ce(n.POLYGON_OFFSET_FILL)}function J(A){A?Ve(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Z(A){A===void 0&&(A=n.TEXTURE0+j-1),Q!==A&&(n.activeTexture(A),Q=A)}function K(A,re,se){se===void 0&&(Q===null?se=n.TEXTURE0+j-1:se=Q);let Ae=ee[se];Ae===void 0&&(Ae={type:void 0,texture:void 0},ee[se]=Ae),(Ae.type!==A||Ae.texture!==re)&&(Q!==se&&(n.activeTexture(se),Q=se),n.bindTexture(A,re||Ue[A]),Ae.type=A,Ae.texture=re)}function fe(){let A=ee[Q];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function je(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function et(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function He(A){ae.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ae.copy(A))}function lt(A){ve.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ve.copy(A))}function wt(A,re){let se=d.get(re);se===void 0&&(se=new WeakMap,d.set(re,se));let Ae=se.get(A);Ae===void 0&&(Ae=n.getUniformBlockIndex(re,A.name),se.set(A,Ae))}function qe(A,re){let Ae=d.get(re).get(A);u.get(re)!==Ae&&(n.uniformBlockBinding(re,Ae,A.__bindingPointIndex),u.set(re,Ae))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,ee={},m={},g=new WeakMap,v=[],p=null,f=!1,S=null,b=null,E=null,I=null,T=null,C=null,q=null,x=new ct(0,0,0),w=0,V=!1,G=null,ie=null,D=null,k=null,H=null,ae.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ve,disable:Ce,bindFramebuffer:st,drawBuffers:P,useProgram:Jt,setBlending:he,setMaterial:Mt,setFlipSided:We,setCullFace:M,setLineWidth:y,setPolygonOffset:O,setScissorTest:J,activeTexture:Z,bindTexture:K,unbindTexture:fe,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:_e,texImage3D:ue,updateUBOMapping:wt,uniformBlockBinding:qe,texStorage2D:et,texStorage3D:Re,texSubImage2D:Se,texSubImage3D:je,compressedTexSubImage2D:Y,compressedTexSubImage3D:ut,scissor:He,viewport:lt,reset:te}}function bL(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return m?new OffscreenCanvas(M,y):vu("canvas")}function v(M,y,O,J){let Z=1;if((M.width>J||M.height>J)&&(Z=J/Math.max(M.width,M.height)),Z<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let K=y?Lp:Math.floor,fe=K(Z*M.width),oe=K(Z*M.height);d===void 0&&(d=g(fe,oe));let le=O?g(fe,oe):d;return le.width=fe,le.height=oe,le.getContext("2d").drawImage(M,0,0,fe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+fe+"x"+oe+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Ox(M.width)&&Ox(M.height)}function f(M){return a?!1:M.wrapS!==$n||M.wrapT!==$n||M.minFilter!==on&&M.minFilter!==Rn}function S(M,y){return M.generateMipmaps&&y&&M.minFilter!==on&&M.minFilter!==Rn}function b(M){n.generateMipmap(M)}function E(M,y,O,J,Z=!1){if(a===!1)return y;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=y;if(y===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),y===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),y===n.RGBA){let fe=Z?fu:dt.getTransfer(J);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=fe===_t?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function I(M,y,O){return S(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==on&&M.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function T(M){return M===on||M===nx||M===Zf?n.NEAREST:n.LINEAR}function C(M){let y=M.target;y.removeEventListener("dispose",C),x(y),y.isVideoTexture&&u.delete(y)}function q(M){let y=M.target;y.removeEventListener("dispose",q),V(y)}function x(M){let y=i.get(M);if(y.__webglInit===void 0)return;let O=M.source,J=h.get(O);if(J){let Z=J[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(M),Object.keys(J).length===0&&h.delete(O)}i.remove(M)}function w(M){let y=i.get(M);n.deleteTexture(y.__webglTexture);let O=M.source,J=h.get(O);delete J[y.__cacheKey],o.memory.textures--}function V(M){let y=M.texture,O=i.get(M),J=i.get(y);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let K=0;K<O.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(O.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)n.deleteFramebuffer(O.__webglFramebuffer[Z]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Z=0,K=y.length;Z<K;Z++){let fe=i.get(y[Z]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(y[Z])}i.remove(y),i.remove(M)}let G=0;function ie(){G=0}function D(){let M=G;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),G+=1,M}function k(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function H(M,y){let O=i.get(M);if(M.isVideoTexture&&Mt(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){let J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,M,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function j(M,y){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ae(O,M,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function z(M,y){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ae(O,M,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function W(M,y){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ve(O,M,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}let $={[Rp]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Pp]:n.MIRRORED_REPEAT},Q={[on]:n.NEAREST,[nx]:n.NEAREST_MIPMAP_NEAREST,[Zf]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[f1]:n.LINEAR_MIPMAP_NEAREST,[Aa]:n.LINEAR_MIPMAP_LINEAR},ee={[C1]:n.NEVER,[P1]:n.ALWAYS,[A1]:n.LESS,[TM]:n.LEQUAL,[T1]:n.EQUAL,[R1]:n.GEQUAL,[D1]:n.GREATER,[I1]:n.NOTEQUAL};function B(M,y,O){if(O?(n.texParameteri(M,n.TEXTURE_WRAP_S,$[y.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,$[y.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,$[y.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Q[y.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Q[y.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==$n||y.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,T(y.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==on&&y.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===on||y.minFilter!==Zf&&y.minFilter!==Aa||y.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(M,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function X(M,y){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",C));let J=y.source,Z=h.get(J);Z===void 0&&(Z={},h.set(J,Z));let K=k(y);if(K!==M.__cacheKey){Z[K]===void 0&&(Z[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[K].usedTimes++;let fe=Z[M.__cacheKey];fe!==void 0&&(Z[M.__cacheKey].usedTimes--,fe.usedTimes===0&&w(y)),M.__cacheKey=K,M.__webglTexture=Z[K].texture}return O}function ae(M,y,O){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let Z=X(M,y),K=y.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+O);let fe=i.get(K);if(K.version!==fe.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);let oe=dt.getPrimaries(dt.workingColorSpace),le=y.colorSpace===Pn?null:dt.getPrimaries(y.colorSpace),Se=y.colorSpace===Pn||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let je=f(y)&&p(y.image)===!1,Y=v(y.image,je,!1,r.maxTextureSize);Y=We(y,Y);let ut=p(Y)||a,et=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),_e=E(y.internalFormat,et,Re,y.colorSpace,y.isVideoTexture);B(J,y,ut);let ue,He=y.mipmaps,lt=a&&y.isVideoTexture!==!0&&_e!==CM,wt=fe.__version===void 0||Z===!0,qe=I(y,Y,ut);if(y.isDepthTexture)_e=n.DEPTH_COMPONENT,a?y.type===tr?_e=n.DEPTH_COMPONENT32F:y.type===er?_e=n.DEPTH_COMPONENT24:y.type===jr?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:y.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===$r&&_e===n.DEPTH_COMPONENT&&y.type!==lm&&y.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=er,Re=s.convert(y.type)),y.format===mo&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,y.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=jr,Re=s.convert(y.type))),wt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,_e,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,_e,Y.width,Y.height,0,et,Re,null));else if(y.isDataTexture)if(He.length>0&&ut){lt&&wt&&t.texStorage2D(n.TEXTURE_2D,qe,_e,He[0].width,He[0].height);for(let te=0,A=He.length;te<A;te++)ue=He[te],lt?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,et,Re,ue.data):t.texImage2D(n.TEXTURE_2D,te,_e,ue.width,ue.height,0,et,Re,ue.data);y.generateMipmaps=!1}else lt?(wt&&t.texStorage2D(n.TEXTURE_2D,qe,_e,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,et,Re,Y.data)):t.texImage2D(n.TEXTURE_2D,0,_e,Y.width,Y.height,0,et,Re,Y.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){lt&&wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,_e,He[0].width,He[0].height,Y.depth);for(let te=0,A=He.length;te<A;te++)ue=He[te],y.format!==qn?et!==null?lt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Y.depth,et,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,_e,ue.width,ue.height,Y.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,Y.depth,et,Re,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,_e,ue.width,ue.height,Y.depth,0,et,Re,ue.data)}else{lt&&wt&&t.texStorage2D(n.TEXTURE_2D,qe,_e,He[0].width,He[0].height);for(let te=0,A=He.length;te<A;te++)ue=He[te],y.format!==qn?et!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,et,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,te,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue.width,ue.height,et,Re,ue.data):t.texImage2D(n.TEXTURE_2D,te,_e,ue.width,ue.height,0,et,Re,ue.data)}else if(y.isDataArrayTexture)lt?(wt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,_e,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,et,Re,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,Y.width,Y.height,Y.depth,0,et,Re,Y.data);else if(y.isData3DTexture)lt?(wt&&t.texStorage3D(n.TEXTURE_3D,qe,_e,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,et,Re,Y.data)):t.texImage3D(n.TEXTURE_3D,0,_e,Y.width,Y.height,Y.depth,0,et,Re,Y.data);else if(y.isFramebufferTexture){if(wt)if(lt)t.texStorage2D(n.TEXTURE_2D,qe,_e,Y.width,Y.height);else{let te=Y.width,A=Y.height;for(let re=0;re<qe;re++)t.texImage2D(n.TEXTURE_2D,re,_e,te,A,0,et,Re,null),te>>=1,A>>=1}}else if(He.length>0&&ut){lt&&wt&&t.texStorage2D(n.TEXTURE_2D,qe,_e,He[0].width,He[0].height);for(let te=0,A=He.length;te<A;te++)ue=He[te],lt?t.texSubImage2D(n.TEXTURE_2D,te,0,0,et,Re,ue):t.texImage2D(n.TEXTURE_2D,te,_e,et,Re,ue);y.generateMipmaps=!1}else lt?(wt&&t.texStorage2D(n.TEXTURE_2D,qe,_e,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,et,Re,Y)):t.texImage2D(n.TEXTURE_2D,0,_e,et,Re,Y);S(y,ut)&&b(J),fe.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ve(M,y,O){if(y.image.length!==6)return;let J=X(M,y),Z=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);let K=i.get(Z);if(Z.version!==K.__version||J===!0){t.activeTexture(n.TEXTURE0+O);let fe=dt.getPrimaries(dt.workingColorSpace),oe=y.colorSpace===Pn?null:dt.getPrimaries(y.colorSpace),le=y.colorSpace===Pn||fe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Se=y.isCompressedTexture||y.image[0].isCompressedTexture,je=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let te=0;te<6;te++)!Se&&!je?Y[te]=v(y.image[te],!1,!0,r.maxCubemapSize):Y[te]=je?y.image[te].image:y.image[te],Y[te]=We(y,Y[te]);let ut=Y[0],et=p(ut)||a,Re=s.convert(y.format,y.colorSpace),_e=s.convert(y.type),ue=E(y.internalFormat,Re,_e,y.colorSpace),He=a&&y.isVideoTexture!==!0,lt=K.__version===void 0||J===!0,wt=I(y,ut,et);B(n.TEXTURE_CUBE_MAP,y,et);let qe;if(Se){He&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ue,ut.width,ut.height);for(let te=0;te<6;te++){qe=Y[te].mipmaps;for(let A=0;A<qe.length;A++){let re=qe[A];y.format!==qn?Re!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,0,0,re.width,re.height,Re,_e,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,ue,re.width,re.height,0,Re,_e,re.data)}}}else{qe=y.mipmaps,He&&lt&&(qe.length>0&&wt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,wt,ue,Y[0].width,Y[0].height));for(let te=0;te<6;te++)if(je){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Y[te].width,Y[te].height,Re,_e,Y[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Y[te].width,Y[te].height,0,Re,_e,Y[te].data);for(let A=0;A<qe.length;A++){let se=qe[A].image[te].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,0,0,se.width,se.height,Re,_e,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,ue,se.width,se.height,0,Re,_e,se.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,_e,Y[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Re,_e,Y[te]);for(let A=0;A<qe.length;A++){let re=qe[A];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,0,0,Re,_e,re.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,ue,Re,_e,re.image[te])}}}S(y,et)&&b(n.TEXTURE_CUBE_MAP),K.__version=Z.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ge(M,y,O,J,Z,K){let fe=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),le=E(O.internalFormat,fe,oe,O.colorSpace);if(!i.get(y).__hasExternalTextures){let je=Math.max(1,y.width>>K),Y=Math.max(1,y.height>>K);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,le,je,Y,y.depth,0,fe,oe,null):t.texImage2D(Z,K,le,je,Y,0,fe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),he(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Z,i.get(O).__webglTexture,0,Ne(y)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Z,i.get(O).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(M,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||he(y)){let Z=y.depthTexture;Z&&Z.isDepthTexture&&(Z.type===tr?J=n.DEPTH_COMPONENT32F:Z.type===er&&(J=n.DEPTH_COMPONENT24));let K=Ne(y);he(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,J,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,K,J,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let J=Ne(y);O&&he(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,y.width,y.height):he(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0;Z<J.length;Z++){let K=J[Z],fe=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),le=E(K.internalFormat,fe,oe,K.colorSpace),Se=Ne(y);O&&he(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,le,y.width,y.height):he(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);let J=i.get(y.depthTexture).__webglTexture,Z=Ne(y);if(y.depthTexture.format===$r)he(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(y.depthTexture.format===mo)he(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(M){let y=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ve(y.__webglFramebuffer,M)}else if(O){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=n.createRenderbuffer(),Ue(y.__webglDepthbuffer[J],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Ue(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(M,y,O){let J=i.get(M);y!==void 0&&ge(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ce(M)}function P(M){let y=M.texture,O=i.get(M),J=i.get(y);M.addEventListener("dispose",q),M.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,o.memory.textures++);let Z=M.isWebGLCubeRenderTarget===!0,K=M.isWebGLMultipleRenderTargets===!0,fe=p(M)||a;if(Z){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let le=0;le<y.mipmaps.length;le++)O.__webglFramebuffer[oe][le]=n.createFramebuffer()}else O.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)O.__webglFramebuffer[oe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(K)if(r.drawBuffers){let oe=M.texture;for(let le=0,Se=oe.length;le<Se;le++){let je=i.get(oe[le]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&he(M)===!1){let oe=K?y:[y];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<oe.length;le++){let Se=oe[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let je=s.convert(Se.format,Se.colorSpace),Y=s.convert(Se.type),ut=E(Se.internalFormat,je,Y,Se.colorSpace,M.isXRRenderTarget===!0),et=Ne(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ut,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),B(n.TEXTURE_CUBE_MAP,y,fe);for(let oe=0;oe<6;oe++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)ge(O.__webglFramebuffer[oe][le],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else ge(O.__webglFramebuffer[oe],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);S(y,fe)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){let oe=M.texture;for(let le=0,Se=oe.length;le<Se;le++){let je=oe[le],Y=i.get(je);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture),B(n.TEXTURE_2D,je,fe),ge(O.__webglFramebuffer,M,je,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),S(je,fe)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?oe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),B(oe,y,fe),a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)ge(O.__webglFramebuffer[le],M,y,n.COLOR_ATTACHMENT0,oe,le);else ge(O.__webglFramebuffer,M,y,n.COLOR_ATTACHMENT0,oe,0);S(y,fe)&&b(oe),t.unbindTexture()}M.depthBuffer&&Ce(M)}function Jt(M){let y=p(M)||a,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0,Z=O.length;J<Z;J++){let K=O[J];if(S(K,y)){let fe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(K).__webglTexture;t.bindTexture(fe,oe),b(fe),t.unbindTexture()}}}function xe(M){if(a&&M.samples>0&&he(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,J=M.height,Z=n.COLOR_BUFFER_BIT,K=[],fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(M),le=M.isWebGLMultipleRenderTargets===!0;if(le)for(let Se=0;Se<y.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){K.push(n.COLOR_ATTACHMENT0+Se),M.depthBuffer&&K.push(fe);let je=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(je===!1&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]),je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),le){let Y=i.get(y[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,Z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Se=0;Se<y.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Se]);let je=i.get(y[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ne(M){return Math.min(r.maxSamples,M.samples)}function he(M){let y=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(M){let y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function We(M,y){let O=M.colorSpace,J=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Np||O!==Ri&&O!==Pn&&(dt.getTransfer(O)===_t?a===!1?e.has("EXT_sRGB")===!0&&J===qn?(M.format=Np,M.minFilter=Rn,M.generateMipmaps=!1):y=yu.sRGBToLinear(y):(J!==qn||Z!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=D,this.resetTextureUnits=ie,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=st,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=he}function EL(n,e,t){let i=t.isWebGL2;function r(s,o=Pn){let a,c=dt.getTransfer(o);if(s===rr)return n.UNSIGNED_BYTE;if(s===MM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===bM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===p1)return n.BYTE;if(s===m1)return n.SHORT;if(s===lm)return n.UNSIGNED_SHORT;if(s===xM)return n.INT;if(s===er)return n.UNSIGNED_INT;if(s===tr)return n.FLOAT;if(s===Ta)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===g1)return n.ALPHA;if(s===qn)return n.RGBA;if(s===v1)return n.LUMINANCE;if(s===y1)return n.LUMINANCE_ALPHA;if(s===$r)return n.DEPTH_COMPONENT;if(s===mo)return n.DEPTH_STENCIL;if(s===Np)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===_1)return n.RED;if(s===EM)return n.RED_INTEGER;if(s===x1)return n.RG;if(s===wM)return n.RG_INTEGER;if(s===SM)return n.RGBA_INTEGER;if(s===Jf||s===Kf||s===Qf||s===ep)if(c===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Jf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ep)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Jf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ep)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ix||s===rx||s===sx||s===ox)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ix)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rx)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sx)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ox)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===CM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ax||s===cx)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ax)return c===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lx||s===ux||s===dx||s===hx||s===fx||s===px||s===mx||s===gx||s===vx||s===yx||s===_x||s===xx||s===Mx||s===bx)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ux)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===px)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_x)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bx)return c===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp||s===Ex||s===wx)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tp)return c===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ex)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wx)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===M1||s===Sx||s===Cx||s===Ax)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tp)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sx)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cx)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ax)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Jp=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},co=class extends Mo{constructor(){super(),this.isGroup=!0,this.type="Group"}},wL={type:"move"},Ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new co;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kp=class extends or{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,v=t.getContextAttributes(),p=null,f=null,S=[],b=[],E=new ht,I=null,T=new an;T.layers.enable(1),T.viewport=new Wt;let C=new an;C.layers.enable(2),C.viewport=new Wt;let q=[T,C],x=new Jp;x.layers.enable(1),x.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=S[B];return X===void 0&&(X=new Ca,S[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=S[B];return X===void 0&&(X=new Ca,S[B]=X),X.getGripSpace()},this.getHand=function(B){let X=S[B];return X===void 0&&(X=new Ca,S[B]=X),X.getHandSpace()};function G(B){let X=b.indexOf(B.inputSource);if(X===-1)return;let ae=S[X];ae!==void 0&&(ae.update(B.inputSource,B.frame,l||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function ie(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",D);for(let B=0;B<S.length;B++){let X=b[B];X!==null&&(b[B]=null,S[B].disconnect(X))}w=null,V=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(B){return Uu(this,null,function*(){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Pi(m.framebufferWidth,m.framebufferHeight,{format:qn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,ae=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?mo:$r,ae=v.stencil?jr:er);let ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Pi(h.textureWidth,h.textureHeight,{format:qn,type:rr,depthTexture:new Tu(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ue=e.properties.get(f);Ue.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(B){for(let X=0;X<B.removed.length;X++){let ae=B.removed[X],ve=b.indexOf(ae);ve>=0&&(b[ve]=null,S[ve].disconnect(ae))}for(let X=0;X<B.added.length;X++){let ae=B.added[X],ve=b.indexOf(ae);if(ve===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=b.length){b.push(ae),ve=Ue;break}else if(b[Ue]===null){b[Ue]=ae,ve=Ue;break}if(ve===-1)break}let ge=S[ve];ge&&ge.connect(ae)}}let k=new F,H=new F;function j(B,X,ae){k.setFromMatrixPosition(X.matrixWorld),H.setFromMatrixPosition(ae.matrixWorld);let ve=k.distanceTo(H),ge=X.projectionMatrix.elements,Ue=ae.projectionMatrix.elements,Ve=ge[14]/(ge[10]-1),Ce=ge[14]/(ge[10]+1),st=(ge[9]+1)/ge[5],P=(ge[9]-1)/ge[5],Jt=(ge[8]-1)/ge[0],xe=(Ue[8]+1)/Ue[0],Ne=Ve*Jt,he=Ve*xe,Mt=ve/(-Jt+xe),We=Mt*-Jt;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(We),B.translateZ(Mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let M=Ve+Mt,y=Ce+Mt,O=Ne-We,J=he+(ve-We),Z=st*Ce/y*M,K=P*Ce/y*M;B.projectionMatrix.makePerspective(O,J,Z,K,M,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function z(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;x.near=C.near=T.near=B.near,x.far=C.far=T.far=B.far,(w!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,V=x.far);let X=B.parent,ae=x.cameras;z(x,X);for(let ve=0;ve<ae.length;ve++)z(ae[ve],X);ae.length===2?j(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),W(B,x,X)};function W(B,X,ae){ae===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Op*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let $=null;function Q(B,X){if(u=X.getViewerPose(l||o),g=X,u!==null){let ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ve=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,ve=!0);for(let ge=0;ge<ae.length;ge++){let Ue=ae[ge],Ve=null;if(m!==null)Ve=m.getViewport(Ue);else{let st=d.getViewSubImage(h,Ue);Ve=st.viewport,ge===0&&(e.setRenderTargetTextures(f,st.colorTexture,h.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(f))}let Ce=q[ge];Ce===void 0&&(Ce=new an,Ce.layers.enable(ge),Ce.viewport=new Wt,q[ge]=Ce),Ce.matrix.fromArray(Ue.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ue.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ge===0&&(x.matrix.copy(Ce.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ve===!0&&x.cameras.push(Ce)}}for(let ae=0;ae<S.length;ae++){let ve=b[ae],ge=S[ae];ve!==null&&ge!==void 0&&ge.update(ve,X,l||o)}$&&$(B,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let ee=new PM;ee.setAnimationLoop(Q),this.setAnimationLoop=function(B){$=B},this.dispose=function(){}}};function SL(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,RM(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===vn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===vn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CL(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,b){let E=b.program;i.uniformBlockBinding(S,E)}function l(S,b){let E=r[S.id];E===void 0&&(g(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",p));let I=b.program;i.updateUBOMapping(S,I);let T=e.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function u(S){let b=d();S.__bindingPointIndex=b;let E=n.createBuffer(),I=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let b=r[S.id],E=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=E.length;T<C;T++){let q=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,w=q.length;x<w;x++){let V=q[x];if(m(V,T,x,I)===!0){let G=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value],D=0;for(let k=0;k<ie.length;k++){let H=ie[k],j=v(H);typeof H=="number"||typeof H=="boolean"?(V.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,G+D,V.__data)):H.isMatrix3?(V.__data[0]=H.elements[0],V.__data[1]=H.elements[1],V.__data[2]=H.elements[2],V.__data[3]=0,V.__data[4]=H.elements[3],V.__data[5]=H.elements[4],V.__data[6]=H.elements[5],V.__data[7]=0,V.__data[8]=H.elements[6],V.__data[9]=H.elements[7],V.__data[10]=H.elements[8],V.__data[11]=0):(H.toArray(V.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,b,E,I){let T=S.value,C=b+"_"+E;if(I[C]===void 0)return typeof T=="number"||typeof T=="boolean"?I[C]=T:I[C]=T.clone(),!0;{let q=I[C];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return I[C]=T,!0}else if(q.equals(T)===!1)return q.copy(T),!0}return!1}function g(S){let b=S.uniforms,E=0,I=16;for(let C=0,q=b.length;C<q;C++){let x=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,V=x.length;w<V;w++){let G=x[w],ie=Array.isArray(G.value)?G.value:[G.value];for(let D=0,k=ie.length;D<k;D++){let H=ie[D],j=v(H),z=E%I;z!==0&&I-z<j.boundary&&(E+=I-z),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=j.storage}}}let T=E%I;return T>0&&(E+=I-T),S.__size=E,S.__cache={},this}function v(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){let b=S.target;b.removeEventListener("dispose",p);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var Ia=class{constructor(e={}){let{canvas:t=O1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;let b=this,E=!1,I=0,T=0,C=null,q=-1,x=null,w=new Wt,V=new Wt,G=null,ie=new ct(0),D=0,k=t.width,H=t.height,j=1,z=null,W=null,$=new Wt(0,0,k,H),Q=new Wt(0,0,k,H),ee=!1,B=new Cu,X=!1,ae=!1,ve=null,ge=new Zt,Ue=new ht,Ve=new F,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return C===null?j:1}let P=i;function Jt(_,R){for(let L=0;L<_.length;L++){let U=_[L],N=t.getContext(U,R);if(N!==null)return N}return null}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cm}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",re,!1),P===null){let R=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&R.shift(),P=Jt(R,_),P===null)throw Jt(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let xe,Ne,he,Mt,We,M,y,O,J,Z,K,fe,oe,le,Se,je,Y,ut,et,Re,_e,ue,He,lt;function wt(){xe=new jN(P),Ne=new BN(P,xe,e),xe.init(Ne),ue=new EL(P,xe,Ne),he=new ML(P,xe,Ne),Mt=new XN(P),We=new lL,M=new bL(P,xe,he,We,Ne,ue,Mt),y=new HN(b),O=new WN(b),J=new nR(P,Ne),He=new UN(P,xe,J,Ne),Z=new $N(P,J,Mt,He),K=new KN(P,Z,J,Mt),et=new JN(P,Ne,M),je=new VN(We),fe=new cL(b,y,O,xe,Ne,He,je),oe=new SL(b,We),le=new dL,Se=new vL(xe,Ne),ut=new FN(b,y,O,he,K,h,c),Y=new xL(b,K,Ne),lt=new CL(P,Mt,Ne,he),Re=new kN(P,xe,Mt,Ne),_e=new qN(P,xe,Mt,Ne),Mt.programs=fe.programs,b.capabilities=Ne,b.extensions=xe,b.properties=We,b.renderLists=le,b.shadowMap=Y,b.state=he,b.info=Mt}wt();let qe=new Kp(b,P);this.xr=qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(_){_!==void 0&&(j=_,this.setSize(k,H,!1))},this.getSize=function(_){return _.set(k,H)},this.setSize=function(_,R,L=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=_,H=R,t.width=Math.floor(_*j),t.height=Math.floor(R*j),L===!0&&(t.style.width=_+"px",t.style.height=R+"px"),this.setViewport(0,0,_,R)},this.getDrawingBufferSize=function(_){return _.set(k*j,H*j).floor()},this.setDrawingBufferSize=function(_,R,L){k=_,H=R,j=L,t.width=Math.floor(_*L),t.height=Math.floor(R*L),this.setViewport(0,0,_,R)},this.getCurrentViewport=function(_){return _.copy(w)},this.getViewport=function(_){return _.copy($)},this.setViewport=function(_,R,L,U){_.isVector4?$.set(_.x,_.y,_.z,_.w):$.set(_,R,L,U),he.viewport(w.copy($).multiplyScalar(j).floor())},this.getScissor=function(_){return _.copy(Q)},this.setScissor=function(_,R,L,U){_.isVector4?Q.set(_.x,_.y,_.z,_.w):Q.set(_,R,L,U),he.scissor(V.copy(Q).multiplyScalar(j).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(_){he.setScissorTest(ee=_)},this.setOpaqueSort=function(_){z=_},this.setTransparentSort=function(_){W=_},this.getClearColor=function(_){return _.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(_=!0,R=!0,L=!0){let U=0;if(_){let N=!1;if(C!==null){let ce=C.texture.format;N=ce===SM||ce===wM||ce===EM}if(N){let ce=C.texture.type,pe=ce===rr||ce===er||ce===lm||ce===jr||ce===MM||ce===bM,Ee=ut.getClearColor(),Ie=ut.getClearAlpha(),$e=Ee.r,Oe=Ee.g,ke=Ee.b;pe?(m[0]=$e,m[1]=Oe,m[2]=ke,m[3]=Ie,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=$e,g[1]=Oe,g[2]=ke,g[3]=Ie,P.clearBufferiv(P.COLOR,0,g))}else U|=P.COLOR_BUFFER_BIT}R&&(U|=P.DEPTH_BUFFER_BIT),L&&(U|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",re,!1),le.dispose(),Se.dispose(),We.dispose(),y.dispose(),O.dispose(),K.dispose(),He.dispose(),lt.dispose(),fe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Kt),qe.removeEventListener("sessionend",gt),ve&&(ve.dispose(),ve=null),Qt.stop()};function te(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let _=Mt.autoReset,R=Y.enabled,L=Y.autoUpdate,U=Y.needsUpdate,N=Y.type;wt(),Mt.autoReset=_,Y.enabled=R,Y.autoUpdate=L,Y.needsUpdate=U,Y.type=N}function re(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function se(_){let R=_.target;R.removeEventListener("dispose",se),Ae(R)}function Ae(_){Me(_),We.remove(_)}function Me(_){let R=We.get(_).programs;R!==void 0&&(R.forEach(function(L){fe.releaseProgram(L)}),_.isShaderMaterial&&fe.releaseShaderCache(_))}this.renderBufferDirect=function(_,R,L,U,N,ce){R===null&&(R=Ce);let pe=N.isMesh&&N.matrixWorld.determinant()<0,Ee=HM(_,R,L,U,N);he.setMaterial(U,pe);let Ie=L.index,$e=1;if(U.wireframe===!0){if(Ie=Z.getWireframeAttribute(L),Ie===void 0)return;$e=2}let Oe=L.drawRange,ke=L.attributes.position,Ct=Oe.start*$e,yn=(Oe.start+Oe.count)*$e;ce!==null&&(Ct=Math.max(Ct,ce.start*$e),yn=Math.min(yn,(ce.start+ce.count)*$e)),Ie!==null?(Ct=Math.max(Ct,0),yn=Math.min(yn,Ie.count)):ke!=null&&(Ct=Math.max(Ct,0),yn=Math.min(yn,ke.count));let kt=yn-Ct;if(kt<0||kt===1/0)return;He.setup(N,U,Ee,L,Ie);let ui,bt=Re;if(Ie!==null&&(ui=J.get(Ie),bt=_e,bt.setIndex(ui)),N.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*st()),bt.setMode(P.LINES)):bt.setMode(P.TRIANGLES);else if(N.isLine){let Xe=U.linewidth;Xe===void 0&&(Xe=1),he.setLineWidth(Xe*st()),N.isLineSegments?bt.setMode(P.LINES):N.isLineLoop?bt.setMode(P.LINE_LOOP):bt.setMode(P.LINE_STRIP)}else N.isPoints?bt.setMode(P.POINTS):N.isSprite&&bt.setMode(P.TRIANGLES);if(N.isBatchedMesh)bt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)bt.renderInstances(Ct,kt,N.count);else if(L.isInstancedBufferGeometry){let Xe=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Nu=Math.min(L.instanceCount,Xe);bt.renderInstances(Ct,kt,Nu)}else bt.render(Ct,kt)};function pt(_,R,L){_.transparent===!0&&_.side===Ti&&_.forceSinglePass===!1?(_.side=vn,_.needsUpdate=!0,Oa(_,R,L),_.side=sr,_.needsUpdate=!0,Oa(_,R,L),_.side=Ti):Oa(_,R,L)}this.compile=function(_,R,L=null){L===null&&(L=_),p=Se.get(L),p.init(),S.push(p),L.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),_!==L&&_.traverseVisible(function(N){N.isLight&&N.layers.test(R.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(b._useLegacyLights);let U=new Set;return _.traverse(function(N){let ce=N.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){let Ee=ce[pe];pt(Ee,L,N),U.add(Ee)}else pt(ce,L,N),U.add(ce)}),S.pop(),p=null,U},this.compileAsync=function(_,R,L=null){let U=this.compile(_,R,L);return new Promise(N=>{function ce(){if(U.forEach(function(pe){We.get(pe).currentProgram.isReady()&&U.delete(pe)}),U.size===0){N(_);return}setTimeout(ce,10)}xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let mt=null;function Ut(_){mt&&mt(_)}function Kt(){Qt.stop()}function gt(){Qt.start()}let Qt=new PM;Qt.setAnimationLoop(Ut),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(_){mt=_,qe.setAnimationLoop(_),_===null?Qt.stop():Qt.start()},qe.addEventListener("sessionstart",Kt),qe.addEventListener("sessionend",gt),this.render=function(_,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(R),R=qe.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,R,C),p=Se.get(_,S.length),p.init(),S.push(p),ge.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),B.setFromProjectionMatrix(ge),ae=this.localClippingEnabled,X=je.init(this.clippingPlanes,ae),v=le.get(_,f.length),v.init(),f.push(v),Yn(_,R,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(z,W),this.info.render.frame++,X===!0&&je.beginShadows();let L=p.state.shadowsArray;if(Y.render(L,_,R),X===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(v,_),p.setupLights(b._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let N=0,ce=U.length;N<ce;N++){let pe=U[N];pm(v,_,pe,pe.viewport)}}else pm(v,_,R);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),_.isScene===!0&&_.onAfterRender(b,_,R),He.resetDefaultState(),q=-1,x=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Yn(_,R,L,U){if(_.visible===!1)return;if(_.layers.test(R.layers)){if(_.isGroup)L=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(R);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||B.intersectsSprite(_)){U&&Ve.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ge);let pe=K.update(_),Ee=_.material;Ee.visible&&v.push(_,pe,Ee,L,Ve.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||B.intersectsObject(_))){let pe=K.update(_),Ee=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ve.copy(_.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ve.copy(pe.boundingSphere.center)),Ve.applyMatrix4(_.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){let Ie=pe.groups;for(let $e=0,Oe=Ie.length;$e<Oe;$e++){let ke=Ie[$e],Ct=Ee[ke.materialIndex];Ct&&Ct.visible&&v.push(_,pe,Ct,L,Ve.z,ke)}}else Ee.visible&&v.push(_,pe,Ee,L,Ve.z,null)}}let ce=_.children;for(let pe=0,Ee=ce.length;pe<Ee;pe++)Yn(ce[pe],R,L,U)}function pm(_,R,L,U){let N=_.opaque,ce=_.transmissive,pe=_.transparent;p.setupLightsView(L),X===!0&&je.setGlobalState(b.clippingPlanes,L),ce.length>0&&VM(N,ce,R,L),U&&he.viewport(w.copy(U)),N.length>0&&Na(N,R,L),ce.length>0&&Na(ce,R,L),pe.length>0&&Na(pe,R,L),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function VM(_,R,L,U){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;let ce=Ne.isWebGL2;ve===null&&(ve=new Pi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ta:rr,minFilter:Aa,samples:ce?4:0})),b.getDrawingBufferSize(Ue),ce?ve.setSize(Ue.x,Ue.y):ve.setSize(Lp(Ue.x),Lp(Ue.y));let pe=b.getRenderTarget();b.setRenderTarget(ve),b.getClearColor(ie),D=b.getClearAlpha(),D<1&&b.setClearColor(16777215,.5),b.clear();let Ee=b.toneMapping;b.toneMapping=ir,Na(_,L,U),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let Ie=!1;for(let $e=0,Oe=R.length;$e<Oe;$e++){let ke=R[$e],Ct=ke.object,yn=ke.geometry,kt=ke.material,ui=ke.group;if(kt.side===Ti&&Ct.layers.test(U.layers)){let bt=kt.side;kt.side=vn,kt.needsUpdate=!0,mm(Ct,L,U,yn,kt,ui),kt.side=bt,kt.needsUpdate=!0,Ie=!0}}Ie===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),b.setRenderTarget(pe),b.setClearColor(ie,D),b.toneMapping=Ee}function Na(_,R,L){let U=R.isScene===!0?R.overrideMaterial:null;for(let N=0,ce=_.length;N<ce;N++){let pe=_[N],Ee=pe.object,Ie=pe.geometry,$e=U===null?pe.material:U,Oe=pe.group;Ee.layers.test(L.layers)&&mm(Ee,R,L,Ie,$e,Oe)}}function mm(_,R,L,U,N,ce){_.onBeforeRender(b,R,L,U,N,ce),_.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(b,R,L,U,_,ce),N.transparent===!0&&N.side===Ti&&N.forceSinglePass===!1?(N.side=vn,N.needsUpdate=!0,b.renderBufferDirect(L,R,U,N,_,ce),N.side=sr,N.needsUpdate=!0,b.renderBufferDirect(L,R,U,N,_,ce),N.side=Ti):b.renderBufferDirect(L,R,U,N,_,ce),_.onAfterRender(b,R,L,U,N,ce)}function Oa(_,R,L){R.isScene!==!0&&(R=Ce);let U=We.get(_),N=p.state.lights,ce=p.state.shadowsArray,pe=N.state.version,Ee=fe.getParameters(_,N.state,ce,R,L),Ie=fe.getProgramCacheKey(Ee),$e=U.programs;U.environment=_.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(_.isMeshStandardMaterial?O:y).get(_.envMap||U.environment),$e===void 0&&(_.addEventListener("dispose",se),$e=new Map,U.programs=$e);let Oe=$e.get(Ie);if(Oe!==void 0){if(U.currentProgram===Oe&&U.lightsStateVersion===pe)return vm(_,Ee),Oe}else Ee.uniforms=fe.getUniforms(_),_.onBuild(L,Ee,b),_.onBeforeCompile(Ee,b),Oe=fe.acquireProgram(Ee,Ie),$e.set(Ie,Oe),U.uniforms=Ee.uniforms;let ke=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ke.clippingPlanes=je.uniform),vm(_,Ee),U.needsLights=GM(_),U.lightsStateVersion=pe,U.needsLights&&(ke.ambientLightColor.value=N.state.ambient,ke.lightProbe.value=N.state.probe,ke.directionalLights.value=N.state.directional,ke.directionalLightShadows.value=N.state.directionalShadow,ke.spotLights.value=N.state.spot,ke.spotLightShadows.value=N.state.spotShadow,ke.rectAreaLights.value=N.state.rectArea,ke.ltc_1.value=N.state.rectAreaLTC1,ke.ltc_2.value=N.state.rectAreaLTC2,ke.pointLights.value=N.state.point,ke.pointLightShadows.value=N.state.pointShadow,ke.hemisphereLights.value=N.state.hemi,ke.directionalShadowMap.value=N.state.directionalShadowMap,ke.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ke.spotShadowMap.value=N.state.spotShadowMap,ke.spotLightMatrix.value=N.state.spotLightMatrix,ke.spotLightMap.value=N.state.spotLightMap,ke.pointShadowMap.value=N.state.pointShadowMap,ke.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=Oe,U.uniformsList=null,Oe}function gm(_){if(_.uniformsList===null){let R=_.currentProgram.getUniforms();_.uniformsList=ho.seqWithValue(R.seq,_.uniforms)}return _.uniformsList}function vm(_,R){let L=We.get(_);L.outputColorSpace=R.outputColorSpace,L.batching=R.batching,L.instancing=R.instancing,L.instancingColor=R.instancingColor,L.skinning=R.skinning,L.morphTargets=R.morphTargets,L.morphNormals=R.morphNormals,L.morphColors=R.morphColors,L.morphTargetsCount=R.morphTargetsCount,L.numClippingPlanes=R.numClippingPlanes,L.numIntersection=R.numClipIntersection,L.vertexAlphas=R.vertexAlphas,L.vertexTangents=R.vertexTangents,L.toneMapping=R.toneMapping}function HM(_,R,L,U,N){R.isScene!==!0&&(R=Ce),M.resetTextureUnits();let ce=R.fog,pe=U.isMeshStandardMaterial?R.environment:null,Ee=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ri,Ie=(U.isMeshStandardMaterial?O:y).get(U.envMap||pe),$e=U.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,Oe=!!L.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ke=!!L.morphAttributes.position,Ct=!!L.morphAttributes.normal,yn=!!L.morphAttributes.color,kt=ir;U.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(kt=b.toneMapping);let ui=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,bt=ui!==void 0?ui.length:0,Xe=We.get(U),Nu=p.state.lights;if(X===!0&&(ae===!0||_!==x)){let En=_===x&&U.id===q;je.setState(U,_,En)}let St=!1;U.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Nu.state.version||Xe.outputColorSpace!==Ee||N.isBatchedMesh&&Xe.batching===!1||!N.isBatchedMesh&&Xe.batching===!0||N.isInstancedMesh&&Xe.instancing===!1||!N.isInstancedMesh&&Xe.instancing===!0||N.isSkinnedMesh&&Xe.skinning===!1||!N.isSkinnedMesh&&Xe.skinning===!0||N.isInstancedMesh&&Xe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Xe.instancingColor===!1&&N.instanceColor!==null||Xe.envMap!==Ie||U.fog===!0&&Xe.fog!==ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==je.numPlanes||Xe.numIntersection!==je.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==Oe||Xe.morphTargets!==ke||Xe.morphNormals!==Ct||Xe.morphColors!==yn||Xe.toneMapping!==kt||Ne.isWebGL2===!0&&Xe.morphTargetsCount!==bt)&&(St=!0):(St=!0,Xe.__version=U.version);let cr=Xe.currentProgram;St===!0&&(cr=Oa(U,R,N));let ym=!1,Eo=!1,Ou=!1,jt=cr.getUniforms(),lr=Xe.uniforms;if(he.useProgram(cr.program)&&(ym=!0,Eo=!0,Ou=!0),U.id!==q&&(q=U.id,Eo=!0),ym||x!==_){jt.setValue(P,"projectionMatrix",_.projectionMatrix),jt.setValue(P,"viewMatrix",_.matrixWorldInverse);let En=jt.map.cameraPosition;En!==void 0&&En.setValue(P,Ve.setFromMatrixPosition(_.matrixWorld)),Ne.logarithmicDepthBuffer&&jt.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&jt.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,Eo=!0,Ou=!0)}if(N.isSkinnedMesh){jt.setOptional(P,N,"bindMatrix"),jt.setOptional(P,N,"bindMatrixInverse");let En=N.skeleton;En&&(Ne.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),jt.setValue(P,"boneTexture",En.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(jt.setOptional(P,N,"batchingTexture"),jt.setValue(P,"batchingTexture",N._matricesTexture,M));let Lu=L.morphAttributes;if((Lu.position!==void 0||Lu.normal!==void 0||Lu.color!==void 0&&Ne.isWebGL2===!0)&&et.update(N,L,cr),(Eo||Xe.receiveShadow!==N.receiveShadow)&&(Xe.receiveShadow=N.receiveShadow,jt.setValue(P,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(lr.envMap.value=Ie,lr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Eo&&(jt.setValue(P,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&zM(lr,Ou),ce&&U.fog===!0&&oe.refreshFogUniforms(lr,ce),oe.refreshMaterialUniforms(lr,U,j,H,ve),ho.upload(P,gm(Xe),lr,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ho.upload(P,gm(Xe),lr,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&jt.setValue(P,"center",N.center),jt.setValue(P,"modelViewMatrix",N.modelViewMatrix),jt.setValue(P,"normalMatrix",N.normalMatrix),jt.setValue(P,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let En=U.uniformsGroups;for(let Fu=0,WM=En.length;Fu<WM;Fu++)if(Ne.isWebGL2){let _m=En[Fu];lt.update(_m,cr),lt.bind(_m,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function zM(_,R){_.ambientLightColor.needsUpdate=R,_.lightProbe.needsUpdate=R,_.directionalLights.needsUpdate=R,_.directionalLightShadows.needsUpdate=R,_.pointLights.needsUpdate=R,_.pointLightShadows.needsUpdate=R,_.spotLights.needsUpdate=R,_.spotLightShadows.needsUpdate=R,_.rectAreaLights.needsUpdate=R,_.hemisphereLights.needsUpdate=R}function GM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(_,R,L){We.get(_.texture).__webglTexture=R,We.get(_.depthTexture).__webglTexture=L;let U=We.get(_);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=L===void 0,U.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,R){let L=We.get(_);L.__webglFramebuffer=R,L.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(_,R=0,L=0){C=_,I=R,T=L;let U=!0,N=null,ce=!1,pe=!1;if(_){let Ie=We.get(_);Ie.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(P.FRAMEBUFFER,null),U=!1):Ie.__webglFramebuffer===void 0?M.setupRenderTarget(_):Ie.__hasExternalTextures&&M.rebindTextures(_,We.get(_.texture).__webglTexture,We.get(_.depthTexture).__webglTexture);let $e=_.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(pe=!0);let Oe=We.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Oe[R])?N=Oe[R][L]:N=Oe[R],ce=!0):Ne.isWebGL2&&_.samples>0&&M.useMultisampledRTT(_)===!1?N=We.get(_).__webglMultisampledFramebuffer:Array.isArray(Oe)?N=Oe[L]:N=Oe,w.copy(_.viewport),V.copy(_.scissor),G=_.scissorTest}else w.copy($).multiplyScalar(j).floor(),V.copy(Q).multiplyScalar(j).floor(),G=ee;if(he.bindFramebuffer(P.FRAMEBUFFER,N)&&Ne.drawBuffers&&U&&he.drawBuffers(_,N),he.viewport(w),he.scissor(V),he.setScissorTest(G),ce){let Ie=We.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ie.__webglTexture,L)}else if(pe){let Ie=We.get(_.texture),$e=R||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.__webglTexture,L||0,$e)}q=-1},this.readRenderTargetPixels=function(_,R,L,U,N,ce,pe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=We.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){he.bindFramebuffer(P.FRAMEBUFFER,Ee);try{let Ie=_.texture,$e=Ie.format,Oe=Ie.type;if($e!==qn&&ue.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ke=Oe===Ta&&(xe.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Oe!==rr&&ue.convert(Oe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===tr&&(Ne.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=_.width-U&&L>=0&&L<=_.height-N&&P.readPixels(R,L,U,N,ue.convert($e),ue.convert(Oe),ce)}finally{let Ie=C!==null?We.get(C).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(_,R,L=0){let U=Math.pow(2,-L),N=Math.floor(R.image.width*U),ce=Math.floor(R.image.height*U);M.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,L,0,0,_.x,_.y,N,ce),he.unbindTexture()},this.copyTextureToTexture=function(_,R,L,U=0){let N=R.image.width,ce=R.image.height,pe=ue.convert(L.format),Ee=ue.convert(L.type);M.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment),R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,_.x,_.y,N,ce,pe,Ee,R.image.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,_.x,_.y,R.mipmaps[0].width,R.mipmaps[0].height,pe,R.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,U,_.x,_.y,pe,Ee,R.image),U===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(_,R,L,U,N=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ce=_.max.x-_.min.x+1,pe=_.max.y-_.min.y+1,Ee=_.max.z-_.min.z+1,Ie=ue.convert(U.format),$e=ue.convert(U.type),Oe;if(U.isData3DTexture)M.setTexture3D(U,0),Oe=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)M.setTexture2DArray(U,0),Oe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let ke=P.getParameter(P.UNPACK_ROW_LENGTH),Ct=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),kt=P.getParameter(P.UNPACK_SKIP_ROWS),ui=P.getParameter(P.UNPACK_SKIP_IMAGES),bt=L.isCompressedTexture?L.mipmaps[N]:L.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,_.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_.min.z),L.isDataTexture||L.isData3DTexture?P.texSubImage3D(Oe,N,R.x,R.y,R.z,ce,pe,Ee,Ie,$e,bt.data):L.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Oe,N,R.x,R.y,R.z,ce,pe,Ee,Ie,bt.data)):P.texSubImage3D(Oe,N,R.x,R.y,R.z,ce,pe,Ee,Ie,$e,bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ui),N===0&&U.generateMipmaps&&P.generateMipmap(Oe),he.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),he.unbindTexture()},this.resetState=function(){I=0,T=0,C=null,he.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===um?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Ru?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?qr:AM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?Gt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Qp=class extends Ia{};Qp.prototype.isWebGL1Renderer=!0;var Du=class extends Mo{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function lu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function AL(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var _o=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},em=class extends _o{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tx,endingEnd:Tx}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dx:s=e,a=2*t-i;break;case Ix:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dx:o=e,c=2*i-t;break;case Ix:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,p=v*g,f=-h*p+2*h*v-h*g,S=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-m)*p+(1.5+m)*v+.5*g,E=m*p-m*v;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+S*o[l+I]+b*o[c+I]+E*o[d+I];return s}},tm=class extends _o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},nm=class extends _o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lu(t,this.TimeBufferType),this.values=lu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:lu(e.times,Array),values:lu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new em(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case du:t=this.InterpolantFactoryMethodDiscrete;break;case hu:t=this.InterpolantFactoryMethodLinear;break;case np:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return du;case this.InterpolantFactoryMethodLinear:return hu;case this.InterpolantFactoryMethodSmooth:return np}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&AL(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===np,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=hu;var Jr=class extends Xn{};Jr.prototype.ValueTypeName="bool";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=du;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var im=class extends Xn{};im.prototype.ValueTypeName="color";var rm=class extends Xn{};rm.prototype.ValueTypeName="number";var sm=class extends _o{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ar.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ra=class extends Xn{InterpolantFactoryMethodLinear(e){return new sm(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.DefaultInterpolation=hu;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends Xn{};Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=du;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var om=class extends Xn{};om.prototype.ValueTypeName="vector";var hm="\\[\\]\\.:\\/",TL=new RegExp("["+hm+"]","g"),fm="[^"+hm+"]",DL="[^"+hm.replace("\\.","")+"]",IL=/((?:WC+[\/:])*)/.source.replace("WC",fm),RL=/(WCOD+)?/.source.replace("WCOD",DL),PL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fm),NL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fm),OL=new RegExp("^"+IL+RL+PL+NL+"$"),LL=["material","materials","bones","map"],am=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(TL,"")}static parseTrackName(t){let i=OL.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);LL.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=am,n})();Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oz=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cm);function UL(n,e){if(n&1){let t=Py();Le(0,"div",5),fn("click",function(){let s=uv(t).$implicit,o=Oy();return dv(o.navigateToRoute(s))}),ot(1),ze()}if(n&2){let t=e.$implicit;Tn(1),nl(" ",t.displayName," ")}}var kL=function(){return["/"]},kM=(()=>{let e=class e{constructor(i){this.router=i,this.routes=[{displayName:"About me",url:"/about"},{displayName:"Resume",url:"/asdf"},{displayName:"GitHub",url:"https://www.github.com/nathanejbrown",external:!0},{displayName:"Contact",url:"/contact"}]}navigateToRoute(i){i.external?window.open(i.url,"_blank"):this.router.navigate([i.url])}};e.\u0275fac=function(r){return new(r||e)(it(va))},e.\u0275cmp=Rt({type:e,selectors:[["app-left-nav"]],standalone:!0,features:[Pt],decls:6,vars:3,consts:[[1,"nav-primary"],[1,"nav-header"],[1,"initial",3,"routerLink"],[1,"nav-items"],["class","nav-item",3,"click",4,"ngFor","ngForOf"],[1,"nav-item",3,"click"]],template:function(r,s){r&1&&(Le(0,"nav",0)(1,"div",1)(2,"p",2),ot(3," N "),ze()(),Le(4,"div",3),Ry(5,UL,2,1,"div",4),ze()()),r&2&&(Tn(2),oi("routerLink",Fy(2,kL)),Tn(3),oi("ngForOf",s.routes))},dependencies:[Jy,i0],styles:[".nav-primary[_ngcontent-%COMP%]{position:fixed;width:10%;height:100%;background-color:#222}.nav-items[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-top:9.5rem}.nav-item[_ngcontent-%COMP%]{height:4rem;background-color:#020202;display:flex;justify-content:center;align-items:center;color:#fff;border-bottom:1px solid grey}.nav-item[_ngcontent-%COMP%]:first-child{border-top:1px solid grey}.nav-item[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#382f3c}.nav-header[_ngcontent-%COMP%]{display:flex;justify-content:center;height:40px}.initial[_ngcontent-%COMP%]{margin:1.5rem;font-weight:900;font-size:120px;color:#382f3c;cursor:pointer;text-shadow:1px 1px 1px #726890,1px 2px 1px #726890,1px 3px 1px #726890,1px 4px 1px #726890,1px 5px 1px #726890,1px 6px 1px #726890,1px 7px 1px #726890,1px 8px 1px #726890,1px 9px 1px #726890,1px 10px 1px #726890,1px 18px 6px rgba(16,16,16,.4),1px 22px 10px rgba(16,16,16,.2),1px 25px 35px rgba(16,16,16,.2),1px 30px 60px rgba(16,16,16,.4)}"]});let n=e;return n})();var BM=(()=>{let e=class e{constructor(){this.scene=new Du,this.camera=new an(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Ia,this.geometry=new Zr(1,1,1),this.material=new vo({color:65280}),this.cube=new Nn(this.geometry,this.material)}ngOnInit(){}animate(){requestAnimationFrame(this.animate),this.cube.rotation.x+=.25,this.cube.rotation.y+=.4,this.renderer.render(this.scene,this.camera)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Rt({type:e,selectors:[["app-root"]],standalone:!0,features:[Pt],decls:4,vars:0,consts:[[1,"container"],[1,"content"]],template:function(r,s){r&1&&(Le(0,"div",0),ai(1,"app-left-nav"),Le(2,"div",1),ai(3,"router-outlet"),ze()())},dependencies:[qh,Bf,kM],styles:[".container[_ngcontent-%COMP%]{display:flex}.content[_ngcontent-%COMP%]{margin-top:8.5rem;margin-left:12rem;padding:1rem;background-color:#020202;height:100vh}"]});let n=e;return n})();y_(BM,X0).catch(n=>console.error(n));
