"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{172:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(691),i="Loader_spiner__xTnPT",s=t(184),a=function(){return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("p",{children:"LOADING..."}),(0,s.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})}},266:function(e,n,t){t.r(n);var r=t(433),i=t(861),s=t(439),a=t(757),c=t.n(a),o=t(791),l=t(689),u=t(87),d=t(172),h=t(184);n.default=function(){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),t=n[0],a=n[1],f=(0,o.useState)(null),p=(0,s.Z)(f,2),v=p[0],b=p[1],x=(0,o.useState)(!1),_=(0,s.Z)(x,2),g=_[0],j=_[1],m=(0,l.TH)();return(0,o.useEffect)((function(){function e(){return(e=(0,i.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=356db60679791a010148fefe0790ebd1").then((function(e){return e.json()})).then((function(e){a((0,r.Z)(e.results)),console.log("\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 HOME \u0438\u0434\u0435\u0442")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(e.t0.message);case 9:return e.prev=9,j(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("location Home",m),(0,h.jsxs)("div",{children:[v&&{error:v},(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsxs)("div",{children:[g&&(0,h.jsx)(d.Z,{}),(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"movies/".concat(e.id),state:{from:m},children:e.original_title},e.id)})}))})]})]})}}}]);
//# sourceMappingURL=266.82c07def.chunk.js.map