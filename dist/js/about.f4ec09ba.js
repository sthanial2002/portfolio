"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[443],{476:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var i=n(252);const r={class:"container mx-auto"},a={class:"container mx-auto"};function s(t,e,n,s,o,u){const l=(0,i.up)("AboutMe"),m=(0,i.up)("AboutCounter"),d=(0,i.up)("AboutClients");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",r,[(0,i.Wm)(l)]),(0,i.Wm)(m),(0,i._)("div",a,[(0,i.Wm)(d)])])}var o=n(577);const u={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},l=(0,i._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,i._)("img",{src:"https://res.cloudinary.com/sthanial2002/image/upload/v1657173363/sthanial/profil/SAM_3025_yvvjpp.jpg",class:"rounded-xl w-96",alt:""})],-1),m={class:"w-full sm:w-3/4 text-left"};function d(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",u,[l,(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.bios,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg",style:{color:"#fff"}},(0,o.zw)(t.bio),1)))),128))])])}var c={setup(){return{bios:[{id:1,bio:"Software Engineer and passionate about Web Technologies, I have been working freelance as a Web and Mobile Developer for more than 5 years"},{id:2,bio:"I mainly use this languages and Frameworks and CMS that are associated :"},{id:3,bio:"Languages : PHP - Javascript"},{id:4,bio:"Frameworks : Laravel - Flutter - VueJs"},{id:5,bio:"Content Managment System (CMS) : WordPress - Woocommerce"},{id:6,bio:"Database : MySQL - MariaDB - PostgreSQL - SQLite"},{id:7,bio:"Platform : Heroku - Firebase"},{id:8,bio:"Tools : Git - Github - Bitbucket"}]}}},h=n(744);const p=(0,h.Z)(c,[["render",d]]);var f=p;const g={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm",style:{"background-color":"#1e3851"}},b={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"},A={class:"mb-20 sm:mb-0"},y={class:"block text-md text-ternary-dark dark:text-ternary-light",style:{color:"#fff"}},x={class:"mb-20 sm:mb-0"},k={class:"block text-md text-ternary-dark dark:text-ternary-light",style:{color:"#fff"}},w={class:"mb-20 sm:mb-0"},v={class:"block text-md text-ternary-dark dark:text-ternary-light",style:{color:"#fff"}},S={class:"mb-20 sm:mb-0"},_={class:"block text-md text-ternary-dark dark:text-ternary-light",style:{color:"#fff"}};function T(t,e,n,r,a,s){const u=(0,i.up)("counter");return(0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",b,[(0,i._)("div",A,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:7,duration:1,autoinit:!0,onFinished:e[0]||(e[0]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter",style:{color:"#fff"}},null,512),(0,i._)("span",y,(0,o.zw)(t.experienceTitle),1)]),(0,i._)("div",x,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:10,duration:1,suffix:"k+",autoinit:!0,onFinished:e[1]||(e[1]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2",style:{color:"#fff"}},null,512),(0,i._)("span",k,(0,o.zw)(t.githubTitle),1)]),(0,i._)("div",w,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:92,duration:1,suffix:"%",autoinit:!0,onFinished:e[2]||(e[2]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2",style:{color:"#fff"}},null,512),(0,i._)("span",v,(0,o.zw)(t.feedbackTitle),1)]),(0,i._)("div",S,[(0,i.Wm)(u,{ref:"counter",startAmount:0,endAmount:58,duration:1,autoinit:!0,onFinished:e[3]||(e[3]=e=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2",style:{color:"#fff"}},null,512),(0,i._)("span",_,(0,o.zw)(t.projectsTitle),1)])])])}var D=(0,i.aZ)({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=1e3*this.duration,this.remaining=1e3*this.duration,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let n=e.split("."),i=n[0],r=n.length>1?this.decimalSeparator+n[1]:"",a=!isNaN(parseFloat(this.separator));if(this.separator&&!a)while(t.test(i))i=i.replace(t,"$1"+this.separator+"$2");return i+r}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=1e3*this.duration,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout((()=>{this.$emit("finished")}),1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function F(t,e,n,r,a,s){return(0,i.wg)(),(0,i.j4)("span",null,(0,o.zw)(t.displayedAmount),1)}D.render=F;var C=(()=>{const t=D;return t.install=e=>{e.component("Vue3Autocounter",t)},t})(),j=C,M={components:{counter:j},data:()=>({experienceTitle:"Years of experience",githubTitle:"lines of code",feedbackTitle:"Positive feedback on 5euros.com",projectsTitle:"Projects completed"})};const N=(0,h.Z)(M,[["render",T]]);var P=N;const W={class:"mt-10 sm:mt-20"},E={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light",style:{color:"#fff"}},L={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function z(t,e,n,r,a,s){const u=(0,i.up)("AboutClientSingle");return(0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("p",E,(0,o.zw)(t.clientsHeading),1),(0,i._)("div",L,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.clients,(t=>((0,i.wg)(),(0,i.j4)(u,{key:t.id,client:t,style:{"background-color":"#fff"}},null,8,["client"])))),128))])])}const $=["src","alt"];function H(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("img",{src:n.client.img,alt:n.client.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,$)])}var I={props:["client"]};const Z=(0,h.Z)(I,[["render",H]]);var q=Z,B={components:{AboutClientSingle:q},data:()=>({clientsHeading:"Some of the brands I have worked with",clients:[{id:1,title:"LS3D",img:"https://res.cloudinary.com/sthanial2002/image/upload/v1657174196/sthanial/brands/ls3d_n6ns13.webp"},{id:2,title:"EDITIONS BENEFCLUB",img:"https://res.cloudinary.com/sthanial2002/image/upload/v1657174508/sthanial/brands/hbeditions_lny2t8.png"},{id:3,title:"POUSS POUSS PANIER",img:"https://res.cloudinary.com/sthanial2002/image/upload/v1657174655/sthanial/brands/pousspousspanier_s6dee7.jpg"},{id:4,title:"ONEMARKETALL",img:"https://res.cloudinary.com/sthanial2002/image/upload/v1657175008/sthanial/brands/onemarketall_n6nw4h.png"},{id:5,title:"MY PLACE EVENTS",img:"https://res.cloudinary.com/sthanial2002/image/upload/v1657175012/sthanial/brands/myplaceevents_cd9a2n.png"},{id:6,title:"DATA SOFT",img:"https://res.cloudinary.com/sthanial2002/image/upload/v1657175102/sthanial/brands/datasoft_qpmwi8.png"}]})};const O=(0,h.Z)(B,[["render",z]]);var U=O,V=n(508),Y=n.n(V),K={name:"About",components:{AboutMe:f,AboutCounter:P,AboutClients:U},data:()=>({}),mounted(){Y().replace()},updated(){Y().replace()},methods:{}};const Q=(0,h.Z)(K,[["render",s]]);var G=Q}}]);
//# sourceMappingURL=about.f4ec09ba.js.map