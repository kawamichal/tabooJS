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

function playCountdown() {
  var seconds = 3;
  var countdown = setInterval(function() {
    if (!pause) {
      document.getElementById("countdown").textContent = seconds + " seconds";
      seconds--;
    }
    if (seconds < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").textContent = "Time is up!";
      playBtnClick();
      playCountdown();
    }
  }, 1000);
}
