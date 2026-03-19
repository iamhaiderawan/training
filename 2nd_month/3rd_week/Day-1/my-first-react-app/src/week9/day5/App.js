function PageHeader() {
  return (
    <header>
      <h1>Student Report Cards</h1>
      <p>Final Term — 2025</p>
    </header>
  );
}

function StudentInfo({ name, grade }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Grade: {grade}</p>
    </div>
  );
}

function SubjectList({ subjects }) {
  return (
    <div>
      <h4>Subjects:</h4>
      <ul>
        <li>Math: {subjects.math}</li>
        <li>English: {subjects.english}</li>
        <li>Science: {subjects.science}</li>
      </ul>
    </div>
  );
}

function ReportCard({ name, grade, subjects }) {
  return (
    <div>
      <StudentInfo name={name} grade={grade} />
      <SubjectList subjects={subjects} />
      <hr />
    </div>
  );
}

function PageFooter() {
  return (
    <footer>
      <p>© 2025 My School · All rights reserved</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <PageHeader />

      <ReportCard
        name="Ali Haider"
        grade="9th"
        subjects={{ math: 88, english: 92, science: 85 }}
      />

      <ReportCard
        name="Sara Ahmed"
        grade="9th"
        subjects={{ math: 95, english: 89, science: 91 }}
      />

      <ReportCard
        name="Usman Khan"
        grade="9th"
        subjects={{ math: 76, english: 83, science: 79 }}
      />

      <PageFooter />
    </>
  );
}

export default App;
