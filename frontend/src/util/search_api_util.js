import axios from 'axios';

export const getSearchedPosts = (query) => {
    return axios.get(`/api/posts/search/${query}`);
};