var squareDisplayed = document.querySelectorAll("#test");
var messageDisplay = document.querySelector("#newMessage");
var resetButton = document.querySelector("button");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var headerRGB = document.querySelector("#headerRGB");
var colorArray=[];
var pickedColor;
//var squareDisplayed = 6;
var defaultSquareDisplayed = 6; 
var easyMode = 3;
var hardMode = 6;

drawSquares(hardMode);
generateRandomColor(hardMode);
changeColor(hardMode);
clickedSquare(hardMode);

function drawSquares(hardMode){ 
    for (var i = 0; i < hardMode; i++){
        var node = document.createElement("div");
        node.setAttribute("class", "square");
        var element = document.getElementById("container");
        element.appendChild(node);
        var square = document.querySelectorAll(".square");
    }
    return hardMode;
}

function randomColor(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        return "rgb(" + x  + "," + " " + y +  "," + " " + z + ")";
}

function generateRandomColor(hardMode){
    colorArray=[];
    for ( var i = 0; i<hardMode; i++){
        colorArray.push(randomColor());      
}
return colorArray;
}


function pickColor(){
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    pickedColor = randomColor;
    headerRGB.textContent = pickedColor;
    return pickedColor;
}

function changeColor(hardMode){
    var square = document.querySelectorAll(".square");
    for (var i = 0; i< hardMode; i++){
        square[i].style.background = colorArray[i];
    }
    return hardMode;
}

function clickedSquare(hardMode){
    var clickedColor;
    var square = document.querySelectorAll(".square");
    for ( var i = 0; i< hardMode; i++){
        square[i].addEventListener("click", function(){
           clickedColor = this.style.backgroundColor; 
           console.log("Clicked= ", clickedColor);
           if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
           }
           else{
                messageDisplay.textContent = "Wrong!"
                this.style.backgroundColor = "black";
               } 
            
        })
    }
}
 /*    
function addNewClass(squareForHardMode){
    for (var i = 0; i<squareForHardMode; i++){
        squareDisplayed[i].classList.add("square");
        }
    return squareForHardMode;
}

/*function removeClass(squareForEasyMode){
    var squareDisplayed.length = squareForEasyMode;
    for (var i = 0; i<squareForEasyMode; i++){
        squareDisplayed[i].classList.remove("square");
        }
    console.log (squareDisplayed.length);
    return squareForEasyMode;
}


resetButton.addEventListener("click",function(){
    squareDisplayed = document.querySelectorAll("#test");
    var resultFunction1 = generateRandomColor();
    var pickedColor = pickColor();
    var temp = squareDisplayed;
    messageDisplay.textContent =""; 
    
    for(var i = 0; i <temp.length; i++) {
		temp[i].style.background = colorArray[i];
	}
    return resultFunction1;
});
*/
easyBtn.addEventListener("click", function(){
    var parentContainer = document.querySelector("#container");
    while (parentContainer.firstChild){
        parentContainer.removeChild(parentContainer.firstChild);
    }
    hardMode = 3;
    drawSquares(hardMode);
    generateRandomColor(hardMode);
    changeColor(hardMode);
    clickedSquare(hardMode);
})

    //square.parentNode.removeChild(square)
    //hardMode = easyMode;
    /*
    drawSquares(hardMode);
    //generateRandomColor(hardMode);
    //changeColor(hardMode);
    //clickedSquare(hardMode);
    
    })*/
 /*   
    })
    //return newVariable;
    //easyBtn.classList.add("btnEasy");
    //hardBtn.classList.remove("btnHard");
    //drawSquares();
    //squareDisplayed.length = squareForEasyMode;
    //return squareDisplayed;
*/

hardBtn.addEventListener("click", function(){
    var parentContainer = document.querySelector("#container");
    while (parentContainer.firstChild){
        parentContainer.removeChild(parentContainer.firstChild);
    }
    hardMode = 6;
    drawSquares(hardMode);
    generateRandomColor(hardMode);
    changeColor(hardMode);
    clickedSquare(hardMode);
    })
/*
function drawSquares(){ 
    for (var i = 0; i<squareDisplayed.length; i++){
        squareDisplayed[i].classList.add("square");
    }
    return squareDisplayed;
}



// default loaded page
drawSquares();
generateRandomColor();
pickColor()
changeColor();
clickedSquare();

*/


