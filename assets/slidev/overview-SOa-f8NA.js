import{d as te,e as oe,_ as ne,f as le,g as se}from"../modules/unplugin-icons-C01YwsYh.js";import{d as X,a7 as ie,a8 as ae,t as B,a9 as ce,D as P,C as re,a0 as de,n as G,z as c,o as i,c as x,i as y,h as K,aa as ue,ab as me,b as _,j as pe,J as ve,y as A,ac as fe,e as a,F as U,ad as j,k as I,g as T,x as b,l as k}from"../modules/vue-VobkUfoe.js";import{_ as Q,u as he,a as ke,s as _e,i as ge,b as R,t as be,g as q,C as F,c as xe}from"../index-CppKwDEu.js";import{u as we,S as ye,D as Ce,a as De}from"./DrawingPreview-B0sNKJl7.js";import{I as W}from"./IconButton--zKAdZf_.js";import{N as $e}from"./NoteDisplay-CBjxLLSP.js";import{C as Se}from"./ClicksSlider-BiH4ETf4.js";import"../modules/shiki-ZI2AGyxg.js";const Ee=["placeholder"],Ne=X({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(w,{emit:z}){const l=w,g=z,u=ie(l,"editing",g,{passive:!0}),{info:v,update:C}=we(ae(l,"no")),f=B("");let D;const{ignoreUpdates:$}=ce(f,m=>{if(!u.value)return;const r=l.no;clearTimeout(D),D=setTimeout(()=>{C({note:m},r)},500)});P(()=>{var m;return(m=v.value)==null?void 0:m.note},(m="")=>{u.value||(clearTimeout(D),$(()=>{f.value=m}))},{immediate:!0,flush:"sync"});const s=B(),S=B();re(()=>{var m;u.value&&((m=s.value)==null||m.focus())}),de(s,()=>{u.value=!1});function O(){!l.autoHeight||!s.value||!u.value||s.value.scrollHeight>s.value.clientHeight&&(s.value.style.height=`${s.value.scrollHeight}px`)}return P([f,u],()=>{G(()=>{O()})},{flush:"post",immediate:!0}),(m,r)=>{var E;return c(u)?ue((i(),_("textarea",{key:1,ref_key:"inputEl",ref:s,"onUpdate:modelValue":r[2]||(r[2]=h=>f.value=h),class:y(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",l.class]),style:K([{"line-height":"1.75"},[l.style,S.value!=null?{height:`${S.value}px`}:{}]]),placeholder:w.placeholder,onKeydown:r[3]||(r[3]=pe(h=>u.value=!1,["esc"]))},null,46,Ee)),[[me,f.value]]):(i(),x($e,{key:0,class:y(["border-transparent border-2",[l.class,f.value?"":"opacity-25 italic select-none"]]),style:K(l.style),note:f.value||w.placeholder,"note-html":(E=c(v))==null?void 0:E.noteHTML,"clicks-context":w.clicksContext,"auto-scroll":!w.autoHeight,onMarkerClick:r[0]||(r[0]=(h,N)=>g("markerClick",h,N)),onMarkerDblclick:r[1]||(r[1]=(h,N)=>g("markerDblclick",h,N))},null,8,["class","style","note","note-html","clicks-context","auto-scroll"]))}}}),Me=Q(Ne,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteEditable.vue"]]),He={class:"h-screen w-screen of-hidden flex"},Ie={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Te={class:"relative"},Be={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},Ve=["onClick"],We={p2:"",border:"t main"},ze={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Oe={class:"text-3xl op20 mb2"},Ae={class:"flex flex-col gap-2 my5"},Fe=["onDblclick"],Ke={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Le={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Pe={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Ue={class:"text-xs op50"},J=450,je=X({__name:"overview",setup(w){he({title:`Overview - ${_e}`});const{openInEditor:z,slides:l}=ke(),g=ve(new Map),u=B([]),v=B(null),C=A(()=>l.value.map(t=>{var e,n;return O(((n=(e=t.meta)==null?void 0:e.slide)==null?void 0:n.note)||"")})),f=A(()=>C.value.reduce((t,e)=>t+e,0)),D=A(()=>l.value.map(t=>S(t)).reduce((t,e)=>t+e,0)),$=new WeakMap;function s(t){return $.has(t)||$.set(t,xe(t,F)),$.get(t)}function S(t){var e,n;return((e=t.meta)==null?void 0:e.clicks)||((n=s(t))==null?void 0:n.total)}function O(t){var e;return((e=t.match(/[\w’'-]+/g))==null?void 0:e.length)||0}function m(t){const e=t.getBoundingClientRect(),n=20;return e.top>=0-n&&e.left>=0-n&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+n}function r(){const t=[];Array.from(g.entries()).forEach(([e,n])=>{m(n)&&t.push(e)}),u.value=t}function E(t){const e=document.createElement("a");e.target="_blank",e.href=t,e.click()}function h(t){const e=g.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function N(t,e,n){const M=s(n);M.current===e?M.current=F:M.current=e,t.preventDefault()}return fe(()=>{G(()=>{r()})}),(t,e)=>{const n=te,M=oe,Y=ne,Z=se,ee=le;return i(),_("div",He,[a("nav",Ie,[a("div",Te,[a("div",Be,[(i(!0),_(U,null,j(c(l),(o,p)=>{var H,d,V,L;return i(),_("div",{key:o.no,class:"relative",style:{direction:"ltr"}},[a("button",{class:y(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",u.value.includes(p)?"op100 text-primary bg-gray:5":"op20"]),onClick:Re=>h(p)},[a("div",null,b(p+1),1)],10,Ve),(d=(H=o.meta)==null?void 0:H.slide)!=null&&d.title?(i(),_("div",{key:0,class:y(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",u.value.includes(p)?"text-primary":"text-main important-text-op-50"])},b((L=(V=o.meta)==null?void 0:V.slide)==null?void 0:L.title),3)):T("v-if",!0)])}),128))])]),a("div",We,[c(ge)?T("v-if",!0):(i(),x(W,{key:0,title:c(R)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=o=>c(be)())},{default:I(()=>[c(R)?(i(),x(n,{key:0})):(i(),x(M,{key:1}))]),_:1},8,["title"]))])]),a("main",{class:"flex-1 h-full of-auto",style:K(`grid-template-columns: repeat(auto-fit,minmax(${J}px,1fr))`),onScroll:r},[(i(!0),_(U,null,j(c(l),(o,p)=>{var H;return i(),_("div",{key:o.no,ref_for:!0,ref:d=>g.set(p,d),class:y(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",p===0?"pt5":""])},[a("div",ze,[a("div",Oe,b(p+1),1),k(W,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:d=>E(c(q)(o,!1))},{default:I(()=>[k(Y)]),_:2},1032,["onClick"]),(H=o.meta)!=null&&H.slide?(i(),x(W,{key:0,class:"mr--3 op0 group-hover:op80",title:"Open in editor",onClick:d=>c(z)(`${o.meta.slide.filepath}:${o.meta.slide.start}`)},{default:I(()=>[k(Z)]),_:2},1032,["onClick"])):T("v-if",!0)]),a("div",Ae,[a("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:d=>E(c(q)(o,!1))},[(i(),x(De,{key:o.no,width:J,class:"pointer-events-none important:[&_*]:select-none"},{default:I(()=>[k(ye,{"clicks-context":s(o),route:o,"render-context":"overview"},null,8,["clicks-context","route"]),k(Ce,{page:o.no},null,8,["page"])]),_:2},1024))],40,Fe),S(o)?(i(),x(Se,{key:0,"clicks-context":s(o),class:"w-full mt-2",onDblclick:d=>s(o).current=c(F)},null,8,["clicks-context","onDblclick"])):T("v-if",!0)]),a("div",Ke,[k(W,{title:"Edit Note",class:y(["rounded-full w-9 h-9 text-sm",v.value===o.no?"important:op0":""]),onClick:d=>v.value=o.no},{default:I(()=>[k(ee)]),_:2},1032,["class","onClick"])]),k(Me,{no:o.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,editing:v.value===o.no,"clicks-context":s(o),onDblclick:d=>v.value!==o.no?v.value=o.no:null,"onUpdate:editing":e[1]||(e[1]=d=>v.value=null),onMarkerClick:(d,V)=>N(d,V,o)},null,8,["no","editing","clicks-context","onDblclick","onMarkerClick"]),C.value[p]>0?(i(),_("div",Le,b(C.value[p])+" words ",1)):T("v-if",!0)],2)}),128))],36),a("div",Pe,[a("div",Ue,b(c(l).length)+" slides · "+b(D.value+c(l).length-1)+" clicks · "+b(f.value)+" words ",1)])])}}}),tt=Q(je,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/overview.vue"]]);export{tt as default};
