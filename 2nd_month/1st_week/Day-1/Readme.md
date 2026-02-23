🔹 What is ES6?

ES6 (ECMAScript 2015) is a major update to JavaScript.

Before ES6 → old, longer syntax
After ES6 → cleaner, shorter, modern syntax

Most modern projects use ES6+.

🚀 Important ES6 Features (You Must Know)

1️⃣ let and const (Better Variables)

Before ES6:

var name = "Ali";

ES6:

let age = 22;
const country = "Pakistan";

Difference:
Keyword Can Change Value? Scope
var Yes Function
let Yes Block
const No Block

Example:

if (true) {
let x = 10;
}
console.log(x); // ❌ Error

let and const respect block { }.

2️⃣ Arrow Functions (=>)

Old:

function greet() {
console.log("Hello");
}

ES6:

const greet = () => {
console.log("Hello");
};

Shorter version:

const greet = () => console.log("Hello");

With parameter:

const add = (a, b) => a + b;

Very common in modern code.

3️⃣ Template Literals (Backticks ``)

Old:

let name = "Ali";
console.log("Hello " + name);

ES6:

let name = "Ali";
console.log(`Hello ${name}`);

✔ Cleaner
✔ Supports multi-line strings

4️⃣ Destructuring

Extract values easily from arrays or objects.

Array example:

const numbers = [10, 20, 30];
const [a, b] = numbers;

console.log(a); // 10

Object example:

const user = {
name: "Ali",
age: 22
};

const { name, age } = user;

5️⃣ Spread Operator (...)

Copy or merge arrays/objects.

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1,2,3,4]

Very powerful feature.

6️⃣ Default Parameters
const greet = (name = "Guest") => {
console.log(`Hello ${name}`);
};

greet(); // Hello Guest

🧠 Why ES6 Is Important

✔ Used in React
✔ Used in Node.js
✔ Used in modern frontend frameworks
✔ Makes code shorter and readable
✔ Required in interviews
