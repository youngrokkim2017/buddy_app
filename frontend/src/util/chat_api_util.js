import axios from 'axios';

export const getChats = (postId) => {
    return axios.get(`/api/posts/${postId}/chat`)
};

export const getMembers = (postId) => {
    return axios.get(`/api/posts/${postId}/chat/users`);
}