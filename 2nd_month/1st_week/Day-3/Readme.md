Arrays & Objects
🔹 1 Arrays

An array stores multiple values in one variable.

Example
const fruits = ["Apple", "Mango", "Banana"];

Each value has an index:

Index Value
0 Apple
1 Mango
2 Banana
Access Value
console.log(fruits[0]); // Apple
Common Array Methods
Add item
fruits.push("Orange");
Remove last item
fruits.pop();
Loop through array
fruits.forEach(fruit => {
console.log(fruit);
});
🔹 2 Objects

An object stores data using key : value pairs.

Example
const student = {
name: "Ali",
age: 22,
city: "Islamabad"
};
Access Object Data
console.log(student.name);
console.log(student["age"]);
Update Value
student.age = 23;
Add New Property
student.grade = "A";

3 Array of Objects (VERY IMPORTANT)

Real applications mostly use this.

const students = [
{ name: "Ali", age: 22 },
{ name: "Sara", age: 21 },
{ name: "Ahmed", age: 23 }
];

This represents:
👉 Multiple students
👉 Each student is an object
