import { timeOfDay } from './greet';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var randomNum = getRandomInt(1,20);
const bgNum = randomNum.toString().padStart(2,'0');
const body = document.querySelector('body');


export function setBg() {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}

export function getSlideNext(){
    if(randomNum == 20){
        randomNum = 1;
    }
    randomNum ++;
}

export function getSlidePerv(){
    if(randomNum == 1){
        randomNum = 20;
    }
    randomNum --;
}
