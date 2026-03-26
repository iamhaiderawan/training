// All validation logic lives here — reusable across any component

export function validateStudentForm(formData) {
  const errors = {};

  if (!formData.name.trim()) errors.name = "Name is required";
  else if (formData.name.trim().length < 3)
    errors.name = "Name must be at least 3 characters";

  if (!formData.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errors.email = "Enter a valid email address";

  if (!formData.grade) errors.grade = "Please select a grade";

  if (!formData.marks) errors.marks = "Marks are required";
  else if (formData.marks < 0 || formData.marks > 100)
    errors.marks = "Marks must be between 0 and 100";

  return errors;
}

export function getLetterGrade(marks) {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";
  return "F";
}

export function isPassing(marks) {
  return marks >= 50;
}
