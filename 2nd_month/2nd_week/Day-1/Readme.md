Day 1 — Project Planning

Step 1: Choose a Project

Since it should be:

- Not too small
- Not too complex
- Frontend only

A perfect training-level project is:

Smart Task & Notes Manager

(Professional + achievable in 5 days)

Project Idea

A web app where user can:

- Add tasks
- Add notes
- Set priority
- Mark task completed
- Delete tasks
- View task list dynamically

This is bigger than Todo App, but still manageable.

Step 2: Project Goal
Objective
Create a frontend application that helps users manage daily tasks efficiently using HTML, CSS, and JavaScript.

Step 3: Features (VERY IMPORTANT)

These define my project scope.

Core Features
1 Add Task
User enters:

- Task title
- Priority (High / Medium / Low)

2 Display Tasks
Show tasks dynamically on screen.

3 Mark Task Complete
Completed task changes style.

4 Delete Task
Remove unwanted task.

5 Live Update (No Refresh)
DOM manipulation required.

Step 4: Technologies Used
Technology ----------- Purpose
HTML ----------------- Structure
CSS ------------------ Styling
JavaScript (ES6) ----- Logic
DOM ------------------ Interaction

Step 5: Project Folder Structure
task-manager/
│
├── index.html
├── style.css
├── script.js
└── README.md

Clean structure = professional work

Step 6: Data Structure Planning (Very Important)

We decide before coding.

Tasks will be stored like:

let tasks = [
{
id: 1,
title: "Complete Internship Task",
priority: "High",
completed: false
}
];

i already learned:

- Arrays
- Objects
- Destructuring

So this fits perfectly.

Step 7: UI Layout Planning

Page will contain:

---

        Task Manager

---

[ Task Input ]
[ Priority Dropdown ]
[ Add Task Button ]

------------Tasks-------------
✔ Learn JavaScript [Delete]
□ Practice CSS [Delete]

---
