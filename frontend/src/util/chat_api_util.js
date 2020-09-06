import axios from 'axios';

// export const getChats = (postId) => {
export const getChats = (requestId) => {
    // return axios.get(`/api/posts/${postId}/chat`);
    return axios.get(`/api/requests/${requestId}/chat`);
};

// export const getMembers = (postId) => {
export const getMembers = (requestId) => {
    // debugger
    // return axios.get(`/api/posts/${postId}/chat/users`);
    return axios.get(`/api/requests/${requestId}/chat/users`);
}