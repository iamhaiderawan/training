🔹 What Are Events?

An event is something that happens in the browser.

Examples:

User clicks a button → click

User submits a form → submit

User types → keydown

Mouse moves → mouseover

JavaScript can listen to events and respond.

🔹 1️⃣ Click Event

When user clicks a button.

✅ Example 1 – Click Event
index.html

<!DOCTYPE html>
<html>
<head>
  <title>Click Event</title>
</head>
<body>

  <h1 id="heading">Welcome</h1>
  <button id="btn">Click Me</button>

  <script src="script.js"></script>
</body>
</html>

script.js
let button = document.getElementById("btn");
let heading = document.getElementById("heading");

button.addEventListener("click", function() {
heading.innerText = "Button Clicked!";
heading.style.color = "blue";
});

🔹 What is addEventListener()?

It listens for an event.

Syntax:

element.addEventListener("eventName", function() {
// code to run
});

This is the professional way (better than onclick).

🔹 2️⃣ Submit Event (Forms)

When user submits a form.

⚠ Important: By default, forms refresh the page.
We use:

event.preventDefault();

To stop refresh.
