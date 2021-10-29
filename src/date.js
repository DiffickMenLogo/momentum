const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
const dates = document.querySelector('.date');
export function ShowDate(){
    const date = new Date();
    var n = date.getDay();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('ru-Ru', options);
    dates.textContent = `${days[n]}, ${currentDate}`;
    setTimeout(ShowDate, 1000);
}