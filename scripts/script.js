function compChoice(){
    let obj=["rock","paper","scissors"];
    return (obj[Math.floor(Math.random()*3)]);
}
function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        c++;
        console.log("You lost! Paper covers rock!")
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        p++;
        console.log("You won! Paper covers rock!");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        p++;
        console.log("You won! rock breaks scissors!");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        c++;
        console.log("You lost! rock breaks scissors!");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        c++;
        console.log("You lost! scissors cuts rock!");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        p++;
        console.log("You won! scissors cuts Paper!");
    }
    else {
        console.log("Draw");
    }
}

function match(playerChoice){
    console.log(playerChoice);
    //let playerChoice=prompt("Choose object ");
    playRound(playerChoice,compChoice());
}
var m=0;p=0,c=0;
function game(){
    m++;
    console.log("p:",p);
    console.log("c:",c);
    if (m==5 && p>c){
        console.clear();
        console.log("Winner : Player");
        p=0,c=0,m=0;
    }
    else if (m==5 && c>p){
        console.clear();
        console.log("Winner : Computer");
        p=0,c=0,m=0;
    }
    else if (m==5){
        console.clear();
        console.log("DRAW!!!!!!!!!");
        p=0,c=0,m=0;
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click' , ()=>{match("rock");game();});
paper.addEventListener('click' , ()=>{match("paper");game();});
scissors.addEventListener('click' , ()=>{match("scissors");game();});


