
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player)
const iframe = document.querySelector("#vimeo-player");

const player = new Player(iframe)

const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))

player.on('timeupdate', throttle(videoTime => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(videoTime))
},1000)
);

player.setCurrentTime(currentTime.seconds)