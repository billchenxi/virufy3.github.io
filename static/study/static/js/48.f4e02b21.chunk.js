(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[48],{217:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(157),r=n(5),c=n.n(r),o=n(54),u=n(290),i=n(175),p=n(159),l=n(156),m=n(155);function s(){var e=Object(l.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px; \n  padding-left: ",";\n  padding-right: ","; \n\n  @media screen and (","){\n    margin: auto;\n    padding: 0px 60px;\n\n    max-width: 768px;\n    width: 100%;\n  }\n"]);return s=function(){return e},e}var d=m.default.div(s(),(function(e){return e.theme.layout.generalPaddingLeft}),(function(e){return e.theme.layout.generalPaddingRight}),(function(e){return e.theme.breakpoints.tablet}));function f(){var e=Object(l.a)(["\n  margin-bottom: 24px;\n"]);return f=function(){return e},e}function h(){var e=Object(l.a)(["\n  height: 100%;\n"]);return h=function(){return e},e}function b(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction:column;\n\n  height:100%;\n"]);return b=function(){return e},e}var v=m.default.div(b()),g=m.default.div(h()),w=m.default.div(f()),x=Object(o.a)((function(e){var t=e.container;return n(228)("./".concat(t))}),{fallback:c.a.createElement("div",null,"Loading ...")});var j=c.a.memo((function(e){var t=e.steps,n=e.children,r=Object(i.i)(),o=Object(i.h)(),l=c.a.useState(!1),m=Object(a.a)(l,2),s=m[0],f=m[1],h=c.a.useMemo((function(){var e=r.url.replace(/\/$/,"");return t.map((function(t){return e+t.path}))}),[r.url,t]);return c.a.useEffect((function(){f(!0)}),[]),c.a.createElement(p.a,null,c.a.createElement(v,null,c.a.createElement(g,null,s&&c.a.createElement(u.a,{location:o,timing:"ease-in-out",duration:500,pathList:h},t.map((function(e){return c.a.createElement(i.b,{key:e.componentPath,exact:!0,path:Array.isArray(e.path)?e.path.map((function(e){return r.path+e})):r.path+e.path,render:function(){return c.a.createElement(d,null,c.a.createElement(x,Object.assign({container:e.componentPath},e.props)))}})})))),c.a.createElement(w,{id:"wizard-buttons"},n)))}))},249:function(e,t,n){"use strict";n.r(t);var a=n(158),r=n(5),c=n.n(r),o=n(159),u=n(175),i=n(217),p=n(156),l=n(155);function m(){var e=Object(p.a)(["\n  background-color: ",";\n  border-radius: 50%;\n  display: inline-block;\n\n  height: 7px;\n  width: 7px;\n\n  &:not(:first-of-type){\n    margin-left: 6px;\n  };\n\n  &.active {\n    background-color: ",";\n  };\n\n"]);return m=function(){return e},e}function s(){var e=Object(p.a)(["\n  display: flex;\n  justify-content:center;\n  padding: 0;\n  margin-bottom: 22px;\n\n @media screen and (","){\n    margin-bottom: 40px;\n  }\n"]);return s=function(){return e},e}var d=l.default.ul(s(),(function(e){return e.theme.breakpoints.tablet})),f=l.default.li(m(),(function(e){return e.theme.colors.gray}),(function(e){return e.theme.colors.darkBlack})),h=c.a.memo((function(e){var t=e.className,n=void 0===t?"":t,a=e.current,r=e.total,o=c.a.useMemo((function(){for(var e=[],t=0;t<r;t+=1)e.push(c.a.createElement(f,{className:t===a?"active":"",id:"WelcomeStepButton-".concat(t),key:"WelcomeStepButton-".concat(t)}));return e}),[a,r]);return c.a.createElement(d,{className:n},o)}));Object(o.c)(window.localStorage);Object(o.b)(Object(a.a)({},"welcome",{}),{name:"VirufyWizard"});var b=[{path:"",componentPath:"Welcome/Step1",props:{storeKey:"welcome",nextStep:"".concat("/welcome","/step-2")}},{path:"/step-2",componentPath:"Welcome/Step2",props:{storeKey:"welcome",previousStep:"".concat("/welcome"),nextStep:"".concat("/welcome","/step-3")}},{path:"/step-3",componentPath:"Welcome/Step3",props:{storeKey:"welcome",previousStep:"".concat("/welcome","/step-2"),nextStep:"".concat("/welcome","/step-4")}},{path:"/step-4",componentPath:"Welcome/Step4",props:{storeKey:"welcome",previousStep:"".concat("/welcome","/step-3"),nextStep:"/submit-steps/step-record/cough"}}];t.default=c.a.memo((function(){var e=Object(u.h)(),t=Object(u.i)(),n=e.pathname.replace(t.url,""),a=b.findIndex((function(e){return e.path===n}));return c.a.createElement(i.a,{steps:b},c.a.createElement(h,{current:a,total:b.length}))}))}}]);
//# sourceMappingURL=48.f4e02b21.chunk.js.map