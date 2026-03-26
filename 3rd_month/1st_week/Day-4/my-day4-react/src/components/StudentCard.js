import { useState } from "react";
import { getLetterGrade, isPassing } from "../utils/validate";

function StudentCard({ student, onRemove, onEdit }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const letterGrade = getLetterGrade(Number(student.marks));
  const passing = isPassing(Number(student.marks));

  return (
    <div>
      <div>
        <h3>{student.name}</h3>
        <p>Email: {student.email}</p>
        <p>Grade: {student.grade}</p>
        <p>Marks: {student.marks} / 100</p>
        <p>Letter Grade: {letterGrade}</p>
        <p>Result: {passing ? "✅ Passing" : "❌ Failing"}</p>
      </div>

      <div>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>
        <button onClick={() => onEdit(student)}>Edit</button>
        <button onClick={() => onRemove(student.id)}>Remove</button>
      </div>

      {isExpanded && (
        <div>
          <h4>Additional Details:</h4>
          <p>Student ID: {student.id}</p>
          <p>
            Performance:{" "}
            {student.marks >= 90
              ? "🌟 Excellent"
              : student.marks >= 70
                ? "👍 Good"
                : student.marks >= 50
                  ? "✅ Average"
                  : "⚠️ Needs Improvement"}
          </p>
          <p>
            Remarks:{" "}
            {passing
              ? "Student is performing well. Keep it up!"
              : "Student needs to improve. Additional support recommended."}
          </p>
        </div>
      )}
      <hr />
    </div>
  );
}

export default StudentCard;
