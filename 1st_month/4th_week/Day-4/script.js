let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let isValid = true;

  // username validation
  if (username === "") {
    document.getElementById("userError").innerText = "Username required";
    isValid = false;
  } else {
    document.getElementById("userError").innerText = "";
  }

  // Email validation
  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerText = "Invalid email";
    isValid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passError").innerText = "Min 6 characters";
    isValid = false;
  } else {
    document.getElementById("passError").innerText = "";
  }

  // Success
  if (isValid) {
    alert("Form Submitted Successfully!");
  }
});
