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

// intializing counters
let counter = 5;
let counterComputer = 0;
let counterPlayer = 0;
// 1 game between player and computer
const heading = document.querySelector(`h1`);
const gamesLeft = document.createElement(`p`);
const para = document.createElement(`p`);

function playRound(computerSelection, playerSelection) {
  if (counter > 0) {
    counter--;
  }

  gamesLeft.textContent = `Games left to play: ${counter}`;
  heading.after(gamesLeft);
  gamesLeft.after(para);

  if (counter === 0) {
    if (counterComputer > counterPlayer) {
      heading.textContent = `What a disaster! You lost again your opponent with ${counterComputer} vs ${counterPlayer}...`;
    } else if (counterComputer < counterPlayer) {
      heading.textContent = `Congratulations! You have won the game!\n The end score was ${counterPlayer} vs ${counterComputer} for you.`;
    } else {
      heading.textContent = `The game tied!`;
    }
    const container = document.getElementsByClassName(".results");
    console.log(counter);
  }

  const userWin = `You win! ${playerSelection} beats ${computerSelection}!`;
  const userLoss = `You lose! ${computerSelection} beats ${playerSelection}!`;

  if (computerSelection === playerSelection) {
    para.textContent = `This game was a tie!`;
    counterComputer++;
    counterPlayer++;
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "paper") {
          para.textContent = userLoss;
          counterComputer++;
          break;
        } else {
          para.textContent = userWin;
          counterPlayer++;
          break;
        }
      case "paper":
        if (computerSelection === "scissors") {
          para.textContent = userLoss;
          counterComputer++;
          break;
        } else {
          para.textContent = userWin;
          counterPlayer++;
          break;
        }
      case "scissors":
        if (computerSelection === "rock") {
          counterComputer++;
          para.textContent = userLoss;
          break;
        } else {
          para.textContent = userWin;
          counterPlayer++;
          break;
        }
    }
  }
  console.log(playerSelection, computerSelection);
  console.log(counterPlayer, counterComputer);
  container.appendChild(para);
}

// Callback for event handler
function eventHandler(e) {
  return playRound(computerGuess(), e.target.id);
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
