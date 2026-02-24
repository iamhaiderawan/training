🔹 What Are Arrow Functions?

Arrow functions are a shorter way to write functions in JavaScript.

Introduced in ES6 (2015).

1️⃣ Basic Syntax Comparison
❌ Normal Function
function greet() {
console.log("Hello");
}

✅ Arrow Function
const greet = () => {
console.log("Hello");
};

Shorter and cleaner.

2️⃣ Arrow Function With Parameters
❌ Normal
function add(a, b) {
return a + b;
}

✅ Arrow
const add = (a, b) => {
return a + b;
};

3️⃣ Even Shorter (Implicit Return)

If function has only one line, you can remove {} and return.

const add = (a, b) => a + b;

This automatically returns the value.

4️⃣ Single Parameter Shortcut

If only one parameter → no need for parentheses.

const square = x => x \* x;

5️⃣ No Parameters
const sayHi = () => console.log("Hi");

🎯 Real DOM Example
const button = document.getElementById("btn");

button.addEventListener("click", () => {
alert("Button Clicked!");
});

Instead of:

button.addEventListener("click", function() {
alert("Button Clicked!");
});

Arrow functions are commonly used inside:

Event listeners

Array methods

Modern frameworks

6️⃣ Very Important Concept – this

Arrow functions do NOT have their own this.

They inherit this from their surrounding scope.

Example:

const user = {
name: "Ali",
greet: function() {
console.log(this.name);
}
};

user.greet(); // Ali

If we use arrow function inside object method:

const user = {
name: "Ali",
greet: () => {
console.log(this.name);
}
};

user.greet(); // undefined

⚠️ Arrow functions should NOT be used as object methods.

🔥 When To Use Arrow Functions

✔ Short functions
✔ Callback functions
✔ Array methods (map, filter, forEach)
✔ Event listeners

Avoid:
❌ Object methods
❌ Constructor functions

🧠 Mini Practice Example
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num \* 2);

console.log(doubled); // [2, 4, 6, 8]

Very common in modern JS.
