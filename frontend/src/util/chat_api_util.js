import axios from 'axios';

export const getChats = (postId) => {
    return axios.get(`/api/posts/${postId}/chat`);
    // return axios.get(`/api/requests/${postId}/chat`);
};

export const getMembers = (postId) => {
    // debugger
    return axios.get(`/api/posts/${postId}/chat/users`);
    // return axios.get(`/api/requests/${postId}/chat/users`);
}