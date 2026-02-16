# Week 5 Day 5 - JavaScript Practice Problem

## Grade Calculator Project

A simple JavaScript application that calculates student grades, provides feedback, and displays statistics.

---

## Project Description

This project demonstrates fundamental JavaScript concepts including:

- Variables and Arrays
- Functions
- Loops (for)
- Conditional Statements (if/else)
- DOM Manipulation
- Console Logging

The Grade Calculator takes an array of student scores, calculates letter grades, provides personalized feedback, and displays various statistics including average score, highest/lowest scores, and pass rate.

---

## File Structure

```
Week5-Day5/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

---

## Features

### Core Features:

- ✅ Store multiple student scores in an array
- ✅ Calculate letter grades (A, B, C, D, F)
- ✅ Provide personalized feedback for each grade
- ✅ Calculate class average score
- ✅ Display results both on webpage and in console

### Bonus Features:

- ✅ Find highest and lowest scores
- ✅ Count students who passed (score ≥ 60)
- ✅ Display all statistics on the webpage

---

## Grading Scale

| Grade | Score Range | Feedback                    |
| ----- | ----------- | --------------------------- |
| A     | 90-100      | Excellent work!             |
| B     | 80-89       | Good job!                   |
| C     | 70-79       | Well done!                  |
| D     | 60-69       | You passed, but try harder! |
| F     | Below 60    | Needs improvement           |

---

## How to Run

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **View Results** in two ways:
   - On the webpage itself
   - In the browser console (Press F12 or Right-click → Inspect → Console)
4. **Click** the "Calculate Grades" button to recalculate

---

## Usage

### View in Browser:

Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)

### View in Console:

1. Open the browser
2. Press `F12` (or `Right-click` → `Inspect`)
3. Click on the `Console` tab
4. See detailed output with all calculations

---

## Customization

### Change Student Scores:

Edit the `studentScores` array in `script.js`:

```javascript
var studentScores = [85, 92, 58, 76, 88, 95, 67]; // Modify these values
```

### Adjust Grading Scale:

Modify the conditions in the `getLetterGrade()` function:

```javascript
function getLetterGrade(score) {
  if (score >= 90) {
    return "A";
  }
  // Adjust these values as needed
}
```

### Change Feedback Messages:

Edit the `getFeedback()` function to customize messages:

```javascript
function getFeedback(grade) {
  if (grade === "A") {
    return "Excellent work!"; // Change this message
  }
  // Modify other messages
}
```

---

## Learning Objectives

By completing this project, you will practice:

1. **Variables**: Storing data in variables and arrays
2. **Functions**: Creating reusable code blocks
3. **Loops**: Iterating through arrays with `for` loops
4. **Conditionals**: Making decisions with `if/else` statements
5. **DOM Manipulation**: Displaying results on a webpage
6. **Console Methods**: Using `console.log()` for debugging

---

## Code Breakdown

### Key Functions:

**getLetterGrade(score)**

- Takes a numeric score as input
- Returns a letter grade (A, B, C, D, or F)
- Uses if/else conditions to determine grade

**getFeedback(grade)**

- Takes a letter grade as input
- Returns personalized feedback message
- Uses if/else conditions for different messages

**calculateGrades()**

- Main function that orchestrates all calculations
- Loops through all student scores
- Calculates average, highest, and lowest scores
- Displays results on webpage and console

---

## 📝 Sample Output

```
=== GRADE CALCULATOR ===

Student 1: Score = 85, Grade = B, Status: Good job!
Student 2: Score = 92, Grade = A, Status: Excellent work!
Student 3: Score = 58, Grade = F, Status: Needs improvement
Student 4: Score = 76, Grade = C, Status: Well done!
Student 5: Score = 88, Grade = B, Status: Good job!
Student 6: Score = 95, Grade = A, Status: Excellent work!
Student 7: Score = 67, Grade = D, Status: You passed, but try harder!

Average class score: 80.1

Highest Score: 95
Lowest Score: 58

Students who passed: 6 out of 7
```

## 🔄 Future Enhancements

Ideas to expand this project:

- [ ] Add input fields to enter scores dynamically
- [ ] Allow users to add/remove students
- [ ] Create a visual chart of grade distribution
- [ ] Add CSS styling for better appearance
- [ ] Save results to local storage
- [ ] Export results as a downloadable file

---

## 👨‍💻 Author

**Week 5 - JavaScript Foundation Practice**

Created as part of a web development learning journey.

---

## 📅 Week 5 Overview

- **Day 1**: What is JavaScript? Variables & data types
- **Day 2**: Conditions (if/else)
- **Day 3**: Loops
- **Day 4**: Functions
- **Day 5**: Practice Problem ✅ (This Project)

---

## 📜 License

This project is created for educational purposes. Feel free to use and modify for learning.

---
