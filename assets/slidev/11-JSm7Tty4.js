import{o as l,c as n,k as r,q as _,s as a,z as o,e as t,a6 as e}from"../modules/vue-VobkUfoe.js";import{I as i}from"./default-oJhGFqUu.js";import{_ as u,ag as s}from"../index-CppKwDEu.js";import{p as d,u as c,f as p}from"./context-BfZbueiD.js";import"../modules/shiki-ZI2AGyxg.js";const h=t("h1",null,"useState和useEffect",-1),m=t("hr",null,null,-1),f=t("div",{style:{"margin-top":"10px"}},null,-1),x=t("h4",null,"1. 为什么只能在函数最外层调用 Hook？为什么不要在循环、条件判断或者子函数中调用？",-1),k=t("p",null,[t("code",null,"memorizedState"),e(" 数组是按 hook定义的顺序来放置数据的，如果 hook 顺序变化，"),t("code",null,"memorizedState"),e(" 并不会感知到。")],-1),v=t("div",{style:{"margin-top":"10px"}},null,-1),g=t("hr",null,null,-1),S=t("div",{style:{"margin-top":"10px"}},null,-1),y=t("h4",null,"2. 自定义的 Hook 是如何影响使用它的函数组件的？",-1),z=t("p",null,[e("共享同一个 "),t("code",null,"memorizedState"),e("，共享同一个顺序。")],-1),B=t("hr",null,null,-1),C=t("div",{style:{"margin-top":"10px"}},null,-1),P=t("h4",null,"3. useState和useEffect的“Capture Value” 特性是如何产生的？",-1),V=t("p",null,'每一次render相当于一次快照，每个"快照"独立，每一次状态都被固定在这个"快照"中。',-1),E=t("hr",null,null,-1),H={__name:"11",setup(I){return d(s),c(),(N,T)=>(l(),n(i,_(a(o(p)(o(s),10))),{default:r(()=>[h,m,f,x,k,v,g,S,y,z,B,C,P,V,E]),_:1},16))}},R=u(H,[["__file","/@slidev/slides/11.md"]]);export{R as default};
