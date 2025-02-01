import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';


function RegisterUser() {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {

        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {


        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:3001/api/users', userData);

            console.log('User created:', response.data);
            alert('User created successfully');


            setUserData( { name: '', email: '', password: ''});
        } catch (error) {

            console.error('Error creating user:', error.response.data);
            alert('Failed to create user');
        }
    };

    return (

        <div>

            <Header></Header>
            <form onSubmit={handleSubmit}>



            <h2>Register User</h2>
            <div>
                <label>Name:</label>
                <input
                    type='text'
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                    ></input>
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>

        
    );
}

export default RegisterUser;