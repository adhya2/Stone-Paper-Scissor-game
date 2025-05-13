let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((ch) => {
    //console.log(ch);
    ch.addEventListener("click", () =>{
        const userChoice = ch.getAttribute("id");
        playGame(userChoice);
    })
}) 

const playGame = (userChoice) =>{
    //console.log("user's choice is ", userChoice);
    //generating choice of the computer
    const compChoice = generateComputerChoice();
    //console.log("computer's choice is ", compChoice);

    if(userChoice === compChoice){
        //drawGame
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

generateComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // wants no in b/w 0 t0 2 floor removes decimal part
    return options[randIdx];
}

const drawGame = () => {
    //console.log("Game was draw!!")
    mssg.innerText = "Game was draw. Play again!!"
    mssg.style.backgroundColor = "#081b31";
}

showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You Win !!") 
        mssg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`
        mssg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You Lose");
        mssg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`
        mssg.style.backgroundColor = "red";
    }
}