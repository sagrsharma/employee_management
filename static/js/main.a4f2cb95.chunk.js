(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{93:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var a=r(10),i=r.n(a),l=r(14),c=r(0),n=r(66),o=r(43),s=r.n(o),j=r(125),d=r(128),b=r(130),m=r(145),u=r(146),h=r(132),O=r(133),p=r(147),x=r(149),f=r(143),g=r(150),v=r(136),y=r(4),C=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:160}}}));function N(e){var t=e.employeeList,r=e.setEmployeeList,a=e.projectList,i=C(),o=Object(c.useState)(!1),s=Object(l.a)(o,2),j=s[0],N=s[1],S=Object(c.useState)(""),E=Object(l.a)(S,2),P=E[0],L=E[1],k=Object(c.useState)(""),z=Object(l.a)(k,2),A=z[0],J=z[1],M=Object(c.useState)(""),T=Object(l.a)(M,2),q=T[0],w=T[1],D=Object(c.useState)(""),I=Object(l.a)(D,2),R=I[0],W=I[1];function X(){N(!1),L(""),J(""),w(""),W("")}return Object(y.jsxs)("div",{children:[Object(y.jsxs)(d.a,{container:!0,style:{marginTop:"1em"},children:[Object(y.jsx)(d.a,{item:!0,sm:10}),Object(y.jsx)(d.a,{item:!0,sm:2,children:Object(y.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){N(!0)},children:"Add Employee"})})]}),Object(y.jsx)(m.a,{onClose:X,"aria-labelledby":"customized-dialog-title",open:j,children:Object(y.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var a={id:Math.floor(100*Math.random()),name:P,email:A,mobileNumber:q,projectTitle:R};localStorage.setItem("employeeDetail",JSON.stringify(a)),r([].concat(Object(n.a)(t),[a])),X()},children:[Object(y.jsxs)(u.a,{id:"customized-dialog-title",onClose:X,children:["Add Employee",Object(y.jsx)("span",{onClick:X,style:{cursor:"pointer",float:"right"},children:"X"})]}),Object(y.jsxs)(h.a,{dividers:!0,style:{textAlign:"center"},children:[Object(y.jsx)(O.a,{variant:"outlined",className:i.formControl,children:Object(y.jsx)(p.a,{variant:"outlined",label:"Name",placeholder:"Enter Name",value:P,onChange:function(e){return L(e.target.value)},size:"small",error:!P,id:"outlined-error",required:!0})}),Object(y.jsx)(O.a,{variant:"outlined",className:i.formControl,children:Object(y.jsx)(p.a,{variant:"outlined",label:"Email",placeholder:"Enter Email",value:A,type:"email",onChange:function(e){return J(e.target.value)},size:"small",error:!A,id:"outlined-error",required:!0})}),Object(y.jsx)(O.a,{variant:"outlined",className:i.formControl,children:Object(y.jsx)(p.a,{variant:"outlined",label:"Mobile",placeholder:"Enter Mobile",value:q,type:"number",onChange:function(e){return w(e.target.value)},size:"small",id:"outlined-error",error:!q,required:!0})}),Object(y.jsxs)(O.a,{variant:"outlined",className:i.formControl,children:[Object(y.jsx)(x.a,{id:"demo-simple-select-error-label",style:{marginTop:"-8px"},children:"Projects *"}),Object(y.jsxs)(f.a,{error:!R,style:{width:"230px",height:"40px"},id:"demo-simple-select-error",labelId:"demo-simple-select-error-label",value:R,onChange:function(e){W(e.target.value)},label:"Projects",required:!0,children:[Object(y.jsx)(g.a,{value:"",children:Object(y.jsx)("em",{children:"None"})}),a.map((function(e){return Object(y.jsx)(g.a,{value:e.title,children:e.title},e.id)}))]})]})]}),Object(y.jsxs)(v.a,{style:{justifyContent:"center"},children:[Object(y.jsx)(O.a,{variant:"outlined",className:i.formControl,children:Object(y.jsx)(b.a,{variant:"outlined",color:"primary",type:"submit",children:"Save"})}),Object(y.jsx)(O.a,{variant:"outlined",className:i.formControl,children:Object(y.jsx)(b.a,{variant:"outlined",color:"secondary",onClick:function(){L(""),J(""),w(""),W("")},children:"Reset"})})]})]})})]})}s.a.setAppElement("*");var S=Object(j.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120}}}));function E(e){e.setProjectList;var t=e.projectList,r=S(),a=Object(c.useState)(!1),i=Object(l.a)(a,2),n=i[0],o=i[1],s=Object(c.useState)(""),j=Object(l.a)(s,2),x=j[0],f=j[1],g=Object(c.useState)(""),C=Object(l.a)(g,2);C[0],C[1];function N(){o(!1),f("")}return Object(y.jsxs)("div",{children:[Object(y.jsxs)(d.a,{container:!0,children:[Object(y.jsx)(d.a,{item:!0,sm:10}),Object(y.jsx)(d.a,{item:!0,sm:2,children:Object(y.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){o(!0)},children:"Add Project"})})]}),Object(y.jsx)(m.a,{onClose:N,"aria-labelledby":"customized-dialog-title",open:n,children:Object(y.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();Math.floor(100*Math.random());var r={id:t.length+1,title:x};localStorage.setItem("projectDetails",JSON.stringify(r)),t.push(r),N()},className:"add-employee__form",children:[Object(y.jsxs)(u.a,{id:"customized-dialog-title",onClose:N,children:["Modal title",Object(y.jsx)("span",{onClick:N,style:{cursor:"pointer",float:"right"},children:"X"})]}),Object(y.jsx)(h.a,{dividers:!0,children:Object(y.jsx)(O.a,{variant:"outlined",className:r.formControl,children:Object(y.jsx)(p.a,{error:!x,id:"outlined-error",variant:"outlined",label:"Projects",placeholder:"Enter Project",value:x,onChange:function(e){f(e.target.value)},required:!0})})}),Object(y.jsxs)(v.a,{style:{justifyContent:"center"},children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(b.a,{variant:"outlined",color:"primary",type:"submit",children:"Save"})}),Object(y.jsx)(O.a,{children:Object(y.jsx)(b.a,{variant:"outlined",color:"secondary",onClick:function(){f("")},type:"reset",children:"Reset"})})]})]})})]})}s.a.setAppElement("*");var P=r(137),L=r(131),k=r(138),z=r(139),A=r(140),J=r(141),M=r(142),T=Object(j.a)({table:{width:"90%",margin:"0px 4em 0px 4em"}});function q(e){var t=e.employeeList,r=T();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{style:{background:"#0f1228",color:"#e7e9e7"},children:"Employee List"}),Object(y.jsx)(P.a,{component:L.a,children:Object(y.jsxs)(k.a,{className:r.table,"aria-label":"simple table",children:[Object(y.jsx)(z.a,{children:Object(y.jsxs)(A.a,{children:[Object(y.jsx)(J.a,{children:"Series"}),Object(y.jsx)(J.a,{align:"right",children:"Calories"}),Object(y.jsx)(J.a,{align:"right",children:"Name"}),Object(y.jsx)(J.a,{align:"right",children:"Email"}),Object(y.jsx)(J.a,{align:"right",children:"Project"})]})}),Object(y.jsx)(M.a,{children:t.map((function(e,t){return Object(y.jsxs)(A.a,{children:[Object(y.jsx)(J.a,{component:"th",scope:"row",children:t+1}),Object(y.jsx)(J.a,{align:"right",children:e.name}),Object(y.jsx)(J.a,{align:"right",children:e.email}),Object(y.jsx)(J.a,{align:"right",children:e.mobileNumber}),Object(y.jsx)(J.a,{align:"right",children:e.projectTitle})]},e.name)}))})]})})]})}r(93);var w=[{id:1,name:"Jogn",email:"email@example.com",mobileNumber:"98787",projectTitle:"Project 1"},{id:2,name:"Josfdgn",email:"emaiasdfl@example.com",mobileNumber:"95498787",projectTitle:"Project 2"},{id:3,name:"Jogasfdn",email:"eadsfmail@example.com",mobileNumber:"0090998787",projectTitle:"Project 3"}],D=[{id:1,title:"Project 1"},{id:2,title:"Project 2"},{id:3,title:"Project 3"}];function I(){var e=Object(c.useState)(w),t=Object(l.a)(e,2),r=t[0],a=t[1],i=Object(c.useState)(D),n=Object(l.a)(i,2),o=n[0],s=n[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(E,{setProjectList:s,projectList:o}),Object(y.jsx)(N,{employeeList:r,setEmployeeList:a,projectList:o}),Object(y.jsx)(q,{employeeList:r})]})}var R=document.getElementById("root");i.a.render(Object(y.jsx)(I,{}),R)}},[[94,1,2]]]);
//# sourceMappingURL=main.a4f2cb95.chunk.js.map