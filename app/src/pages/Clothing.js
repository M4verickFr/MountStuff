import React from "react";
import '../style/clothing.css';

import { FaShoppingCart } from 'react-icons/fa';

let nbProducts = 18;

const Clothing = () => {
  let products = [];

  for (var i=0; i<nbProducts; i++) {
    products.push(
      <div class='product'>
        <div class='product_inner'>
          <img src={`/images/clothings/clothe${i%3+1}.png`} width='300' />
          <p>Lorem Ipsum</p>
          <p>Size L</p>
          <p>Price 42.99€</p>
          <button><FaShoppingCart /> <p>Add to cart</p></button>
        </div>
      </div>
    );
  }
  
  return (
  <div id="clothing">
    <div id="img-container"><img src={"/assets/hcl_bg.png"} /></div>
    <section id="clothing-container">
      {products}
    </section>
  </div>
)};

export default Clothing;