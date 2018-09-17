
var form = document.querySelector("#task-form");
var taskInput = document.querySelector('#task');


form.addEventListener("submit",
function(event){
    if (taskInput.value==''){
        alert("Add a task");
    }
    //Create li element
    const li = document.createElement("li");
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode);
    document.querySelector(".collection").appendChild(li);


    form.reset();
    event.preventDefault();
});

