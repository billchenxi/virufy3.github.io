(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[26,51],{240:function(e,t,a){"use strict";a.r(t);var n=a(168),r=a.n(n),o=a(169),l=a(157),i=a(5),u=a.n(i),s=a(175),c=a(167),d=a.n(c),p=a(748),b=a(238),m=a(166),v=a(159),h=a(173),f=a(171),y=a(174),E=a(164),O=a(182),q=a(292),S=a(162),j=a(163),x=a(294),g=a(183),k=a(165),w=a(188),C=y.e({currentRespiratoryCondition:y.e().required()}).defined();t.default=u.a.memo((function(e){var t,a,n=e.previousStep,c=e.nextStep,y=e.storeKey,T=e.metadata,B=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,V=Object(S.a)(),I=V.setDoGoBack,P=V.setTitle,A=Object(s.g)(),G=Object(p.a)().t,J=Object(v.d)(Object(E.b)(y)),K=J.state,L=J.action,Q=u.a.useState(!0),R=Object(l.a)(Q,2),z=R[0],D=R[1],F=u.a.useState(null),H=Object(l.a)(F,2),W=H[0],M=H[1],N=u.a.useState(null),U=Object(l.a)(N,2),X=U[0],Y=U[1],Z=Object(m.e)({defaultValues:null===K||void 0===K?void 0:K[y],resolver:Object(h.a)(C)}),$=Z.control,_=Z.handleSubmit,ee=Z.formState.errors,te=u.a.useCallback((function(){D(!1),n?A.push(n):A.goBack()}),[A,n]);Object(i.useEffect)((function(){Object(j.a)(),P(G("questionary:headerText")),I((function(){return te}))}),[te,I,P,G]);var ae=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if((null!==(a=null===T||void 0===T?void 0:T.current)&&void 0!==a?a:5)!==(null!==(n=null===T||void 0===T?void 0:T.total)&&void 0!==n?n:6)){e.next=6;break}return e.next=4,Object(x.a)({setSubmitError:function(e){return M(e?G(e):null)},state:K,captchaValue:X,action:L,nextStep:c,setActiveStep:D,history:A});case 4:e.next=8;break;case 6:L(t),c&&(D(!1),A.push(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(O.a,{currentStep:(null===T||void 0===T?void 0:T.progressCurrent)||3,totalSteps:(null===T||void 0===T?void 0:T.progressTotal)||4}),u.a.createElement(w.GrayExtraInfo,null,G("questionary:caption")),u.a.createElement(w.QuestionText,{bold:!1},u.a.createElement(b.a,{i18nKey:"questionary:respiration.question"},u.a.createElement("strong",null,"Which of the below respiratory conditions do you currently have?")," (Select all that apply)")),u.a.createElement(m.a,{control:$,name:"currentRespiratoryCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,a=e.value;return u.a.createElement(g.a,{value:a,onChange:function(e){return t(e)},items:[{value:"asthma",label:G("questionary:respiration.options.asthma")},{value:"bronchitis",label:G("questionary:respiration.options.bronchitis")},{value:"copdEmphysema",label:G("questionary:respiration.options.emphysema")},{value:"pneumonia",label:G("questionary:respiration.options.pneumonia")},{value:"tuberculosis",label:G("questionary:respiration.options.tuberculosis")},{value:"none",label:G("questionary:respiration.options.none")}],allowAddOther:!0,addOtherLabel:G("questionary:respiration.options.addOther"),otherPlaceholder:G("questionary:respiration.addOtherPlaceholder"),excludableValue:"none"})}}),u.a.createElement("p",null,u.a.createElement(f.a,{errors:ee,name:"name"})),z&&u.a.createElement(B,null,T&&u.a.createElement(w.QuestionStepIndicator,null,T.current," ",G("questionary:stepOf")," ",T.total),(null!==(t=null===T||void 0===T?void 0:T.current)&&void 0!==t?t:5)===(null!==(a=null===T||void 0===T?void 0:T.total)&&void 0!==a?a:6)&&u.a.createElement(q.a,{onChange:Y}),W&&u.a.createElement(w.TempBeforeSubmitError,null,W),u.a.createElement(k.a,{invert:!0,leftLabel:G("questionary:nextButton"),leftHandler:_(ae)})))}))},272:function(e,t,a){"use strict";a.r(t);var n=a(240);a.d(t,"default",(function(){return n.default}))}}]);
//# sourceMappingURL=26.b748855a.chunk.js.map