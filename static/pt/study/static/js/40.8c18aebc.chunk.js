(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[40],{161:function(e,t,n){"use strict";var a=n(5),o=n.n(a),r=n(174);t.a=function(){var e=o.a.useContext(r.a),t=e.title,n=e.setTitle,a=e.logoSize,c=e.setLogoSize,i=e.setDoGoBack;return{title:t,setTitle:n,logoSize:a,setLogoSize:c,doGoBack:e.doGoBack,setDoGoBack:i}}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(){window.scrollTo({top:0,behavior:"smooth"})}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(159),o=n(166);function r(e){return function(t,n){return Object(o.a)(Object(o.a)({},t),{},Object(a.a)({},e,Object(o.a)(Object(o.a)({},t[e]),n)))}}function c(){return function(e){return{welcome:{language:e.welcome.language}}}}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(5),o=n.n(a),r=n(176),c=n(156),i=n(155),u=n(158);function s(){var e=Object(c.a)(["\n  height: 50px;\n  border-radius: 4px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return s=function(){return e},e}var l=i.default.button(s(),(function(e){var t=e.dark,n=e.disabled?u.a.midGray:u.a.darkBlack;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(u.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(u.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),p=o.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(l,Object.assign({type:"button"},n),t)}));function d(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n\n    &:last-of-type {\n      margin-left: 20px;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return d=function(){return e},e}var m=i.default.div(d(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),h=o.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,a=e.leftLabel,r=e.leftDisabled,c=e.leftHandler,i=e.rightLabel,u=e.rightDisabled,s=e.rightHandler;return o.a.createElement(m,null,o.a.createElement(p,{dark:n,disabled:r,onClick:c},a),i&&s&&o.a.createElement(p,{dark:!n,disabled:u,onClick:s},i))})),f=o.a.memo(h)},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(5),o=n.n(a),r=n(158),c=n(156),i=n(155);function u(){var e=Object(c.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: 'SF Pro Display';\n  font-size: 16px;\n  line-height: 24px;\n"]);return u=function(){return e},e}function s(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: -4px 0px 20px;\n\n  svg {\n    circle {\n      transition: stroke-dashoffset 0.35s;\n      transform: rotate(-90deg);\n      transform-origin: 50% 50%;\n\n      &.track {\n        transform: rotate(90deg);\n      }\n    }\n  }\n\n  @media screen and (",") {\n    margin: 20px 0px 40px;\n\n    svg {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"]);return s=function(){return e},e}var l=i.default.div(s(),(function(e){return e.theme.breakpoints.tablet})),p=(i.default.div(u()),o.a.memo((function(e){var t=e.className,n=void 0===t?"":t,a=e.radius,c=void 0===a?30:a,i=e.stroke,u=void 0===i?6:i,s=e.currentStep,p=void 0===s?2:s,d=e.totalSteps,m=void 0===d?4:d,h=e.color,f=void 0===h?r.a.green:h,v=e.colorTrack,b=void 0===v?r.a.gray3:v,g=p/m*100,S=c-u/2,y=2*S*Math.PI,x=y-g/100*y;return o.a.createElement(l,{className:n},o.a.createElement("svg",{width:2*c,height:2*c,viewBox:"0 0 ".concat(2*c," ").concat(2*c)},o.a.createElement("circle",{className:"track",stroke:b,fill:"transparent",strokeWidth:u,r:S,cx:c,cy:c}),o.a.createElement("circle",{stroke:f,fill:"transparent",strokeWidth:u,strokeDasharray:"".concat(y," ").concat(y),style:{strokeDashoffset:x},r:S,cx:c,cy:c}),o.a.createElement("text",{fontSize:"16",fill:"#000000",x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle"},"".concat(p,"/").concat(m))))})))},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(171),o=n(157),r=n(5),c=n.n(r),i=n(156),u=n(155);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=c.a.createElement("path",{d:"M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM10.0234 4.71406L6.73281 9.27656C6.68682 9.34076 6.62619 9.39306 6.55595 9.42914C6.48571 9.46523 6.40787 9.48405 6.32891 9.48405C6.24994 9.48405 6.17211 9.46523 6.10186 9.42914C6.03162 9.39306 5.97099 9.34076 5.925 9.27656L3.97656 6.57656C3.91719 6.49375 3.97656 6.37813 4.07812 6.37813H4.81094C4.97031 6.37813 5.12187 6.45469 5.21562 6.58594L6.32812 8.12969L8.78438 4.72344C8.87813 4.59375 9.02812 4.51562 9.18906 4.51562H9.92188C10.0234 4.51562 10.0828 4.63125 10.0234 4.71406Z",fill:"#00A588"}),d=function(e){var t=e.svgRef,n=e.title,a=l(e,["svgRef","title"]);return c.a.createElement("svg",s({width:14,height:14,viewBox:"0 0 14 14",fill:"none",ref:t},a),n?c.a.createElement("title",null,n):null,p)},m=c.a.forwardRef((function(e,t){return c.a.createElement(d,s({svgRef:t},e))}));n.p;function h(){var e=Object(i.a)(["\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  width: 100%;\n  padding: 0 20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: 1px "," solid;\n  ::placeholder {\n    color: ",";\n  }\n  @media screen and (","){\n    text-align: center;\n  }\n"]);return h=function(){return e},e}function f(){var e=Object(i.a)(["\n  position: relative;\n  display: inline-block;\n  width: calc(100% + 40px);\n  margin: 0 -20px;\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-top: 18px;\n  margin-right: 29px;\n  @media screen and (","){\n    margin-right: 31px;\n  }\n"]);return v=function(){return e},e}function b(){var e=Object(i.a)(["\n  font-weight: bold;\n"]);return b=function(){return e},e}function g(){var e=Object(i.a)(["\n  position: relative;\n  height: 50px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  color: ",";\n  font-size: 14px;\n  text-align: left;\n  width: calc(100% + 40px);\n  padding: 0 20px;\n  margin: 0 -20px;\n  border: none;\n  background-color: ",";\n  border-top: 1px "," solid;\n  border-bottom: ",";\n  @media screen and (","){\n    max-width: 470px;\n    text-align: center;\n  }\n"]);return g=function(){return e},e}var S=u.default.button(g(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.lastItem?"1px ".concat(e.theme.colors.darkBlack_04," solid"):"none"}),(function(e){return e.theme.breakpoints.tablet})),y=Object(u.default)(S)(b()),x=Object(u.default)(m)(v(),(function(e){return e.theme.breakpoints.tablet})),O=u.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),k=u.default.input(h(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.isSelected?e.theme.colors.green_25:"transparent"}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.darkBlack_04}),(function(e){return e.theme.colors.midDarkGray}),(function(e){return e.theme.breakpoints.tablet})),j={selected:[],other:""},w=function(e){var t=e.value,n=void 0===t?j:t,i=e.items,u=e.excludableValue,s=e.singleSelection,l=e.onChange,p=e.allowAddOther,d=e.addOtherLabel,m=e.enableOther,h=e.otherPlaceholder,f=Object(r.useState)(!1),v=Object(o.a)(f,2),b=v[0],g=v[1];Object(r.useEffect)((function(){g(!!m||!!(null===n||void 0===n?void 0:n.other))}),[n,m]);var w=function(e){var t,a=n.selected;t=s||u&&a.includes(u)?[]:a,l&&l({selected:t,other:e}),e||g(!1)};return c.a.createElement(c.a.Fragment,null,i.map((function(e,t){var o,r=null===n||void 0===n||null===(o=n.selected)||void 0===o?void 0:o.includes(e.value);return c.a.createElement(S,{key:e.value,lastItem:i.length===t+1&&!p&&!m,onClick:function(){return function(e){var t,o,r=n.selected,c=n.other,i=r.indexOf(e.value);i>=0?(t=[].concat(Object(a.a)(r.slice(0,i)),Object(a.a)(r.slice(i+1))),o=c):s||e.value===u||u&&r.includes(u)?(t=[e.value],o=void 0):(t=[].concat(Object(a.a)(r),[e.value]),o=c),l&&l({selected:t,other:o})}(e)},isSelected:r},e.label,r&&c.a.createElement(x,null))})),p&&!b&&c.a.createElement(y,{onClick:function(){g(!0)},lastItem:!0},d),b&&c.a.createElement(O,null,c.a.createElement(k,{placeholder:h,value:(null===n||void 0===n?void 0:n.other)||"",isSelected:!!(null===n||void 0===n?void 0:n.other),onChange:function(e){return w(e.target.value)}}),!!(null===n||void 0===n?void 0:n.other)&&c.a.createElement(x,null)))};w.defaultProps={value:j,excludableValue:void 0,singleSelection:!1,onChange:void 0,allowAddOther:!1,addOtherLabel:"",enableOther:!1,otherPlaceholder:""};var C=c.a.memo(w)},188:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l}));var a=n(171),o=n(166),r="/submit-steps",c=["Argentina","Bolivia","Brazil","Colombia","Mexico","Pakistan","Peru","United States"],i=[];function u(){var e,t,n=function(){try{return JSON.parse(window.localStorage.getItem("VirufyWizard")||"{}")}catch(e){return{}}}();return null!==(e=null===n||void 0===n||null===(t=n.welcome)||void 0===t?void 0:t.country)&&void 0!==e?e:""}function s(){var e=u();return c.includes(e)?"cough":"voice"}function l(e,t){return[].concat(Object(a.a)(function(e,t){return[{path:"/step-record/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"/welcome/step-4",nextStep:"".concat(r,"/step-listen/cough"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/cough")},metadata:{currentLogic:"recordYourCough",progressCurrent:1,progressTotal:c.includes(t)?2:3}}},{path:"/step-manual-upload/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/cough"),nextStep:"".concat(r,"/step-listen/cough"),metadata:{currentLogic:"recordYourCough"}}},{path:"/step-listen/cough",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/cough"),nextStep:c.includes(t)?"".concat(r,"/questionary/step1a"):"".concat(r,"/step-record/speech"),metadata:{currentLogic:"recordYourCough"}}}]}(e,t)),Object(a.a)(function(e,t){return c.includes(t)?[]:[{path:"/step-record/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/Introduction"),props:{storeKey:e,previousStep:"".concat(r,"/step-listen/cough"),nextStep:"".concat(r,"/step-listen/speech"),otherSteps:{manualUploadStep:"".concat(r,"/step-manual-upload/speech")},metadata:{currentLogic:"recordYourSpeech",progressCurrent:2,progressTotal:3}}},{path:"/step-manual-upload/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/RecordManualUpload"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/speech"),nextStep:"".concat(r,"/step-listen/speech"),metadata:{currentLogic:"recordYourSpeech"}}},{path:"/step-listen/speech",componentPath:"".concat("SubmitSteps","/").concat("RecordingsSteps","/ListenAudio"),props:{storeKey:e,previousStep:"".concat(r,"/step-record/speech"),nextStep:"".concat(r,"/questionary/step1a"),metadata:{currentLogic:"recordYourSpeech"}}}]}(e,t)),Object(a.a)(function(e,t){var n={total:i.includes(t)?5:6,progressCurrent:c.includes(t)?2:3,progressTotal:c.includes(t)?2:3},a=[{path:"/questionary/step1a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1a"),props:{storeKey:e,previousStep:c.includes(t)?"".concat(r,"/step-listen/cough"):"".concat(r,"/step-listen/speech"),nextStep:"".concat(r,"/questionary/step1b"),otherSteps:{noTestStep:"".concat(r,"/questionary/step2")},metadata:Object(o.a)({current:1},n)}},{path:"/questionary/step1b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step1b"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step1a"),nextStep:"".concat(r,"/questionary/step2"),metadata:Object(o.a)({current:1},n)}},{path:"/questionary/step2",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step2"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step1b"),nextStep:"".concat(r,"/questionary/step3"),otherSteps:{noTestStep:"".concat(r,"/questionary/step1a")},metadata:Object(o.a)({current:2},n)}},{path:"/questionary/step3",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step3"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step2"),nextStep:"".concat(r,"/questionary/step4a"),metadata:Object(o.a)({current:3},n)}},{path:"/questionary/step4a",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4a"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step3"),nextStep:"".concat(r,"/questionary/step5"),otherSteps:{covidSymptomsStep:"".concat(r,"/questionary/step4b")},metadata:Object(o.a)({current:4},n)}},{path:"/questionary/step4b",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step4b"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step4a"),nextStep:"".concat(r,"/questionary/step5"),metadata:Object(o.a)({current:4},n)}},{path:"/questionary/step5",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step5"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step4a"),nextStep:i.includes(t)?"".concat(r,"/thank-you"):"".concat(r,"/questionary/step6"),metadata:Object(o.a)({current:5},n)}}];return i.includes(t)||a.push({path:"/questionary/step6",componentPath:"".concat("SubmitSteps","/").concat("Questionary","/Step6"),props:{storeKey:e,previousStep:"".concat(r,"/questionary/step5"),nextStep:"".concat(r,"/thank-you"),metadata:Object(o.a)({current:6},n)}}),a}(e,t)),[{path:"/thank-you",componentPath:"".concat("SubmitSteps","/").concat("Submission","/ThankYou"),props:{storeKey:e,previousStep:"".concat(r,"/before-submit"),nextStep:"/welcome"}}])}},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(5),o=n.n(a),r=n(295),c=n(748),i=n(156);function u(){var e=Object(i.a)(["\n  margin: 20px 0;\n  \n  div {\n    margin: auto;\n  }\n"]);return u=function(){return e},e}var s=n(155).default.div(u()),l=function(e){var t=e.onChange,n=Object(c.a)().i18n;return o.a.createElement(s,null,o.a.createElement(r.a,{sitekey:"6LcRhdIZAAAAAOI8zafkWF0N5SYOUjMszuEUnrJT",onChange:t,hl:n.language}))}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(168),o=n.n(a),r=n(169),c=n(274),i=n.n(c).a.create({baseURL:"https://ti7vvvk450.execute-api.us-east-2.amazonaws.com/prod"});var u=n(188);function s(e){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(o.a.mark((function e(t){var n,a,r,c,s,l,p,d,m,h,f,v,b,g,S,y,x,O,k,j,w,C,E,q,P,T,L,R,I,B,A,D,K,z,M,G,Q,Y,F,V,U;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setSubmitError,a=t.state,r=t.captchaValue,c=t.action,s=t.nextStep,l=t.setActiveStep,p=t.history,e.prev=1,n(null),v=a.welcome,b=v.language,g=v.country,S=v.region,y=v.agreedConsentTerms,x=v.agreedPolicyTerms,O=v.agreedCovidDetection,k=v.agreedTrainingArtificial,j=a["submit-steps"],w=j.recordYourCough,C=j.recordYourSpeech,E=j.testTaken,q=j.pcrTestDate,P=j.pcrTestResult,T=j.antigenTestDate,L=j.antigenTestResult,R=j.ageGroup,I=j.gender,B=j.biologicalSex,A=j.smokeLastSixMonths,D=j.currentSymptoms,K=j.symptomsStartedDate,z=j.currentRespiratoryCondition,M=j.currentMedicalCondition,(G=new FormData).append("language",b),G.append("country",g),S&&G.append("region",S),window.sourceCampaign&&G.append("source",window.sourceCampaign),G.append("agreedConsentTerms",y),G.append("agreedPolicyTerms",x),G.append("agreedCovidDetection",O),G.append("agreedTrainingArtificial",k),Q=w.recordingFile||w.uploadedFile,G.append("cough",Q,Q.name||"filename.wav"),u.d.includes(g)||(Y=C.recordingFile||C.uploadedFile,G.append("voice",Y,Y.name||"filename_voice.wav")),G.append("testTaken",E.join(",")),E.includes("pcr")&&(G.append("pcrTestDate",q.toISOString()),G.append("pcrTestResult",P)),E.includes("antigen")&&(G.append("antigenTestDate",T.toISOString()),G.append("antigenTestResult",L)),"unselected"!==R&&G.append("ageGroup",R),(F=I.other||I.selected[0])&&G.append("gender",F),B&&G.append("biologicalSex",B),A&&G.append("smokeLastSixMonths",A),(null===D||void 0===D||null===(d=D.selected)||void 0===d?void 0:d.length)>0&&G.append("currentSymptoms",D.selected.join(",")),K&&G.append("symptomsStartedDate",K.toISOString()),(null===z||void 0===z||null===(m=z.selected)||void 0===m?void 0:m.length)>0&&G.append("currentRespiratoryCondition",z.selected.join(",")),(null===M||void 0===M||null===(h=M.selected)||void 0===h?void 0:h.length)>0&&G.append("currentMedicalCondition",M.selected.join(",")),(null===D||void 0===D?void 0:D.other)&&G.append("otherSymptoms",null===D||void 0===D?void 0:D.other),(null===z||void 0===z?void 0:z.other)&&G.append("otherRespiratoryConditions",null===z||void 0===z?void 0:z.other),(null===M||void 0===M?void 0:M.other)&&G.append("otherMedicalConditions",null===M||void 0===M?void 0:M.other),r&&G.append("captchaValue",r),e.next=35,i.post("saveSurvey",G,{headers:{"Content-Type":"multipart/form-data; boundary=SaveSurvey"}});case 35:V=e.sent,c({}),s&&(null===(f=V.data)||void 0===f?void 0:f.submissionId)&&(l(!1),p.push(s,{submissionId:null===(U=V.data)||void 0===U?void 0:U.submissionId})),e.next=44;break;case 40:e.prev=40,e.t0=e.catch(1),console.log(e.t0),n("beforeSubmit:submitError");case 44:case"end":return e.stop()}}),e,null,[[1,40]])})))).apply(this,arguments)}},242:function(e,t,n){"use strict";n.r(t);var a=n(168),o=n.n(a),r=n(169),c=n(157),i=n(5),u=n.n(i),s=n(179),l=n(170),p=n.n(l),d=n(748),m=n(240),h=n(167),f=n(160),v=n(177),b=n(172),g=n(178),S=n(163),y=n(175),x=n(218),O=n(161),k=n(162),j=n(219),w=n(181),C=n(165),E=n(189),q=g.e({currentRespiratoryCondition:g.e().required()}).defined();t.default=u.a.memo((function(e){var t,n,a=e.previousStep,l=e.nextStep,g=e.storeKey,P=e.metadata,T=p()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,L=Object(O.a)(),R=L.setDoGoBack,I=L.setTitle,B=Object(s.g)(),A=Object(d.a)().t,D=Object(f.d)(Object(S.b)(g)),K=D.state,z=D.action,M=u.a.useState(!0),G=Object(c.a)(M,2),Q=G[0],Y=G[1],F=u.a.useState(null),V=Object(c.a)(F,2),U=V[0],_=V[1],H=u.a.useState(null),N=Object(c.a)(H,2),W=N[0],J=N[1],Z=Object(h.e)({defaultValues:null===K||void 0===K?void 0:K[g],resolver:Object(v.a)(q)}),X=Z.control,$=Z.handleSubmit,ee=Z.formState.errors,te=u.a.useCallback((function(){Y(!1),a?B.push(a):B.goBack()}),[B,a]);Object(i.useEffect)((function(){Object(k.a)(),I(A("questionary:headerText")),R((function(){return te}))}),[te,R,I,A]);var ne=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}if((null!==(n=null===P||void 0===P?void 0:P.current)&&void 0!==n?n:5)!==(null!==(a=null===P||void 0===P?void 0:P.total)&&void 0!==a?a:6)){e.next=6;break}return e.next=4,Object(j.a)({setSubmitError:function(e){return _(e?A(e):null)},state:K,captchaValue:W,action:z,nextStep:l,setActiveStep:Y,history:B});case 4:e.next=8;break;case 6:z(t),l&&(Y(!1),B.push(l));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{currentStep:(null===P||void 0===P?void 0:P.progressCurrent)||3,totalSteps:(null===P||void 0===P?void 0:P.progressTotal)||4}),u.a.createElement(E.GrayExtraInfo,null,A("questionary:caption")),u.a.createElement(E.QuestionText,{bold:!1},u.a.createElement(m.a,{i18nKey:"questionary:respiration.question"},u.a.createElement("strong",null,"Which of the below respiratory conditions do you currently have?")," (Select all that apply)")),u.a.createElement(h.a,{control:X,name:"currentRespiratoryCondition",defaultValue:{selected:[],other:""},render:function(e){var t=e.onChange,n=e.value;return u.a.createElement(w.a,{value:n,onChange:function(e){return t(e)},items:[{value:"asthma",label:A("questionary:respiration.options.asthma")},{value:"bronchitis",label:A("questionary:respiration.options.bronchitis")},{value:"copdEmphysema",label:A("questionary:respiration.options.emphysema")},{value:"pneumonia",label:A("questionary:respiration.options.pneumonia")},{value:"tuberculosis",label:A("questionary:respiration.options.tuberculosis")},{value:"none",label:A("questionary:respiration.options.none")}],allowAddOther:!0,addOtherLabel:A("questionary:respiration.options.addOther"),otherPlaceholder:A("questionary:respiration.addOtherPlaceholder"),excludableValue:"none"})}}),u.a.createElement("p",null,u.a.createElement(b.a,{errors:ee,name:"name"})),Q&&u.a.createElement(T,null,P&&u.a.createElement(E.QuestionStepIndicator,null,P.current," ",A("questionary:stepOf")," ",P.total),(null!==(t=null===P||void 0===P?void 0:P.current)&&void 0!==t?t:5)===(null!==(n=null===P||void 0===P?void 0:P.total)&&void 0!==n?n:6)&&u.a.createElement(x.a,{onChange:J}),U&&u.a.createElement(E.TempBeforeSubmitError,null,U),u.a.createElement(C.a,{invert:!0,leftLabel:A("questionary:nextButton"),leftHandler:$(ne)})))}))}}]);
//# sourceMappingURL=40.8c18aebc.chunk.js.map