const initialState = {

    courses: [],
    loading: false,
    error: null,
};


function coursesReducer(state = initialState, action) {


    switch (action.type) {

        case 'FETCH_COURSES_START':
            return { ... state, loading: true };
        case 'FETCH_COURSES_SUCCESS':
            return { ... state, loading: false, courses: action.payload };
        case 'FETCH_COURSES_FAIL':
            return { ... state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default coursesReducer;