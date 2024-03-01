import{r as l}from"./index.NEDEFKed.js";var f={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=l,u=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,v=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function d(n,e,a){var t,r={},o=null,i=null;a!==void 0&&(o=""+a),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)x.call(e,t)&&!b.hasOwnProperty(t)&&(r[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:u,type:n,key:o,ref:i,props:r,_owner:v.current}}c.Fragment=m;c.jsx=d;c.jsxs=d;f.exports=c;var s=f.exports;function y(){const n="https://api.adviceslip.com/advice",[e,a]=l.useState({});l.useEffect(()=>{(async()=>{try{const o=await fetch(n);if(!o.ok)throw new Error(`Error fetching advice: ${o.status}`);const i=await o.json();a(i.slip)}catch(o){console.error("Error:",o)}})()},[]);const t=async()=>{try{const r=await fetch(n);if(!r.ok)throw new Error(`Error fetching advice: ${r.status}`);return(await r.json()).slip}catch(r){console.error("Error:",r)}};return s.jsxs("section",{className:"relative px-6 py-11 text-center md:px-12",children:[s.jsxs("h1",{className:"mb-5 text-NeonGreen",children:["Advice # ",e.id]}),s.jsxs("p",{className:"text-[28px] font-extrabold text-LightCyan",children:["❝",e.advice,"❞"]}),s.jsxs("picture",{className:"mt-5 flex justify-center",children:[s.jsx("source",{media:"(min-width: 500px)",srcSet:"images/pattern-divider-desktop.svg"}),s.jsx("img",{src:"/images/pattern-divider-mobile.svg",alt:"pattern"})]}),s.jsx("button",{onClick:async()=>{const r=await t();a(r)},className:"absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-NeonGreen p-4 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-NeonGreen before:transition before:duration-300 before:content-[''] hover:before:blur-md",children:s.jsx("img",{src:"/images/icon-dice.svg",alt:"icon dice"})})]})}export{y as default};
