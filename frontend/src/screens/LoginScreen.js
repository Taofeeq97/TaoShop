import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import MessageDisplay from '../components/MessageDisplay'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {search} = useLocation();
    const dispatch = useDispatch();

    const redirect = search ? search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)

    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    },[navigate, userInfo, redirect])

    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
  return (
    <FormContainer>
      <h1>Sign In</h1>

      {error && <MessageDisplay variant='danger'>{error}</MessageDisplay>}

      {loading && <Loader/>}

      <Form onSubmit={handleSubmitLoginForm}>
            <Form.Group controlId='email'>
                <Form.Label>
                    Email Address
                </Form.Label>
                <Form.Control
                required
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control
                required
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                >

                </Form.Control>
            </Form.Group>

            <Button 
                className='my-3'
                type='submit'
                variant='primary'
            >Sign In</Button>
      </Form>

      <Row className='py-3'>
        <Col>
        New Customer? <Link
                        to={redirect? `/register?redirect=${redirect}`: '/register'}
                        >Register</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
