// import * as UserApiUtil from '../util/session_api_util'
import * as UserApiUtil from '../util/user_api_util';
// import { receiveAUser } from './user_actions';

export const RECEIVE_REQUESTERS = 'RECEIVE_REQUESTERS';

// ACTIONS
export const receiveRequesters = (requesters) => ({
    type: RECEIVE_REQUESTERS,
    requesters,
});

// THUNK ACTIONS
export const fetchRequestersFromPost = (postId) => dispatch => (
    UserApiUtil.fetchRequestersFromPost(postId)
        .then(requesters => dispatch(receiveRequesters(requesters)))
        .catch(err => console.log(err))
);

// export const updateAUser = (data) => dispatch => (
//     UserApiUtil.updateAUser(data)
//         .then(user => dispatch(receiveAUser(user)))
//         .catch(err => console.log(err))
// );

// export const fetchUserFromRequest = (requestId) => dispatch => (
//     UserApiUtil.fetchUserFromRequest(requestId)
//         .then(user => dispatch(receiveAUser(user)))
// );