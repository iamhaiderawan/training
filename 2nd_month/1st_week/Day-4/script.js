const user = {
  name: "Ali Haider",
  age: 23,
  profession: "Engineer",
  city: "Islamabad",
};

const button = document.getElementById("showUser");
const profile = document.getElementById("profile");

// Using destructuring
const displayUser = ({ name, age, profession, city }) => {
  profile.innerHTML = `
    <h3>${name}</h3>
    <p>Age: ${age}</p>
    <p>Profession: ${profession}</p>
    <p>City: ${city}</p>
  `;
};

button.addEventListener("click", () => displayUser(user));
