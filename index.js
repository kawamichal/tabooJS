// Variables

var playbtn = document.querySelector(".playbtn");
var pause = true;

// Function calls

playbtn.addEventListener("click", playBtnClick);
playCountdown();

// Play button logic

function playBtnClick() {
  if (playbtn.innerHTML === "PLAY") {
    playbtn.innerHTML = "PAUSE";
    pause = false;
  } else {
    playbtn.innerHTML = "PLAY";
    pause = true;
  }
}

// Countdown

var seconds = 90;

function playCountdown() {
  var countdown = setInterval(function() {
    if (!pause) {
      seconds--;
    }
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").textContent = "Time is up";
    }
  }, 1000);
}
