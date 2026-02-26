// Array of objects
const students = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 21 },
  { name: "Ahmed", age: 23 },
];

const showBtn = document.getElementById("showBtn");
const studentList = document.getElementById("studentList");

// Arrow function
const displayStudents = () => {
  studentList.innerHTML = "";

  students.forEach(({ name, age }) => {
    const li = document.createElement("li");
    li.innerText = `${name} - ${age} years old`;
    studentList.appendChild(li);
  });
};

showBtn.addEventListener("click", displayStudents);
