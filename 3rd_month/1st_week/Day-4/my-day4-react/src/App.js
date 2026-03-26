import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentsPage from "./pages/StudentPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header totalStudents={5} onSearch={setSearchTerm} />
      <hr />

      <StudentsPage searchTerm={searchTerm} />
      <hr />

      <Footer />
    </div>
  );
}

export default App;
