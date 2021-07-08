//we need to things initial state ,reducer

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/CartReducers';
import { productDetailsReducer, ProductListReducers } from './Reducers/ProductReducers';
const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    },
};
const reducer = combineReducers({
    productList: ProductListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
console.log("i am in store")

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;