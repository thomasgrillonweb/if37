(this["webpackJsonpmon-projet"]=this["webpackJsonpmon-projet"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(10),a=n.n(i),l=(n(22),n.p,n(23),n(11)),r=n(12),o=n(7),j=n(17),d=n(15),b=(n(24),n(13)),h=n.n(b),u=(n(32),n(1)),O=function(e){var t=e.isGood,n=e.handleOnClick;return Object(u.jsx)("div",{onClick:function(){n(t)},className:!0===t?"indicateur isGood":!1===t?"indicateur isNotGood":"isNull"})},x=n(2),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleScan=c.handleScan.bind(Object(o.a)(c)),c.state={isGood:null,redirectTo:!1},c}return Object(r.a)(n,[{key:"handleScan",value:function(e){e&&null===this.state.isGood&&("c'est ok"===e?this.setState({isGood:!0}):"c'est pas ok"===e?this.setState({isGood:!1}):console.log("null"))}},{key:"handleError",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;if(!1!==this.state.redirectTo)return Object(u.jsx)(x.a,{to:this.state.redirectTo});return Object(u.jsx)("div",{children:Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("div",{className:"qr-container",style:{display:"flex",justifyContent:"center",marginTop:"-50px"},onClick:function(){e.setState({isGood:null})},children:Object(u.jsx)(h.a,{delay:100,style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center"},onError:this.handleError,onScan:this.handleScan})}),Object(u.jsx)(O,{isGood:this.state.isGood,handleOnClick:function(t){!0===t&&e.setState({isGood:null}),!1===t&&e.setState({redirectTo:"/allergens"}),null===t&&console.log("C'est null sm, mais c'est bizarre que ca arrive hummmm")}})]})})}}]),n}(c.Component),v=n(4),f=(n(34),n(16));var N=function(){return Object(u.jsxs)("div",{className:"Scan",children:[Object(u.jsx)(m,{}),Object(u.jsx)(v.b,{to:"/menu",className:"menu-btn",children:Object(u.jsx)(f.a,{})})]})};n(35);var p=function(){return Object(u.jsx)("div",{className:"background",children:Object(u.jsxs)("div",{className:"page-menu",children:[Object(u.jsx)("div",{className:"title",children:"MENU"}),Object(u.jsx)("div",{className:"btn btn-white",children:Object(u.jsx)(v.b,{to:"/",children:"JE SCANNE"})}),Object(u.jsx)("div",{className:"btn btn-white",children:Object(u.jsx)(v.b,{to:"/allergies",children:"MES ALLERGIES"})}),Object(u.jsx)("div",{className:"btn btn-white",children:Object(u.jsx)(v.b,{to:"/community",children:"COMMUNAUT\xc9"})}),Object(u.jsx)("div",{className:"btn btn-white",children:Object(u.jsx)(v.b,{to:"/params",children:"PARM\xc8TRES"})}),Object(u.jsx)("div",{className:"btn btn-white",children:Object(u.jsx)(v.b,{to:"/historique",children:"HISTORIQUE"})})]})})};n(36);var g=function(){return Object(u.jsxs)("div",{className:"background",children:[Object(u.jsxs)("div",{className:"page-menu",children:[Object(u.jsx)("div",{className:"title",children:"Allerg\xe8nes"}),Object(u.jsx)("div",{className:"btn btn-white",children:"Petits pois"}),Object(u.jsx)("div",{className:"btn btn-white",children:"Arachide"})]}),Object(u.jsx)("div",{className:"btn-retour",children:Object(u.jsx)(v.b,{to:"/",children:"Retour"})})]})};var S=function(){return Object(u.jsx)(v.a,{children:Object(u.jsxs)(x.d,{children:[Object(u.jsx)(x.b,{exact:!0,path:"/menu",element:Object(u.jsx)(p,{})}),Object(u.jsx)(x.b,{exact:!0,path:"/allergens",element:Object(u.jsx)(g,{})}),Object(u.jsx)(x.b,{path:"/",element:Object(u.jsx)(N,{})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.12bc6b28.chunk.js.map