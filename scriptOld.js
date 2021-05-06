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
function playerGuess() {
  // Prompt the user for an input, either paper, scissor or rock
  let choice = prompt(
    `What will be your choice? (choose between rock, paper and scissors)`
  ).toLowerCase();
  // Input != rock,paper scissors, Ask again!
  while (choice != "rock" && choice != "paper" && choice != "scissors") {
    choice = prompt(
      `Please choose between: rock, paper or scissors!`
    ).toLowerCase();
  }
  console.log(choice);
  return choice;
}

/***** IDEA: *****/
/* Think about how you can make this program only to be one case in which it looks at whether pc, or user beats and assigns the strings automatically.*/

// 1 game between player and computer
function playRound(computerSelection, playerSelection) {
  // use case for either win or lose
  const userWin = `You win! ${playerSelection} beats ${computerSelection}!`;
  const userLoss = `You lose! ${computerSelection} beats ${playerSelection}!`;
  // If selection == each other, display: `this game is a tie!`.
  if (computerSelection == playerSelection) {
    return alert(`This game is a tie!`);
  }
  // make a switch statement for playerSelection
  switch (playerSelection) {
    // if case == `rock`
    case "rock":
      // check here for computer guess, if paper --> pc wins if scissors --> user wins
      if (computerSelection === "paper") {
        return alert(userLoss);
      } else {
        return alert(userWin);
      }
    // if case == `paper`
    case "paper":
      // computer -> scissors == computer wins ---- computer -> rock == user wins
      if (computerSelection === "scissors") {
        return alert(userLoss);
      } else {
        return alert(userWin);
      }
    // if case == `scissors`
    case "scissors":
      // computer -> rock == computer wins ---- computer -> paper == user wins
      if (computerSelection == "rock") {
        return alert(userLoss);
      } else {
        return alert(userWin);
      }
  }
}

// Welcome message for every game.
function showWelcomeMessage() {
  alert(`Welcome to the rock paper scissors game!`);
}
// Round message
function MessageForEveryRound(currentRound, numberOfRounds) {
  alert(`This is round number ${i}!`);
}

// Playgames specified by user. #BRINING IT ALL TOGETHER
// function playGame_n_Times() {
//   showWelcomeMessage();
//   const n = prompt(`AS A STARTER:
//   How many round would you like to play?`);
//   // Creating a game of five games
//   for (i = 1; i <= n; i++) {
//     MessageForEveryRound(i, n);
//     playRound(computerGuess(), playerGuess());
//   }
//   alert(`This was the end of the game!`);
// }

// playGame_n_Times();

/**** FOR TESTING PURPOSES ****/
// console.log(playRound(computerGuess(), playerGuess()));

// // TEST FOR 9 CONDITIONS!!
// // user has rock
// console.log(playRound("paper", "rock"));
// console.log(playRound("scissors", "rock"));
// console.log(playRound("rock", "rock"));
// // user has paper
// console.log(playRound("paper", "paper"));
// console.log(playRound("scissors", "paper"));
// console.log(playRound("rock", "paper"));

// console.log(playRound("paper", "scissors"));
// console.log(playRound("scissors", "scissors"));
// console.log(playRound("rock", "scissors"));
