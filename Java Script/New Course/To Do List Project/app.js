
const form = document.querySelector("#task-form");
const taskInput = document.querySelector('#task');
var taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
var clearBtn = document.querySelector('.clear-tasks');

loadEventListener();


function loadEventListener(){
    //Add Task
    form.addEventListener("submit",addItem);
    //Delete Task
    document.body.addEventListener('click', delItem);
    //Clear Tasks
    clearBtn.addEventListener('click',ClearTasks);
    //Filter Tasks
    filter.addEventListener('keyup',FilterTasks);
}

function addItem(event){
        if (taskInput.value==''){
            alert("Add a task");
            event.preventDefault();
            return;           
        }
        
        //Create li element
        const li = document.createElement("li");
        //Add class
        li.className = 'collection-item';
        //Create text node and append to li
        const textNode = document.createTextNode(taskInput.value);
        ////Append textnode to li
        li.appendChild(textNode);
        //Create a link 
        const link = document.createElement('a');
        //Add class
        link.className = 'delete-item secondary-content';
        //Add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>';
        //Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
        //Clear input
        form.reset();

        event.preventDefault();

}

function delItem(e){
    if (e.target.parentElement.className === 'delete-item secondary-content'){
        if(confirm("Are you sure?")){
        e.target.parentElement.parentElement.remove();
        }
    }
}

function ClearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
        //taskList.innerHTML = ' ';
    }
    console.log("deleted");
}

function FilterTasks(e){
    var text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            console.log("great");
            task.style.display = "block";
        }
        else{
            task.style.display ='none';
        }  
    });
}
