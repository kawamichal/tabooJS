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

//Inactivity toggler:
function inactivityToggler() {
  correctBtn.classList.toggle("inactive");
  wrongBtn.classList.toggle("inactive");
}

// Play button logic
function playBtnClick() {
  if (playBtn.innerHTML === "PLAY") {
    playBtn.innerHTML = "PAUSE";
    pause = false;
    inactivityToggler();
    wordRandomizer();
  } else {
    playBtn.innerHTML = "PLAY";
    pause = true;
    inactivityToggler();
  }
}

// Reset button logic
function resetBtnClick() {
  playBtn.innerHTML = "PLAY";
  pause = true;
  seconds = gameTime;
  countdownID.textContent = seconds + " seconds";
  inactivityToggler();
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
  const word1 = new WordCreator("STÓŁ SZWEDZKI", "JEDZENIE", "STAĆ", "WSZYSTKO", "ŁAWA", "TALERZE");
  wordList.push(word1);
  const word2 = new WordCreator("ROK PRZESTĘPNY", "366", "4", "29", "LUTY", "JEDEN DZIEŃ");
  wordList.push(word2);
  const word3 = new WordCreator("FOTEL", "KRZESŁO", "SIEDZIEĆ", "KANAPA", "MIĘKKI", "SOFA");
  wordList.push(word3);
  const word4 = new WordCreator("PRZYTULAĆ", "RAMIONA", "KOGOŚ", "MIŁOŚĆ", "BLISKO", "CAŁOWAĆ");
  wordList.push(word4);
  const word5 = new WordCreator("LOGIN", "EMAIL", "HASŁO", "LOGOWAĆ SIĘ", "ZAPOMNIEĆ", "NAZWA");
  wordList.push(word5);
  const word6 = new WordCreator("FAWORYT", "ULUBIENIEC", "PREFEROWAĆ", "OSOBA", "LUBIĆ", "DOCENIAĆ");
  wordList.push(word6);
  const word7 = new WordCreator("ROZBITEK", "WYSPA", "ŁÓDŹ", "SAMOTNY", "OCEAN", "URATOWAĆ SIĘ");
  wordList.push(word7);
  const word8 = new WordCreator("EKSCENTRYCZNY", "DZIWNY", "NIETYPOWY", "NIECODZIENNY", "INNY", "CUDACZNY");
  wordList.push(word8);
  const word9 = new WordCreator("CZARY", "TRIK", "WIEDŹMA", "CZARODZIEJ", "WRÓŻKA", "RÓŻDŻKA");
  wordList.push(word9);
  const word10 = new WordCreator("REDAKTOR", "GAZETA", "MAGAZYN", "NACZELNY", "SPRAWDZAĆ", "SŁOWO");
  wordList.push(word10);
  const word11 = new WordCreator("LYCRA", "STRETCH", "MATERIAŁ", "RAJSTOPY", "ROZCIĄGAĆ", "ELASTYCZNY");
  wordList.push(word11);
  const word12 = new WordCreator("PRZYSTAWKA", "PRZEKĄSKA", "POCZĄTEK", "DANIE", "RESTAURACJA", "JEDZENIE");
  wordList.push(word12);
  const word13 = new WordCreator("WSPINACZKA", "GÓRA", "WCHODZIĆ", "HIMALAJE", "ALPINISTA", "SKAŁKI");
  wordList.push(word13);
  const word14 = new WordCreator("SERNIK", "CIASTO", "TWARÓG", "RODZYNKI", "ZIMNY", "GALARETKA");
  wordList.push(word14);
  const word15 = new WordCreator("METEORYT", "SPADAĆ", "ZIEMIA", "CIAŁO NIEBIESKIE", "KOSMOS", "SKAŁA");
  wordList.push(word15);
}

