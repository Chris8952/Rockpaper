
let choices = ["rock", "paper", "scissors"];
const userInput = prompt("Do you choose rock, paper, or scissors?").toLocaleLowerCase();
    if(userInput ==="paper" || userInput ==="rock" || userInput ==="scissors"){
        console.log("you choose" + '${userInput}');
    } else {
        console.log("Error! Try again!");
    }
    
    const computerInput = choices[Math.floor(Math.random()*3)];
    console.log("computer chose" + ' ${computerInput}');

    if (computerInput <= 0.33) {
        computerInput = "rock";
    }
    if (computerInput >= 0.67){
        computerInput = "paper";
    }
    if (computerInput >= 0.66){
        computerInput = "scissors";
    }
    
    const winner = declareWinner(userInput, computerInput);
    function declareWinner(userInput, computerInput){
        if(userInput === "rock" && computerInput === 'paper'){
            console.log ('you Lose! paper beats rock!');
        } else if (userInput === "rock" && computerInput === 'rock'){
            console.log ('Its a tie!');
        } else if (userInput === "rock" && computerInput === 'scissors'){
            console.log ('You win! Rock beats scissors!');
        } else if (userInput === "paper" && computerInput === 'rock'){
            console.log ('You win! Paper beats rock');
        } else if (userInput === "paper" && computerInput === 'paper'){
            console.log ('Its a tie!');
        } else if (userInput === "paper" && computerInput === 'scissors'){
            console.log ('You lose! scissors beats paper')
        } else if (userInput === "scissors" && computerInput === 'rock'){
            console.log ('You lose! rock beats scissors');
        } else if (userInput === "scissors" && computerInput === 'paper'){
            console.log ('You win! scissors beats paper')
        } else if (userInput === "scissors" && computerInput === 'scissors'){
            console.log ('Its a tie!');
        }
}
    
