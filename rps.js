// randomly generate a R/P/S
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            console.error("getComputerChoice() switch default error");
            break;
    }
    console.error("getComputerChoice() switch case error");
}

// compare computer and player choices, incr score if player wins
function playRound(computerChoice, playerChoice) {
    switch(computerChoice) {
        case "Rock":
            playerChoice == "Paper" ?  processOutcome(computerChoice, playerChoice, "Win") : 
            playerChoice == "Scissors" ? processOutcome(computerChoice, playerChoice, "Lost") : 
            processOutcome(computerChoice, playerChoice, "Tie");
            break;
        case "Paper":
            playerChoice == "Scissors" ? processOutcome(computerChoice, playerChoice, "Win") : 
            playerChoice == "Rock" ? processOutcome(computerChoice, playerChoice, "Lost") : 
            processOutcome(computerChoice, playerChoice, "Tie");
            break;
        case "Scissors":
            playerChoice == "Rock" ? processOutcome(computerChoice, playerChoice, "Win") : 
            playerChoice == "Paper" ? processOutcome(computerChoice, playerChoice, "Lost") : 
            processOutcome(computerChoice, playerChoice, "Tie");
            break;
        default:
            console.error("playRound switch default error");
            break;
    }
}

// handle the outcome of a round
function processOutcome(computerChoice, playerChoice, outcome) {
    // display round outcome, incr score if win
    const resultItem = document.createElement("p");
    if (!(outcome === "Tie")) {
        resultItem.textContent = `You ${outcome}! ${playerChoice} beats ${computerChoice}.`;
        if (outcome === "Win") {
            score++;
        }
    } else {
        resultItem.textContent = `It's a ${outcome}! You both chose ${playerChoice}.`;
    }
    result.appendChild(resultItem);

    // check if 5 rounds have passed, if so, end game
    if (++numRounds == 5) {
        // display final score
        const finalScore = document.createElement("p");
        finalScore.textContent = `Your Final Score: ${score}`;
        result.appendChild(finalScore);

        // disable rps buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        // create retry button
        const retry = document.createElement("button");
        retry.textContent = `Play Again?`;
        result.appendChild(retry);
        retry.addEventListener("click", () => {
            // delete all outcomes and itself
            while (result.firstChild) {
                result.removeChild(result.lastChild);
            }

            // reset score, round counter for fresh start
            score = 0;
            numRounds = 0;

            // re-enable rps buttons
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        })
    }
}

// ----- main -----
var score = 0, numRounds = 0;
const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const result = document.querySelector(".scoreboard");

rock.addEventListener('click', () => {
    playRound(getComputerChoice(), "Rock");
})

paper.addEventListener('click', () => {
    playRound(getComputerChoice(), "Paper");
})

scissors.addEventListener('click', () => {
    playRound(getComputerChoice(), "Scissors");
})

