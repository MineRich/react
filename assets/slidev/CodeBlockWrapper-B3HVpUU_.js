import{N as H,O as L}from"../modules/unplugin-icons-C01YwsYh.js";import{d as w,t as I,aB as N,C as _,ac as E,y,aC as q,o as c,b as v,f as z,z as u,c as C,g as M,i as V,h as $}from"../modules/vue-VobkUfoe.js";import{o as k,az as D,C as K,aA as R,aB as W,_ as O}from"../index-CppKwDEu.js";import{u as U}from"./context-BfZbueiD.js";const X=["title"],j=w({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(b){const e=b,{$clicksContext:a}=U(),l=I(),d=D();N(()=>{a.unregister(d)}),_(()=>{var t;(t=l.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),E(()=>{var i;if(!a||!((i=e.ranges)!=null&&i.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=y(()=>t?Math.max(0,a.current-t.start+1):K),s=y(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());_(()=>{if(!l.value)return;let r=e.ranges[o.value]??s.value;const g=r==="hide";l.value.classList.toggle(R,g),g&&(r=e.ranges[o.value+1]??s.value);const f=l.value.querySelector(".shiki"),h=Array.from(f.querySelectorAll("code > .line")),A=h.length;if(W(r,A,e.startLine,n=>[h[n]]),e.maxHeight){const n=Array.from(f.querySelectorAll(".line.highlighted"));n.reduce((m,B)=>B.offsetHeight+m,0)>l.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:S}=q();function x(){var o,s;const t=(s=(o=l.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:s.textContent;t&&S(t)}return(t,o)=>{const s=H,i=L;return c(),v("div",{ref_key:"el",ref:l,class:V(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:$({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[z(t.$slots,"default"),u(k).codeCopy?(c(),v("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=r=>x())},[u(p)?(c(),C(s,{key:0,class:"p-2 w-8 h-8"})):(c(),C(i,{key:1,class:"p-2 w-8 h-8"}))],8,X)):M("v-if",!0)],6)}}}),T=O(j,[["__file","/usr/local/lib/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{T as _};
