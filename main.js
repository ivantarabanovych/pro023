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

        const colorBtn = document.createElement('button');
        colorBtn.textContent = 'Change color';
        colorBtn.addEventListener('click', () =>{
            taskContent.style.color = taskContent.style.color === 'red' ? 'black' : 'red';
        });

        const sizeBtn = document.createElement('button');
        sizeBtn.textContent = 'Change size';
        sizeBtn.addEventListener('click', () => {
            taskContent.style.fontSize = taskContent.style.fontSize === '16px' ? '20px' : '16px';
        });

        const bgColorBtn = document.createElement('button');
        bgColorBtn.textContent = 'Change background';
        bgColorBtn.addEventListener('click', () =>{
            taskContent.style.backgroundColor = taskContent.style.backgroundColor === 'blue' ? 'red' : 'blue';
        })

        listItem.appendChild(taskContent);
        listItem.appendChild(deleteBtn);
        listItem.appendChild(colorBtn);
        listItem.appendChild(sizeBtn);
        listItem.appendChild(bgColorBtn);

        taskList.appendChild(listItem);

        filterInput.value = '';
    }
}

taskButton.addEventListener('click', addTask);
