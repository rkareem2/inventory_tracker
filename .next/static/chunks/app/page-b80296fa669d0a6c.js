(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2966:function(e,t,n){Promise.resolve().then(n.bind(n,3656))},3656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(7437);n(6648);var i=n(2265),l=n(5236),r=n(7175),o=n(9842);let s=(0,l.ZF)({apiKey:"AIzaSyCetRguatOfP-9VVVL_2Tc2oFdKuBqcDLg",authDomain:"inventory-management-e66fd.firebaseapp.com",projectId:"inventory-management-e66fd",storageBucket:"inventory-management-e66fd.appspot.com",messagingSenderId:"994554069637",appId:"1:994554069637:web:63e731be312e0fbc769fec",measurementId:"G-KX5RG77MMT"});(0,r.IH)(s);let d=(0,o.ad)(s);var c=n(1326),h=n(511),u=n(5965),f=n(8620),p=n(8700),m=n(4172),x=n(270),v=n(4696),y=n(2879);let g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"white",border:"2px solid #000",boxShadow:24,p:4,display:"flex",flexDirection:"column",gap:3};function j(){let[e,t]=(0,i.useState)([]),[n,l]=(0,i.useState)(!1),[r,s]=(0,i.useState)(""),j=async()=>{let e=await (0,o.PL)((0,o.IO)((0,o.hJ)(d,"inventory"))),n=[];e.forEach(e=>{n.push({name:e.id,...e.data()})}),t(n)},w=async e=>{let t=(0,o.JU)((0,o.hJ)(d,"inventory"),e),n=await (0,o.QT)(t);if(n.exists()){let{quantity:e}=n.data();await (0,o.pl)(t,{quantity:e+1})}else await (0,o.pl)(t,{quantity:1});await j()},b=async e=>{let t=(0,o.JU)((0,o.hJ)(d,"inventory"),e),n=await (0,o.QT)(t);if(n.exists()){let{quantity:e}=n.data();1===e?await (0,o.oe)(t):await (0,o.pl)(t,{quantity:e-1})}await j()};(0,i.useEffect)(()=>{j()},[]);let Z=()=>l(!1);return(0,a.jsxs)(c.Z,{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:4,p:3,bgcolor:"#f8f9fa",children:[(0,a.jsx)(h.Z,{variant:"h2",color:"#333",gutterBottom:!0,children:"Inventory Management"}),(0,a.jsx)(u.Z,{variant:"contained",onClick:()=>l(!0),children:"Add New Item"}),(0,a.jsx)(f.Z,{open:n,onClose:Z,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(c.Z,{sx:g,children:[(0,a.jsx)(h.Z,{id:"modal-modal-title",variant:"h6",children:"Add Item"}),(0,a.jsxs)(p.Z,{width:"100%",direction:"row",spacing:2,children:[(0,a.jsx)(m.Z,{label:"Item",variant:"outlined",fullWidth:!0,value:r,onChange:e=>s(e.target.value)}),(0,a.jsx)(u.Z,{variant:"contained",onClick:()=>{w(r),s(""),Z()},children:"Add"})]})]})}),(0,a.jsxs)(c.Z,{width:"800px",children:[(0,a.jsx)(h.Z,{variant:"h4",color:"#333",textAlign:"center",gutterBottom:!0,children:"Inventory Items"}),(0,a.jsx)(p.Z,{spacing:3,children:e.map(e=>{let{name:t,quantity:n}=e;return(0,a.jsxs)(x.Z,{variant:"outlined",sx:{bgcolor:"#e9ecef"},children:[(0,a.jsxs)(v.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsx)(h.Z,{variant:"h5",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,a.jsxs)(h.Z,{variant:"h6",children:["Quantity: ",n]})]}),(0,a.jsx)(y.Z,{sx:{justifyContent:"flex-end"},children:(0,a.jsx)(u.Z,{variant:"outlined",onClick:()=>b(t),children:"Remove"})})]},t)})})]})]})}}},function(e){e.O(0,[358,438,971,23,744],function(){return e(e.s=2966)}),_N_E=e.O()}]);