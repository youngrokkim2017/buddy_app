import {
    getPost, getUserPost, createPost, deletePost
} from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_USER_POST = 'RECEIVE_USER_POST';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePost = (posts) => ({
    type: RECEIVE_POST,
    posts
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
})

export const fetchPost = () => dispatch => (
    getPost()
        .then(posts => dispatch(receivePost(posts)))
        .catch(err => console.log(err))
);

export const fetchUserPost = (id) => dispatch => (
    getUserPost(id)
        .then(posts => dispatch(receiveUserPost(posts)))
        .catch(err => console.log(err))
);

export const composePost = (data) => dispatch => (
    createPost(data)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
);

export const deletePostItem = (postId) => dispatch => (
    deletePost(postId)
        .then(post => dispatch(removePost(postId)))
        .catch(err => console.log(err))
);