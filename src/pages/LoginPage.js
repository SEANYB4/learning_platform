import React, { useState } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { loginUser } from '../store/actions/authActions';
import Header from "../components/Header.js";
import AccountPage from "./AccountsPage.js";

function LoginPage({ loginUser }) {
    const [credentials, setCredentials] = useState({ 
        email: '', 
        password: ''
    });


    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [error, setError] = useState(null);

    const handleChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {

            const response = await axios.post('http://localhost:3001/api/login', credentials);

            localStorage.setItem('token', response.data.token);

            loginUser(credentials); //Redux action
            setIsLoggedIn(true);

            console.log('Login successful: ', response);
        } catch(error) {

            if (error.response) {
                console.error("Login failed: ", error.response.data);
                setError('Failed to log in: ' + error.response.data.message);
            } else if (error.request) {
                console.error('Login failed: ', error.request);
                setError('No response from server');
            } else {
                console.error('Error', error.message);
                setError('Error: ' + error.message);
            }
        }
    };

    if (isLoggedIn) {
        return <AccountPage />
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

export default connect(null, { loginUser })(LoginPage);

