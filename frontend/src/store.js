import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

import { productListReducers, productDetailReducers } from './reducers/productReducers'
import { cartReducer } from './reducers/cardReducers'
import { userLoginReducers, userRegisterReducers } from './reducers/userReducer'


const reducer = combineReducers({
    productList: productListReducers,
    productDetail: productDetailReducers,
    cart: cartReducer,
    userLogin:userLoginReducers,
    userRegister: userRegisterReducers
})

const cartItemFromStorage = localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')): []


 const userInfoFromStorage = localStorage.getItem('userInfo') ? 
 JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
    cart:{cartItems: cartItemFromStorage},
    userLogin:{userInfo: userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

