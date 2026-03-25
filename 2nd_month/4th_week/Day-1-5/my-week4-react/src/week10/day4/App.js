import { useState } from "react";

// =====================
// Component 1 — Basic List Rendering
// =====================
function BasicList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const numbers = [10, 25, 37, 42, 56, 63, 78, 91];

  return (
    <div>
      <h2>Basic List Rendering</h2>

      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>Numbers</h3>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>
            {number} — {number % 2 === 0 ? "Even" : "Odd"}
          </li>
        ))}
      </ul>
    </div>
  );
}

// =====================
// Component 2 — List of Objects
// =====================
function StudentList() {
  const students = [
    { id: 1, name: "Ali Haider", grade: "9th", marks: 88 },
    { id: 2, name: "Sara Ahmed", grade: "10th", marks: 92 },
    { id: 3, name: "Usman Khan", grade: "9th", marks: 76 },
    { id: 4, name: "Ayesha Malik", grade: "10th", marks: 95 },
    { id: 5, name: "Bilal Raza", grade: "9th", marks: 61 },
  ];

  return (
    <div>
      <h2>List of Objects — Student List</h2>
      <p>Total Students: {students.length}</p>
      {students.map((student) => (
        <div key={student.id}>
          <h4>{student.name}</h4>
          <p>Grade: {student.grade}</p>
          <p>Marks: {student.marks}</p>
          <p>Result: {student.marks >= 70 ? "✅ Pass" : "❌ Fail"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

// =====================
// Component 3 — Dynamic List with Add and Remove
// =====================
function DynamicList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Projects" },
    { id: 3, text: "Push to GitHub" },
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim() === "") {
      alert("Please enter an item!");
      return;
    }
    const newItem = {
      id: Date.now(),
      text: inputValue,
    };
    setItems([...items, newItem]);
    setInputValue("");
  }

  function handleRemove(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div>
      <h2>Dynamic List — Add and Remove Items</h2>
      <p>Total Items: {items.length}</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new item..."
      />
      <button onClick={handleAdd}>Add Item</button>
      <button onClick={handleClear}>Clear All</button>

      {items.length === 0 && <p>No items in the list. Add some!</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =====================
// Component 4 — Filtered List
// =====================
function FilteredList() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 85000 },
    { id: 2, name: "T-Shirt", category: "clothing", price: 1500 },
    { id: 3, name: "Headphones", category: "electronics", price: 5000 },
    { id: 4, name: "Jeans", category: "clothing", price: 3500 },
    { id: 5, name: "Smartphone", category: "electronics", price: 60000 },
    { id: 6, name: "Jacket", category: "clothing", price: 8000 },
    { id: 7, name: "Tablet", category: "electronics", price: 45000 },
    { id: 8, name: "Shoes", category: "clothing", price: 4500 },
  ];

  const filteredProducts = products
    .filter((product) => filter === "all" || product.category === filter)
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  return (
    <div>
      <h2>Filtered List — Products</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("electronics")}>Electronics</button>
        <button onClick={() => setFilter("clothing")}>Clothing</button>
      </div>

      <p>
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 && (
        <p>No products found. Try a different search or filter.</p>
      )}

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>Category: {product.category}</p>
          <p>Price: Rs. {product.price.toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

// =====================
// Component 5 — Sorted List
// =====================
function SortedList() {
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const employees = [
    { id: 1, name: "Ali Haider", department: "Frontend", salary: 75000 },
    { id: 2, name: "Sara Ahmed", department: "Design", salary: 65000 },
    { id: 3, name: "Usman Khan", department: "Backend", salary: 90000 },
    { id: 4, name: "Ayesha Malik", department: "Frontend", salary: 80000 },
    { id: 5, name: "Bilal Raza", department: "Backend", salary: 95000 },
    { id: 6, name: "Zara Tariq", department: "Design", salary: 70000 },
  ];

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortBy === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === "salary") {
      return order === "asc" ? a.salary - b.salary : b.salary - a.salary;
    }
    return 0;
  });

  return (
    <div>
      <h2>Sorted List — Employees</h2>

      <div>
        <label>Sort By: </label>
        <button onClick={() => setSortBy("name")}>
          Name {sortBy === "name" ? "✅" : ""}
        </button>
        <button onClick={() => setSortBy("salary")}>
          Salary {sortBy === "salary" ? "✅" : ""}
        </button>
      </div>

      <div>
        <label>Order: </label>
        <button onClick={() => setOrder("asc")}>
          Ascending {order === "asc" ? "✅" : ""}
        </button>
        <button onClick={() => setOrder("desc")}>
          Descending {order === "desc" ? "✅" : ""}
        </button>
      </div>

      <p>Total Employees: {sortedEmployees.length}</p>

      {sortedEmployees.map((emp) => (
        <div key={emp.id}>
          <h4>{emp.name}</h4>
          <p>Department: {emp.department}</p>
          <p>Salary: Rs. {emp.salary.toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

// =====================
// Component 6 — Todo List (Combining Everything)
// =====================
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useState", completed: true },
    { id: 2, text: "Learn Events", completed: true },
    { id: 3, text: "Learn Conditional Rendering", completed: true },
    { id: 4, text: "Learn Lists", completed: false },
    { id: 5, text: "Build Mini Project", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  function handleAdd() {
    if (inputValue.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleClearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div>
      <h2>Todo List — Putting it All Together</h2>
      <p>
        Total: {todos.length} | Done: {completedCount} | Remaining:{" "}
        {remainingCount}
      </p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add Task</button>
      <button onClick={handleClearCompleted}>Clear Completed</button>

      <div>
        <button onClick={() => setFilter("all")}>
          All {filter === "all" ? "✅" : ""}
        </button>
        <button onClick={() => setFilter("active")}>
          Active {filter === "active" ? "✅" : ""}
        </button>
        <button onClick={() => setFilter("completed")}>
          Completed {filter === "completed" ? "✅" : ""}
        </button>
      </div>

      {filteredTodos.length === 0 && (
        <p>No tasks here. Add some or change the filter!</p>
      )}

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.completed ? "✅" : "⬜"} {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// =====================
// App — Combines Everything
// =====================
function App() {
  return (
    <div>
      <h1>Month 2 - Week 4 - Day 4: Lists</h1>
      <p>Exploring list rendering through 6 different examples</p>
      <hr />

      <BasicList />
      <hr />

      <StudentList />
      <hr />

      <DynamicList />
      <hr />

      <FilteredList />
      <hr />

      <SortedList />
      <hr />

      <TodoList />
    </div>
  );
}

export default App;
