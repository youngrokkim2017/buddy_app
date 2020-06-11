import { combineReducers } from 'redux';

import postsReducer from './post_reducer';

export default combineReducers({
    posts: postsReducer,
});