(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4927:function(e,t,a){Promise.resolve().then(a.bind(a,8029)),Promise.resolve().then(a.bind(a,6422)),Promise.resolve().then(a.bind(a,5021)),Promise.resolve().then(a.t.bind(a,5250,23)),Promise.resolve().then(a.t.bind(a,5935,23)),Promise.resolve().then(a.t.bind(a,9002,23)),Promise.resolve().then(a.t.bind(a,3992,23)),Promise.resolve().then(a.bind(a,1373)),Promise.resolve().then(a.bind(a,8625)),Promise.resolve().then(a.bind(a,11)),Promise.resolve().then(a.t.bind(a,4259,23)),Promise.resolve().then(a.bind(a,9236)),Promise.resolve().then(a.bind(a,8271))},8029:function(e,t,a){"use strict";a.r(t),a.d(t,{ThemeProviders:function(){return i}});var l=a(3827),r=a(1774),s=a(7080),n=a.n(s);function i(e){let{children:t}=e;return(0,l.jsx)(r.f,{attribute:"class",defaultTheme:n().theme,enableSystem:!0,children:t})}},5579:function(e,t,a){"use strict";var l=a(3827),r=a(8792);t.Z=e=>{let{href:t,...a}=e,s=t&&t.startsWith("/"),n=t&&t.startsWith("#");return s?(0,l.jsx)(r.default,{href:t,...a}):n?(0,l.jsx)("a",{href:t,...a}):(0,l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:t,...a})}},6422:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var l=a(3827),r=a(4090),s=a(5579),n=[{href:"/",title:"Home"},{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/about",title:"About"}],i=()=>{let[e,t]=(0,r.useState)(!1),a=()=>{t(e=>(e?document.body.style.overflow="auto":document.body.style.overflow="hidden",!e))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{"aria-label":"Toggle Menu",onClick:a,className:"sm:hidden",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-8 w-8 text-gray-900 dark:text-gray-100",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,l.jsxs)("div",{className:"fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ".concat(e?"translate-x-0":"translate-x-full"),children:[(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)("button",{className:"mr-8 mt-11 h-8 w-8","aria-label":"Toggle Menu",onClick:a,children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,l.jsx)("nav",{className:"fixed mt-8 h-full",children:n.map(e=>(0,l.jsx)("div",{className:"px-12 py-4",children:(0,l.jsx)(s.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title))})]})]})}},5021:function(e,t,a){"use strict";a.r(t);var l=a(3827),r=a(4090),s=a(1774);t.default=()=>{let[e,t]=(0,r.useState)(!1),{theme:a,setTheme:n,resolvedTheme:i}=(0,s.F)();return((0,r.useEffect)(()=>t(!0),[]),e)?(0,l.jsx)("button",{"aria-label":"Toggle Dark Mode",onClick:()=>n("dark"===a||"dark"===i?"light":"dark"),children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 text-gray-900 dark:text-gray-100",children:e&&("dark"===a||"dark"===i)?(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):(0,l.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})}):null}},7080:function(e){"use strict";e.exports={title:"Alexey's Blog",author:"Alexey Yermakov",headerTitle:"AlexeysBlog",description:"Musings on different things.",language:"en-us",theme:"system",siteUrl:"https://yyexela.github.io/",siteRepo:"https://github.com/yyexela/blog",siteLogo:"/static/images/prof_pic.png",socialBanner:"/static/images/prof_pic.png",email:"yyexela@gmail.com",github:"https://github.com/yyexela",linkedin:"https://www.linkedin.com/in/alexeyy",locale:"en-US",analytics:{},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"search.json"}}}},3992:function(){}},function(e){e.O(0,[250,830,971,69,744],function(){return e(e.s=4927)}),_N_E=e.O()}]);