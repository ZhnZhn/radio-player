"use strict";(self.webpackChunkradio_player=self.webpackChunkradio_player||[]).push([[524],{724:(t,e,r)=>{var i=r(172),o=r(468),n=r(644);const s=["alternative","chillout","classical","country","instrumental","piano","pop","sport","talks"],a={app:{isDrawer:!1,filter:"none",currentStation:void 0,uiTheme:"grey"},topics:[...s],categories:{},stations:[]},l="SET_UI_THEME",c="TOGGLE_DRAWER",d={1:"grey",2:"light",3:"sand"},u={setUiTheme:t=>({type:l,uiTheme:d[t]}),toggleDrawer:()=>({type:c})},p="ADD_CATEGORY",h="REMOVE_CATEGORY",m="SET_CURRENT_STATION",y={addCategory:t=>({type:p,category:t}),removeCategory:t=>({type:h,category:t}),setCurrentStation:t=>({type:m,station:t})},{uiTheme:b}=a.app,w=function(t,e){switch(void 0===t&&(t=a.app),e.type){case l:{const{uiTheme:r=b}=e;return t.uiTheme!==r?{...t,uiTheme:r}:t}case c:return{...t,isDrawer:!t.isDrawer};case m:{const{station:r}=e;return{...t,currentStation:r}}default:return t}},g=function(t){return void 0===t&&(t=""),e=>e.title!==t},v=function(t,e){switch(void 0===t&&(t=a.stations),e.type){case p:{const{categories:r,category:i,currentStation:o}=e,{title:n}=o||{},s=(r||[]).filter(g(n)),a=((t,e)=>{const r=t.length;for(let i=0;i<r;i++)if(t[i].category===e)return t[i]})(t,i);return[...a?s.filter(g(a.title)):s,...t]}case h:{const{category:r}=e;return t.filter((t=>e=>e.category!==t)(r))}case m:{const{station:r,currentStation:i}=e,{title:o}=r||{},n=t.filter(g(o));return i&&n.unshift(i),n}default:return t}},f=function(t,e){switch(void 0===t&&(t=a.categories),e.type){case p:{const{category:r}=e;return r&&(t[r]=!0),{...t}}case h:{const{category:r}=e;return r&&(t[r]=!1),{...t}}default:return t}},_=function(t){return void 0===t&&(t=a.topics),t},k=(0,n.HY)({app:w,stations:v,categories:f,topics:_}),S={app:t=>t.app||{},isDrawer:t=>S.app(t).isDrawer,isHttp:t=>"https"!==S.app(t).filter,currentStation:t=>S.app(t).currentStation,uiTheme:t=>S.app(t).uiTheme,topics:t=>t.topics||[],categories:t=>t.categories||[],stations:t=>t.stations||[]},U={sApp:S},C=t=>{let{getState:e}=t;return t=>r=>((t=>(0,n.ve)(t)&&(t.type===p||t.type===m))(r)&&(r.currentStation=S.currentStation(e())),t(r))},T={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"},E=()=>t=>e=>{if((t=>(0,n.ve)(t)&&"uiTheme"in t)(e)){const{uiTheme:t}=e,r=t&&T[t];r&&(document.body.style.backgroundColor=r)}return t(e)},N={alternative:[{title:"Canada: American Roots",src:"https://igor.torontocast.com:2275/stream",siteUrl:"https://www.americanrootsradio.com",br:64},{title:"France: Chante France",src:"https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac",siteUrl:"https://www.chantefrance.com",br:96},{title:"France: Nostalgie FM",src:"https://scdn.nrjaudio.fm/fr/30601/aac_64.mp3?origine=playernostalgie&aw_0_req.userConsent=undefined&cdn_path=audio_lbs8",siteUrl:"https://www.nostalgie.fr",br:128},{title:"USA: The Austin Music Experience",src:"https://kut.streamguys1.com/amx-web",siteUrl:"https://kutx.org",br:192}],classical:[{title:"Germany: Hamburg Klassik 98.1 FM",src:"https://klassikr.streamabc.net/klassikradio-simulcast-mp3-mq?sABC=5p7684ns%23%233ros3r7q49np68nq09sorn0021437803%23enqvbqr&amsparams=playerid:radiode;skey:1551271087",siteUrl:"https://www.klassikradio.de",br:192},{title:"Netherland: NPO Radio 4",src:"https://icecast.omroep.nl/radio4-bb-mp3",siteUrl:"https://www.radio4.nl",br:192},{title:"Swiss: Basel Radio Classic",src:"https://stream.srg-ssr.ch/m/rsc_de/mp3_128",siteUrl:"https://www.radioswissclassic.ch",br:128},{title:"Swiss: Opera House 1.FM",src:"https://strm112.1.fm/opera_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"UK: Classic FM",src:"https://media-ssl.musicradio.com/ClassicFM",siteUrl:"https://www.classicfm.com",br:48},{title:"USA: New York WQXR",src:"https://stream.wqxr.org/wqxr-web?nyprBrowserId=5fad42cad0701918",siteUrl:"https://www.wqxr.org",br:128}],country:[{title:"USA: Country Hits",src:"https://19763.live.streamtheworld.com/977_COUNTRY.mp3",siteUrl:"https://hitsradio.com",br:128},{title:"USA: NYC Country Live",src:"https://streaming.radiostreamlive.com/radiocountrylive_devices",siteUrl:"https://www.radiocountrylive.com",br:128},{title:"USA: Today's Country 011.FM",src:"https://listen.011fm.com/stream01",siteUrl:"https://011fm.com",br:192},{title:"USA: 650 AM WSM",src:"https://stream01048.westreamradio.com/wsm-am-mp3",siteUrl:"https://wsmradio.com",br:64},{title:"USA: Opry Nashville",src:"https://stream01051.westreamradio.com/wsm3-mp3",siteUrl:"https://wsmradio.com",br:64}],talks:[{title:"USA: California: KCRW 89.9 FM",src:"https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air?listenerid=1a13cb86cbe44b773c014c34bb7bfe43&awparams=companionAds%3Atrue",siteUrl:"https://www.kcrw.com",br:192},{title:"USA: KUT 90.5 FM",src:"https://kut.streamguys1.com/kut-web",siteUrl:"https://www.kut.org",br:128},{title:"USA: NPR Radio",src:"https://npr-ice.streamguys1.com/live.mp3",siteUrl:"https://www.npr.org",br:128},{title:"USA: Portland: XRAY.FM",src:"https://listen.xray.fm/stream",siteUrl:"https://xray.fm",br:128},{title:"USA: WABE 90.1 FM",src:"https://pba-ice.wabe.org/wabe.aac",siteUrl:"https://www.wabe.org",br:96}],sport:[{title:"UK: talkSPORT",src:"https://radio.talksport.com/stream?awparams=platform:ts-tunein;lang:en",siteUrl:"https://talksport.com",br:64}],chillout:[{title:"Spain: Costa Del Mar - Chillout",src:"https://radio4.cdm-radio.com:18020/stream-mp3-Chill",siteUrl:"https://www.costadelmar-radio.com",br:96},{title:"Swiss: Chillout Lounge 1.FM",src:"https://strm112.1.fm/chilloutlounge_mobile_mp3",siteUrl:"https://www.1.fm",br:192},{title:"USA: Chilled Out 181.FM",src:"https://listen.181fm.com/181-chilled_128k.mp3",siteUrl:"https://www.181.fm",br:128}],pop:[{title:"UK: Dance UK",src:"https://dancestream.danceradiouk.com/stream/1/",siteUrl:"https://www.danceradiouk.com",br:48},{title:"UK: Magic",src:"https://stream-mz.planetradio.co.uk/magicnational.aac",siteUrl:"https://planetradio.co.uk/magic/",br:47},{title:"Swiss: Zug Top 40 1.FM",src:"https://strm112.1.fm/top40_mobile_mp3",siteUrl:"https://1.fm",br:128},{title:"Seattle: KEXP 90.3 FM",src:"https://kexp-mp3-128.streamguys1.com/kexp128.mp3",siteUrl:"https://kexp.org",br:128},{title:"USA: 977 Hits Radio",src:"https://19763.live.streamtheworld.com/977_HITSAAC_SC",siteUrl:"https://hitsradio.com",br:64}],piano:[{title:"USA: Whisperings Solo Piano",src:"https://pianosolo.streamguys1.com/live",siteUrl:"https://www.solopianoradio.com",br:96}],instrumental:[{title:"EU: Instrumental Radio",src:"https://str2b.openstream.co/959?aw_0_1st.collectionid=4097&stationId=4097&publisherId=983&k=1602000602",siteUrl:"https://instrumentalradio.eu",br:128},{title:"USA: Beautiful Instrumentals Channel",src:"https://edge4.peta.live365.net/b37545_128mp3",siteUrl:"https://www.beautifulinstrumentalschannel.com",br:128},{title:"USA: GotRadio Guitar Genius",src:"https://pureplay.cdnstream1.com/6018_128.mp3",siteUrl:"https://www.gotradio.com",br:128},{title:"USA: Instrumental Hits Radio",src:"https://panel.retrolandigital.com/listen/instrumental_hits_radio/listen",siteUrl:"https://instrumentalhitsradio.com",br:192}]},A={getCategory:t=>t&&N[t]||[]},M={isHttp:function(t){return void 0===t&&(t=""),"http"===t.split("://")[0]},filterCategoriesBy:t=>s.filter((e=>A.getCategory(e).some(t))),crCategories:()=>[...s],getCategory:A.getCategory,crFilterBy:t=>{switch(t){case"http":return t=>M.isHttp(t.src);case"https":return t=>!M.isHttp(t.src);default:return()=>!0}}},I=M,{crFilterBy:L,getCategory:x}=I,O=[...[E,C,t=>{let{getState:e}=t;return t=>r=>{if((t=>(0,n.ve)(t)&&t.type===p&&"category"in t)(r)){const t=e(),{category:i}=r,o=L(t.app.filter);r.categories=x(i).map((t=>(t.category=i,t))).filter(o)}return t(r)}}]];let R=n.Zz;const D=(0,n.Yl)(k,a,R((0,n.Tw)(...O))),H={grey:"grey",light:"#e1e1e1",sand:"#e8e0cb"},P={toBg:t=>({backgroundColor:H[t]})},V=t=>{let{dispatch:e}=t;return{...(0,n.zH)(u,e),...(0,n.zH)(y,e),...U,useSelector:o.d4,uiThemeImpl:P}},F=t=>"number"==typeof t&&t-t==0,K=t=>t?t[0].toUpperCase()+t.slice(1):"";var z=r(994);const G=(0,i.q6)({}),B=(0,i.q6)({}),W=()=>({}),q=()=>{},Y=t=>{const e=(0,z.NT)(B),r=(0,z.hb)((t=>{if(t.altKey||t.metaKey){const r=e[t.key];if(r){const[t,e=q]=r,i=(t||{}).current;i&&i.focus&&i.focus(),e()}}}),[e]);(0,z.vJ)((()=>{if(t)return document.addEventListener("keydown",r,!1),()=>document.removeEventListener("keydown",r,!1)}),[t,r])},X=(document&&document.body.style.transition,document&&"ontouchstart"in document.documentElement),J=navigator&&"mediaSession"in navigator,j=(void 0===Z&&(Z=700),(window&&window.innerWidth||Z+1)>Z);var Z;const Q=!X||j,$=(t,e)=>{const r=(0,z.NT)(B),i=(0,z.li)(null);return(0,z.vJ)((()=>{if(!X&&t)return r[t]=[i,e],()=>r[t]=void 0}),[t,e]),i};var tt=0;Array.isArray;function et(t,e,r,o,n,s){e||(e={});var a,l,c=e;if("ref"in c)for(l in c={},e)"ref"==l?a=e[l]:c[l]=e[l];var d={type:t,props:c,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--tt,__i:-1,__u:0,__source:n,__self:s};if("function"==typeof t&&(a=t.defaultProps))for(l in a)void 0===c[l]&&(c[l]=a[l]);return i.fF.vnode&&i.fF.vnode(d),d}const rt=t=>{let{w:e,h:r=e,children:i,...o}=t;return et("svg",{"aria-hidden":"true",viewBox:"0 0 "+e+" "+r,...o,preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",children:i})},it=t=>{let{hotKey:e,ariaLabel:r,onMouseDown:i,onMouseUp:o,onTouchStart:n,onTouchEnd:s,onClick:a,children:l}=t;const c=X&&n?{onTouchStart:n,onTouchEnd:s}:{onMouseDown:i,onMouseUp:o};return et("button",{type:"button",ref:$(e,a),className:"bt-circle","aria-label":r,...c,onClick:a,children:et(rt,{w:"34",width:"100%",height:"100%",children:et("g",{children:l})})})},ot=et("path",{d:"M12.458 22.667l10-6.5-10-6.5z"}),nt=et(i.FK,{children:[et("path",{d:"M11.5 10h3v13h-3v-13z"}),et("path",{d:"M17.5 10h3v13h-3v-13z"})]}),st=t=>{const[e,r,i,o]=(t=>{let{isPlaying:e,onPlay:r,onStop:i}=t;return e?["m","Mute",i,nt]:["p","Play",r,ot]})(t);return et(it,{hotKey:e,ariaLabel:r,onClick:i,children:o})},at=(t,e,r)=>{const i=(0,z.li)(null),o=(0,z.li)(r);o.current=r;const n=()=>clearInterval(i.current);return[()=>{i.current=setInterval((()=>{e(o.current)?(n(),i.current=setInterval(t,500)):t()}),150)},n]},lt=t=>{const[e,r]=(0,z.J0)((()=>!!t)),[i,o]=(0,z.Kr)((()=>[()=>r(!0),()=>r(!1)]),[]);return[e,i,o]},ct=t=>{const[e,r]=(0,z.J0)(t),[i,o]=(0,z.J0)(t);return i!==t&&(r(t),o(t)),[e,r]},dt={position:"relative",width:"100%",height:18,marginTop:8,marginBottom:8,userSelect:"none",cursor:"default"},ut={position:"absolute",top:8,left:0,width:"100%",height:2},pt={position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"rgb(0, 188, 212)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},ht={position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"rgb(189, 189, 189)",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},mt={backgroundColor:"rgb(158, 158, 158)"},yt={zIndex:1,position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"rgb(0, 188, 212)",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},bt={width:20,height:20},wt={position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},gt={position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)",transform:"scale(1)"},vt={top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"},ft=Number.isNaN,_t=t=>{},kt=X?"touchmove":"mousemove",St=X?"touchend":"mouseup",Ut=t=>({width:"calc("+t+"%)"}),Ct=X?t=>(((t||{}).touches||[])[0]||{}).clientX||0:t=>t.clientX,Tt=t=>{let{style:e,initialValue:r,step:i,min:o,max:n,onChange:s=_t}=t;const a=(0,z.li)(null),[l,c,d]=lt(!1),[u,p]=ct(r),h=t=>{const e=((t,e,r)=>r>e?e:r<t?t:r)(o,n,t);p(e),s(e)},[m,y]=(t=>{const[e,r,i]=lt(!1),o=(0,z.li)(!1),n=e=>{o.current||(o.current=!0,requestAnimationFrame((()=>{o.current=!1,t(e)})))},s=()=>{document.removeEventListener(kt,n),document.removeEventListener(St,s),i()};return[e,t=>{X||t.preventDefault(),document.addEventListener(kt,n),document.addEventListener(St,s),r()}]})((t=>{const e=a.current;if(e){const r=e.clientWidth;let s,a=((t,e)=>{const r=e.getBoundingClientRect().left;return Ct(t)-r})(t,e);a<0?a=0:a>r&&(a=r),s=a/r*(n-o),s=Math.round(s/i)*i+o,s=parseFloat(s.toFixed(2)),h(s)}})),b=X?{onTouchStart:y}:{onMouseDown:y,onMouseEnter:c,onMouseLeave:d},w=X?void 0:{onFocus:c,onKeyDown:t=>{const{keyCode:e}=t,r=((t,e,r)=>(t=>39===t||38===t)(r)?t+e:(t=>37===t||40===t)(r)?t-e:void 0)(u,i,e);null!=r&&(t.preventDefault(),h(r))},onBlur:d},g=l?{...ht,...mt}:ht,v=m?bt:null,f=l||m?et("div",{style:{...gt,...m?vt:null}}):null,_=((t,e,r)=>{const i=(t-e)/(r-e);return ft(i)?0:Math.round(100*i)})(u,o,n),k=Ut(_),S=Ut(100-_),U={left:_+"%"};return et("div",{style:{...dt,...e},...b,children:et("div",{ref:a,style:ut,children:[et("div",{style:{...pt,...k}}),et("div",{style:{...g,...S}}),et("input",{type:"hidden",step:i,min:o,max:n,value:u,required:!0}),et("div",{role:"slider",tabIndex:0,"aria-valuenow":u,"aria-valuemin":o,"aria-valuemax":n,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:{...yt,...v,...U},...w,children:et("div",{style:{...wt,...v},children:f})})]})})},Et=t=>et(it,{...t,children:et("path",{d:"M8 16 H24",strokeWidth:"3"})}),Nt=t=>et(it,{...t,children:[et("path",{d:"M8 16 H24",strokeWidth:"3"}),et("path",{d:"M16 8 V24",strokeWidth:"3"})]}),At=(t,e)=>(0,z.hb)((e=>{"function"==typeof t&&(t=>27===t.keyCode||"Escape"===t.key)(e)&&(e.preventDefault(),e.stopPropagation(),t())}),e||[]),Mt="drawer",It=Mt+"-bt",Lt=Mt+"-span",xt=Mt+"-svg",Ot=Mt+"-modal",Rt={position:"absolute",top:8,right:18},Dt={transform:"translateX(264px)"},Ht={transform:"translate(0px, 0px)"},Pt={display:"none",opacity:0,zIndex:-1,transition:"opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},Vt={display:"block",opacity:1,zIndex:1e3,transition:"opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},Ft=t=>{let{btStyle:e,children:r}=t;const{toggleDrawer:o,sApp:n,useSelector:s}=(0,z.NT)(G),a=s(n.isDrawer),l=s(n.uiTheme),c=$("s",o),d=a?o:void 0,u=At(d,[d]);(0,z.vJ)((()=>{document.body.style.overflowY=a?"hidden":"auto"}));const p={...a?Ht:Dt,...P.toBg(l)},h=a?Vt:Pt;return et(i.FK,{children:[et("button",{type:"button",ref:c,className:It,style:{...Rt,...e},"aria-label":"Open Drawer",onClick:o,children:et("span",{className:Lt,children:et("svg",{className:xt,focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:[et("path",{fill:"none",d:"M0 0h24v24H0z"}),et("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})}),et("div",{role:"presentation","aria-hidden":!a,className:Ot,style:h,onClick:d}),et("aside",{role:"presentation",className:Mt,style:p,onKeyDown:u,children:et("div",{children:r})})]})},Kt=30,zt={fromClientX:void 0},Gt=t=>{const{changedTouches:e=[]}=t||{};return e[0]?e[0].clientX:void 0},Bt=t=>{let{onSwipeGesture:e,dir:r="L",delta:i=Kt}=t;const o=(0,z.hb)((t=>{zt.fromClientX=Gt(t)}),[]),n=(0,z.hb)((t=>{((t,e,r)=>{const{fromClientX:i}=zt;return!(!F(i)||!F(r))&&("L"===t||"U"===t?i-r>e:r-i>e)})(r,i,Gt(t))&&(e(),zt.fromClientX=void 0)}),[]);if(X)return{onTouchStart:o,onTouchEnd:n}},Wt="svg-close",qt={padding:3,stroke:"inherit"},Yt=t=>{let{className:e=Wt,style:r,tabIndex:i=-1,onClick:o}=t;return et("button",{type:"button",className:e,style:r,tabIndex:i,onClick:o,children:et(rt,{w:"12",width:"100%",height:"100%",style:qt,strokeWidth:"2",strokeLinecap:"round",children:[et("path",{d:"M 0,0 L 12,12"}),et("path",{d:"M 12,0 L 0,12"})]})})},Xt=Array.isArray,Jt=t=>Xt(t)?t[0]?t[1]:"":t||"",jt=function(){const t=Jt(arguments.length<=0?void 0:arguments[0]),e=Jt(arguments.length<=1?void 0:arguments[1]);return t?e?t+" "+e:t:e||void 0},Zt="bt-triple",Qt=Zt+"__one",$t=Zt+"__two",te=Zt+"__three",ee={backgroundColor:"#1b2836"},re=(t,e)=>t===e?ee:void 0,ie=t=>{let{style:e,className:r,tabIndex:i=-1,initialValue:o="1",oneC:n="One",twoC:s="Two",threeC:a="Three",onClick:l}=t;const[c,d]=(0,z.J0)(o),u=jt(Zt,r),[p,h,m]=(0,z.Kr)((()=>[re(c,"1"),re(c,"2"),re(c,"3")]),[c]),y=(0,z.Kr)((()=>t=>{l(t),d(t)}),[l]),[b,w,g]=(0,z.Kr)((()=>[y.bind(null,"1"),y.bind(null,"2"),y.bind(null,"3")]),[y]);return et("div",{className:u,style:e,children:[et("button",{type:"button",className:Qt,style:p,tabIndex:i,onClick:b,children:n}),et("button",{type:"button",className:$t,style:h,tabIndex:i,onClick:w,children:s}),et("button",{type:"button",className:te,style:m,tabIndex:i,onClick:g,children:a})]})},oe={display:"inline-block",width:16,height:16},ne=t=>{let{style:e,color:r}=t;return et("span",{style:{...oe,...e},children:et(rt,{w:"16",children:et("path",{className:"check-in",d:"M 2,5 L 8,14 14,1",stroke:r,fill:"transparent",strokeWidth:"3",strokeLinecap:"round"})})})},se=(t,e)=>{const r=(0,z.li)(0);return(0,z.hb)((i=>{if(0!==t){const{timeStamp:o}=i;o-r.current>t&&e(i),r.current=o}else e(i)}),[t,e])},ae={textDecoration:"underline"},le=(t,e)=>{const r=e?t.toLowerCase().indexOf(e):-1;if(-1!==r){const e=t.substring(0,r),o=t.substring(r,r+1),n=t.substring(r+1);return et(i.FK,{children:[et("span",{children:e}),et("span",{style:ae,children:o}),et("span",{children:n})]})}return t},ce=t=>{let{className:e,style:r,caption:i="",hotKey:o,children:n}=t;return et("span",{className:e,style:r,children:[le(i,o),n]})},de="bt-flat__div",ue={color:"#607d8b"},pe=t=>{let{timeout:e=500,className:r,style:i,clDiv:o=de,clCaption:n,isPrimary:s,caption:a,tabIndex:l,onClick:c,children:d}=t;const u=se(e,c),p=s?{...i,...ue}:i,h=jt("bt-flat",r),m=jt("bt-flat__span",n);return et("button",{type:"button",className:h,style:p,tabIndex:l,onClick:u,children:et("div",{className:o,children:[et(ce,{className:m,caption:a}),d]})})},he=()=>{const{sApp:t,addCategory:e,removeCategory:r,useSelector:i}=(0,z.NT)(G),o=i(t.topics),n=i(t.categories),s=i(t.isDrawer)?0:-1;return et("ul",{children:o.map((t=>{const i=n[t];return et("li",{children:et(pe,{className:"drawer__list-bt",caption:t,timeout:0,tabIndex:s,onClick:i?()=>r(t):()=>e(t),children:i&&et(ne,{color:"#00bcd4"})})},t)}))})},me=()=>{const{setUiTheme:t,toggleDrawer:e}=(0,z.NT)(G);return et("div",{className:"drawer__list",...Bt({onSwipeGesture:e,dir:"R"}),children:[et("div",{className:"drawer__title",children:[et(ie,{className:"mr-8",oneC:"GREY",twoC:"LIGHT",threeC:"SAND",onClick:t}),et(Yt,{className:"drawer__bt-close",onClick:e})]}),et(he,{})]})},ye=()=>et(Ft,{children:et(me,{})}),be={height:35,transition:"height 0.3s ease-out"},we={display:"inline-block",width:200,maxWidth:"calc(100vw - 210px)",marginRight:16},ge={position:"relative",top:-10,display:"inline-block",color:"#00bcd4",width:46,paddingLeft:5,fontSize:22,fontWeight:400},ve={display:"inline-block",width:12},fe=(t,e)=>({onMouseDown:t,onMouseUp:e,onTouchStart:t,onTouchEnd:e}),_e=t=>t>.8,ke=t=>t<.2,Se=t=>{let{volume:e,setVolume:r,onIncrease:i,onDecrease:o}=t;const[n,s]=at(i,_e,e),[a,l]=at(o,ke,e),c=fe((()=>{0!==e&&a()}),l),d=fe((()=>{100!==e&&n()}),s);return(0,z.vJ)((()=>{0===e&&l(),100===e&&s()})),et("div",{id:"volume",style:be,children:[et("div",{style:ge,children:(u=e,(t=>"number"==typeof t&&t-t==0)(u)?Math.round(100*u):"")}),et(Tt,{style:we,initialValue:e,step:.05,min:0,max:1,onChange:r}),et(Et,{hotKey:"-",ariaLabel:"Increase Volume",...c,onClick:o}),et("div",{style:ve}),et(Nt,{hotKey:"+",ariaLabel:"Decrease Volume",...d,onClick:i}),et(ye,{})]});var u},Ue={display:"block"},Ce={display:"none"},Te=t=>{let{isShow:e,className:r,style:i,children:o}=t;const n=e?Ue:Ce;return et("div",{className:jt(r,[e,"show-popup"]),style:{...i,...n},children:o})},{isHttp:Ee}=I,Ne=t=>{let{src:e}=t;return et("span",{children:[" ",Ee(e)?"(http)":""]})},Ae={transform:"rotate(90deg) scale(1.3, 1.3) translate(14px, -10px)"},Me={color:"#04477b",fontSize:"17px",display:"inline-block",maxWidth:340,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},Ie={color:"#1b2836"},Le=t=>{let{category:e,br:r}=t;return(i=e)&&"string"==typeof i?et("div",{style:Ie,children:[K(e),r?" ("+r+" Kbps)":""]}):null;var i},xe=(t,e)=>{const r=(t||"").split("://")[0];return"https"===r||e&&"http"===r?t:void 0},Oe=t=>{let{isHttp:e,siteUrl:r}=t;const i=xe(r,e);return i?et("a",{href:i,style:Me,target:"_blank",rel:"noreferrer noopener",children:i}):null},Re="station-descr",De=Re+"__bt black",He=Re+"__info",Pe=t=>{let{isHttp:e,station:r}=t;const[i,o]=(0,z.J0)(!0),n=i?Ae:void 0,{title:s,src:a,siteUrl:l,category:c,br:d}=r||{};return r?et("div",{className:Re,children:[et("button",{type:"button",className:De,onClick:()=>o((t=>!t)),children:[et("span",{children:s}),et(Ne,{src:a}),et("span",{className:"item-descr__more",style:n,children:">"})]}),et(Te,{className:He,isShow:i,children:et("div",{children:[et(Le,{category:c,br:d}),et(Oe,{isHttp:e,siteUrl:l})]})})]}):null},Ve="item-station",Fe=Ve+"__access",Ke=t=>{let{station:e,hotKey:r,onClick:i}=t;const{title:o,src:n}=e;return et("button",{type:"button",ref:$(r),className:Ve,onClick:i,children:[et("span",{children:o}),et(Ne,{src:n}),Boolean(r)&&et("span",{className:Fe,children:r})]})},ze=t=>t<5?""+(t+1):void 0,Ge=()=>{const{toggleDrawer:t,setCurrentStation:e,sApp:r,useSelector:i}=(0,z.NT)(G),o=i(r.isHttp),n=i(r.currentStation),s=i(r.stations);return et("div",{className:"item-list",...Bt({onSwipeGesture:t}),children:[et(Pe,{isHttp:o,station:n}),s.map(((t,r)=>et(Ke,{station:t,hotKey:Q?ze(r):void 0,onClick:e.bind(null,t,r)},t.title)))]})},Be={Command:st,Volume:Se,List:Ge};var We=r(196);const qe=t=>parseFloat(t.toFixed(2));let Ye=null;const Xe={volume:.25,autoplay:!1,html5:!0,format:["webm","mpeg","mp3","acc"]};let Je=!0;const je={INIT_VOLUME:.2,checkInitVolume:()=>{Je&&(We.Howler.volume(je.INIT_VOLUME),Je=!1)},getVolume:()=>We.Howler.volume(),unload:()=>{Ye&&(Ye.unload(),Ye.off())},init:(t,e,r)=>{try{je.checkInitVolume();const i=We.Howler.volume();return je.unload(),Ye=new We.Howl({...Xe,src:t,onloaderror:e,onplayerror:r}),We.Howler.volume(i),!0}catch(t){return Ye=null,console.log(t.message),!1}},play:()=>!!Ye&&(Ye.play(),!0),stop:()=>{Ye&&Ye.stop()},setVolume:t=>(We.Howler.volume(qe(t)),t),increaseVolume:function(t){void 0===t&&(t=.05),je.checkInitVolume();const e=qe(We.Howler.volume()+t);return e<=1&&We.Howler.volume(e),We.Howler.volume()},decreaseVolume:function(t){void 0===t&&(t=.05),je.checkInitVolume();const e=qe(We.Howler.volume()-t);return e>=0&&We.Howler.volume(e),We.Howler.volume()}},Ze=je,Qe="audio__title",$e=Qe+" "+Qe+"--err text-ellipsis",tr=t=>{let{station:e,msgErr:r,title:i}=t;const o=e&&e.title||"",n=r&&o,s=n?((t,e)=>[t,e.split(":")[1]].filter(Boolean).join(":"))(r,o):o||i;return et("div",{className:n?$e:Qe,children:s})},er=()=>et(rt,{w:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[et("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),et("path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),et("path",{d:"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}),et("path",{d:"M9 17v-13h10v13"}),et("path",{d:"M9 8h10"})]}),rr="melody",ir=t=>{let{isPlaying:e,isUnloaded:r,unload:i}=t;return e?et("div",{className:rr,children:et(er,{})}):r?et("div",{className:rr}):et("button",{type:"button",className:rr,"data-loader":"circle",onClick:i})},or=Ze.INIT_VOLUME,nr="Radio Player v0.4.0",sr={SET_LOADING:"SET_LOADING",SET_PLAYING:"SET_PLAYING",PAUSE:"PAUSE",UNLOAD:"UNLOAD",STOP:"STOP",SET_VOLUME:"SET_VOLUME",SET_TITLE:"SET_TITLE",SET_ERROR:"SET_ERROR"},ar=(t,e)=>{switch(e.type){case sr.SET_LOADING:return{...t,isUnloaded:!1,isPlaying:!1,msgErr:""};case sr.SET_PLAYING:return{...t,isPlaying:!0,isUnloaded:!1};case sr.PAUSE:return{...t,isPlaying:!1};case sr.UNLOAD:return{...t,isUnloaded:!0};case sr.STOP:return{...t,isPlaying:!1,isUnloaded:!0};case sr.SET_VOLUME:{const{volume:r=or}=e;return{...t,volume:r}}case sr.SET_TITLE:{const{title:r=nr}=e;return{...t,title:r}}case sr.SET_ERROR:{const{msgErr:r=""}=e;return{...t,msgErr:r,isPlaying:!1,isUnloaded:!0}}default:throw new Error("Unsupported action type: "+e.type)}};ar.A=sr;const lr=ar,cr=lr.A,dr={display:"flex",alignItems:"center",paddingBottom:4},ur=function(t){void 0===t&&(t=""),J&&(navigator.mediaSession.metadata=new MediaMetadata({title:nr,artist:t}))},pr={msgErr:"",title:nr,isUnloaded:!0,isPlaying:!1,volume:or},hr=()=>{const t=(0,z.li)(null),{sApp:e,useSelector:r}=(0,z.NT)(G),i=r(e.currentStation),[o,n]=(0,z.WO)(lr,pr),{isUnloaded:s,isPlaying:a,volume:l,title:c,msgErr:d}=o,u=(0,z.hb)((t=>n({type:cr.SET_VOLUME,volume:Ze.setVolume(t)})),[]),p=(0,z.hb)((()=>n({type:cr.SET_VOLUME,volume:Ze.increaseVolume(.01)})),[]),h=(0,z.hb)((()=>n({type:cr.SET_VOLUME,volume:Ze.decreaseVolume(.01)})),[]),m=(0,z.hb)((()=>{Ze.stop(),Ze.unload(),n({type:cr.STOP})}),[]),y=t=>{n({type:cr.SET_ERROR,msgErr:t}),ur()};return(0,z.vJ)((()=>{J&&navigator.mediaSession.setActionHandler("pause",m)}),[]),(0,z.vJ)((()=>(i&&i.src&&Ze.init(i.src,y.bind(null,"Load Error"),y.bind(null,"Play Error"))&&n({type:cr.SET_LOADING}),()=>{Ze.unload()})),[i]),et("div",{className:"audio-player",children:[et(Be.Volume,{volume:l,setVolume:u,onIncrease:p,onDecrease:h}),et("div",{style:dr,children:[et(Be.Command,{isPlaying:a,onPlay:()=>{var e;e=t,clearTimeout(e.current),e.current=null,!d&&Ze.play()?(n({type:cr.SET_PLAYING}),ur(i&&i.title||nr)):(n({type:cr.SET_TITLE,title:"At first, please, choose a radio station."}),ur())},onStop:()=>{Ze.stop(),t.current=setTimeout((()=>n({type:cr.UNLOAD})),6e4),n({type:cr.PAUSE})}}),et(tr,{station:i,msgErr:d,title:c}),et(ir,{isPlaying:a,isUnloaded:s,unload:()=>{Ze.unload(),n({type:cr.UNLOAD}),ur()}})]})]})},mr=()=>(Y(!0),et("div",{className:"app-radio-player",children:[et(hr,{}),et(Be.List,{})]})),yr=V(D),br=W();(0,i.XX)(et(o.Kq,{store:D,children:et(B.Provider,{value:br,children:et(G.Provider,{value:yr,children:et(mr,{})})})}),document.getElementById("app"))}},t=>{var e;e=724,t(t.s=e)}]);