let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Please Enter a Task");
    return;
  }

  // Create list item
  let li = document.createElement("li");
  li.innerText = taskText;

  // create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");

  //delete event
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
