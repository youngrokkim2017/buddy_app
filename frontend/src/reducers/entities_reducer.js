import { combineReducers } from 'redux';

import postsReducer from './post_reducer';
import { requestsReducer } from './requests_reducer';
import { requestersReducer } from './requesters_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    requests: requestsReducer,
    requesters: requestersReducer,
});