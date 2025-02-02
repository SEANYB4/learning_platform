import axios from "axios";

export const fetchCourses = () => {

    return (dispatch) => {

        dispatch({ type: 'FETCH_COURSES_START' });
        fetch('http://localhost:3001/courses')
        .then(response => response.json())
        .then(data => dispatch({ type: "FETCH_COURSES_SUCCESS", payload: data}))
        .catch(error => dispatch({ type: 'FETCH_COURSES_FAIL', payload: error }));
    };
};

export const enrollInCourse = (courseId) => {

    return (dispatch, getState) => {
        const { auth } = getState(); // Get token from auth state
        dispatch({ type: 'ENROLL_REQUEST' });
        axios.post(`http://api.yourdomain.com/courses/enroll/${courseId}`, {}, {
            headers: { Authorization: `Bearer ${auth.token}` }
        })
        .then(response => {

            dispatch({ type: 'ENROLL SUCCESS', payload: response.data });
        })
        .catch(error => {
            dispatch({ type: 'ENROLL_FAIL', payload: error.message });
        });
    };
};


