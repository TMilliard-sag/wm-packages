(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+yXi":function(e,t,s){"use strict";s.d(t,"a",function(){return d}),s.d(t,"b",function(){return g});var i=s("8Y7J"),n=s("SVse"),r=s("s7LF");const o=["cb"],a=function(e,t,s){return{"p-checkbox-label":!0,"p-checkbox-label-active":e,"p-disabled":t,"p-checkbox-label-focus":s}};function c(e,t){if(1&e){const e=i.gc();i.fc(0,"label",7),i.pc("click",function(t){i.Rc(e);const s=i.tc(),n=i.Pc(3);return s.onClick(t,n,!0)}),i.bd(1),i.ec()}if(2&e){const e=i.tc();i.Ob(e.labelStyleClass),i.Ac("ngClass",i.Ic(5,a,e.checked,e.disabled,e.focused)),i.Mb("for",e.inputId),i.Lb(1),i.cd(e.label)}}const l=function(e,t,s){return{"p-checkbox p-component":!0,"p-checkbox-checked":e,"p-checkbox-disabled":t,"p-checkbox-focused":s}},u=function(e,t,s){return{"p-highlight":e,"p-disabled":t,"p-focus":s}},h={provide:r.l,useExisting:Object(i.db)(()=>d),multi:!0};let d=(()=>{class e{constructor(e){this.cd=e,this.checkboxIcon="pi pi-check",this.onChange=new i.p,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1,this.checked=!1}onClick(e,t,s){e.preventDefault(),this.disabled||this.readonly||(this.checked=!this.checked,this.updateModel(e),s&&t.focus())}updateModel(e){this.binary?this.onModelChange(this.checked):(this.checked?this.addValue():this.removeValue(),this.onModelChange(this.model),this.formControl&&this.formControl.setValue(this.model)),this.onChange.emit({checked:this.checked,originalEvent:e})}handleChange(e){this.readonly||(this.checked=e.target.checked,this.updateModel(e))}isChecked(){return this.binary?this.model:this.model&&this.model.indexOf(this.value)>-1}removeValue(){this.model=this.model.filter(e=>e!==this.value)}addValue(){this.model=this.model?[...this.model,this.value]:[this.value]}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.checked=this.isChecked(),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(i.Zb(i.h))},e.\u0275cmp=i.Tb({type:e,selectors:[["p-checkbox"]],viewQuery:function(e,t){if(1&e&&i.hd(o,1),2&e){let e;i.Oc(e=i.qc())&&(t.inputViewChild=e.first)}},inputs:{checkboxIcon:"checkboxIcon",disabled:"disabled",value:"value",name:"name",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",readonly:"readonly",required:"required"},outputs:{onChange:"onChange"},features:[i.Kb([h])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(e,t){if(1&e){const e=i.gc();i.fc(0,"div",0),i.fc(1,"div",1),i.fc(2,"input",2,3),i.pc("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()})("change",function(e){return t.handleChange(e)}),i.ec(),i.ec(),i.fc(4,"div",4),i.pc("click",function(s){i.Rc(e);const n=i.Pc(3);return t.onClick(s,n,!0)}),i.ac(5,"span",5),i.ec(),i.ec(),i.Zc(6,c,2,9,"label",6)}2&e&&(i.Ob(t.styleClass),i.Ac("ngStyle",t.style)("ngClass",i.Ic(18,l,t.checked,t.disabled,t.focused)),i.Lb(2),i.Ac("readonly",t.readonly)("value",t.value)("checked",t.checked)("disabled",t.disabled),i.Mb("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("aria-checked",t.checked)("required",t.required),i.Lb(2),i.Ac("ngClass",i.Ic(22,u,t.checked,t.disabled,t.focused)),i.Lb(1),i.Ac("ngClass",t.checked?t.checkboxIcon:null),i.Lb(1),i.Ac("ngIf",t.label))},directives:[n.p,n.m,n.o],styles:[".p-checkbox{-ms-user-select:none;-webkit-user-select:none;cursor:pointer;display:inline-flex;user-select:none;vertical-align:bottom}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{align-items:center;display:flex;justify-content:center}p-checkbox{align-items:center;display:inline-flex;vertical-align:bottom}.p-checkbox-label{line-height:1}"],encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Xb({type:e}),e.\u0275inj=i.Wb({imports:[[n.c]]}),e})()},"1QP5":function(e,t,s){"use strict";s.d(t,"a",function(){return u});var i=s("8Y7J"),n=s("SVse"),r=s("c/fn"),o=(s("GS7A"),s("hhfa")),a=s("xCnN");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Xb({type:e}),e.\u0275inj=i.Wb({imports:[[n.c,a.b]]}),e})();var l=s("S0UM");s("Ckfk"),s("IheW"),s("cUpR");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Xb({type:e}),e.\u0275inj=i.Wb({imports:[[n.c,o.k,r.c,l.b,c,a.b],o.k,r.c,l.b,c]}),e})()},"6wkk":function(e,t,s){"use strict";s.d(t,"a",function(){return i});var i=function(e){return e.Admin="admin",e.ReadOnly="readonly",e.Cloud="cloud",e.Origin="origin",e}({})},A2tc:function(e,t,s){"use strict";s.d(t,"a",function(){return g});var i=s("qOj+"),n=s("evxF"),r=s("8Y7J"),o=s("iInd"),a=s("TSSN"),c=s("0JRf"),l=s("YHJu"),u=s("hhfa");const h=function(){return{width:"50vw"}},d=function(e){return{countdown:e}};let g=(()=>{class e{constructor(e,t,s,i,n){this.router=e,this.authService=t,this.translate=s,this.idle=i,this.keepalive=n,this.alertAt=60,this.startTimer=!0,this.subs=[],this.countdown=0,this.displayModal=!1,this.serverSessionTimeOut=0,this.WARNING_TIMEOUT=10,this.subs.push(this.authService.loginAction.subscribe(e=>{e&&"login"===e?this.initIdleTracker():this.idle.isRunning&&this.idle.stop()}))}ngOnInit(){this.authService.getLogInStatus().isAuthenticated&&this.initIdleTracker()}initIdleTracker(){this.idle.isRunning&&this.idle.stop(),this.setIdleTimeoutWithBuffer(this.authService.getSessionTimeout()),this.idle.setIdle(this.idleWarn),this.idle.setTimeout(this.WARNING_TIMEOUT),this.idle.setInterrupts(n.a),this.subs.push(this.idle.onIdleStart.subscribe(()=>{this.displayModal=!0})),this.subs.push(this.idle.onIdleEnd.subscribe(()=>{this.resetIdleState()})),this.subs.push(this.idle.onTimeoutWarning.subscribe(e=>{this.countdown=e})),this.subs.push(this.idle.onTimeout.subscribe(()=>{this.authService.changeIsSessionTimedOut(!0),this.logoutUser()})),this.idle.setKeepaliveEnabled(!0),this.keepalive.interval(this.keepAliveTime),this.subs.push(this.keepalive.onPing.subscribe(()=>{!1===this.displayModal&&this.authService.ping().subscribe(()=>{})})),this.idle.watch()}setIdleTimeoutWithBuffer(e){this.serverSessionTimeOut=e>0?Math.floor(e/1e3):600;let t=this.serverSessionTimeOut;t<60&&(t=60),t>=180?(this.idleWarn=t-90,this.WARNING_TIMEOUT=30,this.keepAliveTime=t-40):(this.idleWarn=Math.floor(t/2),this.WARNING_TIMEOUT=Math.floor(t/2-10),this.keepAliveTime=t-40),this.serverSessionTimeOut=600}resetIdleState(){this.idle.stop(),this.idle.watch()}stayLoggedIn(){this.displayModal=!1,this.authService.ping().subscribe(()=>{this.resetIdleState()})}logoutUser(){this.displayModal=!1,this.idle.stop();const e=this.authService.isOpenID(),t=this.authService.getSSOLoginUrl();this.authService.invokeLogout().subscribe(s=>{this.authService.logout(),e?(console.log("*****ssologout:"+t),this.router.navigate(["/ssologout"],{queryParams:{redirectURL:t}})):-1==this.router.url.indexOf("/login")&&this.router.navigate(["/login"],{queryParams:{redirectURL:this.router.routerState.snapshot.url}})},e=>{console.log("Error",e),this.authService.logout(),-1==this.router.url.indexOf("/login")&&this.router.navigate(["/login"],{queryParams:{redirectURL:this.router.routerState.snapshot.url}})})}hideIdleDialog(){}ngOnChanges(e){}ngOnDestroy(){this.subs.forEach(e=>e.unsubscribe()),this.idle.stop(),this.idle.clearInterrupts()}getIdle(){return this.idle}getkeepalive(){return this.keepalive}}return e.\u0275fac=function(t){return new(t||e)(r.Zb(o.f),r.Zb(i.a),r.Zb(a.d),r.Zb(n.b),r.Zb(c.a))},e.\u0275cmp=r.Tb({type:e,selectors:[["acl-session-expiration-alert"]],inputs:{alertAt:"alertAt",startTimer:"startTimer"},features:[r.Jb],decls:13,vars:24,consts:[[3,"header","visible","modal","baseZIndex","draggable","resizable","closeOnEscape","visibleChange","onHide"],[1,"footer-buttons-wrapper"],["type","button","title","Continue Session","attr.aria-label","Continue Session","tabindex","0",1,"dlt-button","dlt-button-primary",3,"click"],["type","button","title","Logout","attr.aria-label","Logout","tabindex","0",1,"dlt-button","dlt-button-secondary",3,"click"]],template:function(e,t){1&e&&(r.fc(0,"p-dialog",0),r.pc("visibleChange",function(e){return t.displayModal=e})("onHide",function(){return t.hideIdleDialog()}),r.uc(1,"translate"),r.fc(2,"p"),r.bd(3),r.uc(4,"translate"),r.ec(),r.fc(5,"p-footer"),r.fc(6,"div",1),r.fc(7,"button",2),r.pc("click",function(){return t.displayModal=!1,t.stayLoggedIn()}),r.bd(8),r.uc(9,"translate"),r.ec(),r.fc(10,"button",3),r.pc("click",function(){return t.displayModal=!1,t.logoutUser()}),r.bd(11),r.uc(12,"translate"),r.ec(),r.ec(),r.ec(),r.ec()),2&e&&(r.Wc(r.Fc(21,h)),r.Bc("header",r.vc(1,12,"common.ssnTimeout.title")),r.Ac("visible",t.displayModal)("modal",!0)("baseZIndex",1e4)("draggable",!1)("resizable",!1)("closeOnEscape",!0),r.Lb(3),r.dd(" ",r.wc(4,14,"common.ssnTimeout.warningMsg",r.Gc(22,d,""+t.countdown))," "),r.Lb(5),r.dd(" ",r.vc(9,17,"common.ssnTimeout.stayLogin"),""),r.Lb(3),r.cd(r.vc(12,19,"common.ssnTimeout.logout")))},directives:[l.a,u.f],pipes:[a.c],styles:[".buttons-wrapper[_ngcontent-%COMP%], .footer-buttons-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;margin-top:0}.divider[_ngcontent-%COMP%]{width:.5rem;height:auto;display:inline-block}"]}),e})()},"K+T9":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var i=s("SVse"),n=s("TSSN"),r=s("YHJu"),o=s("8Y7J");let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Xb({type:e}),e.\u0275inj=o.Wb({imports:[[i.c,n.b,r.b]]}),e})()},Kev4:function(e,t,s){"use strict";s.d(t,"a",function(){return r});var i=s("XNiG"),n=s("8Y7J");let r=(()=>{class e{constructor(){this.subject=new i.a}sendMessage(e){this.subject.next({data:e})}clearMessage(){this.subject.next()}getMessage(){return this.subject.asObservable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},S0UM:function(e,t,s){"use strict";s.d(t,"a",function(){return l}),s.d(t,"b",function(){return u});var i=s("SVse"),n=s("8Y7J");function r(e,t){if(1&e&&n.ac(0,"div",4),2&e){const e=n.tc();n.Xc("width",e.value+"%")}}function o(e,t){if(1&e&&(n.fc(0,"div",5),n.bd(1),n.ec()),2&e){const e=n.tc();n.Xc("display",null!=e.value?"block":"none"),n.Lb(1),n.ed("",e.value,"",e.unit,"")}}function a(e,t){1&e&&(n.fc(0,"div",6),n.ac(1,"div",7),n.ec())}const c=function(e,t){return{"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":t}};let l=(()=>{class e{constructor(){this.showValue=!0,this.unit="%",this.mode="determinate"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Tb({type:e,selectors:[["p-progressBar"]],inputs:{showValue:"showValue",unit:"unit",mode:"mode",value:"value",style:"style",styleClass:"styleClass"},decls:4,vars:11,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:block",3,"width",4,"ngIf"],["class","p-progressbar-label",3,"display",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","block"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(e,t){1&e&&(n.fc(0,"div",0),n.Zc(1,r,1,2,"div",1),n.Zc(2,o,2,4,"div",2),n.Zc(3,a,2,0,"div",3),n.ec()),2&e&&(n.Ob(t.styleClass),n.Ac("ngStyle",t.style)("ngClass",n.Hc(8,c,"determinate"===t.mode,"indeterminate"===t.mode)),n.Mb("aria-valuenow",t.value),n.Lb(1),n.Ac("ngIf","determinate"===t.mode),n.Lb(1),n.Ac("ngIf","determinate"===t.mode&&t.showValue),n.Lb(1),n.Ac("ngIf","indeterminate"===t.mode))},directives:[i.p,i.m,i.o],styles:['.p-progressbar{overflow:hidden;position:relative}.p-progressbar-determinate .p-progressbar-value{border:0;display:none;height:100%;position:absolute;width:0}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-determinate .p-progressbar-label{font-weight:700;height:100%;position:absolute;text-align:center;width:100%}.p-progressbar-indeterminate .p-progressbar-value:before{animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite;background-color:inherit;bottom:0;content:"";left:0;position:absolute;top:0;will-change:left,right}.p-progressbar-indeterminate .p-progressbar-value:after{animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s;background-color:inherit;bottom:0;content:"";left:0;position:absolute;top:0;will-change:left,right}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}'],encapsulation:2,changeDetection:0}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Xb({type:e}),e.\u0275inj=n.Wb({imports:[[i.c]]}),e})()},VD0L:function(e,t,s){"use strict";s.d(t,"a",function(){return i});class i{constructor(e,t){this.pageSize=20,this.tableId=e,this.tableColumnInfo=t}}},"Za8/":function(e,t,s){"use strict";s.d(t,"a",function(){return i});class i{getItem(e){if(this.localStorage){const t=this.localStorage.getItem(e);if(t&&"undefined"!==t)return"string"==typeof t?JSON.parse(t):t}return null}setItem(e,t){this.localStorage&&("string"==typeof t&&this.localStorage.setItem(e,t),this.localStorage.setItem(e,JSON.stringify(t)))}removeItem(e){this.localStorage&&this.localStorage.remove(e)}clear(){this.localStorage&&this.localStorage.clear()}}},e7Go:function(e,t,s){"use strict";s.d(t,"a",function(){return l});var i=s("IheW"),n=s("z6cu"),r=s("JIr8"),o=s("qOj+"),a=s("8Y7J"),c=s("iInd");let l=(()=>{class e{constructor(e,t){this.authService=e,this.router=t}intercept(e,t){let s=e.headers;return s=s.append("X-wM-AdminUI","true"),s.get("Accept")||(s=s.append("Accept","application/json")),this.authService.getCSRFToken()&&(s=s.append("X-CSRF-TOKEN",this.authService.getCSRFToken())),e=e.clone({withCredentials:!0,headers:s}),t.handle(e).pipe(Object(r.a)(s=>{switch(s.status){case 400:return this.handle400Error(s);case 401:return this.handle401Error(s,e,t);case 500:return this.handle500Error(s);case 403:return this.handle403Error(s);case 404:return this.handle404Error(s);case 502:return this.handle502Error(s);default:return Object(n.a)(s)}return Object(n.a)(s)}))}isSSO(e){let t;return e&&e.includes("?")&&(t=new i.g({fromString:e.split("?")[1]}).get("sso")),!1}removeSSOQueryParam(e,t){console.log("++++++originalURL"),console.log(t);let s,i=t.split("?")[0],n=[],r=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==r){n=r.split("&");for(var o=n.length-1;o>=0;o-=1)s=n[o].split("=")[0],s===e&&n.splice(o,1);n.length&&(i=i+"?"+n.join("&"))}return console.log("++++++urlwithout sso QP:"),console.log(i),i}handle500Error(e){return Object(n.a)(e)}handle502Error(e){return console.log("Bad Gateway"),Object(n.a)(e)}handle403Error(e){return e&&403===e.status&&e.error?(console.log("You may not have sufficient permissions to do this operation. Get the required permissions and then try again."),this.logoutUser(e)):Object(n.a)(e)}handle404Error(e){return Object(n.a)(e)}handle400Error(e){return Object(n.a)(e)}handle401Error(e,t,s){return this.logoutUser(e)}logoutUser(e){if(this.authService.logout(),this.authService.isOpenID()){const e=this.authService.getSSOLoginUrl();this.authService.logout(),console.log("*****url:"+e),this.router.navigate(["/ssologout"],{queryParams:{redirectURL:e}})}else-1==this.router.url.indexOf("/login")&&this.router.navigate(["/login"],{queryParams:{redirectURL:this.router.routerState.snapshot.url}});return Object(n.a)(e)}}return e.\u0275fac=function(t){return new(t||e)(a.mc(o.a),a.mc(c.f))},e.\u0275prov=a.Vb({token:e,factory:e.\u0275fac}),e})()},pcPN:function(e,t,s){"use strict";s.d(t,"a",function(){return n});var i=s("8Y7J");let n=(()=>{class e{constructor(){}set(e,t){localStorage[this._prefix(e)]=t}getString(e,t){return localStorage[this._prefix(e)]||t}getNumber(e,t){const s=localStorage[this._prefix(e)];return s?Number.parseFloat(s):t}getBoolean(e,t){const s=localStorage[this._prefix(e)];return s?"true"===s:t}setItem(e,t){localStorage[this._prefix(e)]=JSON.stringify(t)}getItem(e,t){e=this._prefix(e);try{return JSON.parse(localStorage[e])}catch(s){return t}}remove(e){delete localStorage[this._prefix(e)]}clear(){localStorage.clear()}_prefix(e){return""+e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"qOj+":function(e,t,s){"use strict";s.d(t,"b",function(){return b}),s.d(t,"a",function(){return f});var i=s("2Vo4"),n=s("z6cu"),r=s("LRne"),o=s("IheW"),a=s("8Y7J"),c=s("Za8/"),l=s("6wkk"),u=s("pcPN"),h=s("uJJM"),d=s("z4EA"),g=s("TSSN"),p=s("zGRK"),m=s("EApP");const b={isAuthenticated:!1,userRole:l.a.Admin,userId:null,timeout:0};let f=(()=>{class e extends c.a{constructor(e,t,s,n,r,o){super(),this.httpClient=e,this.translate=s,this.permissionsService=r,this.toastr=o,this.isSessionTimedOutSource=new i.a(!1),this.isSessionTimedOut=this.isSessionTimedOutSource.asObservable(),this.openIdLogin=!1,this._silentLogin=!1,this.ssoLoginUrl="/",this.csrfToken=new i.a(this.getItem("sagISCSRFToken")||""),this.isMSRLicensed=new i.a(this.getItem("isMSRLicensed")||""),this.isMSRInstalled=new i.a(this.getItem("isMSRInstalled")||""),this.isSafeMode=new i.a(this.getItem("isSafeMode")||""),this.isQuiesceMode=new i.a(this.getItem("isQuiesceMode")||""),this.loginAction=new i.a(""),this.authStatus=new i.a(this.getItem("sagISAuthStatus")||b),this.localStorage=n,this.cookieService=t}isOpenID(){return this.openIdLogin}get silentLogin(){return this._silentLogin}set silentLogin(e){this._silentLogin=e}getSSOLoginUrl(){return this.ssoLoginUrl}getAuthProvider(){return this.adminConsoleAuthProvider}changePassword(e,t){let s=new o.f;s=s.append("Content-Type","application/json"),s=s.append("Accept-Language",this.translate.currentLang),s=s.append("Accept","application/json");const i={headers:s,withCredentials:!0};return this.httpClient.post(this.getISBaseUrl()+"/invoke/wm.server.access/userUpdate",{username:e,password:t},i)}ssoLogin(){return this.login("","",!0)}login(e,t,s){s?this.silentLogin=!0:(this.openIdLogin=!1,this.silentLogin=!1),this.ssoLoginUrl="/";let i=""+this.getISBaseUrl();i&&(i=i.trim());const n=this.getLogInStatus();return n&&n.isAuthenticated&&this.logoutCleanup(),this.localStorage.setItem("sagAPIServerUrl",""+encodeURIComponent(i)),this.adminConsoleAuthProvider(e,t,s)}setLoginInformation(e,t){const s=e?e.metadata:null;let i="",n="false",r="false",o="false",a="false",c="",u="",d=l.a.Admin;s&&"administrator"===s.userType&&(d=l.a.Admin),!t&&s&&s.username&&(t=s.username),this.ssoLoginUrl="/",e&&e.ssoLoginUrl?(this.openIdLogin=!0,this.ssoLoginUrl=e.ssoLoginUrl):this.openIdLogin=!1,s&&s["X-CSRF-TOKEN"]&&s["X-CSRF-TOKEN"].length>0&&(i=s["X-CSRF-TOKEN"]),s&&s.isMSRLicensed&&(n=s.isMSRLicensed),s&&s.isMSRInstalled&&(r=s.isMSRInstalled),s&&s.isSafeMode&&(o=s.isSafeMode),s&&s.isQuiesceMode&&(a=s.isQuiesceMode),s&&s.hostName&&(c=s.hostName),s&&s.instanceName&&(u=s.instanceName);let g=0;s&&s.clientTimeout&&(g=s.clientTimeout);const p=new h.a(!0,d,t,c,u,g);return i?this.setItem("sagISCSRFToken",i):this.removeItem("sagISCSRFToken"),n&&"true"===n?this.setItem("isMSRLicensed","true"):this.removeItem("isMSRLicensed"),r&&"true"===r?this.setItem("isMSRInstalled","true"):this.removeItem("isMSRInstalled"),o&&"true"===o?this.setItem("isSafeMode","true"):this.removeItem("isSafeMode"),a&&"true"===a?this.setItem("isQuiesceMode","true"):this.removeItem("isQuiesceMode"),this.setItem("sagISAuthStatus",p),this.loginAction.next("login"),p}getCSRFToken(){return this.getItem("sagISCSRFToken")?this.getItem("sagISCSRFToken"):null}getIsMSRLicensed(){const e=this.getItem("isMSRLicensed");return!(!e||"true"!==e)}getIsMSRInstalled(){const e=this.getItem("isMSRInstalled");return!(!e||"true"!==e)}getIsSafeMode(){const e=this.getItem("isSafeMode");return!(!e||"true"!==e)}getIsQuiesceMode(){const e=this.getItem("isQuiesceMode");return!(!e||"true"!==e)}getLogInStatus(){let e=this.getItem("sagISAuthStatus");return e||(e=b),e}getCurrentUser(){const e=this.getItem("sagISAuthStatus");return e?e.userId:""}getSessionTimeout(){return this.getLogInStatus().timeout}adminConsoleAuthProvider(e,t,s){console.log("*****adminConsoleAuthProvider");let i=new o.f;i=i.append("Content-Type","application/json"),i=i.append("Accept-Language",this.translate.currentLang),i=i.append("Accept","application/json"),s&&(i=i.append("X-Active-IS-Session","true"));const n={headers:i,withCredentials:!0},r=this.getISBaseUrl();return this.httpClient.post(r+"/invoke/wm.server/login",{username:e,password:t},n)}getISBaseUrl(){if(Object(a.fb)())return"";{const e="WmAdmin",t="WmCDS",s=location.pathname.split("/");let i=location.origin;if(s&&s.length>1)for(let n=1;n<s.length;n++){const r=s[n];if(!(r&&r.length>0))break;e!==r&&t!==r&&(i=i+"/"+r)}return i.endsWith("/")&&(i=i.substring(0,i.length-1)),i}}fakeAuthProvider(e,t){return"Administrator"!==e?Object(n.a)("Failed to login! Can not find user"):"manage"!==t?Object(n.a)("Failed to login! Wrong password"):Object(r.a)({sessionId:"MYHandySessionID",metadata:{isAdministrator:!0}})}invokeLogout(){let e=new o.f;e=e.append("Content-Type","application/json"),e=e.append("Accept-Language",this.translate.currentLang),e=e.append("Accept","application/json");const t={headers:e,withCredentials:!0},s=this.getISBaseUrl();return this.httpClient.post(s+"/invoke/wm.server/logout",t)}logout(){this.logoutCleanup()}logoutCleanup(){this.ssoLoginUrl="/",this.clearStorage(),this.removePermissions(),this.authStatus.next(b),this.loginAction.next("logout")}clearStorage(){this.cookieService.delete("ssnid","/"),this.removeItem("sagISAuthStatus"),this.removeItem("sagAPIServerUrl"),this.removeItem("sagISCSRFToken"),this.removeItem("isMSRLicensed"),this.removeItem("isMSRInstalled"),this.removeItem("isSafeMode"),this.removeItem("isQuiesceMode")}ping(){const e=this.getISBaseUrl()+"/invoke/wm.server/ping";return this.httpClient.get(e)}changeIsSessionTimedOut(e){this.isSessionTimedOutSource.next(e)}getIsSessionTimedOut(){return this.isSessionTimedOut}addPermissions(e){}removePermissions(){this.permissionsService.flushPermissions()}}return e.\u0275fac=function(t){return new(t||e)(a.mc(o.b),a.mc(d.a),a.mc(g.d),a.mc(u.a),a.mc(p.d),a.mc(m.b))},e.\u0275prov=a.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},t1yq:function(e,t,s){"use strict";s.d(t,"a",function(){return c});var i=s("qOj+"),n=s("8Y7J"),r=s("iInd"),o=s("EApP"),a=s("TSSN");let c=(()=>{class e{constructor(e,t,s,i){this.authService=e,this.router=t,this.toastr=s,this.translate=i,this.authService.authStatus.subscribe(e=>{this.currentAuthStatus=e})}getCurrentAuthStatus(){return this.authService.getLogInStatus()}canActivate(e,t){return this.checkLogin(e,t)}canActivateChild(e,t){return this.checkLogin(e,t)}checkLogin(e,t){let s,i=!0;const n=this.getCurrentAuthStatus();if(e){const t=e.data.expectedRole;t&&(i=n.userRole===t),i&&(s={redirectURL:this.getRedirectUrl(e)})}return!(!n.isAuthenticated||!i)||(this.showAlert(n.isAuthenticated,i),this.router.navigate(["/login"],{queryParams:{redirectURL:t.url}}),!1)}getRedirectUrl(e){return e.pathFromRoot.map(e=>e.url).join("/")}showAlert(e,t){t||this.toastr.error(this.translate.instant("LOGIN_NO_VIEW_PERMISSION"),this.translate.instant("common.error"))}}return e.\u0275fac=function(t){return new(t||e)(n.mc(i.a),n.mc(r.f),n.mc(o.b),n.mc(a.d))},e.\u0275prov=n.Vb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},uJJM:function(e,t,s){"use strict";s.d(t,"a",function(){return i});class i{constructor(e,t,s,i,n,r){this.isAuthenticated=e,this.userRole=t,this.userId=s,this.remoteHostName=i,this.instanceName=n,this.timeout=r}}}}]);