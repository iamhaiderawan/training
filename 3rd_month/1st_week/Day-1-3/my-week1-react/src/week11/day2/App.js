import { useState } from "react";

// =====================
// Component 1 — Basic Form Submission
// =====================
function BasicFormSubmission() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);
    setSubmitted(true);
  }

  function handleReset() {
    setFormData({ name: "", email: "" });
    setSubmitted(false);
    setSubmittedData(null);
  }

  if (submitted) {
    return (
      <div>
        <h2>Basic Form Submission</h2>
        <p>✅ Form Submitted Successfully!</p>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <button onClick={handleReset}>Submit Another</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Basic Form Submission</h2>
      <p>
        event.preventDefault() stops the browser from refreshing the page when a
        form is submitted.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
      </form>
    </div>
  );
}

// =====================
// Component 2 — Registration Form Submission
// =====================
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    agreeToTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions!");
      return;
    }

    setSubmittedData(formData);
    setSubmitted(true);
  }

  function handleReset() {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
      agreeToTerms: false,
    });
    setSubmitted(false);
    setSubmittedData(null);
  }

  if (submitted) {
    return (
      <div>
        <h2>Registration Form Submission</h2>
        <p>✅ Registration Successful!</p>
        <p>Username: {submittedData.username}</p>
        <p>Email: {submittedData.email}</p>
        <p>Role: {submittedData.role}</p>
        <p>Terms Agreed: {submittedData.agreeToTerms ? "Yes" : "No"}</p>
        <button onClick={handleReset}>Register Another</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Registration Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
          />
        </div>
        <div>
          <label>Role: </label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={handleReset}>
          Clear
        </button>
      </form>
    </div>
  );
}

// =====================
// Component 3 — Multi Step Form Submission
// =====================
function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Pakistan",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleNext(e) {
    e.preventDefault();
    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Multi Step Form Submission</h2>
        <p>✅ Order Placed Successfully!</p>
        <p>
          Name: {formData.firstName} {formData.lastName}
        </p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>
          Address: {formData.address}, {formData.city}, {formData.country}
        </p>
        <p>Card Holder: {formData.cardName}</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              address: "",
              city: "",
              country: "Pakistan",
              cardName: "",
              cardNumber: "",
              expiryDate: "",
            });
          }}
        >
          Place Another Order
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Multi Step Form Submission</h2>
      <p>Step {step} of 3</p>

      {step === 1 && (
        <form onSubmit={handleNext}>
          <h3>Step 1 — Personal Info</h3>
          <div>
            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNext}>
          <h3>Step 2 — Shipping Address</h3>
          <div>
            <label>Address: </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street address"
            />
          </div>
          <div>
            <label>City: </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your city"
            />
          </div>
          <div>
            <label>Country: </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3>Step 3 — Payment Info</h3>
          <div>
            <label>Card Holder Name: </label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="Name on card"
            />
          </div>
          <div>
            <label>Card Number: </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength={16}
            />
          </div>
          <div>
            <label>Expiry Date: </label>
            <input
              type="month"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

// =====================
// Component 4 — Form with Submission History
// =====================
function FormWithHistory() {
  const [formData, setFormData] = useState({
    task: "",
    priority: "medium",
    assignee: "",
  });
  const [submissions, setSubmissions] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.task || !formData.assignee) {
      alert("Please fill in all fields!");
      return;
    }

    const newSubmission = {
      id: Date.now(),
      task: formData.task,
      priority: formData.priority,
      assignee: formData.assignee,
      submittedAt: new Date().toLocaleTimeString(),
    };

    setSubmissions([newSubmission, ...submissions]);
    setFormData({ task: "", priority: "medium", assignee: "" });
  }

  function handleRemove(id) {
    setSubmissions(submissions.filter((s) => s.id !== id));
  }

  return (
    <div>
      <h2>Form with Submission History</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Task: </label>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
            placeholder="Enter task description"
          />
        </div>
        <div>
          <label>Priority: </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>Assignee: </label>
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            placeholder="Assign to"
          />
        </div>
        <button type="submit">Add Task</button>
      </form>

      <h3>Submission History ({submissions.length})</h3>

      {submissions.length === 0 && <p>No tasks submitted yet.</p>}

      {submissions.map((s) => (
        <div key={s.id}>
          <p>Task: {s.task}</p>
          <p>
            Priority:{" "}
            {s.priority === "high"
              ? "🔴"
              : s.priority === "medium"
                ? "🟡"
                : "🟢"}{" "}
            {s.priority}
          </p>
          <p>Assignee: {s.assignee}</p>
          <p>Submitted at: {s.submittedAt}</p>
          <button onClick={() => handleRemove(s.id)}>Remove</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

// =====================
// Component 5 — Login Form with Fake Authentication
// =====================
function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const validUsers = [
    { username: "ali", password: "1234" },
    { username: "admin", password: "admin123" },
    { username: "sara", password: "sara456" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setLoginError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (attempts >= 3) {
      setLoginError("Too many failed attempts. Account locked.");
      return;
    }

    const user = validUsers.find(
      (u) =>
        u.username === formData.username && u.password === formData.password,
    );

    if (user) {
      setIsLoggedIn(true);
      setLoginError("");
      setAttempts(0);
    } else {
      setAttempts(attempts + 1);
      setLoginError(
        `Invalid username or password. ${3 - attempts - 1} attempts remaining.`,
      );
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setFormData({ username: "", password: "" });
    setAttempts(0);
    setLoginError("");
  }

  if (isLoggedIn) {
    return (
      <div>
        <h2>Login Form with Fake Authentication</h2>
        <p>✅ Welcome, {formData.username}! You are logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login Form with Fake Authentication</h2>
      <p>Try: username: ali, password: 1234</p>

      {loginError && <p style={{ color: "red" }}>{loginError}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            disabled={attempts >= 3}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            disabled={attempts >= 3}
          />
        </div>
        <button type="submit" disabled={attempts >= 3}>
          Login
        </button>
      </form>
    </div>
  );
}

// =====================
// Component 6 — Survey Form Submission
// =====================
function SurveyForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: "5",
    experience: "",
    recommend: "",
    improvements: "",
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.experience || !formData.recommend) {
      alert("Please fill in all required fields!");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Survey Form Submission</h2>
        <p>🎉 Thank you for your feedback, {formData.name}!</p>
        <p>Rating: {"⭐".repeat(Number(formData.rating))}</p>
        <p>Experience: {formData.experience}</p>
        <p>Would Recommend: {formData.recommend}</p>
        <p>
          Newsletter: {formData.newsletter ? "Subscribed ✅" : "Not subscribed"}
        </p>
        {formData.improvements && <p>Suggestions: {formData.improvements}</p>}
        <button onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Survey Form Submission</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Rating: {formData.rating} / 5 </label>
          <input
            type="range"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
          />
          <span>{"⭐".repeat(Number(formData.rating))}</span>
        </div>
        <div>
          <label>Describe your experience: </label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about your experience..."
            rows={3}
          />
        </div>
        <div>
          <label>Would you recommend us? </label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="Yes"
              checked={formData.recommend === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="No"
              checked={formData.recommend === "No"}
              onChange={handleChange}
            />
            No
          </label>
          <label>
            <input
              type="radio"
              name="recommend"
              value="Maybe"
              checked={formData.recommend === "Maybe"}
              onChange={handleChange}
            />
            Maybe
          </label>
        </div>
        <div>
          <label>Suggestions for improvement (optional): </label>
          <textarea
            name="improvements"
            value={formData.improvements}
            onChange={handleChange}
            placeholder="Any suggestions..."
            rows={2}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Subscribe to our newsletter
          </label>
        </div>
        <button type="submit">Submit Survey</button>
        <button
          type="button"
          onClick={() =>
            setFormData({
              name: "",
              rating: "5",
              experience: "",
              recommend: "",
              improvements: "",
              newsletter: false,
            })
          }
        >
          Clear Form
        </button>
      </form>
    </div>
  );
}

// =====================
// App — Combines Everything
// =====================
function App() {
  return (
    <div>
      <h1>Month 3 - Week 1 - Day 2: Form Submission</h1>
      <p>Exploring form submission through 6 different examples</p>
      <hr />

      <BasicFormSubmission />
      <hr />

      <RegistrationForm />
      <hr />

      <MultiStepForm />
      <hr />

      <FormWithHistory />
      <hr />

      <LoginForm />
      <hr />

      <SurveyForm />
    </div>
  );
}

export default App;
