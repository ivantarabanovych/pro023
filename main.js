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

const taskList = document.createElement("li");
document.body.appendChild(taskList);

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";
    filterTasks();
  }
};
const filterTasks = () => {
  const filterText = filterInput.value.toLowerCase();
  const items = taskList.getElementsByTagName("li");

  for (let item of items) {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filterText) ? "" : "none";
  }
};

taskButton.addEventListener('click', addTask);
filterInput.addEventListener('input', filterTasks);
