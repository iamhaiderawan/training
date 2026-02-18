Selecting Elements in JavaScript (DOM)

JavaScript must first find an element before changing it.

🔹 1. Select by ID

Selects one unique element.

<h1 id="title">Hello</h1>

let element = document.getElementById("title");
element.innerText = "Changed!";

✔ Most commonly used
✔ Fast
✔ Only one element

🔹 2. Select by Class

Selects multiple elements.

<p class="text">One</p>
<p class="text">Two</p>

let items = document.getElementsByClassName("text");
items[0].innerText = "Changed first";

⚠ Returns a collection → must use index [0]

🔹 3. Select by Tag Name

<h2>Heading 1</h2>
<h2>Heading 2</h2>

let headings = document.getElementsByTagName("h2");
headings[1].style.color = "red";

🔹 4. querySelector (VERY IMPORTANT ⭐)

Selects the first matching element

<p class="para">Hello</p>

let p = document.querySelector(".para");
p.style.color = "blue";

You can use:
#id
.class
tag

🔹 5. querySelectorAll (MOST POWERFUL ⭐)

Selects all matching elements

<li class="item">A</li>
<li class="item">B</li>
<li class="item">C</li>

let list = document.querySelectorAll(".item");

list.forEach(function(item) {
item.style.color = "green";
});
