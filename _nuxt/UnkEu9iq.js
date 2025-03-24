import{g as S,h as D,c as A,o as v,e as i,r as g,i as I,j as E,k as z,l as r,m as F,n as j,p as _,q as G,s as O,v as J,x as K,y as Q,z as U,A as y,w as h,B as R,C as $,D as P,F as W,E as w,d as X,t as Y,T as Z}from"./DgpP_mkC.js";import{_ as ee}from"./BKbi8L9t.js";import{i as se}from"./DjSJKTUp.js";const ae=["type","disabled","aria-label"],te=S({__name:"BCloseButton",props:{ariaLabel:{default:"Close"},disabled:{type:Boolean,default:!1},type:{default:"button"}},emits:["click"],setup(o,{emit:s}){const l=D(o,"BCloseButton"),e=s;return(a,u)=>(v(),A("button",{type:i(l).type,class:"btn-close",disabled:i(l).disabled,"aria-label":i(l).ariaLabel,onClick:u[0]||(u[0]=c=>e("click",c))},null,8,ae))}}),oe=(o,s,n={})=>{const l=g(I(o)),e=E(!1),a=E(Date.now()+l.value),{isActive:u,pause:c,resume:f,timestamp:t}=z({interval:s,controls:!0,callback:d=>{d>=a.value&&(e.value=!1,c())},...n}),m=r(()=>a.value-t.value),p=()=>{a.value=Date.now()+l.value,f()};F(l,()=>{p()});const C=()=>{e.value=!0,c()},b=()=>{e.value=!1;const d=a.value-t.value;a.value=Date.now()+d,f()},B=()=>{c(),t.value=a.value,e.value=!1};return{isActive:g(u),isPaused:g(e),stop:B,pause:C,resume:b,restart:p,value:m}},le=(o,s,n)=>{const l=j(o),e=()=>{_(s).noHoverPause||n.pause()},a=()=>{_(s).noResumeOnHoverLeave||n.resume()};return F(l,u=>{if(!_(s).modelValueIgnoresHover){if(u){e();return}a()}}),{isHovering:l}},ne=o=>r(()=>{const s={name:"",enterActiveClass:"",enterToClass:"",leaveActiveClass:"",leaveToClass:"showing",enterFromClass:"showing",leaveFromClass:""},n={...s,enterActiveClass:"fade showing",leaveActiveClass:"fade showing"};return _(o)?n:s}),re=S({__name:"BAlert",props:O({closeClass:{default:void 0},closeContent:{default:void 0},closeLabel:{default:"Close"},closeVariant:{default:"secondary"},dismissible:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0},interval:{default:"requestAnimationFrame"},noHoverPause:{type:Boolean,default:!1},noResumeOnHoverLeave:{type:Boolean,default:!1},showOnPause:{type:Boolean,default:!0},variant:{default:"info"}},{modelValue:{type:[Boolean,Number],default:!1},modelModifiers:{}}),emits:O(["close","close-countdown","closed"],["update:modelValue"]),setup(o,{expose:s,emit:n}){const e=D(o,"BAlert"),a=n,u=J(),c=ne(()=>e.fade),f=K("_element"),t=Q(o,"modelValue"),m=r(()=>!se(u.close)),p=r(()=>typeof t.value=="boolean"?0:t.value),C=r(()=>({[`alert-${e.variant}`]:e.variant!==null,"alert-dismissible":e.dismissible})),b=r(()=>[e.closeClass,{"btn-close-custom":m.value}]),{isActive:B,pause:d,resume:k,stop:H,isPaused:x,restart:M,value:N}=oe(p,e.interval,{immediate:typeof t.value=="number"&&e.immediate});le(f,r(()=>({noHoverPause:e.noHoverPause,noResumeOnHoverLeave:e.noResumeOnHoverLeave,modelValueIgnoresHover:typeof t.value=="boolean"})),{pause:d,resume:k});const q=r(()=>typeof t.value=="boolean"?t.value:B.value||e.showOnPause&&x.value),V=r(()=>({variant:m.value?e.closeVariant:void 0,class:b.value}));U(()=>{a("close-countdown",N.value)});const L=()=>{a("close"),typeof t.value=="boolean"?t.value=!1:(t.value=0,H()),a("closed")};return s({pause:d,resume:k,stop:H,restart:M}),(T,ie)=>(v(),y(Z,w(i(c),{"enter-to-class":"show"}),{default:h(()=>[q.value?(v(),A("div",{key:0,ref:"_element",class:$(["alert",C.value]),role:"alert","aria-live":"polite","aria-atomic":"true"},[P(T.$slots,"default",{},void 0,!0),i(e).dismissible?(v(),A(W,{key:0},[m.value||i(e).closeContent?(v(),y(ee,w({key:0},V.value,{onClick:L}),{default:h(()=>[P(T.$slots,"close",{},()=>[X(Y(i(e).closeContent),1)],!0)]),_:3},16)):(v(),y(te,w({key:1,"aria-label":i(e).closeLabel},V.value,{onClick:L}),null,16,["aria-label"]))],64)):R("",!0)],2)):R("",!0)]),_:3},16))}}),ue=G(re,[["__scopeId","data-v-141c4f93"]]),me={__name:"EAlert",props:{variant:{type:[String],required:!0},class:{type:[String]}},setup(o){const s=o;return(n,l)=>{const e=ue;return v(),y(e,{"model-value":!0,variant:s.variant,class:$(s.class)},{default:h(()=>[P(n.$slots,"default")]),_:3},8,["variant","class"])}}};export{me as default};
