import{d as D,Q as w,K as R,g as h,m as V,n as P,o as k,h as S,w as o,b as l,D as A,S as H,z as j,E as v,u as d,T as E,I,J as K,c as N,f as m,a as L,y as q,j as z}from"./index-YL4AAcl0.js";import{a as $,_ as G}from"./ui-input-phone-oXEF9li1.js";import{U as J}from"./ui-icon-BRi8thUF.js";import{U as O,_ as Q}from"./ui-typography-Df9E3_dG.js";import"./index-pxBI3MdA.js";const x=" – ",Y=D({inheritAttrs:!1,__name:"ui-input-date",props:{modelValue:{default:void 0},errorText:{default:void 0},isDisabled:{type:Boolean},isRange:{type:Boolean}},emits:["update:modelValue"],setup(c,{emit:_}){const i=e=>{const[t,s,u]=e.split(/\D/);return new Date(Number(u),Number(s)-1,Number(t))},r=w(),g=R(),a=c,y=_,p=h(0),n=h(a.modelValue),f=V(()=>{const e="##.##.####";return a.isRange?`${e} – ${e}`:e}),b=V(()=>{const e="__.__.____";return a.isRange?`${e}${x}${e}`:e}),U=e=>typeof e=="object"&&"start"in e&&"end"in e?`${e.start} – ${e.end}`:e,B=e=>{if(e.length===0){n.value=void 0;return}const t=e.split(x);if(t.length<2){p.value+=1;return}const[s,u]=t;n.value={start:i(s),end:i(u)}},C=e=>r.disabled!==void 0||r.readonly!==void 0?{}:"start"in e&&"end"in e?{mousemove:e.start.mousemove,mouseleave:e.start.mouseleave,change:t=>{B(t.target.value)}}:e,M=e=>r.disabled!==void 0||r.readonly!==void 0?{}:{click:()=>{e()}};return P(()=>a.modelValue,e=>{n.value=e}),(e,t)=>(k(),S(d(E),{key:p.value,modelValue:n.value,"onUpdate:modelValue":[t[0]||(t[0]=s=>n.value=s),t[1]||(t[1]=s=>y("update:modelValue",s))],"is-range":a.isRange},{default:o(({togglePopover:s,inputValue:u,inputEvents:T})=>[l($,A({...e.$attrs,...a},{"model-value":U(u),class:"m-input-date",mask:f.value,"error-text":a.errorText,"is-disabled":a.isDisabled,placeholder:b.value},H(C(T))),j({after:o(()=>[v(e.$slots,"input-after",{},()=>[l(d(J),{style:{cursor:"pointer"},name:"calendar",onClick:ee=>M(s)},null,8,["onClick"])])]),default:o(()=>[v(e.$slots,"default")]),_:2},[g["input-before"]?{name:"before",fn:o(()=>[v(e.$slots,"input-before")]),key:"0"}:void 0]),1040,["model-value","mask","error-text","is-disabled","placeholder"])]),_:3},8,["modelValue","is-range"]))}}),F={class:"step-wrapper"},W={class:"group mb-32"},X={key:0,class:"price-card"},Z=D({__name:"additional-info",props:I({partner:{},isLoading:{type:Boolean}},{salesman:{required:!0},salesmanModifiers:{}}),emits:I(["next-step"],["update:salesman"]),setup(c,{emit:_}){const i=K(c,"salesman"),r=c,g=R(),a=_,{notify:y}=z(),p=()=>{if(!i.value){y({title:"Некорректные данные",type:"warn"});return}a("next-step")};return(n,f)=>(k(),N("div",F,[l(d(O),{variant:"HeadlineH4",class:"mb-24"},{default:o(()=>[m(" 3. Дополнительная информация ")]),_:1}),L("div",W,[l(d($),{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=b=>i.value=b)},{default:o(()=>[m("Сотрудник принявший заявление")]),_:1},8,["modelValue"]),l(d(Y),{"model-value":r.partner.createdDate,readonly:""},{default:o(()=>[m(" Дата выставления счета ")]),_:1},8,["model-value"]),l(d($),{"model-value":r.partner.name,readonly:"",class:"name"},{default:o(()=>[m(" Наименование партнера ")]),_:1},8,["model-value"])]),l(d(G),{"is-loading":r.isLoading,onClick:p},{default:o(()=>[m(" Продолжить ")]),_:1},8,["is-loading"]),g["price-card"]?(k(),N("div",X,[v(n.$slots,"price-card",{},void 0,!0)])):q("",!0)]))}}),ne=Q(Z,[["__scopeId","data-v-a2ebd035"]]);export{ne as default};