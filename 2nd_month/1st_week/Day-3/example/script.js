// Array of product objects
const products = [
  { name: "Laptop", price: 120000, category: "Electronics" },
  { name: "Mobile", price: 50000, category: "Electronics" },
  { name: "Shoes", price: 4000, category: "Fashion" },
];

const button = document.getElementById("showProducts");
const container = document.getElementById("productContainer");

// Arrow function to display products
const displayProducts = () => {
  container.innerHTML = "";

  products.forEach(({ name, price, category }) => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${name}</h3>
      <p>Price: Rs ${price}</p>
      <p>Category: ${category}</p>
    `;

    container.appendChild(div);
  });
};

button.addEventListener("click", displayProducts);
