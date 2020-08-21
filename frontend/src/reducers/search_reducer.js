import { RECEIVE_SEARCHED_POSTS } from '../actions/search_actions';

const searchReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SEARCHED_POSTS:
            return Object.assign({}, action.payload.posts);
        default:
            return state;
    }
};

export default searchReducer;