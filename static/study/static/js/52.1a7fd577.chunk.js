(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[52],{241:function(e,t,a){"use strict";a.r(t);var n=a(168),r=a.n(n),l=a(169),o=a(157),i=a(5),u=a.n(i),c=a(175),s=a(167),d=a.n(s),m=a(748),b=a(238),p=a(166),v=a(159),h=a(173),f=a(171),y=a(174),O=a(164),E=a(182),g=a(292),S=a(162),q=a(163),j=a(294),x=a(183),w=a(165),C=a(188),k=y.e({currentMedicalCondition:y.e()}).defined();t.default=u.a.memo((function(e){var t=e.previousStep,a=e.nextStep,n=e.storeKey,s=e.metadata,y=d()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,T=Object(S.a)(),B=T.setDoGoBack,H=T.setTitle,I=Object(c.g)(),D=Object(m.a)().t,F=Object(v.d)(Object(O.b)(n)),L=F.state,V=F.action,A=u.a.useState(!0),M=Object(o.a)(A,2),P=M[0],G=M[1],J=Object(p.e)({defaultValues:null===L||void 0===L?void 0:L[n],resolver:Object(h.a)(k)}),K=J.control,Q=J.handleSubmit,z=J.formState,W=z.errors,N=u.a.useState(null),R=Object(o.a)(N,2),U=R[0],X=R[1],Y=u.a.useState(null),Z=Object(o.a)(Y,2),$=Z[0],_=Z[1],ee=z.isSubmitting;Object(i.useEffect)((function(){$||X(null)}),[$]);var te=function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,Object(j.a)({setSubmitError:function(e){return X(e?D(e):null)},state:L,captchaValue:$,action:V,nextStep:a,setActiveStep:G,history:I});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=u.a.useCallback((function(){G(!1),t?I.push(t):I.goBack()}),[I,t]);return Object(i.useEffect)((function(){Object(q.a)(),H(D("questionary:headerText")),B((function(){return ae}))}),[ae,B,H,D]),u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{currentStep:(null===s||void 0===s?void 0:s.progressCurrent)||3,totalSteps:(null===s||void 0===s?void 0:s.progressTotal)||4}),u.a.createElement(C.GrayExtraInfo,null,D("questionary:caption")),u.a.createElement(C.QuestionText,{bold:!1},u.a.createElement(b.a,{i18nKey:"questionary:medical.question"},u.a.createElement("strong",null,"Which of the below medical conditions do you currently have?")," (Select all that apply)")),u.a.createElement(p.a,{control:K,name:"currentMedicalCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,a=e.value;return u.a.createElement(x.a,{value:a,onChange:function(e){return t(e)},items:[{value:"chronicLungDisease",label:D("questionary:medical.options.chronicLung")},{value:"congestiveHeartFailure",label:D("questionary:medical.options.congestiveHeart")},{value:"coughFromOtherMedicalConditions",label:D("questionary:medical.options.cough")},{value:"extremeObesity",label:D("questionary:medical.options.obesity")},{value:"hivAidsOrImpairedImmuneSystem",label:D("questionary:medical.options.hiv")},{value:"pulmonaryFibrosis",label:D("questionary:medical.options.pulmonary")},{value:"pregnancy",label:D("questionary:medical.options.pregnancy")},{value:"valvularHeartDisease",label:D("questionary:medical.options.valvularHeart")},{value:"none",label:D("questionary:medical.options.none")}],allowAddOther:!0,addOtherLabel:D("questionary:medical.options.addOther"),otherPlaceholder:D("questionary:medical.addOtherPlaceholder"),excludableValue:"none"})}}),u.a.createElement("p",null,u.a.createElement(f.a,{errors:W,name:"name"})),P&&u.a.createElement(y,null,s&&u.a.createElement(C.QuestionStepIndicator,null,s.current," ",D("questionary:stepOf")," ",s.total),u.a.createElement(g.a,{onChange:_}),U&&u.a.createElement(C.TempBeforeSubmitError,null,U),u.a.createElement(w.a,{invert:!0,leftLabel:D(ee?"questionary:submitting":"beforeSubmit:submitButton"),leftDisabled:!$||ee,leftHandler:Q(te)})))}))}}]);
//# sourceMappingURL=52.1a7fd577.chunk.js.map