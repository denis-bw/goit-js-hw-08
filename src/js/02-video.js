
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(evt.seconds)
    );
  }, 1000)
);

const currentTime = localStorage.getItem('videoplayer-current-time');  

if (Number(currentTime)) {
  player.setCurrentTime(Number(currentTime)).catch(function (error) {
    console.error(error);
  });
}