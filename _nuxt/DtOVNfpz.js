import{g as l}from"./zDOdZIGY.js";import{g as r,h as a,l as t,A as u,o as i,w as m,D as n,C as c,Q as g,e as p}from"./DgpP_mkC.js";const B=r({__name:"BCol",props:{alignSelf:{default:void 0},tag:{default:"div"},order:{default:void 0},offset:{default:void 0},cols:{default:void 0},col:{type:Boolean,default:!1},offsetSm:{default:void 0},offsetMd:{default:void 0},offsetLg:{default:void 0},offsetXl:{default:void 0},offsetXxl:{default:void 0},orderSm:{default:void 0},orderMd:{default:void 0},orderLg:{default:void 0},orderXl:{default:void 0},orderXxl:{default:void 0},sm:{type:[Boolean,Number,String],default:!1},md:{type:[Boolean,Number,String],default:!1},lg:{type:[Boolean,Number,String],default:!1},xl:{type:[Boolean,Number,String],default:!1},xxl:{type:[Boolean,Number,String],default:!1}},setup(s){const e=a(s,"BCol"),f=t(()=>[...l({sm:e.sm,md:e.md,lg:e.lg,xl:e.xl,xxl:e.xxl},["sm","md","lg","xl","xxl"],"col"),...l({order:e.order,orderLg:e.orderLg,orderMd:e.orderMd,orderSm:e.orderSm,orderXl:e.orderXl,orderXxl:e.orderXxl},["order","orderLg","orderMd","orderSm","orderXl","orderXxl"],"order"),...l({offset:e.offset,offsetLg:e.offsetLg,offsetMd:e.offsetMd,offsetSm:e.offsetSm,offsetXl:e.offsetXl,offsetXxl:e.offsetXxl},["offset","offsetLg","offsetMd","offsetSm","offsetXl","offsetXxl"],"offset")]),d=t(()=>[f.value,{col:e.col||!f.value.some(o=>o.startsWith("col-"))&&!e.cols,[`col-${e.cols}`]:e.cols!==void 0,[`offset-${e.offset}`]:e.offset!==void 0,[`order-${e.order}`]:e.order!==void 0,[`align-self-${e.alignSelf}`]:e.alignSelf!==void 0}]);return(o,x)=>(i(),u(g(p(e).tag),{class:c(d.value)},{default:m(()=>[n(o.$slots,"default")]),_:3},8,["class"]))}});export{B as _};
