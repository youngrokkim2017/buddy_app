import {
    getPosts, getUserPost, createPost, deletePost, modifyPost, getOnePost, getPostFromRequest
} from '../util/post_api_util';

export const RECEIVE_ONE_POST = 'RECEIVE_ONE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_USER_POST = 'RECEIVE_USER_POST';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

// export const receiveOnePost = (post) => ({
export const receiveOnePost = (payload) => ({
    type: RECEIVE_ONE_POST,
    // post
    payload
});

// export const receivePosts = (posts) => ({
export const receivePosts = (payload) => ({
    type: RECEIVE_POSTS,
    // posts
    payload
});

export const receiveUserPost = (posts) => ({
    type: RECEIVE_USER_POST,
    posts
});

export const receiveNewPost = (post) => ({
    type: RECEIVE_NEW_POST,
    post
});

export const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
});

export const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const fetchOnePost = (postId) => dispatch => (
    getOnePost(postId)
        // .then(post => dispatch(receiveOnePost(post)))
        .then(payload => dispatch(receiveOnePost(payload)))
        // .catch(err => console.log(err))
        .catch(err => dispatch(receivePostErrors(err.response.data)))
)

export const fetchPosts = () => dispatch => (
    getPosts()
        // .then(posts => dispatch(receivePosts(posts)))
        .then(payload => dispatch(receivePosts(payload)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const fetchUserPost = (id) => dispatch => (
    getUserPost(id)
        .then(posts => dispatch(receiveUserPost(posts)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const composePost = (data) => dispatch => (
    createPost(data)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const deletePostItem = (postId) => dispatch => (
    deletePost(postId)
        .then(post => dispatch(removePost(postId)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const editPost = (post) => dispatch => (
    modifyPost(post)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const fetchPostFromRequest = (requestId) => dispatch => (
    getPostFromRequest(requestId)
        .then(post => dispatch(receiveOnePost(post)))
);

window.modifyPost = modifyPost;