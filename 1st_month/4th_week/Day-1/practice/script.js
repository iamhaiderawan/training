function updateProfile() {
  // get input values
  let newName = document.getElementById("nameInput").value;
  let newColor = document.getElementById("colorInput").value;

  // select elements
  let nameHeading = document.getElementById("name");
  let roleText = document.getElementById("role");

  // update text
  if (newName !== "") {
    nameHeading.innerText = newName;
  }

  // update color
  nameHeading.style.color = newColor;
  roleText.style.color = newColor;
}
