import{d as s,c as n,b as o,w as i,u as a,l as m,i as c,o as f,j as p}from"./index-YL4AAcl0.js";import{A as u}from"./index-pxBI3MdA.js";import{I as l}from"./info-card-C0kIeEQ7.js";import{U as y}from"./ui-success-B8uUqBvB.js";import"./ui-card-BzH1-Ui7.js";import"./ui-typography-Df9E3_dG.js";import"./ui-icon-BRi8thUF.js";const A=s({__name:"payment-success",setup(d){const{notify:e}=p(),r=m();return(async()=>{if(typeof r.params.id!="string"){e({title:"Ошибка подтверждения оплаты. Обратитесь в поддержку",type:"error"});return}try{await c.tinkoffPayment.confirmTinkoff({paymentId:r.params.id})}catch(t){t instanceof u&&e({title:"Произошла ошибка одтверждения оплаты. Обратитесь в поддержку",text:t.message,type:"error"})}})(),(t,x)=>(f(),n("main",null,[o(a(y),{title:"Оплата прошла успешно"},{default:i(()=>[o(a(l))]),_:1})]))}});export{A as default};