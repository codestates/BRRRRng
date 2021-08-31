import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    userReducer,
    authReducer
});

export default rootReducer;