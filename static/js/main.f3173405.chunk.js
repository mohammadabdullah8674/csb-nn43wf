(this["webpackJsonpanalog-clock-by-abdullah"]=this["webpackJsonpanalog-clock-by-abdullah"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(4),r=(c(13),c(0));var s=function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("footer",{children:"Made with \u2764 by Mohd Abdullah"})})},o=c(2);function i(){var e=new Date,t=e.getHours(),c=e.getMinutes(),a=e.getSeconds(),s=Object(n.useState)(a),i=Object(o.a)(s,2),j=i[0],d=i[1],l=Object(n.useState)(c),u=Object(o.a)(l,2),b=u[0],O=u[1],h=Object(n.useState)(t),v=Object(o.a)(h,2),f=v[0],x=v[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date,t=e.getHours(),c=e.getMinutes(),n=e.getSeconds();d(n),O(c),x(t)}),1e3);return function(){return clearInterval(e)}}),[]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"clock",children:[Object(r.jsx)("div",{className:"centerPoint"}),Object(r.jsx)("div",{className:"hourHandWrapper",style:{transform:"rotate(".concat(30*f+Math.round(b/2),"deg")},children:Object(r.jsx)("div",{className:"hourHand"})}),Object(r.jsx)("div",{className:"minuteHandWrapper",style:{transform:"rotate(".concat(6*b,"deg")},children:Object(r.jsx)("div",{className:"minuteHand"})}),Object(r.jsx)("div",{className:"secondHandWrapper",style:{transform:"rotate(".concat(6*j,"deg")},children:Object(r.jsx)("div",{className:"secondHand"})})]})})}function j(){var e=new Date,t=Object(n.useState)(e.toLocaleTimeString()),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date;s(e.toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"date",children:[Object(r.jsx)("h1",{children:e.toDateString()}),Object(r.jsx)("h1",{children:a})]})})}function d(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(i,{}),Object(r.jsx)(s,{})]})}var l=document.getElementById("root");Object(a.createRoot)(l).render(Object(r.jsx)(n.StrictMode,{children:Object(r.jsx)(d,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f3173405.chunk.js.map