var button = document.querySelector("button");
var body = document.querySelector("body");
var click = true;
var image = document.querySelector("img");

button.addEventListener("click", changePicture);
function changePicture(){
    console.log("CLICKED"); 
    click = !click;
    if(!click){
        body.setAttribute("class","page2");
        image.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WelshCorgi.jpeg/220px-WelshCorgi.jpeg"); 
        //click = !click;
    }
    else{
        image.setAttribute("src", "https://steemitimages.com/DQmTSPXxH9sTXdxtCvdgDPgxXM2Uw7924v4nbZ5qSRHfrV8/image.png");
        body.setAttribute("class","page");
        //click = !click;
    }
}
