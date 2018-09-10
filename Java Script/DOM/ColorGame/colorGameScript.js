var square = document.querySelectorAll("#test");
var messageDisplay = document.querySelector("#newMessage");
var resetButton = document.querySelector("button");
var easyBtn = document.getElementById("easy");
var colors;
var pickedColor;
var countsSquare = 6; 

//Game();

function randomColor(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        return "rgb(" + x  + "," + " " + y +  "," + " " + z + ")";
}

function generateRandomColor(countsSquare){
    var colorArray=[];
    for ( var i = 0; i<countsSquare; i++){
        colorArray.push(randomColor());
        
}
return colorArray;
}

function pickColor(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function changeColor(){
    var square = document.querySelectorAll("#test");
    for (var i = 0; i< square.length; i++){
        square[i].style.background = colors[i];
    }
}

function clickedSquare(){
    for ( var i = 0; i< square.length; i++){
        square[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            console.log("Clicked= ", clickedColor);
            console.log("Picked = ", pickedColor);
            if (clickedColor === pickedColor){
                //alert("CORRECT!");
                messageDisplay.textContent = "Correct!";
                console.log("Random Picked Color = ", pickedColor);
                console.log ("Clicked Color = ", clickedColor);
            }
            else{
                //alert("WRONG!"); 
                messageDisplay.textContent = "Wrong!";
                this.style.backgroundColor = "black";
           }
    })
    }
}



resetButton.addEventListener("click",function(){
    colors = generateRandomColor(6);
	//pick a new random color from array
	pickedColor = pickColor();
    headerRGB.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];
	}
    }); 


easyBtn.addEventListener("click", function(){
    countsSquare = 3;
    addNewClass(countsSquare);
    Game();
});

function addNewClass(countsSquare){
    var square = document.querySelectorAll("#test");
    for (var i = 0; i<countsSquare; i++){
        square[i].classList.add("square");
        }
    return countsSquare;
}


function Game (){ 
    var headerRGB = document.querySelector("#headerRGB");
    colors = generateRandomColor(countsSquare);
    pickedColor = pickColor();
    headerRGB.textContent = pickedColor;
    changeColor();
    clickedSquare();
    return colors, pickedColor;
    easyBtn.addEventListener("click", addNewClass(3));
    
}
