(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{23:function(t,e,n){},33:function(t,e,n){t.exports={enter:"isAlreadyTrueAnimation_enter__JTh_X",enterActive:"isAlreadyTrueAnimation_enterActive__3RMil",exit:"isAlreadyTrueAnimation_exit__dFPY4",exitActive:"isAlreadyTrueAnimation_exitActive__1iw5Q"}},34:function(t,e,n){t.exports={enter:"FilterAnimation_enter__AN0cU",enterActive:"FilterAnimation_enterActive__1uYls",exit:"FilterAnimation_exit__vgEVy",exitActive:"FilterAnimation_exitActive__1x_XY"}},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n(9),s=n.n(o),i=n(14),u=n(15),l=n(17),d=n(16),b=n(71),j=(n(23),n(8)),f=n(18),h=n.n(f),m=n(2),O={addContactRequest:Object(m.b)("contact/addRequest"),addContactSuccess:Object(m.b)("contact/addSuccess"),addContactError:Object(m.b)("contact/addError"),getContactsRequest:Object(m.b)("contact/getRequest"),getContactsSuccess:Object(m.b)("contacts/getSuccess"),getContactsError:Object(m.b)("contacts/getError"),delContactRequest:Object(m.b)("contact/delRequest"),delContactSuccess:Object(m.b)("contact/delSuccess"),delContactError:Object(m.b)("contact/delError"),filter:Object(m.b)("app/filter")},C={addContact:function(t,e){return function(n){n(O.addContactRequest()),h.a.post("http://localhost:2000/contacts",{name:t,number:e}).then((function(t){return n(O.addContactSuccess(t.data))})).catch((function(t){return n(O.addContactError(t))}))}},getContacts:function(){return function(t){t(O.getContactsRequest()),h.a.get("http://localhost:2000/contacts").then((function(e){return t(O.getContactsSuccess(e.data))})).catch((function(e){return t(O.getContactsError(e))}))}},delContact:function(t){return function(e){e(O.delContactRequest()),h.a.delete("http://localhost:2000/contacts/"+t).then(e(O.delContactSuccess(t))).catch((function(t){return e(O.delContactError(t))}))}}},p=n(1),g={onDelContact:C.delContact},x=Object(j.b)(null,g)((function(t){var e=t.contact,n=t.onDelContact,c=t.id;return Object(p.jsxs)("li",{className:"ContactList-item",children:[Object(p.jsxs)("span",{className:"ContactList-text",children:[e.name,": ",e.number]}),Object(p.jsx)("button",{className:"ContactList-button",onClick:function(){n(c)},children:"Delete"})]})})),A=n(72),y=function(t){var e=t.contacts;return Object(p.jsx)("section",{children:Object(p.jsx)(A.a,{component:"ul",className:"ContactList",children:e.map((function(t){return Object(p.jsx)(b.a,{timeout:200,classNames:"ContactList-item",children:Object(p.jsx)(x,{contact:t,id:t.id})},t.id)}))})})},v=n(3),S=(n(66),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.changeIsAlready(t.state.name)&&t.props.onAddItem(t.state.name,t.state.number),t.setState((function(){return{name:"",number:""}}))},t.handleChange=function(e){var n=e.target,c=n.value,a=n.name;t.setState((function(){return Object(v.a)({},a,c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"ContactEditor",onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:"ContactEditor-label",children:["Name",Object(p.jsx)("input",{className:"ContactEditor-input",onChange:this.handleChange,value:this.state.name,name:"name",type:"text",maxLength:"12",autoComplete:"off",required:!0})]}),Object(p.jsxs)("label",{className:"ContactEditor-label",children:["Number",Object(p.jsx)("input",{className:"ContactEditor-input",onChange:this.handleChange,value:this.state.number,name:"number",type:"tel",autoComplete:"off",maxLength:"13"})]}),Object(p.jsx)("button",{className:"ContactEditor-button",children:"Add contact"})]})}}]),n}(r.Component)),_={onAddItem:C.addContact},E=Object(j.b)(null,_)(S),N=(n(67),{onChangeFilter:O.filter}),F=Object(j.b)(null,N)((function(t){var e=t.filter,n=t.onChangeFilter;return Object(p.jsx)("form",{className:"filterEditor",children:Object(p.jsxs)("label",{className:"filterLabel",children:["Find contacts by name",Object(p.jsx)("input",{className:"filterInput",onChange:function(t){return n(t.target.value)},value:e,name:"filter",type:"text",autoComplete:"off"})]})})})),q=(n(68),function(t){var e=t.onChangeIsAlready;return setTimeout(e,3e3),Object(p.jsx)("p",{className:alert,children:" Contact already exists!"})}),I=(n(69),n(33)),L=n.n(I),R=n(34),w=n.n(R),k=n(13),T=function(t){return t.app.contacts},D=function(t){return t.app.filter},J={getLoading:function(t){return t.app.loading},getContactsSelector:T,getFilter:D,contactsArrayFilteredSel:Object(k.a)([T,D],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContactIsAlready:Object(k.a)([function(t,e){return e},T],(function(t,e){return e.find((function(e){return t===e.name}))}))},Y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isAlready:!1},t.changeIsAlready=function(e){return J.getContactIsAlready(t.props.state,e)?(t.setState({isAlready:!0}),!1):(t.setState({isAlready:!1}),!0)},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.loading,c=t.contactsArrayFiltered;return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(b.a,{in:!0===this.state.isAlready,timeout:300,classNames:L.a,unmountOnExit:!0,children:Object(p.jsx)(q,{onChangeIsAlready:this.changeIsAlready})}),Object(p.jsx)("div",{className:"header",children:Object(p.jsx)(b.a,{in:!0,appear:!0,classNames:"fade",timeout:500,unmountOnExit:!0,children:Object(p.jsx)("h1",{className:"logo",children:"Phonebook"})})}),Object(p.jsx)(E,{changeIsAlready:this.changeIsAlready}),Object(p.jsx)(b.a,{in:e.length>1,timeout:300,classNames:w.a,unmountOnExit:!0,children:Object(p.jsx)(F,{})}),n&&Object(p.jsx)("h3",{children:"Loading..."}),Object(p.jsx)(y,{contacts:c})]})}}]),n}(r.Component),M={getContacts:C.getContacts},P=Object(j.b)((function(t){return{filter:J.getFilter(t),contacts:J.getContactsSelector(t),loading:J.getLoading(t),contactsArrayFiltered:J.contactsArrayFilteredSel(t),state:t}}),M)(Y),X=n(35),B=n(7),Q=Object(m.c)("",Object(v.a)({},O.filter,(function(t,e){return e.payload}))),U=Object(m.c)([],(c={},Object(v.a)(c,O.getContactsSuccess,(function(t,e){return e.payload})),Object(v.a)(c,O.addContactSuccess,(function(t,e){return[].concat(Object(X.a)(t),[e.payload])})),Object(v.a)(c,O.delContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),V=Object(m.c)(!1,(a={},Object(v.a)(a,O.addContactRequest,(function(){return!0})),Object(v.a)(a,O.addContactSuccess,(function(){return!1})),Object(v.a)(a,O.addContactError,(function(){return!1})),Object(v.a)(a,O.getContactsRequest,(function(){return!0})),Object(v.a)(a,O.getContactsSuccess,(function(){return!1})),Object(v.a)(a,O.getContactsError,(function(){return!1})),Object(v.a)(a,O.delContactRequest,(function(){return!0})),Object(v.a)(a,O.delContactSuccess,(function(){return!1})),Object(v.a)(a,O.delContactError,(function(){return!1})),a)),z=Object(B.c)({filter:Q,contacts:U,loading:V}),G=Object(m.a)({reducer:{app:z}});s.a.render(Object(p.jsx)(j.a,{store:G,children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.bf522861.chunk.js.map