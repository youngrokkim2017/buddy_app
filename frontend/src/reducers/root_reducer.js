import { combineReducers } from 'redux';
import session from './session_reducer';
import post from './post_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
    session,
    post,
    errors
});

export default RootReducer;