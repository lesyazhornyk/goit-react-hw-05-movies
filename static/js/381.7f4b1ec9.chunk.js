"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[381],{866:function(n,e,t){var r=t(920),a=t(184);e.Z=function(n){var e=n.isLoading;return(0,a.jsx)(r.NB,{visible:e,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{margin:"0 auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},381:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(866),o=t(390),p=t(87),f=t(184);function h(){var n=(0,s.useState)(!1),e=(0,a.Z)(n,2),t=e[0],c=e[1],h=(0,s.useState)(null),l=(0,a.Z)(h,2),v=l[0],d=l[1],m=(0,s.useState)([]),w=(0,a.Z)(m,2),x=w[0],k=w[1];return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.prev=1,n.next=4,(0,o.yv)();case 4:e=n.sent,k(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d(n.t0);case 11:return n.prev=11,c(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),v&&(0,f.jsxs)("p",{children:["Whoops, something went wrong: ",v.message]}),(0,f.jsx)(i.Z,{isLoading:t}),x.length>0&&!t&&(0,f.jsx)("ul",{children:x.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}function l(){return(0,f.jsx)(h,{})}},390:function(n,e,t){t.d(e,{Ad:function(){return l},Mc:function(){return f},mo:function(){return h},yv:function(){return o},z1:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="https://api.themoviedb.org/3/",i="72aeab2a322c3635130c33f86690232e",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:i}),n.next=3,u.Z.get("".concat(s,"trending/movie/day?").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i,query:e}),n.next=3,u.Z.get("".concat(s,"search/movie?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i}),n.next=3,u.Z.get("".concat(s,"movie/").concat(e,"?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i}),n.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/reviews?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i}),n.next=3,u.Z.get("".concat(s,"movie/").concat(e,"/credits?").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=381.7f4b1ec9.chunk.js.map