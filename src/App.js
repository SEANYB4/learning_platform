import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AssignmentsPage from './pages/AssignmentsPage';




function App() {
  return (
   <Router>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/courses' element={<CoursesPage />} />
      <Route path='/assignments' element={<AssignmentsPage />} />
    </Routes>
   </Router>
  );
}

export default App;
 