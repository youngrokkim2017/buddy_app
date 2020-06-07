import {
    RECEIVE_POST,
    RECEIVE_USER_POST,
    RECEIVE_NEW_POST,
    REMOVE_POST,
} from '../actions/post_actions';

const PostReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POST:
            newState.all = action.posts.data;
            return newState;
        case RECEIVE_USER_POST:
            newState.user = action.posts.data;
            return newState;
        case RECEIVE_NEW_POST:
            newState.new = action.post.data;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return state;
    };
};

export default PostReducer;