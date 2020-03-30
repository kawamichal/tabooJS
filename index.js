// Play button logic

var playbtn = document.querySelector(".playbtn");
var pause = true;

playbtn.addEventListener("click", playBtnClick);

playCountdown()

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
    document.getElementById("countdown").textContent = seconds;
    }
  }, 1000);
}
