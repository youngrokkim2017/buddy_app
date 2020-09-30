import * as ChatApiUtil from '../util/chat_api_util';
import { receiveUsers } from './user_actions';

export const RECEIVE_CHATS = 'RECEIVE_CHATS';

export const receiveChats = chats => ({
    type: RECEIVE_CHATS,
    chats
});

// export const fetchChats = (postId) => dispatch => (
export const fetchChats = (requestId) => dispatch => (
    // ChatApiUtil.getChats(postId)
    ChatApiUtil.getChats(requestId)
        .then(response => dispatch(receiveChats(response.data)))
)

// export const fetchChatMembers = (postId) => dispatch => (
export const fetchChatMembers = (requestId) => dispatch => (
    // ChatApiUtil.getMembers(postId)
    ChatApiUtil.getMembers(requestId)
        .then(response => dispatch(receiveUsers(response.data)))
)