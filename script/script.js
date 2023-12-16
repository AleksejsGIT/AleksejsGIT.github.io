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
  
  // This should be at the end of your script.js file
document.addEventListener('DOMContentLoaded', (event) => {
  var fiveMinutes = 60 * 10,
      display = document.querySelector('#timer');
  startTimer(fiveMinutes, display);
  displayInfo();

  var modal = document.getElementById("modal");
  var btn = document.getElementById("triggerModal");
  var closeModal = document.getElementById('closeModal');

  // Assuming you want to blur the .squareTop and .squareBot
  var blurElements = document.querySelectorAll('.squareTop, .squareBot');

  btn.onclick = function() {
    modal.style.display = "block";
    blurElements.forEach(el => el.style.filter = "blur(5px)");
  }

  closeModal.onclick = function() {
    modal.style.display = "none";
    blurElements.forEach(el => el.style.filter = "none");
  }

  // Clicking outside the modal closes it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      blurElements.forEach(el => el.style.filter = "none");
    }
  }
});
