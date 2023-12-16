function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
      diff = duration - (((Date.now() - start) / 1000) | 0);
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (diff <= 0) {
        start = Date.now() + 1000;
      }
    };
    timer();
    setInterval(timer, 1000);
  }
  
  function displayInfo() {
    let now = new Date();
  
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let time = hours + ":" + minutes;
  
    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear().toString().substr(-2);
    let currentDate = `${day}.${month}.${year}`;
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = currentDate;
  }
  
  window.onload = function () {
    var fiveMinutes = 60 * 10,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
    displayInfo();
  };
  