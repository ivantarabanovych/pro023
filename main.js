const heading = document.createElement("h1");
heading.textContent = "Task list:";
document.body.appendChild(heading);

const taskButton = document.createElement("button");
taskButton.classList.add("add-task");
taskButton.textContent = "Add task";
document.body.appendChild(taskButton);

const taskInput = document.createElement("input");
taskInput.setAttribute("placeholder", "add new task...");
document.body.appendChild(taskInput);

const filterInput = document.createElement("input");
filterInput.setAttribute("placeholder", "Enter text for filter...");
document.body.appendChild(filterInput);

const taskList = document.createElement("ul");
document.body.appendChild(taskList);

const deleteTask = (taskItem) => {
    taskItem.remove(); 
};

const addTask = () =>{
    const taskText = taskInput.value.trim();
    if (taskText){
        const listItem = document.createElement('li');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = ('Delete');
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', () => deleteTask(listItem));

        listItem.appendChild(taskContent);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);

        filterInput.value = '';
    }
}

taskButton.addEventListener('click', addTask);
