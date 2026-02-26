// Order object (like API response)
const order = {
  orderId: 101,
  customer: {
    name: "Ali Haider",
    city: "Islamabad",
  },
  items: [
    { product: "Laptop", price: 120000 },
    { product: "Mouse", price: 2000 },
  ],
};

const button = document.getElementById("showOrder");
const orderInfo = document.getElementById("orderInfo");

// Function using destructuring
const displayOrder = ({ orderId, customer: { name, city }, items }) => {
  // Array destructuring
  const [item1, item2] = items;

  orderInfo.innerHTML = `
    <h3>Order ID: ${orderId}</h3>
    <p>Customer: ${name}</p>
    <p>City: ${city}</p>

    <h4>Items:</h4>
    <p>${item1.product} - Rs ${item1.price}</p>
    <p>${item2.product} - Rs ${item2.price}</p>
  `;
};

button.addEventListener("click", () => displayOrder(order));
