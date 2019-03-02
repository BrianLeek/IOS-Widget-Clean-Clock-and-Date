$(document).ready(() => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const newDate = new Date();
  newDate.setDate(newDate.getDate());

  $('#date').html(`<b>${dayNames[newDate.getDay()]} ${monthNames[newDate.getMonth()]} ${newDate.getDate()}</b>`);

  window.onload = function () {
    clock();
    function clock() {
      const now = new Date();
      const TwentyFourHour = now.getHours();
      let hour = now.getHours();
      let min = now.getMinutes();
      const seconds = new Date().getSeconds();
      let mid = 'pm';
      if (min < 10) {
        min = `0${min}`;
      }
      if (hour > 12) { // If you want the time to be in 24 hour format change "12" to "24".
        hour -= 12;
      }
      if (hour == 0) {
        hour = 12;
      }
      if (TwentyFourHour < 12) {
        mid = 'am';
      }
      document.getElementById('time').innerHTML = `<div class="clock1">${hour}:${min}</div>`;
      setTimeout(clock, 1000);
    }
  };
});