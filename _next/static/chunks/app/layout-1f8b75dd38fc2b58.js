(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4830:function(e,t,s){Promise.resolve().then(s.t.bind(s,9039,23)),Promise.resolve().then(s.t.bind(s,4388,23)),Promise.resolve().then(s.bind(s,4288)),Promise.resolve().then(s.bind(s,2010)),Promise.resolve().then(s.bind(s,1147))},4288:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var r=s(2265);function n(){return(0,r.useEffect)(()=>{console.warn=()=>{},s(14)},[]),null}},2010:function(e,t,s){"use strict";s.r(t);var r=s(2265);t.default=()=>((0,r.useEffect)(()=>{let e=document.getElementsByTagName("head")[0];for(let t of["regular","thin","light","bold","fill","duotone"]){let s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/".concat(t,"/style.css"),e.appendChild(s)}},[]),null)},1147:function(e,t,s){"use strict";s.r(t);var r=s(7437),n=s(2265),o=s(7907);t.default=()=>{let e=(0,o.usePathname)();return(0,n.useEffect)(()=>{window.scrollTo(0,0)},[e]),(0,n.useEffect)(()=>{let e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray="".concat(t," ").concat(t),e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";let s=()=>{let s=t-window.scrollY*t/(document.documentElement.scrollHeight-window.innerHeight);e.style.strokeDashoffset=s};s(),window.addEventListener("scroll",s);let r=()=>{window.scrollY>50?document.querySelector(".progress-wrap").classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")};window.addEventListener("scroll",r);let n=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};return document.querySelector(".progress-wrap").addEventListener("click",n),()=>{window.removeEventListener("scroll",s),window.removeEventListener("scroll",r),document.querySelector(".progress-wrap").removeEventListener("click",n)}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"progress-wrap",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})})}},4388:function(){},9039:function(){}},function(e){e.O(0,[467,971,69,744],function(){return e(e.s=4830)}),_N_E=e.O()}]);