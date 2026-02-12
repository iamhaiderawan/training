function runLoops() {
  // For loop
  for (let i = 1; i <= 5; i++) {
    console.log("For Loop: " + 1);
  }

  //while loop
  let j = 1;
  while (j <= 5) {
    console.log("While Loop: " + j);
    j++;
  }

  // Do...While loop
  let k = 1;
  do {
    console.log("Do While Loop: " + k);
    k++;
  } while (k <= 5);
  alert("Check the browser console to see loop output!");
}
