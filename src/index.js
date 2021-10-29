import { ShowDate } from './date';
import { ShowTime } from './clock';
import {showGreeting} from './greet';
import {setLocalStorage} from './greet';
import { getLocalStorage } from './greet';
import { setBg } from "./slider";
import { getSlideNext } from "./slider";
import { getSlidePerv } from "./slider";
// import { setBg } from './slider';
ShowDate();

ShowTime();

showGreeting();
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

const slideNext = document.querySelector(".slide-next");
const slidePerv = document.querySelector(".slide-prev");
console.log(slidePerv);
setBg();
slideNext.addEventListener('click', getSlideNext);
slidePerv.addEventListener('click', getSlidePerv);


