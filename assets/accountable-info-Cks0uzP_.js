import{d as _,I as V,J as N,K as U,o as d,c as r,b as o,w as l,f as s,u as n,a as x,E as y,y as I,j as k}from"./index-YL4AAcl0.js";import{a as u,U as w,_ as C}from"./ui-input-phone-oXEF9li1.js";import"./ui-icon-BRi8thUF.js";import{U as P,_ as g}from"./ui-typography-Df9E3_dG.js";import"./index-pxBI3MdA.js";const h={class:"step-wrapper"},B={class:"group mb-32"},M={key:0,class:"price-card"},S=_({__name:"accountable-info",props:{client:{required:!0},clientModifiers:{}},emits:V(["next-step"],["update:client"]),setup(m,{emit:i}){const e=N(m,"client"),c=U(),p=i,{notify:f}=k(),b=()=>{if(!e.value.accountableName||!e.value.accountablePhoneNumber||!e.value.bossName){f({title:"Некорректные данные",type:"warn"});return}p("next-step")};return(v,a)=>(d(),r("div",h,[o(n(P),{variant:"HeadlineH4",class:"mb-24"},{default:l(()=>[s(" 2. Информация об ответственном лице ")]),_:1}),x("div",B,[o(n(u),{modelValue:e.value.accountableName,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value.accountableName=t)},{default:l(()=>[s("ФИО ответственного за sim карту")]),_:1},8,["modelValue"]),o(n(w),{modelValue:e.value.accountablePhoneNumber,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.accountablePhoneNumber=t)},{default:l(()=>[s(" Номер телефона ответственного за sim карту ")]),_:1},8,["modelValue"]),o(n(u),{modelValue:e.value.bossName,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.bossName=t)},{default:l(()=>[s("ФИО руководителя клиента")]),_:1},8,["modelValue"]),o(n(u),{modelValue:e.value.email,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.email=t)},{default:l(()=>[s("Электронная почта клиента (не обязательно)")]),_:1},8,["modelValue"])]),o(n(C),{onClick:b},{default:l(()=>[s("Продолжить")]),_:1}),c["price-card"]?(d(),r("div",M,[y(v.$slots,"price-card",{},void 0,!0)])):I("",!0)]))}}),q=g(S,[["__scopeId","data-v-e1ce42ff"]]);export{q as default};