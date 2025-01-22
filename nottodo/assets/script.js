const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTask() {
    const taskText = taskInput.value.trim();

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = '';
}


function checkTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
}


addTaskBtn.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
