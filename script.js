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






// Logic to play single round
// Create a function called playRound with two parameters (humanChoice, computerChoice)
// If humanChoice === computerChoice then its a tie 
// Else if humanChoice beats computerChoice then human wins
// Else computer wins 
// Return the result 

function playRound(humanChoice, computerChoice) {
    // Tie
    if (humanChoice === computerChoice) {
        return "Tie!"
    
    //Rock beats Scissors
    }else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        return "Human wins!";

    //Paper beats Rock
    }else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
        return "Human wins!"

    //Scissors beats Paper
    }else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        return "Human wins!"
    }else {
        return "Computer wins!"
    } 
}

// Logic to play the entire game
// Create a function called playGame
// Call the playRound function 5 times to play 5 round

function playGame(roundNum) {
    // Track the players score 
    // Create a variable for humanScore and computerScore
    // Initialize the value to 0

    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= roundNum; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice)

        console.log(`Round ${i}: You choose ${humanChoice}, computer choose ${computerChoice}`)
        console.log(`Result: ${result}`)

        if (result === "Human wins!") {
            humanScore += 1;
        }else if (result === "Computer wins!"){
            computerScore += 1;
        }
    }

    console.log(`Final score: Your score is ${humanScore}, computer score is ${computerScore}`);
}

playGame(5);
