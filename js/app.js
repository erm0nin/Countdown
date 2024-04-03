const items = document.querySelectorAll('.countdown-item > h4');
const countdown = document.querySelector('.countdown');

let countdownDay = new Date(2024, 6, 11, 11 ,0,0);

console.log(countdownDay);

function getCountdownTime() {
  const now = new Date().getTime();

  const distance = countdownDay - now;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor( distance / oneDay);
  let hours = Math.floor( (distance % oneDay) / oneHour);
  let minutes = Math.floor( (distance % oneDay % oneHour) / oneMinute);
  let seconds = Math.floor( (distance % oneDay % oneHour % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];
  
  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = `00:00:00`;
  }
}

let coutdown =setInterval(getCountdownTime, 1000);

getCountdownTime();

