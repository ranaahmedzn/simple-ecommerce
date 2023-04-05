import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData()
    // console.log(savedCart)
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const rest = cart.filter(product => product.id !== id)
        setCart(rest)
        removeFromDb(id)
    }
    
  return (
    <div className="order-review-container">
      <div className="review-item-container">
        {
            cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewItem>)
        }
      </div>

      <div className="review-cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;