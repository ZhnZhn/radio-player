"use strict";(self.webpackChunkradio_player=self.webpackChunkradio_player||[]).push([[143],{771:(t,e,r)=>{var n=r(400),i=r(401),o=r(857),a=r(462);const s=["alternative","chillout","classical","country","instrumental","piano","pop","sport","talks"];const c={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[].concat(s),categories:{},stations:[]};var l="SET_UI_THEME",u="TOGGLE_DRAWER",d={1:"grey",2:"light",3:"sand"};const p={setUiTheme:function(t){return{type:l,uiTheme:d[t]}},toggleDrawer:function(){return{type:u}}};var m="ADD_CATEGORY",h="REMOVE_CATEGORY",v="SET_CURRENT_STATION";const f={addCategory:function(t){return{type:m,category:t}},removeCategory:function(t){return{type:h,category:t}},setCurrentStation:function(t){return{type:v,station:t}}};var y=c.app.uiTheme;const g=function(t,e){switch(void 0===t&&(t=c.app),e.type){case l:var r=e.uiTheme,n=void 0===r?y:r;return t.uiTheme!==n?(0,a.Z)({},t,{uiTheme:n}):t;case u:return(0,a.Z)({},t,{isDrawer:!t.isDrawer});case v:var i=e.station;return(0,a.Z)({},t,{currentStation:i});default:return t}};var w=function(t){return void 0===t&&(t=""),function(e){return e.title!==t}};const b=function(t,e){switch(void 0===t&&(t=c.stations),e.type){case m:var r=e.categories,n=e.category,i=(e.currentStation||{}).title,o=(r||[]).filter(w(i)),a=function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n].category===e)return t[n]}(t,n),s=a?o.filter(w(a.title)):o;return[].concat(s,t);case h:var l=e.category;return t.filter(function(t){return function(e){return e.category!==t}}(l));case v:var u=e.station,d=e.currentStation,p=(u||{}).title,f=t.filter(w(p));return d&&f.unshift(d),f;default:return t}};const _=function(t,e){switch(void 0===t&&(t=c.categories),e.type){case m:var r=e.category;return r&&(t[r]=!0),(0,a.Z)({},t);case h:var n=e.category;return n&&(t[n]=!1),(0,a.Z)({},t);default:return t}};const S=function(t){return void 0===t&&(t=c.topics),t};const U=(0,o.UY)({app:g,stations:b,categories:_,topics:S});var k={app:function(t){return t.app||{}},isDrawer:function(t){return k.app(t).isDrawer},isHttp:function(t){return"https"!==k.app(t).filter},currentStation:function(t){return k.app(t).currentStation},uiTheme:function(t){return k.app(t).uiTheme},topics:function(t){return t.topics||[]},categories:function(t){return t.categories||[]},stations:function(t){return t.stations||[]}};const C={sApp:k};const E=function(t){var e=t.getState;return function(t){return function(r){return r.type!==v&&r.type!==m||(r.currentStation=k.currentStation(e())),t(r)}}};var T={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"};const I=function(t){return function(t){return function(e){if(e.type===l){var r=e.uiTheme,n=T[r];n&&(document.body.style.backgroundColor=n)}return t(e)}}};var N={alternative:[{title:"Canada: American Roots",src:"https://igor.torontocast.com:2275/stream",siteUrl:"https://www.americanrootsradio.com",br:64},{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de",br:192},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://stream.srg-ssr.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"https://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"UK: Classic FM",src:"https://media-ssl.musicradio.com/ClassicFM",siteUrl:"https://www.classicfm.com",br:48},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"https://listen.011fm.com/stream01",siteUrl:"https://011fm.com",br:192},{title:"USA: 650 AM WSM",src:"https://stream01048.westreamradio.com/wsm-am-mp3",siteUrl:"https://wsmradio.com",br:64},{title:"USA: Opry Nashville",src:"https://stream01051.westreamradio.com/wsm3-mp3",siteUrl:"https://wsmradio.com",br:64}],talks:[{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"https://listen.xray.fm/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"https://radio4.cdm-radio.com:18020/stream-mp3-Chill",siteUrl:"https://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"https://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"https://www.1.fm",br:192},{title:"USA: Chilled Out 181.FM",src:"https://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"https://www.181.fm",br:128}],pop:[{title:"UK: Dance UK",src:"https://dancestream.danceradiouk.com/stream/1/",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"https://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"https://strm112.1.fm/top40_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"https://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"https://pianosolo.streamguys1.com/live",siteUrl:"https://www.solopianoradio.com",br:96}],instrumental:[{title:"EU: Instrumental Radio",src:"https://str2b.openstream.co/959?aw_0_1st.collectionid=4097&stationId=4097&publisherId=983&k=1602000602",siteUrl:"https://instrumentalradio.eu",br:128},{title:"USA: Beautiful Instrumentals Channel",src:"https://edge4.peta.live365.net/b37545_128mp3",siteUrl:"https://www.beautifulinstrumentalschannel.com",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"https://panel.retrolandigital.com/listen/instrumental_hits_radio/listen",siteUrl:"https://instrumentalhitsradio.com",br:192}]};const A={getCategory:function(t){return t&&N[t]||[]}};var M={isHttp:function(t){return void 0===t&&(t=""),"http"===t.split("://")[0]},filterCategoriesBy:function(t){return s.filter((function(e){return A.getCategory(e).some(t)}))},crCategories:function(){return[].concat(s)},getCategory:A.getCategory,crFilterBy:function(t){switch(t){case"http":return function(t){return M.isHttp(t.src)};case"https":return function(t){return!M.isHttp(t.src)};default:return function(){return!0}}}};const O=M;var x=O.crFilterBy,L=O.getCategory;var D=[].concat([I,E,function(t){var e=t.getState;return function(t){return function(r){if(r.type===m){var n=e(),i=r.category,o=x(n.app.filter);r.categories=L(i).map((function(t){return t.category=i,t})).filter(o)}return t(r)}}}]),H=o.qC;const R=(0,o.MT)(U,c,H(o.md.apply(void 0,D)));var P={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"};const Z={toBg:function(t){return{backgroundColor:P[t]}}};const V=function(t){var e=t.dispatch;return(0,a.Z)({},(0,o.DE)(p,e),(0,o.DE)(f,e),C,{useSelector:i.v9,uiThemeImpl:Z})};var F=r(396);const z=(0,n.kr)({});const q=(0,n.kr)({});const B=function(){return{}};var G=function(){};const K=function(t){var e=(0,F.qp)(q),r=(0,F.I4)((function(t){if(t.altKey||t.metaKey){var r=e[t.key];if(r){var n=r[0],i=r[1],o=void 0===i?G:i,a=(n||{}).current;a&&a.focus&&a.focus(),o()}}}),[e]);(0,F.d4)((function(){if(t)return document.addEventListener("keydown",r,!1),function(){return document.removeEventListener("keydown",r,!1)}}),[t,r])};const Y={TRANSITION:document&&void 0!==document.body.style.transition,TOUCH:document&&"ontouchstart"in document.documentElement,MEDIA_SESSION:navigator&&"mediaSession"in navigator};const W=function(t,e){var r=(0,F.qp)(q),n=(0,F.sO)(null);return(0,F.d4)((function(){if(!Y.TOUCH&&t)return r[t]=[n,e],function(){return r[t]=void 0}}),[t,e]),n};var X=0;function J(t,e,r,i,o){var a,s,c={};for(s in e)"ref"==s?a=e[s]:c[s]=e[s];var l={type:t,props:c,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--X,__source:o,__self:i};if("function"==typeof t&&(a=t.defaultProps))for(s in a)void 0===c[s]&&(c[s]=a[s]);return n.YM.vnode&&n.YM.vnode(l),l}const j=function(t){var e=t.hotKey,r=t.ariaLabel,n=t.onMouseDown,i=t.onMouseUp,o=t.onTouchStart,s=t.onTouchEnd,c=t.onClick,l=t.children,u=Y.TOUCH&&o?{onTouchStart:o,onTouchEnd:s}:{onMouseDown:n,onMouseUp:i},d=W(e,c);return J("button",(0,a.Z)({ref:d,className:"bt-circle","aria-label":r},u,{onClick:c,children:J("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%",children:J("g",{children:l})})}))};var Q=J("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),$=J(n.HY,{children:[J("path",{d:"M11.5 10h3v13h-3v-13z"}),J("path",{d:"M17.5 10h3v13h-3v-13z"})]});const tt=function(t){var e,r,n,i,o=(r=(e=t).isPlaying,n=e.onPlay,i=e.onStop,r?["m","Mute",i,$]:["p","Play",n,Q]);return J(j,{hotKey:o[0],ariaLabel:o[1],onClick:o[2],children:o[3]})};const et=function(t,e,r){var n=(0,F.sO)(null),i=(0,F.sO)(r);i.current=r;var o=function(){return clearInterval(n.current)};return[function(){n.current=setInterval((function(){e(i.current)?(o(),n.current=setInterval(t,500)):t()}),150)},o]};const rt=function(t){var e=(0,F.eJ)((function(){return!!t})),r=e[0],n=e[1];return[r,(0,F.I4)((function(){return n(!0)}),[]),(0,F.I4)((function(){return n(!1)}),[])]};const nt=function(t){var e=(0,F.eJ)(t),r=e[0],n=e[1],i=(0,F.eJ)(t),o=i[0],a=i[1];return o!==t&&(n(t),a(t)),[r,n]};var it={position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,userSelect:"none",cursor:"default"},ot={position:"absolute",top:8,left:0,width:"100%",height:2},at={position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},st={position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},ct={backgroundColor:"rgb(158, 158, 158)"},lt={zIndex:1,position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},ut={width:20,height:20},dt={position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},pt={position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},mt={top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"},ht=Number.isNaN,vt=function(t){},ft=Y.TOUCH,yt=ft?"touchmove":"mousemove",gt=ft?"touchend":"mouseup",wt=function(t){return{width:"calc("+t+"%)"}},bt=ft?function(t){return(((t||{}).touches||[])[0]||{}).clientX||0}:function(t){return t.clientX};const _t=function(t){var e=t.style,r=t.initialValue,n=t.step,i=t.min,o=t.max,s=t.onChange,c=void 0===s?vt:s,l=(0,F.sO)(null),u=rt(!1),d=u[0],p=u[1],m=u[2],h=nt(r),v=h[0],f=h[1],y=function(t){var e=function(t,e,r){return r>e?e:r<t?t:r}(i,o,t);f(e),c(e)},g=function(t){var e=rt(!1),r=e[0],n=e[1],i=e[2],o=(0,F.sO)(!1),a=function(e){o.current||(o.current=!0,requestAnimationFrame((function(){o.current=!1,t(e)})))},s=function t(){document.removeEventListener(yt,a),document.removeEventListener(gt,t),i()};return[r,function(t){ft||t.preventDefault(),document.addEventListener(yt,a),document.addEventListener(gt,s),n()}]}((function(t){var e=l.current;if(e){var r,a=e.clientWidth,s=function(t,e){var r=e.getBoundingClientRect().left;return bt(t)-r}(t,e);s<0?s=0:s>a&&(s=a),r=s/a*(o-i),r=Math.round(r/n)*n+i,r=parseFloat(r.toFixed(2)),y(r)}})),w=g[0],b=g[1],_=ft?{onTouchStart:b}:{onMouseDown:b,onMouseEnter:p,onMouseLeave:m},S=ft?void 0:{onFocus:p,onKeyDown:function(t){var e=t.keyCode,r=function(t,e,r){return function(t){return 39===t||38===t}(r)?t+e:function(t){return 37===t||40===t}(r)?t-e:void 0}(v,n,e);null!=r&&(t.preventDefault(),y(r))},onBlur:m},U=d?(0,a.Z)({},st,ct):st,k=w?ut:null,C=w?mt:null,E=d||w?J("div",{style:(0,a.Z)({},pt,C)}):null,T=function(t,e,r){var n=(t-e)/(r-e);return ht(n)?0:Math.round(100*n)}(v,i,o),I=wt(T),N=wt(100-T),A={left:T+"%"};return J("div",(0,a.Z)({style:(0,a.Z)({},it,e)},_,{children:J("div",{ref:l,style:ot,children:[J("div",{style:(0,a.Z)({},at,I)}),J("div",{style:(0,a.Z)({},U,N)}),J("input",{type:"hidden",step:n,min:i,max:o,value:v,required:!0}),J("div",(0,a.Z)({role:"slider",tabIndex:0,"aria-valuenow":v,"aria-valuemin":i,"aria-valuemax":o,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:(0,a.Z)({},lt,k,A)},S,{children:J("div",{style:(0,a.Z)({},dt,k),children:E})}))]})}))};const St=function(t){return J(j,(0,a.Z)({},t,{children:J("path",{d:"M8 16 H24",strokeWidth:"3"})}))};const Ut=function(t){return J(j,(0,a.Z)({},t,{children:[J("path",{d:"M8 16 H24",strokeWidth:"3"}),J("path",{d:"M16 8 V24",strokeWidth:"3"})]}))};const kt=function(t,e){return(0,F.I4)((function(e){var r;"function"==typeof t&&(27===(r=e).keyCode||"Escape"===r.key)&&(e.preventDefault(),e.stopPropagation(),t())}),e||[])};var Ct={position:"absolute",top:8,right:18},Et={transform:"translateX(264px)"},Tt={transform:"translate(0px, 0px)"},It={display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},Nt={display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"};const At=function(t){var e=t.btStyle,r=t.children,i=(0,F.qp)(z),o=i.toggleDrawer,s=i.sApp,c=i.useSelector,l=c(s.isDrawer),u=c(s.uiTheme),d=W("s",o),p=l?o:void 0,m=kt(p,[p]);(0,F.d4)((function(){document.body.style.overflowY=l?"hidden":"auto"}));var h=(0,a.Z)({},l?Tt:Et,Z.toBg(u)),v=l?Nt:It;return J(n.HY,{children:[J("button",{ref:d,className:"drawer-bt",style:(0,a.Z)({},Ct,e),"aria-label":"Open Drawer",onClick:o,children:J("span",{className:"drawer-span",children:J("svg",{className:"drawer-svg",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[J("path",{fill:"none",d:"M0 0h24v24H0z"}),J("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})}),J("div",{role:"presentation","aria-hidden":!l,className:"drawer-modal",style:v,onClick:p}),J("aside",{role:"presentation",className:"drawer",style:h,onKeyDown:m,children:J("div",{children:r})})]})};var Mt={fromClientX:void 0},Ot=function(t){var e=(t||{}).changedTouches,r=void 0===e?[]:e;return r[0]?r[0].clientX:void 0},xt=function(t){return"number"==typeof t&&t-t==0};const Lt=function(t){var e=t.onSwipeGesture,r=t.dir,n=void 0===r?"L":r,i=t.delta,o=void 0===i?30:i,a=(0,F.I4)((function(t){Mt.fromClientX=Ot(t)}),[]),s=(0,F.I4)((function(t){(function(t,e,r){var n=Mt.fromClientX;return!(!xt(n)||!xt(r))&&("L"===t||"U"===t?n-r>e:r-n>e)})(n,o,Ot(t))&&(e(),Mt.fromClientX=void 0)}),[]);if(Y.TOUCH)return{onTouchStart:a,onTouchEnd:s}};var Dt={padding:3};const Ht=function(t){var e=t.className,r=void 0===e?"svg-close":e,n=t.style,i=t.tabIndex;return J("button",{className:r,style:n,tabIndex:void 0===i?-1:i,onClick:t.onClick,children:J("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:Dt,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:"#f44336",strokeLinecap:"round",children:[J("path",{d:"M 0,0 L 12,12"}),J("path",{d:"M 12,0 L 0,12"})]})})};var Rt=Array.isArray,Pt=function(t){return Rt(t)?t[0]?t[1]:"":t||""};const Zt=function(){var t=Pt(arguments.length<=0?void 0:arguments[0]),e=Pt(arguments.length<=1?void 0:arguments[1]);return t?e?t+" "+e:t:e||void 0};var Vt={backgroundColor:"#1b2836"},Ft=function(t,e){return t===e?Vt:void 0};const zt=function(t){var e=t.style,r=t.className,n=t.tabIndex,i=void 0===n?-1:n,o=t.initialValue,a=void 0===o?"1":o,s=t.oneC,c=void 0===s?"One":s,l=t.twoC,u=void 0===l?"Two":l,d=t.threeC,p=void 0===d?"Three":d,m=t.onClick,h=(0,F.eJ)(a),v=h[0],f=h[1],y=Zt("bt-triple",r),g=Ft(v,"1"),w=Ft(v,"2"),b=Ft(v,"3"),_=(0,F.I4)((function(t){m(t),f(t)}),[m]);return J("div",{className:y,style:e,children:[J("button",{className:"bt-triple__one",style:g,tabIndex:i,onClick:_.bind(null,"1"),children:c}),J("button",{className:"bt-triple__two",style:w,tabIndex:i,onClick:_.bind(null,"2"),children:u}),J("button",{className:"bt-triple__three",style:b,tabIndex:i,onClick:_.bind(null,"3"),children:p})]})};var qt={display:"inline-block",width:16,height:16};const Bt=function(t){var e=t.style,r=t.color,n=void 0===r?"#64e346":r;return J("span",{style:(0,a.Z)({},qt,e),children:J("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:J("path",{d:"M 2,5 L 8,14 14,1",stroke:n,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})})})};const Gt=function(t,e){var r=(0,F.sO)(0);return(0,F.I4)((function(n){if(0!==t){var i=r.current,o=n.timeStamp;o-i>t&&e(n),r.current=o}else e(n)}),[t,e])};var Kt={textDecoration:"underline"},Yt=function(t,e){var r=e?t.toLowerCase().indexOf(e):-1;if(-1!==r){var i=t.substring(0,r),o=t.substring(r,r+1),a=t.substring(r+1);return J(n.HY,{children:[J("span",{children:i}),J("span",{style:Kt,children:o}),J("span",{children:a})]})}return t};const Wt=function(t){var e=t.className,r=t.style,n=t.caption,i=void 0===n?"":n,o=t.hotKey,a=t.children;return J("span",{className:e,style:r,children:[Yt(i,o),a]})};var Xt={color:"#607d8b"};const Jt=function(t){var e=t.timeout,r=void 0===e?500:e,n=t.className,i=t.style,o=t.clDiv,s=void 0===o?"bt-flat__div":o,c=t.clCaption,l=t.isPrimary,u=t.caption,d=t.tabIndex,p=t.onClick,m=t.children,h=Gt(r,p),v=l?(0,a.Z)({},i,Xt):i,f=Zt("bt-flat",n),y=Zt("bt-flat__span",c);return J("button",{className:f,style:v,tabIndex:d,onClick:h,children:J("div",{className:s,children:[J(Wt,{className:y,caption:u}),m]})})};const jt=function(){var t=(0,F.qp)(z),e=t.sApp,r=t.addCategory,n=t.removeCategory,i=t.useSelector,o=i(e.topics),a=i(e.categories),s=i(e.isDrawer)?0:-1;return J("ul",{children:o.map((function(t){var e=a[t];return J("li",{children:J(Jt,{className:"drawer__list-bt",caption:t,timeout:0,tabIndex:s,onClick:e?function(){return n(t)}:function(){return r(t)},children:e&&J(Bt,{})})},t)}))})};const Qt=function(){var t=(0,F.qp)(z),e=t.setUiTheme,r=t.toggleDrawer,n=Lt({onSwipeGesture:r,dir:"R"});return J("div",(0,a.Z)({className:"drawer__list"},n,{children:[J("div",{className:"drawer__title",children:[J(zt,{className:"mr-8",oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:e}),J(Ht,{className:"drawer__bt-close",onClick:r})]}),J(jt,{})]}))};const $t=function(){return J(At,{children:J(Qt,{})})};var te={height:35,transition:"height 0.3s ease-out"},ee={display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},re={position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},ne={display:"inline-block",width:12},ie=function(t,e){return{onMouseDown:t,onMouseUp:e,onTouchStart:t,onTouchEnd:e}},oe=function(t){return t>.8},ae=function(t){return t<.2};const se=function(t){var e,r,n=t.volume,i=t.setVolume,o=t.onIncrease,s=t.onDecrease,c=et(o,oe,n),l=c[0],u=c[1],d=et(s,ae,n),p=d[0],m=d[1],h=ie((function(){0!==n&&p()}),m),v=ie((function(){100!==n&&l()}),u);return(0,F.d4)((function(){0===n&&m(),100===n&&u()})),J("div",{id:"volume",style:te,children:[J("div",{style:re,children:(e=n,"number"==typeof(r=e)&&r-r==0?Math.round(100*e):"")}),J(_t,{style:ee,initialValue:n,step:.05,min:0,max:1,onChange:i}),J(St,(0,a.Z)({hotKey:"-",ariaLabel:"Increase Volume"},h,{onClick:s})),J("div",{style:ne}),J(Ut,(0,a.Z)({hotKey:"+",ariaLabel:"Decrease Volume"},v,{onClick:o})),J($t,{})]})};var ce={display:"block"},le={display:"none"};const ue=function(t){var e=t.isShow,r=t.className,n=t.style,i=t.children,o=e?ce:le;return J("div",{className:Zt(r,[e,"show-popup"]),style:(0,a.Z)({},n,o),children:i})};var de=O.isHttp;const pe=function(t){var e=t.src;return J("span",{children:[" ",de(e)?"(http)":""]})};var me={transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},he={color:"#04477b",fontSize:"17px",display:"inline-block",maxWidth:340,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},ve={color:"darkgray"},fe={color:"#1b2836"},ye=function(t){return t[0].toUpperCase()+t.substring(1)};const ge=function(t){var e,r=t.category,n=t.br;if(!(e=r)||"string"!=typeof e)return null;var i=n?" ("+n+" Kbps)":"";return J("div",{children:[J("span",{style:ve,children:"Category:"})," ",J("span",{style:fe,children:[ye(r),i]})]})};const we=function(t,e){var r=(t||"").split("://")[0];return"https"===r||e&&"http"===r?t:void 0};const be=function(t){var e=t.isHttp,r=t.siteUrl,n=we(r,e);return n?J("a",{href:n,style:he,target:"_blank",rel:"noreferrer noopener",children:n}):null};var _e="station-descr";const Se=function(t){var e=t.isHttp,r=t.station,n=(0,F.eJ)(!0),i=n[0],o=n[1],a=i?me:void 0,s=r||{},c=s.title,l=s.src,u=s.siteUrl,d=s.category,p=s.br;return r?J("div",{className:_e,children:[J("button",{className:"station-descr__bt",onClick:function(){return o((function(t){return!t}))},children:[J("span",{children:c}),J(pe,{src:l}),J("span",{className:"item-descr__bt-more",style:a,children:">"})]}),J(ue,{className:"station-descr__info",isShow:i,children:J("div",{children:[J(ge,{category:d,br:p}),J(be,{isHttp:e,siteUrl:u})]})})]}):null};const Ue=function(t){var e=t.station,r=t.hotKey,n=t.onClick,i=e.title,o=e.src;return J("button",{ref:W(r),className:"item-station",onClick:n,children:[J("span",{children:i}),J(pe,{src:o}),Boolean(r)&&J("span",{className:"item-station__access",children:r})]})};var ke=function(t){return t<5?""+(t+1):void 0};const Ce=function(){var t=(0,F.qp)(z),e=t.toggleDrawer,r=t.setCurrentStation,n=t.sApp,i=t.useSelector,o=i(n.isHttp),s=i(n.currentStation),c=i(n.stations),l=Lt({onSwipeGesture:e});return J("div",(0,a.Z)({className:"item-list"},l,{children:[J(Se,{isHttp:o,station:s}),c.map((function(t,e){return J(Ue,{station:t,hotKey:ke(e),onClick:r.bind(null,t,e)},t.title)}))]}))};const Ee={Command:tt,Volume:se,List:Ce};var Te=r(766),Ie=function(t){return parseFloat(t.toFixed(2))},Ne=null,Ae={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},Me=!0,Oe={INIT_VOLUME:.2,checkInitVolume:function(){Me&&(Te.Howler.volume(Oe.INIT_VOLUME),Me=!1)},getVolume:function(){return Te.Howler.volume()},unload:function(){Ne&&(Ne.unload(),Ne.off())},init:function(t,e,r){try{Oe.checkInitVolume();var n=Te.Howler.volume();return Oe.unload(),Ne=new Te.Howl((0,a.Z)({},Ae,{src:t,onloaderror:e,onplayerror:r})),Te.Howler.volume(n),!0}catch(t){return Ne=null,console.log(t.message),!1}},play:function(){return!!Ne&&(Ne.play(),!0)},stop:function(){Ne&&Ne.stop()},setVolume:function(t){return Te.Howler.volume(Ie(t)),t},increaseVolume:function(t){void 0===t&&(t=.05),Oe.checkInitVolume();var e=Ie(Te.Howler.volume()+t);return e<=1&&Te.Howler.volume(e),Te.Howler.volume()},decreaseVolume:function(t){void 0===t&&(t=.05),Oe.checkInitVolume();var e=Ie(Te.Howler.volume()-t);return e>=0&&Te.Howler.volume(e),Te.Howler.volume()}};const xe=Oe;var Le="audio__title",De="audio__title audio__title--err";const He=function(t){var e=t.station,r=t.msgErr,n=t.title,i=e&&e.title||"",o=r&&i;return J("div",{className:o?De:Le,children:o?r+" "+i:i||n})};var Re="equalizer--not-playing";const Pe=function(t){var e=t.isPlaying,r=t.isUnloaded,n=t.unload;return e?J("div",{className:"equalizer"}):r?J("div",{className:Re}):J("button",{className:Re,"data-loader":"circle",onClick:n})};var Ze=xe.INIT_VOLUME,Ve="Radio Player v0.3.0",Fe={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},ze=function(t,e){switch(e.type){case Fe.SET_LOADING:return(0,a.Z)({},t,{isUnloaded:!1,isPlaying:!1,msgErr:""});case Fe.SET_PLAYING:return(0,a.Z)({},t,{isPlaying:!0,isUnloaded:!1});case Fe.PAUSE:return(0,a.Z)({},t,{isPlaying:!1});case Fe.UNLOAD:return(0,a.Z)({},t,{isUnloaded:!0});case Fe.STOP:return(0,a.Z)({},t,{isPlaying:!1,isUnloaded:!0});case Fe.SET_VOLUME:var r=e.volume,n=void 0===r?Ze:r;return(0,a.Z)({},t,{volume:n});case Fe.SET_TITLE:var i=e.title,o=void 0===i?Ve:i;return(0,a.Z)({},t,{title:o});case Fe.SET_ERROR:var s=e.msgErr,c=void 0===s?"":s;return(0,a.Z)({},t,{msgErr:c,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+e.type)}};ze.A=Fe;const qe=ze;var Be=qe.A,Ge={display:"flex",alignItems:"center",paddingBottom:4},Ke=function(t){void 0===t&&(t=""),Y.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:Ve,artist:t}))},Ye={msgErr:"",title:Ve,isUnloaded:!0,isPlaying:!1,volume:Ze};const We=function(){var t=(0,F.sO)(null),e=(0,F.qp)(z),r=e.uiThemeImpl,n=e.sApp,i=e.useSelector,o=i(n.uiTheme),a=i(n.currentStation),s=(0,F._Y)(qe,Ye),c=s[0],l=s[1],u=c.isUnloaded,d=c.isPlaying,p=c.volume,m=c.title,h=c.msgErr,v=(0,F.I4)((function(t){return l({type:Be.SET_VOLUME,volume:xe.setVolume(t)})}),[]),f=(0,F.I4)((function(){return l({type:Be.SET_VOLUME,volume:xe.increaseVolume(.01)})}),[]),y=(0,F.I4)((function(){return l({type:Be.SET_VOLUME,volume:xe.decreaseVolume(.01)})}),[]),g=(0,F.I4)((function(){xe.stop(),xe.unload(),l({type:Be.STOP})}),[]),w=function(t){l({type:Be.SET_ERROR,msgErr:t}),Ke()};return(0,F.d4)((function(){Y.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",g)}),[]),(0,F.d4)((function(){return a&&a.src&&xe.init(a.src,w.bind(null,"Load Error"),w.bind(null,"Play Error"))&&l({type:Be.SET_LOADING}),function(){xe.unload()}}),[a]),J("div",{className:"audio-player",style:r.toBg(o),children:[J(Ee.Volume,{volume:p,setVolume:v,onIncrease:f,onDecrease:y}),J("div",{style:Ge,children:[J(Ee.Command,{isPlaying:d,onPlay:function(){var e;e=t,clearTimeout(e.current),e.current=null,!h&&xe.play()?(l({type:Be.SET_PLAYING}),Ke(a&&a.title||Ve)):(l({type:Be.SET_TITLE,title:"At first, please, choose a radio station."}),Ke())},onStop:function(){xe.stop(),t.current=setTimeout((function(){return l({type:Be.UNLOAD})}),6e4),l({type:Be.PAUSE})}}),J(He,{station:a,msgErr:h,title:m}),J(Pe,{isPlaying:d,isUnloaded:u,unload:function(){xe.unload(),l({type:Be.UNLOAD}),Ke()}})]})]})};const Xe=function(){return K(!0),J("div",{className:"app-radio-player",children:[J(We,{}),J(Ee.List,{})]})};var Je=V(R),je=B();(0,n.sY)(J(i.zt,{store:R,children:J(q.Provider,{value:je,children:J(z.Provider,{value:Je,children:J(Xe,{})})})}),document.getElementById("app"))}},t=>{var e;e=771,t(t.s=e)}]);