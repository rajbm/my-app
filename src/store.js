import { createStore, combineReducers, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import books from './books/reducer.js';
import authors from './authors/reducer.js';

export default createStore(
    combineReducers({
		  books,
		  authors
    }),
    applyMiddleware(thunk)
);