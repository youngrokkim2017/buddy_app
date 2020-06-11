import axios from 'axios';

// all posts
export const getPost = () => {
    return axios.get('/api/posts');
};

// single post
export const getOnePost = (postId) => {
    // debugger
    return axios.get(`/api/posts/${postId}`);
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