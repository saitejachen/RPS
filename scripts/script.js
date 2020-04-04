function compChoice(){
    let obj=["rock","paper","scissors"];
    return (obj[Math.floor(Math.random()*3)]);
}
function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        alert(computerSelection);
        alert("You lost! Paper covers rock!")
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        alert(computerSelection);
        alert("You won! Paper covers rock!");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert(computerSelection);
        alert("You won! rock breaks scissors!");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert(computerSelection);
        alert("You lost! rock breaks scissors!");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert(computerSelection);
        alert("You lost! scissors cuts rock!");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert(computerSelection);
        alert("You won! scissors cuts Paper!");
    }
    else {
        alert("Draw");
    }
}

function game(){
    let playerChoice=prompt("Choose object ");
    playRound(playerChoice,compChoice());
}

game();