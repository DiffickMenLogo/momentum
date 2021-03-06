const date = new Date();
const hours = date.getHours();

const greet = document.querySelector(".greeting");
const name = document.querySelector(".name");

const timeofaday = [
    'morning',
    'afternoon',
    'evening',
    'night'
];

export const timeOfDay = ShowTimeOfDay();
const greetingText = `Good ${timeOfDay}`;

function ShowTimeOfDay(){
    let result = '';
    if(hours > 5 && hours < 12){
        result = timeofaday[0];
    }
    if(hours > 11 && hours < 18){
        result = timeofaday[1];
    }
    if(hours > 17 && hours < 23){
        result = timeofaday[2];
    }
    if((hours > 22 && hours < 25) || (hours < 6 && hours >= 0)){
        result = timeofaday[3];
    }
    return result;

}

export function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }


export function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

if(name.value == null || name.value == '' || name.value == undefined){
    name.value = '[Enter name]';
}


export function showGreeting(){
    greet.textContent = greetingText;
    setTimeout(showGreeting, 1000);
}