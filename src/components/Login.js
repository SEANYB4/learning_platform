import { useState } from 'react';
import React from "react";
import axios from 'axios';

import Header from './Header';

import AccountPage from '../pages/AccountsPage';

function Login({ onLoginSuccess }) {


    const [credentials, setCredentials] = useState({
        name: 'test',
        email: '',
        password: ''
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {


        e.preventDefault();

        try {
            

            const response = await axios.post('http://localhost:3001/api/login', credentials);
            localStorage.setItem('token', response.data.token);
            // onLoginSuccess(response.data);
            setIsLoggedIn(true);


            
            console.log('Login successful: ', response);


        } catch(error) {

            if (error.response) {

                // The request was made and the server responded with a status code 200+
                console.error("Login failed:", error.response.data);
                alert('Failed to log in: ' + error.response.data.message);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Login failed:', error.request);
                alert('No response from server');
            } else {

                // Something happened in setting up the request that triggered an Error

                console.error('Error', error.message);
                alert('Error: ' + error.message);
                
            }
        }
    };

    if (isLoggedIn) {


        return (
            <AccountPage userData={credentials}></AccountPage>
        )
    }


    return (

        <div>

            <Header></Header>

            <form onSubmit={handleSubmit}>


            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={credentials.email} onChange={handleChange} required />


                <label>Password:</label>
                <input type='password' name='password' value={credentials.password} onChange={handleChange} required></input>
            </div>
            <button type="submit">Login</button>
            </form>



        </div>
        
    );


}

export default Login;