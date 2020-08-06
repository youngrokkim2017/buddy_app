import { RECEIVE_LISTENER, RECEIVE_ROOM, RECEIVE_EMIT, RECEIVE_EXIT_ROOM } from '../actions/socket_actions';
// const io = requre('socket.io-client');
// let socket = process.env.NODE_ENV === 'production' ? io() : io('http://localhost:5000');

export const socketReducer = (state ={}, action) => {
    Object.freeze(state);

    // let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ROOM:
            //
            return //
        case RECEIVE_LISTENER:
            //
            return //
        case RECEIVE_EMIT:
            //
            return //
        case RECEIVE_EXIT_ROOM:
            //
            return //
        default:
            return state;
    }
}