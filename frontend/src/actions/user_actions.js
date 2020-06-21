import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_A_USER = 'RECEIVE_A_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

// ACTIONS

export const receiveAUser = (user) => ({
    type: RECEIVE_A_USER,
    user,
});

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
});

export const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors,
});

export const clearUserErrors = () => ({
    tyoe: CLEAR_USER_ERRORS,
});

// THUNK ACTIONS

export const fetchAUser = (id) => dispatch => (
    UserApiUtil.fetchAUser(id)
        .then(user => dispatch(receiveAUser(user)))
        .catch()
)

export const fetchUserFromRequest = (requestId) => dispatch => (
    UserApiUtil.fetchUserFromRequest(requestId)
        .then(user => dispatch(receiveAUser(user)))
);