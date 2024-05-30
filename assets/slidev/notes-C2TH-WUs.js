import{h as $,i as B,j as D,k as T}from"../modules/unplugin-icons-C01YwsYh.js";import{d as I,t as E,S as H,y as h,D as L,b as V,e as o,h as x,z as t,l as s,k as c,x as g,F as j,o as i,c as k}from"../modules/vue-VobkUfoe.js";import{u as M,a as P,s as R,d as r,f as U,_ as q}from"../index-CppKwDEu.js";import{N as A}from"./NoteDisplay-CBjxLLSP.js";import{I as u}from"./IconButton--zKAdZf_.js";import"../modules/shiki-ZI2AGyxg.js";const G={class:"h-full pt-2 flex flex-col"},J={class:"flex-none border-t border-main"},K={class:"flex gap-1 items-center px-6 py-3"},O=o("div",{class:"flex-auto"},null,-1),Q={class:"p2 text-center"},W=I({__name:"notes",setup(X){M({title:`Notes - ${R}`});const{slides:z,total:_}=P(),{isFullscreen:p,toggle:y}=U,d=E(),l=H("slidev-notes-font-size",18),n=h(()=>{var e;return((e=r.lastUpdate)==null?void 0:e.type)==="viewer"?r.viewerPage:r.page}),a=h(()=>z.value.find(e=>e.no===n.value));L(n,()=>{var e;(e=d.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function b(){l.value=l.value+1}function S(){l.value=l.value-1}return(e,Y)=>{var m,f,v;const w=D,C=T,N=$,F=B;return i(),V(j,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:x({width:`${(n.value-1)/(t(_)-1)*100+1}%`})},null,4),o("div",G,[o("div",{ref_key:"scroller",ref:d,class:"px-5 flex-auto h-full overflow-auto",style:x({fontSize:`${t(l)}px`})},[s(A,{note:(m=a.value)==null?void 0:m.meta.slide.note,"note-html":(f=a.value)==null?void 0:f.meta.slide.noteHTML,placeholder:`No notes for Slide ${n.value}.`,"clicks-context":(v=a.value)==null?void 0:v.meta.__clicksContext,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",J,[o("div",K,[s(u,{title:t(p)?"Close fullscreen":"Enter fullscreen",onClick:t(y)},{default:c(()=>[t(p)?(i(),k(w,{key:0})):(i(),k(C,{key:1}))]),_:1},8,["title","onClick"]),s(u,{title:"Increase font size",onClick:b},{default:c(()=>[s(N)]),_:1}),s(u,{title:"Decrease font size",onClick:S},{default:c(()=>[s(F)]),_:1}),O,o("div",Q,g(n.value)+" / "+g(t(_)),1)])])])],64)}}}),ne=q(W,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/notes.vue"]]);export{ne as default};
