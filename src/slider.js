import { timeOfDay } from './greet';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var randomNum = getRandomInt(1,20);
const body = document.querySelector('body');


export function setBg() {
    const bgNum = randomNum.toString().padStart(2,'0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    }
}

export function getSlideNext(){
    if(randomNum != 20){
        randomNum ++;
    }
    else{
        randomNum = 1;
    }
    setBg();
}

export function getSlidePerv(){
    if(randomNum != 1){
        randomNum --;
    }
    else{
        randomNum = 20;
    }
    setBg();
}
