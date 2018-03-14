import {createStore, applyMiddleware} from 'redux' // using redux, not react-redux
import reducer from './redux/reducer'
import promiseMiddleware from 'redux-promise-middleware'


export default createStore(reducer, applyMiddleware(promiseMiddleware()));
//Store is used in index.js by react-redux top level provider
//We still pass data from single parent store, down to a child.

