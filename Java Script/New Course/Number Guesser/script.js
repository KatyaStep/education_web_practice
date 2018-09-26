//Values
let min = 1,
    max = 10,
    guessLeft = 3;
    winningNumber = randomNum(min,max);

//UI Elements
const  guessNumber = document.querySelector("#text-field"),
       submitBtn = document.querySelector("#submit-btn"),
       minNum = document.querySelector("#min-number"),
       maxNum = document.querySelector('#max-number');

// Set min and max numbers in tne text of the tasks

minNum.textContent = min;
maxNum.textContent = max;

//get randomNum function
function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Guess number to console
console.log ("Guess number is ", winningNumber);


//Set event for submit button
submitBtn.addEventListener("click",getGuessNumber);

//GuessNumber function 
function getGuessNumber (e){
    let guess = parseInt(guessNumber.value);

    if (isNaN(guess) || guess > max || guess < min){
        showError();
    }
    else if (guess != winningNumber){
        if (guessLeft != 1){
            guessLeft -= 1;
            message(`${guess} is not correct, you have  ${guessLeft} guesses left`, 'red');
            errorStyle();
            setTimeout(clearMessage,2000);

            //console.log("You are wrong, try it again")
        }
        else {
            console.log("GameOver") 
            message(`Sorry, game over. Correct number was  ${winningNumber}`, 'red');
            gameOverStyle();
        }
    }
    else {
        console.log("You are win!")
        message(`You are win! ${guess} is correct!`, 'green');
        winnerStyle();
    }
    e.preventDefault();  
}

//Result Message
function message (text,color){
    var newE = document.createElement("div");
    newE.className = "result ml-4"
    var newContent = document.createTextNode (text);
    newE.appendChild (newContent);
    var currentdiv = document.querySelector("#myscript");
    document.body.insertBefore(newE,currentdiv);
    newE.style.color = color;
}


// Reset function
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

//Function showError
function showError(error){
     //Create div
     const errorDiv = document.createElement('div');
     //Create class
     errorDiv.className = "alert alert-danger";
     //Create text node
     node = document.createTextNode("Please, check your number");
     //Append child
     errorDiv.appendChild(node);
     //Insert error before heading
     const body = document.querySelector("#body");
     const heading = document.querySelector("#header");
     body.insertBefore(errorDiv,heading);
 
     //Set timeout
     setTimeout(clearError, 2000);

 }

//Clear message
function clearMessage(){
    document.querySelector(".result").remove();
    guessNumber.removeAttribute("style");
}

 //Function ClearError
 function clearError(){
    document.querySelector(".alert").remove();
}


//Style functions for error, gameover and win modes

function errorStyle(){
    guessNumber.style.border = 'red solid medium';
}

function gameOverStyle(){
    guessNumber.style.border = 'red solid medium';
    guessNumber.readOnly = true;
    submitBtn.value = "Play Again";
    reset();
}

function winnerStyle (){
    guessNumber.style.border = "green solid medium";
    guessNumber.readOnly = true;
    submitBtn.value = "Play Again";
    reset();
}