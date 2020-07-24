import * as ChatApiUtil from '../util/chat_api_util';
// import receiveUsers from './user_actions';

export const RECEIVE_CHATS = 'RECEIVE_CHATS';

export const receiveChats = chats => ({
    type: RECEIVE_CHATS,
    chats
});

export const fetchChats = (postId) => dispatch => (
    ChatApiUtil.getChats(postId)
        .then(res => dispatch(receiveChats(res.data)))
)