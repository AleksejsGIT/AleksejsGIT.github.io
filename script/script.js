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
  }
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
  // Also update the modal information when displayInfo is called
  document.getElementById('modalTime').textContent = time;
  document.getElementById('modalDate').textContent = currentDate;
}

document.addEventListener('DOMContentLoaded', (event) => {
  var fiveMinutes = 60 * 10,
      display = document.querySelector('#timer');
  startTimer(fiveMinutes, display);
  displayInfo(); // Call displayInfo here to update the time and date on load

  var modal = document.getElementById("modal");
  var btn = document.getElementById("triggerModal");
  var closeModal = document.getElementById('closeModal');

  // Open the modal and copy the information
  btn.onclick = function() {
    displayInfo(); // Update the info in the modal
    modal.style.display = "block";
    
  }

  // Close the modal
  closeModal.onclick = function() {
    modal.style.display = "none";
    document.body.style.filter = "none";
  }

  // Clicking outside the modal closes it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.filter = "none";
    }
  }
});

function updateModalCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const currentTimeFormatted = `${hours}:${minutes}:${seconds}`;

  document.getElementById('modalCurrTime').textContent = currentTimeFormatted;
}

setInterval(updateModalCurrentTime, 1000);

window.addEventListener("load",function() {
  setTimeout(function(){
      // This hides the address bar:
      window.scrollTo(0, 1);
  }, 0);
});
