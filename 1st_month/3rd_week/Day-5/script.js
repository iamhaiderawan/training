// Step 1: Store student scores in an array
var studentScores = [85, 92, 58, 76, 88, 95, 67];

// Step 2: Function to calculate letter grade
function getLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Step 3: Function to get personalized feedback
function getFeedback(grade) {
  if (grade === "A") {
    return "Excellent work!";
  } else if (grade === "B") {
    return "Good job!";
  } else if (grade === "C") {
    return "Well done!";
  } else if (grade === "D") {
    return "You passed, but try harder!";
  } else {
    return "Needs improvement";
  }
}

// Main function to calculate and display grades
function calculateGrades() {
  // Step 4: Calculate total score using a loop
  var totalScore = 0;
  for (var i = 0; i < studentScores.length; i++) {
    totalScore = totalScore + studentScores[i];
  }

  // Step 5: Calculate average
  var averageScore = totalScore / studentScores.length;

  // Step 6: Display results for each student
  console.log("=== GRADE CALCULATOR ===\n");

  var output = "<h2>Results:</h2>";

  for (var i = 0; i < studentScores.length; i++) {
    var score = studentScores[i];
    var grade = getLetterGrade(score);
    var feedback = getFeedback(grade);

    // Display in console
    console.log(
      "Student " +
        (i + 1) +
        ": Score = " +
        score +
        ", Grade = " +
        grade +
        ", Status: " +
        feedback,
    );

    // Display on webpage
    output +=
      "<p>Student " +
      (i + 1) +
      ": Score = " +
      score +
      ", Grade = " +
      grade +
      ", Status: " +
      feedback +
      "</p>";
  }

  console.log("\nAverage class score: " + averageScore.toFixed(1));
  output += "<h3>Average class score: " + averageScore.toFixed(1) + "</h3>";

  // BONUS: Find highest and lowest scores
  var highestScore = studentScores[0];
  var lowestScore = studentScores[0];

  for (var i = 1; i < studentScores.length; i++) {
    if (studentScores[i] > highestScore) {
      highestScore = studentScores[i];
    }
    if (studentScores[i] < lowestScore) {
      lowestScore = studentScores[i];
    }
  }

  console.log("\nHighest Score: " + highestScore);
  console.log("Lowest Score: " + lowestScore);

  output += "<p><strong>Highest Score:</strong> " + highestScore + "</p>";
  output += "<p><strong>Lowest Score:</strong> " + lowestScore + "</p>";

  // BONUS: Count students who passed
  var passedCount = 0;
  for (var i = 0; i < studentScores.length; i++) {
    if (studentScores[i] >= 60) {
      passedCount = passedCount + 1;
    }
  }

  console.log(
    "\nStudents who passed: " + passedCount + " out of " + studentScores.length,
  );
  output +=
    "<p><strong>Students who passed:</strong> " +
    passedCount +
    " out of " +
    studentScores.length +
    "</p>";

  // Display all results on the webpage
  document.getElementById("output").innerHTML = output;
}

// Automatically run when page loads
calculateGrades();
