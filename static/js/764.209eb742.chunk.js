"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{172:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(402),i="Loader_spiner__xTnPT",o=t(184),u=function(){return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("p",{children:"LOADING..."}),(0,o.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})}},764:function(e,n,t){t.r(n);var r=t(433),i=t(861),o=t(439),u=t(757),a=t.n(u),c=t(87),s=t(791),l=t(172),f=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,o.Z)(e,2),t=n[0],u=n[1],p=(0,s.useState)(null),d=(0,o.Z)(p,2),h=d[0],v=d[1],x=(0,s.useState)(!1),b=(0,o.Z)(x,2),m=b[0],_=b[1],g=(0,c.lr)(),j=(0,o.Z)(g,2),w=j[0],k=j[1],Z=(0,s.useState)((function(){return w.get("movieId")||""})),y=(0,o.Z)(Z,2),C=y[0],S=y[1];console.log("movieId",C),(0,s.useEffect)((function(){function e(){return(e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=356db60679791a010148fefe0790ebd1").then((function(e){return e.json()})).then((function(e){u((0,r.Z)(L(e.results)))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),v(e.t0.message);case 9:return e.prev=9,_(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(e){return e.map((function(e){return{original_title:e.original_title,id:e.id}}))},I=t.filter((function(e){return e.original_title.includes(C.toUpperCase())}));return(0,f.jsxs)("main",{children:[(0,f.jsx)("input",{type:"text",value:C,onChange:function(e){return k(S(e.target.value))}}),(0,f.jsx)("button",{type:"submit",onClick:function(){return k()},children:"Search"}),h&&{error:h},m&&(0,f.jsx)(l.Z,{}),(0,f.jsx)("div",{children:(0,f.jsx)(c.OL,{to:"/movies"})}),(0,f.jsx)("ul",{children:I.map((function(e){var n=e.original_title,t=e.id;return(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:"movies/".concat(t),children:n})},t)}))})]})}},861:function(e,n,t){function r(e,n,t,r,i,o,u){try{var a=e[o](u),c=a.value}catch(s){return void t(s)}a.done?n(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var u=e.apply(n,t);function a(e){r(u,i,o,a,c,"next",e)}function c(e){r(u,i,o,a,c,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=764.209eb742.chunk.js.map