const setNumber = Math.floor(Math.random()*10)+1;
console.log ("Guess number is ", setNumber);
var tryCount = 3;

var guessNumber = document.querySelector("#text-field");
var submitBtn = document.querySelector("#submit-btn");


submitBtn.addEventListener("click",getGuessNumber);


function getGuessNumber (e){
    
    if (guessNumber.value != setNumber){
        if (tryCount != 1){
            tryCount = tryCount - 1;
            message(guessNumber.value + " is not correct, you have " + tryCount + " guesses left");
            errorStyle();
            setTimeout(clearMessage,2000);

            //console.log("You are wrong, try it again")
        }
        else {
            console.log("GameOver") 
            message("Sorry, game over. Correct number was " + setNumber);
            gameOverstyle();
        }
    }
    else{
        console.log("You are win!")
        message("You are win! " + guessNumber.value + " is correct!");
        winnerStyle();
    }
    e.preventDefault();  
}

//Result Message
function message (text){
    var newE = document.createElement("div");
    newE.className = "result"
    var newContent = document.createTextNode (text);
    newE.appendChild (newContent);
    var currentdiv = document.querySelector("#myscript");
    document.body.insertBefore(newE,currentdiv);
}
//Clear message
function clearMessage(){
    document.querySelector(".result").remove();
    guessNumber.removeAttribute("style");
}


//Style functions 

function errorStyle(){
    guessNumber.style.border = '#ff0000 solid medium';
    document.querySelector(".result").style.color = "#ff0000";
}

function gameOverstyle(){
    guessNumber.style.border = '#ff0000 solid medium';
    document.querySelector(".result").style.color = "#ff0000";
    guessNumber.readOnly = true;
    submitBtn.value = "Play Again";
    reset();
}

function winnerStyle (){
    guessNumber.style.border = "#00ff00 solid medium";
    document.querySelector(".result").style.color = "#00ff00";
    guessNumber.readOnly = true;
    submitBtn.value = "Play Again";
    submitBtn.className = "play-again"
    reset();
}

function reset(){
    if (submitBtn.value = "Play Again"){
        submitBtn.removeEventListener("click",getGuessNumber);
        submitBtn.addEventListener("click",function(){
             var confirmation = confirm("Do you want to start play again?")
             if (confirmation == true) {
                location.reload();     
             }
         })
    }
}
