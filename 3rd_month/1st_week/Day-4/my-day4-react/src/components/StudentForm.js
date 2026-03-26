import { useState } from "react";
import { validateStudentForm } from "../utils/validate";

function StudentForm({ onAdd, onUpdate, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState(
    editingStudent || { name: "", email: "", grade: "", marks: "" },
  );
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateStudentForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editingStudent) {
      onUpdate({ ...formData, id: editingStudent.id });
    } else {
      onAdd({ ...formData, id: Date.now(), marks: Number(formData.marks) });
    }

    setFormData({ name: "", email: "", grade: "", marks: "" });
    setErrors({});
  }

  function handleCancel() {
    setFormData({ name: "", email: "", grade: "", marks: "" });
    setErrors({});
    onCancelEdit();
  }

  return (
    <div>
      <h2>{editingStudent ? "Edit Student" : "Add New Student"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student full name"
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
            placeholder="Student email"
          />
          {errors.email && (
            <span style={{ color: "red" }}> ❌ {errors.email}</span>
          )}
        </div>

        <div>
          <label>Grade: </label>
          <select name="grade" value={formData.grade} onChange={handleChange}>
            <option value="">Select grade</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>
          {errors.grade && (
            <span style={{ color: "red" }}> ❌ {errors.grade}</span>
          )}
        </div>

        <div>
          <label>Marks (0 - 100): </label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            placeholder="Enter marks"
            min="0"
            max="100"
          />
          {errors.marks && (
            <span style={{ color: "red" }}> ❌ {errors.marks}</span>
          )}
        </div>

        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>

        {editingStudent && (
          <button type="button" onClick={handleCancel}>
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}

export default StudentForm;
