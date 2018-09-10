var square = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#newMessage");
var colors = generateRandomColor(6);
var pickedColor = pickColor();


var headerRGB = document.querySelector("#headerRGB");
headerRGB.textContent = pickedColor;



function randomColor(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        return "rgb(" + x  + "," + " " + y +  "," + " " + z + ")";
}

function generateRandomColor(num){
    var colorArray=[];
    for ( var i = 0; i<num; i++){
        colorArray.push(randomColor());
        
}
return colorArray;
}

function pickColor(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function changeColor(){
    for (var i = 0; i< square.length; i++){
        square[i].style.background = colors[i];
    }
}

changeColor();


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

var resetButton = document.querySelector("button");

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

var easyBtn = document.getElementById("easy");
easyBtn.addEventListener("click", function(){
    alert("Done");
})

/*function Game (){
    colors = generateRandomColor(6);
}*/