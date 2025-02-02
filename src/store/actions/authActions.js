import axios from "axios";


export const loginUser = (credentials) => {
    return (dispatch) => {

        dispatch({ type: 'AUTH_REQUEST' });
        axios.post('http://localhost:3001/api/login', credentials)
            .then(response => {

                const { token, userId, name, email } = response.data;
                localStorage.setItem('token', token);

                dispatch({ type: 'LOGIN_SUCCESS', payload: { token, userId, name, email } });
                
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