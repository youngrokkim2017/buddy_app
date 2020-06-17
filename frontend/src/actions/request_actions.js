import * as RequestApiUtil from '../util/request_api_util';

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS';
export const RECEIVE_REQUEST = 'RECEIVE_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const RECEIVE_REQUEST_ERRORS = 'RECEIVE_REQUEST_ERRORS';

const receiveRequests = (requests) => ({
    type: RECEIVE_REQUESTS,
    requests,
});

const receiveRequest = (request) => ({
    type: RECEIVE_REQUEST,
    request,
});

const removeRequest = (requestId) => ({
    type: REMOVE_REQUEST,
    requestId,
});

const receiveRequestErrors = (errors) => ({
    type: RECEIVE_REQUEST_ERRORS,
    errors,
});

export const sendRequest = (postId) => dispatch => (
    RequestApiUtil.sendRequest(walkId)
        .then(request => dispatch(receiveRequest(request)))
        .catch(err => console.log(err))
);

export const modifyRequest = (request) => dispatch => (
    RequestApiUtil.modifyRequest(request)
        .then(request => dispatch(receiveRequest))
        .catch(err => console.log(err))
);

export const fetchRequests = (postId) => dispatch => (
    RequestApiUtil.fetchRequests(postId)
        .then(requests => dispatch(receiveRequests(requests)))
        .catch(err => console.log(err))
);

export const fetchRequest = (requestId) => dispatch => (
    RequestApiUtil.fetchRequest(requestId)
        .then(request => dispatch(receiveRequest(request)))
        .catch(err => console.log(err))
);

export const fetchActiveRequest = (userId) => dispatch => (
    RequestApiUtil.fetchActiveRequest(userId)
        .then(request => dispatch(receiveRequest(request)))
        .catch(err => console.log(err))
);

export const fetchUserRequest = () => dispatch => (
    RequestApiUtil.fetchUserRequests()
        .then(requests => dispatch(receiveRequests(requests)))
        .catch(err => console.log(err))
);

export const deleteRequest = (requestId) => dispatch => (
    RequestApiUtil.deleteRequest(requestId)
        .then(request => dispatch(removeRequest(requestId)))
        .catch(err => console.log(err))
)