import{a2 as n,a8 as r,t as u,y as v,av as $,aA as j}from"../modules/vue-VobkUfoe.js";import{T as p,a1 as x,av as C,a0 as S,Z as T,$ as R,aw as l,Y as k,ax as E,ay as F}from"../index-CppKwDEu.js";function g(){const t=n(C),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(T),c=n(R),o=n(l,{}),d=n(k,void 0),m=n(p,u(1)),f=n(x,v(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function L(t){var i,c;$(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function O(t,a){return{...j(t,a===0?E:F),frontmatter:t}}export{O as f,L as p,g as u};
