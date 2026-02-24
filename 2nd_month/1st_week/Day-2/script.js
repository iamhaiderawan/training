const textInput = document.getElementById("textInput");
const count = document.getElementById("count");

// Arrow function to update character count
const updateCount = () => {
  const textLength = textInput.value.length;
  count.innerText = textLength;
};

// Event listener using arrow function
textInput.addEventListener("input", updateCount);
