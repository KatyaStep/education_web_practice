console.log("CONNECTED!");
var h1 = document.querySelector("h1");
console.log(h1);
var body = document.querySelector("body");
h1.style.color = "red";
var isBlue = true;

setInterval(function(){
    if (isBlue){
        body.style.background = "pink";
    }
    else {
        body.style.background = "white";
    }
    isBlue = !isBlue;
},1000);


//getElementByID

/*var tag = document.getElementById("highlight");

//getElementByClassName
var tags = document.getElementsByClassName("bolded");
console.log(tags);

//getElementByTagName

var tags = document.getElementsByTagName("li");
console.log(tags[0]);*/