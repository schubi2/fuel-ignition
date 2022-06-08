var Q=Object.defineProperty;var X=(e,s,t)=>s in e?Q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var A=(e,s,t)=>(X(e,typeof s!="symbol"?s+"":s,t),t);import{r as v,o as u,c as h,a,b as l,w as g,d as _,e as P,t as I,F as x,f as k,g as f,h as Z,i as ee,u as te,B as H,j as ne,k as se,l as oe,m as ae,p as ie,n as re}from"./vendor.ada3c6e4.js";const le=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}};le();var E,N,m={GlobalStorage:(E=class{},A(E,"store",{addUsers:{amount:0}}),E),PasswordHashes:(N=class{},A(N,"hashes",{}),N),saveTemplateAsFile:(e,s)=>{const t=new Blob([JSON.stringify(s,null,2)],{type:"text/json"}),r=document.createElement("a");r.download=e,r.href=window.URL.createObjectURL(t),r.dataset.downloadurl=["text/json",r.download,r.href].join(":");const n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});r.dispatchEvent(n),r.remove()},copy:function(e){var s=document.createElement("textarea");s.innerHTML=e,document.body.appendChild(s),s.select();var t=document.execCommand("copy");return document.body.removeChild(s),t},setupFormComponentWatcher:(e,s,t)=>{e!==void 0&&"methods"in e&&"watchFormData"in e.methods&&s(t,async(r,n)=>{e.methods.watchFormData(r,n)})},uid:()=>(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,""),getFormKey:(e,s,t)=>e+"_"+s+"_"+t,getFormValue:function(e,s,t,r){return s[this.getFormKey(e,t,r)]}},y=(e,s)=>{for(const[t,r]of s)e[t]=r;return e};const ce={},de={class:"navbar navbar-expand-lg navbar-light fixed-top py-3",id:"mainNav"},ue={class:"container px-4 px-lg-5"},he=_("Fuel Ignition \u{1F680}"),pe=P('<button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ms-auto my-2 my-lg-0"><li class="nav-item"><a class="nav-link" href="#/">Start</a></li><li class="nav-item"><a class="nav-link" href="#about">About</a></li><li class="nav-item"><a class="nav-link" href="https://microos.opensuse.org/" target="_blank" rel="noopener noreferrer">MicroOS</a></li><li class="nav-item"><a class="nav-link" href="https://kubic.opensuse.org/" target="_blank" rel="noopener noreferrer">Kubic</a></li><li class="nav-item"><a class="nav-link" href="https://coreos.github.io/ignition/" target="_blank" rel="noopener noreferrer">Ignition Docs</a></li></ul></div>',2);function me(e,s){const t=v("router-link");return u(),h("nav",de,[a("div",ue,[l(t,{class:"navbar-brand",to:"/"},{default:g(()=>[he]),_:1}),pe])])}var fe=y(ce,[["render",me]]);const ve={},ge={class:"page-section bg-primary",id:"about"},_e=P('<div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 justify-content-center"><div class="col-lg-8 text-center"><h2 class="text-white mt-0">We&#39;ve got what you need!</h2><hr class="divider divider-light"><p class="text-white-75 mb-4">Looking for an easy way to write and edit Ignition configs? Look no further than Fuel Ignition! Our user-friendly web application makes it a breeze to create the config files you need. No strings attached!</p><a class="btn btn-light btn-xl" href="/fuel-ignition/edit">Get Started!</a></div></div></div>',1),ye=[_e];function be(e,s){return u(),h("section",ge,ye)}var we=y(ve,[["render",be]]);const $e={class:"bg-light py-5"},xe={class:"container px-4 px-lg-5"},ke={class:"small text-center text-muted"},Se={setup(e){return(s,t)=>{const r=v("router-view");return u(),h(x,null,[l(fe),l(r),l(we),a("footer",$e,[a("div",xe,[a("div",ke," Copyright \xA9 "+I(new Date().getFullYear())+" \u2013 built with \u{1F49A}, Vue, and openSUSE ",1)])])],64)}}},Fe={},Ce={class:"masthead"},Ke={class:"container px-4 px-lg-5 h-75"},Te={class:"row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center"},Oe=a("div",{class:"col-lg-8 align-self-end"},[a("h1",{class:"text-white font-weight-bold"},[_(" Ignition & Combustion "),a("br"),_("Config Generator ")]),a("hr",{class:"divider"})],-1),Ae={class:"col-lg-8 align-self-baseline"},Ie=a("p",{class:"text-white-75 mb-5"},[_(" Easily generate new or edit existing Ignition configs. "),a("br"),_("No more fiddling around with JSON or Butane. ")],-1),Ve={class:"container-fluid"},Le={class:"row"},Ue={class:"col-xs-6 mb-3"},qe=_("Let's get started"),Ee={class:"col-xs-6"},Ne=_("Edit Existing Config");function Be(e,s){const t=v("router-link");return u(),h("header",Ce,[a("div",Ke,[a("div",Te,[Oe,a("div",Ae,[Ie,a("div",Ve,[a("div",Le,[a("div",Ue,[l(t,{class:"btn btn-primary btn-xl",to:"/edit"},{default:g(()=>[qe]),_:1})]),a("div",Ee,[l(t,{class:"btn btn-primary btn-xl",to:"/import"},{default:g(()=>[Ne]),_:1})])])])])])])])}var Pe=y(Fe,[["render",Be]]),He="/fuel-ignition/assets/undraw_programming_re_kg9v.a835d9b3.svg";const Re={style:{width:"100% !important"},class:"expandable-comp text-white"},Je={key:0},Me={key:0,class:"mb-5"},ze=a("hr",{class:"divider"},null,-1),We=[ze],S={props:{displayAtLeastOne:{type:Boolean,default:!0},maxComponents:{type:Number,default:-1},title:String},setup(e){const s=e,t=k(s.displayAtLeastOne?1:0);return(r,n)=>(u(),h("div",Re,[s.title!==void 0?(u(),h("h4",Je,I(s.title),1)):f("",!0),(u(!0),h(x,null,Z(t.value,o=>(u(),h("div",{key:o},[ee(r.$slots,"default"),o<t.value?(u(),h("div",Me,We)):f("",!0)]))),128)),e.maxComponents===-1||e.maxComponents!==-1&&e.maxComponents>t.value?(u(),h("button",{key:1,class:"btn btn-primary mr-5 mb-5",onClick:n[0]||(n[0]=o=>t.value++)}," \xA0\xA0\xA0Add\xA0\xA0\xA0 ")):f("",!0),t.value>1||!s.displayAtLeastOne&&t.value>0?(u(),h("button",{key:2,class:"btn btn-danger ml-5 mr-5 mb-5",onClick:n[1]||(n[1]=o=>t.value>1||!s.displayAtLeastOne?t.value--:t.value)}," Remove ")):f("",!0)]))}},Ge={key:0,class:"sk-folding-cube"},De=a("div",{class:"sk-cube1 sk-cube"},null,-1),Ye=a("div",{class:"sk-cube2 sk-cube"},null,-1),je=a("div",{class:"sk-cube4 sk-cube"},null,-1),Qe=a("div",{class:"sk-cube3 sk-cube"},null,-1),Xe=[De,Ye,je,Qe],Ze={props:["ignJson"],setup(e){const s=e;var t=k(!1);String.prototype.replaceAt=function(c,d){return this.substring(0,c)+d+this.substring(c+d.length)};function r(c){return[...new Uint8Array(c)].map(d=>d.toString(16).padStart(2,"0")).join("")}function n(c){for(var d="",p=0;p<c.length;p++)d+=c.charCodeAt(p).toString(16);return d}async function o(){this.loading=!0,console.log("loading: "+this.loading);let c=n(JSON.stringify(s.ignJson)),d=JSON.stringify(s.ignJson).length;console.log(d.toString(16)),console.log("flipped tuple: "+(d>255));let p=d.toString(16);if(p.length%2!=0&&(p="0"+p),d>255){console.log(p);let K=p.length/2;p=p.substring(K)+p.substring(0,K)}console.log(p);let b=await fetch("src/assets/template/ignition-new.img").then(K=>K.blob());console.log(b),console.log("jsonSize(dec): "+JSON.stringify(s.ignJson).length),console.log("jsonSize(hex): "+p);let w=61564*2,D=await b.arrayBuffer().then(),O=r(D);console.log(new Blob([O]).size),console.log(O.slice(w,w+4));let F=O.replace("6c6f72656d697073756d",c).replaceAt(w,p);if(console.log(F.slice(w,w+4)),F.length%2){alert("Error: cleaned hex string length is odd.");return}JSON.stringify(s.ignJson).length>2048&&alert(`Warning. The resulting image is most likely corrupt, since this config is quite large.

If you have problems, kindly try again with a smaller config. We are actively working on fixing this limitation.
Fuel-Ignition is still in active development.`);for(var B=new Array,C=0;C<F.length/2;C++){var Y=F.substr(C*2,2);B[C]=parseInt(Y,16)}this.loading=!1;var j=new Uint8Array(B),$=window.document.createElement("a");$.href=window.URL.createObjectURL(new Blob([j],{type:"application/octet-stream"})),$.download="ignition-"+i[Math.floor(Math.random()*i.length)].toLowerCase()+".img",document.body.appendChild($),$.click(),document.body.removeChild($)}let i=["Alfa","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliett","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-ray","Yankee","Zulu","Nico","Ignaz"];return(c,d)=>(u(),h(x,null,[a("button",{class:"btn btn-primary mb-4",style:{width:"100%"},onClick:d[0]||(d[0]=p=>o())}," Convert and Download "),te(t)?(u(),h("div",Ge,Xe)):f("",!0)],64))}},T="user",et={setup:()=>{const e=m.uid();return{uid:e,Utils:m,formKey:s=>m.getFormKey(T,s,e)}},methods:{encodeToIgn:function(e,s){m.GlobalStorage.store.addUsers.amount=0;const t=(n,o)=>m.getFormValue(T,s,n,o),r=T+"_name_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{if(e.passwd="passwd"in e?e.passwd:{users:[]},m.GlobalStorage.store.addUsers.amount++,t("name",n)!=="root"&&(m.GlobalStorage.store.addUsers.onlyUsernameRoot=!1),t("runs_on_suse",n)===!0&&(e.storage===void 0&&(e.storage={}),e.storage.filesystems===void 0&&(e.storage.filesystems=[]),e.storage.filesystems.push({device:"/dev/disk/by-label/ROOT",format:"btrfs",mountOptions:["subvol=/@/home"],path:"/home",wipeFilesystem:!1})),e.passwd.users!==void 0){const o=t("ssh_keys",n),i=o!==void 0&&o.includes(",")?o.replaceAll(" ","").split(","):[o],c=t("passwd",n)===""||t("passwd",n)===void 0;e.passwd.users.push({name:t("name",n),passwordHash:c?void 0:m.PasswordHashes.hashes[n],sshAuthorizedKeys:o===void 0||o===""?void 0:i})}})},watchFormData:async function(e,s){const t=(r,n)=>e[m.getFormKey(T,r,n)];Object.keys(e).filter(r=>r.includes("user_passwd")&&!r.includes("hashed")).map(r=>r.replace("user_passwd_","")).forEach(async r=>{const n=t("passwd",r),o=t("hash_type",r),i=n===""||n===void 0,c=e["user_passwd_"+r]===s["user_passwd_"+r];i||c||tt(n,o).then(d=>m.PasswordHashes.hashes[r]=d)})}}};async function tt(e,s){if(s==="Hash Yourself")return e;var t=await H.genSalt(10).then();return H.hash(e,t)}const nt={class:"users"},st={key:0};function ot(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",nt,[l(i,{class:"form-control",name:e.formKey("name"),label:"Username (required)",placeholder:"write your os username here",validation:"required","validation-behavior":"live",value:"root",help:"A new user will be created, if it does not exist."},null,8,["name"]),l(i,{name:e.formKey("hash_type"),label:"Password Hash Type",placeholder:"bcrypt",type:"select",validation:"optional","validation-behavior":"live",value:"bcrypt",options:["bcrypt","Hash Yourself"],help:"The way you want your password to be hashed."},null,8,["name"]),l(i,{name:e.formKey("passwd"),label:"Password",placeholder:"write the corresponding password here",type:"password",validation:"optional","validation-behavior":"live",help:"Your password is never sent over the internet, everything is local."},null,8,["name"]),l(i,{name:e.formKey("ssh_keys"),label:"SSH Public Keys",placeholder:"write the corresponding ssh keys here, separated by commas, spaces are ignored",type:"textarea",validation:"optional","validation-behavior":"live",help:"Your keys are never sent over the internet, everything is local."},null,8,["name"]),e.Utils.GlobalStorage.store.addUsers.amount==0?(u(),h("div",st,[l(i,{name:e.formKey("runs_on_suse"),label:"Mount /home",validation:"required",type:"checkbox","validation-behavior":"live",help:"Required on SUSE related systems for creating users not named root. Otherwise, the system will boot in emergency mode"},null,8,["name"])])):f("",!0)])}var R=y(et,[["render",ot]]);const V="create_file",at={setup:()=>{const e=m.uid();return{sourceType:k("data"),formKey:t=>m.getFormKey(V,t,e)}},methods:{encodeToIgn:function(e,s){const t=(o,i)=>m.getFormValue(V,s,o,i),r=function(o){return window.btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,function(c,d){return String.fromCharCode("0x"+d)}))},n=V+"_path_";Object.keys(s).filter(o=>o.includes(n)).map(o=>o.replace("create_file_path_","")).forEach(o=>{e.storage===void 0&&(e.storage={}),e.storage.files===void 0&&(e.storage.files=[]);let i,c={};switch(t("source_type",o)){case"data":let d=t("data_content",o);i="data:text/plain;charset=utf-8;base64,"+r(d===void 0?"":d);break;case"data-vagrant":let p=t("data_vagrant_content",o);i="data:,"+encodeURIComponent(p===void 0?"":p);break;case"https":i=t("https_content",o);break;case"http":i=t("http_content",o);let b=t("http_verification",o);b&&(c.verification={hash:b});break;case"tftp":case"s3":case"gs":i=t("tftp_s3_gs_content",o);break}e.storage.files.push(Object.assign({path:t("path",o),mode:parseInt(t("mode",o)),overwrite:t("overwrite",o),contents:{source:i}},c))})}}},it={class:"createfiles"},rt={class:"source"},lt={key:0,class:"data"},ct={key:1,class:"data-vagrant"},dt={key:2,class:"https"},ut={key:3,class:"http"},ht={key:4,class:"tftp-s3-gs"};function pt(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",it,[l(i,{name:e.formKey("path"),label:"File Path (required)",placeholder:"path on the filesystem",validation:"required","validation-behavior":"live",value:"/etc/someconfig",help:"The absolute path to the file"},null,8,["name"]),l(i,{name:e.formKey("overwrite"),label:"Overwrite",placeholder:"path on the filesystem",validation:"required",type:"checkbox","validation-behavior":"live",help:"Whether to delete preexisting nodes at the path"},null,8,["name"]),l(i,{name:e.formKey("mode"),label:"File Mode (required)",type:"number",value:"420",validation:"required","validation-behavior":"live",help:"The file's permission mode. Note that the mode must be properly specified as a decimal value (i.e. 0644 -> 420)."},null,8,["name"]),a("div",rt,[l(i,{type:"select",name:e.formKey("source_type"),modelValue:e.sourceType,"onUpdate:modelValue":s[0]||(s[0]=c=>e.sourceType=c),label:"Scheme for file contents url (use data for plain text)",help:"If source is omitted and a regular file already exists at the path, Ignition will do nothing. If source is omitted and no file exists, an empty file will be created.",options:["data","data-vagrant","https","http","tftp","s3","gs","omit"]},null,8,["name","modelValue"])]),e.sourceType==="data"?(u(),h("div",lt,[l(i,{name:e.formKey("data_content"),label:"File Content Data (required)",placeholder:"write the file content here, spaces, newlines etc. are preserved",type:"textarea",validation:"required","validation-behavior":"live",help:"Leaving this empty will create an empty file"},null,8,["name"])])):f("",!0),e.sourceType==="data-vagrant"?(u(),h("div",ct,[l(i,{name:e.formKey("data_vagrant_content"),label:"File Content Data (required)",placeholder:"write the file content here, spaces, newlines etc. are preserved",type:"textarea",validation:"required","validation-behavior":"live",help:"Leaving this empty will create an empty file"},null,8,["name"])])):f("",!0),e.sourceType==="https"?(u(),h("div",dt,[l(i,{name:e.formKey("https_content"),label:"HTTPS Url (required)",placeholder:"the URL of the file contents",type:"text",validation:"required|url","validation-behavior":"live"},null,8,["name"])])):f("",!0),e.sourceType==="http"?(u(),h("div",ut,[l(i,{name:e.formKey("http_content"),label:"HTTP Url (required)",placeholder:"the URL of the file contents",type:"text",validation:"required|url","validation-behavior":"live"},null,8,["name"]),l(i,{name:e.formKey("http_verification"),label:"Verification Hash (optional)",placeholder:"e.g. sha512-012345678..",type:"text",validation:"optional","validation-behavior":"live",help:"The hash of the contents, in the form <type>-<value> where type is either sha512 or sha256."},null,8,["name"])])):f("",!0),!e.sourceType.includes("http")&&e.sourceType!=="data"&&e.sourceType!=="data-vagrant"&&e.sourceType!=="omit"?(u(),h("div",ht,[l(i,{name:e.formKey("tftp_s3_gs_content"),label:e.sourceType.toUpperCase()+" Url (required)",placeholder:"the URL of the file contents",type:"text",validation:"required","validation-behavior":"live"},null,8,["name","label"])])):f("",!0)])}var J=y(at,[["render",pt]]);const L="start_service",mt={setup:()=>{const e=m.uid();return{sourceType:k("data"),formKey:t=>m.getFormKey(L,t,e)}},methods:{encodeToIgn:function(e,s){const t=(n,o)=>m.getFormValue(L,s,n,o),r=L+"_name_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{e.systemd="systemd"in e?e.systemd:{units:[]};let o=t("enabled",n);console.log(o);let i=o==="omit";e.systemd.units.push({name:t("name",n),enabled:i?void 0:o==="yes",contents:t("contents",n)})})}}},ft={class:"startservices"};function vt(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",ft,[l(i,{name:e.formKey("name"),label:"Service Name (required)",validation:"required","validation-behavior":"live",value:"example.service",help:"Every unit must have a unique name. This must be suffixed with a valid unit type (e.g. \u201Cthing.service\u201D)."},null,8,["name"]),l(i,{name:e.formKey("enabled"),label:"enabled",value:"yes",validation:"optional",type:"select","validation-behavior":"live",help:"Whether or not the service shall be enabled. When true, the service is enabled. When false, the service is disabled. When omitted, the service is unmodified.",options:["yes","no","omit"]},null,8,["name"]),l(i,{name:e.formKey("contents"),label:"Service Unit Content (optional)",placeholder:"write the service unit content here, spaces, newlines etc. are preserved",type:"textarea",validation:"optional","validation-behavior":"live",help:"The contents of the unit."},null,8,["name"])])}var M=y(mt,[["render",vt]]);const U="modify_service",gt={setup:()=>{const e=m.uid();return{formKey:s=>m.getFormKey(U,s,e)}},methods:{encodeToIgn:function(e,s){const t=(n,o)=>m.getFormValue(U,s,n,o),r=U+"_name_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{console.log(e),e.systemd="systemd"in e?e.systemd:{units:[]};let o=e.systemd.units.find(c=>c.name===t("name",n)),i={name:t("dropin_name",n),contents:t("contents",n)};if(o!==void 0){if(o.dropins!==void 0){o.dropins.push(i);return}o.dropins=[i];return}e.systemd.units.push({name:t("name",n),dropins:[i]})})}}},_t={class:"modifyservice"};function yt(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",_t,[l(i,{name:e.formKey("name"),label:"Name of the service that you want to modify (required)",validation:"required","validation-behavior":"live",placeholder:"e.g. systemd-journald.service",help:"The name of the unit. This must be suffixed with a valid unit type (e.g. \u201Cthing.service\u201D)."},null,8,["name"]),l(i,{name:e.formKey("dropin_name"),label:"Name of the drop-in file",validation:"required","validation-behavior":"live",value:"debug.conf",help:"The name of the drop-in. This must be suffixed with \u201C.conf\u201D."},null,8,["name"]),l(i,{name:e.formKey("contents"),label:"Drop-In Unit Content (required)",placeholder:"write the service unit content here, spaces, newlines etc. are preserved",type:"textarea",validation:"required","validation-behavior":"live",help:"This unit will be enabled as a dependency of multi-user.target and therefore start on boot."},null,8,["name"])])}var z=y(gt,[["render",yt]]);const q="debug_bytes",bt={setup:()=>{const e=m.uid();return{uid:e,formKey:s=>m.getFormKey(q,s,e)}},methods:{encodeToIgn:function(e,s){const t=(n,o)=>m.getFormValue(q,s,n,o),r=q+"_size_";Object.keys(s).filter(n=>n.includes(r)).map(n=>n.replace(r,"")).forEach(n=>{var o=new Array(parseInt(t("size",n)-128)+1).join("B");e.debugBytes=e.debugBytes!==void 0?e.debugBytes:[],e.debugBytes.push(o)})}}},wt={class:"users"};function $t(e,s,t,r,n,o){const i=v("FormKit");return u(),h("div",wt,[l(i,{name:e.formKey("size"),label:"Bytes To Add",type:"number",validation:"required","validation-behavior":"live",value:"2048",help:"This is a debug form."},null,8,["name"])])}var W=y(bt,[["render",$t]]);const xt={class:"page-section p-2 bg-dark",id:"edit"},kt={class:"container mt-5 px-0"},St=a("div",{class:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{class:"col-lg-8 col-xl-6 text-white text-center"},[a("h1",{class:"mt-5"},"Ignition Config Generator"),a("hr",{class:"divider"}),a("div",{class:"d-grid mb-5"},[a("img",{class:"text-center mx-auto w-50",src:He})])])],-1),Ft={class:"row gx-4 gx-lg-5 justify-content-center mb-5"},Ct={class:"col-lg-6"},Kt={class:"form-floating mb-3"},Tt={key:0},Ot=a("hr",{class:"divider"},null,-1),At={class:"page-section p-2",id:"export"},It={class:"container mt-5 px-0"},Vt={class:"row gx-4 gx-lg-5 justify-content-center"},Lt={class:"col-lg-8 col-xl-6"},Ut=a("h1",{class:"mt-5 text-center"},"config.ign",-1),qt=a("hr",{class:"divider"},null,-1),Et={class:"d-grid mb-5"},Nt={class:"form-data"},Bt={class:"double"},Pt=_(" Copy "),Ht=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-clipboard",viewBox:"0 0 16 16"},[a("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),a("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})],-1),Rt=[Pt,Ht],Jt=a("h2",{class:"mt-5"},"Convert to IMG in the Browser (In Dev)",-1),Mt=a("h2",{class:"mt-5"},"Convert to ISO FileSystem with mkisofs",-1),zt=a("pre",{class:"form-data"},"# mkisofs -o ignition.iso -V ignition config.ign",-1),Wt={setup(e){const s=[R,J,M,z,W],t=k({debug:!1});s.forEach(i=>m.setupFormComponentWatcher(i,ne,t));const r=i=>{console.log("downloading.."),m.saveTemplateAsFile("config.ign",o(i))},n=i=>{m.copy(JSON.stringify(o(i),null,2))},o=i=>{let c={ignition:{version:"3.2.0"}};return s.filter(d=>d.methods.hasOwnProperty("encodeToIgn")).forEach(d=>d.methods.encodeToIgn(c,i)),i.debug&&(c["debug:form"]=i),c};return(i,c)=>{const d=v("FormKit");return u(),h(x,null,[a("section",xt,[a("div",kt,[St,a("div",Ft,[a("div",Ct,[a("div",Kt,[l(d,{type:"group",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=p=>t.value=p)},{default:g(()=>[l(S,{title:"Add Users",displayAtLeastOne:!1},{default:g(()=>[l(R)]),_:1}),l(S,{title:"Create Files",displayAtLeastOne:!1},{default:g(()=>[l(J)]),_:1}),l(S,{title:"Start Services",displayAtLeastOne:!1},{default:g(()=>[l(M)]),_:1}),l(S,{title:"Modify Services",displayAtLeastOne:!1},{default:g(()=>[l(z)]),_:1}),t.value.debug?(u(),h("div",Tt,[l(S,{title:"DEBUG: Add Bytes",displayAtLeastOne:!1},{default:g(()=>[l(W)]),_:1})])):f("",!0)]),_:1},8,["modelValue"])])])])]),Ot]),a("section",At,[a("div",It,[a("div",Vt,[a("div",Lt,[Ut,qt,a("div",Et,[a("pre",Nt,I(o(t.value)),1),a("div",Bt,[l(d,{modelValue:t.value.debug,"onUpdate:modelValue":c[1]||(c[1]=p=>t.value.debug=p),type:"checkbox",label:"Debug",name:"debug"},null,8,["modelValue"]),a("button",{class:"btn btn-outline-dark mb-2",onClick:c[2]||(c[2]=p=>n(t.value))},Rt)]),a("button",{class:"btn btn-primary mb-4",onClick:c[3]||(c[3]=p=>r(t.value))}," Download "),a("div",null,[Jt,l(Ze,{ignJson:o(t.value)},null,8,["ignJson"])]),Mt,zt])])])])])],64)}}};var G="/fuel-ignition/assets/undraw_freelancer_re_irh4.f098216d.svg";const Gt={},Dt={class:"page-section bg-dark",id:"import"},Yt={class:"container px-4 px-lg-5"},jt={class:"row gx-4 gx-lg-5 justify-content-center"},Qt=a("div",{class:"d-grid"},[a("img",{class:"text-center mx-auto",src:G})],-1),Xt={class:"col-lg-8 col-xl-6 text-white text-center"},Zt=a("h2",{class:"mt-2"},"Sorry, this is not implemented yet!",-1),en=a("hr",{class:"divider"},null,-1),tn=a("p",{class:"mb-5"}," For now, Fuel Ignition can only create new configs. ",-1),nn=_("Back Home");function sn(e,s){const t=v("router-link");return u(),h("section",Dt,[a("div",Yt,[a("div",jt,[Qt,a("div",Xt,[Zt,en,tn,l(t,{class:"btn btn-primary btn-xl",to:"/"},{default:g(()=>[nn]),_:1})])])])])}var on=y(Gt,[["render",sn]]);const an=a("section",{class:"page-section bg-dark",id:"contact"},[a("div",{class:"container px-4 px-lg-5"},[a("div",{class:"row gx-4 gx-lg-5 justify-content-center"},[a("div",{class:"d-grid"},[a("img",{class:"text-center mx-auto",src:G})])])])],-1),rn=a("section",{class:"page-section p-2",id:"export"},[a("div",{class:"container mt-5 px-0"},[a("div",{class:"row gx-4 gx-lg-5 justify-content-center"},[a("h2",{class:"mt-5 text-center"},"Convert to ISO in the Browser (Alpha)"),a("hr",{class:"divider"}),a("div",{class:"d-grid mb-5"},[a("div",{class:"mx-auto"})])])])],-1),ln={setup(e){return(s,t)=>(u(),h(x,null,[an,rn],64))}},cn="/fuel-ignition/",dn=[{path:"/",name:"Home",component:Pe},{path:"/edit",name:"Edit",component:Wt},{path:"/import",name:"Import",component:on},{path:"/test",name:"Test",component:ln}],un=se({history:oe(cn),routes:dn});window.addEventListener("DOMContentLoaded",e=>{var s=function(){const n=document.body.querySelector("#mainNav");!n||(window.scrollY===0?n.classList.remove("navbar-shrink"):n.classList.add("navbar-shrink"))};s(),document.addEventListener("scroll",s);const t=document.body.querySelector(".navbar-toggler");[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map(function(n){n.addEventListener("click",()=>{window.getComputedStyle(t).display!=="none"&&t.click()})})});ae(Se).use(ie,re).use(un).mount("#app");
