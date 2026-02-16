What is a Function?

A function is a block of code that runs only when you call it.

Instead of writing the same code again and again → put it inside a function.

Think:

Function = a machine
You press button → it performs a task

Basic Function Syntax
function functionName() {
// code to run
}

Example:

function greet() {
alert("Hello Ali!");
}

Call the function:

greet();

Function with Parameters

Parameters are inputs you give to the function.

function greet(name) {
alert("Hello " + name);
}

greet("Ali");
greet("Ahmed");

Function with Return Value

Functions can send data back using return.

function add(a, b) {
return a + b;
}

let result = add(5, 3);
alert(result);
