// randomly generate a R/P/S
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.error("getComputerChoice() switch default error");
            break;
    }
    console.error("getComputerChoice() switch case error");
}

// compare computer and player choices, incr score if player wins
function playRound(computerChoice, playerChoice, playerObj) {
    switch(computerChoice) {
        case "rock":
            playerChoice == "paper" ?  win(computerChoice, playerChoice, playerObj): 
            playerChoice == "scissors" ? lose(computerChoice, playerChoice) : 
            tie(computerChoice);
            break;
        case "paper":
            playerChoice == "scissors" ? win(computerChoice, playerChoice, playerObj) : 
            playerChoice == "rock" ? lose(computerChoice, playerChoice) : 
            tie(computerChoice);
            break;
        case "scissors":
            playerChoice == "rock" ? win(computerChoice, playerChoice, playerObj) : 
            playerChoice == "paper" ? lose(computerChoice, playerChoice) : 
            tie(computerChoice);
            break;
        default:
            console.error("playRound switch default error");
            break;
    }
}

// outcome handling
function win(computerChoice, playerChoice, playerObj) {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    playerObj.score++;
}

function lose(computerChoice, playerChoice) {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
}

function tie(choice) {
    console.log(`It's a tie! You both chose ${choice}`);
}

// main function
function playGame(numRounds) {
    // use obj to pass preserve score
    var playerObj = { score: 0 };

    // loop for numRounds
    for (let i = 0; i < numRounds; i++) {
        let comp = getComputerChoice();
        let player = "";

        // Keep prompting until input is valid
        while (player != "rock" && player != "paper" && player != "scissors") {
            player = prompt("Pick: Rock, Paper, or Scissors?").toLowerCase();
        }
        playRound(comp, player, playerObj);
    }

    // output final score
    console.log(`Your Final Score: ${playerObj.score}`);
}

// main
playGame(5);


