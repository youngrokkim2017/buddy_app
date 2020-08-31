import { RECEIVE_LISTENER, RECEIVE_ROOM, RECEIVE_EMIT, RECEIVE_EXIT_ROOM } from '../actions/socket_actions';
const io = require('socket.io-client');
let socket = process.env.NODE_ENV === 'production' ? io() : io('http://localhost:5000');
socket.on('success', (res) => console.log(res));

export const socketReducer = (state ={}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ROOM:
            socket.emit('joinRoom', action.room);
            return newState;
        case RECEIVE_LISTENER:
            socket.on(action.listener.action, action.listener.callback);
            return newState;
        case RECEIVE_EMIT:
            socket.emit(action.emit.action, action.emit.value);
            return newState;
        case RECEIVE_EXIT_ROOM:
            socket.emit('exitRoom', action.room);
            return newState;
        default:
            return state;
    }
}