(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[8681],{50618:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var a=s(65043),n=s(71094),l=s(98139),r=s.n(l),o=s(35475),i=s(70579);const c=e=>{let{tableProps:t,sizePerPageList:s}=e;const[n,l]=(0,a.useState)(t.pageCount),[c,d]=(0,a.useState)(t.state.pageIndex);(0,a.useEffect)((()=>{l(t.pageCount),d(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);const u=(0,a.useCallback)(((e,t)=>e.filter((e=>e<=n))),[n]),m=(0,a.useCallback)(((e,t)=>t<7?u([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]),[u]),p=e=>{if(e===c+1)return;const s=m(e,n);x(u(s,n)),t.gotoPage(e-1)};(0,a.useEffect)((()=>{const e=m(null,n);x(e)}),[n,m]);const[h,x]=(0,a.useState)(m(null,n)),f=c+1;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[s.length>0&&(0,i.jsxs)("div",{className:"d-inline-block me-3",children:[(0,i.jsx)("label",{className:"me-1",children:"Display :"}),(0,i.jsx)("select",{value:t.state.pageSize,onChange:e=>{t.setPageSize(Number(e.currentTarget.value))},className:"form-select d-inline-block w-auto",children:(s||[]).map(((e,t)=>(0,i.jsx)("option",{value:e.value,children:e.text},t.toString())))})]}),(0,i.jsxs)("span",{className:"me-3",children:["Page"," ",(0,i.jsxs)("strong",{children:[c+1," of ",t.pageOptions.length]})," "]}),(0,i.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,i.jsx)("label",{className:"form-label",children:"Go to page : "}),(0,i.jsx)("input",{type:"number",value:c+1,min:"1",onChange:e=>{const s=e.currentTarget.value?Number(e.currentTarget.value)-1:0;t.gotoPage(s),d(t.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,i.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,i.jsx)("li",{className:r()("page-item","paginate_button","previous",{disabled:1===f}),onClick:()=>{1!==f&&p(f-1)},children:(0,i.jsx)(o.N_,{to:"#",className:"page-link",children:(0,i.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(h||[]).map(((e,t,s)=>s[t-1]+1<e?(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,i.jsx)(o.N_,{to:"#",className:"page-link",children:"..."})}),(0,i.jsx)("li",{className:r()("page-item","d-none","d-xl-inline-block",{active:f===e}),onClick:t=>p(e),children:(0,i.jsx)(o.N_,{to:"#",className:"page-link",children:e})})]},e):(0,i.jsx)("li",{className:r()("page-item","d-none","d-xl-inline-block",{active:f===e}),onClick:t=>p(e),children:(0,i.jsx)(o.N_,{to:"#",className:"page-link",children:e})},e))),(0,i.jsx)("li",{className:r()("page-item","paginate_button","next",{disabled:f===t.pageCount}),onClick:()=>{f!==t.pageCount&&p(f+1)},children:(0,i.jsx)(o.N_,{to:"#",className:"page-link",children:(0,i.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})},d=e=>{let{preGlobalFilteredRows:t,globalFilter:s,setGlobalFilter:l,searchBoxClass:o}=e;const c=t.length,[d,u]=(0,a.useState)(s),m=(0,n.useAsyncDebounce)((e=>{l(e||void 0)}),200);return(0,i.jsx)("div",{className:r()(o),children:(0,i.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,i.jsx)("input",{type:"search",value:d||"",onChange:e=>{u(e.target.value),m(e.target.value)},placeholder:`${c} records...`,className:"form-control w-auto ms-1"})]})})},u=(0,a.forwardRef)(((e,t)=>{let{indeterminate:s,...n}=e;const l=(0,a.useRef)(),r=t||l;return(0,a.useEffect)((()=>{r.current.indeterminate=s}),[r,s]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"form-check",children:[(0,i.jsx)("input",{type:"checkbox",className:"form-check-input",ref:r,...n}),(0,i.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),m=e=>{const t=e.isSearchable||!1,s=e.isSortable||!1,a=e.pagination||!1,l=e.isSelectable||!1,o=e.isExpandable||!1,m=e.sizePerPageList||[];let p={};t&&(p.useGlobalFilter=n.useGlobalFilter),s&&(p.useSortBy=n.useSortBy),o&&(p.useExpanded=n.useExpanded),a&&(p.usePagination=n.usePagination),l&&(p.useRowSelect=n.useRowSelect);const h=(0,n.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},p.hasOwnProperty("useGlobalFilter")&&p.useGlobalFilter,p.hasOwnProperty("useSortBy")&&p.useSortBy,p.hasOwnProperty("useExpanded")&&p.useExpanded,p.hasOwnProperty("usePagination")&&p.usePagination,p.hasOwnProperty("useRowSelect")&&p.useRowSelect,(e=>{l&&e.visibleColumns.push((e=>[{id:"selection",Header:e=>{let{getToggleAllPageRowsSelectedProps:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(u,{...t()})})},Cell:e=>{let{row:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(u,{...t.getToggleRowSelectedProps()})})}},...e])),o&&e.visibleColumns.push((e=>[{id:"expander",Header:e=>{let{getToggleAllRowsExpandedProps:t,isAllRowsExpanded:s}=e;return(0,i.jsx)("span",{...t(),children:s?"-":"+"})},Cell:e=>{let{row:t}=e;return t.canExpand?(0,i.jsx)("span",{...t.getToggleRowExpandedProps({style:{paddingLeft:2*t.depth+"rem"}}),children:t.isExpanded?"-":"+"}):null}},...e]))}));let x=a?h.page:h.rows;return(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)(d,{preGlobalFilteredRows:h.preGlobalFilteredRows,globalFilter:h.state.globalFilter,setGlobalFilter:h.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,i.jsx)("div",{className:"table-responsive",children:(0,i.jsxs)("table",{...h.getTableProps(),className:r()("table table-centered react-table",e.tableClass),children:[(0,i.jsx)("thead",{className:e.theadClass,children:(h.headerGroups||[]).map((e=>(0,i.jsx)("tr",{...e.getHeaderGroupProps(),children:(e.headers||[]).map((e=>(0,i.jsx)("th",{...e.getHeaderProps(e.sort&&e.getSortByToggleProps()),className:r()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")})))})))}),(0,i.jsx)("tbody",{...h.getTableBodyProps(),children:(x||[]).map(((e,t)=>(h.prepareRow(e),(0,i.jsx)("tr",{...e.getRowProps(),children:(e.cells||[]).map((e=>(0,i.jsx)("td",{...e.getCellProps([{className:e.column.className}]),children:e.render("Cell")})))}))))})]})}),a&&(0,i.jsx)(c,{tableProps:h,sizePerPageList:m})]})}},17938:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>b});var a=s(65043),n=s(25284),l=s(14282),r=s(38628),o=s(61072),i=s(78602),c=s(23502);const d=[{id:1,date:"2024-09-01",productCategory:"electronics",salesChannel:"Online",amount:250,unitsSold:5},{id:2,date:"2024-08-15",productCategory:"clothing",salesChannel:"In-Store",amount:150,unitsSold:3},{id:3,date:"2024-08-20",productCategory:"home goods",salesChannel:"Online",amount:100,unitsSold:10},{id:4,date:"2024-09-05",productCategory:"electronics",salesChannel:"Online",amount:500,unitsSold:2},{id:5,date:"2024-07-25",productCategory:"clothing",salesChannel:"In-Store",amount:75,unitsSold:1},{id:6,date:"2024-08-30",productCategory:"home goods",salesChannel:"Online",amount:300,unitsSold:4},{id:7,date:"2024-09-10",productCategory:"electronics",salesChannel:"In-Store",amount:1200,unitsSold:1},{id:8,date:"2024-09-15",productCategory:"clothing",salesChannel:"Online",amount:200,unitsSold:6}];var u=s(30114),m=s(50618),p=s(40799),h=s(98139),x=s.n(h),f=s(70579);const g=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:d.length}],b=()=>{(0,p.HU)({title:"Report Generation Tool",breadCrumbItems:[{path:"/repors-analytics/report-generation-tool",label:"Report Generation Tool"},{path:"/repors-analytics/report-generation-tool",label:"Real-Time Inventory",active:!0}]});const[e,t]=(0,a.useState)(!1),[s,h]=(0,a.useState)(!1),[b,y]=(0,a.useState)(""),v=()=>{t(!e)},[N,j]=(0,a.useState)({timePeriod:"",productCategory:"",salesChannel:""}),[C,A]=(0,a.useState)(!1),[w,S]=(0,a.useState)(d),[P,k]=(0,a.useState)([]),[R,F]=(0,a.useState)(!1);(0,a.useEffect)((()=>{N&&I()}),[N,b]);const E=e=>{const{name:t,value:s}=e.target;j((e=>({...e,[t]:s})))},T=e=>{if(!R)return;const t=P.map((e=>({ID:e.id,Date:e.date,"Product Category":e.productCategory,"Sales Channel":e.salesChannel,Amount:`$${e.amount.toFixed(2)}`,"Units Sold":e.unitsSold}))),s=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=`report.${e.toLowerCase()}`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a)},I=()=>{let e=d;const{timePeriod:t,productCategory:s,salesChannel:a}=N;t&&(e=e.filter((e=>e.date.includes(t))),k(e)),s&&(console.log(s,"---productCategory"),e=e.filter((e=>e.productCategory===s)),console.log(e,"----filtered"),k(e)),a&&(e=e.filter((e=>e.salesChannel===a)),k(e))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n.A,{show:e,onHide:v,size:"sm",children:(0,f.jsx)("div",{className:x()("modal-filled","bg-"+b),children:(0,f.jsx)(n.A.Body,{className:"p-4",children:(0,f.jsxs)("div",{className:"text-center",children:[(0,f.jsx)("i",{className:"dripicons-checkmark h1 text-white"}),(0,f.jsx)("h4",{className:"mt-2 text-white",children:"Well Done!"}),(0,f.jsx)("p",{className:"mt-3 text-white",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam."}),(0,f.jsx)(l.A,{onClick:()=>{const e=d.filter((e=>{const t=!N.timePeriod||e.date.includes(N.timePeriod),s=!N.productCategory||e.productCategory===N.productCategory,a=!N.salesChannel||e.salesChannel===N.salesChannel;return t&&s&&a}));k(e),F(!0),v()},className:"btn-light my-2",children:"Continue"})]})})})}),(0,f.jsx)(r.A,{children:(0,f.jsxs)(r.A.Body,{children:[(0,f.jsxs)(o.A,{className:"align-items-end",children:[(0,f.jsx)(i.A,{md:6,className:"mb-4",children:(0,f.jsx)("h4",{children:"Report Generation Tool"})}),(0,f.jsxs)(i.A,{md:6,className:"text-end mb-4",children:[!C&&(0,f.jsx)(l.A,{variant:"primary",onClick:()=>{A(!0)},children:"Filter"}),(0,f.jsx)(l.A,{variant:"primary",className:"ms-2",onClick:()=>{y("success"),v(),console.log(b,"----className")},children:"Generate Report"}),(0,f.jsx)(l.A,{variant:"success",className:"ms-2",onClick:()=>T("JSON"),children:"Download JSON"}),(0,f.jsx)(l.A,{variant:"success",className:"ms-2",onClick:()=>T("CSV"),children:"Download CSV"})]})]}),C&&(0,f.jsxs)(c.A,{className:"mb-3",children:[(0,f.jsxs)(o.A,{className:"align-items-center",children:[(0,f.jsx)(i.A,{md:4,className:"",children:(0,f.jsxs)(c.A.Group,{children:[(0,f.jsx)(c.A.Label,{children:"Time Period"}),(0,f.jsx)(c.A.Control,{type:"text",name:"timePeriod",value:N.timePeriod,onChange:E,placeholder:"e.g. Last Month"})]})}),(0,f.jsx)(i.A,{md:4,className:"",children:(0,f.jsxs)(c.A.Group,{children:[(0,f.jsx)(c.A.Label,{children:"Product Category"}),(0,f.jsx)(u.Ay,{className:"react-select react-select-container",classNamePrefix:"react-select",options:[{value:"electronics",label:"Electronics"},{value:"clothing",label:"Clothing"},{value:"home goods",label:"Home Goods"}],onChange:e=>{j((t=>({...t,productCategory:e.value})))}})]})}),(0,f.jsx)(i.A,{md:4,children:(0,f.jsxs)(c.A.Group,{children:[(0,f.jsx)(c.A.Label,{children:"Sales Channel"}),(0,f.jsx)(c.A.Control,{type:"text",name:"salesChannel",value:N.salesChannel,onChange:E,placeholder:"e.g. Online"})]})})]}),(0,f.jsx)(o.A,{className:"mb-2 mt-4",children:(0,f.jsxs)(i.A,{children:[(0,f.jsx)(l.A,{variant:"primary",onClick:I,children:"Filter"}),(0,f.jsx)(l.A,{variant:"success",className:"ms-2",onClick:()=>{S(d),j({timePeriod:"",productCategory:"",salesChannel:""}),A(!1)},children:"Clear"})]})})]}),(0,f.jsx)(m.A,{columns:[{Header:"ID",accessor:"id",Cell:e=>{let{value:t}=e;return t||"-"}},{Header:"Date",accessor:"date",Cell:e=>{let{value:t}=e;return t||"-"}},{Header:"Product Category",accessor:"productCategory",Cell:e=>{let{value:t}=e;return t||"-"}},{Header:"Sales Channel",accessor:"salesChannel",Cell:e=>{let{value:t}=e;return t||"-"}},{Header:"Amount",accessor:"amount",Cell:e=>{let{value:t}=e;return t||"-"}},{Header:"Unit Sold",accessor:"unitsSold",Cell:e=>{let{value:t}=e;return t||"-"}}],data:P,pageSize:5,sizePerPageList:g,isSortable:!0,pagination:!0,isSearchable:!0})]})})]})}},38293:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(65043);const n=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const l=function(e,t){return(0,a.useMemo)((()=>function(e,t){const s=n(e),a=n(t);return e=>{s&&s(e),a&&a(e)}}(e,t)),[e,t])}},5425:(e,t,s)=>{"use strict";s.d(t,{sE:()=>l,y:()=>r});const a="data-rr-ui-",n="rrUi";function l(e){return`${a}${e}`}function r(e){return`${n}${e}`}},81701:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(65043),n=s(18279);const l=(0,a.createContext)(n.A?window:void 0);l.Provider;function r(){return(0,a.useContext)(l)}},63043:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>o});var a=s(18279),n=!1,l=!1;try{var r={get passive(){return n=!0},get once(){return l=n=!0}};a.A&&(window.addEventListener("test",r,r),window.removeEventListener("test",r,!0))}catch(i){}const o=function(e,t,s,a){if(a&&"boolean"!==typeof a&&!l){var r=a.once,o=a.capture,i=s;!l&&r&&(i=s.__once||function e(a){this.removeEventListener(t,e,o),s.call(this,a)},s.__once=i),e.addEventListener(t,i,n?a:o)}e.addEventListener(t,s,a)}},18279:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a=!("undefined"===typeof window||!window.document||!window.document.createElement)},52631:(e,t,s)=>{"use strict";function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}s.d(t,{A:()=>a})},10753:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(63043),n=s(8260);const l=function(e,t,s,l){return(0,a.Ay)(e,t,s,l),function(){(0,n.A)(e,t,s,l)}}},80182:(e,t,s)=>{"use strict";function a(e){return e&&e.ownerDocument||document}s.d(t,{A:()=>a})},93818:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function n(e,t){return a(e.querySelectorAll(t))}},8260:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a=function(e,t,s,a){var n=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,s,n),s.__once&&e.removeEventListener(t,s.__once,n)}},41497:(e,t,s)=>{"use strict";var a=s(13218);function n(){}function l(){}l.resetWarningCache=n,e.exports=function(){function e(e,t,s,n,l,r){if(r!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:n};return s.PropTypes=s,s}},65173:(e,t,s)=>{e.exports=s(41497)()},13218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},14282:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(98139),n=s.n(a),l=s(65043),r=s(14140),o=s(67852),i=s(70579);const c=l.forwardRef(((e,t)=>{let{as:s,bsPrefix:a,variant:l="primary",size:c,active:d=!1,disabled:u=!1,className:m,...p}=e;const h=(0,o.oU)(a,"btn"),[x,{tagName:f}]=(0,r.Am)({tagName:s,disabled:u,...p}),g=f;return(0,i.jsx)(g,{...x,...p,ref:t,disabled:u,className:n()(m,h,d&&"active",l&&`${h}-${l}`,c&&`${h}-${c}`,p.href&&u&&"disabled")})}));c.displayName="Button";const d=c},62663:(e,t,s)=>{"use strict";s.d(t,{Tj:()=>n,jJ:()=>l,mf:()=>r});var a=s(65043);function n(e,t){let s=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,s++):e))}function l(e,t){let s=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&t(e,s++)}))}function r(e,t){return a.Children.toArray(e).some((e=>a.isValidElement(e)&&e.type===t))}},75296:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(98139),n=s.n(a),l=s(65043),r=s(1433),o=s(67852),i=s(70579);const c=l.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,children:l,controlId:c,label:d,...u}=e;return s=(0,o.oU)(s,"form-floating"),(0,i.jsxs)(r.A,{ref:t,className:n()(a,s),controlId:c,...u,children:[l,(0,i.jsx)("label",{htmlFor:c,children:d})]})}));c.displayName="FloatingLabel";const d=c},23502:(e,t,s)=>{"use strict";s.d(t,{A:()=>D});var a=s(98139),n=s.n(a),l=s(65173),r=s.n(l),o=s(65043),i=s(70579);const c={type:r().string,tooltip:r().bool,as:r().elementType},d=o.forwardRef(((e,t)=>{let{as:s="div",className:a,type:l="valid",tooltip:r=!1,...o}=e;return(0,i.jsx)(s,{...o,ref:t,className:n()(a,`${l}-${r?"tooltip":"feedback"}`)})}));d.displayName="Feedback",d.propTypes=c;const u=d;var m=s(21068),p=s(5673),h=s(67852);const x=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,htmlFor:l,...r}=e;const{controlId:c}=(0,o.useContext)(p.A);return s=(0,h.oU)(s,"form-check-label"),(0,i.jsx)("label",{...r,ref:t,htmlFor:l||c,className:n()(a,s)})}));x.displayName="FormCheckLabel";const f=x;var g=s(62663);const b=o.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,bsSwitchPrefix:l,inline:r=!1,reverse:c=!1,disabled:d=!1,isValid:x=!1,isInvalid:b=!1,feedbackTooltip:y=!1,feedback:v,feedbackType:N,className:j,style:C,title:A="",type:w="checkbox",label:S,children:P,as:k="input",...R}=e;a=(0,h.oU)(a,"form-check"),l=(0,h.oU)(l,"form-switch");const{controlId:F}=(0,o.useContext)(p.A),E=(0,o.useMemo)((()=>({controlId:s||F})),[F,s]),T=!P&&null!=S&&!1!==S||(0,g.mf)(P,f),I=(0,i.jsx)(m.A,{...R,type:"switch"===w?"checkbox":w,ref:t,isValid:x,isInvalid:b,disabled:d,as:k});return(0,i.jsx)(p.A.Provider,{value:E,children:(0,i.jsx)("div",{style:C,className:n()(j,T&&a,r&&`${a}-inline`,c&&`${a}-reverse`,"switch"===w&&l),children:P||(0,i.jsxs)(i.Fragment,{children:[I,T&&(0,i.jsx)(f,{title:A,children:S}),v&&(0,i.jsx)(u,{type:N,tooltip:y,children:v})]})})})}));b.displayName="FormCheck";const y=Object.assign(b,{Input:m.A,Label:f});s(96440);const v=o.forwardRef(((e,t)=>{let{bsPrefix:s,type:a,size:l,htmlSize:r,id:c,className:d,isValid:u=!1,isInvalid:m=!1,plaintext:x,readOnly:f,as:g="input",...b}=e;const{controlId:y}=(0,o.useContext)(p.A);return s=(0,h.oU)(s,"form-control"),(0,i.jsx)(g,{...b,type:a,size:r,ref:t,readOnly:f,id:c||y,className:n()(d,x?`${s}-plaintext`:s,l&&`${s}-${l}`,"color"===a&&`${s}-color`,u&&"is-valid",m&&"is-invalid")})}));v.displayName="FormControl";const N=Object.assign(v,{Feedback:u}),j=o.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:l="div",...r}=e;return a=(0,h.oU)(a,"form-floating"),(0,i.jsx)(l,{ref:t,className:n()(s,a),...r})}));j.displayName="FormFloating";const C=j;var A=s(1433),w=s(78602);const S=o.forwardRef(((e,t)=>{let{as:s="label",bsPrefix:a,column:l=!1,visuallyHidden:r=!1,className:c,htmlFor:d,...u}=e;const{controlId:m}=(0,o.useContext)(p.A);a=(0,h.oU)(a,"form-label");let x="col-form-label";"string"===typeof l&&(x=`${x} ${x}-${l}`);const f=n()(c,a,r&&"visually-hidden",l&&x);return d=d||m,l?(0,i.jsx)(w.A,{ref:t,as:"label",className:f,htmlFor:d,...u}):(0,i.jsx)(s,{ref:t,className:f,htmlFor:d,...u})}));S.displayName="FormLabel";const P=S,k=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,id:l,...r}=e;const{controlId:c}=(0,o.useContext)(p.A);return s=(0,h.oU)(s,"form-range"),(0,i.jsx)("input",{...r,type:"range",ref:t,className:n()(a,s),id:l||c})}));k.displayName="FormRange";const R=k,F=o.forwardRef(((e,t)=>{let{bsPrefix:s,size:a,htmlSize:l,className:r,isValid:c=!1,isInvalid:d=!1,id:u,...m}=e;const{controlId:x}=(0,o.useContext)(p.A);return s=(0,h.oU)(s,"form-select"),(0,i.jsx)("select",{...m,size:l,ref:t,className:n()(r,s,a&&`${s}-${a}`,c&&"is-valid",d&&"is-invalid"),id:u||x})}));F.displayName="FormSelect";const E=F,T=o.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,as:l="small",muted:r,...o}=e;return s=(0,h.oU)(s,"form-text"),(0,i.jsx)(l,{...o,ref:t,className:n()(a,s,r&&"text-muted")})}));T.displayName="FormText";const I=T,O=o.forwardRef(((e,t)=>(0,i.jsx)(y,{...e,ref:t,type:"switch"})));O.displayName="Switch";const $=Object.assign(O,{Input:y.Input,Label:y.Label});var L=s(75296);const _={_ref:r().any,validated:r().bool,as:r().elementType},U=o.forwardRef(((e,t)=>{let{className:s,validated:a,as:l="form",...r}=e;return(0,i.jsx)(l,{...r,ref:t,className:n()(s,a&&"was-validated")})}));U.displayName="Form",U.propTypes=_;const D=Object.assign(U,{Group:A.A,Control:N,Floating:C,Check:y,Switch:$,Label:P,Text:I,Range:R,Select:E,FloatingLabel:L.A})},21068:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(98139),n=s.n(a),l=s(65043),r=s(5673),o=s(67852),i=s(70579);const c=l.forwardRef(((e,t)=>{let{id:s,bsPrefix:a,className:c,type:d="checkbox",isValid:u=!1,isInvalid:m=!1,as:p="input",...h}=e;const{controlId:x}=(0,l.useContext)(r.A);return a=(0,o.oU)(a,"form-check-input"),(0,i.jsx)(p,{...h,ref:t,type:d,id:s||x,className:n()(c,a,u&&"is-valid",m&&"is-invalid")})}));c.displayName="FormCheckInput";const d=c},5673:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});const a=s(65043).createContext({})},1433:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var a=s(65043),n=s(5673),l=s(70579);const r=a.forwardRef(((e,t)=>{let{controlId:s,as:r="div",...o}=e;const i=(0,a.useMemo)((()=>({controlId:s})),[s]);return(0,l.jsx)(n.A.Provider,{value:i,children:(0,l.jsx)(r,{...o,ref:t})})}));r.displayName="FormGroup";const o=r},25284:(e,t,s)=>{"use strict";s.d(t,{A:()=>U});var a,n=s(98139),l=s.n(n),r=s(63043),o=s(18279),i=s(80182),c=s(8260);function d(e){if((!a&&0!==a||e)&&o.A){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var u=s(92667),m=s(71456),p=s(38293),h=s(59109),x=s(94232),f=s(65043),g=s(5464),b=s(40011),y=s(18072),v=s(67852),N=s(70579);const j=f.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:n="div",...r}=e;return a=(0,v.oU)(a,"modal-body"),(0,N.jsx)(n,{ref:t,className:l()(s,a),...r})}));j.displayName="ModalBody";const C=j;var A=s(31602);const w=f.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,contentClassName:n,centered:r,size:o,fullscreen:i,children:c,scrollable:d,...u}=e;s=(0,v.oU)(s,"modal");const m=`${s}-dialog`,p="string"===typeof i?`${s}-fullscreen-${i}`:`${s}-fullscreen`;return(0,N.jsx)("div",{...u,ref:t,className:l()(m,a,o&&`${s}-${o}`,r&&`${m}-centered`,d&&`${m}-scrollable`,i&&p),children:(0,N.jsx)("div",{className:l()(`${s}-content`,n),children:c})})}));w.displayName="ModalDialog";const S=w,P=f.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:n="div",...r}=e;return a=(0,v.oU)(a,"modal-footer"),(0,N.jsx)(n,{ref:t,className:l()(s,a),...r})}));P.displayName="ModalFooter";const k=P;var R=s(42258);const F=f.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,closeLabel:n="Close",closeButton:r=!1,...o}=e;return s=(0,v.oU)(s,"modal-header"),(0,N.jsx)(R.A,{ref:t,...o,className:l()(a,s),closeLabel:n,closeButton:r})}));F.displayName="ModalHeader";const E=F;const T=(0,s(4488).A)("h4"),I=f.forwardRef(((e,t)=>{let{className:s,bsPrefix:a,as:n=T,...r}=e;return a=(0,v.oU)(a,"modal-title"),(0,N.jsx)(n,{ref:t,className:l()(s,a),...r})}));I.displayName="ModalTitle";const O=I;function $(e){return(0,N.jsx)(y.A,{...e,timeout:null})}function L(e){return(0,N.jsx)(y.A,{...e,timeout:null})}const _=f.forwardRef(((e,t)=>{let{bsPrefix:s,className:a,style:n,dialogClassName:y,contentClassName:j,children:C,dialogAs:w=S,"data-bs-theme":P,"aria-labelledby":k,"aria-describedby":R,"aria-label":F,show:E=!1,animation:T=!0,backdrop:I=!0,keyboard:O=!0,onEscapeKeyDown:_,onShow:U,onHide:D,container:G,autoFocus:H=!0,enforceFocus:z=!0,restoreFocus:B=!0,restoreFocusOptions:M,onEntered:V,onExit:W,onExiting:J,onEnter:q,onEntering:K,onExited:Y,backdropClassName:Q,manager:X,...Z}=e;const[ee,te]=(0,f.useState)({}),[se,ae]=(0,f.useState)(!1),ne=(0,f.useRef)(!1),le=(0,f.useRef)(!1),re=(0,f.useRef)(null),[oe,ie]=(0,u.A)(),ce=(0,p.A)(t,ie),de=(0,m.A)(D),ue=(0,v.Wz)();s=(0,v.oU)(s,"modal");const me=(0,f.useMemo)((()=>({onHide:de})),[de]);function pe(){return X||(0,b.R)({isRTL:ue})}function he(e){if(!o.A)return;const t=pe().getScrollbarWidth()>0,s=e.scrollHeight>(0,i.A)(e).documentElement.clientHeight;te({paddingRight:t&&!s?d():void 0,paddingLeft:!t&&s?d():void 0})}const xe=(0,m.A)((()=>{oe&&he(oe.dialog)}));(0,h.A)((()=>{(0,c.A)(window,"resize",xe),null==re.current||re.current()}));const fe=()=>{ne.current=!0},ge=e=>{ne.current&&oe&&e.target===oe.dialog&&(le.current=!0),ne.current=!1},be=()=>{ae(!0),re.current=(0,x.A)(oe.dialog,(()=>{ae(!1)}))},ye=e=>{"static"!==I?le.current||e.target!==e.currentTarget?le.current=!1:null==D||D():(e=>{e.target===e.currentTarget&&be()})(e)},ve=(0,f.useCallback)((e=>(0,N.jsx)("div",{...e,className:l()(`${s}-backdrop`,Q,!T&&"show")})),[T,Q,s]),Ne={...n,...ee};Ne.display="block";return(0,N.jsx)(A.A.Provider,{value:me,children:(0,N.jsx)(g.A,{show:E,ref:ce,backdrop:I,container:G,keyboard:!0,autoFocus:H,enforceFocus:z,restoreFocus:B,restoreFocusOptions:M,onEscapeKeyDown:e=>{O?null==_||_(e):(e.preventDefault(),"static"===I&&be())},onShow:U,onHide:D,onEnter:(e,t)=>{e&&he(e),null==q||q(e,t)},onEntering:(e,t)=>{null==K||K(e,t),(0,r.Ay)(window,"resize",xe)},onEntered:V,onExit:e=>{null==re.current||re.current(),null==W||W(e)},onExiting:J,onExited:e=>{e&&(e.style.display=""),null==Y||Y(e),(0,c.A)(window,"resize",xe)},manager:pe(),transition:T?$:void 0,backdropTransition:T?L:void 0,renderBackdrop:ve,renderDialog:e=>(0,N.jsx)("div",{role:"dialog",...e,style:Ne,className:l()(a,s,se&&`${s}-static`,!T&&"show"),onClick:I?ye:void 0,onMouseUp:ge,"data-bs-theme":P,"aria-label":F,"aria-labelledby":k,"aria-describedby":R,children:(0,N.jsx)(w,{...Z,onMouseDown:fe,className:y,contentClassName:j,children:C})})})})}));_.displayName="Modal";const U=Object.assign(_,{Body:C,Header:E,Title:O,Footer:k,Dialog:S,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},4488:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var a=s(65043),n=s(98139),l=s.n(n),r=s(70579);const o=e=>a.forwardRef(((t,s)=>(0,r.jsx)("div",{...t,ref:s,className:l()(t.className,e)})))},96440:e=>{"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=8681.cf3dcffa.chunk.js.map