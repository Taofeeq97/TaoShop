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
 import { useLocation, useParams, useNavigate, Link  } from 'react-router-dom'

import MessageDisplay from '../components/MessageDisplay'
import Loader from '../components/Loader'
import { addToCart, removeFromCart } from '../actions/cartActions'

const ProductCartScreen = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {search} = useLocation();
    const dispatch = useDispatch();

    const qty = search ? search.split('=')[1] : 1

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    console.log(cartItems)

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])


    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleCheckout = () => {
        navigate('/login?redirect=shipping')
    }

  return (
    <div>
        <Row>
    <Col md={8}>
        <h1>
            Shopping Cart

            {cartItems.length === 0 ? (
                <MessageDisplay variant='info'>
                    <h4>Your Cart is Empty <Link
                    to='/'>GO Back</Link></h4>
                </MessageDisplay>
            ):
            (
                <ListGroup>
                {cartItems.map(item => (
                <ListGroup.Item key={item.product} className="my-2" >
                    <Row className="align-items-center" variant='flush'>
                        <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col md={3}>
                            <Link to={`/product/${item.product}`}>
                                <h4>{item.name}</h4>
                            </Link>
                        </Col>
                        <Col md={3}>
                            ${item.price}
                        </Col>
                        <Col md={3}>
                        <Form.Control
                            as='select'
                            value={item.qty}
                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                        >
                            {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x+1}>{x + 1}</option>
                            ))}
                        </Form.Control>
                        </Col>
                        
                        <Col md={1}>
                            <Button
                            type='button'
                            variant='light'
                            onClick={() => handleRemoveFromCart(item.product)}
                            >
                                <i className='fas fa-trash'></i>

                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}

                </ListGroup>
            )}
        </h1>
    </Col>
    <Col md={4}>
    <Card>
        <ListGroup variant='flush'>
            <ListGroup.Item>
            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroup.Item>

            <ListGroup.Item>
            <Button
                type='button'
                className='btn-block' 
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
            >
                Proceed To Checkout
            </Button>
            </ListGroup.Item>
        </ListGroup>
        </Card>

    </Col>
    </Row>
    </div>
  )
}

export default ProductCartScreen

