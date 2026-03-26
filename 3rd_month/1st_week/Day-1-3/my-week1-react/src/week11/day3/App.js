import { useState } from "react";

// =====================
// Component 1 — Basic Inline Validation
// =====================
function BasicValidation() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data) {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!data.email.includes("@")) {
      newErrors.email = "Email must contain @";
    } else if (!data.email.includes(".")) {
      newErrors.email = "Email must contain a dot";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (data.phone.length < 11) {
      newErrors.phone = "Phone must be at least 11 digits";
    } else if (isNaN(data.phone)) {
      newErrors.phone = "Phone must contain numbers only";
    }

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Clear error for this field as user types
    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Basic Inline Validation</h2>
        <p>✅ Form submitted successfully!</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <button
          onClick={() => {
            setFormData({ name: "", email: "", phone: "" });
            setErrors({});
            setSubmitted(false);
          }}
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Basic Inline Validation</h2>
      <p>Errors appear next to each field after clicking Submit.</p>

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
          {errors.name && (
            <span style={{ color: "red" }}> ❌ {errors.name}</span>
          )}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
          {errors.email && (
            <span style={{ color: "red" }}> ❌ {errors.email}</span>
          )}
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03001234567"
          />
          {errors.phone && (
            <span style={{ color: "red" }}> ❌ {errors.phone}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// =====================
// Component 2 — Real Time Validation (Validate on Blur)
// =====================
function RealTimeValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validateField(name, value) {
    if (name === "username") {
      if (!value.trim()) return "Username is required";
      if (value.length < 4) return "Username must be at least 4 characters";
      if (value.length > 15) return "Username cannot exceed 15 characters";
      if (/\s/.test(value)) return "Username cannot contain spaces";
      return "";
    }

    if (name === "email") {
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address";
      return "";
    }

    if (name === "password") {
      if (!value) return "Password is required";
      if (value.length < 6) return "Password must be at least 6 characters";
      if (!/[0-9]/.test(value))
        return "Password must contain at least one number";
      if (!/[A-Z]/.test(value))
        return "Password must contain at least one uppercase letter";
      return "";
    }

    return "";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      username: validateField("username", formData.username),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };

    setErrors(newErrors);
    setTouched({ username: true, email: true, password: true });

    const hasErrors = Object.values(newErrors).some((err) => err !== "");
    if (hasErrors) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Real Time Validation</h2>
        <p>✅ Account created successfully!</p>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <button
          onClick={() => {
            setFormData({ username: "", email: "", password: "" });
            setErrors({});
            setTouched({});
            setSubmitted(false);
          }}
        >
          Create Another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Real Time Validation — Validate on Blur</h2>
      <p>Errors appear when you click away from a field (onBlur).</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Choose a username"
          />
          {touched.username && errors.username && (
            <span style={{ color: "red" }}> ❌ {errors.username}</span>
          )}
          {touched.username && !errors.username && formData.username && (
            <span style={{ color: "green" }}> ✅ Looks good!</span>
          )}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your email"
          />
          {touched.email && errors.email && (
            <span style={{ color: "red" }}> ❌ {errors.email}</span>
          )}
          {touched.email && !errors.email && formData.email && (
            <span style={{ color: "green" }}> ✅ Looks good!</span>
          )}
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Create a password"
          />
          {touched.password && errors.password && (
            <span style={{ color: "red" }}> ❌ {errors.password}</span>
          )}
          {touched.password && !errors.password && formData.password && (
            <span style={{ color: "green" }}> ✅ Strong password!</span>
          )}
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

// =====================
// Component 3 — Password Strength Validator
// =====================
function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function getStrength() {
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }

  function getStrengthLabel() {
    const score = getStrength();
    if (score <= 1) return { label: "Very Weak", color: "red" };
    if (score === 2) return { label: "Weak", color: "orange" };
    if (score === 3) return { label: "Fair", color: "goldenrod" };
    if (score === 4) return { label: "Strong", color: "blue" };
    return { label: "Very Strong", color: "green" };
  }

  const checks = [
    { label: "At least 6 characters", passed: password.length >= 6 },
    { label: "At least 10 characters", passed: password.length >= 10 },
    { label: "Contains uppercase letter", passed: /[A-Z]/.test(password) },
    { label: "Contains a number", passed: /[0-9]/.test(password) },
    {
      label: "Contains special character",
      passed: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const passwordsMatch = password === confirmPassword && confirmPassword !== "";
  const strength = getStrengthLabel();

  function handleSubmit(e) {
    e.preventDefault();
    if (!passwordsMatch) {
      alert("Passwords do not match!");
      return;
    }
    if (getStrength() < 3) {
      alert("Password is too weak!");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Password Strength Validator</h2>
        <p>✅ Password set successfully!</p>
        <button
          onClick={() => {
            setPassword("");
            setConfirmPassword("");
            setSubmitted(false);
          }}
        >
          Reset
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Password Strength Validator</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
          />
        </div>

        {password && (
          <div>
            <p>
              Strength:{" "}
              <span style={{ color: strength.color, fontWeight: "bold" }}>
                {strength.label}
              </span>
            </p>
            <ul>
              {checks.map((check, index) => (
                <li
                  key={index}
                  style={{ color: check.passed ? "green" : "red" }}
                >
                  {check.passed ? "✅" : "❌"} {check.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat your password"
          />
          {confirmPassword && (
            <span style={{ color: passwordsMatch ? "green" : "red" }}>
              {passwordsMatch
                ? " ✅ Passwords match"
                : " ❌ Passwords do not match"}
            </span>
          )}
        </div>

        <button type="submit">Set Password</button>
      </form>
    </div>
  );
}

// =====================
// Component 4 — Full Registration Validation
// =====================
function FullRegistrationValidation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data) {
    const newErrors = {};

    if (!data.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (data.fullName.trim().length < 3)
      newErrors.fullName = "Full name must be at least 3 characters";

    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      newErrors.email = "Enter a valid email address";

    if (!data.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{11}$/.test(data.phone))
      newErrors.phone = "Phone must be exactly 11 digits";

    if (!data.age) newErrors.age = "Age is required";
    else if (data.age < 16) newErrors.age = "You must be at least 16 years old";
    else if (data.age > 100) newErrors.age = "Please enter a valid age";

    if (!data.password) newErrors.password = "Password is required";
    else if (data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!data.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!data.role) newErrors.role = "Please select a role";

    if (!data.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    return newErrors;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(updatedData);

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Full Registration Validation</h2>
        <p>✅ Registration successful!</p>
        <p>Name: {formData.fullName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Age: {formData.age}</p>
        <p>Role: {formData.role}</p>
        <button
          onClick={() => {
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              age: "",
              password: "",
              confirmPassword: "",
              role: "",
              agreeToTerms: false,
            });
            setErrors({});
            setSubmitted(false);
          }}
        >
          Register Another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Full Registration Validation</h2>
      {Object.keys(errors).length > 0 && (
        <p style={{ color: "red" }}>
          ❌ Please fix {Object.keys(errors).length} error(s) before submitting.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <span style={{ color: "red" }}> ❌ {errors.fullName}</span>
          )}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
          {errors.email && (
            <span style={{ color: "red" }}> ❌ {errors.email}</span>
          )}
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03001234567"
          />
          {errors.phone && (
            <span style={{ color: "red" }}> ❌ {errors.phone}</span>
          )}
        </div>

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Your age"
            min="1"
            max="100"
          />
          {errors.age && <span style={{ color: "red" }}> ❌ {errors.age}</span>}
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
          {errors.password && (
            <span style={{ color: "red" }}> ❌ {errors.password}</span>
          )}
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
          {errors.confirmPassword && (
            <span style={{ color: "red" }}> ❌ {errors.confirmPassword}</span>
          )}
        </div>

        <div>
          <label>Role: </label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select a role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
          {errors.role && (
            <span style={{ color: "red" }}> ❌ {errors.role}</span>
          )}
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
          {errors.agreeToTerms && (
            <span style={{ color: "red" }}> ❌ {errors.agreeToTerms}</span>
          )}
        </div>

        <button type="submit">Register</button>
        <button
          type="button"
          onClick={() => {
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              age: "",
              password: "",
              confirmPassword: "",
              role: "",
              agreeToTerms: false,
            });
            setErrors({});
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
}

// =====================
// Component 5 — Character Counter Validation
// =====================
function CharacterCounterValidation() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    tags: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const limits = {
    title: { min: 10, max: 60 },
    slug: { min: 3, max: 30 },
    description: { min: 50, max: 300 },
    tags: { min: 3, max: 50 },
  };

  function getFieldColor(name) {
    const value = formData[name];
    const { min, max } = limits[name];
    if (value.length === 0) return "black";
    if (value.length < min) return "orange";
    if (value.length > max) return "red";
    return "green";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  }

  function validate(data) {
    const newErrors = {};
    Object.entries(limits).forEach(([field, { min, max }]) => {
      if (!data[field].trim()) newErrors[field] = `${field} is required`;
      else if (data[field].length < min)
        newErrors[field] = `Must be at least ${min} characters`;
      else if (data[field].length > max)
        newErrors[field] = `Cannot exceed ${max} characters`;
    });
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h2>Character Counter Validation</h2>
        <p>✅ Blog post created successfully!</p>
        <p>Title: {formData.title}</p>
        <p>Slug: {formData.slug}</p>
        <p>Description: {formData.description}</p>
        <p>Tags: {formData.tags}</p>
        <button
          onClick={() => {
            setFormData({ title: "", slug: "", description: "", tags: "" });
            setErrors({});
            setSubmitted(false);
          }}
        >
          Create Another
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Character Counter Validation</h2>
      <p>Each field has a minimum and maximum character requirement.</p>

      <form onSubmit={handleSubmit}>
        {["title", "slug", "tags"].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}: </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
            />
            <span style={{ color: getFieldColor(field) }}>
              {" "}
              {formData[field].length} / {limits[field].max} (min:{" "}
              {limits[field].min})
            </span>
            {errors[field] && (
              <span style={{ color: "red" }}> ❌ {errors[field]}</span>
            )}
          </div>
        ))}

        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a description"
            rows={4}
          />
          <span style={{ color: getFieldColor("description") }}>
            {formData.description.length} / {limits.description.max} (min:{" "}
            {limits.description.min})
          </span>
          {errors.description && (
            <span style={{ color: "red" }}> ❌ {errors.description}</span>
          )}
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

// =====================
// Component 6 — Reusable Validate Function
// =====================
function ReusableValidation() {
  const [activeForm, setActiveForm] = useState("contact");

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [feedbackData, setFeedbackData] = useState({
    subject: "",
    rating: "",
    feedback: "",
  });
  const [feedbackErrors, setFeedbackErrors] = useState({});
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  function validateContact(data) {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Invalid email format";
    if (!data.message.trim()) errors.message = "Message is required";
    else if (data.message.trim().length < 20)
      errors.message = "Message must be at least 20 characters";
    return errors;
  }

  function validateFeedback(data) {
    const errors = {};
    if (!data.subject.trim()) errors.subject = "Subject is required";
    if (!data.rating) errors.rating = "Please select a rating";
    if (!data.feedback.trim()) errors.feedback = "Feedback is required";
    else if (data.feedback.trim().length < 10)
      errors.feedback = "Feedback must be at least 10 characters";
    return errors;
  }

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
    if (contactErrors[name]) {
      const updated = { ...contactErrors };
      delete updated[name];
      setContactErrors(updated);
    }
  }

  function handleFeedbackChange(e) {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
    if (feedbackErrors[name]) {
      const updated = { ...feedbackErrors };
      delete updated[name];
      setFeedbackErrors(updated);
    }
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const errs = validateContact(contactData);
    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      return;
    }
    setContactSubmitted(true);
  }

  function handleFeedbackSubmit(e) {
    e.preventDefault();
    const errs = validateFeedback(feedbackData);
    if (Object.keys(errs).length > 0) {
      setFeedbackErrors(errs);
      return;
    }
    setFeedbackSubmitted(true);
  }

  return (
    <div>
      <h2>Reusable Validation Functions</h2>
      <p>
        Two different forms each with their own dedicated validation function.
      </p>

      <button onClick={() => setActiveForm("contact")}>
        Contact Form {activeForm === "contact" ? "✅" : ""}
      </button>
      <button onClick={() => setActiveForm("feedback")}>
        Feedback Form {activeForm === "feedback" ? "✅" : ""}
      </button>

      <hr />

      {activeForm === "contact" && (
        <div>
          <h3>Contact Form</h3>
          {contactSubmitted ? (
            <div>
              <p>✅ Message sent!</p>
              <p>Name: {contactData.name}</p>
              <p>Email: {contactData.email}</p>
              <p>Message: {contactData.message}</p>
              <button
                onClick={() => {
                  setContactData({ name: "", email: "", message: "" });
                  setContactErrors({});
                  setContactSubmitted(false);
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleContactChange}
                  placeholder="Your name"
                />
                {contactErrors.name && (
                  <span style={{ color: "red" }}> ❌ {contactErrors.name}</span>
                )}
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="text"
                  name="email"
                  value={contactData.email}
                  onChange={handleContactChange}
                  placeholder="Your email"
                />
                {contactErrors.email && (
                  <span style={{ color: "red" }}>
                    {" "}
                    ❌ {contactErrors.email}
                  </span>
                )}
              </div>
              <div>
                <label>Message: </label>
                <textarea
                  name="message"
                  value={contactData.message}
                  onChange={handleContactChange}
                  placeholder="Your message (min 20 characters)"
                  rows={3}
                />
                {contactErrors.message && (
                  <span style={{ color: "red" }}>
                    {" "}
                    ❌ {contactErrors.message}
                  </span>
                )}
              </div>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      )}

      {activeForm === "feedback" && (
        <div>
          <h3>Feedback Form</h3>
          {feedbackSubmitted ? (
            <div>
              <p>✅ Feedback submitted!</p>
              <p>Subject: {feedbackData.subject}</p>
              <p>Rating: {feedbackData.rating}</p>
              <p>Feedback: {feedbackData.feedback}</p>
              <button
                onClick={() => {
                  setFeedbackData({ subject: "", rating: "", feedback: "" });
                  setFeedbackErrors({});
                  setFeedbackSubmitted(false);
                }}
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit}>
              <div>
                <label>Subject: </label>
                <input
                  type="text"
                  name="subject"
                  value={feedbackData.subject}
                  onChange={handleFeedbackChange}
                  placeholder="Feedback subject"
                />
                {feedbackErrors.subject && (
                  <span style={{ color: "red" }}>
                    {" "}
                    ❌ {feedbackErrors.subject}
                  </span>
                )}
              </div>
              <div>
                <label>Rating: </label>
                <select
                  name="rating"
                  value={feedbackData.rating}
                  onChange={handleFeedbackChange}
                >
                  <option value="">Select rating</option>
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Good</option>
                  <option value="3">⭐⭐⭐ Average</option>
                  <option value="2">⭐⭐ Poor</option>
                  <option value="1">⭐ Very Poor</option>
                </select>
                {feedbackErrors.rating && (
                  <span style={{ color: "red" }}>
                    {" "}
                    ❌ {feedbackErrors.rating}
                  </span>
                )}
              </div>
              <div>
                <label>Feedback: </label>
                <textarea
                  name="feedback"
                  value={feedbackData.feedback}
                  onChange={handleFeedbackChange}
                  placeholder="Write your feedback (min 10 characters)"
                  rows={3}
                />
                {feedbackErrors.feedback && (
                  <span style={{ color: "red" }}>
                    {" "}
                    ❌ {feedbackErrors.feedback}
                  </span>
                )}
              </div>
              <button type="submit">Submit Feedback</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

// =====================
// App — Combines Everything
// =====================
function App() {
  return (
    <div>
      <h1>Month 3 - Week 1 - Day 3: Validation</h1>
      <p>Exploring form validation through 6 different examples</p>
      <hr />

      <BasicValidation />
      <hr />

      <RealTimeValidation />
      <hr />

      <PasswordStrength />
      <hr />

      <FullRegistrationValidation />
      <hr />

      <CharacterCounterValidation />
      <hr />

      <ReusableValidation />
    </div>
  );
}

export default App;
