(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{15:function(e,t,n){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",triangle:"Message_triangle__37x4H",container:"Message_container__3i1k0",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG"}},21:function(e,t,n){e.exports={header:"Header_header__1amup",link:"Header_link__1oUIl",menu:"Header_menu__1_jqh"}},22:function(e,t,n){e.exports={greeting:"Greeting_greeting__21ydZ",count:"Greeting_count__2ZvGI"}},26:function(e,t,n){e.exports={text:"SuperCheckbox_text__pb5Bj",slideSwitch:"SuperCheckbox_slideSwitch__1r_4Q",slideSwitchSlider:"SuperCheckbox_slideSwitchSlider__1eFwi"}},29:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},32:function(e,t,n){e.exports={btn:"SuperButton_btn__3MgTu",red:"SuperButton_red__1kaz_",active:"SuperButton_active__2EPrN"}},33:function(e,t,n){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",some:"HW12_some__2eRaq","some-text":"HW12_some-text__1-Wyv"}},45:function(e,t,n){},46:function(e,t,n){e.exports={column:"HW4_column__2ZS4I"}},47:function(e,t,n){e.exports={customspan:"SuperEditable_customspan__2g636"}},48:function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa"}},49:function(e,t,n){e.exports={customRadio:"SuperRadio_customRadio__3mRyO"}},51:function(e,t,n){e.exports={range:"SuperRange_range__2K0wQ"}},58:function(e,t,n){},8:function(e,t,n){e.exports={affairs:"Affairs_affairs__HryGq",affair:"Affairs_affair__179X1",item:"Affairs_item__1BYAz",itempriority:"Affairs_itempriority__3MqBV",delete:"Affairs_delete__36fAN"}},83:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),i=(n(58),n(45)),o=n.n(i),j=n(16),l=n(21),u=n.n(l),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.header,children:[Object(d.jsx)(j.b,{to:"/pre-junior",className:u.a.link,children:"pre-junior"}),Object(d.jsx)(j.b,{to:"/junior",className:u.a.link,children:"junior"}),Object(d.jsx)(j.b,{to:"/juniorplus",className:u.a.link,children:"junior+"}),Object(d.jsx)("div",{className:u.a.menu,children:"pages"})]})},h=n(15),O=n.n(h);var x=function(e){return Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("img",{className:O.a.avatar,src:e.avatar}),Object(d.jsx)("div",{className:O.a.triangle}),Object(d.jsxs)("div",{className:O.a.container,children:[Object(d.jsx)("div",{className:O.a.name,children:e.name}),Object(d.jsx)("div",{className:O.a.text,children:e.message}),Object(d.jsx)("div",{className:O.a.time,children:e.time})]})]})},m="https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg",f="\u0412\u0438\u043a\u0442\u043e\u0440 \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447",p="\u0414\u043e\u043c\u0430\u0448\u043a\u0443 \u0441\u0434\u0435\u043b\u0430\u043b?",v="20:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)(x,{avatar:m,name:f,message:p,time:v}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_=n(3),k=n(8),C=n.n(k),y=n(4),N=n(6),w=n(32),S=n.n(w),H=function(e){var t=e.red,n=e.className,c=Object(N.a)(e,["red","className"]),a="".concat(t?S.a.red:S.a.btn," ").concat(n);return Object(d.jsx)("button",Object(y.a)({className:a},c))};var T=function(e){return Object(d.jsxs)("div",{className:C.a.affair,children:[Object(d.jsx)("div",{className:C.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:C.a.itempriority,children:e.affair.priority}),Object(d.jsx)(H,{className:C.a.delete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var E=function(e){var t=e.data.map((function(t){return Object(d.jsx)(T,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=C.a.filter+" "+("all"===e.filter?C.a.active:""),c=C.a.filter+" "+("high"===e.filter?C.a.active:""),a=C.a.filter+" "+("middle"===e.filter?C.a.active:""),r=C.a.filter+" "+("low"===e.filter?C.a.active:"");return Object(d.jsxs)("div",{className:C.a.affairs,children:[t,Object(d.jsx)(H,{onClick:function(){e.setFilter("all")},className:n,value:"all",children:"All"}),Object(d.jsx)(H,{onClick:function(){e.setFilter("high")},className:c,value:"high",children:"High"}),Object(d.jsx)(H,{onClick:function(){e.setFilter("middle")},className:a,value:"middle",children:"Middle"}),Object(d.jsx)(H,{onClick:function(){e.setFilter("low")},className:r,value:"low",children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(c.useState)(A),t=Object(_.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(_.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(E,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},R=n(28),F=n(22),M=n.n(F),L=n(29),B=n.n(L),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(B.a.error," ").concat(i||""),l=" ".concat(r?B.a.errorInput:B.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(y.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},G=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers;a?M.a.errorInput:M.a.input;return Object(d.jsxs)("div",{className:M.a.greeting,children:[Object(d.jsx)("div",{children:Object(d.jsx)(W,{value:t,onChange:n,error:a})}),Object(d.jsx)(H,{className:M.a.button,onClick:c,disabled:!t,children:"add"}),Object(d.jsx)("div",{className:M.a.count,children:r})]})},D=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(_.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),j=Object(_.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(G,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&u("")):(s&&i(""),u("name is required"))},addUser:function(){n(s),i(""),alert("Hello  ".concat(s,"!"))},error:l,totalUsers:b})},P=n(100);var U=function(){var e=Object(c.useState)([]),t=Object(_.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(D,{users:n,addUserCallback:function(e){a([{_id:Object(P.a)(),name:e}].concat(Object(R.a)(n))),console.log(n)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=n(46),q=n.n(J),K=n(26),X=n.n(K),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.custom_checkbox," ").concat(c||"");return Object(d.jsxs)("label",{className:X.a.slideSwitch,children:[Object(d.jsx)("input",Object(y.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),Object(d.jsx)("span",{className:X.a.slideSwitchSlider}),a&&Object(d.jsx)("span",{className:X.a.text,children:a})]})};var Y=function(){var e=Object(c.useState)(""),t=Object(_.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(_.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(W,{value:n,onChangeText:a,onEnter:s,error:r}),Object(d.jsx)(W,{}),Object(d.jsx)(H,{children:"default"}),Object(d.jsx)(H,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(H,{disabled:!0,children:"disabled"}),Object(d.jsx)(z,{checked:j,onChangeChecked:l,children:"Homework "}),Object(d.jsx)(z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Z=n(47),Q=n.n(Z),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(_.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,b=l.onDoubleClick,h=l.className,O=Object(N.a)(l,["children","onDoubleClick","className"]),x="".concat(Q.a.customspan," ").concat(h);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(W,Object(y.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("span",Object(y.a)(Object(y.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},O),{},{children:u||r.value}))})})};function V(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}V("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(c.useState)(""),t=Object(_.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)($,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(H,{onClick:function(){V("editable-span-value",n)},children:"save"}),Object(d.jsx)(H,{onClick:function(){a(ee("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(I,{}),Object(d.jsx)(U,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(te,{})]})};var ce=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ae=n(2),re=n(48),se=n.n(re),ie=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=Object(N.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e){return Object(d.jsx)("option",{children:e})})):[];return Object(d.jsx)("select",Object(y.a)(Object(y.a)({className:se.a.select,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},a),{},{children:r}))},oe=n(49),je=n.n(oe),le=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{className:je.a.customRadio,children:[Object(d.jsx)("input",{type:"radio",name:t,checked:c===e,value:e,onChange:s}),Object(d.jsx)("span",{children:e})]},t+"-"+n)})})):[];return Object(d.jsx)(d.Fragment,{children:i})},ue=["React","HTML","JS"];var de=function(){var e=Object(c.useState)(ue[1]),t=Object(_.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{style:{marginBottom:"50px",marginLeft:"10px"},children:Object(d.jsx)(ie,{options:ue,value:n,onChangeOption:a})}),Object(d.jsx)("div",{style:{marginLeft:"10px"},children:Object(d.jsx)(le,{name:"radio",options:ue,value:n,onChangeOption:a})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},be=function(e){return{type:"sort",payload:e}},he=function(e,t){switch(t.type){case"sort":var n=Object(R.a)(e);return"up"===t.payload&&n.sort((function(e,t){return e.name>t.name?-1:1})),"down"===t.payload&&n.sort((function(e,t){return e.name>t.name?1:-1})),n;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},Oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var xe=function(){var e=Object(c.useState)(Oe),t=Object(_.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"300px"},children:[Object(d.jsx)("span",{children:e.name}),Object(d.jsx)("span",{children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsx)(H,{style:{width:"100px"},onClick:function(){return a(he(Oe,be("up")))},children:"sort up"}),Object(d.jsx)(H,{style:{width:"100px"},onClick:function(){return a(he(Oe,be("down")))},children:"sort down"}),Object(d.jsx)(H,{style:{width:"100px"},onClick:function(){return a(he(Oe,{type:"check",payload:50}))},children:"check age"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var me=function(){var e=Object(c.useState)(0),t=Object(_.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(new Date),s=Object(_.a)(r,2),i=s[0],o=s[1],j=Object(c.useState)(!1),l=Object(_.a)(j,2),u=l[0],b=l[1],h=function(){clearInterval(n)},O=i.getHours()+":"+i.getMinutes()+":"+i.getSeconds(),x=i.getDate()+"."+i.getMonth()+"."+i.getFullYear();return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold"},onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:O}),u?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)(H,{onClick:function(){h();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(d.jsx)(H,{onClick:h,children:"stop"})]})]})};var fe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(me,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var pe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(de,{}),Object(d.jsx)(xe,{}),Object(d.jsx)(fe,{})]})},ve=n(14),ge={isLoading:!1},_e=function(e){return{type:"CHANGE-LOADING",loadingStatus:e}};var ke=function(){var e=Object(ve.c)((function(e){return e.loading.isLoading})),t=Object(ve.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",e?Object(d.jsx)("div",{children:"\u041a\u0440\u0443\u0442\u0438\u043b\u043a\u0430"}):Object(d.jsx)("div",{children:Object(d.jsx)(H,{onClick:function(){t(_e(!0)),setTimeout((function(){t(_e(!1))}),2e3)},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Ce=n(51),ye=n.n(Ce),Ne=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,a=Object(N.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(ye.a.range," ").concat(c||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(y.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},a))})},we=n(99),Se=n(98),He=Object(Se.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}}),Te=function(e){var t=e.onChangeRange,n=e.value,c=e.min,a=e.max,r=e.step,s=He();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(we.a,{classes:s,style:{width:"200px",padding:"10px"},color:"primary",onChange:function(e,n){t&&t(n)},min:c,max:a,step:r,value:n})})};var Ee=function(){var e=Object(c.useState)(0),t=Object(_.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([1,100]),s=Object(_.a)(r,2),i=s[0],o=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 11",Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{style:{marginRight:"15px"},children:n}),Object(d.jsx)(Ne,{onChangeRange:function(e){a(e),o([e,i[1]])},value:n})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{style:{marginRight:"15px"},children:n}),Object(d.jsx)(Te,{onChangeRange:function(e){a(e[0]),o(e)},value:i,min:0,max:100,step:1}),Object(d.jsx)("span",{style:{marginLeft:"15px"},children:i[1]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Ae=n(33),Ie=n.n(Ae),Re={theme:"dark"},Fe=["dark","red","some"];var Me=function(){var e=Object(ve.c)((function(e){return e.themeSelector.theme})),t=Object(ve.b)(),n=Object(c.useState)(e),a=Object(_.a)(n,2),r=a[0],s=a[1];return Object(d.jsxs)("div",{className:Ie.a[e],children:[Object(d.jsx)("hr",{}),Object(d.jsx)("span",{className:Ie.a[e+"-text"],children:"homeworks 12"}),Object(d.jsx)("div",{children:Object(d.jsx)(le,{name:"radio",options:Fe,value:r,onChangeOption:function(e){t(function(e){return{type:"CHANGE-THEME",theme:e}}(e)),s(e)}})}),Object(d.jsx)("hr",{})]})},Le=n(52),Be=n.n(Le).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),We=function(e){return Be.post("",{success:e})},Ge=function(){var e=Object(c.useState)(!1),t=Object(_.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(d.jsx)(H,{onClick:function(){We(n).then((function(e){return console.log(e.data.info)})).catch((function(e){console.log(Object(y.a)({},e)),console.log(e.response?e.response.data.errorText:e.message)}))},children:"Click me"}),Object(d.jsx)(z,{checked:n,onChange:function(e){a(e.currentTarget.checked)}})]})},De=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 13",Object(d.jsx)("div",{children:Object(d.jsx)(Ge,{})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Pe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ke,{}),Object(d.jsx)(Ee,{}),Object(d.jsx)(Me,{}),Object(d.jsx)(De,{})]})},Ue="/pre-junior",Je="/junior",qe="/juniorplus";var Ke=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(ae.c,{children:[Object(d.jsx)(ae.a,{path:Ue,element:Object(d.jsx)(ne,{})}),Object(d.jsx)(ae.a,{path:Je,element:Object(d.jsx)(pe,{})}),Object(d.jsx)(ae.a,{path:qe,element:Object(d.jsx)(Pe,{})}),Object(d.jsx)(ae.a,{element:Object(d.jsx)(ce,{})})]})})};var Xe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(Ke,{})]})};var ze=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Xe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=n(34),Ze=Object(Ye.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING":return Object(y.a)(Object(y.a)({},e),{},{isLoading:t.loadingStatus});default:return e}},themeSelector:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(y.a)(Object(y.a)({},e),{},{theme:t.theme});default:return e}}}),Qe=Object(Ye.b)(Ze),$e=Qe;window.store=Qe,s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ve.a,{store:$e,children:Object(d.jsx)(j.a,{children:Object(d.jsx)(ze,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.15ab2ebb.chunk.js.map