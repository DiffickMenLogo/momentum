const audio = document.querySelector('audio');
import  playList  from "./playList";
var playNum = 1;
export function playAudio() {
    audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
}
export function pauseAudio() {
  audio.pause();
}