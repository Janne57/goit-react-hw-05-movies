"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[824],{172:function(e,t,s){s.d(t,{Z:function(){return n}});var a=s(402),i="Loader_spiner__xTnPT",r=s(184),n=function(){return(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("p",{children:"LOADING..."}),(0,r.jsx)(a.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})]})}},824:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=s(433),i=s(439),r=s(689),n=s(791),c=s(87),l="MovieDetails_img__WWAoB",o="MovieDetails_text__add__1AcB0",d="MovieDetails_text__second__soA8z",u="MovieDetails_btn__t5pTm",h=s(172),_=s(184),f=function(){var e,t,s=(0,n.useState)(!1),f=(0,i.Z)(s,2),p=f[0],v=f[1],j=(0,r.UO)().movieId,m=(0,r.TH)(),x=(0,n.useRef)(null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),b=(0,n.useState)(""),g=(0,i.Z)(b,2),w=g[0],N=g[1],Z=(0,n.useState)(0),k=(0,i.Z)(Z,2),S=k[0],A=k[1],D=(0,n.useState)(""),M=(0,i.Z)(D,2),T=M[0],U=M[1],y=(0,n.useState)(0),C=(0,i.Z)(y,2),B=C[0],G=C[1],I=(0,n.useState)(""),L=(0,i.Z)(I,2),O=L[0],R=L[1],W=(0,n.useState)([]),z=(0,i.Z)(W,2),E=z[0],H=z[1];(0,n.useEffect)((function(){v(!0);try{fetch("https://api.themoviedb.org/3/movie/".concat(j,"?api_key=356db60679791a010148fefe0790ebd1")).then((function(e){return e.json()})).then((function(e){N(e.original_title),A(e.release_date),A(e.release_date),U(e.poster_path),G(e.vote_average),R(e.overview),H((0,a.Z)(P(e.genres)))}))}catch(e){}finally{v(!1)}}),[j]);var P=function(e){return e.map((function(e){return e.name})).join(" ")};return(0,_.jsxs)("div",{children:[(0,_.jsx)(c.rU,{to:x.current,className:u,children:"Go back"}),p&&(0,_.jsx)(h.Z,{}),(0,_.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500/".concat(T),alt:"{originalTitle  }"}),(0,_.jsx)("h1",{children:w}),(0,_.jsxs)("p",{children:["(",parseInt(S),")"]}),(0,_.jsxs)("p",{children:["User score: ","".concat(Math.round(10*B)),"%"]}),(0,_.jsx)("p",{className:o,children:"Overview"}),(0,_.jsxs)("p",{children:["(",O,")"]}),(0,_.jsx)("p",{className:o,children:"Genres"}),(0,_.jsxs)("p",{children:["(",E,")"]}),(0,_.jsx)("h2",{className:o,children:"Additinal information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(c.rU,{to:"cast",state:{from:m},className:d,children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(c.rU,{to:"reviews",state:{from:m},className:d,children:"Reviews"})})]}),(0,_.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=824.1a364a1c.chunk.js.map