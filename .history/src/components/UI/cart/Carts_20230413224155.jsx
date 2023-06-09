import React from 'react'

import { ListGroupItem } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="cart__container">
      <ListGroup className="cart">
    <div className="cart__close">
      <span></span>
    </div>
    <div className="cart__item-list">
      <CartItem />
    </div>

    <div className="cart__bottom">
      <h6>Subtotal amount: <span>$123</span></h6>
      <button><Link to="/checkout">Checkout</Link></button>
    </div>
      </ListGroup>
    </div>
  )
}

export default Carts