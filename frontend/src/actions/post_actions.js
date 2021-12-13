import {
    getPosts, getUserPost, createPost, deletePost, modifyPost, getOnePost, getPostFromRequest,
    // sendRequest, fetchRequests
} from '../util/post_api_util';

// import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ONE_POST = 'RECEIVE_ONE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_USER_POST = 'RECEIVE_USER_POST';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
// REQUESTS
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const REMOVE_REQUEST = "REMOVE_REQUEST";

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

// // REQUESTS
// const receiveRequest = (request) => ({
//     type: RECEIVE_REQUEST,
//     request,
// });

// const receiveRequests = (requests) => ({
//     type: RECEIVE_REQUESTS,
//     requests,
// });

// const removeRequest = (requestId) => ({
//     type: REMOVE_REQUEST,
//     requestId,
// });

// export const sendRequest = (postId) => dispatch => (
//     PostApiUtil.sendRequest(postId)
//         .then(request => dispatch(receiveRequest(request)))
//         .catch(err => console.log(err))
// );

// export const fetchRequests = (postId) => dispatch => (
//     PostApiUtil.fetchRequests(postId)
//         .then(requests => dispatch(receiveRequests(requests)))
//         .catch(err => console.log(err))
// );

// export const deleteRequest = (requestId) => dispatch => (
//     PostApiUtil.deleteRequest(requestId)
//         .then(requestId => dispatch(removeRequest(requestId)))
//         .catch(err => console.log(err))
// )
// //

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
        // .then(post => dispatch(removePost(postId)))
        .then(post => dispatch(removePost(post)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const editPost = (data) => dispatch => (
    modifyPost(data)
        // .then(post => dispatch(receiveNewPost(post)))
        .then(post => dispatch(receiveOnePost(post)))
        .catch(err => console.log(err))
        // .catch(err => dispatch(receivePostErrors(err.response.data)))
);

export const fetchPostFromRequest = (requestId) => dispatch => (
    getPostFromRequest(requestId)
        .then(post => dispatch(receiveOnePost(post)))
);

window.modifyPost = modifyPost;

// add post action for receving requests from a post