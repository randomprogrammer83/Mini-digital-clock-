let clock = document.querySelector('.clock');

setInterval(function () {
  const dates = new Date();
  console.log(dates.toLocaleTimeString);
  clock.innerHTML = dates.toLocaleTimeString();
}, 1000);
