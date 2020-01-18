(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5kYI":function(l,n,t){"use strict";t.r(n);var e={};t.r(e),t.d(e,"loadGame",(function(){return M})),t.d(e,"loadGameSuccess",(function(){return $})),t.d(e,"loadGameFailure",(function(){return q})),t.d(e,"guessLetter",(function(){return z})),t.d(e,"guessLetterSuccess",(function(){return G})),t.d(e,"guessLetterFailure",(function(){return L}));var a=t("8Y7J");class i{}var r=t("pMnS"),o=t("SVse"),u=t("tRTW"),b=t("HsOI"),c=t("kNGD"),s=t("IP0z"),d=t("s7LF"),m=t("Xd0L"),g=t("/HVE"),p=t("omvX"),f=t("lzlj"),h=t("igqZ"),C=t("MBfO"),y=t("8P0U"),O=t("FVPZ"),v=t("cUpR"),j=a.pb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function x(l){return a.Jb(2,[(l()(),a.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),a.Bb(null,0)],null,null)}var _=a.pb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function k(l){return a.Jb(2,[(l()(),a.rb(0,0,null,null,1,"figure",[["class","mat-figure"]],null,null,null,null,null)),a.Bb(null,0)],null,null)}var A=t("bujt"),I=t("Fwaw"),w=t("5GAg"),P=t("DQLy");const M=Object(P.u)("[Play] Load game",Object(P.A)()),$=Object(P.u)("[Play] Load game success",Object(P.A)()),q=Object(P.u)("[Play] Load game failure",Object(P.A)()),z=Object(P.u)("[Play] Guess letter",Object(P.A)()),G=Object(P.u)("[Play] Guess letter success",Object(P.A)()),L=Object(P.u)("[Play] Guess letter failure",Object(P.A)()),S=Object(P.w)({busy:!1,game:null,error:""},Object(P.z)(e.loadGame,l=>Object.assign({},l,{busy:!0,error:""})),Object(P.z)(e.loadGameSuccess,(l,n)=>Object.assign({},l,{busy:!1,game:n})),Object(P.z)(e.loadGameFailure,(l,n)=>Object.assign({},l,{busy:!1,error:n.error})),Object(P.z)(e.guessLetter,l=>Object.assign({},l,{busy:!0,error:""})),Object(P.z)(e.guessLetterSuccess,(l,n)=>Object.assign({},l,{busy:!1,game:n})),Object(P.z)(e.guessLetterFailure,(l,n)=>Object.assign({},l,{busy:!1,error:n.error})));function D(l,n){return S(l,n)}const F=Object(P.v)("play"),J=Object(P.y)(F,({busy:l})=>l),N=Object(P.y)(F,({error:l})=>l),K=Object(P.y)(F,({game:l})=>l);var H=t("lJxs"),B=t("mGe4");class E{constructor(l){this.store=l,this.chars=B.a}ngOnInit(){this.busy$=this.store.pipe(Object(P.B)(J)),this.error$=this.store.pipe(Object(P.B)(N)),this.game$=this.store.pipe(Object(P.B)(K)),this.charsUsed$=this.game$.pipe(Object(H.a)(l=>new Set(l?l.charsUsed.split(""):null))),this.puzzle$=this.game$.pipe(Object(H.a)(l=>l?l.puzzle.map(l=>null===l?"_":l).join(" "):"")),this.loadGame()}loadGame(l=!1){this.store.dispatch(e.loadGame({override:l}))}makeGuess(l){this.store.dispatch(e.guessLetter({character:l}))}}var Z=a.pb({encapsulation:0,styles:[[".play-container[_ngcontent-%COMP%]{max-width:550px;margin:50px auto}.play-container[_ngcontent-%COMP%]   .puzzle[_ngcontent-%COMP%]{text-align:center;line-height:1.5;font-size:40px;margin:10px 0}.play-container[_ngcontent-%COMP%]   .delimiter[_ngcontent-%COMP%]{padding-bottom:4px;border-bottom:1px solid #dfdfdf;width:100%}.play-container[_ngcontent-%COMP%]   .char-button[_ngcontent-%COMP%], .play-container[_ngcontent-%COMP%]   .load-game-btn[_ngcontent-%COMP%]{text-transform:uppercase}.play-container[_ngcontent-%COMP%]   .load-game-btn[_ngcontent-%COMP%]{margin:5px 0}.play-container[_ngcontent-%COMP%]   .button-highlighted[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.play-container[_ngcontent-%COMP%]   .fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.play-container[_ngcontent-%COMP%]   .game-lost[_ngcontent-%COMP%], .play-container[_ngcontent-%COMP%]   .game-won[_ngcontent-%COMP%]{color:#fff;margin:5px 0}.play-container[_ngcontent-%COMP%]   .game-won[_ngcontent-%COMP%]{background-color:#4caf50}.play-container[_ngcontent-%COMP%]   .game-lost[_ngcontent-%COMP%]{background-color:#2196f3}.play-container[_ngcontent-%COMP%]   .game-placeholder[_ngcontent-%COMP%]{background-color:#eee;width:100%;height:113px}.play-container[_ngcontent-%COMP%]   .area-disabled[_ngcontent-%COMP%]{pointer-events:none}.play-container[_ngcontent-%COMP%]   .area-disabled[_ngcontent-%COMP%]   .char-button[_ngcontent-%COMP%]{background-color:#dfdfdf}.play-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:10px 0;padding:10px;color:#fff;border-radius:5px;background-color:red}"]],data:{}});function U(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,2,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),a.Hb(1,null,["",""])),a.Db(131072,o.b,[a.h])],null,(function(l,n){var t=n.component;l(n,1,0,a.Ib(n,1,0,a.Cb(n,2).transform(t.error$)))}))}function R(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,0,"div",[["class","game-placeholder"]],null,null,null,null,null))],null,null)}function Y(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,20,"mat-chip-list",[["class","mat-chip-list"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],(function(l,n,t){var e=!0;return"focus"===n&&(e=!1!==a.Cb(l,2).focus()&&e),"blur"===n&&(e=!1!==a.Cb(l,2)._blur()&&e),"keydown"===n&&(e=!1!==a.Cb(l,2)._keydown(t)&&e),e}),u.b,u.a)),a.Eb(6144,null,b.c,null,[c.c]),a.qb(2,1556480,null,1,c.c,[a.k,a.h,[2,s.b],[2,d.o],[2,d.h],m.a,[8,null]],null,null),a.Fb(603979776,1,{chips:1}),(l()(),a.rb(4,0,null,0,8,"mat-chip",[["class","mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[2,"_mat-animation-noopable",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==a.Cb(l,5)._handleClick(t)&&e),"keydown"===n&&(e=!1!==a.Cb(l,5)._handleKeydown(t)&&e),"focus"===n&&(e=!1!==a.Cb(l,5).focus()&&e),"blur"===n&&(e=!1!==a.Cb(l,5)._blur()&&e),e}),null,null)),a.qb(5,147456,[[1,4]],3,c.b,[a.k,a.x,g.a,[2,m.d],[2,p.a],a.h],{color:[0,"color"],selected:[1,"selected"]},null),a.Fb(603979776,2,{avatar:0}),a.Fb(603979776,3,{trailingIcon:0}),a.Fb(603979776,4,{removeIcon:0}),a.Db(131072,o.b,[a.h]),a.Db(131072,o.b,[a.h]),(l()(),a.Hb(11,null,[" Attempts Left: "," "])),a.Db(131072,o.b,[a.h]),(l()(),a.rb(13,0,null,0,0,"span",[["class","fill-remaining-space"]],null,null,null,null,null)),(l()(),a.rb(14,0,null,0,6,"mat-chip",[["class","mat-chip"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[2,"_mat-animation-noopable",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==a.Cb(l,15)._handleClick(t)&&e),"keydown"===n&&(e=!1!==a.Cb(l,15)._handleKeydown(t)&&e),"focus"===n&&(e=!1!==a.Cb(l,15).focus()&&e),"blur"===n&&(e=!1!==a.Cb(l,15)._blur()&&e),e}),null,null)),a.qb(15,147456,[[1,4]],3,c.b,[a.k,a.x,g.a,[2,m.d],[2,p.a],a.h],null,null),a.Fb(603979776,5,{avatar:0}),a.Fb(603979776,6,{trailingIcon:0}),a.Fb(603979776,7,{removeIcon:0}),(l()(),a.Hb(19,null,["Score: ",""])),a.Db(131072,o.b,[a.h]),(l()(),a.rb(21,0,null,null,2,"div",[["class","puzzle"]],null,null,null,null,null)),(l()(),a.Hb(22,null,["",""])),a.Db(131072,o.b,[a.h])],(function(l,n){var t,e,i=n.component;l(n,2,0),l(n,5,0,0===(null==(t=a.Ib(n,5,0,a.Cb(n,9).transform(i.game$)))?null:t.attemptsLeft)?"accent":"primary",0===(null==(e=a.Ib(n,5,1,a.Cb(n,10).transform(i.game$)))?null:e.attemptsLeft))}),(function(l,n){var t,e,i=n.component;l(n,0,1,[a.Cb(n,2).disabled?null:a.Cb(n,2)._tabIndex,a.Cb(n,2)._ariaDescribedby||null,a.Cb(n,2).required.toString(),a.Cb(n,2).disabled.toString(),a.Cb(n,2).errorState,a.Cb(n,2).multiple,a.Cb(n,2).role,a.Cb(n,2).disabled,a.Cb(n,2).errorState,a.Cb(n,2).required,a.Cb(n,2).ariaOrientation,a.Cb(n,2)._uid]),l(n,4,0,a.Cb(n,5).disabled?null:-1,a.Cb(n,5).selected,a.Cb(n,5).avatar,a.Cb(n,5).trailingIcon||a.Cb(n,5).removeIcon,a.Cb(n,5).disabled,a.Cb(n,5)._animationsDisabled,a.Cb(n,5).disabled||null,a.Cb(n,5).disabled.toString(),a.Cb(n,5).ariaSelected),l(n,11,0,null==(t=a.Ib(n,11,0,a.Cb(n,12).transform(i.game$)))?null:t.attemptsLeft),l(n,14,0,a.Cb(n,15).disabled?null:-1,a.Cb(n,15).selected,a.Cb(n,15).avatar,a.Cb(n,15).trailingIcon||a.Cb(n,15).removeIcon,a.Cb(n,15).disabled,a.Cb(n,15)._animationsDisabled,a.Cb(n,15).disabled||null,a.Cb(n,15).disabled.toString(),a.Cb(n,15).ariaSelected),l(n,19,0,null==(e=a.Ib(n,19,0,a.Cb(n,20).transform(i.game$)))?null:e.score),l(n,22,0,a.Ib(n,22,0,a.Cb(n,23).transform(i.puzzle$)))}))}function V(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,3,"mat-card",[["class","game-won mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),a.qb(1,49152,null,0,h.a,[[2,p.a]],null,null),(l()(),a.Hb(2,0,["Congratulations! Your score is ",""])),a.Db(131072,o.b,[a.h])],null,(function(l,n){var t,e=n.component;l(n,0,0,"NoopAnimations"===a.Cb(n,1)._animationMode),l(n,2,0,null==(t=a.Ib(n,2,0,a.Cb(n,3).transform(e.game$)))?null:t.score)}))}function T(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,2,"mat-card",[["class","game-lost mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),a.qb(1,49152,null,0,h.a,[[2,p.a]],null,null),(l()(),a.Hb(-1,0,["Sorry, you have lost"]))],null,(function(l,n){l(n,0,0,"NoopAnimations"===a.Cb(n,1)._animationMode)}))}function W(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,4,"div",[["class","game-over"]],null,null,null,null,null)),(l()(),a.gb(16777216,null,null,1,null,V)),a.qb(2,16384,null,0,o.j,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(16777216,null,null,1,null,T)),a.qb(4,16384,null,0,o.j,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"win"===n.context.$implicit),l(n,4,0,"loss"===n.context.$implicit)}),null)}function X(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),a.qb(1,4374528,null,0,y.b,[a.k,a.x,[2,p.a],[2,y.a]],{mode:[0,"mode"]},null)],(function(l,n){l(n,1,0,"indeterminate")}),(function(l,n){l(n,0,0,"indeterminate"===a.Cb(n,1).mode||"query"===a.Cb(n,1).mode?null:a.Cb(n,1).value,a.Cb(n,1).mode,a.Cb(n,1)._isNoopAnimation)}))}function Q(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,0,"div",[["class","delimiter"]],null,null,null,null,null))],null,null)}function ll(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,5,"mat-grid-tile",[["class","mat-grid-tile"]],null,null,null,k,_)),a.qb(1,49152,[[8,4]],0,O.c,[a.k,[2,O.e]],null,null),(l()(),a.rb(2,0,null,0,3,"button",[["class","char-button"],["color","primary"],["mat-fab",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.makeGuess(l.context.$implicit)&&e),e}),A.b,A.a)),a.qb(3,180224,null,0,I.b,[a.k,w.b,[2,p.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),a.Db(131072,o.b,[a.h]),(l()(),a.Hb(5,0,["",""]))],(function(l,n){var t=n.component,e=null;l(n,3,0,null==(e=a.Ib(n,3,0,a.Cb(n,4).transform(t.charsUsed$)))?null:e.has(n.context.$implicit),"primary")}),(function(l,n){l(n,2,0,a.Cb(n,3).disabled||null,"NoopAnimations"===a.Cb(n,3)._animationMode),l(n,5,0,n.context.$implicit)}))}function nl(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,30,"div",[["class","play-container"]],null,null,null,null,null)),(l()(),a.rb(1,0,null,null,29,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,f.b,f.a)),a.qb(2,49152,null,0,h.a,[[2,p.a]],null,null),(l()(),a.gb(16777216,null,0,2,null,U)),a.qb(4,16384,null,0,o.j,[a.N,a.K],{ngIf:[0,"ngIf"]},null),a.Db(131072,o.b,[a.h]),(l()(),a.gb(16777216,null,0,2,null,R)),a.qb(7,16384,null,0,o.j,[a.N,a.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),a.Db(131072,o.b,[a.h]),(l()(),a.gb(0,[["gameBlock",2]],0,0,null,Y)),(l()(),a.gb(16777216,null,0,2,null,W)),a.qb(11,16384,null,0,o.j,[a.N,a.K],{ngIf:[0,"ngIf"]},null),a.Db(131072,o.b,[a.h]),(l()(),a.rb(13,0,null,0,5,"button",[["class","load-game-btn"],["color","primary"],["mat-stroked-button",""]],[[2,"mat-elevation-z4",null],[2,"button-highlighted",null],[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.loadGame(!0)&&e),e}),A.b,A.a)),a.qb(14,180224,null,0,I.b,[a.k,w.b,[2,p.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),a.Db(131072,o.b,[a.h]),a.Db(131072,o.b,[a.h]),a.Db(131072,o.b,[a.h]),(l()(),a.Hb(-1,0,[" Load new word "])),(l()(),a.gb(16777216,null,0,2,null,X)),a.qb(20,16384,null,0,o.j,[a.N,a.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),a.Db(131072,o.b,[a.h]),(l()(),a.gb(0,[["delimiterBlock",2]],0,0,null,Q)),(l()(),a.rb(23,0,null,0,7,"mat-grid-list",[["class","mat-grid-list"],["cols","6"]],[[2,"area-disabled",null]],null,null,x,j)),a.Eb(6144,null,O.e,null,[O.a]),a.qb(25,2211840,null,1,O.a,[a.k,[2,s.b]],{cols:[0,"cols"]},null),a.Fb(603979776,8,{_tiles:1}),a.Db(131072,o.b,[a.h]),a.Db(131072,o.b,[a.h]),(l()(),a.gb(16777216,null,0,1,null,ll)),a.qb(30,278528,null,0,o.i,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t,e=n.component;l(n,4,0,a.Ib(n,4,0,a.Cb(n,5).transform(e.error$))),l(n,7,0,a.Ib(n,7,0,a.Cb(n,8).transform(e.busy$)),a.Cb(n,9)),l(n,11,0,null==(t=a.Ib(n,11,0,a.Cb(n,12).transform(e.game$)))?null:t.gameOver),l(n,14,0,a.Ib(n,14,0,a.Cb(n,15).transform(e.busy$)),"primary"),l(n,20,0,a.Ib(n,20,0,a.Cb(n,21).transform(e.busy$)),a.Cb(n,22)),l(n,25,0,"6"),l(n,30,0,e.chars)}),(function(l,n){var t,e,i=n.component;l(n,1,0,"NoopAnimations"===a.Cb(n,2)._animationMode),l(n,13,0,null==(t=a.Ib(n,13,0,a.Cb(n,16).transform(i.game$)))?null:t.gameOver,null==(e=a.Ib(n,13,1,a.Cb(n,17).transform(i.game$)))?null:e.gameOver,a.Cb(n,14).disabled||null,"NoopAnimations"===a.Cb(n,14)._animationMode);var r=null;l(n,23,0,a.Ib(n,23,0,a.Cb(n,27).transform(i.busy$))||(null==(r=a.Ib(n,23,0,a.Cb(n,28).transform(i.game$)))?null:r.gameOver))}))}function tl(l){return a.Jb(0,[(l()(),a.rb(0,0,null,null,1,"app-play-container",[],null,null,null,nl,Z)),a.qb(1,114688,null,0,E,[P.n],null,null)],(function(l,n){l(n,1,0)}),null)}var el=a.nb("app-play-container",E,tl,{},{},[]),al=t("POq0"),il=t("iInd");const rl={title:"Play"};class ol{}var ul=t("BzsH"),bl=t("oapL"),cl=t("ZwOa"),sl=t("hctd"),dl=t("JIr8");class ml{constructor(l){this.http=l}guess(l){return this.http.post("/guess",{character:l})}loadGame(l){return l?this.http.post("/game",void 0):this.http.get("/game").pipe(Object(dl.a)(()=>this.http.post("/game",void 0)))}}var gl=t("IheW"),pl=t("5+tZ"),fl=t("Yml6"),hl=t("LRne");class Cl{constructor(l,n,t){this.actions$=l,this.store=n,this.playService=t,this.loadGame$=Object(fl.e)(()=>this.actions$.pipe(Object(fl.f)(e.loadGame),Object(pl.a)(({override:l})=>this.playService.loadGame(l).pipe(Object(H.a)(l=>e.loadGameSuccess(l)),Object(dl.a)(({error:l})=>Object(hl.a)(e.loadGameFailure({error:l}))))))),this.guess$=Object(fl.e)(()=>this.actions$.pipe(Object(fl.f)(e.guessLetter),Object(pl.a)(({character:l})=>this.playService.guess(l).pipe(Object(H.a)(l=>e.guessLetterSuccess(l)),Object(dl.a)(({error:l})=>Object(hl.a)(e.guessLetterFailure({error:l})))))))}}var yl=t("dvZr");t.d(n,"PlayModuleNgFactory",(function(){return Ol}));var Ol=a.ob(i,[],(function(l){return a.zb([a.Ab(512,a.j,a.Z,[[8,[r.a,el]],[3,a.j],a.v]),a.Ab(4608,o.l,o.k,[a.s,[2,o.x]]),a.Ab(4608,m.a,m.a,[]),a.Ab(4608,al.c,al.c,[]),a.Ab(1073742336,o.c,o.c,[]),a.Ab(1073742336,il.q,il.q,[[2,il.w],[2,il.o]]),a.Ab(1073742336,ol,ol,[]),a.Ab(1073742336,s.a,s.a,[]),a.Ab(1073742336,m.e,m.e,[[2,m.b],[2,v.f]]),a.Ab(1073742336,ul.b,ul.b,[]),a.Ab(1073742336,h.d,h.d,[]),a.Ab(1073742336,c.d,c.d,[]),a.Ab(1073742336,g.b,g.b,[]),a.Ab(1073742336,m.h,m.h,[]),a.Ab(1073742336,I.c,I.c,[]),a.Ab(1073742336,al.d,al.d,[]),a.Ab(1073742336,b.d,b.d,[]),a.Ab(1073742336,bl.c,bl.c,[]),a.Ab(1073742336,cl.b,cl.b,[]),a.Ab(1073742336,y.c,y.c,[]),a.Ab(1073742336,m.f,m.f,[]),a.Ab(1073742336,O.b,O.b,[]),a.Ab(1073742336,sl.a,sl.a,[]),a.Ab(1024,P.L,(function(){return[{}]}),[]),a.Ab(1024,P.j,(function(){return[{key:"play",reducerFactory:P.s,metaReducers:[],initialState:void 0}]}),[]),a.Ab(1024,P.M,P.S,[a.p,P.L,P.j]),a.Ab(1024,P.K,(function(){return[D]}),[]),a.Ab(1024,P.N,(function(l){return[l]}),[P.K]),a.Ab(1024,P.b,(function(l,n,t){return[P.T(l,n,t)]}),[a.p,P.K,P.N]),a.Ab(1073873408,P.o,P.o,[P.M,P.b,P.g,P.p]),a.Ab(512,ml,ml,[gl.c]),a.Ab(512,Cl,Cl,[fl.a,P.n,ml]),a.Ab(1024,fl.k,(function(l){return[fl.g(l)]}),[Cl]),a.Ab(1073742336,fl.c,fl.c,[fl.d,fl.k,[2,P.p],[2,P.o]]),a.Ab(1073742336,i,i,[]),a.Ab(1024,il.m,(function(){return[[{path:"",component:E,data:rl}]]}),[]),a.Ab(256,c.a,{separatorKeyCodes:[yl.f]},[])])}))},mGe4:function(l){l.exports=JSON.parse('{"a":["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]}')}}]);