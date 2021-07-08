//we need to things initial state ,reducer

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducers, ProductListReducers } from './Reducers/ProductReducers';
const initialState = {};
const reducer = combineReducers({
    productList: ProductListReducers,
    productDetails: productDetailsReducers
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;