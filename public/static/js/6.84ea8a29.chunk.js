(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[6],{25:function(e,o,t){"use strict";t.r(o),t.d(o,"proxyFun",(function(){return n}));var n=function(){var e=new Proxy(r,{get:function(e,o){return"age"==o?e[o]+"\u5c81":e[o]},set:function(e,o,t){if("age"==o&&"number"!==typeof t)throw new TypeError("The age is not an integer");return e[o]=t,!0}});e.age=18,e.name="xiaoma",console.log("\u540d\u5b57\uff1a".concat(e.name,"\uff0c\u5e74\u9f84\uff1a").concat(e.age))},r={name:"phil",age:17},p=function(e,o){var t=Object.getOwnPropertyDescriptor(o.prototype,"constructor");o.prototype=Object.create(e.prototype);var n={construct:function(e,t){console.log(e,t,o);var n=Object.create(o.prototype);return this.apply(e,n,t),n},apply:function(t,n,r){console.log(t,n,r),e.apply(n,r),o.apply(n,r)}},r=new Proxy(o,n);return t.value=r,Object.defineProperty(o.prototype,"constructor",t),console.log("descriptor",t,o.prototype),r}((function(e){this.name=e}),(function(e,o){this.age=o}));p.prototype.sex="M";var c=new p("perter",15);console.log("perter=",c.age,c.sex)}}]);
//# sourceMappingURL=6.84ea8a29.chunk.js.map