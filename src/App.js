import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./views/students/Formik/Header";
import Headerfaculty from "./views/faculty/Formik/Headerfaculty";
import { Hellopage } from "./Hellopage";
import FacultyLogin from "./Login/Faculty/FacultyLogin";
import StudentLogin from "./Login/Student/StudentLogin";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hellopage />} />
          <Route exact path="/FacultyLogin" element={<FacultyLogin />} />
          <Route exact path="/student" element={<Header />} />
          <Route exact path="/faculty" element={<Headerfaculty />} />
          <Route exact path="/StudentLogin" element={<StudentLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

