import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'

import '../../../styles/cart-item.css'

const CartItem = () => {
  return (
    <ListGroupItem className='border-0'>
        <div className="cart__item-info d-flex gap-2">
            <img src={productImg} alt="product-img" />

            <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <h6 className='cart__product-title'>Burger</h6>
                    <p className='d-flex align-items-center gap-5 cart__product-price'>2x <span>$24.00</span></p>

<div className='d-flex align-items-center gap-3 justify-content-between  increase__decrease-btn'>

<span ><i className="ri-add-line"></i></span>
                    <span>2</span>
                    <span><i className="ri-subtract-line"></i></span>
                </div>
            </div>

</div>
                 

            <span className='delete__btn'>
              <i className='ri-close-line'></i>
            </span>
        </div>
    </ListGroupItem>
  )
}

export default CartItem