!function(){var e=document.querySelector("#vimeo-player");console.log(e);var r=new Player(e);r.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))}),1e3));var t=localStorage.getItem("videoplayer-current-time");Number(t)&&r.setCurrentTime(Number(t)).catch((function(e){console.error(e)}))}();
//# sourceMappingURL=02-video.7acd6be3.js.map
