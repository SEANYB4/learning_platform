import React from "react";
import { Link } from 'react-router-dom';


function Header() {

    return (

        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg">Learning Platform</h1>
            <nav>
                <Link to="/" className="px-2">Home</Link>
                <Link to="/courses" className="px-2">Courses</Link>
                <Link to="/assignments" className="px-2">Assignments</Link>
            </nav>
        </header>
    )
}

export default Header;