(this["webpackJsonpmon-projet"]=this["webpackJsonpmon-projet"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),l=n(16),i=n.n(l),a=(n(28),n(29),n(17)),r=n(18),o=n(12),u=n(23),j=n(22),d=(n(30),n(19)),b=n.n(d),m=(n(38),n(0)),h=function(e){var t=e.isGood,n=e.handleOnClick;return Object(m.jsx)("div",{onClick:function(){n(t)},className:!0===t?"indicateur isGood":!1===t?"indicateur isNotGood":"isNull"})},O=n(2),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).handleScan=s.handleScan.bind(Object(o.a)(s)),s.state={isGood:null,redirectTo:!1},s}return Object(r.a)(n,[{key:"addHistory",value:function(e){var t=JSON.parse(localStorage.getItem("historyAllergens"));null===t&&(t=[]),t.push(e),localStorage.setItem("historyAllergens",JSON.stringify(t))}},{key:"handleScan",value:function(e){if(null===this.state.isGood){console.log("Scanning...");var t=JSON.parse(e);if(console.log(t),(null===t||void 0===t?void 0:t.allergens)&&(null===t||void 0===t?void 0:t.product)&&Array.isArray(t.allergens)){this.addHistory(t);var n=t.allergens,s=JSON.parse(localStorage.getItem("userAllergens"));if(localStorage.setItem("productAllergens",JSON.stringify(t)),null!==s){for(var c=0;c<s.length;c++)for(var l=0;l<n.length;l++)if(s[c]===n[l])return void this.setState({isGood:!1});this.setState({isGood:!0})}else this.setState({isGood:!0})}}}},{key:"handleError",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;if(!1!==this.state.redirectTo)return Object(m.jsx)(O.a,{to:this.state.redirectTo});return Object(m.jsx)("div",{children:Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("div",{className:"qr-container",style:{display:"flex",justifyContent:"center",marginTop:"-50px"},onClick:function(){e.setState({isGood:null})},children:Object(m.jsx)(b.a,{delay:100,style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center"},onError:this.handleError,onScan:this.handleScan})}),Object(m.jsx)(h,{isGood:this.state.isGood,handleOnClick:function(t){!0===t&&e.setState({redirectTo:"/allergens"}),!1===t&&e.setState({redirectTo:"/allergens"}),null===t&&console.log("C'est null sm, mais c'est bizarre que ca arrive hummmm")}})]})})}}]),n}(s.Component),g=n(4),v=(n(40),n(13));var p=function(){return Object(m.jsxs)("div",{className:"Scan",children:[Object(m.jsx)(x,{}),Object(m.jsx)(g.b,{to:"/menu",className:"menu-btn",children:Object(m.jsx)(v.a,{})})]})};n(41);var f=function(){return Object(m.jsx)("div",{className:"background",children:Object(m.jsxs)("div",{className:"page-menu",children:[Object(m.jsx)("div",{className:"title",children:"MENU"}),Object(m.jsx)("div",{className:"btn btn-white",children:Object(m.jsx)(g.b,{to:"/",children:"JE SCANNE"})}),Object(m.jsx)("div",{className:"btn btn-white",children:Object(m.jsx)(g.b,{to:"/myallergens",children:"MES ALLERGIES"})}),Object(m.jsx)("div",{className:"btn btn-white",children:Object(m.jsx)(g.b,{to:"/community",children:"COMMUNAUT\xc9"})}),Object(m.jsx)("div",{className:"btn btn-white",children:Object(m.jsx)(g.b,{to:"/params",children:"PARM\xc8TRES"})}),Object(m.jsx)("div",{className:"btn btn-white",children:Object(m.jsx)(g.b,{to:"/historical",children:"HISTORIQUE"})})]})})};n(42);var N=function(){var e=JSON.parse(localStorage.getItem("productAllergens")),t=JSON.parse(localStorage.getItem("userAllergens"));return null===t&&(t=[]),Object(m.jsxs)("div",{className:"background",children:[Object(m.jsxs)("div",{className:"page-menu",children:[Object(m.jsx)("div",{className:"title",children:"Allerg\xe8nes"}),Object(m.jsx)("div",{className:"product",children:e.product}),e.allergens.map((function(e,n){var s=t.includes(e);return Object(m.jsx)("div",{className:s?"btn btn-white isRisky":"btn btn-white",children:e},n)}))]}),Object(m.jsx)("div",{className:"btn-retour",children:Object(m.jsx)(g.b,{to:"/",children:"Retour"})})]})},y=n(15),S=(n(43),n(21)),k=function(e){var t=Object(S.a)(),n=t.register,c=t.getValues,l=JSON.parse(localStorage.getItem("userAllergens"));null===l&&(l=[]),Object(s.useEffect)((function(){return function(){localStorage.setItem("userAllergens",JSON.stringify(c("allergens")))}}));return Object(m.jsx)("form",{className:"form-allergens",children:Object(m.jsx)("select",Object(y.a)(Object(y.a)({className:"select-form-allergens",name:"allergens"},n("allergens")),{},{multiple:!0,children:[{key:"gluten",value:"Gluten"},{key:"oeuf",value:"Oeuf"},{key:"poisson",value:"Poisson"},{key:"arachide",value:"Arachide"},{key:"soja",value:"Soja"},{key:"lait",value:"Lait"},{key:"amande",value:"Amande"},{key:"noisette",value:"Noisette"},{key:"cajou",value:"Cajou"},{key:"c\xe9same",value:"C\xe9same"},{key:"c\xe9leri",value:"C\xe9leri"}].map((function(e,t){var n=l.includes(e.key);return Object(m.jsx)("option",{className:"option-select",value:e.key,selected:n,children:e.value},t)}))}))})},I=(n(45),function(e){return Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(g.b,{to:"/menu",children:Object(m.jsx)(v.a,{})})})})}),A=(n(46),function(e){return Object(m.jsxs)("div",{className:"background",children:[Object(m.jsx)("div",{className:"page-title",children:"Mes allergies"}),Object(m.jsx)(k,{}),Object(m.jsx)(I,{})]})}),C=n(6),J=(n(47),function(e){var t=e.element,n=Object(s.useState)(null),c=Object(C.a)(n,2),l=c[0],i=c[1];if(null!==l)return Object(m.jsx)(O.a,{to:"/allergens"});return Object(m.jsx)("div",{onClick:function(){localStorage.setItem("productAllergens",JSON.stringify(t)),i("/allergens")},className:"liink",children:Object(m.jsx)("div",{className:"historyItem",children:Object(m.jsx)("div",{className:"title",children:t.product})})})}),E=(n(48),function(e){var t=JSON.parse(localStorage.getItem("historyAllergens"));return Object(m.jsxs)("div",{className:"background",children:[Object(m.jsx)("div",{className:"page-title",children:"Historique"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(m.jsx)(J,{element:e},t)})),Object(m.jsx)(I,{})]})}),G=(n(49),function(e){var t=e.title,n=e.content,s=e.date;return Object(m.jsxs)("div",{className:"post",children:[Object(m.jsx)("div",{className:"title",children:t}),Object(m.jsx)("div",{className:"content",children:n}),Object(m.jsx)("div",{className:"date",children:s})]})}),P=(n(50),function(e){return Object(m.jsxs)("div",{className:"background",children:[Object(m.jsx)("div",{className:"page-title",children:"Communaut\xe9"}),Object(m.jsx)(G,{title:"Produit pr\xe9f\xe9r\xe9",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismo...",date:"12/12/2021"}),Object(m.jsx)(G,{title:"Nouveau chocolat",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod scelerisque...",date:"10/12/2021"}),Object(m.jsx)(G,{title:"Des id\xe9es de pr\xe9parations ?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod sc...",date:"09/12/2021"}),Object(m.jsx)(G,{title:"Produit pr\xe9f\xe9r\xe9",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismo...",date:"12/12/2021"}),Object(m.jsx)(G,{title:"Nouveau chocolat",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod scelerisque...",date:"10/12/2021"}),Object(m.jsx)(G,{title:"Des id\xe9es de pr\xe9parations ?",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nulla. Phasellus eget velit ac turpis euismod sc...",date:"09/12/2021"}),Object(m.jsx)(I,{})]})}),L=(n(51),function(e){return Object(m.jsxs)("div",{className:"background",children:[Object(m.jsx)("div",{className:"page-title",children:"Parametres"}),Object(m.jsx)("p",{style:{paddingLeft:"2em"},children:"Aucun param\xe8tres disponible."}),Object(m.jsx)(I,{})]})});var w=function(){return Object(m.jsx)(g.a,{children:Object(m.jsxs)(O.d,{children:[Object(m.jsx)(O.b,{exact:!0,path:"/menu",element:Object(m.jsx)(f,{})}),Object(m.jsx)(O.b,{exact:!0,path:"/allergens",element:Object(m.jsx)(N,{})}),Object(m.jsx)(O.b,{exact:!0,path:"/myallergens",element:Object(m.jsx)(A,{})}),Object(m.jsx)(O.b,{exact:!0,path:"/historical",element:Object(m.jsx)(E,{})}),Object(m.jsx)(O.b,{exact:!0,path:"/community",element:Object(m.jsx)(P,{})}),Object(m.jsx)(O.b,{exact:!0,path:"/params",element:Object(m.jsx)(L,{})}),Object(m.jsx)(O.b,{path:"/",element:Object(m.jsx)(p,{})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),l(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),T()}},[[52,1,2]]]);
//# sourceMappingURL=main.9538267c.chunk.js.map