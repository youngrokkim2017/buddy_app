import { RECEIVE_LISTENER, RECEIVE_ROOM, RECEIVE_EMIT, RECEIVE_EXIT_ROOM } from '../actions/socket_actions';
// const io = requre('socket.io-client');
let socket = process.env.NODE_ENV === 'production' ? io() : io('http://localhost:5000')