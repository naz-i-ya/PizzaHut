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
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
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
                        {
                            nav__links.map((item,index) => {
                                return(
                                    <NavLink to={item.path} key={index}>
                                        {item.display}
                                    </NavLink>
                                );
                            })
                        }
                    </div>
                </div>

                {/* ___Nav Right___ */}
                <div className="nav__right">
                    <span className="cart__icon">
                    <i className="ri-shopping-basket-line">
                        <span className="cart__badge">

                        </span>
                        <span className="user">
                        <i class="ri-user-line"></i>
                        </span>
                    </i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header