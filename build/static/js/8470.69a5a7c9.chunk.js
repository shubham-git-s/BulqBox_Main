"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[8470],{50618:(e,a,s)=>{s.d(a,{A:()=>m});var t=s(65043),n=s(71094),r=s(98139),l=s.n(r),i=s(35475),o=s(70579);const c=e=>{let{tableProps:a,sizePerPageList:s}=e;const[n,r]=(0,t.useState)(a.pageCount),[c,d]=(0,t.useState)(a.state.pageIndex);(0,t.useEffect)((()=>{r(a.pageCount),d(a.state.pageIndex)}),[a.pageCount,a.state.pageIndex]);const u=(0,t.useCallback)(((e,a)=>e.filter((e=>e<=n))),[n]),m=(0,t.useCallback)(((e,a)=>a<7?u([1,2,3,4,5,6],a):e%5>=0&&e>4&&e+2<a?[1,e-1,e,e+1,a]:e%5>=0&&e>4&&e+2>=a?[1,a-3,a-2,a-1,a]:[1,2,3,4,5,a]),[u]),p=e=>{if(e===c+1)return;const s=m(e,n);h(u(s,n)),a.gotoPage(e-1)};(0,t.useEffect)((()=>{const e=m(null,n);h(e)}),[n,m]);const[g,h]=(0,t.useState)(m(null,n)),x=c+1;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[s.length>0&&(0,o.jsxs)("div",{className:"d-inline-block me-3",children:[(0,o.jsx)("label",{className:"me-1",children:"Display :"}),(0,o.jsx)("select",{value:a.state.pageSize,onChange:e=>{a.setPageSize(Number(e.currentTarget.value))},className:"form-select d-inline-block w-auto",children:(s||[]).map(((e,a)=>(0,o.jsx)("option",{value:e.value,children:e.text},a.toString())))})]}),(0,o.jsxs)("span",{className:"me-3",children:["Page"," ",(0,o.jsxs)("strong",{children:[c+1," of ",a.pageOptions.length]})," "]}),(0,o.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[(0,o.jsx)("label",{className:"form-label",children:"Go to page : "}),(0,o.jsx)("input",{type:"number",value:c+1,min:"1",onChange:e=>{const s=e.currentTarget.value?Number(e.currentTarget.value)-1:0;a.gotoPage(s),d(a.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),(0,o.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[(0,o.jsx)("li",{className:l()("page-item","paginate_button","previous",{disabled:1===x}),onClick:()=>{1!==x&&p(x-1)},children:(0,o.jsx)(i.N_,{to:"#",className:"page-link",children:(0,o.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(g||[]).map(((e,a,s)=>s[a-1]+1<e?(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:(0,o.jsx)(i.N_,{to:"#",className:"page-link",children:"..."})}),(0,o.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:x===e}),onClick:a=>p(e),children:(0,o.jsx)(i.N_,{to:"#",className:"page-link",children:e})})]},e):(0,o.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:x===e}),onClick:a=>p(e),children:(0,o.jsx)(i.N_,{to:"#",className:"page-link",children:e})},e))),(0,o.jsx)("li",{className:l()("page-item","paginate_button","next",{disabled:x===a.pageCount}),onClick:()=>{x!==a.pageCount&&p(x+1)},children:(0,o.jsx)(i.N_,{to:"#",className:"page-link",children:(0,o.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})},d=e=>{let{preGlobalFilteredRows:a,globalFilter:s,setGlobalFilter:r,searchBoxClass:i}=e;const c=a.length,[d,u]=(0,t.useState)(s),m=(0,n.useAsyncDebounce)((e=>{r(e||void 0)}),200);return(0,o.jsx)("div",{className:l()(i),children:(0,o.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",(0,o.jsx)("input",{type:"search",value:d||"",onChange:e=>{u(e.target.value),m(e.target.value)},placeholder:`${c} records...`,className:"form-control w-auto ms-1"})]})})},u=(0,t.forwardRef)(((e,a)=>{let{indeterminate:s,...n}=e;const r=(0,t.useRef)(),l=a||r;return(0,t.useEffect)((()=>{l.current.indeterminate=s}),[l,s]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"form-check",children:[(0,o.jsx)("input",{type:"checkbox",className:"form-check-input",ref:l,...n}),(0,o.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})})),m=e=>{const a=e.isSearchable||!1,s=e.isSortable||!1,t=e.pagination||!1,r=e.isSelectable||!1,i=e.isExpandable||!1,m=e.sizePerPageList||[];let p={};a&&(p.useGlobalFilter=n.useGlobalFilter),s&&(p.useSortBy=n.useSortBy),i&&(p.useExpanded=n.useExpanded),t&&(p.usePagination=n.usePagination),r&&(p.useRowSelect=n.useRowSelect);const g=(0,n.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},p.hasOwnProperty("useGlobalFilter")&&p.useGlobalFilter,p.hasOwnProperty("useSortBy")&&p.useSortBy,p.hasOwnProperty("useExpanded")&&p.useExpanded,p.hasOwnProperty("usePagination")&&p.usePagination,p.hasOwnProperty("useRowSelect")&&p.useRowSelect,(e=>{r&&e.visibleColumns.push((e=>[{id:"selection",Header:e=>{let{getToggleAllPageRowsSelectedProps:a}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(u,{...a()})})},Cell:e=>{let{row:a}=e;return(0,o.jsx)("div",{children:(0,o.jsx)(u,{...a.getToggleRowSelectedProps()})})}},...e])),i&&e.visibleColumns.push((e=>[{id:"expander",Header:e=>{let{getToggleAllRowsExpandedProps:a,isAllRowsExpanded:s}=e;return(0,o.jsx)("span",{...a(),children:s?"-":"+"})},Cell:e=>{let{row:a}=e;return a.canExpand?(0,o.jsx)("span",{...a.getToggleRowExpandedProps({style:{paddingLeft:2*a.depth+"rem"}}),children:a.isExpanded?"-":"+"}):null}},...e]))}));let h=t?g.page:g.rows;return(0,o.jsxs)(o.Fragment,{children:[a&&(0,o.jsx)(d,{preGlobalFilteredRows:g.preGlobalFilteredRows,globalFilter:g.state.globalFilter,setGlobalFilter:g.setGlobalFilter,searchBoxClass:e.searchBoxClass}),(0,o.jsx)("div",{className:"table-responsive",children:(0,o.jsxs)("table",{...g.getTableProps(),className:l()("table table-centered react-table",e.tableClass),children:[(0,o.jsx)("thead",{className:e.theadClass,children:(g.headerGroups||[]).map((e=>(0,o.jsx)("tr",{...e.getHeaderGroupProps(),children:(e.headers||[]).map((e=>(0,o.jsx)("th",{...e.getHeaderProps(e.sort&&e.getSortByToggleProps()),className:l()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")})))})))}),(0,o.jsx)("tbody",{...g.getTableBodyProps(),children:(h||[]).map(((e,a)=>(g.prepareRow(e),(0,o.jsx)("tr",{...e.getRowProps(),children:(e.cells||[]).map((e=>(0,o.jsx)("td",{...e.getCellProps([{className:e.column.className}]),children:e.render("Cell")})))}))))})]})}),t&&(0,o.jsx)(c,{tableProps:g,sizePerPageList:m})]})}},82483:(e,a,s)=>{s.r(a),s.d(a,{default:()=>d});var t=s(65043),n=s(38628);const r=[{id:"#JD01",buyerName:"John Doe",date:"2024-03-15",message:"Hi, I am interested in the new product launch.",responseStatus:"Responded"},{id:"#JS02",buyerName:"Jane Smith",date:"2024-03-14",message:"Can you provide more details about my recent order?",responseStatus:"Not Responded"},{id:"#EJ03",buyerName:"Emily Johnson",date:"2024-03-13",message:"I have a question about the return policy.",responseStatus:"Responded"},{id:"#MB04",buyerName:"Michael Brown",date:"2024-03-12",message:"When will the next sale be?",responseStatus:"Responded"},{id:"#LW05",buyerName:"Linda Williams",date:"2024-03-11",message:"I'm facing issues with my account.",responseStatus:"Not Responded"},{id:"#RG06",buyerName:"Robert Garcia",date:"2024-03-10",message:"Do you have recommendations for gifts?",responseStatus:"Responded"},{id:"#MM07",buyerName:"Maria Martinez",date:"2024-03-09",message:"Thank you for the prompt delivery!",responseStatus:"Responded"},{id:"#DW08",buyerName:"David Wilson",date:"2024-04-20",message:"Can I change my shipping address?",responseStatus:"Not Responded"}];var l=s(50618),i=s(40799),o=s(70579);const c=[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:r.length}],d=()=>{const[e,a]=(0,t.useState)(r),[s,d]=(0,t.useState)(!0);(0,i.HU)({title:"Interaction History Viewer",breadCrumbItems:[{path:"/buyer-management/interaction-history-view",label:"Interaction History Viewer"},{path:"/buyer-management/interaction-history-view",label:"Interaction History Viewer",active:!0}]});return(0,t.useEffect)((()=>{e&&d(!1)}),[]),(0,o.jsx)(n.A,{children:(0,o.jsxs)(n.A.Body,{children:[(0,o.jsx)("h4",{className:"header-title",children:"Buyer Interaction History Viewer"}),(0,o.jsx)("p",{className:"text-muted font-14 mb-4",children:"The Buyer Interaction History Viewer empowers admins to effortlessly access and analyze detailed interaction histories with buyers via WhatsApp. This feature serves as a comprehensive repository of communication, enabling admins to review past conversations, track engagement patterns, and understand buyer preferences. By consolidating interaction data into a user-friendly interface, admins can enhance customer relationships, tailor marketing strategies, and respond proactively to buyer needs. Experience a seamless connection with your buyers, ensuring every interaction is informed and impactful."}),(0,o.jsx)(l.A,{columns:[{Header:"ID",accessor:"id",Cell:e=>{let{value:a}=e;return a||"-"}},{Header:"Buyer Name",accessor:"buyerName",Cell:e=>{let{value:a}=e;return a||"-"}},{Header:"Interaction Date",accessor:"date",Cell:e=>{let{value:a}=e;return a||"-"}},{Header:"Message",accessor:"message",Cell:e=>{let{value:a}=e;return a||"-"}},{Header:"Response Statu",accessor:"responseStatus",Cell:e=>{let{value:a}=e;return a||"-"}}],data:e,pageSize:5,sizePerPageList:c,isSortable:!0,pagination:!0,isSearchable:!0})]})})}},4488:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(65043),n=s(98139),r=s.n(n),l=s(70579);const i=e=>t.forwardRef(((a,s)=>(0,l.jsx)("div",{...a,ref:s,className:r()(a.className,e)})))}}]);
//# sourceMappingURL=8470.69a5a7c9.chunk.js.map