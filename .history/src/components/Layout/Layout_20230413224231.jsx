import React from 'react'
import Routes from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import Carts from '../UI/cart/Carts'

const Layout = () => {
  return (
    <div>
        <Header />

        <Carts />
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}

export default Layout