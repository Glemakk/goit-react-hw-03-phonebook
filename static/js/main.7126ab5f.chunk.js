(this["webpackJsonpreact-app-start-package"]=this["webpackJsonpreact-app-start-package"]||[]).push([[0],{21:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a,r=t(2),c=t.n(r),o=t(12),i=t.n(o),s=(t(21),t(15)),l=t(6),b=t(7),d=t(8),u=t(10),j=t(9),h=t(3),x=t(4),p=x.a.button(a||(a=Object(h.a)(["\n  font-weight: 400;\n  line-height: 1.33;\n    width: 197px;\n  background-color: orange;\n  margin-top: 15px;\n  margin-left: 29px;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-align: center;\n  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),\n    0px 2px 1px rgb(0 0 0 / 20%);\n    &:focus,\n  &:hover {\n    box-shadow: 2px 3px 17px 0px rgb(0 0 0 / 78%), -1px 0px 2px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),f=t(1);var g,O,m,v,C,k,S=function(e){var n=e.onClick,t=e.text;return Object(f.jsx)(p,{onClick:n,children:t})},y=t(5),w=t(0),z=x.a.form(g||(g=Object(h.a)(["background - color: #fff;\npadding: 15px;"]))),A=x.a.div(O||(O=Object(h.a)(["\n  display: flex;\n"]))),P=x.a.input(m||(m=Object(h.a)(["\n \n  padding: 3px 10px;\n border: 2px solid rgba(33, 33, 33, 0.2);\n box-sizing: border-box;\n  border-radius: 4px;\n  &:focus,\n  &:hover {\n    border-color: #00adffa8;\n    outline: none;\n    transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1);"]))),F=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={name:"",number:""},e.handleChange=function(n){var t=n.target,a=t.value,r=t.name;e.setState(Object(l.a)({},r,a))},e.handleSubmit=function(n){n.preventDefault();var t=e.state,a=t.name,r=t.number;(0,e.props.onSubmit)(a,r),e.clearForm()},e.clearForm=function(){e.setState({number:"",name:""})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,n=e.number,t=e.name;return Object(f.jsx)("div",{children:Object(f.jsxs)(z,{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("h2",{children:"Name"}),Object(f.jsxs)(A,{children:[Object(f.jsx)(w.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(y.a,{})}),"\xa0",Object(f.jsx)(P,{type:"text",name:"name",value:t,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("h2",{children:"Number"}),Object(f.jsxs)(A,{children:[Object(f.jsx)(w.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(y.b,{})}),"\xa0",Object(f.jsx)(P,{type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off"})]})]}),Object(f.jsx)(S,{text:"Add contact"})]})})}}]),t}(r.Component),J=x.a.ul(v||(v=Object(h.a)(["\n  border-radius: 4px;\n  padding: 24px;\n  //   background-color: #7c7c7c;\n  //   color: #fff;\n"]))),D=x.a.li(C||(C=Object(h.a)(["\n  display: flex;\n  padding-bottom: 10px;\n  justify-content: space-between;\n  align-items: baseline;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n"]))),I=t(14),L=x.a.button(k||(k=Object(h.a)(["\n  background-color: transparent;\n  border: none;\ntransition: 100ms;\n    &:focus,\n  &:hover {\n\n    transform: scale(1.1);\n"])));function N(e){var n=e.children,t=e.onClick;return Object(f.jsx)(L,{type:"button",onClick:t,children:n})}N.defaultProps={onClick:function(){return null},children:null};var B,M=N;function T(e){var n=e.contacts,t=e.onClick;return Object(f.jsx)(J,{children:n.map((function(e){return Object(f.jsxs)(D,{children:[e.name,": ",e.number,Object(f.jsx)(M,{onClick:function(){return t(e.id)},children:Object(f.jsx)(w.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(I.a,{})})})]},e.id)}))})}var Z,q=x.a.div(B||(B=Object(h.a)(["\n  padding: 15px;\n"])));function V(e){var n=e.filter,t=e.onChange;return Object(f.jsx)("label",{children:Object(f.jsxs)(q,{children:[Object(f.jsx)("h3",{children:"Find contacts by name"}),Object(f.jsxs)(A,{children:[Object(f.jsx)(w.b.Provider,{value:{size:"23px"},children:Object(f.jsx)(y.c,{})}),"\xa0",Object(f.jsx)(P,{type:"text",name:"filter",value:n,onChange:t,placeholder:"Search contact",autoComplete:"off"})]})]})})}var E=x.a.div(Z||(Z=Object(h.a)(["\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: rgb(0 0 0 / 12%);\n  background-image: linear-gradient(28deg, #a8ff36, transparent);\n  border: 2px solid #4a4a4a;\n  border-radius: 5px;\n  max-width: 400px;\n"])));var U=function(e){var n=e.children;return Object(f.jsx)(E,{children:n})},$=t(28),G=function(e){Object(u.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={contacts:[],filter:""},e.handleChange=function(n){var t=n.currentTarget,a=t.value,r=t.name;e.setState(Object(l.a)({},r,a))},e.handleSubmit=function(n,t){var a={id:Object($.a)(),name:n,number:t};e.state.contacts.find((function(e){return e.name.includes(n)}))?alert("".concat(n," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[a])}}))},e.getVisibleContacts=function(){var n=e.state,t=n.filter,a=n.contacts,r=t.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(n){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),n=JSON.parse(e);n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(e,n){this.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log(n.contacts),console.log(this.state.contacts)}},{key:"render",value:function(){var e=this.state.filter,n=this.getVisibleContacts();return Object(f.jsxs)(U,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(F,{onSubmit:this.handleSubmit}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(V,{onChange:this.handleChange,filter:e}),Object(f.jsx)(T,{contacts:n,onClick:this.deleteContact})]})}}]),t}(r.Component),H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),H()}},[[26,1,2]]]);
//# sourceMappingURL=main.7126ab5f.chunk.js.map