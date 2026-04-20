// 1. INITIALIZE GLOBAL VARIABLES
// Create a variable for humanScore and set it to 0
// Create a variable for computerScore and set it to 0

let humanScore = 0;
let computerScore = 0;

// 2. SELECT DOM ELEMENTS
// Select the Rock button using querySelector and store it in a variable
// Select the Paper button using querySelector and store it in a variable
// Select the Scissors button using querySelector and store it in a variable
// Select the results div using querySelector and store it in a variable

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let results = document.querySelector(".results"); 

// Add event listeners to the buttons to call the playRound function with the appropriate choice when clicked
rockButton.addEventListener("click", () => playRound("ROCK"));

paperButton.addEventListener("click", () => playRound("PAPER"));

scissorsButton.addEventListener("click", () => playRound("SCISSORS")); 


//3. COMPUTER CHOICE LOGIC

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "ROCK";
    }else if (computerChoice === 1) {
        return "PAPER";
    }else return "SCISSORS";
}


// 4. PLAY ROUND LOGIC

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    let roundMessage;
    let computerChoice = getComputerChoice();
        // Tie
    if (humanChoice === computerChoice) {
        roundMessage = "It's a tie!";
    
    //Rock beats Scissors
    }else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        roundMessage =  `Human wins!, ${humanChoice} beats ${computerChoice}`;
        humanScore++;

    //Paper beats Rock
    }else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        roundMessage = `Human wins!, ${humanChoice} beats ${computerChoice}`;
        humanScore++;

    //Scissors beats Paper
    }else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        roundMessage = `Human wins!, ${humanChoice} beats ${computerChoice}`;
        humanScore++
    }else {
        roundMessage = `Computer wins!, ${computerChoice} beats ${humanChoice}`;
        computerScore++; 
    }

    document.querySelector(".playerScore").textContent = `Player: ${humanScore}`;
    document.querySelector(".computerScore").textContent = `Computer: ${computerScore}`;
    results.textContent = `${roundMessage}`;

    if (humanScore === 5) {
       results.textContent = "Congratulations! You won the game!"; 
    }else if (computerScore === 5) {
        results.textContent = "Sorry, you lost the game. Better luck next time!";
    }

   

}










