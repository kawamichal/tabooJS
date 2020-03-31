// Variables

var playBtn = document.querySelector(".playbtn");
var resetBtn = document.querySelector(".resetbtn");
var countdownID = document.getElementById("countdown");
var pause = true;
var seconds = 90;


// Function calls

playBtn.addEventListener("click", playBtnClick);
resetBtn.addEventListener("click", resetBtnClick);

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

function resetBtnClick() {
  playBtn.innerHTML = "PLAY";
  pause = true;
  seconds = 90;
  countdownID.textContent = "90 seconds";
}

// Countdown

function playCountdown() {
  clearInterval(countdown);
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
