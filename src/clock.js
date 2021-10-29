

export function ShowTime(){
    const date = new Date();
    const time = document.querySelector('.time');
    const currentTime = date.toLocaleTimeString();
    time.textContent = `${currentTime}`;
    setTimeout(ShowTime, 1000);
}

