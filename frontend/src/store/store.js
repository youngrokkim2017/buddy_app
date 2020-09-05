import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => (
const configureStore = (preloadedState = {}) => {
    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger]
    }

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
// );
};

export default configureStore;

// middleware allows us to view our state in the console window
// whenever a new action is dispatched to the store