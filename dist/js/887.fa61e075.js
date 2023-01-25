"use strict";(self["webpackChunkmyprojectvuejs"]=self["webpackChunkmyprojectvuejs"]||[]).push([[887],{5883:function(t,e,s){s.r(e),s.d(e,{default:function(){return Cs}});var n=s(3396),r=s(7139),o=s(9242);const a=(0,n._)("br",null,null,-1),i={class:"container"},c=(0,n._)("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Add new product ",-1),l=(0,n._)("br",null,null,-1),u=(0,n._)("h1",{style:{"text-align":"center"}},"My Products",-1),d=(0,n._)("br",null,null,-1),h={class:"row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"},p={class:"card1 h-100 shadow-sm"},_={href:"#"},f=["src"],m={class:"label-top shadow-sm"},b={class:"text-white",href:"#"},g={class:"card-body"},w={class:"clearfix mb-3"},v={class:"float-start badge rounded-pill bg-success"},y=(0,n._)("span",{class:"float-end"},[(0,n._)("a",{href:"#",class:"small text-muted text-uppercase aff-link"},"reviews")],-1),k={class:"card-title"},R={target:"_blank",href:"#"},P={class:"d-grid gap-2 my-4"},T=["onClick"],x=["onClick"],U=(0,n._)("div",{class:"clearfix mb-1"},null,-1),C={class:"modal fade",id:"exampleModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},S={class:"modal-dialog"},O={class:"modal-content"},E=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Add Product"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),A={class:"modal-body"},I=(0,n.Uk)(" . "),D={class:"input-group"},q=(0,n._)("span",{class:"input-group-text"},"$",-1),B=["value"],z={key:1,class:"alert alert-success"},N=(0,n._)("button",{type:"submit",class:"btn btn-success"},"Add",-1),L=(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1),M={class:"modal fade",id:"update","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},F={class:"modal-dialog"},H={class:"modal-content"},j=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Update Product"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},V=(0,n.Uk)(" . "),X={key:0,class:"alert alert-success"},G=(0,n._)("button",{type:"submit",class:"btn btn-success"},"Update",-1),K=(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ")],-1),W={class:"modal fade",id:"delete","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},J={class:"modal-dialog"},Z={class:"modal-content"},Y=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"staticBackdropLabel"},"Delete Product"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},tt=(0,n.Uk)(" . "),et=(0,n._)("h3",null,"Do you want to delete this course ?",-1),st=(0,n._)("br",null,null,-1),nt={class:"modal-footer"},rt=(0,n._)("button",{type:"button",id:"close",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function ot(t,e,s,ot,at,it){return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("div",i,[c,l,u,d,(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(at.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"col hp",key:t.name},[(0,n._)("div",p,[(0,n._)("a",_,[(0,n._)("img",{src:t.image,class:"card1-img-top",alt:"product.title"},null,8,f)]),(0,n._)("div",m,[(0,n._)("a",b,(0,r.zw)(t.brand),1)]),(0,n._)("div",g,[(0,n._)("div",w,[(0,n._)("span",v,(0,r.zw)(t.price)+"DT",1),y]),(0,n._)("h5",k,[(0,n._)("a",R,(0,r.zw)(t.description),1)]),(0,n._)("div",P,[(0,n._)("button",{type:"button",class:"btn btn-info bold-btn","data-bs-toggle":"modal","data-bs-target":"#update",onClick:e=>it.getData(t.name,t.brand,t.price,t.description,t.image,t.key)}," Update ",8,T),(0,n._)("button",{type:"button",class:"btn btn-danger bold-btn","data-bs-toggle":"modal","data-bs-target":"#delete",onClick:e=>it.getDataKey(t.key,t.name)}," Delete ",8,x)]),U])])])))),128))]),(0,n._)("div",C,[(0,n._)("div",S,[(0,n._)("div",O,[E,(0,n._)("div",A,[I,(0,n._)("form",{onSubmit:e[5]||(e[5]=(0,o.iM)(((...t)=>it.AddProduct&&it.AddProduct(...t)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"name","aria-label":"default input example","onUpdate:modelValue":e[0]||(e[0]=t=>at.product.name=t)},null,512),[[o.nr,at.product.name]]),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"Brand","aria-label":"default input example","onUpdate:modelValue":e[1]||(e[1]=t=>at.product.brand=t)},null,512),[[o.nr,at.product.brand]]),(0,n._)("div",D,[(0,n.wy)((0,n._)("input",{class:"form-control",type:"number",placeholder:"Price","aria-label":"Dollar amount (with dot and two decimal places)","onUpdate:modelValue":e[2]||(e[2]=t=>at.product.price=t)},null,512),[[o.nr,at.product.price]]),q]),(0,n._)("input",{class:"form-control",lang:"en",type:"file",placeholder:"sqs",accept:".jpg,.png",onChange:e[3]||(e[3]=(...t)=>it.previewImage&&it.previewImage(...t))},null,32),at.ProgressShow?((0,n.wg)(),(0,n.iD)("progress",{key:0,id:"js-progressbar",class:"uk-progress",value:at.uploadValue,max:"100"},null,8,B)):(0,n.kq)("",!0),(0,n.wy)((0,n._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Description","onUpdate:modelValue":e[4]||(e[4]=t=>at.product.description=t)},null,512),[[o.nr,at.product.description]]),at.messageSuccess?((0,n.wg)(),(0,n.iD)("div",z,(0,r.zw)(at.messageSuccess),1)):(0,n.kq)("",!0),N],32)]),L])])]),(0,n._)("div",M,[(0,n._)("div",F,[(0,n._)("div",H,[j,(0,n._)("div",$,[V,(0,n._)("form",{onSubmit:e[10]||(e[10]=(0,o.iM)(((...t)=>it.UpdateProduct&&it.UpdateProduct(...t)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"name","aria-label":"default input example","onUpdate:modelValue":e[6]||(e[6]=t=>at.dataProduct.name=t)},null,512),[[o.nr,at.dataProduct.name]]),(0,n.wy)((0,n._)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",placeholder:"Description","onUpdate:modelValue":e[7]||(e[7]=t=>at.dataProduct.description=t)},null,512),[[o.nr,at.dataProduct.description]]),(0,n.wy)((0,n._)("input",{class:"form-control",type:"text",placeholder:"image","aria-label":"default input example","onUpdate:modelValue":e[8]||(e[8]=t=>at.dataProduct.image=t)},null,512),[[o.nr,at.dataProduct.image]]),(0,n.wy)((0,n._)("input",{class:"form-control",type:"number",pla:"",ceholder:"price","aria-label":"default input example","onUpdate:modelValue":e[9]||(e[9]=t=>at.dataProduct.price=t)},null,512),[[o.nr,at.dataProduct.price]]),at.messageUpdateSuccess?((0,n.wg)(),(0,n.iD)("div",X,(0,r.zw)(at.messageUpdateSuccess),1)):(0,n.kq)("",!0),G],32)]),K])])]),(0,n._)("div",W,[(0,n._)("div",J,[(0,n._)("div",Z,[Y,(0,n._)("div",Q,[tt,(0,n._)("form",null,[et,st,(0,n._)("h5",null,"Title: "+(0,r.zw)(at.dataProduct.name),1)])]),(0,n._)("div",nt,[rt,(0,n._)("button",{type:"button",class:"btn btn-danger",onClick:e[11]||(e[11]=t=>it.DeleteProduct(at.dataProduct.key))}," Delete ")])])])])])],64)}s(4554);var at=s(6035),it=(s(2801),s(8675),s(3462),s(7380),s(1118),s(6699),s(1703),s(7077)),ct=s(223),lt=s(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ut="firebasestorage.googleapis.com",dt="storageBucket",ht=12e4,pt=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends ct.ZR{constructor(t,e){super(ft(t),`Firebase Storage: ${e} (${ft(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_t.prototype)}_codeEquals(t){return ft(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function ft(t){return"storage/"+t}function mt(){const t="An unknown error occurred, please check the error payload for server response.";return new _t("unknown",t)}function bt(t){return new _t("object-not-found","Object '"+t+"' does not exist.")}function gt(t){return new _t("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _t("unauthenticated",t)}function vt(){return new _t("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function yt(t){return new _t("unauthorized","User does not have permission to access '"+t+"'.")}function kt(){return new _t("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Rt(){return new _t("canceled","User canceled the upload/download.")}function Pt(t){return new _t("invalid-url","Invalid URL '"+t+"'.")}function Tt(t){return new _t("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function xt(){return new _t("no-default-bucket","No default bucket found. Did you set the '"+dt+"' property when initializing the app?")}function Ut(){return new _t("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ct(){return new _t("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function St(){return new _t("no-download-url","The given file does not have any download URLs.")}function Ot(t){return new _t("invalid-argument",t)}function Et(){return new _t("app-deleted","The Firebase app was deleted.")}function At(t){return new _t("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function It(t,e){return new _t("invalid-format","String does not match format '"+t+"': "+e)}function Dt(t){throw new _t("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=qt.makeFromUrl(t,e)}catch(n){return new qt(t,"")}if(""===s.path)return s;throw Tt(t)}static makeFromUrl(t,e){let s=null;const n="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+n+o,"i"),i={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",u=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${u}/${l}/b/${n}/o${d}`,"i"),p={bucket:1,path:3},_=e===ut?"(?:storage.googleapis.com|storage.cloud.google.com)":e,f="([^?#]*)",m=new RegExp(`^https?://${_}/${n}/${f}`,"i"),b={bucket:1,path:2},g=[{regex:a,indices:i,postModify:r},{regex:h,indices:p,postModify:c},{regex:m,indices:b,postModify:c}];for(let w=0;w<g.length;w++){const e=g[w],n=e.regex.exec(t);if(n){const t=n[e.indices.bucket];let r=n[e.indices.path];r||(r=""),s=new qt(t,r),e.postModify(s);break}}if(null==s)throw Pt(t);return s}}class Bt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e,s){let n=1,r=null,o=null,a=!1,i=0;function c(){return 2===i}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function d(e){r=setTimeout((()=>{r=null,t(p,c())}),e)}function h(){o&&clearTimeout(o)}function p(t,...e){if(l)return void h();if(t)return h(),void u.call(null,t,...e);const s=c()||a;if(s)return h(),void u.call(null,t,...e);let r;n<64&&(n*=2),1===i?(i=2,r=0):r=1e3*(n+Math.random()),d(r)}let _=!1;function f(t){_||(_=!0,h(),l||(null!==r?(t||(i=2),clearTimeout(r),d(0)):t||(i=1)))}return d(0),o=setTimeout((()=>{a=!0,f(!0)}),s),f}function Nt(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return void 0!==t}function Mt(t){return"function"===typeof t}function Ft(t){return"object"===typeof t&&!Array.isArray(t)}function Ht(t){return"string"===typeof t||t instanceof String}function jt(t){return $t()&&t instanceof Blob}function $t(){return"undefined"!==typeof Blob}function Vt(t,e,s,n){if(n<e)throw Ot(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw Ot(`Invalid value for '${t}'. Expected ${s} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e,s){let n=e;return null==s&&(n=`https://${e}`),`${s}://${n}/v0${t}`}function Gt(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const r=e(n)+"="+e(t[n]);s=s+r+"&"}return s=s.slice(0,-1),s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(Kt||(Kt={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t,e,s,n,r,o,a,i,c,l,u){this.url_=t,this.method_=e,this.headers_=s,this.body_=n,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=i,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Jt(!1,null,!0));const s=this.connectionFactory_();this.pendingConnection_=s;const n=t=>{const e=t.loaded,s=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,s)};null!==this.progressCallback_&&s.addUploadProgressListener(n),s.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&s.removeUploadProgressListener(n),this.pendingConnection_=null;const e=s.getErrorCode()===Kt.NO_ERROR,r=s.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=s.getErrorCode()===Kt.ABORT;return void t(!1,new Jt(!1,null,e))}const o=-1!==this.successCodes_.indexOf(r);t(!0,new Jt(o,s))}))},e=(t,e)=>{const s=this.resolve_,n=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());Lt(t)?s(t):s()}catch(o){n(o)}else if(null!==r){const t=mt();t.serverResponse=r.getErrorText(),this.errorCallback_?n(this.errorCallback_(r,t)):n(t)}else if(e.canceled){const t=this.appDelete_?Et():Rt();n(t)}else{const t=kt();n(t)}};this.canceled_?e(!1,new Jt(!1,null,!0)):this.backoffId_=zt(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&Nt(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,s=[408,429],n=-1!==s.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||r}}class Jt{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function Zt(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Yt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Qt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function te(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function ee(t,e,s,n,r,o){const a=Gt(t.urlParams),i=t.url+a,c=Object.assign({},t.headers);return Qt(c,e),Zt(c,s),Yt(c,o),te(c,n),new Wt(i,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ne(...t){const e=se();if(void 0!==e){const s=new e;for(let e=0;e<t.length;e++)s.append(t[e]);return s.getBlob()}if($t())return new Blob(t);throw new _t("unsupported-environment","This browser doesn't seem to support creating Blobs")}function re(t,e,s){return t.webkitSlice?t.webkitSlice(e,s):t.mozSlice?t.mozSlice(e,s):t.slice?t.slice(e,s):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ie{constructor(t,e){this.data=t,this.contentType=e||null}}function ce(t,e){switch(t){case ae.RAW:return new ie(le(e));case ae.BASE64:case ae.BASE64URL:return new ie(de(t,e));case ae.DATA_URL:return new ie(pe(e),_e(e))}throw mt()}function le(t){const e=[];for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|63&n);else if(55296===(64512&n)){const r=s<t.length-1&&56320===(64512&t.charCodeAt(s+1));if(r){const r=n,o=t.charCodeAt(++s);n=65536|(1023&r)<<10|1023&o,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else e.push(239,191,189)}else 56320===(64512&n)?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(e)}function ue(t){let e;try{e=decodeURIComponent(t)}catch(s){throw It(ae.DATA_URL,"Malformed data URL.")}return le(e)}function de(t,e){switch(t){case ae.BASE64:{const s=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(s||n){const e=s?"-":"_";throw It(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case ae.BASE64URL:{const s=-1!==e.indexOf("+"),n=-1!==e.indexOf("/");if(s||n){const e=s?"+":"/";throw It(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=oe(e)}catch(r){throw It(t,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class he{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw It(ae.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;null!=s&&(this.base64=fe(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-";base64".length):s),this.rest=t.substring(t.indexOf(",")+1)}}function pe(t){const e=new he(t);return e.base64?de(ae.BASE64,e.rest):ue(e.rest)}function _e(t){const e=new he(t);return e.contentType}function fe(t,e){const s=t.length>=e.length;return!!s&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){let s=0,n="";jt(t)?(this.data_=t,s=t.size,n=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=n}size(){return this.size_}type(){return this.type_}slice(t,e){if(jt(this.data_)){const s=this.data_,n=re(s,t,e);return null===n?null:new me(n)}{const s=new Uint8Array(this.data_.buffer,t,e-t);return new me(s,!0)}}static getBlob(...t){if($t()){const e=t.map((t=>t instanceof me?t.data_:t));return new me(ne.apply(null,e))}{const e=t.map((t=>Ht(t)?ce(ae.RAW,t).data:t.data_));let s=0;e.forEach((t=>{s+=t.byteLength}));const n=new Uint8Array(s);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)n[r++]=t[e]})),new me(n,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){let e;try{e=JSON.parse(t)}catch(s){return null}return Ft(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const s=t.slice(0,e);return s}function we(t,e){const s=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?s:t+"/"+s}function ve(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){return e}class ke{constructor(t,e,s,n){this.server=t,this.local=e||t,this.writable=!!s,this.xform=n||ye}}let Re=null;function Pe(t){return!Ht(t)||t.length<2?t:ve(t)}function Te(){if(Re)return Re;const t=[];function e(t,e){return Pe(e)}t.push(new ke("bucket")),t.push(new ke("generation")),t.push(new ke("metageneration")),t.push(new ke("name","fullPath",!0));const s=new ke("name");function n(t,e){return void 0!==e?Number(e):e}s.xform=e,t.push(s);const r=new ke("size");return r.xform=n,t.push(r),t.push(new ke("timeCreated")),t.push(new ke("updated")),t.push(new ke("md5Hash",null,!0)),t.push(new ke("cacheControl",null,!0)),t.push(new ke("contentDisposition",null,!0)),t.push(new ke("contentEncoding",null,!0)),t.push(new ke("contentLanguage",null,!0)),t.push(new ke("contentType",null,!0)),t.push(new ke("metadata","customMetadata",!0)),Re=t,Re}function xe(t,e){function s(){const s=t["bucket"],n=t["fullPath"],r=new qt(s,n);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:s})}function Ue(t,e,s){const n={type:"file"},r=s.length;for(let o=0;o<r;o++){const t=s[o];n[t.local]=t.xform(n,e[t.server])}return xe(n,t),n}function Ce(t,e,s){const n=be(e);if(null===n)return null;const r=n;return Ue(t,r,s)}function Se(t,e,s,n){const r=be(e);if(null===r)return null;if(!Ht(r["downloadTokens"]))return null;const o=r["downloadTokens"];if(0===o.length)return null;const a=encodeURIComponent,i=o.split(","),c=i.map((e=>{const r=t["bucket"],o=t["fullPath"],i="/b/"+a(r)+"/o/"+a(o),c=Xt(i,s,n),l=Gt({alt:"media",token:e});return c+l}));return c[0]}function Oe(t,e){const s={},n=e.length;for(let r=0;r<n;r++){const n=e[r];n.writable&&(s[n.server]=t[n.local])}return JSON.stringify(s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e,s,n){this.url=t,this.method=e,this.handler=s,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){if(!t)throw mt()}function Ie(t,e){function s(s,n){const r=Ce(t,n,e);return Ae(null!==r),r}return s}function De(t,e){function s(s,n){const r=Ce(t,n,e);return Ae(null!==r),Se(r,n,t.host,t._protocol)}return s}function qe(t){function e(e,s){let n;return n=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?vt():wt():402===e.getStatus()?gt(t.bucket):403===e.getStatus()?yt(t.path):s,n.serverResponse=s.serverResponse,n}return e}function Be(t){const e=qe(t);function s(s,n){let r=e(s,n);return 404===s.getStatus()&&(r=bt(t.path)),r.serverResponse=n.serverResponse,r}return s}function ze(t,e,s){const n=e.fullServerUrl(),r=Xt(n,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,i=new Ee(r,o,Ie(t,s),a);return i.errorHandler=Be(e),i}function Ne(t,e,s){const n=e.fullServerUrl(),r=Xt(n,t.host,t._protocol),o="GET",a=t.maxOperationRetryTime,i=new Ee(r,o,De(t,s),a);return i.errorHandler=Be(e),i}function Le(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Me(t,e,s){const n=Object.assign({},s);return n["fullPath"]=t.path,n["size"]=e.size(),n["contentType"]||(n["contentType"]=Le(null,e)),n}function Fe(t,e,s,n,r){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function i(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=i();a["Content-Type"]="multipart/related; boundary="+c;const l=Me(e,n,r),u=Oe(l,s),d="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",h="\r\n--"+c+"--",p=me.getBlob(d,n,h);if(null===p)throw Ut();const _={name:l["fullPath"]},f=Xt(o,t.host,t._protocol),m="POST",b=t.maxUploadRetryTime,g=new Ee(f,m,Ie(t,s),b);return g.urlParams=_,g.headers=a,g.body=p.uploadData(),g.errorHandler=qe(e),g}class He{constructor(t,e,s,n){this.current=t,this.total=e,this.finalized=!!s,this.metadata=n||null}}function je(t,e){let s=null;try{s=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){Ae(!1)}const n=e||["active"];return Ae(!!s&&-1!==n.indexOf(s)),s}function $e(t,e,s,n,r){const o=e.bucketOnlyServerUrl(),a=Me(e,n,r),i={name:a["fullPath"]},c=Xt(o,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},d=Oe(a,s),h=t.maxUploadRetryTime;function p(t){let e;je(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(s){Ae(!1)}return Ae(Ht(e)),e}const _=new Ee(c,l,p,h);return _.urlParams=i,_.headers=u,_.body=d,_.errorHandler=qe(e),_}function Ve(t,e,s,n){const r={"X-Goog-Upload-Command":"query"};function o(t){const e=je(t,["active","final"]);let s=null;try{s=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Ae(!1)}s||Ae(!1);const r=Number(s);return Ae(!isNaN(r)),new He(r,n.size(),"final"===e)}const a="POST",i=t.maxUploadRetryTime,c=new Ee(s,a,o,i);return c.headers=r,c.errorHandler=qe(e),c}const Xe=262144;function Ge(t,e,s,n,r,o,a,i){const c=new He(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=n.size()),n.size()!==c.total)throw Ct();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const d=c.current,h=d+u,p=u===l?"upload, finalize":"upload",_={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${c.current}`},f=n.slice(d,h);if(null===f)throw Ut();function m(t,s){const r=je(t,["active","final"]),a=c.current+u,i=n.size();let l;return l="final"===r?Ie(e,o)(t,s):null,new He(a,i,"final"===r,l)}const b="POST",g=e.maxUploadRetryTime,w=new Ee(s,b,m,g);return w.headers=_,w.body=f.uploadData(),w.progressCallback=i||null,w.errorHandler=qe(t),w}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function We(t){switch(t){case"running":case"pausing":case"canceling":return Ke.RUNNING;case"paused":return Ke.PAUSED;case"success":return Ke.SUCCESS;case"canceled":return Ke.CANCELED;case"error":return Ke.ERROR;default:return Ke.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e,s){const n=Mt(t)||null!=e||null!=s;if(n)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==s&&void 0!==s?s:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return(...e)=>{Promise.resolve().then((()=>t(...e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye=null;class Qe{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kt.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Kt.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Kt.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,s,n){if(this.sent_)throw Dt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==n)for(const r in n)n.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,n[r].toString());return void 0!==s?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Dt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Dt("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw Dt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Dt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class ts extends Qe{initXhr(){this.xhr_.responseType="text"}}function es(){return Ye?Ye():new ts}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(t,e,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=s,this._mappings=Te(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise(((t,e)=>{this._resolve=t,this._reject=e,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([e,s])=>{switch(this._state){case"running":t(e,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((t,e)=>{const s=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(s,es,t,e);this._request=n,n.getPromise().then((t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const t=this._uploadUrl;this._resolveToken(((e,s)=>{const n=Ve(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(n,es,e,s);this._request=r,r.getPromise().then((t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const t=Xe*this._chunkMultiplier,e=new He(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken(((n,r)=>{let o;try{o=Ge(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(i){return this._error=i,void this._transition("error")}const a=this._ref.storage._makeRequest(o,es,n,r);this._request=a,a.getPromise().then((t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const t=Xe*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((t,e)=>{const s=ze(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(s,es,t,e);this._request=n,n.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((t,e)=>{const s=Fe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(s,es,t,e);this._request=n,n.getPromise().then((t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=Rt(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=We(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,s,n){const r=new Je(e||void 0,s||void 0,n||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach((t=>{this._notifyObserver(t)}))}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(We(this._state)){case Ke.SUCCESS:Ze(this._resolve.bind(null,this.snapshot))();break;case Ke.CANCELED:case Ke.ERROR:const e=this._reject;Ze(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=We(this._state);switch(e){case Ke.RUNNING:case Ke.PAUSED:t.next&&Ze(t.next.bind(t,this.snapshot))();break;case Ke.SUCCESS:t.complete&&Ze(t.complete.bind(t))();break;case Ke.CANCELED:case Ke.ERROR:t.error&&Ze(t.error.bind(t,this._error))();break;default:t.error&&Ze(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e){this._service=t,this._location=e instanceof qt?e:qt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ns(t,e)}get root(){const t=new qt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ve(this._location.path)}get storage(){return this._service}get parent(){const t=ge(this._location.path);if(null===t)return null;const e=new qt(this._location.bucket,t);return new ns(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw At(t)}}function rs(t,e,s){return t._throwIfRoot("uploadBytesResumable"),new ss(t,new me(e),s)}function os(t){t._throwIfRoot("getDownloadURL");const e=Ne(t.storage,t._location,Te());return t.storage.makeRequestWithTokens(e,es).then((t=>{if(null===t)throw St();return t}))}function as(t,e){const s=we(t._location.path,e),n=new qt(t._location.bucket,s);return new ns(t.storage,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){return/^[A-Za-z]+:\/\//.test(t)}function cs(t,e){return new ns(t,e)}function ls(t,e){if(t instanceof hs){const s=t;if(null==s._bucket)throw xt();const n=new ns(s,s._bucket);return null!=e?ls(n,e):n}return void 0!==e?as(t,e):t}function us(t,e){if(e&&is(e)){if(t instanceof hs)return cs(t,e);throw Ot("To use ref(service, url), the first argument must be a Storage instance.")}return ls(t,e)}function ds(t,e){const s=null===e||void 0===e?void 0:e[dt];return null==s?null:qt.makeFromBucketSpec(s,t)}class hs{constructor(t,e,s,n,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=n,this._firebaseVersion=r,this._bucket=null,this._host=ut,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ht,this._maxUploadRetryTime=pt,this._requests=new Set,this._bucket=null!=n?qt.makeFromBucketSpec(n,this._host):ds(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=qt.makeFromBucketSpec(this._url,t):this._bucket=ds(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Vt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Vt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ns(this,t)}_makeRequest(t,e,s,n){if(this._deleted)return new Bt(Et());{const r=ee(t,this._appId,s,n,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[s,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,n).getPromise()}}const ps="@firebase/storage",_s="0.9.9",fs="storage";function ms(t,e,s){return t=(0,ct.m9)(t),rs(t,e,s)}function bs(t){return t=(0,ct.m9)(t),os(t)}function gs(t,e){return t=(0,ct.m9)(t),us(t,e)}function ws(t=(0,it.Mq)(),e){t=(0,ct.m9)(t);const s=(0,it.qX)(t,fs),n=s.getImmediate({identifier:e});return n}function vs(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new hs(s,n,r,e,it.Jn)}function ys(){(0,it.Xd)(new lt.wA(fs,vs,"PUBLIC").setMultipleInstances(!0)),(0,it.KN)(ps,_s,""),(0,it.KN)(ps,_s,"esm2017")}ys();const ks=ws(),Rs=(0,at.ad)(),Ps=(0,at.IO)((0,at.hJ)(Rs,"products"));var Ts={name:"MyProductsView",data(){return{product:{name:"",price:0,image:"",description:"",brand:"",uid:localStorage.getItem("uidUser")},dataProduct:{name:"",price:0,image:"",brand:"",description:"",key:""},messageSuccess:"",messageUpdateSuccess:"",products:[],uploadValue:0,ProgressShow:!1,picture:null,imageData:null,imageName:""}},methods:{AddProduct(){(0,at.ET)(Ps,this.product).then((()=>{this.ProgressShow=!1,this.messageSuccess="Added",this.product.name="",this.product.price="",this.product.image="",this.product.brand="",this.product.description=""}))},getData(t,e,s,n,r,o){this.dataProduct.name=t,this.dataProduct.brand=e,this.dataProduct.price=s,this.dataProduct.description=n,this.dataProduct.image=r,this.dataProduct.key=o},getDataKey(t,e){this.dataProduct.key=t,this.dataProduct.name=e},UpdateProduct(){const t=(0,at.JU)(Rs,"products",this.dataProduct.key);(0,at.r7)(t,this.dataProduct).then((()=>{this.messageUpdateSuccess="Updated",this.dataProduct.name="",this.dataProduct.brand="",this.dataProduct.price="",this.dataProduct.image="",this.dataProduct.description=""}))},DeleteProduct(t){(0,at.oe)((0,at.JU)(Rs,"products",t)).then((()=>{document.getElementById("close").click()}))},previewImage(t){this.ProgressShow=!0,this.uploadValue=0,this.picture=null,this.imageData=t.target.files[0],this.imageName=t.target.files[0].name;const e=gs(ks,"images/"+this.imageName),s=ms(e,this.imageData);s.on("state_changed",(t=>{this.uploadValue=t.bytesTransferred/t.totalBytes*100}),(t=>{console.log(t.message)}),(()=>{this.uploadValue=100,bs(s.snapshot.ref).then((t=>{console.log("File available at",t),this.product.image=t}))}))}},created(){(0,at.cf)(Ps,(t=>{this.products=[],t.forEach((t=>{t.data().uid==this.product.uid&&this.products.push({key:t.id,name:t.data().name,brand:t.data().brand,description:t.data().description,price:t.data().price,image:t.data().image,quantity:1,totalPrice:t.data().price})}))}))}},xs=s(89);const Us=(0,xs.Z)(Ts,[["render",ot]]);var Cs=Us}}]);
//# sourceMappingURL=887.fa61e075.js.map