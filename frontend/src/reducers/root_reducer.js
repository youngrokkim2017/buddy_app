import { combineReducers } from 'redux';
import session from './session_reducer';
// import post from './post_reducer';
import posts from './post_reducer';
import errors from './errors_reducer';
import entitiesReducer from './entities_reducer';
import { socketReducer } from './socket_reducer';

const RootReducer = combineReducers({
    session,
    // post,
    posts,
    errors,
    entities: entitiesReducer,
    socket: socketReducer,
});

export default RootReducer;