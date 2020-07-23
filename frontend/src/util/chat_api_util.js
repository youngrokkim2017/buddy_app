import axios from 'axios';

export const getChats = (postId) => {
    return axios.get(`/api/posts/${postId}/chat`)
};