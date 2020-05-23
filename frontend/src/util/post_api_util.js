import axios from 'axios';

export const getPost = () => {
    return axios.get('/api/posts');
};

export const getUserPost = (id) => {
    return axios.get(`/api/posts/user/${id}`);
};

export const createPost = (data) => {
    // debugger
    return axios.post('/api/posts/', data);
};