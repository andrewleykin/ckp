import{d as V,g as i,c as p,h as b,u as t,F as U,b as n,w as o,a as g,i as y,o as m,f as u,j as N}from"./index-YL4AAcl0.js";import{P as f,A as w}from"./index-pxBI3MdA.js";import{a as E}from"./icc-input-BRIejGFu.js";import"./ui-icon-BRi8thUF.js";import{U as v,a as x,_ as k}from"./ui-input-phone-oXEF9li1.js";import{U as I}from"./ui-success-B8uUqBvB.js";import{U as B,_ as H}from"./ui-typography-Df9E3_dG.js";const P={class:"group mb-32"},h=V({__name:"replace",setup(C){const{notify:d}=N(),e=i({number:"",newNumber:"",inn:"",iccEnd:""}),r=i(!1),c=i(!1),_=async()=>{if(!r.value){if(e.value.number.length!==f||e.value.newNumber.length!==f||!e.value.inn||!e.value.iccEnd){d({title:"Некорректные данные",type:"warn"});return}r.value=!0;try{await y.simcard.replace(e.value),c.value=!0}catch(s){s instanceof w&&d({title:"Произошла ошибка",text:s.message,type:"error"})}finally{r.value=!1}}};return(s,a)=>(m(),p("main",null,[c.value?(m(),b(t(I),{key:0,title:"Номер заблокирован"})):(m(),p(U,{key:1},[n(t(B),{variant:"HeadlineH3",class:"mb-24"},{default:o(()=>[u(" Замена выданного номера ")]),_:1}),g("div",P,[n(t(v),{modelValue:e.value.number,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.number=l)},{default:o(()=>[u("Номер телефона")]),_:1},8,["modelValue"]),n(t(x),{modelValue:e.value.inn,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.inn=l)},{default:o(()=>[u("ИНН клиента")]),_:1},8,["modelValue"]),n(t(v),{modelValue:e.value.newNumber,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.newNumber=l)},{default:o(()=>[u("Новый номер")]),_:1},8,["modelValue"]),n(t(E),{modelValue:e.value.iccEnd,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.iccEnd=l)},null,8,["modelValue"])]),n(t(k),{"is-loading":r.value,onClick:_},{default:o(()=>[u(" Подтвердить ")]),_:1},8,["is-loading"])],64))]))}}),G=H(h,[["__scopeId","data-v-b7428a9f"]]);export{G as default};
