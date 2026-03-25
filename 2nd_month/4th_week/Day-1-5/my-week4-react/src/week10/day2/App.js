import { useState } from "react";

// =====================
// Component 1 — Basic Button Events
// =====================
function ButtonEvents() {
  const [message, setMessage] = useState("No button clicked yet");
  const [clickCount, setClickCount] = useState(0);

  function handleLeftClick() {
    setMessage("You clicked the Left button!");
    setClickCount(clickCount + 1);
  }

  function handleRightClick() {
    setMessage("You clicked the Right button!");
    setClickCount(clickCount + 1);
  }

  function handleMiddleClick() {
    setMessage("You clicked the Middle button!");
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <h2>Basic Button Events</h2>
      <p>Message: {message}</p>
      <p>Total Clicks: {clickCount}</p>
      <button onClick={handleLeftClick}>Left Button</button>
      <button onClick={handleMiddleClick}>Middle Button</button>
      <button onClick={handleRightClick}>Right Button</button>
      <button
        onClick={() => {
          setMessage("No button clicked yet");
          setClickCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

// =====================
// Component 2 — Input Change Event
// =====================
function InputEvents() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim() === "") {
      alert("Please type something first!");
      return;
    }
    setSubmittedValue(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <h2>Input Change Event</h2>
      <p>Live Preview: {inputValue}</p>
      <p>Last Submitted: {submittedValue || "Nothing submitted yet"}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => setInputValue("")}>Clear</button>
    </div>
  );
}

// =====================
// Component 3 — Mouse Events
// =====================
function MouseEvents() {
  const [eventType, setEventType] = useState("None");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bgColor, setBgColor] = useState("#f0f0f0");

  function handleMouseMove(event) {
    setPosition({ x: event.clientX, y: event.clientY });
  }

  function handleMouseEnter() {
    setEventType("Mouse Entered the Box!");
    setBgColor("#d4edda");
  }

  function handleMouseLeave() {
    setEventType("Mouse Left the Box!");
    setBgColor("#f8d7da");
  }

  function handleMouseDown() {
    setEventType("Mouse Button Pressed!");
    setBgColor("#fff3cd");
  }

  function handleMouseUp() {
    setEventType("Mouse Button Released!");
    setBgColor("#cce5ff");
  }

  const boxStyle = {
    backgroundColor: bgColor,
    padding: "40px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    marginTop: "12px",
  };

  return (
    <div>
      <h2>Mouse Events</h2>
      <p>Event: {eventType}</p>
      <p>
        Mouse Position — X: {position.x} Y: {position.y}
      </p>
      <div
        style={boxStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Interact with this box using your mouse!
      </div>
    </div>
  );
}

// =====================
// Component 4 — Keyboard Events
// =====================
function KeyboardEvents() {
  const [lastKey, setLastKey] = useState("None");
  const [typedText, setTypedText] = useState("");
  const [keyCount, setKeyCount] = useState(0);

  function handleKeyDown(event) {
    setLastKey(event.key);
    setKeyCount(keyCount + 1);
  }

  function handleChange(event) {
    setTypedText(event.target.value);
  }

  return (
    <div>
      <h2>Keyboard Events</h2>
      <p>Last Key Pressed: {lastKey}</p>
      <p>Total Keys Pressed: {keyCount}</p>
      <p>Typed Text: {typedText}</p>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing to see keyboard events..."
      />
      <button
        onClick={() => {
          setLastKey("None");
          setKeyCount(0);
          setTypedText("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

// =====================
// Component 5 — Form Submit Event
// =====================
function FormEvents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div>
        <h2>Form Submit Event</h2>
        <p>✅ Form Submitted Successfully!</p>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p>
        <button onClick={handleReset}>Submit Another</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Form Submit Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
          />
        </div>
        <button type="submit">Submit Form</button>
        <button type="button" onClick={handleReset}>
          Clear Form
        </button>
      </form>
    </div>
  );
}

// =====================
// Component 6 — Dropdown & Checkbox Events
// =====================
function SelectCheckboxEvents() {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleLanguageChange(event) {
    setSelectedLanguage(event.target.value);
  }

  return (
    <div>
      <h2>Dropdown and Checkbox Events</h2>

      <div>
        <label>Select a Language: </label>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="TypeScript">TypeScript</option>
        </select>
        <p>You selected: {selectedLanguage}</p>
      </div>

      <div>
        <input
          type="checkbox"
          id="agree"
          checked={isAgreed}
          onChange={() => setIsAgreed(!isAgreed)}
        />
        <label htmlFor="agree"> I agree to the terms and conditions</label>
        <p>Agreement Status: {isAgreed ? "✅ Agreed" : "❌ Not Agreed"}</p>
      </div>

      <div>
        <input
          type="checkbox"
          id="subscribe"
          checked={isSubscribed}
          onChange={() => setIsSubscribed(!isSubscribed)}
        />
        <label htmlFor="subscribe"> Subscribe to newsletter</label>
        <p>
          Subscription: {isSubscribed ? "✅ Subscribed" : "❌ Not Subscribed"}
        </p>
      </div>

      <div>
        <p>
          {isAgreed && isSubscribed
            ? "🎉 Thank you for agreeing and subscribing!"
            : isAgreed
              ? "✅ Agreed! Consider subscribing too."
              : "⚠️ Please agree to the terms to continue."}
        </p>
        <button
          onClick={() =>
            alert(
              isAgreed
                ? `Registered as ${selectedLanguage} developer!`
                : "Please agree to terms first!",
            )
          }
        >
          Register
        </button>
      </div>
    </div>
  );
}

// =====================
// App — Combines Everything
// =====================
function App() {
  return (
    <div>
      <h1>Week 10 - Day 2: Events</h1>
      <p>Exploring React Events through 6 different examples</p>
      <hr />

      <ButtonEvents />
      <hr />

      <InputEvents />
      <hr />

      <MouseEvents />
      <hr />

      <KeyboardEvents />
      <hr />

      <FormEvents />
      <hr />

      <SelectCheckboxEvents />
    </div>
  );
}

export default App;
