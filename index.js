// Play button logic

var playbtn = document.querySelector(".playbtn");

playbtn.addEventListener("click", playBtnClick);

function playBtnClick() {
  if (playbtn.innerHTML === "PLAY") {
    playbtn.innerHTML = "PAUSE";
    resumeCountdown();
  } else {
    playbtn.innerHTML = "PLAY";
  }
}

// Countdown
var seconds = document.getElementById("countdown").textContent;

function resumeCountdown() {
  var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
  }, 1000);
}
