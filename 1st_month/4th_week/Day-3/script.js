let form = document.getElementById("loginForm");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  let username = document.getElementById("username").value;

  if (username === "") {
    message.innerText = "Please enter username!";
    message.style.color = "red";
  } else {
    message.innerText = "Welcome " + username;
    message.style.color = "green";
  }
});
