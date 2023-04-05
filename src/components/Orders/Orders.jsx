import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const savedCart = useLoaderData()
    // console.log(savedCart)
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const rest = cart.filter(product => product.id !== id)
        setCart(rest)
        removeFromDb(id)
    }
    
    const handleClearCart = () => {
      setCart([])
      deleteShoppingCart()
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
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        >
          <Link className="checkout-link" to='/checkout'>
            <button className="btn-checkout">
              <span>Proceed Checkout</span>
              <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;