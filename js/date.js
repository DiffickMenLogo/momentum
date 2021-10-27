const dates = document.querySelector('.date');
const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

function ShowDate(){
    const date = new Date();
    var n = date.getDay();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('ru-Ru', options);
    dates.textContent = `${days[n]}, ${currentDate}`;
    setTimeout(ShowDate, 1000);
}
ShowDate();