console.log('hello player')

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
function getHumanChoice(value2) {
    let number = prompt ("please choose one of the following tool to beat your opponent Rock, Paper or Scissors",);
    number = number.toLowerCase();
    if(number === "rock") {
        return  "rock";
    }
    if(number === "paper") {
        return "paper";
    }
    if(number === "scissors") {
        return "scissors";
    }
}
let humanScore = 0;
let computerScore = 0;
    

function playround(humanchoice, computerchoice) {
    var humanchoice = getHumanChoice();
    var computerchoice = getcomputerchoice();
    if (humanchoice === "rock" && computerchoice === "rock") {
        return "it is a draw"}
    if (humanchoice === "rock" && computerchoice === "paper") {
        return "You lost" }
    if (humanchoice === "rock" && computerchoice === "scissors") {
         return "You won"}
    if (humanchoice === "paper" && computerchoice === "rock") {
        return "You won"}
    if (humanchoice === "paper" && computerchoice === "paper") {
        return "it is a draw"}
    if (humanchoice === "paper" && computerchoice === "scissors") {
        return "You lost"}
    if (humanchoice === "scissors" && computerchoice === "rock") {
        return "You lost"}
    if (humanchoice === "scissors" && computerchoice === "paper") {
        return "You won"}
    if (humanchoice === "scissors" && computerchoice === "scissors") {
        return "it is a draw"} 
    else {
        return "Invalid choice"}}
    
    function updateScore() {
            const result = playround();
            
            if (result === "You won") {
               humanScore++;
            } else if (result === "You lost") {
                computerScore++;
            }
        
    
    console.log(result);
console.log(`Now you have ${humanScore} and the computer has ${computerScore}`);
}
updateScore();
updateScore();
updateScore();
updateScore();
updateScore();
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
finalResult();

