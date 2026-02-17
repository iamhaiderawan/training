🔹 What is DOM?

DOM = Document Object Model

It is how JavaScript sees and controls HTML.

When a webpage loads:

The browser converts HTML into a tree structure

JavaScript can access and modify that structure

So:

HTML → Browser → DOM → JavaScript controls it

🔹 Why DOM is Important?

Without DOM:

JavaScript cannot change HTML

Cannot update text

Cannot respond to user interaction

Cannot build dynamic websites

DOM allows you to:
✔ Change text
✔ Change styles
✔ Add or remove elements
✔ Respond to button clicks

🔹 Simple DOM Example
index.html

<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>

  <h1 id="title">Welcome</h1>
  <button onclick="changeText()">Click Me</button>

  <script src="script.js"></script>
</body>
</html>

script.js
function changeText() {
let heading = document.getElementById("title");
heading.innerText = "DOM is Powerful!";
}

🔹 What Happened Here?

document → represents the whole HTML page

getElementById("title") → selects the element

innerText → changes the text

When you click the button → text changes.

That is DOM manipulation 🎉

🔹 Another Example (Change Color)
function changeText() {
let heading = document.getElementById("title");
heading.innerText = "DOM is Powerful!";
heading.style.color = "blue";
}

Now it changes text AND color.

Key DOM Terms You Must Know
Term Meaning
document Entire webpage
element Any HTML tag
id Unique identifier
innerText Change text
style Change CSS using JS
