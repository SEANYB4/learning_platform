import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login' />
            )}
    >


    </Route>
);


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute);