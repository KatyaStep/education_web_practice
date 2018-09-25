const setNumber = Math.floor(Math.random()*10)+1;
console.log ("Guess number is ", setNumber);
var tryCount = 3;

var guessNumber = document.querySelector("#text-field");
var submitBtn = document.querySelector("#submit-btn");


submitBtn.addEventListener("click",getGuessNumber);

function getGuessNumber (e){
    
    if ((guessNumber.value != setNumber) && (guessNumber.value > 0)){
        if (tryCount != 1){
            tryCount = tryCount - 1;
            message(guessNumber.value  + " is not correct, you have " + tryCount + " guesses left");
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
    else if (Number(guessNumber.value) === setNumber){
        console.log("You are win!")
        message("You are win! " + guessNumber.value  + " is correct!");
        winnerStyle();
    }
    else {
        showError();
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
    reset();
}

function reset(){
    if (submitBtn.value = "Play Again"){
        submitBtn.removeEventListener("click",getGuessNumber);
        submitBtn.addEventListener("click",function(e){
             var confirmation = confirm("Do you want to start play again?")
             if (confirmation == true) {
                location.reload();     
             }
             else {
                 e.preventDefault();
             }
         })
    }
}

function showError(error){
     //Create div
     const errorDiv = document.createElement('div');
     //Create class
     errorDiv.className = "alert alert-danger";
     //Create text node
     node = document.createTextNode("Please, check your number!");
     //Append child
     errorDiv.appendChild(node);
     //Insert error before heading
     const body = document.querySelector("#body");
     const heading = document.querySelector("#header");
     body.insertBefore(errorDiv,heading);
 
     //Set timeout
     setTimeout(clearError, 3000);

 }

 function clearError(){
    document.querySelector(".alert").remove();
}