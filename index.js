console.log('hello player')

function getcomputerchoice(value){
    if(value === 0) {
        return  "rock";
    }
    if(value === 1) {
        return "paper";
    }
    if(value === 2) {
        return "scissors";
    }
    
}
console.log( getcomputerchoice( Math.floor(Math.random() * 3)) )

