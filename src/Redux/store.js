import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
