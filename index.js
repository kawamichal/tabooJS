// Variables

var playBtn = document.querySelector(".playbtn");
var countdownID = document.getElementById("countdown");
var pause = true;

// Function calls

playBtn.addEventListener("click", playBtnClick);

playCountdown();

// Play button logic

function playBtnClick() {
  if (playBtn.innerHTML === "PLAY") {
    playBtn.innerHTML = "PAUSE";
    pause = false;
  } else {
    playBtn.innerHTML = "PLAY";
    pause = true;
  }
}

// Countdown

function playCountdown() {
  var seconds = 90;
  var countdown = setInterval(function() {
    if (!pause) {
      if (seconds === 1) {
        countdownID.textContent = seconds + " second";
      } else {
        countdownID.textContent = seconds + " seconds";
      }
      seconds--;
    }

    if (seconds < 0) {
      clearInterval(countdown);
      countdownID.textContent = "Time is up!";
      setTimeout(function() {
        countdownID.textContent = "90 seconds";
      }, 2500);
      playBtnClick();
      playCountdown();
    }
  }, 1000);
}
