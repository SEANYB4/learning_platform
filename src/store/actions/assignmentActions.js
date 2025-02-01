export const submitAssignment = (assignmentId, submission) => {
    return (dispatch, getState) => {
        const { auth } = getState();
        dispatch({ type: 'SUBMIT_ASSIGNMENT_REQUEST' });
        axios.post(`http://api.yourdomain.com.assignments/submit/${assignmentId}`, submission, {
            headers: { Authorization: `Bearer ${auth.token}` }
        })
        .then(response => {
            dispatch({ type: 'SUBMIT_ASSIGNMENT_SUCCESS', payload: response.data });
        })
        .catch(error => {
            dispatch({ type: 'SUBMIT_ASSIGNMENT_FAIL', payload: error.message });
        });
    };
};



