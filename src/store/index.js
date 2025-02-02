// import { createStore , applyMiddleware, combineReducers } from 'redux';
// import {thunk} from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import coursesReducer from './reducers/courseReducer';

// const rootReducer = combineReducers({
//     courses: coursesReducer,
// });

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );


// export default store;

import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from './reducers/courseReducer';
import authReducer from './reducers/authReducer';


export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        user: authReducer,
    },
});