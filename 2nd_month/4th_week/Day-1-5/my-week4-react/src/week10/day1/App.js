import { useState } from "react";

// =====================
// Component 1 — Counter
// =====================
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// =====================
// Component 2 — Like Button
// =====================
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Like Button</h2>
      <p>
        {likes > 0 ? `You and ${likes} others liked this!` : "No likes yet"}
      </p>
      <button onClick={() => setLikes(likes + 1)}>❤️ Like</button>
      <button onClick={() => setLikes(0)}>Unlike</button>
    </div>
  );
}

// =====================
// Component 3 — User Profile with Multiple States
// =====================
function UserProfile() {
  const [name, setName] = useState("Ali Hassan");
  const [age, setAge] = useState(20);
  const [isStudent, setIsStudent] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? "🎓 Student" : "💼 Professional"}</p>
      <p>Score: {score}</p>

      <button onClick={() => setAge(age + 1)}>Birthday 🎂 (Age +1)</button>
      <button onClick={() => setIsStudent(!isStudent)}>Toggle Status</button>
      <button onClick={() => setScore(score + 10)}>Add Score +10</button>
      <button onClick={() => setScore(0)}>Reset Score</button>
    </div>
  );
}

// =====================
// Component 4 — Day/Night Mode Toggle
// =====================
function DayNightToggle() {
  const [isDark, setIsDark] = useState(false);

  const bgStyle = {
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    padding: "16px",
    borderRadius: "8px",
  };

  return (
    <div style={bgStyle}>
      <h2>Day / Night Mode</h2>
      <p>Current Mode: {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</p>
      <p>
        {isDark
          ? "Dark mode is easy on the eyes at night."
          : "Light mode is great for daytime reading."}
      </p>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "☀️ Light" : "🌙 Dark"} Mode
      </button>
    </div>
  );
}

// =====================
// Component 5 — Simple Scoreboard
// =====================
function Scoreboard() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const winner =
    teamA > teamB
      ? "🏆 Team A is Winning!"
      : teamB > teamA
        ? "🏆 Team B is Winning!"
        : "🤝 Its a Tie!";

  return (
    <div>
      <h2>Scoreboard</h2>
      <p>{winner}</p>

      <div>
        <h3>Team A: {teamA}</h3>
        <button onClick={() => setTeamA(teamA + 1)}>Team A +1</button>
        <button onClick={() => setTeamA(teamA > 0 ? teamA - 1 : 0)}>
          Team A -1
        </button>
      </div>

      <div>
        <h3>Team B: {teamB}</h3>
        <button onClick={() => setTeamB(teamB + 1)}>Team B +1</button>
        <button onClick={() => setTeamB(teamB > 0 ? teamB - 1 : 0)}>
          Team B -1
        </button>
      </div>

      <button
        onClick={() => {
          setTeamA(0);
          setTeamB(0);
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

// =====================
// Component 6 — Reading Tracker
// =====================
function ReadingTracker() {
  const [pagesRead, setPagesRead] = useState(0);
  const totalPages = 300;
  const percentage = Math.round((pagesRead / totalPages) * 100);

  return (
    <div>
      <h2>Reading Tracker 📚</h2>
      <p>Book: The Complete React Guide</p>
      <p>
        Progress: {pagesRead} / {totalPages} pages ({percentage}%)
      </p>
      <p>
        {percentage === 0 && "Not started yet"}
        {percentage > 0 && percentage < 50 && "Just getting started!"}
        {percentage >= 50 && percentage < 100 && "Halfway there, keep going!"}
        {percentage === 100 && "Finished! Great job 🎉"}
      </p>

      <button onClick={() => setPagesRead(pagesRead + 10)}>
        Read 10 Pages
      </button>
      <button onClick={() => setPagesRead(pagesRead + 25)}>
        Read 25 Pages
      </button>
      <button onClick={() => setPagesRead(pagesRead > 0 ? pagesRead - 10 : 0)}>
        Go Back 10 Pages
      </button>
      <button onClick={() => setPagesRead(totalPages)}>Mark as Finished</button>
      <button onClick={() => setPagesRead(0)}>Reset</button>
    </div>
  );
}

// =====================
// App — Combines Everything
// =====================
function App() {
  return (
    <div>
      <h1>Week 10 - Day 1: useState</h1>
      <p>Exploring React State through 6 different examples</p>
      <hr />

      <Counter />
      <hr />

      <LikeButton />
      <hr />

      <UserProfile />
      <hr />

      <DayNightToggle />
      <hr />

      <Scoreboard />
      <hr />

      <ReadingTracker />
    </div>
  );
}

export default App;
