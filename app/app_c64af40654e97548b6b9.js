"use strict";(self.webpackChunkradio_player=self.webpackChunkradio_player||[]).push([[143],{591:(t,e,r)=>{var n=r(400),i=r(401),o=r(857),a=r(462);const s=["alternative","chillout","classical","country","instrumental","jazz","lounge","piano","pop","rock","sport","talks"];const c={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[].concat(s),categories:{},stations:[]};var l="SET_UI_THEME",u="SET_SRC_FILTER",d="TOGGLE_DRAWER",p={1:"grey",2:"light",3:"sand"},m={1:"none",2:"https",3:"http"};const h={setUiTheme:function(t){return{type:l,uiTheme:p[t]}},setSrcFilter:function(t){return{type:u,filter:m[t]}},toggleDrawer:function(){return{type:d}}};var f="ADD_CATEGORY",v="REMOVE_CATEGORY",w="SET_CURRENT_STATION";const b={addCategory:function(t){return{type:f,category:t}},removeCategory:function(t){return{type:v,category:t}},setCurrentStation:function(t){return{type:w,station:t}}};var g=c.app,y=g.uiTheme,E=g.filter;const _=function(t,e){switch(void 0===t&&(t=c.app),e.type){case l:var r=e.uiTheme,n=void 0===r?y:r;return t.uiTheme!==n?(0,a.Z)({},t,{uiTheme:n}):t;case d:return(0,a.Z)({},t,{isDrawer:!t.isDrawer});case u:var i=e.filter,o=void 0===i?E:i;return(0,a.Z)({},t,{filter:o});case w:var s=e.station;return(0,a.Z)({},t,{currentStation:s});default:return t}};var C=function(t){return void 0===t&&(t=""),function(e){return e.title!==t}};const S=function(t,e){switch(void 0===t&&(t=c.stations),e.type){case f:var r=e.categories,n=e.category,i=(e.currentStation||{}).title,o=(r||[]).filter(C(i)),a=function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n].category===e)return t[n]}(t,n),s=a?o.filter(C(a.title)):o;return[].concat(s,t);case v:var l=e.category;return t.filter(function(t){return function(e){return e.category!==t}}(l));case w:var d=e.station,p=e.currentStation,m=(d||{}).title,h=t.filter(C(m));return p&&h.unshift(p),h;case u:return[];default:return t}};const U=function(t,e){switch(void 0===t&&(t=c.categories),e.type){case f:var r=e.category;return r&&(t[r]=!0),(0,a.Z)({},t);case v:var n=e.category;return n&&(t[n]=!1),(0,a.Z)({},t);case u:return{};default:return t}};var T={alternative:[{title:"Canada: American Roots",src:"https://igor.torontocast.com:2275/stream",siteUrl:"https://www.americanrootsradio.com",br:64},{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Canada: Classic 107 FM",src:"http://daemondef.ic.llnwd.net/stream/daemondef_ddmp3_74",siteUrl:"http://classic107.com",br:56},{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de",br:192},{title:"Italy: Venice Classic",src:"http://109.123.116.202:8020/stream/1/",siteUrl:"https://www.veniceclassicradio.eu",br:128},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://streaming.swisstxt.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"http://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Swissradio.ch Classical",src:"http://relay.publicdomainproject.org/classical.mp3"},{title:"UK: Classic FM",src:"https://media-ssl.musicradio.com/ClassicFM",siteUrl:"https://www.classicfm.com",br:48},{title:"UK: BBC 3 Radio",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p",br:128},{title:"UK: Davide of MIMIC Classical",src:"http://uk3.internet-radio.com:8060/;stream",siteUrl:"http://meetinginmusic.blogspot.com",br:320},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"http://listen.011fm.com:8016/stream09",siteUrl:"http://011fm.com",br:192},{title:"USA: 650 AM WSM",src:"https://stream01048.westreamradio.com/wsm-am-mp3",siteUrl:"https://wsmradio.com",br:64},{title:"USA: Opry Nashville",src:"https://stream01051.westreamradio.com/wsm3-mp3",siteUrl:"https://wsmradio.com",br:64}],talks:[{title:"BBC Radio Wales 103.9",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p",siteUrl:"http://www.bbc.co.uk/radiowales/",br:128},{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"http://listen.xray.fm:8000/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"USA: Bristol: ESPN Radio",src:"http://edge.espn.cdn.abacast.net/espn-networkmp3-48",siteUrl:"http://www.espn.com/espnradio/",br:48},{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],jazz:[{title:"USA: Florida Smooth Jazz",src:"http://us4.internet-radio.com:8266/;stream",siteUrl:"http://www.SmoothJazzFlorida.com",br:128}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"http://stream.cdm-chillout.com:8020/stream-mp3-Chill",siteUrl:"http://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"http://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"http://www.1.fm",br:192},{title:"USA: Chilled Out 181.FM",src:"http://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"http://www.181.fm",br:128}],lounge:[{title:"France: ABC Lounge Jazz",src:"http://centauri.shoutca.st:8686/stream/1/",siteUrl:"http://www.abc-lounge.com",br:128},{title:"Italy: Milano Lounge",src:"http://antares.dribb.com:5080/autodj",siteUrl:"https://www.milanolounge.net",br:128}],rock:[{title:"USA: Florida Classic Rock",src:"http://us4.internet-radio.com:8258/;stream",siteUrl:"http://www.classicrockflorida.com",br:160}],pop:[{title:"UK: BBC Radio 1",src:"http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q",siteUrl:"https://www.bbc.co.uk/radio1",br:128},{title:"UK: Dance",src:"http://uk7.internet-radio.com:8226/;stream",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"http://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"http://strm112.1.fm/top40_mobile_mp3",siteUrl:"http://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"http://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"http://pianosolo.streamguys.net/live",siteUrl:"https://www.solopianoradio.com",br:96},{title:"USA: Matt Johnson Radio",src:"http://us2.internet-radio.com:8046/;stream",siteUrl:"http://www.mattjohnsonmusic.com",br:80}],instrumental:[{title:"EU: Instrumental Radio",src:"https://str2b.openstream.co/959?aw_0_1st.collectionid=4097&stationId=4097&publisherId=983&k=1602000602",siteUrl:"https://instrumentalradio.eu",br:128},{title:"USA: Beautiful Instrumentals Channel",src:"https://edge4.peta.live365.net/b37545_128mp3",siteUrl:"https://www.beautifulinstrumentalschannel.com",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"http://162.244.80.106:11128/stream2",siteUrl:"http://instrumentalhitsradio.com",br:192},{title:"Music Lake",src:"http://50.7.68.251:7168/;stream/1",siteUrl:"http://musiclake.com",br:64}]};const k={getCategory:function(t){return t&&T[t]||[]}};var I={isHttp:function(t){return void 0===t&&(t=""),"http"===t.split("://")[0]},filterCategoriesBy:function(t){return s.filter((function(e){return k.getCategory(e).some(t)}))},crCategories:function(){return[].concat(s)},getCategory:k.getCategory,crFilterBy:function(t){switch(t){case"http":return function(t){return I.isHttp(t.src)};case"https":return function(t){return!I.isHttp(t.src)};default:return function(){return!0}}}};const R=I;var N=R.isHttp,L=R.filterCategoriesBy,A=R.crCategories;const O=function(t,e){return void 0===t&&(t=c.topics),e.type===u?function(t){void 0===t&&(t="");var e="https"===t?function(t){return!N(t.src)}:"http"===t?function(t){return N(t.src)}:void 0;return e?L(e):A()}(e.filter):t};const M=(0,o.UY)({app:_,stations:S,categories:U,topics:O});var x={app:function(t){return t.app||{}},isDrawer:function(t){return x.app(t).isDrawer},currentStation:function(t){return x.app(t).currentStation},uiTheme:function(t){return x.app(t).uiTheme},topics:function(t){return t.topics||[]},categories:function(t){return t.categories||[]},stations:function(t){return t.stations||[]}};const D={sApp:x};const P=function(t){var e=t.getState;return function(t){return function(r){return r.type!==w&&r.type!==f||(r.currentStation=x.currentStation(e())),t(r)}}};var H={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"};const B=function(t){return function(t){return function(e){if(e.type===l){var r=e.uiTheme,n=H[r];n&&(document.body.style.backgroundColor=n)}return t(e)}}};var F=R.crFilterBy,V=R.getCategory;var Z=[].concat([B,P,function(t){var e=t.getState;return function(t){return function(r){if(r.type===f){var n=e(),i=r.category,o=F(n.app.filter);r.categories=V(i).map((function(t){return t.category=i,t})).filter(o)}return t(r)}}}]),z=o.qC;const G=(0,o.MT)(M,c,z(o.md.apply(void 0,Z)));var K={grey:"grey",light:"#f9f9f9",sand:"#fdf1d5"};const q={toBg:function(t){return{backgroundColor:K[t]}}};const Y=function(t){var e=t.dispatch;return(0,a.Z)({},(0,o.DE)(h,e),(0,o.DE)(b,e),D,{useSelector:i.v9,uiThemeImpl:q})};var W=r(396);const X=(0,n.kr)({});const J=(0,n.kr)({});const j=function(){return{}};var Q=function(){};const $=function(t){var e=(0,W.qp)(J),r=(0,W.I4)((function(t){if(t.altKey||t.metaKey){var r=e[t.key];if(r){var n=r[0],i=r[1],o=void 0===i?Q:i,a=(n||{}).current;a&&a.focus&&a.focus(),o()}}}),[e]);(0,W.d4)((function(){if(t)return document.addEventListener("keydown",r,!1),function(){return document.removeEventListener("keydown",r,!1)}}),[t,r])};const tt={TRANSITION:document&&void 0!==document.body.style.transition,TOUCH:document&&"ontouchstart"in document.documentElement,MEDIA_SESSION:navigator&&"mediaSession"in navigator};const et=function(t,e){var r=(0,W.qp)(J),n=(0,W.sO)(null);return(0,W.d4)((function(){if(!tt.TOUCH&&t)return r[t]=[n,e],function(){return r[t]=void 0}}),[t,e]),n};var rt=0;function nt(t,e,r,i,o){var a,s,c={};for(s in e)"ref"==s?a=e[s]:c[s]=e[s];var l={type:t,props:c,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--rt,__source:i,__self:o};if("function"==typeof t&&(a=t.defaultProps))for(s in a)void 0===c[s]&&(c[s]=a[s]);return n.YM.vnode&&n.YM.vnode(l),l}const it=function(t){var e=t.hotKey,r=t.ariaLabel,n=t.onMouseDown,i=t.onMouseUp,o=t.onTouchStart,s=t.onTouchEnd,c=t.onClick,l=t.children,u=tt.TOUCH&&o?{onTouchStart:o,onTouchEnd:s}:{onMouseDown:n,onMouseUp:i},d=et(e,c);return nt("button",(0,a.Z)({ref:d,className:"bt-circle","aria-label":r},u,{onClick:c,children:nt("svg",{viewBox:"0 0 34 34",width:"100%",height:"100%",children:nt("g",{children:l})})}))};var ot=nt("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),at=nt(n.HY,{children:[nt("path",{d:"M11.5 10h3v13h-3v-13z"}),nt("path",{d:"M17.5 10h3v13h-3v-13z"})]});const st=function(t){var e,r,n,i,o=(r=(e=t).isPlaying,n=e.onPlay,i=e.onStop,r?["m","Mute",i,at]:["p","Play",n,ot]);return nt(it,{hotKey:o[0],ariaLabel:o[1],onClick:o[2],children:o[3]})};const ct=function(t,e,r){var n=(0,W.sO)(null),i=(0,W.sO)(r);i.current=r;var o=function(){return clearInterval(n.current)};return[function(){n.current=setInterval((function(){e(i.current)?(o(),n.current=setInterval(t,500)):t()}),150)},o]};const lt=function(t){var e=(0,W.eJ)((function(){return!!t})),r=e[0],n=e[1];return[r,(0,W.I4)((function(){return n(!0)}),[]),(0,W.I4)((function(){return n(!1)}),[])]};const ut={ROOT:{position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,userSelect:"none",cursor:"default"},ROOT_LINE:{position:"absolute",top:8,left:0,width:"100%",height:2},LINE_BEFORE:{position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_AFTER:{position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},LINE_HOVERED:{backgroundColor:"rgb(158, 158, 158)"},ROOT_CIRCLE:{zIndex:1,position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},CIRCLE_DRAGGED:{width:20,height:20},CIRCLE_INNER:{position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},CIRCLE_INNER_EL:{position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},EMBER:{top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"}};var dt=Number.isNaN,pt=function(){},mt=tt.TOUCH,ht=mt?"touchmove":"mousemove",ft=mt?"touchend":"mouseup",vt=function(t){return{width:"calc("+t+"%)"}},wt=mt?function(t){return(((t||{}).touches||[])[0]||{}).clientX||0}:function(t){return t.clientX};const bt=function(t){var e=t.style,r=t.initValue,n=t.step,i=t.min,o=t.max,s=t.onChange,c=void 0===s?pt:s,l=(0,W.sO)(null),u=lt(!1),d=u[0],p=u[1],m=u[2],h=(0,W.eJ)(r),f=h[0],v=h[1],w=function(t){var e=function(t,e,r){return r>e?e:r<t?t:r}(i,o,t);v(e),c(e)},b=function(t){var e=lt(!1),r=e[0],n=e[1],i=e[2],o=(0,W.sO)(!1),a=function(e){o.current||(o.current=!0,requestAnimationFrame((function(){o.current=!1,t(e)})))},s=function t(){document.removeEventListener(ht,a),document.removeEventListener(ft,t),i()};return[r,function(t){mt||t.preventDefault(),document.addEventListener(ht,a),document.addEventListener(ft,s),n()}]}((function(t){var e=l.current;if(e){var r,a=e.clientWidth,s=function(t,e){var r=e.getBoundingClientRect().left;return wt(t)-r}(t,e);s<0?s=0:s>a&&(s=a),r=s/a*(o-i),r=Math.round(r/n)*n+i,r=parseFloat(r.toFixed(2)),w(r)}})),g=b[0],y=b[1];(0,W.d4)((function(){return v(r)}),[r]);var E=mt?{onTouchStart:y}:{onMouseDown:y,onMouseEnter:p,onMouseLeave:m},_=mt?void 0:{onFocus:p,onKeyDown:function(t){var e=t.keyCode,r=function(t,e,r){return function(t){return 39===t||38===t}(r)?t+e:function(t){return 37===t||40===t}(r)?t-e:void 0}(f,n,e);null!=r&&(t.preventDefault(),w(r))},onBlur:m},C=d?(0,a.Z)({},ut.LINE_AFTER,ut.LINE_HOVERED):ut.LINE_AFTER,S=g?ut.CIRCLE_DRAGGED:null,U=g?ut.EMBER:null,T=d||g?nt("div",{style:(0,a.Z)({},ut.CIRCLE_INNER_EL,U)}):null,k=function(t,e,r){var n=(t-e)/(r-e);return dt(n)?0:Math.round(100*n)}(f,i,o),I=vt(k),R=vt(100-k),N={left:k+"%"};return nt("div",(0,a.Z)({style:(0,a.Z)({},ut.ROOT,e)},E,{children:nt("div",{ref:l,style:ut.ROOT_LINE,children:[nt("div",{style:(0,a.Z)({},ut.LINE_BEFORE,I)}),nt("div",{style:(0,a.Z)({},C,R)}),nt("input",{type:"hidden",step:n,min:i,max:o,value:f,required:!0}),nt("div",(0,a.Z)({role:"slider",tabIndex:0,"aria-valuenow":f,"aria-valuemin":i,"aria-valuemax":o,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:(0,a.Z)({},ut.ROOT_CIRCLE,S,N)},_,{children:nt("div",{style:(0,a.Z)({},ut.CIRCLE_INNER,S),children:T})}))]})}))};const gt=function(t){return nt(it,(0,a.Z)({},t,{children:nt("path",{d:"M8 16 H24",strokeWidth:"3"})}))};const yt=function(t){return nt(it,(0,a.Z)({},t,{children:[nt("path",{d:"M8 16 H24",strokeWidth:"3"}),nt("path",{d:"M16 8 V24",strokeWidth:"3"})]}))};var Et={position:"absolute",top:8,right:18},_t={transform:"translateX(264px)"},Ct={transform:"translate(0px, 0px)"},St={display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},Ut={display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"};const Tt=function(t){var e=t.btStyle,r=t.children,i=(0,W.qp)(X),o=i.toggleDrawer,s=i.sApp,c=i.useSelector,l=c(s.isDrawer),u=c(s.uiTheme),d=et("s",o);(0,W.d4)((function(){document.body.style.overflowY=l?"hidden":"auto"}));var p=(0,a.Z)({},l?Ct:_t,q.toBg(u)),m=l?Ut:St,h=l?o:void 0;return nt(n.HY,{children:[nt("button",{ref:d,className:"drawer-bt",style:(0,a.Z)({},Et,e),"aria-label":"Open Drawer",onClick:o,children:nt("span",{className:"drawer-span",children:nt("svg",{className:"drawer-svg",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[nt("path",{fill:"none",d:"M0 0h24v24H0z"}),nt("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})}),nt("div",{role:"presentation","aria-hidden":!l,className:"drawer-modal",style:m,onClick:h}),nt("aside",{className:"drawer",style:p,children:nt("div",{children:r})})]})};var kt={fromClientX:void 0},It=function(t){var e=(t||{}).changedTouches,r=void 0===e?[]:e;return r[0]?r[0].clientX:void 0},Rt=function(t){return"number"==typeof t&&t-t==0};const Nt=function(t){var e=t.onSwipeGesture,r=t.dir,n=void 0===r?"L":r,i=t.delta,o=void 0===i?30:i,a=(0,W.I4)((function(t){kt.fromClientX=It(t)}),[]),s=(0,W.I4)((function(t){(function(t,e,r){var n=kt.fromClientX;return!(!Rt(n)||!Rt(r))&&("L"===t||"U"===t?n-r>e:r-n>e)})(n,o,It(t))&&(e(),kt.fromClientX=void 0)}),[]);if(tt.TOUCH)return{onTouchStart:a,onTouchEnd:s}};var Lt={padding:3};const At=function(t){var e=t.className,r=void 0===e?"svg-close":e,n=t.style,i=t.tabIndex;return nt("button",{className:r,style:n,tabIndex:void 0===i?-1:i,onClick:t.onClick,children:nt("svg",{viewBox:"0 0 12 12",width:"100%",height:"100%",style:Lt,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"2",stroke:"#f44336",strokeLinecap:"round",children:[nt("path",{d:"M 0,0 L 12,12"}),nt("path",{d:"M 12,0 L 0,12"})]})})};var Ot=Array.isArray,Mt=function(t){return Ot(t)?t[0]?t[1]:"":t||""};const xt=function(){var t=Mt(arguments.length<=0?void 0:arguments[0]),e=Mt(arguments.length<=1?void 0:arguments[1]);return t?e?t+" "+e:t:e||void 0};var Dt={backgroundColor:"#1b2836"},Pt=function(t,e){return t===e?Dt:void 0};const Ht=function(t){var e=t.style,r=t.className,n=t.tabIndex,i=void 0===n?-1:n,o=t.initialValue,a=void 0===o?"1":o,s=t.oneC,c=void 0===s?"One":s,l=t.twoC,u=void 0===l?"Two":l,d=t.threeC,p=void 0===d?"Three":d,m=t.onClick,h=(0,W.eJ)(a),f=h[0],v=h[1],w=xt("bt-triple",r),b=Pt(f,"1"),g=Pt(f,"2"),y=Pt(f,"3"),E=(0,W.I4)((function(t){m(t),v(t)}),[m]);return nt("div",{className:w,style:e,children:[nt("button",{className:"bt-triple__one",style:b,tabIndex:i,onClick:E.bind(null,"1"),children:c}),nt("button",{className:"bt-triple__two",style:g,tabIndex:i,onClick:E.bind(null,"2"),children:u}),nt("button",{className:"bt-triple__three",style:y,tabIndex:i,onClick:E.bind(null,"3"),children:p})]})};var Bt={display:"inline-block",width:16,height:16};const Ft=function(t){var e=t.style,r=t.color,n=void 0===r?"#64e346":r;return nt("span",{style:(0,a.Z)({},Bt,e),children:nt("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:nt("path",{d:"M 2,5 L 8,14 14,1",stroke:n,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})})})};const Vt=function(t,e){var r=(0,W.sO)(0);return(0,W.I4)((function(n){if(0!==t){var i=r.current,o=n.timeStamp;o-i>t&&e(n),r.current=o}else e(n)}),[t,e])};var Zt={textDecoration:"underline"},zt=function(t,e){var r=e?t.toLowerCase().indexOf(e):-1;if(-1!==r){var i=t.substring(0,r),o=t.substring(r,r+1),a=t.substring(r+1);return nt(n.HY,{children:[nt("span",{children:i}),nt("span",{style:Zt,children:o}),nt("span",{children:a})]})}return t};const Gt=function(t){var e=t.className,r=t.style,n=t.caption,i=void 0===n?"":n,o=t.hotKey,a=t.children;return nt("span",{className:e,style:r,children:[zt(i,o),a]})};var Kt={color:"#607d8b"};const qt=function(t){var e=t.timeout,r=void 0===e?500:e,n=t.className,i=t.style,o=t.clDiv,s=void 0===o?"bt-flat__div":o,c=t.clCaption,l=t.isPrimary,u=t.caption,d=t.tabIndex,p=t.onClick,m=t.children,h=Vt(r,p),f=l?(0,a.Z)({},i,Kt):i,v=xt("bt-flat",n),w=xt("bt-flat__span",c);return nt("button",{className:v,style:f,tabIndex:d,onClick:h,children:nt("div",{className:s,children:[nt(Gt,{className:w,caption:u}),m]})})};const Yt={HEADER:"drawer__title",ROOT:"drawer__list",BT:"drawer__list-bt",BT_CLOSE:"drawer__bt-close",BT_TRIPLE:"mr-8"};const Wt=function(){var t=(0,W.qp)(X),e=t.sApp,r=t.addCategory,n=t.removeCategory,i=t.useSelector,o=i(e.topics),a=i(e.categories),s=i(e.isDrawer)?0:-1;return nt("ul",{children:o.map((function(t){var e=a[t];return nt("li",{children:nt(qt,{className:Yt.BT,caption:t,timeout:0,tabIndex:s,onClick:e?function(){return n(t)}:function(){return r(t)},children:e&&nt(Ft,{})})},t)}))})};const Xt=function(){var t=(0,W.qp)(X),e=t.setUiTheme,r=t.toggleDrawer,n=t.setSrcFilter,i=Nt({onSwipeGesture:r,dir:"R"});return nt("div",(0,a.Z)({className:Yt.ROOT},i,{children:[nt("div",{className:Yt.HEADER,children:[nt(Ht,{className:Yt.BT_TRIPLE,oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:e}),nt(At,{className:Yt.BT_CLOSE,onClick:r})]}),nt(Wt,{}),nt("div",{className:Yt.HEADER,children:nt(Ht,{className:Yt.BT_TRIPLE,initialValue:"2",oneC:"ALL",twoC:"HTTPS",threeC:"HTTP",onClick:n})})]}))};const Jt=function(){return nt(Tt,{children:nt(Xt,{})})};const jt={ROW:{height:35,transition:"height 0.3s ease-out"},SLIDER:{display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},VOLUME:{position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},GAP:{display:"inline-block",width:12}};var Qt=function(t,e){return{onMouseDown:t,onMouseUp:e,onTouchStart:t,onTouchEnd:e}},$t=function(t){return t>.8},te=function(t){return t<.2};const ee=function(t){var e,r,n=t.volume,i=t.setVolume,o=t.onIncrease,s=t.onDecrease,c=ct(o,$t,n),l=c[0],u=c[1],d=ct(s,te,n),p=d[0],m=d[1],h=Qt((function(){0!==n&&p()}),m),f=Qt((function(){100!==n&&l()}),u);return(0,W.d4)((function(){0===n&&m(),100===n&&u()})),nt("div",{id:"volume",style:jt.ROW,children:[nt("div",{style:jt.VOLUME,children:(e=n,"number"==typeof(r=e)&&r-r==0?Math.round(100*e):"")}),nt(bt,{style:jt.SLIDER,initValue:n,step:.05,min:0,max:1,onChange:i}),nt(gt,(0,a.Z)({hotKey:"-",ariaLabel:"Increase Volume"},h,{onClick:s})),nt("div",{style:jt.GAP}),nt(yt,(0,a.Z)({hotKey:"+",ariaLabel:"Decrease Volume"},f,{onClick:o})),nt(Jt,{})]})};var re={display:"block"},ne={display:"none"};const ie=function(t){var e=t.isShow,r=t.className,n=t.style,i=t.children,o=e?re:ne;return nt("div",{className:xt(r,[e,"show-popup"]),style:(0,a.Z)({},n,o),children:i})};var oe=R.isHttp;const ae=function(t){var e=t.src;return nt("span",{children:[" ",oe(e)?"(http)":""]})};const se={ARROW_OPEN:{transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},LINK:{color:"#04477b",fontSize:"17px",display:"inline-block",maxWidth:340,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},TITLE:{color:"darkgray"},CATEGORY:{color:"#1b2836"}};var ce=function(t){return t[0].toUpperCase()+t.substring(1)};const le=function(t){var e,r=t.category,n=t.br;if(!(e=r)||"string"!=typeof e)return null;var i=n?" ("+n+" Kbps)":"";return nt("div",{children:[nt("span",{style:se.TITLE,children:"Category:"})," ",nt("span",{style:se.CATEGORY,children:[ce(r),i]})]})};const ue=function(t){var e=t.siteUrl;return e?nt("a",{href:e,style:se.LINK,target:"_blank",rel:"noreferrer noopener",children:e}):null};var de="station-descr",pe="station-descr__bt",me="item-descr__bt-more",he="station-descr__info";const fe=function(t){var e=t.station,r=(0,W.eJ)(!0),n=r[0],i=r[1],o=n?se.ARROW_OPEN:void 0,a=e||{},s=a.title,c=a.src,l=a.siteUrl,u=a.category,d=a.br;return e?nt("div",{className:de,children:[nt("button",{className:pe,onClick:function(){return i((function(t){return!t}))},children:[nt("span",{children:s}),nt(ae,{src:c}),nt("span",{className:me,style:o,children:">"})]}),nt(ie,{className:he,isShow:n,children:nt("div",{children:[nt(le,{category:u,br:d}),nt(ue,{siteUrl:l})]})})]}):null};const ve=function(t){var e=t.station,r=t.hotKey,n=t.onClick,i=e.title,o=e.src;return nt("button",{ref:et(r),className:"item-station",onClick:n,children:[nt("span",{children:i}),nt(ae,{src:o}),Boolean(r)&&nt("span",{className:"item-station__access",children:r})]})};var we=function(t){return t<5?""+(t+1):void 0};const be=function(){var t=(0,W.qp)(X),e=t.toggleDrawer,r=t.setCurrentStation,n=t.sApp,i=t.useSelector,o=i(n.currentStation),s=i(n.stations),c=Nt({onSwipeGesture:e});return nt("div",(0,a.Z)({className:"item-list"},c,{children:[nt(fe,{station:o}),s.map((function(t,e){return nt(ve,{station:t,hotKey:we(e),onClick:r.bind(null,t,e)},t.title)}))]}))};const ge={Command:st,Volume:ee,List:be};var ye=r(766),Ee=function(t){return parseFloat(t.toFixed(2))},_e=null,Ce={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]},Se=!0,Ue={INIT_VOLUME:.2,checkInitVolume:function(){Se&&(ye.Howler.volume(Ue.INIT_VOLUME),Se=!1)},getVolume:function(){return ye.Howler.volume()},unload:function(){_e&&(_e.unload(),_e.off())},init:function(t,e,r){try{Ue.checkInitVolume();var n=ye.Howler.volume();return Ue.unload(),_e=new ye.Howl((0,a.Z)({},Ce,{src:t,onloaderror:e,onplayerror:r})),ye.Howler.volume(n),!0}catch(t){return _e=null,console.log(t.message),!1}},play:function(){return!!_e&&(_e.play(),!0)},stop:function(){_e&&_e.stop()},setVolume:function(t){return ye.Howler.volume(Ee(t)),t},increaseVolume:function(t){void 0===t&&(t=.05),Ue.checkInitVolume();var e=Ee(ye.Howler.volume()+t);return e<=1&&ye.Howler.volume(e),ye.Howler.volume()},decreaseVolume:function(t){void 0===t&&(t=.05),Ue.checkInitVolume();var e=Ee(ye.Howler.volume()-t);return e>=0&&ye.Howler.volume(e),ye.Howler.volume()}};const Te=Ue;var ke="audio__title",Ie="audio__title audio__title--err";const Re=function(t){var e=t.station,r=t.msgErr,n=t.title,i=e&&e.title||"",o=r&&i;return nt("div",{className:o?Ie:ke,children:o?r+" "+i:i||n})};var Ne="equalizer--not-playing";const Le=function(t){var e=t.isPlaying,r=t.isUnloaded,n=t.unload;return e?nt("div",{className:"equalizer"}):r?nt("div",{className:Ne}):nt("button",{className:Ne,"data-loader":"circle",onClick:n})};var Ae=Te.INIT_VOLUME,Oe="Radio Player v0.3.0",Me={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},xe=function(t,e){switch(e.type){case Me.SET_LOADING:return(0,a.Z)({},t,{isUnloaded:!1,isPlaying:!1,msgErr:""});case Me.SET_PLAYING:return(0,a.Z)({},t,{isPlaying:!0,isUnloaded:!1});case Me.PAUSE:return(0,a.Z)({},t,{isPlaying:!1});case Me.UNLOAD:return(0,a.Z)({},t,{isUnloaded:!0});case Me.STOP:return(0,a.Z)({},t,{isPlaying:!1,isUnloaded:!0});case Me.SET_VOLUME:var r=e.volume,n=void 0===r?Ae:r;return(0,a.Z)({},t,{volume:n});case Me.SET_TITLE:var i=e.title,o=void 0===i?Oe:i;return(0,a.Z)({},t,{title:o});case Me.SET_ERROR:var s=e.msgErr,c=void 0===s?"":s;return(0,a.Z)({},t,{msgErr:c,isPlaying:!1,isUnloaded:!0});default:throw new Error("Unsupported action type: "+e.type)}};xe.A=Me;const De=xe;var Pe=De.A,He={display:"flex",alignItems:"center",paddingBottom:4},Be=function(t){void 0===t&&(t=""),tt.MEDIA_SESSION&&(navigator.mediaSession.metadata=new MediaMetadata({title:Oe,artist:t}))},Fe={msgErr:"",title:Oe,isUnloaded:!0,isPlaying:!1,volume:Ae};const Ve=function(){var t=(0,W.sO)(null),e=(0,W.qp)(X),r=e.uiThemeImpl,n=e.sApp,i=e.useSelector,o=i(n.uiTheme),a=i(n.currentStation),s=(0,W._Y)(De,Fe),c=s[0],l=s[1],u=c.isUnloaded,d=c.isPlaying,p=c.volume,m=c.title,h=c.msgErr,f=(0,W.I4)((function(t){return l({type:Pe.SET_VOLUME,volume:Te.setVolume(t)})}),[]),v=(0,W.I4)((function(){return l({type:Pe.SET_VOLUME,volume:Te.increaseVolume(.01)})}),[]),w=(0,W.I4)((function(){return l({type:Pe.SET_VOLUME,volume:Te.decreaseVolume(.01)})}),[]),b=(0,W.I4)((function(){Te.stop(),Te.unload(),l({type:Pe.STOP})}),[]),g=function(t){l({type:Pe.SET_ERROR,msgErr:t}),Be()};return(0,W.d4)((function(){tt.MEDIA_SESSION&&navigator.mediaSession.setActionHandler("pause",b)}),[]),(0,W.d4)((function(){return a&&a.src&&Te.init(a.src,g.bind(null,"Load Error"),g.bind(null,"Play Error"))&&l({type:Pe.SET_LOADING}),function(){Te.unload()}}),[a]),nt("div",{className:"audio-player",style:r.toBg(o),children:[nt(ge.Volume,{volume:p,setVolume:f,onIncrease:v,onDecrease:w}),nt("div",{style:He,children:[nt(ge.Command,{isPlaying:d,onPlay:function(){var e;e=t,clearTimeout(e.current),e.current=null,!h&&Te.play()?(l({type:Pe.SET_PLAYING}),Be(a&&a.title||Oe)):(l({type:Pe.SET_TITLE,title:"At first, please, choose a radio station."}),Be())},onStop:function(){Te.stop(),t.current=setTimeout((function(){return l({type:Pe.UNLOAD})}),6e4),l({type:Pe.PAUSE})}}),nt(Re,{station:a,msgErr:h,title:m}),nt(Le,{isPlaying:d,isUnloaded:u,unload:function(){Te.unload(),l({type:Pe.UNLOAD}),Be()}})]})]})};const Ze=function(){var t=(0,W.qp)(X).setSrcFilter;return $(!0),(0,W.d4)((function(){t("2")}),[]),nt("div",{className:"app-radio-player",children:[nt(Ve,{}),nt(ge.List,{})]})};var ze=Y(G),Ge=j();(0,n.sY)(nt(i.zt,{store:G,children:nt(J.Provider,{value:Ge,children:nt(X.Provider,{value:ze,children:nt(Ze,{})})})}),document.getElementById("app"))}},t=>{var e;e=591,t(t.s=e)}]);