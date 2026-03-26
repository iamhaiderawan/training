import { useState } from "react";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";

function StudentsPage({ searchTerm }) {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali Haider",
      email: "ali@email.com",
      grade: "9th",
      marks: 88,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      email: "sara@email.com",
      grade: "10th",
      marks: 92,
    },
    {
      id: 3,
      name: "Usman Khan",
      email: "usman@email.com",
      grade: "9th",
      marks: 45,
    },
    {
      id: 4,
      name: "Ayesha Malik",
      email: "ayesha@email.com",
      grade: "10th",
      marks: 76,
    },
    {
      id: 5,
      name: "Bilal Raza",
      email: "bilal@email.com",
      grade: "11th",
      marks: 38,
    },
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  function handleAdd(newStudent) {
    setStudents([...students, newStudent]);
  }

  function handleRemove(id) {
    setStudents(students.filter((s) => s.id !== id));
  }

  function handleEdit(student) {
    setEditingStudent(student);
  }

  function handleUpdate(updatedStudent) {
    setStudents(
      students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)),
    );
    setEditingStudent(null);
  }

  function handleCancelEdit() {
    setEditingStudent(null);
  }

  const passingCount = students.filter((s) => s.marks >= 50).length;
  const failingCount = students.length - passingCount;
  const classAverage =
    students.length > 0
      ? Math.round(
          students.reduce((sum, s) => sum + Number(s.marks), 0) /
            students.length,
        )
      : 0;

  let processed = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (filter === "passing") processed = processed.filter((s) => s.marks >= 50);
  if (filter === "failing") processed = processed.filter((s) => s.marks < 50);

  processed = [...processed].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "marks") return b.marks - a.marks;
    return 0;
  });

  return (
    <div>
      <StudentForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingStudent={editingStudent}
        onCancelEdit={handleCancelEdit}
      />

      <hr />

      <div>
        <h2>Class Summary</h2>
        <p>
          Total: {students.length} | Passing: {passingCount} | Failing:{" "}
          {failingCount} | Average: {classAverage}%
        </p>
      </div>

      <hr />

      <div>
        <h2>Students ({processed.length})</h2>

        <div>
          <label>Filter: </label>
          <button onClick={() => setFilter("all")}>
            All {filter === "all" ? "✅" : ""}
          </button>
          <button onClick={() => setFilter("passing")}>
            Passing {filter === "passing" ? "✅" : ""}
          </button>
          <button onClick={() => setFilter("failing")}>
            Failing {filter === "failing" ? "✅" : ""}
          </button>
        </div>

        <div>
          <label>Sort: </label>
          <button onClick={() => setSortBy("name")}>
            Name {sortBy === "name" ? "✅" : ""}
          </button>
          <button onClick={() => setSortBy("marks")}>
            Marks {sortBy === "marks" ? "✅" : ""}
          </button>
        </div>
      </div>

      {processed.length === 0 && (
        <p>No students found. Try a different search or filter.</p>
      )}

      {processed.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default StudentsPage;
