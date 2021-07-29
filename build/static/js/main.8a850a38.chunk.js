(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(17),a=c.n(r),i=(c(23),c(10)),l=c(8),o=c(0),j=[{page:"About",links:[{text:"Bachelor student with a huge passion for programming."},{text:"Learning Front End but curious about everything."}]},{page:"Projects",links:[{label:"Personal website",description:"This website! Built with ReactJS",url:"/",img:"https://i.imgur.com/vpeDVEX.png"},{label:"Shopping cart JS",description:"Functional cart component",url:"https://relaxed-curran-8bf11b.netlify.app/",img:"https://i.imgur.com/7cLXi3V.png"},{label:"Color generator",description:"Generates shades of colors",url:"https://epic-wright-98b54f.netlify.app/",img:"https://i.imgur.com/SrLw4OM.png"},{label:"Product reviews",description:"Reviews component for products",url:"https://youthful-snyder-3139e5.netlify.app/",img:"https://i.imgur.com/Eyp1Xqa.png"}]},{page:"Contact",links:[{label:"+40756573159",icon:Object(o.jsx)(l.g,{})},,{label:"opariuccristian",icon:Object(o.jsx)(l.c,{})},{label:"Freecodecamp",icon:Object(o.jsx)(l.b,{}),url:"https://www.freecodecamp.org/jerrykapa"},,]}],b=n.a.createContext(),d=function(e){var t=e.children,c=Object(s.useState)(!1),n=Object(i.a)(c,2),r=n[0],a=n[1],l=Object(s.useState)(!1),d=Object(i.a)(l,2),u=d[0],h=d[1],O=Object(s.useState)({page:"",links:[]}),m=Object(i.a)(O,2),p=m[0],x=m[1],f=Object(s.useState)({}),g=Object(i.a)(f,2),k=g[0],v=g[1],A=j;return Object(o.jsx)(b.Provider,{value:{openSubmenu:function(e,t){var c=j.find((function(t){return t.page===e}));x(c),v(t),h(!0)},closeSubmenu:function(){h(!1)},openSidebar:function(){a(!0)},closeSidebar:function(){a(!1)},isSubmenuOpen:u,isSidebarOpen:r,page:p,location:k,datalinks:A},children:t})},u=function(){return Object(s.useContext)(b)},h=function(){var e=u().closeSubmenu;return Object(o.jsx)("section",{className:"hero",onMouseOver:e,children:Object(o.jsx)("div",{className:"hero-center",children:Object(o.jsxs)("article",{className:"hero-info",children:[Object(o.jsx)("h1",{children:"I'm Opariuc Cristian"}),Object(o.jsx)("h2",{children:"A front-end web developer"})]})})})};var O=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(h,{})})},m=c(7),p=function(){var e=u(),t=e.openSidebar,c=e.openSubmenu,s=e.closeSubmenu,n=function(e){var t=e.target.textContent,s=e.target.getBoundingClientRect(),n=(s.left+s.right)/2,r=s.bottom-3;c(t,{center:n,bottom:r})};return Object(o.jsxs)("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||s()},children:[Object(o.jsx)(m.b,{to:"/",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"nav-logo"})}),Object(o.jsx)("div",{className:"nav-center",children:Object(o.jsxs)("div",{className:"nav-links",children:[Object(o.jsx)(m.b,{to:"/about",children:Object(o.jsx)("button",{className:"link-btn",onMouseOver:n,children:"About"})}),Object(o.jsx)(m.b,{to:"/projects",children:Object(o.jsx)("button",{className:"link-btn",onMouseOver:n,children:"Projects"})}),Object(o.jsx)(m.b,{to:"/contact",children:Object(o.jsx)("button",{className:"link-btn",onMouseOver:n,children:"Contact"})})]})}),Object(o.jsxs)("ul",{className:"socials",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.facebook.com/Opariuc.Cristian/",target:"_blank",children:Object(o.jsx)(l.d,{className:"icon"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/jerrykapa",target:"_blank",children:Object(o.jsx)(l.e,{className:"icon"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/cristian-andrei-opariuc-1b7748184/",target:"_blank",children:Object(o.jsx)(l.f,{className:"icon"})})})]}),Object(o.jsx)("button",{className:"btn toggle-btn",onClick:t,children:Object(o.jsx)(l.a,{})})]})},x=function(){var e=u(),t=e.isSubmenuOpen,c=e.location,n=e.page,r=n.page,a=n.links,l=Object(s.useRef)(null),j=Object(s.useState)("col-2"),b=Object(i.a)(j,2),d=b[0],h=b[1];return Object(s.useEffect)((function(){h("col-2");var e=l.current,t=c.center,s=c.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(s,"px"),1===a.length&&h("col-1"),2===a.length&&h("col-2"),3===a.length&&h("col-3"),a.length>3&&h("col-4")}),[c,r,a]),console.log(a),Object(o.jsx)("aside",{className:"".concat(t?"submenu show":"submenu"),ref:l,children:Object(o.jsxs)("section",{children:[Object(o.jsx)("h4",{children:r}),Object(o.jsxs)("div",{className:"submenu-center ".concat(d),children:[a.map((function(e,t){var c=e.url,s=e.icon,n=e.label,r=e.img,a=e.text;return Object(o.jsxs)("div",{className:"submenu-card",children:[Object(o.jsxs)("a",{href:c,className:"project-link",target:"_blank",children:[s,a,Object(o.jsx)("h4",{id:"submenu-label",children:n})]}),e.img?Object(o.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:r,alt:"dog",className:"image"})}):""]},t)})),"About"===r?Object(o.jsx)(m.b,{to:"/about",children:Object(o.jsx)("div",{className:"about-btn-container",children:Object(o.jsx)("button",{className:"about-btn",children:"About page"})})}):""]})]})})};var f=function(){var e=u().closeSubmenu;return Object(o.jsx)("section",{className:"about-section",onMouseOver:e,children:Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("h2",{children:"About me"}),Object(o.jsxs)("div",{className:"about-content",children:[Object(o.jsx)("h3",{children:"I am a young linguistics student with a passion for web development, specifically the front-end side of things. My dream is to be a front-end or fullstack developer and to take part in awesome projects, but most importantly to learn as much as possible. Besides programming, I am interested in tinkering with devices and gadgets, but also travelling, having lived in Germany for one year, and music, especially guitar. My experience only comes from completed courses, but I am confident in my ability to learn fast and dynamically and challenges don't scare me."}),Object(o.jsx)("h2",{id:"completed-courses",children:"Completed courses"}),Object(o.jsxs)("div",{className:"about-courses",children:[Object(o.jsx)("div",{className:"about-course",children:Object(o.jsx)("a",{class:"about-link",href:"https://www.freecodecamp.org/certification/jerrykapa/responsive-web-design",target:"_blank",children:Object(o.jsx)("h3",{children:"Responsive web design"})})}),Object(o.jsx)("div",{className:"about-course",children:Object(o.jsx)("a",{class:"about-link",href:"https://www.freecodecamp.org/certification/jerrykapa/javascript-algorithms-and-data-structures",target:"_blank",children:Object(o.jsx)("h3",{children:"JavaScript Algorithms and Data Structures"})})}),Object(o.jsx)("div",{className:"about-course",children:Object(o.jsx)("a",{className:"about-link",href:"https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF",target:"_blank",children:Object(o.jsx)("h3",{children:"React.js"})})})]})]})]})})};var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"The page you searched for was not found."}),Object(o.jsx)("button",{children:Object(o.jsx)(m.b,{to:"/",children:"Return home"})})]})};var k=function(){var e=u(),t=e.datalinks,c=e.closeSubmenu;return Object(o.jsx)("section",{className:"projects-section",onMouseOver:c,children:Object(o.jsx)("div",{className:"hero-center",children:Object(o.jsx)("div",{className:"projects-container",children:t[1].links.map((function(e,t){var c=e.label,s=e.url,n=e.img,r=e.description;return Object(o.jsx)("a",{href:s,target:"_blank",className:"project-link",children:Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsx)("img",{className:"project-img",src:n,alt:"project"}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h2",{className:"project-title",children:c}),Object(o.jsx)("h3",{id:"project-text",children:r})]})]},t)})}))})})})};var v=function(){var e=u().closeSubmenu;return Object(o.jsx)("div",{className:"contact-container",onMouseOver:e,children:Object(o.jsxs)("section",{className:"contact-section",children:[Object(o.jsx)("div",{className:"contact-title",children:Object(o.jsx)("h2",{children:"Contact information"})}),Object(o.jsxs)("div",{className:"contact-methods",children:[Object(o.jsx)("h3",{children:"opariuccristian@gmail.com"}),Object(o.jsx)("h3",{children:"ocrsti@gmail.com"}),Object(o.jsx)("h3",{children:"+40756473159"}),Object(o.jsx)("a",{className:"contact-link",href:"https://www.linkedin.com/in/cristian-andrei-opariuc-1b7748184/",target:"_blank",children:Object(o.jsx)("h3",{children:"Linkedin profile"})}),Object(o.jsx)("a",{className:"contact-link",href:"https://github.com/jerrykapa",target:"_blank",children:Object(o.jsx)("h3",{children:"GitHub page"})}),Object(o.jsx)("a",{className:"contact-link",href:"https://www.freecodecamp.org/jerrykapa",target:"_blank",children:Object(o.jsx)("h3",{children:"Freecodecamp profile"})})]})]})})},A=function(){var e=u(),t=e.closeSidebar,c=e.isSidebarOpen;return Object(o.jsx)("aside",{className:"".concat(c?"sidebar-wrapper show":"sidebar-wrapper"),children:Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)("button",{className:"close-btn",onClick:t,children:Object(o.jsx)(l.h,{})}),Object(o.jsx)("div",{className:"sidebar-links",children:j.map((function(e,t){var c=e.links,s=e.page;return Object(o.jsxs)("article",{children:[Object(o.jsx)("h4",{children:s}),Object(o.jsx)("div",{className:"sidebar-sublinks",children:c.map((function(e,t){var c=e.url,s=e.icon,n=e.label,r=e.img,a=e.text;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("a",{href:c,target:"_blank",rel:"noreferer",className:"project-link",children:[a,s,Object(o.jsx)("h4",{children:n})]}),e.img?Object(o.jsx)("a",{href:c,target:"_blank",rel:"noreferer",className:"project-link",children:Object(o.jsx)("img",{src:r,alt:"project_img",className:"sidebar-img"})}):""]},t)}))})]},t)}))})]})})},N=c(2);var y=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(m.a,{children:[Object(o.jsx)(p,{}),Object(o.jsx)(x,{}),Object(o.jsx)(A,{}),Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{exact:!0,path:"/",children:Object(o.jsx)(O,{})}),Object(o.jsx)(N.a,{path:"/about",children:Object(o.jsx)(f,{})}),Object(o.jsx)(N.a,{path:"/projects",children:Object(o.jsx)(k,{})}),Object(o.jsx)(N.a,{path:"/contact",children:Object(o.jsx)(v,{})}),Object(o.jsx)(N.a,{path:"*",children:Object(o.jsx)(g,{})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{children:Object(o.jsx)(y,{})})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.8a850a38.chunk.js.map