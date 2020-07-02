(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{28:function(e,t,n){e.exports=n(53)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",(function(){return ne}));var a=n(0),c=n.n(a),l=n(11),i=n.n(l),u=(n(33),n(16)),o=n(1);n(34);var f=function(){return c.a.createElement("div",{className:"Header"},c.a.createElement("h1",null,"Tic Tac Toe"))},s=n(15);n(35);var m=function(){return c.a.createElement("footer",{className:"Footer"},c.a.createElement("p",null,c.a.createElement(s.b,null),c.a.createElement("span",null,"Gabriel Cavalcante 2020")))},p=n(2),v="START_GAME",d="RESET_GAME",y="END_GAME",g="PLACE_TILE",E="CHANGE_TURN",b="CHANGE_GAMESTATE",T="CHANGE_TYPE",h="RESET_STATE",S="CHANGE_DIFFICULTY",P="CHANGE_PLAYER_PLAYED",C=function(){return{type:T,config:{type:"pvp",gameState:"pvpConfig"}}},O=function(){return{type:T,config:{type:"pve",gameState:"pveConfig"}}},N=function(){return function(e){return e(C())}},k=function(){return function(e){return e(O())}};n(40);var j=function(e){return c.a.createElement("button",{className:"Control",onClick:e.onclick},e.name)};n(41);var G=function(e){for(var t=[],n=0;n<e.numberOfControls;n++)t.push(c.a.createElement(j,{key:n,name:e.controlConfig[n].name,onclick:e.controlConfig[n].onclick}));return c.a.createElement("div",{className:"Controls"},t)};n(42);var R=Object(p.b)(null,(function(e){return{onPvp:function(){return e(N())},onPve:function(){return e(k())}}}))((function(e){var t=[{name:"Player vs Player",onclick:function(){e.onPvp(),e.history.push("/pvp")}},{name:"Player vs Computer",onclick:function(){e.onPve(),e.history.push("/pve")}}];return c.a.createElement("div",{className:"Menu"},c.a.createElement(G,{numberOfControls:t.length,controlConfig:t}))})),w=(n(43),function(e){return{type:g,newTile:e}}),M=function(e){return function(t){return t(w(e))}},A=function(){return{type:d}},F=function(){return{type:h}},L=function(e){return{type:b,newGamestate:e}},I=function(e){return{type:P,played:e}},X=function(){return function(e){return e(A())}},_=function(){return function(e){return e(F())}},H=function(e){return function(t){return t(L(e))}},W=function(e){return function(t){return t(I(e))}};var x=Object(p.b)((function(e){return{gameState:e.gameState,currentTile:e.currentTile,freeTiles:e.freeTiles,placedTiles:e.placedTiles}}),(function(e){return{onTileClick:function(t){return e(M(t))},onPlayerPlayed:function(t){return e(W(t))}}}))((function(e){var t=Object(a.useRef)(null),n=["TableTile"];function r(n){if("playing"===e.gameState){var r=t.current;r.classList.contains("Placeable")&&(r.innerHTML=n)}}"playing"===e.gameState&&void 0!==e.freeTiles.find((function(t){return t===e.id}))&&n.push("Placeable");var l="";return e.placedTiles.forEach((function(t){t.id===e.id&&(l=t.tile)})),c.a.createElement("div",{ref:t,onMouseEnter:function(){return r(e.currentTile)},onMouseLeave:function(){return r("")},onClick:function(){"playing"===e.gameState&&t.current.classList.contains("Placeable")&&(e.onTileClick({id:e.id,tile:e.currentTile}),e.onPlayerPlayed(!0))},className:n.join(" ")},l)}));n(44);var J=function(){for(var e=[],t=0;t<9;t++)e.push(c.a.createElement(x,{key:t,id:t}));var n=[e[0],e[1],e[2]],r=[e[3],e[4],e[5]],a=[e[6],e[7],e[8]];return c.a.createElement("div",{className:"GameTable"},c.a.createElement("div",{className:"TableRow"},n),c.a.createElement("div",{className:"TableRow"},r),c.a.createElement("div",{className:"TableRow"},a))},Y=function(e){return{type:v,gameConfig:e}},D=function(e){return function(t){return t(Y(e))}};n(45);var V=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null);function r(t,n,r){var a=t.current;"add"===n?a.classList.add("Active"):a.classList.remove("Active"),e.togglerConfig[r].onclick()}function l(e){switch(e.current.classList.add("Active"),e){case t:return r(n,"remove",0);case n:return r(t,"remove",1)}}return Object(a.useEffect)((function(){switch(e.defaultSelected){case"first":return r(t,"add",0);case"second":return r(n,"add",1)}}),[e.defaultSelected]),c.a.createElement("div",{className:"Togglers"},c.a.createElement("button",{ref:t,className:"Toggler",onClick:function(){return l(t)}},e.togglerConfig[0].name),c.a.createElement("button",{ref:n,className:"Toggler",onClick:function(){return l(n)}},e.togglerConfig[1].name))};n(46);var B=Object(p.b)((function(e){return{gameState:e.gameState,type:e.type}}),(function(e){return{onGameStart:function(t){return e(D(t))},onReturnToMenu:function(){return e(_())}}}))((function(e){var t="player1",n="X";function r(){e.onReturnToMenu(),e.history.push("/")}Object(a.useEffect)((function(){"pvpConfig"===e.gameState&&"pvp"===e.type||r()}),[]);var l=[{name:"Player 1",onclick:function(){return t="player1"}},{name:"Player 2",onclick:function(){return t="player2"}}],i=[{name:"X",onclick:function(){return n="X"}},{name:"O",onclick:function(){return n="O"}}],u=[{name:"Start game",onclick:function(){e.onGameStart({currentPlayer:t,currentTile:n,firstPlayer:t,firstTile:n,gameState:"playing"}),e.history.push("/game")}},{name:"Return to menu",onclick:r}];return c.a.createElement("div",{className:"PvpConfig"},c.a.createElement("div",{className:"configField"},c.a.createElement("p",null,"Who goes first?"),c.a.createElement(V,{togglerConfig:l,defaultSelected:"first"})),c.a.createElement("div",{className:"configField"},c.a.createElement("p",null,"Play with"),c.a.createElement(V,{togglerConfig:i,defaultSelected:"first"})),c.a.createElement("div",{className:"configField"},c.a.createElement(G,{numberOfControls:u.length,controlConfig:u})))})),U=n(6),$=function(e){return{type:S,diff:e}},q=function(e){return function(t){return t($(e))}};n(47);var z=Object(p.b)((function(e){return{gameState:e.gameState}}),(function(e){return{onApplyDifficulty:function(t){return e(q(t))}}}))((function(e){var t=e.options,n=e.defaultValue,r=e.gameState,l=e.onApplyDifficulty,i=t.filter((function(e){return e.value===n}))[0],u=Object(a.useState)(i.label),o=Object(U.a)(u,2),f=o[0],m=o[1],p=Object(a.useState)(i.value),v=Object(U.a)(p,2),d=v[0],y=v[1],g=Object(a.useState)(!1),E=Object(U.a)(g,2),b=E[0],T=E[1];return Object(a.useEffect)((function(){"pveConfig"===r&&l(+d)}),[d,r]),c.a.createElement("div",{className:"Selector"},c.a.createElement("div",{className:"Selected",onClick:function(){return T(!b)}},f,c.a.createElement(s.a,null)),c.a.createElement("div",{className:["Options",b?"Open":""].join(" ")},t.map((function(e){return c.a.createElement("div",{key:e.value,className:["Option",e.value===d&&"Current"].join(" "),onClick:function(){return function(e){m(e.label),y(e.value),T(!1)}(e)}},e.label)}))))}));n(48);var K=Object(p.b)((function(e){return{gameState:e.gameState,type:e.type}}),(function(e){return{onGameStart:function(t){return e(D(t))},onReturnToMenu:function(){return e(_())}}}))((function(e){var t="player",n="X";function r(){e.onReturnToMenu(),e.history.push("/")}Object(a.useEffect)((function(){"pveConfig"===e.gameState&&"pve"===e.type||r()}),[]);var l=[{name:"Player",onclick:function(){return t="player"}},{name:"Computer",onclick:function(){return t="computer"}}],i=[{name:"X",onclick:function(){return n="X"}},{name:"O",onclick:function(){return n="O"}}],u=[{name:"Start game",onclick:function(){e.onGameStart({currentPlayer:t,currentTile:n,firstPlayer:t,firstTile:n,gameState:"playing"}),e.history.push("/game")}},{name:"Return to menu",onclick:r}];return c.a.createElement("div",{className:"PveConfig"},c.a.createElement("div",{className:"configField"},c.a.createElement("p",null,"Who goes first?"),c.a.createElement(V,{togglerConfig:l,defaultSelected:"first"})),c.a.createElement("div",{className:"configField"},c.a.createElement("p",null,"Play with"),c.a.createElement(V,{togglerConfig:i,defaultSelected:"first"})),c.a.createElement("div",{className:"configField"},c.a.createElement("p",null,"Choose difficulty"),c.a.createElement(z,{options:[{label:"Easy",value:"0.25"},{label:"Normal",value:"0.50"},{label:"Hard",value:"0.75"},{label:"Very Hard",value:"0.90"},{label:"Expert",value:"1.00"}],defaultValue:"0.25"})),c.a.createElement("div",{className:"configField"},c.a.createElement(G,{numberOfControls:u.length,controlConfig:u})))})),Q=n(17),Z=function(){return{type:y,tie:!1}},ee=function(){return{type:y,tie:!0}},te=function(){return{type:E}},ne={onGameWon:function(){return function(e){return e(Z())}},onGameTied:function(){return function(e){return e(ee())}},onChangeTurn:function(){return function(e){return e(te())}}};n(49);var re,ae=Object(p.b)((function(e){return{gameState:e.gameState,currentPlayer:e.currentPlayer,currentTile:e.currentTile,placedTiles:e.placedTiles,freeTiles:e.freeTiles,type:e.type,difficulty:e.difficulty,playerPlayed:e.playerPlayed}}),(function(e){return{onReturnToMenu:function(){return e(_())},onRestartGame:function(){return e(X())},onPlayerPlayed:function(t){return e(W(t))},onChangeTurn:function(){return e(ne.onChangeTurn())},onGameWon:function(){return e(ne.onGameWon())},onGameTied:function(){return e(ne.onGameTied())},onPlaceTile:function(t){return e(M(t))}}}))((function(e){var t=e.type,n=e.history,r=e.freeTiles,l=e.onGameWon,i=e.gameState,u=e.difficulty,o=e.onGameTied,f=e.placedTiles,s=e.currentTile,m=e.onPlaceTile,p=e.playerPlayed,v=e.onChangeTurn,d=e.onRestartGame,y=e.currentPlayer,g=e.onReturnToMenu,E=e.onPlayerPlayed;function b(){g(),n.push("/")}var T=[{name:"Restart Game",onclick:d},{name:"Return to Menu",onclick:b}];function h(){"computer"!==y?p&&(E(!1),v()):v()}Object(a.useEffect)((function(){"results"===i?n.push("/game/results"):"playing"!==i&&b()}),[i]),Object(a.useEffect)((function(){if(f.length>=5){var e=!1;function t(e){return f.filter((function(t){return e.includes(t.id)}))}function n(n,r,a){for(var c=0;c<r;c+=a){var l=t([c,c+n,c+2*n]);if(3===l.length)if("break"===function(){var t=l[0].tile,n=0;if(l.forEach((function(e){e.tile===t&&n++})),3===n)return e=!0,"break"}())break}}function r(n){var r=t(n);if(3===r.length){var a=r[0].tile,c=0;r.forEach((function(e){e.tile===a&&c++})),3===c&&(e=!0)}}n(1,9,3),e||n(3,3,1),e||r([0,4,8]),e||r([2,4,6]),e?l():9===f.length?o():h()}else h()}),[f]);var S=Object(a.useCallback)((function(e){var t=e===y?s:"X"===s?"O":"X",n=!1;function r(e){var t=Object(Q.a)(e);return[f.filter((function(n){return t=t.filter((function(e){return e!==n.id})),e.includes(n.id)})),t]}function a(e,a,c){for(var l=0;l<a;l+=c){var i=r([l,l+e,l+2*e]),o=Object(U.a)(i,2),f=o[0],p=o[1];if(2===f.length)if("break"===function(){var e=0;if(f.forEach((function(n){n.tile===t&&e++})),2===e&&Math.floor(100*Math.random())<=100*+u){var r=p[0];return m({id:r,tile:s}),n=!0,"break"}}())break}}function c(e){var a=r(e),c=Object(U.a)(a,2),l=c[0],i=c[1];if(2===l.length){var o=0;if(l.forEach((function(e){e.tile===t&&o++})),2===o&&Math.floor(100*Math.random())<=100*+u){var f=i[0];m({id:f,tile:s}),n=!0}}}return a(1,9,3),n||a(3,3,1),n||c([0,4,8]),n||c([2,4,6]),n}),[f,s]);function P(){var e=r[Math.floor(Math.random()*r.length)];m({id:e,tile:s})}Object(a.useEffect)((function(){if("pve"===t&&"computer"===y)if(f.length>=3){var e=S("computer");e||(e=S("player"))||P()}else P()}),[y]);var C="Your";switch(e.currentPlayer){case"player1":C="Player 1";break;case"player2":C="Player 2";break;case"computer":C="Computer";break;default:C="Your"}return c.a.createElement("div",{className:"Game"},c.a.createElement("div",{className:"GameInfo"},c.a.createElement("p",null,C," Turn - ",e.currentTile)),c.a.createElement("div",{className:"GameOptions"},c.a.createElement(G,{numberOfControls:T.length,controlConfig:T})))})),ce=n(14),le=n(5),ie=(n(50),!1);var ue=Object(p.b)((function(e){return{currentPlayer:e.currentPlayer,type:e.type,gameState:e.gameState,tie:e.tie}}),(function(e){return{onReturnToMenu:function(){return e(_())},onPlayAgain:function(){return e(X())},onChangeGamestate:function(t){return e(H(t))}}}))((function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),r=e.tie,l=e.type,i=e.history,u=e.gameState,o=e.onPlayAgain,f=e.currentPlayer,s=e.onReturnToMenu,m=e.onChangeGamestate;function p(){s(),i.push("/")}var v=[{name:"Play again",onclick:function(){ie=!1,o(),m("playing"),i.push("/game")}},{name:"Reset scoreboard",onclick:function(){"pvp"===l?d("pvpScoreboard",["player1","player2"]):"pve"===l&&d("pveScoreboard",["player","computer"]);[t,n].forEach((function(e){e.current.innerHTML="0"}))}},{name:"Return to menu",onclick:function(){ie=!1,p()}}];function d(e,t){var n;localStorage.setItem(e,JSON.stringify((n={},Object(le.a)(n,t[0],0),Object(le.a)(n,t[1],0),n)))}function y(e,t){var n,a;localStorage.getItem(e)||localStorage.setItem(e,JSON.stringify((a={},Object(le.a)(a,t[0],0),Object(le.a)(a,t[1],0),a)));r||(n=JSON.parse(localStorage.getItem(e)),localStorage.setItem(e,JSON.stringify(Object(ce.a)({},n,Object(le.a)({},f,n[f]+1))))),re=Object.values(JSON.parse(localStorage.getItem(e)))}"results"!==u||ie?"results"!==u&&p():(ie=!0,"pvp"===l?y("pvpScoreboard",["player1","player2"]):"pve"===l?y("pveScoreboard",["player","computer"]):p());var g=["Player 1","Player 2"];"pve"===l&&(g=["Player","Computer"]);var E="It\xb4s a tie!";if(!r)switch(f){case"player2":E="Player 2 wins!";break;case"player":E="You win!";break;case"computer":E="Computer wins!";break;default:E="Player 1 wins!"}return c.a.createElement("div",{className:"GameResults"},c.a.createElement("h2",null,E),c.a.createElement("div",{className:"Results"},c.a.createElement("div",{className:"ResultField"},c.a.createElement("p",{className:"FieldTitle"},g[0]),c.a.createElement("p",{className:"FieldContent"},c.a.createElement("span",{ref:t},re&&re[0])," victories")),c.a.createElement("div",{className:"FieldSeparator"}),c.a.createElement("div",{className:"ResultField"},c.a.createElement("p",{className:"FieldTitle"},g[1]),c.a.createElement("p",{className:"FieldContent"},c.a.createElement("span",{ref:n},re&&re[1])," victories"))),c.a.createElement("div",{className:"Options"},c.a.createElement(G,{numberOfControls:v.length,controlConfig:v})))}));n(51);var oe=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.b,null,c.a.createElement(f,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/",component:R}),c.a.createElement(o.b,{exact:!0,path:"/pvp",component:B}),c.a.createElement(o.b,{exact:!0,path:"/pve",component:K}),c.a.createElement(o.b,{exact:!0,path:"/game",component:ae}),c.a.createElement(o.b,{exact:!0,path:"/game/results",component:ue}),c.a.createElement(o.a,{to:"/"})),c.a.createElement(J,null),c.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=n(26),se=n(8),me=n(27),pe={gameState:"menu",currentPlayer:"player1",currentTile:"X",firstPlayer:"player1",firstTile:"X",type:"unsetted",difficulty:.5,placedTiles:[],freeTiles:[0,1,2,3,4,5,6,7,8],tie:!1,playerPlayed:!1};var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;function n(e,t){return Object(ce.a)({},e,{},t)}function r(e,t){return n(e,t)}function a(e,t){return n(e,{gameState:"results",tie:t})}function c(e){return n(e,{currentPlayer:e.firstPlayer,currentTile:e.firstTile,placedTiles:[],freeTiles:[0,1,2,3,4,5,6,7,8],tie:!1,playerPlayed:!1})}function l(){return pe}function i(e,t){var r=e.freeTiles.filter((function(e){return e!==t.id}));return n(e,{freeTiles:r,placedTiles:[].concat(Object(Q.a)(e.placedTiles),[t])})}function u(e,t){return n(e,t)}function o(e,t){return n(e,{difficulty:t})}function f(e){var t="player";return"pvp"===e.type?t="player1"===e.currentPlayer?"player2":"player1":"pve"===e.type&&(t="player"===e.currentPlayer?"computer":"player"),n(e,{currentTile:"X"===e.currentTile?"O":"X",currentPlayer:t})}function s(e,t){return n(e,{gameState:t})}function m(e,t){return n(e,{playerPlayed:t})}switch(t.type){case v:return r(e,t.gameConfig);case y:return a(e,t.tie);case d:return c(e);case h:return l();case g:return i(e,t.newTile);case T:return u(e,t.config);case S:return o(e,t.diff);case E:return f(e);case b:return s(e,t.newGamestate);case P:return m(e,t.played);default:return e}},de=Object(me.composeWithDevTools)({gameCreators:r,trace:!0,traceLimit:25}),ye=Object(se.createStore)(ve,de(Object(se.applyMiddleware)(fe.a)));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p.a,{store:ye},c.a.createElement(u.a,null,c.a.createElement(oe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.c11d8b08.chunk.js.map