const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');
const filterOption = document.querySelector(".filter-task");


taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTask);


function myFunction() {
    var x;
    if (confirm("Are you sure you want to delete this task?") == true) {
        x = true;
    } else {
        x = false;
    }
    return x; 
}

function addTask(event) {
    event.preventDefault();
    console.log("hello");

    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task");

    const newTask= document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task-item');
    taskDiv.appendChild(newTask);

   

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    taskDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    taskInput.value="";




}

function deleteCheck(e) {
    
    const item = e.target;
   

    if(item.classList[0] === 'delete-btn') {

        const x = myFunction();
        if (x) {
            const task = item.parentElement;
            task.classList.add("fall");
            task.addEventListener('transitionend', function() {
                task.remove();
    
            });
        }

       
        

    }

    if(item.classList[0]=== "complete-btn") {
        const task = item.parentElement;
        task.classList.toggle("completed");


    }




}

function filterTask(e) {
    const tasks = taskList.childNodes;

    tasks.forEach(function(task){
        switch(e.target.value){
            case "all":
                task.style.display = "flex";
                break;

            case "completed":
                if(task.classList.contains('completed')) {
                task.style.display = "flex";
                } else {
                    task.style.display = "none";
                }
                break;

            case "uncompleted":
                if(!task.classList.contains('completed')) {
                    task.style.display = "flex";
                    } else {
                        task.style.display = "none";
                    }
                break;
        }
    });

    
}


