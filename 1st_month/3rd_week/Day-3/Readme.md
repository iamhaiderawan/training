🔹 What are Loops?

Loops allow you to repeat code multiple times without writing it again and again.

Example:

Print numbers from 1 to 5
Without loop → write 5 lines
With loop → write 1 loop

🔹 Types of Loops in JavaScript (Basics)
1 for Loop

Best when you know how many times to run the loop.

for (let i = 1; i <= 5; i++) {
console.log(i);
}

2 while Loop

Runs while a condition is true.

let i = 1;

while (i <= 5) {
console.log(i);
i++;
}

3 do...while Loop

Runs at least once, even if the condition is false.

let i = 1;

do {
console.log(i);
i++;
} while (i <= 5);
