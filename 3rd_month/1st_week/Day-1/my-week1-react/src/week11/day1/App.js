import { useState } from "react";

// =====================
// Component 1 — Basic Controlled Input
// =====================
function BasicControlledInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <h2>Basic Controlled Inputs</h2>
      <p>
        Controlled inputs means React controls the input value through state —
        not the browser.
      </p>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Live Preview: {name || "Nothing typed yet"}</p>
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <p>Live Preview: {email || "Nothing typed yet"}</p>
      </div>

      <div>
        <label>Phone: </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone"
        />
        <p>Live Preview: {phone || "Nothing typed yet"}</p>
      </div>

      <button
        onClick={() => {
          setName("");
          setEmail("");
          setPhone("");
        }}
      >
        Clear All
      </button>
    </div>
  );
}

// =====================
// Component 2 — Controlled Textarea and Select
// =====================
function TextareaAndSelect() {
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("Pakistan");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("JavaScript");

  const maxBioLength = 150;

  return (
    <div>
      <h2>Controlled Textarea and Select</h2>

      <div>
        <label>Bio: </label>
        <textarea
          value={bio}
          onChange={(e) => {
            if (e.target.value.length <= maxBioLength) {
              setBio(e.target.value);
            }
          }}
          placeholder="Write something about yourself..."
          rows={4}
        />
        <p>
          {bio.length} / {maxBioLength} characters
        </p>
        <p>Preview: {bio || "No bio written yet"}</p>
      </div>

      <div>
        <label>Country: </label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
        <p>Selected Country: {country}</p>
      </div>

      <div>
        <label>City: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city"
        />
        <p>Selected City: {city || "No city entered"}</p>
      </div>

      <div>
        <label>Preferred Language: </label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="TypeScript">TypeScript</option>
        </select>
        <p>Selected Language: {language}</p>
      </div>

      <p>
        Summary: {city || "Unknown city"}, {country} — Prefers {language}
      </p>
    </div>
  );
}

// =====================
// Component 3 — Controlled Checkboxes and Radio Buttons
// =====================
function CheckboxAndRadio() {
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState({
    html: false,
    css: false,
    javascript: false,
    react: false,
    nodejs: false,
  });
  const [experience, setExperience] = useState("");

  function handleSkillChange(skill) {
    setSkills({ ...skills, [skill]: !skills[skill] });
  }

  const selectedSkills = Object.entries(skills)
    .filter(([key, value]) => value)
    .map(([key]) => key);

  return (
    <div>
      <h2>Controlled Checkboxes and Radio Buttons</h2>

      <div>
        <h3>Gender (Radio)</h3>
        <label>
          <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
        <p>Selected Gender: {gender || "Not selected"}</p>
      </div>

      <div>
        <h3>Skills (Checkboxes)</h3>
        {Object.keys(skills).map((skill) => (
          <label key={skill}>
            <input
              type="checkbox"
              checked={skills[skill]}
              onChange={() => handleSkillChange(skill)}
            />
            {skill.toUpperCase()}
          </label>
        ))}
        <p>
          Selected Skills:{" "}
          {selectedSkills.length > 0
            ? selectedSkills.join(", ")
            : "None selected"}
        </p>
        <p>Total Skills Selected: {selectedSkills.length}</p>
      </div>

      <div>
        <h3>Experience Level (Radio)</h3>
        {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
          <label key={level}>
            <input
              type="radio"
              value={level}
              checked={experience === level}
              onChange={(e) => setExperience(e.target.value)}
            />
            {level}
          </label>
        ))}
        <p>Experience Level: {experience || "Not selected"}</p>
      </div>
    </div>
  );
}

// =====================
// Component 4 — Single Object State Form
// =====================
function SingleObjectForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    website: "",
    occupation: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleReset() {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      website: "",
      occupation: "",
    });
  }

  return (
    <div>
      <h2>Single Object State Form</h2>
      <p>
        Instead of one useState per field, all fields are managed inside one
        single object state.
      </p>

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
        <label>Website: </label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://yourwebsite.com"
        />
      </div>
      <div>
        <label>Occupation: </label>
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Your occupation"
        />
      </div>

      <button onClick={handleReset}>Reset Form</button>

      <div>
        <h3>Live Preview:</h3>
        <p>
          Full Name: {formData.firstName} {formData.lastName}
        </p>
        <p>Age: {formData.age || "Not entered"}</p>
        <p>Email: {formData.email || "Not entered"}</p>
        <p>Website: {formData.website || "Not entered"}</p>
        <p>Occupation: {formData.occupation || "Not entered"}</p>
      </div>
    </div>
  );
}

// =====================
// Component 5 — Range, Color and Date Inputs
// =====================
function SpecialInputTypes() {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(75);
  const [favoriteColor, setFavoriteColor] = useState("#61dafb");
  const [birthDate, setBirthDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");

  return (
    <div>
      <h2>Special Controlled Input Types</h2>

      <div>
        <label>Volume: {volume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <p>
          {volume == 0
            ? "🔇 Muted"
            : volume < 30
              ? "🔈 Low"
              : volume < 70
                ? "🔉 Medium"
                : "🔊 High"}
        </p>
      </div>

      <div>
        <label>Brightness: {brightness}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
        <p>
          {brightness < 30
            ? "🌑 Very Dark"
            : brightness < 60
              ? "🌤️ Normal"
              : "☀️ Very Bright"}
        </p>
      </div>

      <div>
        <label>Favorite Color: </label>
        <input
          type="color"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
        <p>Selected Color: {favoriteColor}</p>
        <div
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: favoriteColor,
            borderRadius: "8px",
          }}
        />
      </div>

      <div>
        <label>Birth Date: </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <p>Selected Date: {birthDate || "Not selected"}</p>
      </div>

      <div>
        <label>Meeting Time: </label>
        <input
          type="time"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        <p>Meeting at: {meetingTime || "Not selected"}</p>
      </div>
    </div>
  );
}

// =====================
// Component 6 — Live Profile Builder
// =====================
function LiveProfileBuilder() {
  const [profile, setProfile] = useState({
    username: "",
    title: "",
    bio: "",
    theme: "light",
    showEmail: false,
    email: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setProfile({
      ...profile,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  const cardStyle = {
    backgroundColor: profile.theme === "dark" ? "#222" : "#f9f9f9",
    color: profile.theme === "dark" ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "16px",
    border: "1px solid #ccc",
  };

  return (
    <div>
      <h2>Live Profile Builder</h2>
      <p>Fill in the form and watch your profile card update in real time.</p>

      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="@username"
        />
      </div>
      <div>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={profile.title}
          onChange={handleChange}
          placeholder="e.g. Frontend Developer"
        />
      </div>
      <div>
        <label>Bio: </label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          placeholder="Write a short bio..."
          rows={3}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="showEmail"
            checked={profile.showEmail}
            onChange={handleChange}
          />
          Show Email on Profile
        </label>
      </div>
      <div>
        <label>Theme: </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={profile.theme === "light"}
            onChange={handleChange}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={profile.theme === "dark"}
            onChange={handleChange}
          />
          Dark
        </label>
      </div>

      <div style={cardStyle}>
        <h3>{profile.username ? `@${profile.username}` : "@username"}</h3>
        <p>{profile.title || "Your Title Here"}</p>
        <p>{profile.bio || "Your bio will appear here..."}</p>
        {profile.showEmail && <p>📧 {profile.email || "email@example.com"}</p>}
        <p>Theme: {profile.theme === "dark" ? "🌙 Dark" : "☀️ Light"}</p>
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
      <h1>Month 3 - Week 1 - Day 1: Controlled Inputs</h1>
      <p>Exploring controlled inputs through 6 different examples</p>
      <hr />

      <BasicControlledInput />
      <hr />

      <TextareaAndSelect />
      <hr />

      <CheckboxAndRadio />
      <hr />

      <SingleObjectForm />
      <hr />

      <SpecialInputTypes />
      <hr />

      <LiveProfileBuilder />
    </div>
  );
}

export default App;
