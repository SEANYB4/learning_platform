import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const LogoutButton = () => {
    // Retrieve user data from Redux store

    const user = useSelector(state => state.user);
 
    const handleLogout = () => {
        const config = {
            headers: {

                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        };

        const body = {
            userId: user.userId
        }

    
        // Optionally make an API request to the backend to invalidate the session

        axios.post('http://localhost:3001/api/logout', body, config)
        .then(response => {
            console.log(response.data.message);
            localStorage.removeItem('token');
            window.location.href = '/';

        }).catch(error => console.error('Error logging out:', error));   
        
    };

    return (

        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
    );
}

export default LogoutButton;