
let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function start(initialStart) {
  if (initialStart) {
    
  }

  document.getElementById("start-btn").disabled = true;

  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  document.getElementById("timer").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}
function pause() {
  document.getElementById("start-btn").disabled = false;

  clearInterval(timerInterval);
}

function reset() {
  document.getElementById("start-btn").disabled = false;

  clearInterval(timerInterval);

  hours = 0;
  minutes = 0;
  seconds = 0;

  document.getElementById("timer").innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

