import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = []
    // console.log(storedCart)
    //step 1: get id
    for(const id in storedCart){
      //step 2: get product by id
      const selectedProduct = products.find(product => product.id === id)
      //step 3: get quantity
      if(selectedProduct){
        const quantity = storedCart[id]
        selectedProduct.quantity = quantity;
        //step 4: set product to save cart
        savedCart.push(selectedProduct);
      }
    }
    //step 5: set cart
    setCart(savedCart)

  }, [products])



  const handleAddToCart = (product) => {
    let newCart = []
    // const newCart = [...cart, product]

    const exists = cart.find(pd => pd.id === product.id)
    if(!exists){
      product.quantity = 1;
      newCart = [...cart, product]
    }
    else{
      exists.quantity = exists.quantity + 1;
      const rest = cart.filter(pd => pd.id !== product.id)
      newCart = [...rest, exists]
    }

    setCart(newCart)
    addToDb(product.id)
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
