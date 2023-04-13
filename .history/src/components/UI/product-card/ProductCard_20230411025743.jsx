import React from "react";
import ProductImg from "../../../assets/images/product_2.1.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image01, price }) => {
    
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/food/${id}`}>{title}</Link>
        </h5>
        <div>
          <span className="product__price">${price}</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
