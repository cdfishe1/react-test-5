(this["webpackJsonpreact-test-5"]=this["webpackJsonpreact-test-5"]||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(4),a=c.n(r),u=c(2),s=c(5),o=c(6),b=c(0),i=["value"],j=Object(n.createContext)(),d=j.Provider,l=function(t,e){switch(e.type){case"add":return{count:t.count+1};case"subtract":return{count:t.count-1};default:throw new Error("Invalid action type: ".concat(e.type))}},O=function(t){var e=t.value,c=void 0===e?0:e,r=Object(o.a)(t,i),a=Object(n.useReducer)(l,{count:c}),j=Object(u.a)(a,2),O=j[0],p=j[1];return Object(b.jsx)(d,Object(s.a)({value:[O,p]},r))};var p=function(){var t=Object(n.useContext)(j),e=Object(u.a)(t,2),c=e[0],r=e[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("button",{className:"btn btn-success mt-5 mb-5",onClick:function(){return r({type:"add"})},children:"Add"}),Object(b.jsx)("div",{children:c.count}),Object(b.jsx)("button",{className:"btn btn-danger mt-5",onClick:function(){return r({type:"subtract"})},children:"Subtract"})]})};c(12);var v=function(){return Object(b.jsx)(O,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{})})})};c(13);a.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5cbddcec.chunk.js.map