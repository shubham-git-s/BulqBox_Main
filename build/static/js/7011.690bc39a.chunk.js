"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[7011],{67011:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var i=n(61072),s=n(78602),o=n(38628),l=n(40799),c=n(95101),r=n(62217),a=n(70579);const d=(0,c.GZ)((t=>{const{swal:e}=t;let n;return(0,a.jsxs)("table",{className:"table table-borderless table-centered mb-0",children:[(0,a.jsx)("thead",{className:"table-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{style:{width:"50%"},children:"Alert Type"}),(0,a.jsx)("th",{children:"Example"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A basic message"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-basic",onClick:()=>e.fire({title:"Any fool can use a computer!"}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A title with a text under"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-title",onClick:()=>e.fire({title:"The Internet?",text:"That thing is still around?",icon:"question"}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A success message!"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-success",onClick:()=>e.fire({title:"Good job!",text:"You clicked the button!",icon:"success"}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A modal window with a long content inside:"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-long-content",onClick:()=>e.fire({imageUrl:"https://placeholder.pics/svg/300x1500",imageHeight:1500,imageAlt:"A tall image"}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A custom positioned dialog"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-custom-position",onClick:()=>e.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A modal with a title, an error icon, a text, and a footer"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-error",onClick:()=>e.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>"}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:'A confirm dialog, with a function attached to the "Confirm"-button...'}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-warning",onClick:()=>e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#28bb4b",cancelButtonColor:"#f34e4e",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&e.fire("Deleted!","Your file has been deleted.","success")})),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:'By passing a parameter, you can execute something else for "Cancel".'}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-params",onClick:()=>e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",confirmButtonClass:"btn btn-success mt-2",cancelButtonClass:"btn btn-danger ms-2 mt-2",buttonsStyling:!1}).then((function(t){t.value?e.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",confirmButtonColor:"#4a4fea"}):t.dismiss===e.DismissReason.cancel&&e.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",confirmButtonColor:"#4a4fea"})})),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with custom Image Header"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-image",onClick:()=>e.fire({title:"Admin to",text:"Responsive Bootstrap 5 Admin Dashboard",imageUrl:r,imageHeight:50,confirmButtonColor:"#4a4fea",animation:!1}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with auto close timer"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-close",onClick:()=>e.fire({title:"Auto close alert!",html:"I will close in <strong></strong> seconds.",timer:2e3,onBeforeOpen:function(){e.showLoading(),n=setInterval((function(){e.getContent().querySelector("strong").textContent=e.getTimerLeft()}),100)},onClose:function(){clearInterval(n)}}).then((function(t){t.dismiss===e.DismissReason.timer&&console.log("I was closed by the timer")})),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Custom HTML description and buttons"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-html-alert",onClick:()=>e.fire({title:"<i>HTML</i> <u>example</u>",icon:"info",html:'You can use <b>bold text</b>, <a href="//coderthemes.com/">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,confirmButtonClass:"btn btn-confirm",cancelButtonClass:"btn btn-cancel ms-1",confirmButtonText:'<i class="mdi mdi-thumb-up-outline"></i> Great!',cancelButtonText:'<i class="mdi mdi-thumb-down-outline"></i>'}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with custom width, padding and background"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-padding-width-alert",onClick:()=>e.fire({title:"Custom width, padding, background.",width:600,padding:100,background:"#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"}),children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Ajax request example"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"ajax-alert",onClick:()=>e.fire({title:"Submit email to run ajax request",input:"email",showCancelButton:!0,confirmButtonText:"Submit",showLoaderOnConfirm:!0,confirmButtonColor:"#4a4fea",cancelButtonColor:"#f34e4e",preConfirm:function(t){return new Promise((function(e,n){setTimeout((function(){"taken@example.com"===t?n("This email is already taken."):e()}),2e3)}))},allowOutsideClick:!1}).then((function(t){e.fire({icon:"success",title:"Ajax request finished!",confirmButtonColor:"#4a4fea",html:"Submitted email: "+t})})),children:"Click me"})})]})]})]})})),m=()=>((0,l.HU)({title:"Sweet Alerts",breadCrumbItems:[{path:"/extended-ui/sweet-alert",label:"Extended UI"},{path:"/extended-ui/sweet-alert",label:"Sweet Alerts",active:!0}]}),(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{children:(0,a.jsx)(o.A,{children:(0,a.jsxs)(o.A.Body,{children:[(0,a.jsx)("h4",{className:"header-title",children:"Examples"}),(0,a.jsx)("p",{className:"sub-header",children:"A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes"}),(0,a.jsx)(d,{})]})})})}))},62217:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGOTJFRTEzNDE4RjExRTk5MERFRUYxQTM1QTI2Rjg3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGOTJFRTE0NDE4RjExRTk5MERFRUYxQTM1QTI2Rjg3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUY5MkVFMTE0MThGMTFFOTkwREVFRjFBMzVBMjZGODciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUY5MkVFMTI0MThGMTFFOTkwREVFRjFBMzVBMjZGODciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RCzboAAAKTklEQVR42uxdCbRVUxj+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"}}]);
//# sourceMappingURL=7011.690bc39a.chunk.js.map