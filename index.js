//////////////////////////////////////////  this line is the function of a randomized pick of computer
console.log('hello player');
function getcomputerchoice(value){
    let randomnumber = Math.floor(Math.random() * 3);
    if(randomnumber === 0) {
        return  "rock";
    }
    if(randomnumber === 1) {
        return "paper";
    }
    if(randomnumber === 2) {
        return "scissors";
    }
}
//////////////////////////////////////////  these lines tracks the scors
let humanScore = 0;
let computerScore = 0;
////////////////////////////////////////// this lines is the actual game


function playround(humanchoice) {
    const computerchoice = getcomputerchoice();
    if (humanchoice === computerchoice) {
        return "it is a draw";
    }
    if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")) 
        {
        return "You won";} 
    else {
        return "You lost";
    }
}

////////////////////////////////////////////////////////// this line runs the game and update the scors
    function updateScore(choice) {
            const result = playround(choice);
            
            if (result === "You won") {
               humanScore++;
            } else if (result === "You lost") {
                computerScore++;
            }
        
    
    console.log(result);
console.log(`Now you have ${humanScore} and the computer has ${computerScore}`);
}
/////////////////////////////////////////////////// its the rock button play
const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener("click", () => {  
    updateScore("rock");});
//////////////////////////////////////////////// its the paper button play
const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener("click", () => {  
    updateScore("paper");});
    //////////////////////////////////////////// its the scissors button play
    const scissorsbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click", () => {  
    updateScore("scissors");});



 //////////////////////////////////////// this line will run the final result and tells u who win that we need it in future
    function finalResult() {
        if (humanScore>computerScore){
            console.log(`YAY YOU WON GOOD JOB BUDDY`)
        }
        else if (computerScore>humanScore){
            console.log(`you lost! try again later`)
        }
        else {
            console.log(`it is a draw game wellplayed`)
        }
    }


