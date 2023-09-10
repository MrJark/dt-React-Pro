import{j as _}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const o=({label:s,size:C="h1",roundedStyle:L,fontColor:h,toRounded:z=!1,theBackground:S,allCaps:v=!1})=>_.jsx("span",{className:`
                ${C} 
                ${z?L:""}
            `,style:{color:h,backgroundColor:S},children:v?s.toUpperCase():s});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"h1"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"p"'}]}},allCaps:{defaultValue:{value:"false"},description:"All Caps",name:"allCaps",required:!1,type:{name:"boolean"}},toRounded:{defaultValue:{value:"false"},description:"All Caps",name:"toRounded",required:!1,type:{name:"boolean"}},roundedStyle:{defaultValue:null,description:"Rounded Style",name:"roundedStyle",required:!1,type:{name:"enum",value:[{value:'"background-rounded"'}]}},theBackground:{defaultValue:null,description:"The Background",name:"theBackground",required:!1,type:{name:"string"}},fontColor:{defaultValue:null,description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const k={title:"UI/labels/MyLabel",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"},theBackground:{control:"color"}}},e={args:{label:"Basic Label",size:"h1"}},a={args:{label:"AllCaps Label",size:"p"}},r={args:{label:"Secondary Label",size:"p"}},l={args:{label:"Custom Colors Label",size:"p"}};var n,t,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    size: 'h1'
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'AllCaps Label',
    size: 'p'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,m,b;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    size: 'p'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,g,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors Label',
    size: 'p'
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const x=["Basic","AllCaps","Secondary","CustomColors"];export{a as AllCaps,e as Basic,l as CustomColors,r as Secondary,x as __namedExportsOrder,k as default};
//# sourceMappingURL=MyLabel.stories-e37893c6.js.map
