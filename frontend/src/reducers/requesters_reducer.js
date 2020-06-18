import { RECEIVE_REQUESTERS } from '../actions/requester_actions';
import { requestsReduer } from './requests_reducer';

const requestersReducer = (state = {}, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_REQUESTERS:
            return newState[action.requesters.data] = aciton.requesters.data;
        default:
            return state;
    }
};

export default requestersReducer;