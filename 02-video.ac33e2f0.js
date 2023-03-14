const e=document.querySelector("#vimeo-player");console.log(e);const t=new Player(e);t.on("timeupdate",throttle((e=>{localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))}),1e3));const o=localStorage.getItem("videoplayer-current-time");Number(o)&&t.setCurrentTime(Number(o)).catch((function(e){console.error(e)}));
//# sourceMappingURL=02-video.ac33e2f0.js.map
