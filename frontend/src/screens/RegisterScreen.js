import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import MessageDisplay from '../components/MessageDisplay'


const RegisterScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const {search} = useLocation();
    const dispatch = useDispatch();

    const redirect = search ? search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)

    const {error, loading, userInfo} = userRegister

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    },[navigate, userInfo, redirect])

    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords do not match!')
        }else{
        dispatch(register(name, email, password))
        }
    }

  return (
    <FormContainer>
        <h1>Register</h1>
{message && <MessageDisplay variant='danger'>{message}</MessageDisplay>}
{error && <MessageDisplay variant='danger'>{error}</MessageDisplay>}

{loading && <Loader/>}

<Form onSubmit={handleSubmitLoginForm}>
      <Form.Group controlId='name'>
          <Form.Label>
              Name
          </Form.Label>
          <Form.Control
            required
            type='name'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          >

          </Form.Control>
      </Form.Group>

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

      <Form.Group controlId='passwordConfirm'>
          <Form.Label>
              Confirm Password
          </Form.Label>
          <Form.Control
            required
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >

          </Form.Control>
      </Form.Group>

      <Button 
          className='my-3'
          type='submit'
          variant='primary'
      >Register</Button>
</Form>

<Row className='py-3'>
        <Col>
        Already have an account? <Link
        to={redirect? `/login?redirect=${redirect}`: '/login'}
        >Sign In</Link>
        </Col>
      </Row>
      
    </FormContainer>
  )
}

export default RegisterScreen
