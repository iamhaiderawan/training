// Array of objects
let tasks = [];

// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Arrow function to render tasks
const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach(({ text }, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${index + 1}. ${text}
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });
};

// Add task
const addTask = () => {
  const taskText = taskInput.value;

  if (!taskText) {
    alert("Enter a task!");
    return;
  }

  const newTask = { text: taskText };

  // Spread operator
  tasks = [...tasks, newTask];

  renderTasks();
  taskInput.value = "";
};

// Delete task
const deleteTask = (index) => {
  tasks = tasks.filter((_, i) => i !== index);
  renderTasks();
};

addTaskBtn.addEventListener("click", addTask);
