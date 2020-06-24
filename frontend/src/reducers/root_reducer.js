import { combineReducers } from 'redux';
import session from './session_reducer';
// import post from './post_reducer';
import posts from './post_reducer';
import errors from './errors_reducer';
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    session,
    // post,
    posts,
    errors,
    entities: entitiesReducer,
});

export default RootReducer;