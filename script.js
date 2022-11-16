const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', game, {capture: true});
    choice.textContent
});

function game(e) {
    let cpu = getComputerChoice();
    // console.log("cpu choice " + cpu);
    // console.log("my choice " + this.dataset.value);
    let round = playRound(this.dataset.value, cpu);
    updateScoreCard(round);
}



const getComputerChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
}


const playRound = (playerChoice, cpuChoice) => {
    if(playerChoice.toLowerCase() === 'rock') {
        if(cpuChoice === "paper"){
            // console.log(`You lose, paper beats rock.`);
            return `lose`;
        }
        else if(cpuChoice === "scissors") {
            // console.log(`You win, rock beats scissors.`);
            return `win`;
        }
        else {
            // console.log(`Tie, rock versus rock`);
            return `tie`;
        }
    }
    else if(playerChoice.toLowerCase() === 'paper') {
        if(cpuChoice === "rock"){
            // console.log(`You win, paper beats rock.`);
            return `win`;
        }
        else if(cpuChoice === "scissors") {
            // console.log(`You lose, scissors beats paper.`);
            return `lose`;
        }
        else {
            // console.log(`Tie, paper versus paper`);
            return `tie`;
        }
    }
    else if(playerChoice.toLowerCase() === 'scissors') {
        if(cpuChoice === "rock"){
            // console.log(`You lose, rock beats scissors.`);
            return `lose`;
        }
        else if(cpuChoice === "paper") {
            // console.log(`You win, scissors beats paper.`);
            return `win`;
        }
        else {
            // console.log(`Tie, scissors versus scissors`);
            return `tie`;
        }
    } 
}

// const game = () => {
//     let wins = 0;
//     let losses = 0;
//     for(let i = 0; i < 5; i++) {
//         let choice = prompt("Enter rock, paper, scissors");
//         let cpu = getComputerChoice();
//         let result = playRound(choice, cpu);
//         if(result === `win`) {
//             wins++;
//         }
//         else if(result === `lose`) {
//             losses++;
//         }
//     }
//     if(wins === losses) {
//         return `You tied`;
//     }
//     else if(wins > losses) {
//         return `You win!`;
//     }
//     else {
//         return `You lose`;
//     }
// }

const updateScoreCard = (str) => {
    if(str === 'win') {
        let scoreYou = document.querySelector('.score-you');
        scoreYou.textContent = parseInt(scoreYou.textContent) + 1;
    }
    if(str === 'lose') {
        let scoreCpu = document.querySelector('.score-cpu');
        scoreCpu.textContent = parseInt(scoreCpu.textContent) + 1;
    }
}
