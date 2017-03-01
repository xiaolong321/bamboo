webpackJsonp([1],{101:function(e,r,t){var o,l;t(122),o=t(131);var a=t(169);l=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(l=o=o.default),"function"==typeof l&&(l=l.options),l.render=a.render,l.staticRenderFns=a.staticRenderFns,e.exports=o},119:function(e,r,t){r=e.exports=t(5)(),r.push([e.i,"\n.el-form {\n    width: 50%;\n}\n",""])},122:function(e,r,t){var o=t(119);"string"==typeof o&&(o=[[e.i,o,""]]);t(6)(o,{});o.locals&&(e.exports=o.locals)},131:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{handleReset:function(){this.$refs.ruleForm.resetFields()},handleSubmit:function(e){this.$refs.ruleForm.validate(function(e){return e?void alert("submit!"):(console.log("error submit!!"),!1)})}}}},169:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[t("el-input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.name,expression:"ruleForm.name"}],domProps:{value:e.ruleForm.name},on:{input:function(r){e.ruleForm.name=r}}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[t("el-select",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.region,expression:"ruleForm.region"}],attrs:{placeholder:"请选择活动区域"},domProps:{value:e.ruleForm.region},on:{input:function(r){e.ruleForm.region=r}}},[t("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),t("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动时间",required:""}},[t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date1"}},[t("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.date1,expression:"ruleForm.date1"}],staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},domProps:{value:e.ruleForm.date1},on:{input:function(r){e.ruleForm.date1=r}}})],1)],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-form-item",{attrs:{prop:"date2"}},[t("el-time-picker",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.date2,expression:"ruleForm.date2"}],staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},domProps:{value:e.ruleForm.date2},on:{input:function(r){e.ruleForm.date2=r}}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[t("el-switch",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.delivery,expression:"ruleForm.delivery"}],attrs:{"on-text":"","off-text":""},domProps:{value:e.ruleForm.delivery},on:{input:function(r){e.ruleForm.delivery=r}}})],1),e._v(" "),t("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[t("el-checkbox-group",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.type,expression:"ruleForm.type"}],domProps:{value:e.ruleForm.type},on:{input:function(r){e.ruleForm.type=r}}},[t("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[t("el-radio-group",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.resource,expression:"ruleForm.resource"}],domProps:{value:e.ruleForm.resource},on:{input:function(r){e.ruleForm.resource=r}}},[t("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),t("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[t("el-input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.desc,expression:"ruleForm.desc"}],attrs:{type:"textarea"},domProps:{value:e.ruleForm.desc},on:{input:function(r){e.ruleForm.desc=r}}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:e.handleReset}},[e._v("重置")])],1)],1)},staticRenderFns:[]}}});