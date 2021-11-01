import { ShowDate } from './date';
import { ShowTime } from './clock';
import {showGreeting} from './greet';
import {setLocalStorage} from './greet';
import { getLocalStorage } from './greet';
import { setBg } from "./slider";
import { getSlideNext } from "./slider";
import { getSlidePerv } from "./slider";
import { getWeather } from "./wether";
import { changeCity } from "./wether";
// import { setBg } from './slider';
ShowDate();

ShowTime();

showGreeting();
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

const slideNext = document.querySelector(".slide-next");
const slidePerv = document.querySelector(".slide-prev");
setBg();
slideNext.addEventListener('click', getSlideNext);
slidePerv.addEventListener('click', getSlidePerv);

const city = document.querySelector(".city");
city.value = "Минск";
getWeather();
city.addEventListener('change', getWeather);


