(this["webpackJsonpcrud-poc"]=this["webpackJsonpcrud-poc"]||[]).push([[0],{69:function(e,t,a){e.exports=a(82)},74:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(74),a(13)),o=a.n(i),s=a(21),m=a(15),u=a(3),p=a(110),d=a(114),f=a(118),g=a(126),E=a(116),b=Object(p.a)((function(e){return{margin:{margin:e.spacing(1)},textField:{flexBasis:200}}}));function y(e){var t=b(),a={username:"$",password:"M",name:"\u211b",job:"$",payments:" "};return Object.freeze(a),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{id:"filled-adornment-".concat(e.type),type:e.type,className:Object(u.a)(t.margin,t.textField),variant:"filled",label:e.label,onChange:function(t){e.getValue(t.target.value)},InputProps:{startAdornment:r.a.createElement(E.a,{position:"start"},a[e.type])}}))}var h=a(117),j=Object(p.a)((function(e){return{margin:{margin:e.spacing(1)}}}));function v(e){var t=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:t.margin,variant:"contained",color:"primary",onClick:function(){e.clickButton()},size:"small"},e.type))}var x="https://reqres.in/api/",O=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,display:"flex"},margin:{margin:e.spacing(1)},header:{fontWeight:"bold",marginBottom:"10px",textAlign:"center"},alignCenter:{textAlign:"center"}}}));function w(e){var t=r.a.useState(),a=Object(m.a)(t,2),n=a[0],c=a[1],l=r.a.useState(),i=Object(m.a)(l,2),p=i[0],g=i[1];function E(){return(E=Object(s.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={email:n,password:p},t.next=3,fetch("".concat(x,"login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:200===t.sent.status&&e.getList(!0);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(f.a,{item:!0,xs:4},r.a.createElement(d.a,{className:Object(u.a)(b.paper,b.header)},r.a.createElement("span",{className:Object(u.a)(b.alignCenter)},"CRUD APPLICATION")),r.a.createElement(d.a,{className:Object(u.a)(b.paper,b.header)},r.a.createElement(y,{label:"Username",type:"username",getValue:function(e){c(e)}}),r.a.createElement(y,{label:"Password",type:"password",getValue:function(e){g(e)}}),r.a.createElement(v,{type:"Login",clickButton:function(){return E.apply(this,arguments)}})))))}var k=a(115),N=a(119),C=a(125),I=a(122),S=a(120),A=a(121),F=a(33),T=a(123),B=a(124),P=a(57),J=a.n(P),V=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));function L(e){var t=V(),a=function(t){e.deleteData(Number.parseInt(t.currentTarget.id))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(k.a,{className:t.root},e.data.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(N.a,{alignItems:"flex-start"},r.a.createElement(S.a,null,r.a.createElement(A.a,{alt:"No Image",src:e.avatar})),r.a.createElement(I.a,{primary:e.id,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},e.first_name," ",e.last_name)," ".concat(e.email))}),r.a.createElement(T.a,null,r.a.createElement(B.a,{id:e.id,edge:"end","aria-label":"delete",onClick:a},r.a.createElement(J.a,null)))),r.a.createElement(C.a,{variant:"inset",component:"li"}))})))))}var W=a(58),D=a.n(W),U=Object(p.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,display:"flex"},margin:{margin:e.spacing(1)},header:{fontWeight:"bold",marginBottom:"10px",textAlign:"center"},alignCenter:{textAlign:"center"},root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));function $(e){var t=U(),a=r.a.useState(),n=Object(m.a)(a,2),c=n[0],l=n[1],i=r.a.useState(),p=Object(m.a)(i,2),g=p[0],E=p[1],b=r.a.useState([]),h=Object(m.a)(b,2),j=h[0],O=h[1],w=r.a.useState(!1),S=Object(m.a)(w,2),A=S[0],P=S[1],J=r.a.useState(),V=Object(m.a)(J,2),L=V[0],W=V[1];function $(){return($=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:c,job:g},e.next=3,fetch("".concat(x,"users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:201===(a=e.sent).status&&a.json().then((function(e){var t=j.concat(e);O(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:c,job:g},e.next=3,fetch("".concat(x,"users/").concat(L),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:200===(a=e.sent).status&&a.json().then((function(e){e.id=L;var t=j.map((function(e){return Number.parseInt(e.id)})).indexOf(L),a=j.slice();a[t]=e,O(a),P(!1)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){P(!0),W(Number.parseInt(e.currentTarget.id))},q=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:Object(u.a)(t.paper,t.header)},r.a.createElement(y,{label:"Name",type:"name",getValue:function(e){l(e)}}),r.a.createElement(y,{label:"Job",type:"job",getValue:function(e){E(e)}}),r.a.createElement(v,{type:"Edit User",clickButton:function(){return z.apply(this,arguments)}}))),H=r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},j?r.a.createElement(d.a,{className:Object(u.a)(t.paper,t.header)},r.a.createElement(k.a,{className:t.root},j.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(N.a,{alignItems:"flex-start"},r.a.createElement(I.a,{primary:e.name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{component:"span",variant:"body2",className:t.inline,color:"textPrimary"},"".concat(e.job)),"- ".concat(e.createdAt?e.createdAt:e.updatedAt))}),r.a.createElement(T.a,null,r.a.createElement(B.a,{id:e.id,edge:"end","aria-label":"delete",onClick:_},r.a.createElement(D.a,null)))),r.a.createElement(C.a,{variant:"inset",component:"li"}))})))):""));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(f.a,{item:!0,xs:4},r.a.createElement(d.a,{className:Object(u.a)(t.paper,t.header)},r.a.createElement(y,{label:"Name",type:"name",getValue:l}),r.a.createElement(y,{label:"Job",type:"job",getValue:E}),r.a.createElement(v,{type:"Create User",clickButton:function(){return $.apply(this,arguments)}})),A?q:H)))}var z=a(38),_=a(23);var q=function(e){var t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],c=a[1],l=r.a.useState(),i=Object(m.a)(l,2),u=i[0],p=i[1];function d(){return(d=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,fetch("".concat(x,"users?page=2"));case 3:e.sent.json().then((function(e){p(e.data),c(t)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"users/").concat(t),{method:"DELETE"});case 2:204===e.sent.status&&p(u.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{getList:function(e){return d.apply(this,arguments)}}),r.a.createElement(z.a,{basename:""},r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",justify:"center"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.b,{to:"/list"},"List"),r.a.createElement(z.b,{to:"/create"},"Create User")):""),r.a.createElement(_.b,{path:"/list",exact:!0,render:function(){return n?r.a.createElement(L,{deleteData:g,data:u}):r.a.createElement(_.a,{to:"/"})}}),r.a.createElement(_.b,{path:"/create",exact:!0,render:function(){return n?r.a.createElement($,{deleteData:g,data:u}):r.a.createElement(_.a,{to:"/"})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.7aea8d1d.chunk.js.map