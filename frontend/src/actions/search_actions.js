import * as searchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCHED_POSTS = "RECEIVE_SEARCHED_POSTS";

const receiveSearchedPosts = (payload) => ({
    type: RECEIVE_SEARCHED_POSTS,
    payload
});

export const getSearchedPosts = (query) => dispatch => (
    searchAPIUtil.getSearchedPosts(query)
        .then(payload => {dispatch(receiveSearchedPosts(payload))})        
);