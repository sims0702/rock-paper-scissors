/* This is the script for the rock paper scissor game.
The additions exceeded, but hey it works!
The only thing added is the option so that the user specifies the amount of games played themselves.
*/

// function will return computer's guess assigned to variable

let computerGuess = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "paper"
    : "scissors";
};

// Prompt user input
function playerGuess() {}
// 1 game between player and computer
function playRound(computerSelection, playerSelection) {
  const userWin = `You win! ${playerSelection} beats ${computerSelection}!`;
  const userLoss = `You lose! ${computerSelection} beats ${playerSelection}!`;

  if (computerSelection == playerSelection) {
    return alert(`This game is a tie!`);
  }

  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        return alert(userLoss);
      } else {
        return alert(userWin);
      }
    case "paper":
      if (computerSelection === "scissors") {
        return alert(userLoss);
      } else {
        return alert(userWin);
      }
    case "scissors":
      if (computerSelection == "rock") {
        return alert(userLoss);
      } else {
        return alert(userWin);
      }
  }
}

// Callback for event handler
function eventHandler(e) {
  console.log(e);
  return playRound(computerGuess, playerGuess);
}

const buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach((button) => {
  button.addEventListener("click", eventHandler);
});

// Welcome message for every game.
function showWelcomeMessage() {
  alert(`Welcome to the rock paper scissors game!`);
}
// Round message
function MessageForEveryRound(currentRound, numberOfRounds) {
  alert(`This is round number ${i}!`);
}
