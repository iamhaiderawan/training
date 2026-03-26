import { useState } from "react";

function Header({ totalStudents, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <header>
      <h1>Student Management System</h1>
      <p>Month 3 - Week 1 - Day 4: Project Structure</p>
      <p>Total Students: {totalStudents}</p>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search students by name..."
        />
      </div>
    </header>
  );
}

export default Header;
