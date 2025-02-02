import React from "react";
import { connect } from 'react-redux';
import Header from "../components/Header";
import FileUpload from "../components/FileUpload";

import DisplayFiles from "../components/DisplayFiles";

import Assignment from "../components/Assignment";

function AccountPage({ userData }) {

    return (

        <div>
            <Header></Header>
            <h1>Account Information</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>

            <FileUpload></FileUpload>
            <DisplayFiles></DisplayFiles>

            <Assignment></Assignment>

        </div>
    );
}


const mapStateToProps = (state) => {

    // Assuming the user data is stored in state.auth.user
    // Adjust the path according to your Redux store structure
    
    return {
        userData: state.user
    };
}

export default connect(mapStateToProps)(AccountPage);