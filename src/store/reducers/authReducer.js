const intialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
};

function authReducer(state = intialState, action) {

    switch (action.type) {
        case 'AUTH_REQUEST':
            return {...state, loading: true };
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true, loading: false, token: action.payload.token,
                userId: action.payload.userId,
                name: action.payload.name,
                email: action.payload.email };
        case 'AUTH_ERROR':
        case 'LOGOUT':
            return { ...state, token: null, isAuthenticated: false, loading: false, user: null};
        default:
            return state;
    }   
}

export default authReducer;


