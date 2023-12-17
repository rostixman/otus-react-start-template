/*! For license information please see components-Transaction-Transaction-stories.e989ba0b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[772],{"./src/components/Transaction/Transaction.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full:()=>Full,Short:()=>Short,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Transaction_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Transaction_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Transaction/Transaction.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Transaction_module.Z,options);const Transaction_Transaction_module=Transaction_module.Z&&Transaction_module.Z.locals?Transaction_module.Z.locals:void 0;var _Full$parameters,_Full$parameters2,_Full$parameters2$doc,_Short$parameters,_Short$parameters2,_Short$parameters2$do,clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Transaction(_ref){var className=_ref.className,name=_ref.name,desc=_ref.desc,date=_ref.date,category=_ref.category,cost=_ref.cost,_short=_ref.short;return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(Transaction_Transaction_module.root,className),children:[(0,jsx_runtime.jsx)("div",{className:Transaction_Transaction_module.name,children:name}),category&&(0,jsx_runtime.jsx)("div",{className:Transaction_Transaction_module.category,children:category}),desc&&(0,jsx_runtime.jsx)("div",{className:Transaction_Transaction_module.desc,children:desc}),!_short&&date&&(0,jsx_runtime.jsx)("div",{className:Transaction_Transaction_module.date,children:date}),(0,jsx_runtime.jsxs)("div",{className:Transaction_Transaction_module.cost,children:[cost,"₽"]}),_short&&(0,jsx_runtime.jsx)("button",{children:"edit"})]})}Transaction.displayName="Transaction";try{Transaction.displayName="Transaction",Transaction.__docgenInfo={description:"",displayName:"Transaction",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},cost:{defaultValue:null,description:"",name:"cost",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!1,type:{name:"string"}},desc:{defaultValue:null,description:"",name:"desc",required:!1,type:{name:"string"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string"}},short:{defaultValue:null,description:"",name:"short",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Transaction/Transaction.tsx#Transaction"]={docgenInfo:Transaction.__docgenInfo,name:"Transaction",path:"src/components/Transaction/Transaction.tsx#Transaction"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Transaction_stories={title:"Components/Transaction",component:Transaction,tags:["autodocs"],argTypes:{}};var Full={args:{cost:2e3,name:"Гараж",desc:"Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.",category:"Недвижимость",date:"11.12.2021"}},Short={args:{cost:2e3,name:"Гараж",desc:"Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.",category:"Недвижимость",date:"11.12.2021",short:!0}};Full.parameters=_objectSpread(_objectSpread({},Full.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Full$parameters=Full.parameters)||void 0===_Full$parameters?void 0:_Full$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    cost: 2000,\n    name: 'Гараж',\n    desc: 'Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',\n    category: 'Недвижимость',\n    date: '11.12.2021'\n  }\n}"},null===(_Full$parameters2=Full.parameters)||void 0===_Full$parameters2||null===(_Full$parameters2$doc=_Full$parameters2.docs)||void 0===_Full$parameters2$doc?void 0:_Full$parameters2$doc.source)})}),Short.parameters=_objectSpread(_objectSpread({},Short.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Short$parameters=Short.parameters)||void 0===_Short$parameters?void 0:_Short$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    cost: 2000,\n    name: 'Гараж',\n    desc: 'Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',\n    category: 'Недвижимость',\n    date: '11.12.2021',\n    short: true\n  }\n}"},null===(_Short$parameters2=Short.parameters)||void 0===_Short$parameters2||null===(_Short$parameters2$do=_Short$parameters2.docs)||void 0===_Short$parameters2$do?void 0:_Short$parameters2$do.source)})});var __namedExportsOrder=["Full","Short"]},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Transaction/Transaction.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-components-Transaction-Transaction-module__root--t3Sp5{position:relative}.src-components-Transaction-Transaction-module__name--jHWWp{font-size:22px}.src-components-Transaction-Transaction-module__desc--QUHu6{font-size:12px}.src-components-Transaction-Transaction-module__category--IbXDa{font-size:12px}.src-components-Transaction-Transaction-module__date--m8TnE{font-size:12px}.src-components-Transaction-Transaction-module__cost--fo12V{font-size:18px}","",{version:3,sources:["webpack://./src/components/Transaction/Transaction.module.sass"],names:[],mappings:"AAAA,4DACE,iBAAA,CAEF,4DACE,cAAA,CAEF,4DACE,cAAA,CAEF,gEACE,cAAA,CAEF,4DACE,cAAA,CAEF,4DACE,cAAA",sourcesContent:[".root\n  position: relative\n\n.name\n  font-size: 22px\n\n.desc\n  font-size: 12px\n\n.category\n  font-size: 12px\n\n.date\n  font-size: 12px\n\n.cost\n  font-size: 18px\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"src-components-Transaction-Transaction-module__root--t3Sp5",name:"src-components-Transaction-Transaction-module__name--jHWWp",desc:"src-components-Transaction-Transaction-module__desc--QUHu6",category:"src-components-Transaction-Transaction-module__category--IbXDa",date:"src-components-Transaction-Transaction-module__date--m8TnE",cost:"src-components-Transaction-Transaction-module__cost--fo12V"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);