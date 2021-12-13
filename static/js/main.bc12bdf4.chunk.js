(this["webpackJsonpredux-dodge"]=this["webpackJsonpredux-dodge"]||[]).push([[0],{30:function(e,t,n){e.exports=n(56)},35:function(e,t,n){},36:function(e,t,n){e.exports=n.p+"static/media/ARCADECLASSIC.5a1a4516.woff"},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r,a,c,u=n(1),s=n.n(u),o=n(16),i=n.n(o),b=(n(35),n(36),n(11)),l=n(29),f=n(5),O=n(14),m=n(10),d=n(7),j=n(8),x=Object(f.b)("game/START"),p=Object(f.b)("game/PAUSE"),E=Object(f.b)("game/GAME_OVER"),v=Object(f.b)("game/SCORE"),h=Object(f.b)("game/SET_HIGHSCORE"),y=Object(f.b)("game/RESET"),g={score:0,highscore:window.localStorage.getItem("highscore")||0,status:"NOT_STARTED"},k=Object(f.c)(g,(r={},Object(d.a)(r,x,(function(e){return Object(j.a)({},e,{status:"GAME_ACTIVE"})})),Object(d.a)(r,p,(function(e){return Object(j.a)({},e,{status:"GAME_PAUSED"})})),Object(d.a)(r,E,(function(e){return Object(j.a)({},e,{status:"GAME_OVER"})})),Object(d.a)(r,v,(function(e,t){return Object(j.a)({},e,{score:t.payload})})),Object(d.a)(r,h,(function(e,t){return window.localStorage.setItem("highscore",t.payload),Object(j.a)({},e,{highscore:t.payload})})),Object(d.a)(r,y,(function(e){return Object(j.a)({},g,{highscore:e.highscore})})),r)),w=Object(f.b)("player/MOVE"),A=600,S=600,R=40,G=40,M=10,T=50,C={pos:{x:(A-R)/2,y:(S-R)/2}},_=Object(f.c)(C,(a={},Object(d.a)(a,w,(function(e,t){return Object(j.a)({},e,{pos:{x:t.payload.x,y:t.payload.y}})})),Object(d.a)(a,y,(function(){return C})),a)),D=Object(f.b)("enemies/ADD"),I=Object(f.b)("enemies/REMOVE"),U=Object(f.b)("enemies/MOVE_ENEMY"),V=Object(f.b)("enemies/SET_INTERVAL"),N={list:[],interval:1e3},P=Object(f.c)(N,(c={},Object(d.a)(c,D,(function(e,t){e.list.push({id:t.payload.id,direction:t.payload.direction,pos:{x:t.payload.x,y:t.payload.y}})})),Object(d.a)(c,I,(function(e,t){return Object(j.a)({},e,{list:e.list.filter((function(e){return e.id!==t.payload.id}))})})),Object(d.a)(c,U,(function(e,t){e.list.filter((function(e){return e.id===t.payload.id}))[0].pos={x:t.payload.x,y:t.payload.y}})),Object(d.a)(c,V,(function(e,t){e.interval=t.payload})),Object(d.a)(c,y,(function(){return N})),c)),L=Object(m.combineReducers)({game:k,player:_,enemies:P}),H=n(6),F=n.n(H),J=n(3),B=n(23),Y=function(e){return e.game.score},q=function(e){return e.game.highscore},z=function(e){return e.game.status},K=Object(B.a)([z],(function(e){return"NOT_STARTED"!==e})),Q=Object(B.a)([z],(function(e){return"GAME_ACTIVE"===e})),W=Object(B.a)([z],(function(e){return"GAME_PAUSED"===e})),X=Object(B.a)([z],(function(e){return"GAME_OVER"===e})),Z=Object(B.a)([function(e){return e.player}],(function(e){return e.pos})),$=F.a.mark(te),ee=function(e){var t=Object(j.a)({},e);return Object(O.c)((function(e){var n=function(n){var r=Object(j.a)({},t);switch(n.code){case"ArrowUp":t.y>=G&&(t.y-=G);break;case"ArrowRight":t.x<=A-R-G&&(t.x+=G);break;case"ArrowDown":t.y<=S-R-G&&(t.y+=G);break;case"ArrowLeft":t.x>=G&&(t.x-=G);break;case"Escape":case"Space":return e(O.a);default:return}if(t.x!==r.x||t.y!==r.y)return e(t)};return document.addEventListener("keydown",n),function(){return document.removeEventListener("keydown",n)}}))};function te(){var e,t,n;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(J.g)(Z);case 2:return e=r.sent,r.next=5,Object(J.b)(ee,e);case 5:t=r.sent,r.prev=6;case 7:return r.next=10,Object(J.h)(t);case 10:return n=r.sent,r.next=13,Object(J.f)(w(n));case 13:r.next=7;break;case 15:return r.prev=15,r.next=18,Object(J.g)(Q);case 18:if(!r.sent){r.next=22;break}return r.next=22,Object(J.f)(p());case 22:return r.finish(15);case 23:case"end":return r.stop()}}),$,null,[[6,,15,23]])}var ne=n(28),re=n.n(ne),ae=function(e){return e.enemies.interval},ce=function(e){return e.enemies.list},ue=function(e,t){return Object(B.a)([ce],(function(e){return e.filter((function(e){return e.id===t}))[0]}))(e)},se=Object(B.a)([ue],(function(e){return e.pos})),oe=Object(B.a)([ce],(function(e){return e.map((function(e){return e.pos}))})),ie=Object(B.a)([ce],(function(e){return e.map((function(e){return e.id}))})),be=F.a.mark(je),le=F.a.mark(xe),fe=F.a.mark(pe),Oe=F.a.mark(Ee),me=function(e,t){var n=Object(j.a)({},e);return Object(O.c)((function(e){var r=setInterval((function(){if(r=n.x,a=n.y,r<-R||r>A||a<-R||a>S)e(O.a);else{switch(t){case"U":n.y-=M;break;case"R":n.x+=M;break;case"D":n.y+=M;break;case"L":n.x-=M}e(n)}var r,a}),T);return function(){clearInterval(r)}}))},de=function(){var e=["U","R","D","L"][Math.round(3*Math.random())],t=function(){return R*Math.round((A-R)/R*Math.random())},n=function(){return R*Math.round((S-R)/R*Math.random())};switch(e){case"U":return{x:t(),y:S,direction:e};case"R":return{x:-R,y:n(),direction:e};case"D":return{x:t(),y:-R,direction:e};case"L":return{x:A,y:n(),direction:e};default:return{x:0,y:0}}};function je(){var e,t,n,r,a,c,u,s,o,i,b=arguments;return F.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=b.length>0&&void 0!==b[0]?b[0]:re()(),l.next=3,Object(J.g)(ue,e);case 3:if(l.sent){l.next=7;break}return t=de(),n=t.x,r=t.y,a=t.direction,l.next=7,Object(J.f)(D({id:e,x:n,y:r,direction:a}));case 7:return l.next=9,Object(J.g)(ue,e);case 9:c=l.sent,u=c.pos,s=c.direction,o=me(u,s),l.prev=13;case 14:return l.next=17,Object(J.h)(o);case 17:return i=l.sent,l.next=20,Object(J.f)(U({id:e,x:i.x,y:i.y}));case 20:l.next=14;break;case 22:return l.prev=22,l.next=25,Object(J.g)(Q);case 25:if(!l.sent){l.next=28;break}return l.next=28,Object(J.f)(I({id:e}));case 28:return l.finish(22);case 29:case"end":return l.stop()}}),be,null,[[13,,22,29]])}function xe(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(J.g)(ae);case 3:return e=t.sent,t.next=6,Object(J.d)(2e3);case 6:return t.next=8,Object(J.f)(V(.8*e));case 8:t.next=0;break;case 10:case"end":return t.stop()}}),le)}function pe(){var e,t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.g)(ce);case 2:if((e=n.sent).length){n.next=8;break}return n.next=6,Object(J.e)(je);case 6:n.next=10;break;case 8:return n.next=10,Object(J.a)(e.map((function(e){return Object(J.e)(je,e.id)})));case 10:return n.next=13,Object(J.g)(ae);case 13:return t=n.sent,n.next=16,Object(J.d)(t);case 16:return n.next=18,Object(J.e)(je);case 18:n.next=10;break;case 20:case"end":return n.stop()}}),fe)}function Ee(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.e)(xe);case 2:return e.next=4,Object(J.b)(pe);case 4:case"end":return e.stop()}}),Oe)}var ve=F.a.mark(ge),he=F.a.mark(ke),ye=function(e,t){return t.reduce((function(t,n){return t||function(e,t){var n=e.x,r=e.y,a=t.x,c=t.y;return Math.abs(n-a)<R&&Math.abs(r-c)<R}(n,e)}),!1)};function ge(){var e,t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.g)(Z);case 2:return e=n.sent,n.next=5,Object(J.g)(oe);case 5:return t=n.sent,n.next=8,Object(J.b)(ye,e,t);case 8:if(!n.sent){n.next=12;break}return n.next=12,Object(J.f)(E());case 12:case"end":return n.stop()}}),ve)}function ke(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(J.d)(30);case 3:return e.next=5,Object(J.b)(ge);case 5:e.next=0;break;case 7:case"end":return e.stop()}}),he)}var we=F.a.mark(Se),Ae=F.a.mark(Re);function Se(){var e,t,n;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0;case 1:return r.next=4,Object(J.g)(Y);case 4:return e=r.sent,r.next=7,Object(J.d)(1e3);case 7:return r.next=9,Object(J.f)(v(e+10));case 9:r.next=1;break;case 11:return r.prev=11,r.next=14,Object(J.g)(Y);case 14:return t=r.sent,r.next=17,Object(J.g)(q);case 17:if(n=r.sent,!(t>n)){r.next=21;break}return r.next=21,Object(J.f)(h(t));case 21:return r.finish(11);case 22:case"end":return r.stop()}}),we,null,[[0,,11,22]])}function Re(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(J.h)("game/START");case 3:return t.next=5,Object(J.a)([Object(J.e)(te),Object(J.e)(Ee),Object(J.e)(ke),Object(J.e)(Se)]);case 5:return e=t.sent,t.next=8,Object(J.h)(["game/GAME_OVER","game/PAUSE"]);case 8:return t.next=10,Object(J.c)(e);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),Ae)}n(50);var Ge=function(e){var t=e.pos,n=e.type;return s.a.createElement("div",{className:"cube ".concat(n),style:{left:t.x,top:t.y,height:R,width:R}})},Me=s.a.memo(Object(b.b)((function(e){return{pos:Z(e)}}))((function(e){var t=e.pos;return s.a.createElement(Ge,{type:"player",pos:t})}))),Te=s.a.memo(Object(b.b)((function(e,t){return{pos:se(e,t.id)}}))((function(e){var t=e.pos;return s.a.createElement(Ge,{type:"enemy",pos:t})}))),Ce=s.a.memo(Object(b.b)((function(e){return{enemyIds:ie(e)}}))((function(e){return e.enemyIds.map((function(e){return s.a.createElement(Te,{key:e,id:e})}))}))),_e=(n(51),function(e){var t=e.children;return s.a.createElement("div",{className:"overlay"},t)}),De=(n(52),{startGame:x,resetGame:y}),Ie=Object(b.b)((function(e){return{isGameStarted:K(e),isGameActive:Q(e),isGamePaused:W(e),isGameOver:X(e),score:Y(e)}}),De)((function(e){var t=e.startGame,n=e.resetGame,r=e.isGameStarted,a=e.isGameActive,c=e.isGamePaused,u=e.isGameOver,o=e.score;return s.a.createElement("div",{className:"board",style:{height:S,width:A}},!a&&(r?c?s.a.createElement(s.a.Fragment,null,s.a.createElement(_e,null,s.a.createElement("h1",null,"GAME PAUSED"),s.a.createElement("button",{onClick:function(){return t()}},"RESUME"),s.a.createElement("button",{onClick:function(){return n()}},"RESTART"))):u?s.a.createElement(_e,null,s.a.createElement("h1",null,"GAME OVER"),s.a.createElement("h2",null,"SCORE: ",o),s.a.createElement("button",{onClick:function(){return n()}},"Play again")):void 0:s.a.createElement(_e,null,s.a.createElement("button",{onClick:function(){return t()}},"Start game"))),r&&s.a.createElement(s.a.Fragment,null,s.a.createElement(Me,null),s.a.createElement(Ce,null)))})),Ue=(n(53),Object(b.b)((function(e){return{score:Y(e),highscore:q(e)}}))((function(e){var t=e.score,n=e.highscore;return s.a.createElement("div",{className:"score-card"},s.a.createElement("h3",null,"Score: ",t),s.a.createElement("h3",null,"High Score: ",n))}))),Ve=(n(54),function(){return s.a.createElement("div",{className:"game-info"},s.a.createElement("p",null,"Use arrow keys to move"),s.a.createElement("p",null,"Press ESC / SPACE key to pause"))}),Ne=(n(55),function(){var e=Object(O.b)(Re),t=Object(f.a)({reducer:L,middleware:[].concat(Object(l.a)(Object(f.d)()),[e]),devTools:!0});return e.run(Re),t}());var Pe=function(){return s.a.createElement(b.a,{store:Ne},s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement(Ie,null),s.a.createElement(Ve,null)),s.a.createElement(Ue,null)))};i.a.render(s.a.createElement(Pe,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.bc12bdf4.chunk.js.map