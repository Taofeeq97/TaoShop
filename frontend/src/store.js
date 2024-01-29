import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import { productListReducers, productDetailReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cardReducers'


const reducer = combineReducers({
    productList: productListReducers,
    productDetail: productDetailReducers,
    cart: cartReducer
})

const cartItemFromStorage = localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')): []

const initialState = {
    cart:{cartItems: cartItemFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

