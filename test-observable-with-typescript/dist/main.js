!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([,function(t,r,e){"use strict";e.r(r);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function i(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function o(t){return"function"==typeof t}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function c(t){setTimeout(function(){throw t},0)}var a={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},h=Array.isArray||function(t){return t&&"number"==typeof t.length};function l(t){return null!==t&&"object"==typeof t}function f(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,r){return r+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}f.prototype=Object.create(Error.prototype);var p=f,d=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var r;if(!this.closed){var e=this._parentOrParents,n=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof t)e.remove(this);else if(null!==e)for(var s=0;s<e.length;++s){e[s].remove(this)}if(o(n))try{n.call(this)}catch(t){r=t instanceof p?b(t.errors):[t]}if(h(i)){s=-1;for(var u=i.length;++s<u;){var c=i[s];if(l(c))try{c.unsubscribe()}catch(t){r=r||[],t instanceof p?r=r.concat(b(t.errors)):r.push(t)}}}if(r)throw new p(r)}},t.prototype.add=function(r){var e=r;if(!r)return t.EMPTY;switch(typeof r){case"function":e=new t(r);case"object":if(e===this||e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if(!(e instanceof t)){var n=e;(e=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=e._parentOrParents;if(null===i)e._parentOrParents=this;else if(i instanceof t){if(i===this)return e;e._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return e;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[e]:o.push(e),e},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function b(t){return t.reduce(function(t,r){return t.concat(r instanceof p?r.errors:r)},[])}var y="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),v=function(t){function r(e,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=a;break;case 1:if(!e){o.destination=a;break}if("object"==typeof e){e instanceof r?(o.syncErrorThrowable=e.syncErrorThrowable,o.destination=e,e.add(o)):(o.syncErrorThrowable=!0,o.destination=new _(o,e));break}default:o.syncErrorThrowable=!0,o.destination=new _(o,e,n,i)}return o}return i(r,t),r.prototype[y]=function(){return this},r.create=function(t,e,n){var i=new r(t,e,n);return i.syncErrorThrowable=!1,i},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(d),_=function(t){function r(r,e,n,i){var s,u=t.call(this)||this;u._parentSubscriber=r;var c=u;return o(e)?s=e:e&&(s=e.next,n=e.error,i=e.complete,e!==a&&(o((c=Object.create(e)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=n,u._complete=i,u}return i(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,e=u.useDeprecatedSynchronousErrorHandling;if(this._error)e&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)e?(r.syncErrorValue=t,r.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),e)throw t;c(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var e=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(t){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},r.prototype.__tryOrSetError=function(t,r,e){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,e)}catch(r){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(c(r),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(v);var g="function"==typeof Symbol&&Symbol.observable||"@@observable";function w(){}function S(t){return t?1===t.length?t[0]:function(r){return t.reduce(function(t,r){return r(t)},r)}:w}var E=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var e=new t;return e.source=this,e.operator=r,e},t.prototype.subscribe=function(t,r,e){var n=this.operator,i=function(t,r,e){if(t){if(t instanceof v)return t;if(t[y])return t[y]()}return t||r||e?new v(t,r,e):new v(a)}(t,r,e);if(n?i.add(n.call(i,this.source)):i.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),u.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),!function(t){for(;t;){var r=t,e=r.closed,n=r.destination,i=r.isStopped;if(e||i)return!1;t=n&&n instanceof v?n:null}return!0}(t)?console.warn(r):t.error(r)}},t.prototype.forEach=function(t,r){var e=this;return new(r=m(r))(function(r,n){var i;i=e.subscribe(function(r){try{t(r)}catch(t){n(t),i&&i.unsubscribe()}},n,r)})},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[g]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:S(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=m(t))(function(t,e){var n;r.subscribe(function(t){return n=t},function(t){return e(t)},function(){return t(n)})})},t.create=function(r){return new t(r)},t}();function m(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var x=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new O(t,this.project,this.thisArg))},t}(),O=function(t){function r(r,e,n){var i=t.call(this,r)||this;return i.project=e,i.count=0,i.thisArg=n||i,i}return i(r,t),r.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(r)},r}(v);Object.prototype.toString;function T(t,r,e,n){return o(e)&&(n=e,e=void 0),n?T(t,r,e).pipe((i=function(t){return h(t)?n.apply(void 0,t):n(t)},function(t){if("function"!=typeof i)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new x(i,s))})):new E(function(n){!function t(r,e,n,i,o){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(r)){var u=r;r.addEventListener(e,n,o),s=function(){return u.removeEventListener(e,n,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(r)){var c=r;r.on(e,n),s=function(){return c.off(e,n)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(r)){var a=r;r.addListener(e,n),s=function(){return a.removeListener(e,n)}}else{if(!r||!r.length)throw new TypeError("Invalid event target");for(var h=0,l=r.length;h<l;h++)t(r[h],e,n,i,o)}i.add(s)}(t,r,function(t){arguments.length>1?n.next(Array.prototype.slice.call(arguments)):n.next(t)},n,e)});var i,s}var P=function(t){function r(r,e){var n=t.call(this,r,e)||this;return n.scheduler=r,n.work=e,n.pending=!1,n}return i(r,t),r.prototype.schedule=function(t,r){if(void 0===r&&(r=0),this.closed)return this;this.state=t;var e=this.id,n=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(n,e,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(n,this.id,r),this},r.prototype.requestAsyncId=function(t,r,e){return void 0===e&&(e=0),setInterval(t.flush.bind(t,this),e)},r.prototype.recycleAsyncId=function(t,r,e){if(void 0===e&&(e=0),null!==e&&this.delay===e&&!1===this.pending)return r;clearInterval(r)},r.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,r);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,r){var e=!1,n=void 0;try{this.work(t)}catch(t){e=!0,n=!!t&&t||new Error(t)}if(e)return this.unsubscribe(),n},r.prototype._unsubscribe=function(){var t=this.id,r=this.scheduler,e=r.actions,n=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&e.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null},r}(function(t){function r(r,e){return t.call(this)||this}return i(r,t),r.prototype.schedule=function(t,r){return void 0===r&&(r=0),this},r}(d)),j=function(){function t(r,e){void 0===e&&(e=t.now),this.SchedulerAction=r,this.now=e}return t.prototype.schedule=function(t,r,e){return void 0===r&&(r=0),new this.SchedulerAction(this,t).schedule(e,r)},t.now=function(){return Date.now()},t}(),A=new(function(t){function r(e,n){void 0===n&&(n=j.now);var i=t.call(this,e,function(){return r.delegate&&r.delegate!==i?r.delegate.now():n()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return i(r,t),r.prototype.schedule=function(e,n,i){return void 0===n&&(n=0),r.delegate&&r.delegate!==this?r.delegate.schedule(e,n,i):t.prototype.schedule.call(this,e,n,i)},r.prototype.flush=function(t){var r=this.actions;if(this.active)r.push(t);else{var e;this.active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=r.shift());if(this.active=!1,e){for(;t=r.shift();)t.unsubscribe();throw e}}},r}(j))(P);var V={leading:!0,trailing:!1};var D=function(){function t(t,r,e,n){this.duration=t,this.scheduler=r,this.leading=e,this.trailing=n}return t.prototype.call=function(t,r){return r.subscribe(new H(t,this.duration,this.scheduler,this.leading,this.trailing))},t}(),H=function(t){function r(r,e,n,i,o){var s=t.call(this,r)||this;return s.duration=e,s.scheduler=n,s.leading=i,s.trailing=o,s._hasTrailingValue=!1,s._trailingValue=null,s}return i(r,t),r.prototype._next=function(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(k,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))},r.prototype._complete=function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()},r.prototype.clearThrottle=function(){var t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)},r}(v);function k(t){t.subscriber.clearThrottle()}var I=function(){function t(t,r,e){void 0===e&&(e=!1),this.accumulator=t,this.seed=r,this.hasSeed=e}return t.prototype.call=function(t,r){return r.subscribe(new L(t,this.accumulator,this.seed,this.hasSeed))},t}(),L=function(t){function r(r,e,n,i){var o=t.call(this,r)||this;return o.accumulator=e,o._seed=n,o.hasSeed=i,o.index=0,o}return i(r,t),Object.defineProperty(r.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),r.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},r.prototype._tryNext=function(t){var r,e=this.index++;try{r=this.accumulator(this.seed,t,e)}catch(t){this.destination.error(t)}this.seed=r,this.destination.next(r)},r}(v);new E(function(t){t.next(1),t.complete()}).subscribe(function(t){return console.log(t)});var M,U,q,N,Y=(M=5)*M*M;console.log("O : "+Y),T(document,"click").pipe((U=2e3,void 0===q&&(q=A),void 0===N&&(N=V),function(t){return t.lift(new D(U,q,N.leading,N.trailing))}),function(t,r){var e=!1;return arguments.length>=2&&(e=!0),function(n){return n.lift(new I(t,r,e))}}(function(t){return t+1},10)).subscribe(function(t){return console.log(t)}),new E(function(t){t.next(1),setTimeout(function(){t.next(2)},500),t.next(10)}).subscribe(function(t){return console.log(t)})}]);