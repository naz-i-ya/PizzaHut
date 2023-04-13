import React from 'react'

import { ListGroupItem } from 'reactstrap'
import CartItem from './CartItem'

const Carts = () => {
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
    </div>
      </ListGroup>
    </div>
  )
}

export default Cartsz