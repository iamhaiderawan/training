Destructuring
🔹 What is Destructuring?

Destructuring means:

👉 Extract values from arrays or objects
👉 Store them directly into variables

Instead of accessing data again and again.

1 Object Destructuring
Normal Way ❌
const student = {
name: "Ali",
age: 22,
city: "Islamabad"
};

const name = student.name;
const age = student.age;
Destructuring Way ✅
const student = {
name: "Ali",
age: 22,
city: "Islamabad"
};

const { name, age } = student;

console.log(name);
console.log(age);

✅ Cleaner
✅ Shorter
✅ Modern syntax

2 Rename Variables
const { name: studentName } = student;

console.log(studentName);

Useful when variable names conflict.

3 Default Values
const { country = "Pakistan" } = student;

console.log(country);

If property doesn't exist → default used.

4 Array Destructuring
Normal Way ❌
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
Destructuring ✅
const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log(first);
Skip Values
const [ , second] = numbers;
5 Function Parameter Destructuring ⭐ (VERY IMPORTANT)

Used everywhere in modern JS.

const student = {
name: "Ali",
age: 22
};

const showStudent = ({ name, age }) => {
console.log(`${name} is ${age} years old`);
};

showStudent(student);

No need for:

student.name
student.age
