import React from "react";

function AccountPage({ userData }) {

    return (

        <div>
            <h1>Account Information</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default AccountPage;