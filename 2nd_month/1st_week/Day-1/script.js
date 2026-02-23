// Array to store students
let students = [];

// Selecting elements
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");

// Arrow function to render students
const renderStudents = () => {
  studentList.innerHTML = "";

  students.forEach(({ name, age }, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${name} (${age} years old)`;
    studentList.appendChild(li);
  });
};

// Add student function
const addStudent = () => {
  const name = nameInput.value;
  const age = ageInput.value;

  if (!name || !age) {
    alert("Please enter both name and age");
    return;
  }

  const newStudent = { name, age };

  // Using spread operator
  students = [...students, newStudent];

  renderStudents();

  nameInput.value = "";
  ageInput.value = "";
};

// Event listener
addBtn.addEventListener("click", addStudent);
