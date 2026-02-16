// Function to calculate grade
function calculateGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 80) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 50) return "D";
  else return "Fail";
}

// Function to validate input
function isValidMarks(marks) {
  return marks >= 0 && marks <= 100;
}

// Main function
function startApp() {
  let name = prompt("Enter student name:");
  let marks = Number(prompt("Enter marks (0-100):"));

  if (!isValidMarks(marks)) {
    alert("Invalid marks! Please enter between 0 and 100.");
    return;
  }

  let grade = calculateGrade(marks);

  showResult(name, marks, grade);
}

// Function to display result
function showResult(name, marks, grade) {
  alert("Student: " + name + "\nMarks: " + marks + "\nGrade: " + grade);
}
