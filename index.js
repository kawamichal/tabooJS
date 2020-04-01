// Word factory
class WordCreator {
  constructor(
    word,
    forbidden1,
    forbidden2,
    forbidden3,
    forbidden4,
    forbidden5
  ) {
    this.word = word;
    this.forbidden = [
      forbidden1,
      forbidden2,
      forbidden3,
      forbidden4,
      forbidden5
    ];
  }
}

// Selectors
var playBtn = document.querySelector(".playbtn");
var resetBtn = document.querySelector(".resetbtn");
var countdownID = document.getElementById("countdown");
var correctBtn = document.getElementById("correct");
var wrongBtn = document.getElementById("wrong");
var yellowScore = document.getElementById("yellow-score");
var greenScore = document.getElementById("green-score");
var turnNotification = document.querySelector(".turn-notification");
var gameBox = document.getElementById("game-box");

// Modal selectors
var modal = document.getElementById("scoreModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];


//Flags
var pause = true; // Set the timer to paused by default
var turn = true; // True - yellow team, False - green team

//Values
var gameTime = 90; //
var seconds = gameTime;
var yellow = 0;
var green = 0;

var wordList = [];

// Function calls
playBtn.addEventListener("click", playBtnClick);
resetBtn.addEventListener("click", resetBtnClick);
correctBtn.addEventListener("click", correctBtnClick);
wrongBtn.addEventListener("click", wrongBtnClick);

wordsDb();
playCountdown();

// Functions

// Play button logic
function playBtnClick() {
  if (playBtn.innerHTML === "PLAY") {
    playBtn.innerHTML = "PAUSE";
    pause = false;
    correctBtn.classList.toggle("inactive");
    wrongBtn.classList.toggle("inactive");
  } else {
    playBtn.innerHTML = "PLAY";
    pause = true;
    correctBtn.classList.toggle("inactive");
    wrongBtn.classList.toggle("inactive");
  }
}

// Reset button logic
function resetBtnClick() {
  playBtn.innerHTML = "PLAY";
  pause = true;
  seconds = gameTime;
  countdownID.textContent = seconds + " seconds";
}

// Countdown logic
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
        resetBtnClick();
        if (turn) {
          turn = false;
        } else {
          turn = true;
        }
        correctBtn.classList.toggle("inactive");
        wrongBtn.classList.toggle("inactive");
        backgroundSwitch();
        playCountdown();
      }, 2000);
    }
  }, 1000);
}

// Background switch
function backgroundSwitch() {
  if (turn) {
    gameBox.style.backgroundColor = "#feffa3";
    turnNotification.innerText = "Yellow team's turn!";
  } else {
    gameBox.style.backgroundColor = "#85E3FF";
    turnNotification.innerText = "Blue team's turn!";
  }
}

// Score counters
function correctCounter() {
  if (turn) {
    yellow += 1;
    yellowScore.innerText = yellow;
  } else {
    green += 1;
    greenScore.innerText = green;
  }
}

function wrongCounter() {
  if (turn) {
    yellow -= 1;
    yellowScore.innerText = yellow;
  } else {
    green -= 1;
    greenScore.innerText = green;
  }
}

// Correct button logic
function correctBtnClick() {
  if (!pause) {
    correctCounter();
    wordRandomizer();
  }
}

// Wrong button logic
function wrongBtnClick() {
  if (!pause) {
    wrongCounter();
    wordRandomizer();
  }
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Word randomizer
function wordRandomizer() {
  // Generating a random number
  var randomNumber = Math.floor(Math.random() * wordList.length);

  // Placing word
  document.querySelector(".main-word").innerText = wordList[randomNumber].word;
  for (var i = 0; i < 5; i++) {
    document.querySelectorAll(".frb-word")[i].innerText =
      wordList[randomNumber].forbidden[i];
  }
}

// Declared words
function wordsDb() {
  const word1 = new WordCreator("1A", "A", "A", "A", "A", "A");
  wordList.push(word1);
  const word2 = new WordCreator("2B", "B", "B", "B", "B", "B");
  wordList.push(word2);
  const word3 = new WordCreator("3C", "C", "C", "C", "C", "C");
  wordList.push(word3);
  const word4 = new WordCreator("4D", "D", "D", "D", "D", "D");
  wordList.push(word4);
  const word5 = new WordCreator("5E", "E", "E", "E", "E", "E");
  wordList.push(word5);
  const word6 = new WordCreator("6F", "F", "F", "F", "F", "F");
  wordList.push(word6);
}

