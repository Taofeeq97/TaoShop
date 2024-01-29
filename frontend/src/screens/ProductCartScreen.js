import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card

 } from 'react-bootstrap'
 import { useLocation, useParams, useNavigate  } from 'react-router-dom'

import MessageDisplay from '../components/MessageDisplay'
import Loader from '../components/Loader'
import { addToCart } from '../actions/cartActions'

const ProductCartScreen = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {search} = useLocation();
    const dispatch = useDispatch();

    const qty = search ? search.split('=')[1] : 1

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

  return (
    <div>
      ProductCartScreen
    </div>
  )
}

export default ProductCartScreen
