let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
/*
  if (score === null) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
  }*/
updateScore();

function computerMoveRandom() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  return computerMove;
}


document.querySelector('.js-rock-btn').addEventListener('click', () => {playGame('Rock')})
document.querySelector('.js-paper-btn').addEventListener('click', () => {playGame('Paper')})
document.querySelector('.js-scissors-btn').addEventListener('click', () => {playGame('Scissors')})


document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('Rock')
  }else if(event.key === 'p') {
    playGame("Paper")
  }else if(event.key === 's') {
    playGame('Scissors')
  }
})


function playGame(playerMove) {
  const computerMove = computerMoveRandom();
  let result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "You Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Paper") {
      result = "You Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    } else if (computerMove === "Rock") {
      result = "You win.";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Scissors") {
      result = "You Tie.";
    } else if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
    document.getElementById("input_wins").value = score.wins;
  } else if (result === "You lose.") {
    score.losses += 1;
    document.getElementById("input_losses").value = score.losses;
  } else if (result === "You Tie.") {
    score.ties += 1;
    document.getElementById("input_ties").value = score.ties;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScore();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You
    <img class="move-icon" src="./img/${playerMove}-emoji.png" alt="">
    <img class="move-icon" src="./img/${computerMove}-emoji.png" alt="">
    Computer`;
}

function updateScore() {
  document.getElementById("input_wins").value = score.wins;
  document.getElementById("input_losses").value = score.losses;
  document.getElementById("input_ties").value = score.ties;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  updateScore();
  localStorage.removeItem("score");

  document.querySelector(".js-result").innerHTML = "";
  document.querySelector(".js-moves").innerHTML = "";
  alert("Score is reset!!!!!");
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = computerMoveRandom();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
