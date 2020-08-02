import * as ChatApiUtil from '../util/chat_api_util';
import receiveUsers from './user_actions';

export const RECEIVE_CHATS = 'RECEIVE_CHATS';

export const receiveChats = chats => ({
    type: RECEIVE_CHATS,
    chats
});

export const fetchChats = (postId) => dispatch => (
    ChatApiUtil.getChats(postId)
        .then(response => dispatch(receiveChats(response.data)))
)

export const fetchChatMembers = (postId) => dispatch => (
    ChatApiUtil.getMembers(postId)
        .then(response => dispatch(receiveUsers(response.data)))
)