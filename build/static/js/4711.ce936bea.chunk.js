"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[4711],{34711:(e,s,r)=>{r.r(s),r.d(s,{default:()=>x});var a=r(65043),t=r(40799),d=r(38628),i=r(61072),n=r(78602),l=r(64196);const c={orderId:"1001",buyerDetails:{buyerName:"Ravi Singh",email:"ravisingh@example.com",phone:"123-456-7890",shippingAddress:{street:"123 Main St",city:"Anytown",state:"CA",zip:"12345",country:"USA"}},productList:[{itemId:"A101",itemName:"Laptop",quantity:1,price:1200},{itemId:"A102",itemName:"Mouse",quantity:1,price:20}],paymentStatus:"Paid",totalAmount:1220,orderDate:"2024-09-20",status:"Shipped",trackingId:"TRACK123456"};var o=r(70579);const x=()=>{const[e,s]=(0,a.useState)(c);return(0,t.HU)({title:"Order Management",breadCrumbItems:[{path:"/order-management/detail",label:"detail"},{path:"/order-management/detail",label:"detail",active:!0}]}),(0,o.jsx)(d.A,{className:"my-4",children:(0,o.jsxs)(d.A.Body,{children:[(0,o.jsx)("h4",{className:"header-title",children:"Order View"}),(0,o.jsx)("p",{className:"text-muted font-14 mb-4",children:"Effortlessly track and manage your orders in one place. Our intuitive order view provides all the details you need\u2014shipping information, payment status, and product insights\u2014ensuring a seamless experience from purchase to delivery."}),(0,o.jsxs)("div",{className:"order-detail-view",children:[(0,o.jsx)(i.A,{className:"mb-4 align-items-center",children:(0,o.jsxs)(n.A,{xs:10,children:[(0,o.jsx)("h5",{className:"text-muted",children:"Buyer Details"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Order ID:"})," ",e.orderId]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Name:"})," ",e.buyerDetails.buyerName]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Email:"})," ",e.buyerDetails.email]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Phone:"})," ",e.buyerDetails.phone]})]})}),(0,o.jsx)(i.A,{className:"mb-4 align-items-center",children:(0,o.jsxs)(n.A,{xs:10,children:[(0,o.jsx)("h5",{className:"text-muted",children:"Address"}),(0,o.jsxs)(i.A,{children:[(0,o.jsx)(n.A,{md:12,children:(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Street:"})," ",e.buyerDetails.shippingAddress.street]})}),(0,o.jsx)(n.A,{md:4,children:(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"City:"})," ",e.buyerDetails.shippingAddress.city]})}),(0,o.jsx)(n.A,{md:4,children:(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"State:"})," ",e.buyerDetails.shippingAddress.state]})}),(0,o.jsx)(n.A,{md:4,children:(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Zip Code:"})," ",e.buyerDetails.shippingAddress.zip]})}),(0,o.jsx)(n.A,{md:12,children:(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Country:"})," ",e.buyerDetails.shippingAddress.country]})})]})]})}),(0,o.jsx)(i.A,{className:"mb-4",children:(0,o.jsxs)(n.A,{xs:12,children:[(0,o.jsx)("h5",{className:"text-muted",children:"Product List"}),(0,o.jsxs)(l.A,{striped:!0,bordered:!0,hover:!0,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Item Name"}),(0,o.jsx)("th",{children:"Quantity"}),(0,o.jsx)("th",{children:"Price"})]})}),(0,o.jsx)("tbody",{children:e.productList.map((e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.itemName}),(0,o.jsx)("td",{children:e.quantity}),(0,o.jsxs)("td",{children:["\u20b9",e.price.toFixed(2)]})]},e.itemId)))})]})]})}),(0,o.jsxs)(i.A,{className:"payment-info mt-4",children:[(0,o.jsx)(n.A,{xs:12,className:"mb-3",children:(0,o.jsx)("h5",{className:"text-muted",children:"Payment Information"})}),(0,o.jsxs)(n.A,{xs:6,children:[(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:"Payment Status:"})}),(0,o.jsx)("p",{children:e.paymentStatus})]}),(0,o.jsxs)(n.A,{xs:6,className:"text-end",children:[(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:"Total Amount:"})}),(0,o.jsxs)("p",{className:"text-success",style:{fontSize:"1.5rem",fontWeight:"bold"},children:["\u20b9",e.totalAmount.toFixed(2)]})]})]}),(0,o.jsxs)(i.A,{className:"order-info mt-3",children:[(0,o.jsxs)(n.A,{xs:6,children:[(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:"Order Date:"})}),(0,o.jsx)("p",{children:new Date(e.orderDate).toLocaleDateString()})]}),(0,o.jsxs)(n.A,{xs:6,className:"text-end",children:[(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:"Status:"})}),(0,o.jsx)("p",{children:e.status})]}),(0,o.jsxs)(n.A,{xs:6,className:"mt-3",children:[(0,o.jsx)("p",{children:(0,o.jsx)("strong",{children:"Tracking ID:"})}),(0,o.jsx)("p",{children:e.trackingId||"N/A"})]})]})]})]})})}},38628:(e,s,r)=>{r.d(s,{A:()=>R});var a=r(98139),t=r.n(a),d=r(65043),i=r(67852),n=r(70579);const l=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d="div",...l}=e;return a=(0,i.oU)(a,"card-body"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));l.displayName="CardBody";const c=l,o=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d="div",...l}=e;return a=(0,i.oU)(a,"card-footer"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));o.displayName="CardFooter";const x=o;var m=r(11778);const h=d.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,as:l="div",...c}=e;const o=(0,i.oU)(r,"card-header"),x=(0,d.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,n.jsx)(m.A.Provider,{value:x,children:(0,n.jsx)(l,{ref:s,...c,className:t()(a,o)})})}));h.displayName="CardHeader";const j=h,p=d.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,variant:d,as:l="img",...c}=e;const o=(0,i.oU)(r,"card-img");return(0,n.jsx)(l,{ref:s,className:t()(d?`${o}-${d}`:o,a),...c})}));p.displayName="CardImg";const u=p,f=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d="div",...l}=e;return a=(0,i.oU)(a,"card-img-overlay"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));f.displayName="CardImgOverlay";const N=f,y=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d="a",...l}=e;return a=(0,i.oU)(a,"card-link"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));y.displayName="CardLink";const b=y;var g=r(4488);const A=(0,g.A)("h6"),v=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d=A,...l}=e;return a=(0,i.oU)(a,"card-subtitle"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));v.displayName="CardSubtitle";const C=v,w=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d="p",...l}=e;return a=(0,i.oU)(a,"card-text"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));w.displayName="CardText";const P=w,$=(0,g.A)("h5"),D=d.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:d=$,...l}=e;return a=(0,i.oU)(a,"card-title"),(0,n.jsx)(d,{ref:s,className:t()(r,a),...l})}));D.displayName="CardTitle";const I=D,S=d.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,bg:d,text:l,border:o,body:x=!1,children:m,as:h="div",...j}=e;const p=(0,i.oU)(r,"card");return(0,n.jsx)(h,{ref:s,...j,className:t()(a,p,d&&`bg-${d}`,l&&`text-${l}`,o&&`border-${o}`),children:x?(0,n.jsx)(c,{children:m}):m})}));S.displayName="Card";const R=Object.assign(S,{Img:u,Title:I,Subtitle:C,Body:c,Link:b,Text:P,Header:j,Footer:x,ImgOverlay:N})},11778:(e,s,r)=>{r.d(s,{A:()=>t});const a=r(65043).createContext(null);a.displayName="CardHeaderContext";const t=a},64196:(e,s,r)=>{r.d(s,{A:()=>l});var a=r(98139),t=r.n(a),d=r(65043),i=r(67852),n=r(70579);const l=d.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,striped:d,bordered:l,borderless:c,hover:o,size:x,variant:m,responsive:h,...j}=e;const p=(0,i.oU)(r,"table"),u=t()(a,p,m&&`${p}-${m}`,x&&`${p}-${x}`,d&&`${p}-${"string"===typeof d?`striped-${d}`:"striped"}`,l&&`${p}-bordered`,c&&`${p}-borderless`,o&&`${p}-hover`),f=(0,n.jsx)("table",{...j,className:u,ref:s});if(h){let e=`${p}-responsive`;return"string"===typeof h&&(e=`${e}-${h}`),(0,n.jsx)("div",{className:e,children:f})}return f}))},4488:(e,s,r)=>{r.d(s,{A:()=>n});var a=r(65043),t=r(98139),d=r.n(t),i=r(70579);const n=e=>a.forwardRef(((s,r)=>(0,i.jsx)("div",{...s,ref:r,className:d()(s.className,e)})))}}]);
//# sourceMappingURL=4711.ce936bea.chunk.js.map