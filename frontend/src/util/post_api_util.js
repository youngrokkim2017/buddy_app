import axios from 'axios';
// import { request } from 'express';

// all posts
export const getPosts = () => {
    return axios.get('/api/posts');
};

// single post
export const getOnePost = (postId) => {
    // debugger
    return axios.get(`/api/posts/${postId}`);
    // return axios.get(`/api/post/${postId}`);
};

export const getUserPost = (id) => {
    return axios.get(`/api/posts/user/${id}`);
};

export const createPost = (data) => {
    // debugger
    return axios.post('/api/posts/', data);
};

export const deletePost = (id) => {
    return axios.delete(`/api/posts/${id}`);
};

export const modifyPost = (post) => {
    return axios.patch(`/api/posts/${post._id}`, post);
};

export const getPostFromRequest = (requestId) => {
    return axios.get(`/api/posts/requests/${requestId}`);
};


// // REQUESTS

// export const sendRequest = (requestId) => {
//     // return axios.post(`/api/requests/posts/${requestId}`);
//     return axios.post(`/api/posts/requests/${requestId}`);
// };

// export const fetchRequests = (requestId) => {
//     // return axios.get(`/api/requests/posts/${requestId}`);
//     return axios.get(`/api/posts/requests/${requestId}`);
// };

// export const deleteRequest = (id) => {
//     return axios.delete(`/api/posts/requests/${id}`);
// };