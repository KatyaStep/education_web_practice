var squareDisplayed = document.querySelectorAll("#test");
var messageDisplay = document.querySelector("#newMessage");
var newColors = document.querySelector("button");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var headerRGB = document.querySelector("#headerRGB");
var colorArray=[];
var pickedColor;
//var squareDisplayed = 6;
var defaultSquareDisplayed = 6; 
var easyMode = 3;
var hardMode = 6;
var gameMode = 0;

drawSquares(gameMode);
generateRandomColor(gameMode);
changeColor(gameMode);
clickedSquare(gameMode);

function drawSquares(gameMode){ 
    for (var i = 0; i < gameMode; i++){
        var node = document.createElement("div");
        node.setAttribute("class", "square");
        var element = document.getElementById("container");
        element.appendChild(node);
        var square = document.querySelectorAll(".square");
    }
    return gameMode;
}

function randomColor(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        return "rgb(" + x  + "," + " " + y +  "," + " " + z + ")";
}

function generateRandomColor(gameMode){
    colorArray=[];
    for ( var i = 0; i<gameMode; i++){
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

function changeColor(gameMode){
    var square = document.querySelectorAll(".square");
    for (var i = 0; i< gameMode; i++){
        square[i].style.background = colorArray[i];
    }
    return gameMode;
}

function clickedSquare(gameMode){
    var clickedColor;
    var square = document.querySelectorAll(".square");
    for ( var i = 0; i< gameMode; i++){
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
 
newColors.addEventListener("click",function(){
    squareDisplayed = document.querySelectorAll(".square");
    var colorArray = generateRandomColor(gameMode);
    console.log(colorArray);
    pickColor();
    messageDisplay.textContent =""; 
    for(var i = 0; i < squareDisplayed.length; i++) {
		squareDisplayed[i].style.background = colorArray[i];
    }
});

easyBtn.addEventListener("click", function(){
    var parentContainer = document.querySelector("#container");
    while (parentContainer.firstChild){
        parentContainer.removeChild(parentContainer.firstChild);
    }
    gameMode = easyMode;
    drawSquares(gameMode);
    generateRandomColor(gameMode);
    pickColor();
    changeColor(gameMode);
    clickedSquare(gameMode);
})


hardBtn.addEventListener("click", function(){
    var parentContainer = document.querySelector("#container");
    while (parentContainer.firstChild){
        parentContainer.removeChild(parentContainer.firstChild);
    }
    gameMode = hardMode;
    drawSquares(gameMode);
    generateRandomColor(gameMode);
    pickColor();
    changeColor(gameMode);
    clickedSquare(gameMode);
    })






