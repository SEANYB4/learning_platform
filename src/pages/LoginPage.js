import React, { useState } from "react";
import { connect } from 'react-redux';
import { loginUser } from '../store/actions/authActions';

function LoginPage({ loginUser }) {
    const [credentials, setCredentials] = useState({ email: '', password: ''});

    const handleChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(credentials);
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" value={credentials.email} onChange={handleChange} ></input>
            <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
            <button type="submit">Login</button>

        </form>
    );
}

export default connect(null, { loginUser })(LoginPage);

