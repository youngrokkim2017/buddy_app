import axios from 'axios';

export const sendRequest = (postId) => {
    // return axios.post(`/api/requests/posts/${postId}`);
    return axios.post(`/api/requests/post/${postId}`);
};

export const fetchRequests = (postId) => {
    // return axios.get(`/api/requests/posts/${postId}`);
    return axios.get(`/api/requests/post/${postId}`);
};

export const fetchRequest = (requestId) => {
    return axios.get(`/api/requests/${requestId}`);
};

export const modifyRequest = (request) => {
    return axios.patch(`/api/requests/${request._id}`, request);
};

export const fetchActiveRequest = (userId) => {
    return axios.get(`/api/requests/users/${userId}`);
};

export const fetchActiveRequests = (postId) => {
    // return axios.get(`/api/requests/posts/approved/${postId}`);
    return axios.get(`/api/requests/post/approved/${postId}`);
};

export const fetchUserRequests = () => {
    return axios.get('/api/requests');
};

export const deleteRequest = (id) => {
    return axios.delete(`/api/requests/${id}`);
};

