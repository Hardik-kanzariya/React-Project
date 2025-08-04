import { combineReducers } from "redux";
import movieReducer from '../Reducers/movieReducers';
import userReducer from '../Reducers/userReducer';

export const rootReducer = combineReducers({
    movieReducer,
    userReducer,
})