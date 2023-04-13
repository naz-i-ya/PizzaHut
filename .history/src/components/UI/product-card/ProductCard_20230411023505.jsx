import React from "react";
import ProductImg from "../../../assets/images/product_02.1.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image01, price }) => {
    const { id, title, image01, price } =item
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={ProductImg} alt="product-img" />
      </div>

      <div className="product__content">
        <h5>
          <Link to="">Burger</Link>
        </h5>
        <div>
          <span className="product__price">$24.00</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
