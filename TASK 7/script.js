const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const errorMsg = document.getElementById('errorMsg');
const taskCountDisplay = document.getElementById('taskCount');

let totalTasks = 0;

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        errorMsg.classList.remove('hidden');
        return;
    }
    
    errorMsg.classList.add('hidden');

    const li = document.createElement('li');
    li.classList.add('task-item');

    const taskText = document.createElement('span');
    taskText.innerText = taskValue;
    taskText.classList.add('task-text');

    taskText.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
        totalTasks--;
        taskCountDisplay.innerText = totalTasks; 
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    totalTasks++;
    taskCountDisplay.innerText = totalTasks;
    taskInput.value = "";
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});