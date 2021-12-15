const gameValues = ["rock", "paper", "scissors"];
let computerCounter = 0;
let playerCounter = 0;
let roundStatus = "No one has won a round yet.";

function computerPlay() {
  return gameValues[Math.floor(Math.random() * gameValues.length)];
}

let computerSelection = computerPlay();

let playerSelection = document.querySelectorAll("button");

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "rock" && playerSelection == "scissors") {
    computerCounter += 1;
    roundStatus = "Computer won that round.";
    return "You lost that round. Rock beats Scissors";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    computerCounter += 1;
    roundStatus = "Computer won that round.";
    return "You lost that round. Paper beats Rock";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerCounter += 1;
    roundStatus = "Computer won that round.";
    return "You lost that round. Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerCounter += 1;
    roundStatus = "You won that round.";
    return "You won that round. Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerCounter += 1;
    roundStatus = "You won that round.";
    return "You won that round. Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerCounter += 1;
    roundStatus = "You won that round.";
    return "You won that round. Rock beats Scissors";
  } else if (playerSelection == computerSelection) {
    roundStatus = "It's a draw.";
    return "Draw! Try again";
  } else {
    return "Something went wrong...";
  }
}

function game() {
  console.log(playRound(playerSelection, computerSelection));
  console.log(
    roundStatus +
      "   The score is Computer: " +
      computerCounter +
      " You: " +
      playerCounter
  );
  computerSelection = computerPlay();
  playerSelection = window
    .prompt(
      roundStatus +
        "   The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        "    Pick one: Rock, Paper, or Scissors"
    )
    .toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  console.log(
    roundStatus +
      "   The score is Computer: " +
      computerCounter +
      " You: " +
      playerCounter
  );
  computerSelection = computerPlay();
  playerSelection = window
    .prompt(
      roundStatus +
        "   The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        "    Pick one: Rock, Paper, or Scissors"
    )
    .toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  console.log(
    roundStatus +
      "   The score is Computer: " +
      computerCounter +
      " You: " +
      playerCounter
  );
  computerSelection = computerPlay();
  playerSelection = window
    .prompt(
      roundStatus +
        "   The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        "    Pick one: Rock, Paper, or Scissors"
    )
    .toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  console.log(
    roundStatus +
      "   The score is Computer: " +
      computerCounter +
      " You: " +
      playerCounter
  );
  computerSelection = computerPlay();
  playerSelection = window
    .prompt(
      roundStatus +
        "   The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        "    Pick one: Rock, Paper, or Scissors"
    )
    .toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  console.log(
    roundStatus +
      "   The score is Computer: " +
      computerCounter +
      " You: " +
      playerCounter
  );
  if (playerCounter > computerCounter) {
    alert(
      "The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        " You won the game!"
    );
  } else if (computerCounter > playerCounter) {
    alert(
      "The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        " You lost the game."
    );
  } else if (computerCounter == playerCounter) {
    alert(
      "The score is Computer: " +
        computerCounter +
        " You: " +
        playerCounter +
        " The game is a draw."
    );
  } else {
    alert("Something went wrong...");
  }
}
