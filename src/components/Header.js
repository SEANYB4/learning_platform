import React from "react";
import { Link } from 'react-router-dom';
import RegisterUser from "./RegisterUser";
import Logout from './Logout.js';

function Header() {

    return (

        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg">Learning Platform</h1>
            <nav>
                <Link to="/" className="px-2">Home</Link>
                <Link to="/courses" className="px-2">Courses</Link>
                <Link to="/register" className="px-2">Register New User</Link>
                <Link to='/login' className='px-2'>Login</Link>
            </nav>
            <Logout></Logout>
        </header>
    )
}

export default Header;