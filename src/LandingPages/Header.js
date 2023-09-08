import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/logo.svg'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const [signin_page_open_status, setSignin_page_open_status] = useState(false)
  sessionStorage.setItem('signin_page_open_status', signin_page_open_status)
  const signinpagestatechange = () => {
    setSignin_page_open_status(true)
    navigate('/signin')
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header"
        style={{ marginTop: '15px' }}
      >
        <Container style={{ marginTop: '-20px' }}>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto ">
              <Link to="/" className="nav-link" style={{ marginLeft: '-40%' }}>
                Home
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link to="/help" className="nav-link">
                Help
              </Link>
            </Nav>
            {
              <button
                name="signin"
                onClick={signinpagestatechange}
                className="signin-btn"
              >
                Sign In
              </button>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
