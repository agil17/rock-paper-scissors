const getComputerChoice = () => {
    const arr = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

const playRound = (playerChoice, cpuChoice) => {
    if(playerChoice.toLowerCase() === 'rock') {
        if(cpuChoice === "paper"){
            console.log(`You lose, paper beats rock.`);
            return `lose`;
        }
        else if(cpuChoice === "scissors") {
            console.log(`You win, rock beats scissors.`);
            return `win`;
        }
        else {
            console.log(`Tie, rock versus rock`);
            return `tie`;
        }
    }
    else if(playerChoice.toLowerCase() === 'paper') {
        if(cpuChoice === "rock"){
            console.log(`You win, paper beats rock.`);
        }
        else if(cpuChoice === "scissors") {
            console.log(`You lose, scissors beats paper.`);
        }
        else {
            console.log(`Tie, paper versus paper`);
        }
    }
    else if(playerChoice.toLowerCase() === 'scissors') {
        if(cpuChoice === "rock"){
            console.log(`You lose, rock beats scissors.`);
        }
        else if(cpuChoice === "paper") {
            console.log(`You win, scissors beats paper.`);
        }
        else {
            console.log(`Tie, scissors versus scissors`);
        }
    } 
}

const game = () => {
    let wins = 0;
    let losses = 0;
    for(let i = 0; i < 5; i++) {
        let choice = prompt("Enter rock, paper, scissors");
        let cpu = getComputerChoice();
        let result = playRound(choice, cpu);
        if(result === `win`) {
            wins++;
        }
        else if(result === `lose`) {
            losses++;
        }
    }
    return wins;
    // finish returns for playround and give over 3/5 winner in game
}

