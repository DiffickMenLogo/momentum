const audio = document.querySelector('audio');
const playIcon = document.querySelector('.play');
import  playList  from "./playList";
var playNum = 0;
export function playAudio() {
  const playNow = document.querySelector('play-now');
    audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
}
export function pauseAudio() {
  const playNow = document.querySelector('play-now');
  audio.pause();
}
export function nextAudio(){
  audio.pause();
  playNum++;
  if(playNum == 4){
    playNum = 0;
  }
  audio.src = playList[playNum].src;
  audio.play();
}
export function pervAudio() {
  audio.pause();
  playNum--;
  if(playNum == -1){
    playNum = 3;
  }
  audio.src = playList[playNum].src;
  audio.play();
}