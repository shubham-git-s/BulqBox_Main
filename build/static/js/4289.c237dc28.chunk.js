(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[4289],{60247:(e,s,a)=>{"use strict";a.d(s,{A:()=>i});var t=a(51393),n=a(70579);const i=e=>{let{className:s,style:a,children:i,...l}=e;return(0,n.jsx)(t.A,{className:s,style:a,...l,children:i})}},74021:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});var t=a(65043),n=a(21467),i=a(35475),l=a(98139),c=a.n(l),r=a(36735),d=a(60247),m=a(73216),o=a(82306),u=a(70579);const A=e=>{let{item:s,linkClassName:a,subMenuClassNames:n,activeMenuItems:l,toggleMenu:r}=e;const[d,m]=(0,t.useState)(l.includes(s.key));(0,t.useEffect)((()=>{m(l.includes(s.key))}),[l,s]);return(0,u.jsxs)("li",{className:c()("side-nav-item",{"menuitem-active":d}),children:[(0,u.jsxs)(i.N_,{to:"#",onClick:e=>{e.preventDefault();const a=!d;return m(a),r&&r(s,a),!1},"data-menu-key":s.key,"aria-expanded":d,className:c()("has-arrow","side-sub-nav-link",a,{"menuitem-active":l.includes(s.key)?"active":""}),children:[s.icon&&(0,u.jsx)("i",{className:s.icon}),s.badge?(0,u.jsx)("span",{className:c()("badge","bg-"+s.badge.variant,"rounded-pill","float-end"),children:s.badge.text}):(0,u.jsx)("span",{className:"menu-arrow"}),(0,u.jsxs)("span",{children:[" ",s.label," "]})]}),(0,u.jsx)(o.A,{in:d,children:(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:c()(n),children:(s.children||[]).map(((e,s)=>(0,u.jsx)(t.Fragment,{children:e.children?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(A,{item:e,linkClassName:l.includes(e.key)?"active":"",activeMenuItems:l,subMenuClassNames:"side-nav-third-level",toggleMenu:r})}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(j,{item:e,className:l.includes(e.key)?"menuitem-active":"",linkClassName:l.includes(e.key)?"active":""})})},s)))})})})]})},j=e=>{let{item:s,className:a,linkClassName:t}=e;return(0,u.jsx)("li",{className:c()("side-nav-item",a),children:(0,u.jsx)(x,{item:s,className:t})})},x=e=>{let{item:s,className:a}=e;return(0,u.jsxs)(i.N_,{to:s.url,target:s.target,className:c()("side-nav-link-ref","side-sub-nav-link",a),"data-menu-key":s.key,children:[s.icon&&(0,u.jsx)("i",{className:s.icon}),s.badge&&(0,u.jsx)("span",{className:c()("badge","bg-"+s.badge.variant,"rounded-pill","float-end"),children:s.badge.text}),(0,u.jsxs)("span",{children:[" ",s.label," "]})]})},N=e=>{let{menuItems:s}=e,a=(0,m.zy)();const n=(0,t.useRef)(null),[i,l]=(0,t.useState)([]),d=(e,a)=>{a&&l([e.key,...(0,r.Ln)(s,e)])},o=(0,t.useCallback)((()=>{const e=document.getElementById("side-menu");let t=null;if(e){let n=e.getElementsByClassName("side-nav-link-ref");for(let e=0;e<n.length;++e)if(a.pathname===n[e].pathname){t=n[e];break}if(t){const e=t.getAttribute("data-menu-key"),a=(0,r.OZ)(s,e);a&&l([a.key,...(0,r.Ln)(s,a)])}}}),[a,s]);return(0,t.useEffect)((()=>{o()}),[o]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:"side-menu",ref:n,id:"side-menu",children:(s||[]).map(((e,s)=>(0,u.jsx)(t.Fragment,{children:e.isTitle?(0,u.jsx)("li",{className:c()("menu-title",{"mt-2":0!==s}),children:e.label}):(0,u.jsx)(u.Fragment,{children:e.children?(0,u.jsx)(A,{item:e,toggleMenu:d,subMenuClassNames:"nav-second-level",activeMenuItems:i,linkClassName:"side-nav-link"}):(0,u.jsx)(j,{item:e,linkClassName:"side-nav-link",className:i.includes(e.key)?"menuitem-active":""})})},s)))})})};var k=a(58775);const p=()=>{const[e,s]=(0,t.useState)(!1),a=()=>{s(!e)};return(0,u.jsxs)("div",{className:"user-box text-center",children:[(0,u.jsx)("img",{src:k,alt:"",title:"Prathviraj",className:"rounded-circle img-thumbnail avatar-md"}),(0,u.jsxs)(n.A,{show:e,onToggle:a,children:[(0,u.jsx)(n.A.Toggle,{id:"dropdown-notification",to:"#",as:i.N_,onClick:a,className:"user-name h5 mt-2 mb-1 d-block",children:"Prathviraj"}),(0,u.jsx)(n.A.Menu,{className:"user-pro-dropdown",children:(0,u.jsx)("div",{onClick:a,children:([{label:"My Account",icon:"fe-user",redirectTo:"/apps/contacts/profile"},{label:"Settings",icon:"fe-settings",redirectTo:"#"},{label:"Lock Screen",icon:"fe-lock",redirectTo:"/auth/lock-screen"},{label:"Logout",icon:"fe-log-out",redirectTo:"/auth/logout"}]||[]).map(((e,s)=>(0,u.jsxs)(i.N_,{to:e.redirectTo,className:"dropdown-item notify-item",children:[(0,u.jsx)("i",{className:c()(e.icon,"me-1")}),(0,u.jsx)("span",{children:e.label})]},s+"-profile-menu")))})})]}),(0,u.jsx)("p",{className:"text-muted left-user-info",children:"Admin Head"}),(0,u.jsxs)("ul",{className:"list-inline",children:[(0,u.jsx)("li",{className:"list-inline-item",children:(0,u.jsx)(i.N_,{to:"#",className:"text-muted left-user-info",children:(0,u.jsx)("i",{className:"mdi mdi-cog"})})}),(0,u.jsx)("li",{className:"list-inline-item",children:(0,u.jsx)(i.N_,{to:"#",children:(0,u.jsx)("i",{className:"mdi mdi-power"})})})]})]})},h=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{}),(0,u.jsx)("div",{id:"sidebar-menu",children:(0,u.jsx)(N,{menuItems:(0,r.gL)()})}),(0,u.jsx)("div",{className:"clearfix"})]}),b=e=>{let{isCondensed:s}=e;const a=(0,t.useRef)(null),n=e=>{a&&a.current&&a.current.contains(e.target)||document.body&&document.body.classList.remove("sidebar-enable")};return(0,t.useEffect)((()=>(document.addEventListener("mousedown",n,!1),()=>{document.removeEventListener("mousedown",n,!1)})),[]),(0,u.jsxs)("div",{className:"left-side-menu",ref:a,children:[!s&&(0,u.jsx)(d.A,{style:{maxHeight:"100%"},children:(0,u.jsx)(h,{})}),s&&(0,u.jsx)(h,{})]})};b.defaultProps={isCondensed:!1};const g=b},41497:(e,s,a)=>{"use strict";var t=a(13218);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,s,a,n,i,l){if(l!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function s(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},65173:(e,s,a)=>{e.exports=a(41497)()},13218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},58775:e=>{"use strict";e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=4289.c237dc28.chunk.js.map