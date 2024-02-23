let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

let questionsEl = document.querySelector('#questions');
let optionsEl = document.querySelector('#choices');
let timer = document.querySelector('#time');
let startButton = document.querySelector("#start");
let addInitials = document.querySelector("#initials");
let submitButton = document.querySelector("#submit");
let feedbackEl = document.querySelector("#feedback");

let sfxRight = new Audio('assets/sfx/correct.wav');
let sfxWrong = new Audio('assets/sfx/incorrect.wav');

function startQuiz() {
  let hideScreen = document.getElementById("start-screen");
  hideScreen.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerId = setInterval(clockTick, 1000);
  timer.textContent = time;

  getQuestion();
}

function getQuestion() {
  let presentQuestion = questions[currentQuestionIndex];

  let updateTitle = document.getElementById("question-title");
  updateTitle.textContent = presentQuestion.title;

  optionsEl.innerHTML = ""; // Corrected the typo from innerHtml to innerHTML

  let numberOfChoices = presentQuestion.choices.length;
  for (let i = 0; i < numberOfChoices; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = presentQuestion.choices[i];
    choiceButton.setAttribute("value", presentQuestion.choices[i]);

    choiceButton.onclick = questionClick;
    optionsEl.appendChild(choiceButton);
  }
}

function questionClick(clickedButton) {
  if (clickedButton.target.value !== questions[currentQuestionIndex].answer) { 
    time -= 15;
    if (time < 0) {
      time = 0;
    }
    timer.textContent = time;
    feedbackEl.textContent = "Wrong!";
    sfxWrong.play(); 
  } else {
    feedbackEl.textContent = "Correct!";
    sfxRight.play(); 
  }

  
  feedbackEl.removeAttribute("class");
  
  setTimeout(function () {
      feedbackEl.setAttribute("class", "feedback hide");
    },500);
  

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);
  let quizEndEl = document.getElementById("end-screen");
  quizEndEl.removeAttribute("class");
  let finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timer.innerHTML = time;
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighScore() {
  let user = addInitials.value; 
  if (user !== "") {
    let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    let newHighScore = { Initials: user, Score: time }; 
    highscores = highscores.concat(newHighScore);
    let textHighScores = JSON.stringify(highscores);
    window.localStorage.setItem("highscores", textHighScores); 
    window.location.href = "highscore.html"; 
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") { 
    saveHighScore();
  }
}

submitButton.onclick = saveHighScore;
startButton.onclick = startQuiz;
addInitials.onkeyup = checkForEnter;
