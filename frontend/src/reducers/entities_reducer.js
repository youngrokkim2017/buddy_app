import { combineReducers } from 'redux';

import postsReducer from './post_reducer';
// import { requestsReducer } from "./requests_reducer";
import requestsReducer from "./requests_reducer";
import { requestersReducer } from './requesters_reducer';
import usersReducer from './users_reducer';
import chatsReducer from './chats_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    requests: requestsReducer,
    requesters: requestersReducer,
    chats: chatsReducer,
    search: searchReducer,
});