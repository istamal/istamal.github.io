(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{102:function(e,t,n){e.exports=n(198)},107:function(e,t,n){},108:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(11),r=n.n(i),c=(n(107),n(108),n(36),n(199)),o=n(41),l=n(42),u=n(49),m=n(50),d=n(3),h=n.n(d),v=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).stopTimer=function(){clearInterval(a.milisecondsCounter);var e=a.state.isCliked;a.setState({isCliked:!e})},a.startTimer=function(){var e=a.state.isCliked;a.setState({isCliked:!e});a.milisecondsCounter=setInterval((function(){var e=a.state.time,t=e.minutes,n=e.seconds,s=e.miliseconds;60===s?a.setState({time:{minutes:t,seconds:n+1,miliseconds:0}}):60===n?a.setState({time:{minutes:t+1,seconds:0,miliseconds:s}}):a.setState({time:{minutes:t,seconds:n,miliseconds:s+1}})}),15)},a.clearProgress=function(){a.state.isCliked?(clearInterval(a.milisecondsCounter),a.setState({isCliked:!1})):a.setState({time:{minutes:0,seconds:0,miliseconds:0}})},a.state={time:{minutes:0,seconds:0,miliseconds:0},isCliked:!1,stop:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.isCliked,t=e?"\u041f\u0430\u0443\u0437\u0430":"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c",n=this.state.time,a=n.minutes,i=n.seconds,r=n.miliseconds,c=function(e){return e<10?0:""},o=h()({red:e,start:!0});return s.a.createElement("div",null,s.a.createElement("h1",{className:"timer"},"".concat(c(a)).concat(a," : ").concat(c(i)).concat(i," : ").concat(c(r)).concat(r)),s.a.createElement("button",{className:o,onClick:e?this.stopTimer:this.startTimer},t),s.a.createElement("button",{className:"reset",onClick:this.clearProgress},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"))}}]),n}(s.a.Component),p=n(201),C=n(200),f=function(e){var t=e.isCliked,n=e.handleSlider,a=e.handleInput,i=e.minutes;return s.a.createElement("div",null,s.a.createElement(C.a,{disabled:t,min:0,max:720,onChange:n,value:i}),s.a.createElement("input",{className:"custom-input",disabled:t,min:0,max:720,type:"number",value:i,onChange:a}))},S=n(203),k=n(1),b=n.n(k);S.a.propTypes={value:b.a.number.isRequired};var E=function(e){var t=e.isCliked,n=e.handleSlider,a=e.handleInput,i=e.seconds;return s.a.createElement("div",null,s.a.createElement(C.a,{disabled:t,min:0,max:60,step:15,onChange:n,value:i}),s.a.createElement("input",{className:"custom-input",disabled:t,min:0,max:60,step:15,type:"number",value:i,onChange:a}))},y=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).resetTimer=function(){var e=a.state,t=e.isCliked,n=e.time,s=n%60,i=(n-s)/60;t?(clearInterval(a.timer),a.setState({isCliked:!1,minutes:i,seconds:s})):a.setState({minutes:0,seconds:0,startTime:0,time:0})},a.HandleSecondsSlider=function(e){a.setState({seconds:e})},a.HandleMinutesSlider=function(e){a.setState({minutes:e})},a.handleSecondsInput=function(e){var t=e.target.value;Number(t)>60?a.setState({seconds:60}):a.setState({seconds:t})},a.handleMinutesInput=function(e){var t=e.target.value;Number(t)>720?a.setState({minutes:720}):a.setState({minutes:t})},a.handleStopCountdown=function(){var e=a.state.time,t=e%60,n=(e-t)/60;clearInterval(a.timer),a.setState({isCliked:!1,minutes:n,seconds:t})},a.handleCountdown=function(){var e=a.state,t=e.minutes,n=e.seconds;a.setState({time:60*Number(t)+Number(n),startTime:60*Number(t)+Number(n),isCliked:!0,seconds:0,minutes:0}),a.timer=setInterval(a.countDown,1e3)},a.countDown=function(){var e=a.state.time;a.setState({time:e-1}),0===e&&(a.audio=document.getElementById("audio"),a.audio.load(),a.playAudio(),clearInterval(a.timer),a.setState({isCliked:!1,startTime:0,time:0}))},a.wrapper=s.a.createRef(),a.state={isCliked:!1,startTime:0,seconds:0,minutes:0,time:0},a.timer=0,a}return Object(l.a)(n,[{key:"playAudio",value:function(){this.audio.play().then((function(e){console.log(e)})).catch((function(e){return console.info(e)}))}},{key:"render",value:function(){var e=this.state,t=e.startTime,n=e.isCliked,a=e.time,i=e.seconds,r=e.minutes,c=n?"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c":"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c",o=function(e){return e<10?0:""},l=a%60,u=(a-l)/60,m=t-a,d=Math.round(m/t*100),v=h()({red:n,start:!0});return s.a.createElement("div",{ref:this.wrapper},s.a.createElement(f,{isCliked:n,minutes:r,handleSlider:this.HandleMinutesSlider,handleInput:this.handleMinutesInput}),s.a.createElement(E,{isCliked:n,seconds:i,handleSlider:this.HandleSecondsSlider,handleInput:this.handleSecondsInput}),s.a.createElement("h1",{className:"timer"},"".concat(o(u)).concat(u," : ").concat(o(l)).concat(l)),s.a.createElement("div",{className:"progress"},s.a.createElement(p.a,{type:"circle",strokeColor:{"0%":"#108ee9","100%":"#87d068"},percent:d})),s.a.createElement("button",{type:"button",className:v,onClick:n?this.handleStopCountdown:this.handleCountdown},c),s.a.createElement("button",{type:"button",className:"reset",onClick:this.resetTimer},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"),s.a.createElement("audio",{id:"audio",preload:"auto",src:"timer.mp3"}))}}]),n}(s.a.Component),I=c.a.TabPane;var g=function(){return s.a.createElement(c.a,{defaultActiveKey:"1"},s.a.createElement(I,{tab:"\u0422\u0430\u0439\u043c\u0435\u0440",key:"1"},s.a.createElement(v,null)),s.a.createElement(I,{tab:"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043e\u0442\u0447\u0435\u0442",key:"2"},s.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[102,1,2]]]);
//# sourceMappingURL=main.8b5e8a7e.chunk.js.map