import axios from "axios";


export const loginUser = (credentials) => {
    return (dispatch) => {

        dispatch({ type: 'AUTH_REQUEST' });
        axios.post('http://api.yourdomain.com/login', credentials)
            .then(response => {
                dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                dispatch({ type: 'AUTH_ERROR', payload: error.message });
            });
    };
};

export const logoutUser = () => {
    localStorage.removeItem('token');
    return { type: 'LOGOUT' };
};