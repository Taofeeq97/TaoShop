import React from 'react'
import {
    Container,
    Nav, 
    NavDropdown, 
    Navbar, 
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import { Logout } from '../actions/userActions';



const Header = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('Logout clicked')
    dispatch(Logout())
  }

  return (
    <header>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >TaoShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to='/cart'>
            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
              </NavDropdown>
            ): (
              
              <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>

            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
