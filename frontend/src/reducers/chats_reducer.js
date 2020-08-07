import { RECEIVE_CHATS } from '../actions/chat_actions';

const chatsReducer = (state = [], action) => {
    let newState = state.slice();

    switch(action.type) {
        case RECEIVE_CHATS:
            newState = action.chats;
            return newState;
        default:
            return state;
    };
}

export default chatsReducer;