// Create a function called getComputerChoice
// Generate a random number between 0 and 2 
// Assign it to a variable called computerChoice
// If computerChoice === 0 return "Rock" 
// Else if computerChoice === 1 return "Paper"
// Else if computerChoice === 2 return "Scissors"  

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "ROCK";
    }else if (computerChoice === 1) {
        return "PAPER";
    }else return "SCISSORS";
}


// Create a function called getHumanChoice
// Ask the user if ("Rock", "Paper", "Scissors") and assign it to a variable called humanChoice
// Make the humanChoice case insensitive 
// return the result

function getHumanChoice() {
    let humanChoice = prompt("Choose: Rock, Paper, or Scissors?");
    return humanChoice.toUpperCase();

}


// Logic to play the entire game
// Create a function called playGame
// Call the playRound function 5 times to play 5 round

// Track the players score 
// Create a variable for humanScore and computerScore
// Initialize the value to 0



// Logic to play single round
// Create a function called playRound with two parameters (humanChoice, computerChoice)
// If humanChoice === computerChoice then its a tie 
// Else if humanChoice beats computerChoice then human wins
// Else computer wins 
// Return the result 

