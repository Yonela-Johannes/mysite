import{c as Sn,u as wn,b as ae,r as Ke,m as gn}from"./@rc-component.1251c77a.js";import{r as t}from"./react.6bac1629.js";import"./react-is.484b48b3.js";import{c as $,d as Ie,b as H,e as y,g as J,h as ke,f as Q}from"./@babel.3a8c2b99.js";import{c as ce}from"./classnames.894b94fb.js";import{p as $t,o as Pt,C as Wt,l as Lt,x as En,c as bn,H as $e,I as It,J as Ht,h as Nn,f as kn,d as _t,L as Tn,B as Mt}from"./rc-util.48716302.js";import{R as ot}from"./rc-resize-observer.5e4ec66b.js";var ge={},We="rc-table-internal-hook",Z=Sn();function Ln(e,r){var n=t.exports.useRef(0);n.current+=1;var o=t.exports.useRef(e),a=[];Object.keys(e||{}).map(function(i){var u;(e==null?void 0:e[i])!==((u=o.current)===null||u===void 0?void 0:u[i])&&a.push(i)}),o.current=e;var l=t.exports.useRef([]);return a.length&&(l.current=a),t.exports.useDebugValue(n.current),t.exports.useDebugValue(l.current.join(", ")),r&&console.log("".concat(r,":"),n.current,l.current),n.current}var In=t.exports.memo(function(){var e=Ln();return t.exports.createElement("h1",null,"Render Times: ",e)});In.displayName="RenderBlock";var Kt=t.exports.createContext({renderWithProps:!1}),Hn="RC_TABLE_KEY";function _n(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ae(e){var r=[],n={};return e.forEach(function(o){for(var a=o||{},l=a.key,i=a.dataIndex,u=l||_n(i).join("-")||Hn;n[u];)u="".concat(u,"_next");n[u]=!0,r.push(u)}),r}function nt(e){return e!=null}function Mn(e){return e&&Ie(e)==="object"&&!Array.isArray(e)&&!t.exports.isValidElement(e)}function Fn(e,r,n,o,a,l){var i=t.exports.useContext(Kt),u=wn(),s=$t(function(){if(nt(o))return[o];var c=r==null||r===""?[]:Array.isArray(r)?r:[r],d=Wt(e,c),f=d,p=void 0;if(a){var x=a(d,e,n);Mn(x)?(f=x.children,p=x.props,i.renderWithProps=!0):f=x}return[f,p]},[u,e,o,r,a,n],function(c,d){if(l){var f=$(c,2),p=f[1],x=$(d,2),v=x[1];return l(v,p)}return i.renderWithProps?!0:!Pt(c,d,!0)});return s}function Bn(e,r,n,o){var a=e+r-1;return e<=o&&a>=n}function On(e,r){return ae(Z,function(n){var o=Bn(e,r||1,n.hoverStartRow,n.hoverEndRow);return[o,n.onHover]})}var zn=function(r){var n=r.ellipsis,o=r.rowType,a=r.children,l,i=n===!0?{showTitle:!0}:n;return i&&(i.showTitle||o==="header")&&(typeof a=="string"||typeof a=="number"?l=a.toString():t.exports.isValidElement(a)&&typeof a.props.children=="string"&&(l=a.props.children)),l};function $n(e){var r,n,o,a,l,i,u,s,c=e.component,d=e.children,f=e.ellipsis,p=e.scope,x=e.prefixCls,v=e.className,h=e.align,m=e.record,R=e.render,k=e.dataIndex,L=e.renderIndex,z=e.shouldCellUpdate,C=e.index,w=e.rowType,F=e.colSpan,P=e.rowSpan,V=e.fixLeft,_=e.fixRight,U=e.firstFixLeft,T=e.lastFixLeft,g=e.firstFixRight,W=e.lastFixRight,A=e.appendNode,M=e.additionalProps,S=M===void 0?{}:M,K=e.isSticky,B="".concat(x,"-cell"),Y=ae(Z,["supportSticky","allColumnsFixedLeft"]),b=Y.supportSticky,pe=Y.allColumnsFixedLeft,Se=Fn(m,k,L,d,R,z),X=$(Se,2),Ee=X[0],O=X[1],ue={},me=typeof V=="number"&&b,le=typeof _=="number"&&b;me&&(ue.position="sticky",ue.left=V),le&&(ue.position="sticky",ue.right=_);var we=(r=(n=(o=O==null?void 0:O.colSpan)!==null&&o!==void 0?o:S.colSpan)!==null&&n!==void 0?n:F)!==null&&r!==void 0?r:1,fe=(a=(l=(i=O==null?void 0:O.rowSpan)!==null&&i!==void 0?i:S.rowSpan)!==null&&l!==void 0?l:P)!==null&&a!==void 0?a:1,j=On(C,fe),D=$(j,2),N=D[0],ee=D[1],te=function(Ce){var de;m&&ee(C,C+fe-1),S==null||(de=S.onMouseEnter)===null||de===void 0||de.call(S,Ce)},ne=function(Ce){var de;m&&ee(-1,-1),S==null||(de=S.onMouseLeave)===null||de===void 0||de.call(S,Ce)};if(we===0||fe===0)return null;var G=(u=S.title)!==null&&u!==void 0?u:zn({rowType:w,ellipsis:f,children:Ee}),xe=ce(B,v,(s={},H(s,"".concat(B,"-fix-left"),me&&b),H(s,"".concat(B,"-fix-left-first"),U&&b),H(s,"".concat(B,"-fix-left-last"),T&&b),H(s,"".concat(B,"-fix-left-all"),T&&pe&&b),H(s,"".concat(B,"-fix-right"),le&&b),H(s,"".concat(B,"-fix-right-first"),g&&b),H(s,"".concat(B,"-fix-right-last"),W&&b),H(s,"".concat(B,"-ellipsis"),f),H(s,"".concat(B,"-with-append"),A),H(s,"".concat(B,"-fix-sticky"),(me||le)&&K&&b),H(s,"".concat(B,"-row-hover"),!O&&N),s),S.className,O==null?void 0:O.className),ve={};h&&(ve.textAlign=h);var Ue=y(y(y(y({},S.style),ve),ue),O==null?void 0:O.style),ie=Ee;return Ie(ie)==="object"&&!Array.isArray(ie)&&!t.exports.isValidElement(ie)&&(ie=null),f&&(T||g)&&(ie=t.exports.createElement("span",{className:"".concat(B,"-content")},ie)),t.exports.createElement(c,J({},O,S,{className:xe,style:Ue,title:G,scope:p,onMouseEnter:te,onMouseLeave:ne,colSpan:we!==1?we:null,rowSpan:fe!==1?fe:null}),A,ie)}var De=t.exports.memo($n);function at(e,r,n,o,a,l){var i=n[e]||{},u=n[r]||{},s,c;i.fixed==="left"?s=o.left[a==="rtl"?r:e]:u.fixed==="right"&&(c=o.right[a==="rtl"?e:r]);var d=!1,f=!1,p=!1,x=!1,v=n[r+1],h=n[e-1],m=!(l!=null&&l.children);if(a==="rtl"){if(s!==void 0){var R=h&&h.fixed==="left";x=!R&&m}else if(c!==void 0){var k=v&&v.fixed==="right";p=!k&&m}}else if(s!==void 0){var L=v&&v.fixed==="left";d=!L&&m}else if(c!==void 0){var z=h&&h.fixed==="right";f=!z&&m}return{fixLeft:s,fixRight:c,lastFixLeft:d,firstFixRight:f,lastFixRight:p,firstFixLeft:x,isSticky:o.isSticky}}var At=t.exports.createContext({});function Pn(e){var r=e.className,n=e.index,o=e.children,a=e.colSpan,l=a===void 0?1:a,i=e.rowSpan,u=e.align,s=ae(Z,["prefixCls","direction"]),c=s.prefixCls,d=s.direction,f=t.exports.useContext(At),p=f.scrollColumnIndex,x=f.stickyOffsets,v=f.flattenColumns,h=f.columns,m=n+l-1,R=m+1===p?l+1:l,k=at(n,n+R-1,v,x,d,h==null?void 0:h[n]);return t.exports.createElement(De,J({className:r,index:n,component:"td",prefixCls:c,record:null,dataIndex:null,align:u,colSpan:R,rowSpan:i,render:function(){return o}},k))}var Wn=["children"];function Kn(e){var r=e.children,n=ke(e,Wn);return t.exports.createElement("tr",n,r)}function je(e){var r=e.children;return r}je.Row=Kn;je.Cell=Pn;function An(e){var r=e.children,n=e.stickyOffsets,o=e.flattenColumns,a=e.columns,l=ae(Z,"prefixCls"),i=o.length-1,u=o[i],s=t.exports.useMemo(function(){return{stickyOffsets:n,flattenColumns:o,scrollColumnIndex:u!=null&&u.scrollbar?i:null,columns:a}},[u,o,i,n,a]);return t.exports.createElement(At.Provider,{value:s},t.exports.createElement("tfoot",{className:"".concat(l,"-summary")},r))}var Pe=Ke(An),Dn=je;function jn(e){return null}function Un(e){return null}function Dt(e,r,n,o,a,l){var i=[];i.push({record:e,indent:r,index:l});var u=a(e),s=o==null?void 0:o.has(u);if(e&&Array.isArray(e[n])&&s)for(var c=0;c<e[n].length;c+=1){var d=Dt(e[n][c],r+1,n,o,a,c);i.push.apply(i,Q(d))}return i}function Xn(e,r,n,o){var a=t.exports.useMemo(function(){if(n!=null&&n.size){for(var l=[],i=0;i<(e==null?void 0:e.length);i+=1){var u,s=e[i];l=(u=l).concat.apply(u,Q(Dt(s,0,r,n,o,i)))}return l}return e==null?void 0:e.map(function(c,d){return{record:c,indent:0,index:d}})},[e,r,n,o]);return a}function jt(e){var r=e.prefixCls,n=e.children,o=e.component,a=e.cellComponent,l=e.className,i=e.expanded,u=e.colSpan,s=e.isEmpty,c=ae(Z,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),d=c.scrollbarSize,f=c.fixHeader,p=c.fixColumn,x=c.componentWidth,v=c.horizonScroll,h=n;return(s?v:p)&&(h=t.exports.createElement("div",{style:{width:x-(f?d:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(r,"-expanded-row-fixed")},x!==0&&h)),t.exports.createElement(o,{className:l,style:{display:i?null:"none"}},t.exports.createElement(De,{component:a,prefixCls:r,colSpan:u},h))}function Ut(e){var r=e.className,n=e.style,o=e.record,a=e.index,l=e.renderIndex,i=e.rowKey,u=e.rowExpandable,s=e.expandedKeys,c=e.onRow,d=e.indent,f=d===void 0?0:d,p=e.rowComponent,x=e.cellComponent,v=e.scopeCellComponent,h=e.childrenColumnName,m=ae(Z,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex"]),R=m.prefixCls,k=m.fixedInfoList,L=m.flattenColumns,z=m.expandableType,C=m.expandRowByClick,w=m.onTriggerExpand,F=m.rowClassName,P=m.expandedRowClassName,V=m.indentSize,_=m.expandIcon,U=m.expandedRowRender,T=m.expandIconColumnIndex,g=t.exports.useState(!1),W=$(g,2),A=W[0],M=W[1],S=s&&s.has(i);t.exports.useEffect(function(){S&&M(!0)},[S]);var K=z==="row"&&(!u||u(o)),B=z==="nest",Y=h&&o&&o[h],b=K||B,pe=t.exports.useRef(w);pe.current=w;var Se=function(){pe.current.apply(pe,arguments)},X=c==null?void 0:c(o,a),Ee=function(D){var N;C&&b&&Se(o,D);for(var ee=arguments.length,te=new Array(ee>1?ee-1:0),ne=1;ne<ee;ne++)te[ne-1]=arguments[ne];X==null||(N=X.onClick)===null||N===void 0||N.call.apply(N,[X,D].concat(te))},O;typeof F=="string"?O=F:typeof F=="function"&&(O=F(o,a,f));var ue=Ae(L),me=t.exports.createElement(p,J({},X,{"data-row-key":i,className:ce(r,"".concat(R,"-row"),"".concat(R,"-row-level-").concat(f),O,X&&X.className),style:y(y({},n),X?X.style:null),onClick:Ee}),L.map(function(j,D){var N=j.render,ee=j.dataIndex,te=j.className,ne=ue[D],G=k[D],xe;D===(T||0)&&B&&(xe=t.exports.createElement(t.exports.Fragment,null,t.exports.createElement("span",{style:{paddingLeft:"".concat(V*f,"px")},className:"".concat(R,"-row-indent indent-level-").concat(f)}),_({prefixCls:R,expanded:S,expandable:Y,record:o,onExpand:Se})));var ve;return j.onCell&&(ve=j.onCell(o,a)),t.exports.createElement(De,J({className:te,ellipsis:j.ellipsis,align:j.align,scope:j.rowScope,component:j.rowScope?v:x,prefixCls:R,key:ne,record:o,index:a,renderIndex:l,dataIndex:ee,render:N,shouldCellUpdate:j.shouldCellUpdate,expanded:xe&&S},G,{appendNode:xe,additionalProps:ve}))})),le;if(K&&(A||S)){var we=U(o,a,f+1,S),fe=P&&P(o,a,f);le=t.exports.createElement(jt,{expanded:S,className:ce("".concat(R,"-expanded-row"),"".concat(R,"-expanded-row-level-").concat(f+1),fe),prefixCls:R,component:p,cellComponent:x,colSpan:L.length,isEmpty:!1},we)}return t.exports.createElement(t.exports.Fragment,null,me,le)}Ut.displayName="BodyRow";var Vn=Ke(Ut);function Yn(e){var r=e.columnKey,n=e.onColumnResize,o=t.exports.useRef();return t.exports.useEffect(function(){o.current&&n(r,o.current.offsetWidth)},[]),t.exports.createElement(ot,{data:r},t.exports.createElement("td",{ref:o,style:{padding:0,border:0,height:0}},t.exports.createElement("div",{style:{height:0,overflow:"hidden"}},"\xA0")))}function Gn(e){var r=e.prefixCls,n=e.columnsKey,o=e.onColumnResize;return t.exports.createElement("tr",{"aria-hidden":"true",className:"".concat(r,"-measure-row"),style:{height:0,fontSize:0}},t.exports.createElement(ot.Collection,{onBatchResize:function(l){l.forEach(function(i){var u=i.data,s=i.size;o(u,s.offsetWidth)})}},n.map(function(a){return t.exports.createElement(Yn,{key:a,columnKey:a,onColumnResize:o})})))}function Xt(e){var r=e.data,n=e.getRowKey,o=e.measureColumnWidth,a=e.expandedKeys,l=e.onRow,i=e.rowExpandable,u=e.emptyNode,s=e.childrenColumnName,c=ae(Z,["prefixCls","getComponent","onColumnResize","flattenColumns"]),d=c.prefixCls,f=c.getComponent,p=c.onColumnResize,x=c.flattenColumns,v=Xn(r,s,a,n),h=t.exports.useRef({renderWithProps:!1}),m=f(["body","wrapper"],"tbody"),R=f(["body","row"],"tr"),k=f(["body","cell"],"td"),L=f(["body","cell"],"th"),z;r.length?z=v.map(function(w,F){var P=w.record,V=w.indent,_=w.index,U=n(P,F);return t.exports.createElement(Vn,{key:U,rowKey:U,record:P,index:F,renderIndex:_,rowComponent:R,cellComponent:k,scopeCellComponent:L,expandedKeys:a,onRow:l,getRowKey:n,rowExpandable:i,childrenColumnName:s,indent:V})}):z=t.exports.createElement(jt,{expanded:!0,className:"".concat(d,"-placeholder"),prefixCls:d,component:R,cellComponent:k,colSpan:x.length,isEmpty:!0},u);var C=Ae(x);return t.exports.createElement(Kt.Provider,{value:h.current},t.exports.createElement(m,{className:"".concat(d,"-tbody")},o&&t.exports.createElement(Gn,{prefixCls:d,columnsKey:C,onColumnResize:p}),z))}Xt.displayName="Body";var qn=Ke(Xt),Jn=["expandable"],Vt="RC_TABLE_INTERNAL_COL_DEFINE";function Qn(e){var r=e.expandable,n=ke(e,Jn),o;return"expandable"in e?o=y(y({},n),r):o=n,o.showExpandColumn===!1&&(o.expandIconColumnIndex=-1),o}var Zn=["columnType"];function Yt(e){for(var r=e.colWidths,n=e.columns,o=e.columCount,a=[],l=o||n.length,i=!1,u=l-1;u>=0;u-=1){var s=r[u],c=n&&n[u],d=c&&c[Vt];if(s||d||i){var f=d||{};f.columnType;var p=ke(f,Zn);a.unshift(t.exports.createElement("col",J({key:u,style:{width:s}},p))),i=!0}}return t.exports.createElement("colgroup",null,a)}var er=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function tr(e,r){return t.exports.useMemo(function(){for(var n=[],o=0;o<r;o+=1){var a=e[o];if(a!==void 0)n[o]=a;else return null}return n},[e.join("_"),r])}var Gt=t.exports.forwardRef(function(e,r){var n=e.className,o=e.noData,a=e.columns,l=e.flattenColumns,i=e.colWidths,u=e.columCount,s=e.stickyOffsets,c=e.direction,d=e.fixHeader,f=e.stickyTopOffset,p=e.stickyBottomOffset,x=e.stickyClassName,v=e.onScroll,h=e.maxContentScroll,m=e.children,R=ke(e,er),k=ae(Z,["prefixCls","scrollbarSize","isSticky"]),L=k.prefixCls,z=k.scrollbarSize,C=k.isSticky,w=C&&!d?0:z,F=t.exports.useRef(null),P=t.exports.useCallback(function(M){Lt(r,M),Lt(F,M)},[]);t.exports.useEffect(function(){var M;function S(K){var B=K,Y=B.currentTarget,b=B.deltaX;b&&(v({currentTarget:Y,scrollLeft:Y.scrollLeft+b}),K.preventDefault())}return(M=F.current)===null||M===void 0||M.addEventListener("wheel",S),function(){var K;(K=F.current)===null||K===void 0||K.removeEventListener("wheel",S)}},[]);var V=t.exports.useMemo(function(){return l.every(function(M){return M.width>=0})},[l]),_=l[l.length-1],U={fixed:_?_.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(L,"-cell-scrollbar")}}},T=t.exports.useMemo(function(){return w?[].concat(Q(a),[U]):a},[w,a]),g=t.exports.useMemo(function(){return w?[].concat(Q(l),[U]):l},[w,l]),W=t.exports.useMemo(function(){var M=s.right,S=s.left;return y(y({},s),{},{left:c==="rtl"?[].concat(Q(S.map(function(K){return K+w})),[0]):S,right:c==="rtl"?M:[].concat(Q(M.map(function(K){return K+w})),[0]),isSticky:C})},[w,s,C]),A=tr(i,u);return t.exports.createElement("div",{style:y({overflow:"hidden"},C?{top:f,bottom:p}:{}),ref:P,className:ce(n,H({},x,!!x))},t.exports.createElement("table",{style:{tableLayout:"fixed",visibility:o||A?null:"hidden"}},(!o||!h||V)&&t.exports.createElement(Yt,{colWidths:A?[].concat(Q(A),[w]):[],columCount:u+1,columns:g}),m(y(y({},R),{},{stickyOffsets:W,columns:T,flattenColumns:g}))))});Gt.displayName="FixedHolder";var Ft=t.exports.memo(Gt);function qt(e){var r=e.cells,n=e.stickyOffsets,o=e.flattenColumns,a=e.rowComponent,l=e.cellComponent,i=e.tdCellComponent,u=e.onHeaderRow,s=e.index,c=ae(Z,["prefixCls","direction"]),d=c.prefixCls,f=c.direction,p;u&&(p=u(r.map(function(v){return v.column}),s));var x=Ae(r.map(function(v){return v.column}));return t.exports.createElement(a,p,r.map(function(v,h){var m=v.column,R=at(v.colStart,v.colEnd,o,n,f,m),k;return m&&m.onHeaderCell&&(k=v.column.onHeaderCell(m)),t.exports.createElement(De,J({},v,{scope:m.title?v.colSpan>1?"colgroup":"col":null,ellipsis:m.ellipsis,align:m.align,component:m.title?l:i,prefixCls:d,key:x[h]},R,{additionalProps:k,rowType:"header"}))}))}qt.displayName="HeaderRow";function nr(e){var r=[];function n(i,u){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;r[s]=r[s]||[];var c=u,d=i.filter(Boolean).map(function(f){var p={key:f.key,className:f.className||"",children:f.title,column:f,colStart:c},x=1,v=f.children;return v&&v.length>0&&(x=n(v,c,s+1).reduce(function(h,m){return h+m},0),p.hasSubColumns=!0),"colSpan"in f&&(x=f.colSpan),"rowSpan"in f&&(p.rowSpan=f.rowSpan),p.colSpan=x,p.colEnd=p.colStart+x-1,r[s].push(p),c+=x,x});return d}n(e,0);for(var o=r.length,a=function(u){r[u].forEach(function(s){!("rowSpan"in s)&&!s.hasSubColumns&&(s.rowSpan=o-u)})},l=0;l<o;l+=1)a(l);return r}function rr(e){var r=e.stickyOffsets,n=e.columns,o=e.flattenColumns,a=e.onHeaderRow,l=ae(Z,["prefixCls","getComponent"]),i=l.prefixCls,u=l.getComponent,s=t.exports.useMemo(function(){return nr(n)},[n]),c=u(["header","wrapper"],"thead"),d=u(["header","row"],"tr"),f=u(["header","cell"],"th"),p=u(["header","cell"],"td");return t.exports.createElement(c,{className:"".concat(i,"-thead")},s.map(function(x,v){var h=t.exports.createElement(qt,{key:v,flattenColumns:o,cells:x,stickyOffsets:r,rowComponent:d,cellComponent:f,tdCellComponent:p,onHeaderRow:a,index:v});return h}))}var Bt=Ke(rr),or=["children"],ar=["fixed"];function Jt(e){return En(e).filter(function(r){return t.exports.isValidElement(r)}).map(function(r){var n=r.key,o=r.props,a=o.children,l=ke(o,or),i=y({key:n},l);return a&&(i.children=Jt(a)),i})}function rt(e){return e.filter(function(r){return r&&Ie(r)==="object"}).reduce(function(r,n){var o=n.fixed,a=o===!0?"left":o,l=n.children;return l&&l.length>0?[].concat(Q(r),Q(rt(l).map(function(i){return y({fixed:a},i)}))):[].concat(Q(r),[y(y({},n),{},{fixed:a})])},[])}function lr(e){return e.map(function(r){var n=r.fixed,o=ke(r,ar),a=n;return n==="left"?a="right":n==="right"&&(a="left"),y({fixed:a},o)})}function ir(e,r){var n=e.prefixCls,o=e.columns,a=e.children,l=e.expandable,i=e.expandedKeys,u=e.columnTitle,s=e.getRowKey,c=e.onTriggerExpand,d=e.expandIcon,f=e.rowExpandable,p=e.expandIconColumnIndex,x=e.direction,v=e.expandRowByClick,h=e.columnWidth,m=e.fixed,R=t.exports.useMemo(function(){return o||Jt(a)},[o,a]),k=t.exports.useMemo(function(){if(l){var C,w=R.slice();if(!w.includes(ge)){var F=p||0;F>=0&&w.splice(F,0,ge)}var P=w.indexOf(ge);w=w.filter(function(T,g){return T!==ge||g===P});var V=R[P],_;(m==="left"||m)&&!p?_="left":(m==="right"||m)&&p===R.length?_="right":_=V?V.fixed:null;var U=(C={},H(C,Vt,{className:"".concat(n,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),H(C,"title",u),H(C,"fixed",_),H(C,"className","".concat(n,"-row-expand-icon-cell")),H(C,"width",h),H(C,"render",function(g,W,A){var M=s(W,A),S=i.has(M),K=f?f(W):!0,B=d({prefixCls:n,expanded:S,expandable:K,record:W,onExpand:c});return v?t.exports.createElement("span",{onClick:function(b){return b.stopPropagation()}},B):B}),C);return w.map(function(T){return T===ge?U:T})}return R.filter(function(T){return T!==ge})},[l,R,s,i,d,x]),L=t.exports.useMemo(function(){var C=k;return r&&(C=r(C)),C.length||(C=[{render:function(){return null}}]),C},[r,k,x]),z=t.exports.useMemo(function(){return x==="rtl"?lr(rt(L)):rt(L)},[L,x]);return[L,z]}function sr(e){var r,n=e.prefixCls,o=e.record,a=e.onExpand,l=e.expanded,i=e.expandable,u="".concat(n,"-row-expand-icon");if(!i)return t.exports.createElement("span",{className:ce(u,"".concat(n,"-row-spaced"))});var s=function(d){a(o,d),d.stopPropagation()};return t.exports.createElement("span",{className:ce(u,(r={},H(r,"".concat(n,"-row-expanded"),l),H(r,"".concat(n,"-row-collapsed"),!l),r)),onClick:s})}function cr(e,r,n){var o=[];function a(l){(l||[]).forEach(function(i,u){o.push(r(i,u)),a(i[n])})}return a(e),o}function ur(e,r,n){var o=Qn(e),a=o.expandIcon,l=o.expandedRowKeys,i=o.defaultExpandedRowKeys,u=o.defaultExpandAllRows,s=o.expandedRowRender,c=o.onExpand,d=o.onExpandedRowsChange,f=o.childrenColumnName,p=a||sr,x=f||"children",v=t.exports.useMemo(function(){return s?"row":e.expandable&&e.internalHooks===We&&e.expandable.__PARENT_RENDER_ICON__||r.some(function(C){return C&&Ie(C)==="object"&&C[x]})?"nest":!1},[!!s,r]),h=t.exports.useState(function(){return i||(u?cr(r,n,x):[])}),m=$(h,2),R=m[0],k=m[1],L=t.exports.useMemo(function(){return new Set(l||R||[])},[l,R]),z=t.exports.useCallback(function(C){var w=n(C,r.indexOf(C)),F,P=L.has(w);P?(L.delete(w),F=Q(L)):F=[].concat(Q(L),[w]),k(F),c&&c(!P,C),d&&d(F)},[n,L,r,c,d]);return[o,v,L,p,x,z]}function fr(e,r,n,o){var a=e.map(function(l,i){return at(i,i,e,r,n,o==null?void 0:o[i])});return $t(function(){return a},[a],function(l,i){return!Pt(l,i)})}function Qt(e){var r=t.exports.useRef(e),n=t.exports.useState({}),o=$(n,2),a=o[1],l=t.exports.useRef(null),i=t.exports.useRef([]);function u(s){i.current.push(s);var c=Promise.resolve();l.current=c,c.then(function(){if(l.current===c){var d=i.current,f=r.current;i.current=[],d.forEach(function(p){r.current=p(r.current)}),l.current=null,f!==r.current&&a({})}})}return t.exports.useEffect(function(){return function(){l.current=null}},[]),[r.current,u]}function dr(e){var r=t.exports.useRef(e||null),n=t.exports.useRef();function o(){window.clearTimeout(n.current)}function a(i){r.current=i,o(),n.current=window.setTimeout(function(){r.current=null,n.current=void 0},100)}function l(){return r.current}return t.exports.useEffect(function(){return o},[]),[a,l]}function pr(){var e=t.exports.useState(-1),r=$(e,2),n=r[0],o=r[1],a=t.exports.useState(-1),l=$(a,2),i=l[0],u=l[1],s=t.exports.useCallback(function(c,d){o(c),u(d)},[]);return[n,i,s]}var Ot=bn()?window:null;function mr(e,r){var n=Ie(e)==="object"?e:{},o=n.offsetHeader,a=o===void 0?0:o,l=n.offsetSummary,i=l===void 0?0:l,u=n.offsetScroll,s=u===void 0?0:u,c=n.getContainer,d=c===void 0?function(){return Ot}:c,f=d()||Ot;return t.exports.useMemo(function(){var p=!!e;return{isSticky:p,stickyClassName:p?"".concat(r,"-sticky-holder"):"",offsetHeader:a,offsetSummary:i,offsetScroll:s,container:f}},[s,a,i,r,f])}function xr(e,r,n){var o=t.exports.useMemo(function(){for(var a=[],l=[],i=0,u=0,s=0;s<r;s+=1)if(n==="rtl"){l[s]=u,u+=e[s]||0;var c=r-s-1;a[c]=i,i+=e[c]||0}else{a[s]=i,i+=e[s]||0;var d=r-s-1;l[d]=u,u+=e[d]||0}return{left:a,right:l}},[e,r,n]);return o}function zt(e){var r=e.className,n=e.children;return t.exports.createElement("div",{className:r},n)}var vr=function(r,n){var o,a,l=r.scrollBodyRef,i=r.onScroll,u=r.offsetScroll,s=r.container,c=ae(Z,"prefixCls"),d=((o=l.current)===null||o===void 0?void 0:o.scrollWidth)||0,f=((a=l.current)===null||a===void 0?void 0:a.clientWidth)||0,p=d&&f*(f/d),x=t.exports.useRef(),v=Qt({scrollLeft:0,isHiddenScrollBar:!1}),h=$(v,2),m=h[0],R=h[1],k=t.exports.useRef({delta:0,x:0}),L=t.exports.useState(!1),z=$(L,2),C=z[0],w=z[1],F=function(){w(!1)},P=function(g){g.persist(),k.current.delta=g.pageX-m.scrollLeft,k.current.x=0,w(!0),g.preventDefault()},V=function(g){var W,A=g||((W=window)===null||W===void 0?void 0:W.event),M=A.buttons;if(!C||M===0){C&&w(!1);return}var S=k.current.x+g.pageX-k.current.x-k.current.delta;S<=0&&(S=0),S+p>=f&&(S=f-p),i({scrollLeft:S/f*(d+2)}),k.current.x=g.pageX},_=function(){if(!!l.current){var g=Ht(l.current).top,W=g+l.current.offsetHeight,A=s===window?document.documentElement.scrollTop+window.innerHeight:Ht(s).top+s.clientHeight;W-It()<=A||g>=A-u?R(function(M){return y(y({},M),{},{isHiddenScrollBar:!0})}):R(function(M){return y(y({},M),{},{isHiddenScrollBar:!1})})}},U=function(g){R(function(W){return y(y({},W),{},{scrollLeft:g/d*f||0})})};return t.exports.useImperativeHandle(n,function(){return{setScrollLeft:U}}),t.exports.useEffect(function(){var T=$e(document.body,"mouseup",F,!1),g=$e(document.body,"mousemove",V,!1);return _(),function(){T.remove(),g.remove()}},[p,C]),t.exports.useEffect(function(){var T=$e(s,"scroll",_,!1),g=$e(window,"resize",_,!1);return function(){T.remove(),g.remove()}},[s]),t.exports.useEffect(function(){m.isHiddenScrollBar||R(function(T){var g=l.current;return g?y(y({},T),{},{scrollLeft:g.scrollLeft/g.scrollWidth*g.clientWidth}):T})},[m.isHiddenScrollBar]),d<=f||!p||m.isHiddenScrollBar?null:t.exports.createElement("div",{style:{height:It(),width:f,bottom:u},className:"".concat(c,"-sticky-scroll")},t.exports.createElement("div",{onMouseDown:P,ref:x,className:ce("".concat(c,"-sticky-scroll-bar"),H({},"".concat(c,"-sticky-scroll-bar-active"),C)),style:{width:"".concat(p,"px"),transform:"translate3d(".concat(m.scrollLeft,"px, 0, 0)")}}))},Cr=t.exports.forwardRef(vr),yr=[],hr={};function Rr(){return"No Data"}function Sr(e){var r,n=y({rowKey:"key",prefixCls:"rc-table",emptyText:Rr},e),o=n.prefixCls,a=n.className,l=n.rowClassName,i=n.style,u=n.data,s=n.rowKey,c=n.scroll,d=n.tableLayout,f=n.direction,p=n.title,x=n.footer,v=n.summary,h=n.caption,m=n.id,R=n.showHeader,k=n.components,L=n.emptyText,z=n.onRow,C=n.onHeaderRow,w=n.internalHooks,F=n.transformColumns,P=n.internalRefs,V=n.sticky,_=u||yr,U=!!_.length,T=t.exports.useCallback(function(E,I){return Wt(k,E)||I},[k]),g=t.exports.useMemo(function(){return typeof s=="function"?s:function(E){var I=E&&E[s];return I}},[s]),W=pr(),A=$(W,3),M=A[0],S=A[1],K=A[2],B=ur(n,_,g),Y=$(B,6),b=Y[0],pe=Y[1],Se=Y[2],X=Y[3],Ee=Y[4],O=Y[5],ue=t.exports.useState(0),me=$(ue,2),le=me[0],we=me[1],fe=ir(y(y(y({},n),b),{},{expandable:!!b.expandedRowRender,columnTitle:b.columnTitle,expandedKeys:Se,getRowKey:g,onTriggerExpand:O,expandIcon:X,expandIconColumnIndex:b.expandIconColumnIndex,direction:f}),w===We?F:null),j=$(fe,2),D=j[0],N=j[1],ee=t.exports.useMemo(function(){return{columns:D,flattenColumns:N}},[D,N]),te=t.exports.useRef(),ne=t.exports.useRef(),G=t.exports.useRef(),xe=t.exports.useRef(),ve=t.exports.useRef(),Ue=t.exports.useState(!1),ie=$(Ue,2),Xe=ie[0],Ce=ie[1],de=t.exports.useState(!1),lt=$(de,2),Zt=lt[0],_e=lt[1],en=Qt(new Map),it=$(en,2),tn=it[0],nn=it[1],rn=Ae(N),st=rn.map(function(E){return tn.get(E)}),ct=t.exports.useMemo(function(){return st},[st.join("_")]),Me=xr(ct,N.length,f),re=c&&nt(c.y),se=c&&nt(c.x)||Boolean(b.fixed),Te=se&&N.some(function(E){var I=E.fixed;return I}),ut=t.exports.useRef(),be=mr(V,o),ye=be.isSticky,on=be.offsetHeader,an=be.offsetSummary,ln=be.offsetScroll,sn=be.stickyClassName,cn=be.container,oe=t.exports.useMemo(function(){return v==null?void 0:v(_)},[v,_]),Le=(re||ye)&&t.exports.isValidElement(oe)&&oe.type===je&&oe.props.fixed,Ve,Fe,Ye;re&&(Fe={overflowY:"scroll",maxHeight:c.y}),se&&(Ve={overflowX:"auto"},re||(Fe={overflowY:"hidden"}),Ye={width:(c==null?void 0:c.x)===!0?"auto":c==null?void 0:c.x,minWidth:"100%"});var ft=t.exports.useCallback(function(E,I){Nn(te.current)&&nn(function(q){if(q.get(E)!==I){var he=new Map(q);return he.set(E,I),he}return q})},[]),un=dr(null),dt=$(un,2),fn=dt[0],pt=dt[1];function Be(E,I){!I||(typeof I=="function"?I(E):I.scrollLeft!==E&&(I.scrollLeft=E,I.scrollLeft!==E&&setTimeout(function(){I.scrollLeft=E},0)))}var Ne=kn(function(E){var I=E.currentTarget,q=E.scrollLeft,he=f==="rtl",Re=typeof q=="number"?q:I.scrollLeft,Tt=I||hr;if(!pt()||pt()===Tt){var Ze;fn(Tt),Be(Re,ne.current),Be(Re,G.current),Be(Re,ve.current),Be(Re,(Ze=ut.current)===null||Ze===void 0?void 0:Ze.setScrollLeft)}if(I){var et=I.scrollWidth,tt=I.clientWidth;if(et===tt){Ce(!1),_e(!1);return}he?(Ce(-Re<et-tt),_e(-Re>0)):(Ce(Re>0),_e(Re<et-tt))}}),mt=function(){se&&G.current?Ne({currentTarget:G.current}):(Ce(!1),_e(!1))},dn=function(I){var q=I.width;q!==le&&(mt(),we(te.current?te.current.offsetWidth:q))},xt=t.exports.useRef(!1);t.exports.useEffect(function(){xt.current&&mt()},[se,u,D.length]),t.exports.useEffect(function(){xt.current=!0},[]);var pn=t.exports.useState(0),vt=$(pn,2),Oe=vt[0],Ct=vt[1],mn=t.exports.useState(!0),yt=$(mn,2),ht=yt[0],xn=yt[1];t.exports.useEffect(function(){G.current instanceof Element?Ct(_t(G.current).width):Ct(_t(xe.current).width),xn(Tn("position","sticky"))},[]),t.exports.useEffect(function(){w===We&&P&&(P.body.current=G.current)});var vn=t.exports.useCallback(function(E){return t.exports.createElement(t.exports.Fragment,null,t.exports.createElement(Bt,E),Le==="top"&&t.exports.createElement(Pe,E,oe))},[Le,oe]),Cn=t.exports.useCallback(function(E){return t.exports.createElement(Pe,E,oe)},[oe]),Rt=T(["table"],"table"),ze=t.exports.useMemo(function(){return d||(Te?(c==null?void 0:c.x)==="max-content"?"auto":"fixed":re||ye||N.some(function(E){var I=E.ellipsis;return I})?"fixed":"auto")},[re,Te,N,d,ye]),Ge,qe={colWidths:ct,columCount:N.length,stickyOffsets:Me,onHeaderRow:C,fixHeader:re,scroll:c},yn=t.exports.useMemo(function(){return U?null:typeof L=="function"?L():L},[U,L]),St=t.exports.createElement(qn,{data:_,measureColumnWidth:re||se||ye,expandedKeys:Se,rowExpandable:b.rowExpandable,getRowKey:g,onRow:z,emptyNode:yn,childrenColumnName:Ee}),wt=t.exports.createElement(Yt,{colWidths:N.map(function(E){var I=E.width;return I}),columns:N}),gt=h!=null?t.exports.createElement("caption",{className:"".concat(o,"-caption")},h):void 0,Et=T(["body"]),hn=Mt(n,{data:!0}),bt=Mt(n,{aria:!0});if(re||ye){var Je;typeof Et=="function"?(Je=Et(_,{scrollbarSize:Oe,ref:G,onScroll:Ne}),qe.colWidths=N.map(function(E,I){var q=E.width,he=I===N.length-1?q-Oe:q;return typeof he=="number"&&!Number.isNaN(he)?he:0})):Je=t.exports.createElement("div",{style:y(y({},Ve),Fe),onScroll:Ne,ref:G,className:ce("".concat(o,"-body"))},t.exports.createElement(Rt,J({style:y(y({},Ye),{},{tableLayout:ze})},bt),gt,wt,St,!Le&&oe&&t.exports.createElement(Pe,{stickyOffsets:Me,flattenColumns:N,columns:D},oe)));var Nt=y(y(y({noData:!_.length,maxContentScroll:se&&c.x==="max-content"},qe),ee),{},{direction:f,stickyClassName:sn,onScroll:Ne});Ge=t.exports.createElement(t.exports.Fragment,null,R!==!1&&t.exports.createElement(Ft,J({},Nt,{stickyTopOffset:on,className:"".concat(o,"-header"),ref:ne}),vn),Je,Le&&Le!=="top"&&t.exports.createElement(Ft,J({},Nt,{stickyBottomOffset:an,className:"".concat(o,"-summary"),ref:ve}),Cn),ye&&t.exports.createElement(Cr,{ref:ut,offsetScroll:ln,scrollBodyRef:G,onScroll:Ne,container:cn}))}else Ge=t.exports.createElement("div",{style:y(y({},Ve),Fe),className:ce("".concat(o,"-content")),onScroll:Ne,ref:G},t.exports.createElement(Rt,J({style:y(y({},Ye),{},{tableLayout:ze})},bt),gt,wt,R!==!1&&t.exports.createElement(Bt,J({},qe,ee)),St,oe&&t.exports.createElement(Pe,{stickyOffsets:Me,flattenColumns:N,columns:D},oe)));var Qe=t.exports.createElement("div",J({className:ce(o,a,(r={},H(r,"".concat(o,"-rtl"),f==="rtl"),H(r,"".concat(o,"-ping-left"),Xe),H(r,"".concat(o,"-ping-right"),Zt),H(r,"".concat(o,"-layout-fixed"),d==="fixed"),H(r,"".concat(o,"-fixed-header"),re),H(r,"".concat(o,"-fixed-column"),Te),H(r,"".concat(o,"-scroll-horizontal"),se),H(r,"".concat(o,"-has-fix-left"),N[0]&&N[0].fixed),H(r,"".concat(o,"-has-fix-right"),N[N.length-1]&&N[N.length-1].fixed==="right"),r)),style:i,id:m,ref:te},hn),p&&t.exports.createElement(zt,{className:"".concat(o,"-title")},p(_)),t.exports.createElement("div",{ref:xe,className:"".concat(o,"-container")},Ge),x&&t.exports.createElement(zt,{className:"".concat(o,"-footer")},x(_)));se&&(Qe=t.exports.createElement(ot,{onResize:dn},Qe));var kt=fr(N,Me,f,D),Rn=t.exports.useMemo(function(){return{prefixCls:o,getComponent:T,scrollbarSize:Oe,direction:f,fixedInfoList:kt,isSticky:ye,supportSticky:ht,componentWidth:le,fixHeader:re,fixColumn:Te,horizonScroll:se,tableLayout:ze,rowClassName:l,expandedRowClassName:b.expandedRowClassName,expandIcon:X,expandableType:pe,expandRowByClick:b.expandRowByClick,expandedRowRender:b.expandedRowRender,onTriggerExpand:O,expandIconColumnIndex:b.expandIconColumnIndex,indentSize:b.indentSize,allColumnsFixedLeft:N.every(function(E){return E.fixed==="left"}),columns:D,flattenColumns:N,onColumnResize:ft,hoverStartRow:M,hoverEndRow:S,onHover:K}},[o,T,Oe,f,kt,ye,ht,le,re,Te,se,ze,l,b.expandedRowClassName,X,pe,b.expandRowByClick,b.expandedRowRender,O,b.expandIconColumnIndex,b.indentSize,D,N,ft,M,S,K]);return t.exports.createElement(Z.Provider,{value:Rn},Qe)}function wr(e){return gn(Sr,e)}var He=wr();He.EXPAND_COLUMN=ge;He.INTERNAL_HOOKS=We;He.Column=jn;He.ColumnGroup=Un;He.Summary=Dn;export{ge as E,Dn as F,Vt as I,We as a,Jt as c,wr as g};
