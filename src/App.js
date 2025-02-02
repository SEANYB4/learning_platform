import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AssignmentsPage from './pages/AssignmentsPage';
import RegisterUser from "./components/RegisterUser";
import Login from './pages/LoginPage.js';





function App() {
  return (
   <Router>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/courses' element={<CoursesPage />} />
      <Route path='/assignments' element={<AssignmentsPage />} />
      <Route path='/register' element={<RegisterUser></RegisterUser>} />
      <Route path='/login' element={<Login></Login>} />
    </Routes>
   </Router>
  );
}

export default App;
 