import{r as m}from"./react.6bac1629.js";import{a as k,w as j,t as A,c as C,p as I,l as R,b as G,g as M,d as q,e as B,f as F,h as S}from"./index.17e6740a.js";import{a as p,u as x}from"./react-redux.49c0f1c3.js";import{_ as W}from"./react-fast-marquee.2ddeee80.js";import{j as e,a,F as g}from"./@rc-component.1251c77a.js";import{a as h,b as f}from"./react-router.ddd05982.js";import{v as Y,w as E,x as V,q as v,h as N,r as w,s as y,y as O,z as H}from"./react-icons.ea9a12e6.js";import{h as Q}from"./html-react-parser.161f3490.js";import{h as P,m as J}from"./moment.4889ea25.js";import{F as z}from"./Footer.d0426908.js";import"./react-dom.743d3922.js";import"./scheduler.3d82e58a.js";import"./react-router-dom.4fd390f9.js";import"./@remix-run.0f90e68c.js";import"./@reduxjs.ad644bad.js";import"./immer.a5abe755.js";import"./redux.25e2e7b8.js";import"./@babel.3a8c2b99.js";import"./redux-thunk.c6126e9b.js";import"./axios.58752079.js";import"./react-loader-spinner.370fdd40.js";import"./styled-components.636ce670.js";import"./react-is.484b48b3.js";import"./@emotion.21aae260.js";import"./hoist-non-react-statics.798fddd9.js";import"./styled-tools.6bc36e93.js";import"./react-hot-toast.9c82a8f7.js";import"./goober.2053c3e8.js";import"./react-dropzone.59967111.js";import"./prop-types.c466925a.js";import"./file-selector.46695f03.js";import"./tslib.3ddc700f.js";import"./attr-accept.d4f66889.js";import"./@react-oauth.9cfe8954.js";import"./redux-persist.f9308c0e.js";import"./use-sync-external-store.b020237b.js";import"./rc-util.48716302.js";import"./classnames.894b94fb.js";import"./rc-resize-observer.5e4ec66b.js";import"./resize-observer-polyfill.8deb1e21.js";import"./rc-motion.a469ddb1.js";import"./react-property.eaac8e83.js";import"./domelementtype.4be9d55f.js";import"./html-dom-parser.b90dc621.js";import"./style-to-js.d7109a81.js";import"./style-to-object.0e87b645.js";import"./inline-style-parser.6dc90e75.js";var T="/mysite/assets/next.79cd4237.png",K="/mysite/assets/react.518ad22a.webp",L="/mysite/assets/vite.1373ae85.png",D="/mysite/assets/tailwind.fbd89c92.png",X="data:image/webp;base64,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",U="/mysite/assets/typescript.aa7cd491.jpg",Z="/mysite/assets/nodejs.df9791c3.jpg",_="/mysite/assets/rails.ce3677c2.webp",$="/mysite/assets/mongodb.f5c313e5.png",ee="/mysite/assets/postgresql.f3bea7c6.png";function ae(){return h(),e("div",{className:"flex flex-col items-center justify-center w-[90%] lg:w-full pt-5 bg-bg_alt",children:e("div",{className:"grid grid-cols-1 items-center justify-center",children:e(W,{direction:"left",children:[{name:"Vite",image:L},{name:"React",image:K},{name:"NextJs",image:T},{name:"TailwindCss",image:D},{name:"JavaScript",image:X},{name:"Typescript",image:U},{name:"NodeJs",image:Z},{name:"Ruby on Rails",image:_},{name:"MongoDb",image:$},{name:"PostgreSql",image:ee}].map(({name:n,label:s,image:l})=>a("div",{className:"relative cursor-pointer mx-2 h-min",children:[a("div",{className:"absolute z-10 drop-shadow-md shadow-black px-2 rounded-md bg-opacity-[.2] text-black top-1 left-1 bg-white",children:[e("p",{className:"drop-shadow-md shadow-black text-[14px] sm:text-base",children:s}),e("h6",{className:"font-extrabold drop-shadow-sm text-[16px] shadow-black",children:n})]}),e("div",{className:"",children:e("img",{src:l,className:"w-[100px] h-[100px] md:w-[120px] rounded-full md:h-[120px] object-cover",alt:"service"})})]},n))})})})}const re=()=>{const i=p();return h(),m.exports.useState({name:"",email:"",subject:"",description:"",time_slot:""}),a("div",{className:"flex flex-col items-center justify-center sm:h-[70vh] lg:min-h-[80vh] w-full bg-bg_alt text-white",children:[e("div",{className:"items-center text-lighter flex-wrap mt-10",children:a("div",{className:"flex gap-2 items-center flex-wrap lg:flex-nowrap",children:[e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Entrepreneur"}),e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Full Stack Developer"}),e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Freelancer"}),e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Blogger"})]})}),a("div",{className:"relative sm:flex items-center justify-around  w-[90%] sm:w-[1200px] gap-20 h-[100%]",children:[a("div",{className:"flex flex-col pt-3 sm:pt-0 justify-center h-full flex-wrap",children:[e("p",{className:"text-[25px] sm:text-[50px] text-green font-bold m-0 p-0 mb-3",children:"Inspire, Transform, Achieve"}),e("p",{className:"text-[18] sm:text-[20px] text-white m-0 p-0 mb-3",children:"Transform Your Ideas into Exquisite Softwares and Websites"}),a("div",{className:"",children:[e("div",{className:"items-center text-lighter flex-wrap",children:a("div",{className:"flex gap-2 items-center flex-wrap lg:flex-nowrap",children:[e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Software Engineering"}),e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Full Stack Development"}),e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Web Development"}),e("p",{className:"rounded-md border border-bg_light py-1 px-2",children:"Web Design"})]})}),a("div",{className:"flex gap-2 flex-wrap md:flex-nowrap mt-4 mb-5",children:[e("button",{onClick:()=>i(k()),className:"rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300",children:"About me"}),e("button",{onClick:()=>i(j()),className:"rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300",children:"My projects"}),e("button",{onClick:()=>i(A()),className:"rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300",children:"My journey"}),e("button",{onClick:()=>i(C()),className:"rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300",children:"Contact me"}),e("button",{onClick:()=>i(I()),className:"rounded-md text-[18px] py-2 px-4  bg-bg_cl text-green font-semibold hover:text-bg_cl hover:font-bold hover:bg-green duration-300",children:"Portfolio"})]})]}),e(ae,{})]}),e("div",{className:"hidden md:block absolute w-[500px] z-20 right-0 bottom-0",children:e("img",{className:"md:object-cover rounded-2xl object-contain w-[300px] h-[200px] md:h-[600px] md:w-[600px]",src:R,alt:"landing"})})]})]})},te=()=>{const i=encodeURI(G);return e("div",{className:"h-min bg-primary p-2 rounded-full w-min",children:a("div",{className:"flex items-center gap-4",children:[e("p",{className:"text-[16px]",children:"share:"}),a("div",{className:"flex gap-4 social-media text-[22px] items-center justify-items-center",children:[e("a",{rel:"noreferrer",target:"_blank",href:`https://www.linkedin.com/shareArticle?url=${i}`,className:"cursor-pointer bg-primary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300",children:e(Y,{})}),e("a",{rel:"noreferrer",target:"_blank",href:`https://api.whatsapp.com/send/?text=${i}`,className:"cursor-pointer bg-primary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300",children:e(E,{})}),e("a",{rel:"noreferrer",target:"_blank",href:`https://twitter.com/intent/tweet?url=${i}`,className:"cursor-pointer bg-primary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300",children:e(V,{})})]})]})})},ie=()=>e("footer",{className:"w-full pb-10",children:e("div",{className:"flex items-center gap-20 justify-center flex-col w-full",children:e("div",{className:"flex items-center justify-evenly w-full lg:py-5",children:a("div",{className:"mt-8 flex flex-col md:flex-row items-center gap-20 text-center justify-center",children:[a("ul",{className:"flex items-center gap-5 h-min bg-primary py-3 px-2 rounded-full w-min",children:[e("p",{className:"text-[16px]",children:"Follow:"}),[{name:"Github",icon:e(v,{}),link:"https://github.com/Yonela-Johannes"},{name:"LinkedIn",icon:e(N,{}),link:"https://www.linkedin.com/in/yonela-johannes/"},{name:"Facebook",icon:e(w,{}),link:"https://www.facebook.com/JohannesYonela"},{name:"Instagram",icon:e(y,{}),link:"https://www.instagram.com/yonelajohannes/"}].map(({icon:n,link:s,name:l})=>e("a",{href:s,target:"_blank",className:"cursor-pointer bg-secondary border border-lighter text-white rounded-full p-2 hover:bg-green duration-300",children:n},l))]}),e(te,{})]})})})});var ne="/mysite/assets/younelacover.1f7a383a.jpg";const le=()=>e("section",{className:"hero",id:"home","aria-label":"home",children:a("div",{className:"w-full md:w-[1000px] px-5 flex flex-col md:flex-row gap-4 items-center md:justify-between item-center",children:[a("div",{children:[e("p",{className:"text-[15px] font-bold",children:"Hello Everyone!"}),a("div",{className:"flex gap-2",children:["I'm",e("h1",{className:"font-bold text-[30px] md:text-[60px] text-green",children:"Yonela Johannes"})]}),e("p",{className:"md:w-[400px]",children:"I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I\u2019m not adding motion just to spruce things up, but doing it in ways that."})]}),e("img",{src:ne,title:"Yonela Johannes",alt:"Yonela Johannes",className:"w-[340px] h-[450px] rounded-xl cursor-pointer object-center object-cover"})]})});const se=()=>{const{recentPosts:i,popularPosts:n}=x(t=>t.posts),s=h(),l=p(),c=f(),{pathname:r}=c;return m.exports.useEffect(()=>{l(M())},[r]),m.exports.useEffect(()=>{l(q())},[r]),e(g,{children:(i==null?void 0:i.length)&&e("section",{className:"section recent-post",children:a("div",{className:"container",children:[a("div",{className:"post-main",children:[e("h2",{className:"text-green text-[25px] font-bold md:text-[40px]",children:"Recent posts"}),e("p",{className:"pb-10 text-[16px] md:text-[20px]",children:"Don't miss the latest trends"}),e("ul",{className:"grid-list",children:i!=null&&i.length?i==null?void 0:i.map(t=>e("li",{children:a("div",{className:"recent-post-card",children:[e("div",{onClick:()=>s(`/details/${t==null?void 0:t._id}`),className:"relative",children:a("div",{className:"w-full",children:[(t==null?void 0:t.image)&&e("img",{src:t==null?void 0:t.image,alt:t==null?void 0:t.name,className:"h-[280px] rounded-2xl w-full bg-primary object-cover object-center transition-all ease"}),e("div",{className:"",children:(t==null?void 0:t.post)&&e("div",{className:"flex text-start pb--4 justify-between p-2 px-4 text-base border-b border-b-primary",children:e("p",{className:"text-[16px]",children:Q(`${t==null?void 0:t.post.slice(0,200)}`)})})})]})}),a("div",{className:"card-content",children:[e("a",{href:"#",className:"bg-bg_alt p-2 rounded-2xl font-semibold cursor-pointer",children:t==null?void 0:t.title}),e("h3",{className:"headline headline-3 card-title",children:e("a",{href:"#",className:"",children:t==null?void 0:t.title})}),e("div",{className:"card-wrapper",children:a("div",{className:"card-tag",children:[e("a",{href:"#",className:"text-[14px] text-lighter font-semibold",children:"# Travel"}),e("a",{href:"#",className:"text-[14px] text-lighter font-semibold",children:"# Lifestyle"})]})})]})]})})):"No stories"})]}),(n==null?void 0:n.length)&&e("div",{className:"post-aside grid-list",children:a("div",{className:"card aside-card",children:[e("h3",{className:"headline headline-2 aside-title",children:e("span",{className:"span",children:"Popular Posts"})}),e("ul",{className:"popular-list",children:n!=null&&n.length?n==null?void 0:n.map(t=>{var d,o;return e("li",{children:a("div",{className:"popular-card",children:[e("figure",{className:"card-banner img-holder",children:e("img",{src:(d=t==null?void 0:t.user)==null?void 0:d.picture,className:"w-[50px] h-[50px] object-cover object-center",loading:"lazy",alt:(o=t==null?void 0:t.user)==null?void 0:o.given_name})}),a("div",{className:"card-content",children:[e("h4",{className:"headline headline-4 card-title",children:e("a",{href:"#",className:"link hover-2",children:t==null?void 0:t.title})}),e("div",{children:e("p",{className:"text-[14px] text-lighter",children:P(t==null?void 0:t.createdAt).fromNow()})})]})]})})}):"No posts"})]})})]})})})},ce=()=>{const{recentBlogs:i}=x(r=>r.blogs),n=h(),s=p(),l=f(),{pathname:c}=l;return m.exports.useEffect(()=>{s(B())},[c]),e(g,{children:(i==null?void 0:i.length)&&e("section",{className:"section feature",children:a("div",{className:"container",children:[e("h2",{className:"text-green font-bold text-[25px] md:text-[40px]",children:"Recent"}),e("p",{className:"mb-4 text-[16px]",children:"Empowering great people, stories and more"}),e("ul",{className:"feature-list",children:i!=null&&i.length?i.map(r=>{var t,d,o,u,b;return e("li",{onClick:()=>n(`/blogs/${r==null?void 0:r._id}`),children:a("div",{className:"card feature-card",children:[e("figure",{className:"card-banner img-holder w-full h-[260px]",children:e("img",{src:r==null?void 0:r.image,loading:"lazy",alt:r==null?void 0:r.title,className:"object-center object-cover w-full rounded-xl h-full"})}),a("div",{className:"card-content",children:[e("div",{className:"card-wrapper",children:a("div",{className:"card-tag",children:[e("a",{href:"#",className:"text-[14px] text-lighter font-semibold",children:"#Travel"}),e("a",{href:"#",className:"text-[14px] text-lighter font-semibold",children:"#Lifestyle"})]})}),e("h3",{className:"headline headline-3",children:e("a",{href:"#",className:"text-[16px] hover-2",children:((t=r==null?void 0:r.title)==null?void 0:t.slice(0,60))+"..."})}),a("div",{className:"card-wrapper",children:[a("div",{className:"profile-card",children:[e("img",{src:(d=r==null?void 0:r.user)==null?void 0:d.picture,width:"48",height:"48",loading:"lazy",alt:(o=r==null?void 0:r.user)==null?void 0:o.given_name,className:"profile-banner"}),a("div",{children:[a("p",{className:"text-[16px]",children:[(u=r==null?void 0:r.user)==null?void 0:u.given_name," ",(b=r==null?void 0:r.user)==null?void 0:b.family_name]}),e("p",{className:"text-[14px] text-lighter",children:J(r.createdAt).fromNow()})]})]}),e("a",{href:"#",className:"text-[14px]",children:"Read more"})]})]})]})},r==null?void 0:r._id)}):"No Blogs"}),a("button",{onClick:()=>n("/blogs"),className:"bg-primary flex item-center p-4 m-auto my-10 hover:bg-secondary",children:[e("span",{className:"span",children:"Show More Posts"}),e(O,{})]})]})})})},de=()=>e("footer",{className:"md:mb-20 mt-16",children:a("div",{className:"bg-bg_alt p-2 border border-secondary pt-7 rounded-md",children:[a("div",{className:"md:px-20",children:[a("div",{className:"flex",children:[e("img",{src:F,className:"w-[25px] h-[25px] object-contain",loading:"lazy",alt:"Yonela Johannes logo"}),e("p",{children:"Yonela Johannes"})]}),e("p",{className:"p-2 w-[320px] md:w-[940px]",children:"I'm passionate about sharing people's success stories, delving into their backgrounds and life journeys. My blog is all about offering motivation and guidance on crafting a successful career or life path. Moreover, I'm excited to share my personal journey with my readers. Along the way, I'll be featuring posts about individuals who have profoundly influenced my life, and the individuals and companies that have been a part of my professional and educational journey."})]}),a("div",{className:"flex flex-col md:flex-row md:px-8 py-11 items-center justify-around",children:[a("p",{className:"flex gap-2",children:["\xA9 Developed by ",e("a",{href:"#",className:"text-green font-semibold",children:"Yonela Johannes."})]}),a("ul",{className:"flex items-center text-[26px] gap-8",children:[e("a",{href:"https://github.com/Yonela-Johannes",target:"_blank",children:e(v,{})}),e("a",{href:"https://www.facebook.com/JohannesYonela",target:"_blank",children:e(w,{})}),e("a",{href:"https://www.instagram.com/yonelajohannes",target:"_blank",children:e(y,{})}),e("a",{href:"https://www.linkedin.com/in/yonela-johannes/",target:"_blank",children:e(N,{})})]})]})]})}),oe=()=>{const{recentStories:i}=x(r=>r.stories),n=h(),s=p(),l=f(),{pathname:c}=l;return m.exports.useEffect(()=>{s(S())},[c]),e(g,{children:(i==null?void 0:i.length)&&e("section",{className:"section recent-post",children:e("div",{className:"container",children:a("div",{className:"post-main",children:[e("h2",{className:"text-green text-[25px] font-bold md:text-[40px]",children:"Recent stories"}),e("p",{className:"pb-10 text-[16px] md:text-[20px]",children:"Don't miss the latest trends"}),e("ul",{className:"grid-list",children:i!=null&&i.length?i==null?void 0:i.map(r=>e("li",{children:a("div",{className:"recent-post-card",children:[a("div",{className:"relative",children:[e("figure",{className:"card-banner img-holder w-[270px] h-[280px]",children:e("video",{muted:!0,src:r==null?void 0:r.story,className:"w-full h-[280px] object-cover  rounded-2xl cursor-pointer",loading:"lazy"})}),e("div",{className:"z-20 absolute top-0 left-0 flex items-center justify-center w-full h-full",children:e("div",{onClick:()=>n(`/details/${r==null?void 0:r._id}`),className:"cursor-pointer h-min text-white rounded-full p-2 bg-primary duration-300 hover:text-white",children:e(H,{size:40})})})]}),a("div",{className:"card-content",children:[e("a",{href:"#",className:"bg-bg_alt p-2 rounded-2xl font-semibold cursor-pointer",children:"Working Tips"}),e("h3",{className:"headline headline-3 card-title",children:e("a",{href:"#",className:"",children:r==null?void 0:r.caption})}),e("p",{className:"text-lighter",children:"Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far"}),e("div",{className:"card-wrapper",children:a("div",{className:"card-tag",children:[e("a",{href:"#",className:"text-[14px] text-lighter font-semibold",children:"# Travel"}),e("a",{href:"#",className:"text-[14px] text-lighter font-semibold",children:"# Lifestyle"})]})})]})]})})):"No stories"})]})})})})},ia=()=>a("div",{className:"flex flex-col items-center",children:[e(re,{}),e(ie,{}),e(le,{}),e(ce,{}),e(se,{}),e(oe,{}),e(de,{}),e("div",{className:"md:px-[100px] mb-[100px] md:mb-[120px]",children:e(z,{})})]});export{ia as default};
