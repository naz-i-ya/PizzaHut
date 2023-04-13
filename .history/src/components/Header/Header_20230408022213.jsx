import React from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'

import { NavLink, Link } from 'react-router-dom'


const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'All Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Checkout',
        path: '/checkout'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
    {
        display: 'Food Details',
        path: '/food'
    },
    {
        display: 'Login',
        path: '/login'
    },
    {
        display: 'Register',
        path: '/register'
    }
]

const Header = () => {
  return (
    <header className='header'>
        <Container>
            <div className="nav__wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h5>Tasty Treat</h5>
                </div>

                {/* ___Menu___ */}
                <div className="navigation">
                    <div className="menu">

                    </div>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header