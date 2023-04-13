import React from 'react'
import { Container } from 'reactstrap'

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