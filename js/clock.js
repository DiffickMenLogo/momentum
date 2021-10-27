const time = document.querySelector('.time');

function ShowTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = `${currentTime}`;
    setTimeout(ShowTime, 1000);
}
ShowTime();

