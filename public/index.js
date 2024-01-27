/*! For license information please see index.js.LICENSE.txt */
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`,o=t.default.h1`
    color: #002fa7;
    text-align: center;
    margin: 0;
`,f=t.default.p`
    text-align: center;
`,u=t.default.div`
    display: flex;
    justify-content: center;
`,m=t.default.div`
    width: 70vw;
    height: 70vw;
    overflow: clip;
    border-radius: 1000px;
    border: 0.75rem solid #002fa7;
`,p=t.default.img`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    overflow: clip;
    height: inherit;
`,d=t.default.div`
    padding: 0.75rem;
    border: 0.75rem solid #ff0d70;
`,h=()=>r.default.createElement(d,null,r.default.createElement(m,null,r.default.createElement(p,{src:"assets/"+config.about.image})));e.default=()=>r.default.createElement(i.default,null,r.default.createElement(s,null,r.default.createElement(o,null,"About Me")),r.default.createElement(u,null,r.default.createElement(h,null)),r.default.createElement(s,null,config.about.paragraphs.map((c=>r.default.createElement(f,null,c))),r.default.createElement(l.default,null),r.default.createElement(f,null,"amy.designandphoto@gmail.com")))},957:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(373)),i=n(a(215)),l=n(a(625));e.default=()=>{const c=config.pages.find((c=>c.id===PAGE_ID));return"home"===PAGE_ID?r.default.createElement(l.default,null):"about"===PAGE_ID?r.default.createElement(i.default,null):r.default.createElement(t.default,{page:c})}},714:function(c,e,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(c,e,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(e,a);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(c,n,r)}:function(c,e,a,n){void 0===n&&(n=a),c[n]=e[a]}),r=this&&this.__setModuleDefault||(Object.create?function(c,e){Object.defineProperty(c,"default",{enumerable:!0,value:e})}:function(c,e){c.default=e}),t=this&&this.__importStar||function(c){if(c&&c.__esModule)return c;var e={};if(null!=c)for(var a in c)"default"!==a&&Object.prototype.hasOwnProperty.call(c,a)&&n(e,c,a);return r(e,c),e},i=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(200),s=a(982),o=t(a(294)),f=i(a(394)),u=f.default.div``,m=f.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    box-shadow: 0px 3px 6px #00000029;
`,p=f.default.div.attrs({id:"MenuPositioner"})`
    position: relative;
`,d=f.default.div.attrs({id:"Menu"})`
    position: relative;
    background-color: white;
    width: 100vw;
    z-index: 10;
`,h=f.default.div.attrs({id:"MenuContent"})`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: white;
    box-shadow: 0px 3px 6px #00000029;
    padding: 1.5rem;
`,z=f.default.a`
    color: black;
    text-decoration: none;
    ${({isLast:c})=>c?"":"margin-bottom: 1.25rem;"}
`,H=f.default.img`
    height: 100%;
`,V=f.default.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: 1.5rem;
`,M=({children:c})=>o.default.createElement(p,null,o.default.createElement(d,null,o.default.createElement(h,null,c)));e.default=()=>{const[c,e]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{const a=()=>{window.scrollY>10&&!c&&e(!1)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)}),[]),o.default.createElement(u,null,o.default.createElement(m,null,o.default.createElement(H,{src:"assets/logos/color-logo-no-text.svg"}),o.default.createElement(V,{onClick:()=>e((c=>!c))},c?o.default.createElement(s.FontAwesomeIcon,{icon:l.faClose,fontSize:"30px"}):o.default.createElement(s.FontAwesomeIcon,{icon:l.faBars,fontSize:"30px"}))),c&&o.default.createElement(M,null,o.default.createElement(z,{href:"index.html",isLast:!1},"Home"),o.default.createElement(z,{href:"about.html",isLast:!1},"About"),config.pages.map(((c,e)=>o.default.createElement(z,{href:`${c.id}.html`,isLast:e===config.pages.length-1},c.title)))))}},625:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(554)),i=n(a(866));e.default=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement(t.default,null),r.default.createElement(i.default,null))},373:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(394)),i=n(a(428)),l=t.default.div.attrs({id:"TextContent"})`
    margin: 1.5rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`,s=t.default.h1`
    color: #002fa7;
    text-align: center;
    margin-top: 0;
    margin-bottom: 3rem;
    z-index: 1;
`,o=t.default.p`
    text-align: center;
`,f=t.default.img`
    width: 100vw;
    margin: 0;
    margin-bottom: -4px;
    padding: 0;
    border: 0;
`;e.default=({page:c})=>r.default.createElement(i.default,null,r.default.createElement(l,null,r.default.createElement(s,null,c.title),r.default.createElement("div",null,c.paragraphs.map((c=>r.default.createElement(o,null,c))))),r.default.createElement("div",null,c.images.map((c=>r.default.createElement(f,{src:"assets/"+c})))))},428:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(394)),i=n(a(714)),l=t.default.div.attrs({id:"Page"})`
    display: relative;
`,s=t.default.div.attrs({id:"PageContent"})``;e.default=({children:c})=>r.default.createElement(l,null,r.default.createElement(i.default,null),r.default.createElement(s,null,c))},300:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(394)),i=t.default.div`
    position: relative;
    display: flex;
`,l=t.default.img`
    width: 100vw;
`;e.default=({offset:c,count:e=1})=>r.default.createElement(i,{style:{left:`${c}px`}},new Array(e).fill(r.default.createElement(l,{src:"assets/logos/black-logo-no-text.svg"})))},965:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(394)).default.span`
    color: #002fa7;
    font-weight: 900;
    font-size: 4rem;
`;e.default=()=>r.default.createElement(t,null,"CONT@CT")},177:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(394)),i=t.default.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100vw;
    margin-bottom: 5vw;
`,l=t.default.img`
    width: 100vw;
    max-height: 100vw;
    object-fit: cover;
`,s=t.default.a`
    box-sizing: border-box;
    background-color: #002fa7;
    color: white;
    width: 100%;
    text-decoration: none;
    padding: 5vw;
    font-size: 6vw;
    line-height: 8vw;
`;e.default=({img:c,text:e,linksTo:a})=>r.default.createElement(i,null,r.default.createElement(l,{src:`assets/${c}`}),r.default.createElement(s,{href:`${a}.html`},e))},554:function(c,e,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(c,e,a,n){void 0===n&&(n=a);var r=Object.getOwnPropertyDescriptor(e,a);r&&!("get"in r?!e.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(c,n,r)}:function(c,e,a,n){void 0===n&&(n=a),c[n]=e[a]}),r=this&&this.__setModuleDefault||(Object.create?function(c,e){Object.defineProperty(c,"default",{enumerable:!0,value:e})}:function(c,e){c.default=e}),t=this&&this.__importStar||function(c){if(c&&c.__esModule)return c;var e={};if(null!=c)for(var a in c)"default"!==a&&Object.prototype.hasOwnProperty.call(c,a)&&n(e,c,a);return r(e,c),e},i=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const l=t(a(294)),s=i(a(394)),o=i(a(300)),f=i(a(404)),u=s.default.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5vw;
`;let m=Date.now();e.default=()=>{const{vert:c,width:e}=(()=>{const[c,e]=(0,l.useState)(window.scrollY),[a,n]=(0,l.useState)(window.innerWidth);return(0,l.useEffect)((()=>{const c=()=>{const c=Date.now();c-m>30&&(e(window.scrollY),n(window.innerWidth),m=c)},a=()=>{window.scrollTo(0,0)};return addEventListener("scroll",c),addEventListener("resize",c),addEventListener("beforeunload",a),()=>{removeEventListener("scroll",c),removeEventListener("resize",c),removeEventListener("beforeunload",a)}}),[]),{vert:c,width:a}})();return console.log(c,e),l.default.createElement(u,null,l.default.createElement(o.default,{offset:-5*e/3+c,count:2}),l.default.createElement(o.default,{offset:e/3-c}),l.default.createElement(f.default,null),l.default.createElement(o.default,{offset:2*e/3-c}),l.default.createElement(o.default,{offset:-7*e/3+c,count:3}),l.default.createElement(o.default,{offset:e/3-c,count:3}))}},866:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(177));e.default=()=>r.default.createElement(r.default.Fragment,null,config.home.links.map((c=>r.default.createElement(t.default,Object.assign({},c)))))},404:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=n(a(394)).default.img`
    width: 100%;
    padding-bottom: 5vw;
`;e.default=()=>r.default.createElement(t,{src:"assets/logos/color-logo-text.svg"})},629:function(c,e,a){"use strict";var n=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0});const r=n(a(294)),t=a(745),i=n(a(957));(0,t.createRoot)(document.getElementById("app")).render(r.default.createElement(i.default,null))}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var t=e[n]={exports:{}};return c[n].call(t.exports,t,t.exports,a),t.exports}a.n=c=>{var e=c&&c.__esModule?()=>c.default:()=>c;return a.d(e,{a:e}),e},a.d=(c,e)=>{for(var n in e)a.o(e,n)&&!a.o(c,n)&&Object.defineProperty(c,n,{enumerable:!0,get:e[n]})},a.o=(c,e)=>Object.prototype.hasOwnProperty.call(c,e),a.r=c=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},a.nc=void 0,a(629)})();