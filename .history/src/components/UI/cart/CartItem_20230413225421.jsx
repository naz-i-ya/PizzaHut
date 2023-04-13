import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'

import '../../../styles/cart-item.css'

const CartItem = () => {
  return (
    <ListGroupItem className='border-0'>
        <div className="cart__item-info">
            <img src={productImg} alt="product-img" />

            <div className="cart__product-info">
                <div>
                    <h6>Burger</h6>
                    <p>2x <span>$24.00</span></p>
                    <span><i className="ri-add-line"></i></span>
                    <span>2</span>
                    <span><i className="ri-subtract-line"></i></span>
                </div>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default CartItem