// Simple function
function sayHello() {
  alert("Welcome to JavaScript Functions!");
}

// Function with parameters and return
function addNumbers(a, b) {
  return a + b;
}

// Function using user input
function showSum() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  let result = addNumbers(num1, num2);
  alert("Sum is: " + result);
}
