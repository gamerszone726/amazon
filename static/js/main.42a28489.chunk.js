(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(20),i=c.n(s),r=(c(42),c(23)),o=(c(43),c(44),c(34)),d=c.n(o),j=c(35),l=c.n(j),u=c(33),m=c.n(u),b=c(22),O=c(3);var h=function(e){var t=e.cartItems;return Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsx)("div",{className:"Header__Logo",children:Object(O.jsx)("img",{src:"https://i.imgur.com/7I9Was5.jpg",alt:""})}),Object(O.jsxs)("div",{className:"HeaderOptionAddress",children:[Object(O.jsx)(m.a,{}),Object(O.jsxs)("div",{className:"HeaderOption",children:[Object(O.jsx)("span",{className:"OptionLineOne",children:"Hello"}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"OptionLineTwo",children:"Select your Address"})]})]}),Object(O.jsxs)("div",{className:"HeaderSearch",children:[Object(O.jsx)("input",{type:"text"}),Object(O.jsx)("div",{className:"HeaderSearchIconContainer",children:Object(O.jsx)(d.a,{})})]}),Object(O.jsxs)("div",{className:"HeaderNavItems",children:[Object(O.jsxs)("div",{className:"HeaderOption",children:[Object(O.jsx)("div",{className:"OptionLineOne",children:"Hello,Sign in"}),Object(O.jsx)("div",{className:"OptionLineTwo",children:"Accounts & Lists"})]}),Object(O.jsxs)("div",{className:"HeaderOption",children:[Object(O.jsx)("div",{className:"OptionLineOne",children:"Returns"}),Object(O.jsx)("div",{className:"OptionLineTwo",children:"& Orders"})]}),Object(O.jsx)("div",{className:"HeaderOptionCart",children:Object(O.jsxs)(b.b,{to:"/cart",children:[Object(O.jsx)(l.a,{}),Object(O.jsx)("div",{className:"CartCount",children:function(){var e=0;return t.forEach((function(t){e+=t.product.quantity})),e}()})]})})]})]})},x=(c(51),c(52),c(53),c(30)),p=(x.a.initializeApp({apiKey:"AIzaSyD89T02Yn9-ZrDCE3CopfvdiWHBeGRcgLc",authDomain:"clone-94437.firebaseapp.com",projectId:"clone-94437",storageBucket:"clone-94437.appspot.com",messagingSenderId:"1074750725049",appId:"1:1074750725049:web:a12d3a2cb1bab3f45b7468",measurementId:"G-63QDFSCTDW"}),x.a.firestore());var v=function(e){for(var t=e.id,c=e.item,n=[],a=1;a<Math.max(c.quantity+1,20);a++)n.push(Object(O.jsxs)("option",{value:a,children:["Qty:",a]}));return Object(O.jsx)("div",{className:"CartItem__Container",children:Object(O.jsxs)("div",{className:"Cart__Item",children:[Object(O.jsx)("div",{className:"Image__Container",children:Object(O.jsx)("img",{src:c.image})}),Object(O.jsxs)("div",{className:"ItemInfo",children:[Object(O.jsx)("div",{className:"ItemTopInfo",children:Object(O.jsxs)("h2",{children:[" ",c.name," "]})}),Object(O.jsxs)("div",{className:"ItemBottomInfo",children:[Object(O.jsx)("div",{className:"ItemBottomQuantityInfo",children:Object(O.jsx)("select",{value:c.quantity,onChange:function(e){return c=e.target.value,void p.collection("cartItems").doc(t).update({quantity:parseInt(c)});var c},children:n})}),Object(O.jsx)("div",{className:"ItemBottomDeleteInfo",children:Object(O.jsx)("buttonDelete",{onClick:function(){p.collection("cartItems").doc(t).delete()},children:"Delete"})})]})]}),Object(O.jsxs)("div",{className:"Pricing",children:["$",c.price]})]})})};var f=function(e){var t=e.cartItems;return Object(O.jsxs)("div",{className:"CartItems__Container",children:[Object(O.jsx)("div",{className:"Title",children:Object(O.jsx)("h1",{children:"Shopping Cart"})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"ItemsContainer",children:t.map((function(e){return Object(O.jsx)(v,{id:e.id,item:e.product})}))})]})},N=(c(58),c(36));var I=function(e){var t=e.cartItems;return Object(O.jsxs)("div",{className:"CartTotal__Container",children:[Object(O.jsxs)("h2",{children:["SubTotal (",function(){var e=0;return t.forEach((function(t){e+=t.product.quantity})),e}()," items): ",Object(O.jsx)(N.a,{value:function(){var e=0;return t.forEach((function(t){e+=t.product.price*t.product.quantity})),e}(),displayType:"text",thousandSeparator:!0,prefix:"$"})]}),Object(O.jsx)("div",{className:"Button",children:Object(O.jsx)("button",{children:"Proceed to Checkout"})})]})};var g=function(e){var t=e.cartItems;return Object(O.jsxs)("div",{className:"Container",children:[Object(O.jsx)(f,{cartItems:t}),Object(O.jsx)(I,{cartItems:t})]})};c(59),c(60);var C=function(e){var t=e.title,c=e.price,n=e.ratings,a=e.image,s=e.id;return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"Title",children:t}),Object(O.jsxs)("div",{className:"Price",children:["$",c]}),Object(O.jsx)("div",{className:"Ratings",children:Array(n).fill().map((function(e){return Object(O.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(O.jsx)("img",{src:a}),Object(O.jsx)("div",{className:"Action",children:Object(O.jsx)("div",{className:"button",children:Object(O.jsx)("button",{onClick:function(){console.log(s);var e=p.collection("cartItems").doc(s);e.get().then((function(n){console.log(n),n.exists?e.update({quantity:n.data().quantity+1}):p.collection("cartItems").doc(s).set({name:t,price:c,image:a,quantity:1})}))},children:"Add to Cart"})})})]})};var y=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){p.collection("products").onSnapshot((function(e){var t;t=e.docs.map((function(e){return{id:e.id,product:e.data()}})),a(t)}))}),[]),console.log(c),Object(O.jsx)("div",{className:"Container",children:Object(O.jsx)("div",{className:"Banner",children:Object(O.jsx)("div",{className:"Content",children:c.map((function(e){return Object(O.jsx)(C,{title:e.product.name,price:e.product.price,ratings:e.product.ratings,image:e.product.image,id:e.id})}))})})})},S=c(9);var H=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){console.log("Hey Cart Items"),p.collection("cartItems").onSnapshot((function(e){var t;t=e.docs.map((function(e){return{id:e.id,product:e.data()}})),a(t)}))}),[]),console.log(c),Object(O.jsx)(b.a,{children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(h,{cartItems:c}),Object(O.jsxs)(S.c,{children:[Object(O.jsx)(S.a,{path:"/cart",children:Object(O.jsx)(g,{cartItems:c})}),Object(O.jsx)(S.a,{path:"/",children:Object(O.jsx)(y,{})})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(H,{})}),document.getElementById("root")),T()}},[[62,1,2]]]);
//# sourceMappingURL=main.42a28489.chunk.js.map