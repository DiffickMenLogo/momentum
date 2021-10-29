const date = new Date();
const hours = date.getHours();

const greet = document.querySelector(".greeting");
const greetInput = document.querySelector(".name");

const timeofaday = [
    'Утра',
    'Обеда',
    'Вечера',
    'Ночи'
];

const timeOfDay = ShowTimeOfDay();
const greetingText = `Доброго ${timeOfDay}`;

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
    if(hours > 23 && hours < 6){
        result = timeofaday[3];
    }
    return result;

}
export function showGreeting(){
    greet.textContent = greetingText;
    setTimeout(showGreeting, 1000);
}