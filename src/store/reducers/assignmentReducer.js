const initialState = {

    title: '',
    dueDate: new Date.now(),
    grade: 0
}


function assignmentReducer(state = initialState, action) {

    switch (action.type) {

        case 'FETCH_ASSIGNMENT_START':
            return { ... state, loadin}


    }
}