import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'

const Orders = () => {
    const savedCart = useLoaderData()
    console.log(savedCart)
    
  return (
    <div className="order-review-container">
      <div className="review-item-container">
        {
            savedCart.map(product => <ReviewItem
            key={product.id}
            product={product}
            ></ReviewItem>)
        }
      </div>

      <div className="review-cart-container">
        <Cart cart={savedCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;