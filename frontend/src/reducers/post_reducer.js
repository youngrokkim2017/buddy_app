import {
    RECEIVE_POSTS,
    RECEIVE_USER_POST,
    RECEIVE_NEW_POST,
    REMOVE_POST,
    RECEIVE_ONE_POST,
} from '../actions/post_actions';

const PostReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
// const PostReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ONE_POST:
            // newState[action.posts.data._id] = action.posts.data;
            // return newState;

            // // return newState[action.posts.data._id] = action.posts.data;

            // // return Object.assign({}, state = {}, { [action.post.data._id]: action.post.data });

            // // return Object.assign(newState, action.post);

            // return Object.assign(Object.assign({}, state, action.payload.data));
            return Object.assign({}, {}, { [action.payload.data._id]: action.payload.data });
        case RECEIVE_POSTS:
            newState.all = action.payload.data;
            // newState.all = action.posts.data;
            // // newState = action.posts.data;
            return newState;
        case RECEIVE_USER_POST:
            // newState.user = action.posts.data;
            // // newState = action.posts.data;
            return newState;
        case RECEIVE_NEW_POST:
            newState.new = action.post.data;
            // newState = action.post.data;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        default:
            return state;
    };
};

export default PostReducer;