import { useState } from "react";

// =====================
// Component 1 — Header
// =====================
function Header({ totalStudents, passing, failing }) {
  return (
    <div>
      <h1>Student Management System</h1>
      <p>Month 2 - Week 4 - Day 5 Mini Project</p>
      <div>
        <span>Total Students: {totalStudents}</span>
        <span> | </span>
        <span>Passing: {passing}</span>
        <span> | </span>
        <span>Failing: {failing}</span>
      </div>
    </div>
  );
}

// =====================
// Component 2 — Add Student Form
// =====================
function AddStudentForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    grade: "9th",
    math: "",
    english: "",
    science: "",
    urdu: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.math ||
      !formData.english ||
      !formData.science ||
      !formData.urdu
    ) {
      alert("Please fill in all fields!");
      return;
    }

    if (
      formData.math > 100 ||
      formData.english > 100 ||
      formData.science > 100 ||
      formData.urdu > 100
    ) {
      alert("Marks cannot exceed 100!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: formData.name,
      grade: formData.grade,
      subjects: {
        math: Number(formData.math),
        english: Number(formData.english),
        science: Number(formData.science),
        urdu: Number(formData.urdu),
      },
    };

    onAdd(newStudent);
    setFormData({
      name: "",
      grade: "9th",
      math: "",
      english: "",
      science: "",
      urdu: "",
    });
  }

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />
        </div>
        <div>
          <label>Grade: </label>
          <select name="grade" value={formData.grade} onChange={handleChange}>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>
        </div>
        <div>
          <label>Math Marks: </label>
          <input
            type="number"
            name="math"
            value={formData.math}
            onChange={handleChange}
            placeholder="0 - 100"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label>English Marks: </label>
          <input
            type="number"
            name="english"
            value={formData.english}
            onChange={handleChange}
            placeholder="0 - 100"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label>Science Marks: </label>
          <input
            type="number"
            name="science"
            value={formData.science}
            onChange={handleChange}
            placeholder="0 - 100"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label>Urdu Marks: </label>
          <input
            type="number"
            name="urdu"
            value={formData.urdu}
            onChange={handleChange}
            placeholder="0 - 100"
            min="0"
            max="100"
          />
        </div>
        <button type="submit">Add Student</button>
        <button
          type="button"
          onClick={() =>
            setFormData({
              name: "",
              grade: "9th",
              math: "",
              english: "",
              science: "",
              urdu: "",
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
// Component 3 — Search and Filter Bar
// =====================
function SearchFilterBar({
  searchTerm,
  onSearch,
  filter,
  onFilter,
  sortBy,
  onSort,
}) {
  return (
    <div>
      <h2>Search and Filter</h2>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by student name..."
        />
      </div>
      <div>
        <label>Filter by Result: </label>
        <button onClick={() => onFilter("all")}>
          All {filter === "all" ? "✅" : ""}
        </button>
        <button onClick={() => onFilter("passing")}>
          Passing {filter === "passing" ? "✅" : ""}
        </button>
        <button onClick={() => onFilter("failing")}>
          Failing {filter === "failing" ? "✅" : ""}
        </button>
      </div>
      <div>
        <label>Sort By: </label>
        <button onClick={() => onSort("name")}>
          Name {sortBy === "name" ? "✅" : ""}
        </button>
        <button onClick={() => onSort("average")}>
          Average {sortBy === "average" ? "✅" : ""}
        </button>
        <button onClick={() => onSort("grade")}>
          Grade {sortBy === "grade" ? "✅" : ""}
        </button>
      </div>
    </div>
  );
}

// =====================
// Component 4 — Student Card
// =====================
function StudentCard({ student, onRemove, onToggleExpand, isExpanded }) {
  const { id, name, grade, subjects } = student;
  const average = Math.round(
    (subjects.math + subjects.english + subjects.science + subjects.urdu) / 4,
  );
  const isPassing = average >= 50;

  function getGrade() {
    if (average >= 90) return "A+";
    if (average >= 80) return "A";
    if (average >= 70) return "B";
    if (average >= 60) return "C";
    if (average >= 50) return "D";
    return "F";
  }

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>Grade: {grade}</p>
        <p>Average: {average}%</p>
        <p>Letter Grade: {getGrade()}</p>
        <p>Result: {isPassing ? "✅ Passing" : "❌ Failing"}</p>
      </div>

      <div>
        <button onClick={() => onToggleExpand(id)}>
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>

      {isExpanded && (
        <div>
          <h4>Subject Breakdown:</h4>
          <p>
            Math: {subjects.math}/100 — {subjects.math >= 50 ? "✅" : "❌"}
          </p>
          <p>
            English: {subjects.english}/100 —{" "}
            {subjects.english >= 50 ? "✅" : "❌"}
          </p>
          <p>
            Science: {subjects.science}/100 —{" "}
            {subjects.science >= 50 ? "✅" : "❌"}
          </p>
          <p>
            Urdu: {subjects.urdu}/100 — {subjects.urdu >= 50 ? "✅" : "❌"}
          </p>
          <p>
            Strongest Subject:{" "}
            {Object.entries(subjects).sort((a, b) => b[1] - a[1])[0][0]}
          </p>
          <p>
            Weakest Subject:{" "}
            {Object.entries(subjects).sort((a, b) => a[1] - b[1])[0][0]}
          </p>
        </div>
      )}
      <hr />
    </div>
  );
}

// =====================
// Component 5 — Student List
// =====================
function StudentList({ students, onRemove, expandedIds, onToggleExpand }) {
  if (students.length === 0) {
    return <p>No students found. Add some or change your search filter.</p>;
  }

  return (
    <div>
      <h2>Student List ({students.length})</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={onRemove}
          onToggleExpand={onToggleExpand}
          isExpanded={expandedIds.includes(student.id)}
        />
      ))}
    </div>
  );
}

// =====================
// Component 6 — Class Summary
// =====================
function ClassSummary({ students }) {
  if (students.length === 0) {
    return null;
  }

  const averages = students.map((s) =>
    Math.round(
      (s.subjects.math +
        s.subjects.english +
        s.subjects.science +
        s.subjects.urdu) /
        4,
    ),
  );

  const classAverage = Math.round(
    averages.reduce((sum, avg) => sum + avg, 0) / averages.length,
  );

  const highest = Math.max(...averages);
  const lowest = Math.min(...averages);

  const topStudent = students[averages.indexOf(highest)];
  const weakestStudent = students[averages.indexOf(lowest)];

  const passingCount = students.filter((s) => {
    const avg = Math.round(
      (s.subjects.math +
        s.subjects.english +
        s.subjects.science +
        s.subjects.urdu) /
        4,
    );
    return avg >= 50;
  }).length;

  return (
    <div>
      <h2>Class Summary</h2>
      <p>Total Students: {students.length}</p>
      <p>Class Average: {classAverage}%</p>
      <p>
        Highest Score: {highest}% — {topStudent.name}
      </p>
      <p>
        Lowest Score: {lowest}% — {weakestStudent.name}
      </p>
      <p>
        Passing: {passingCount} out of {students.length}
      </p>
      <p>
        Failing: {students.length - passingCount} out of {students.length}
      </p>
      <p>Pass Rate: {Math.round((passingCount / students.length) * 100)}%</p>
    </div>
  );
}

// =====================
// App — Main Controller
// =====================
function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali Haider",
      grade: "9th",
      subjects: { math: 88, english: 92, science: 85, urdu: 78 },
    },
    {
      id: 2,
      name: "Sara Ahmed",
      grade: "10th",
      subjects: { math: 95, english: 89, science: 91, urdu: 94 },
    },
    {
      id: 3,
      name: "Usman Khan",
      grade: "9th",
      subjects: { math: 45, english: 52, science: 48, urdu: 55 },
    },
    {
      id: 4,
      name: "Ayesha Malik",
      grade: "10th",
      subjects: { math: 76, english: 83, science: 79, urdu: 88 },
    },
    {
      id: 5,
      name: "Bilal Raza",
      grade: "11th",
      subjects: { math: 38, english: 44, science: 41, urdu: 39 },
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [expandedIds, setExpandedIds] = useState([]);

  function handleAdd(newStudent) {
    setStudents([...students, newStudent]);
  }

  function handleRemove(id) {
    setStudents(students.filter((s) => s.id !== id));
    setExpandedIds(expandedIds.filter((eid) => eid !== id));
  }

  function handleToggleExpand(id) {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((eid) => eid !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  }

  // Search
  let processed = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Filter
  processed = processed.filter((s) => {
    const avg = Math.round(
      (s.subjects.math +
        s.subjects.english +
        s.subjects.science +
        s.subjects.urdu) /
        4,
    );
    if (filter === "passing") return avg >= 50;
    if (filter === "failing") return avg < 50;
    return true;
  });

  // Sort
  processed = [...processed].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "average") {
      const avgA =
        (a.subjects.math +
          a.subjects.english +
          a.subjects.science +
          a.subjects.urdu) /
        4;
      const avgB =
        (b.subjects.math +
          b.subjects.english +
          b.subjects.science +
          b.subjects.urdu) /
        4;
      return avgB - avgA;
    }
    if (sortBy === "grade") return a.grade.localeCompare(b.grade);
    return 0;
  });

  const passingCount = students.filter((s) => {
    const avg = Math.round(
      (s.subjects.math +
        s.subjects.english +
        s.subjects.science +
        s.subjects.urdu) /
        4,
    );
    return avg >= 50;
  }).length;

  return (
    <div>
      <Header
        totalStudents={students.length}
        passing={passingCount}
        failing={students.length - passingCount}
      />
      <hr />

      <AddStudentForm onAdd={handleAdd} />
      <hr />

      <SearchFilterBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        filter={filter}
        onFilter={setFilter}
        sortBy={sortBy}
        onSort={setSortBy}
      />
      <hr />

      <StudentList
        students={processed}
        onRemove={handleRemove}
        expandedIds={expandedIds}
        onToggleExpand={handleToggleExpand}
      />
      <hr />

      <ClassSummary students={students} />
    </div>
  );
}

export default App;
