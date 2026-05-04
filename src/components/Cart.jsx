import React from 'react'

const Cart = ({ cartItems }) => {

      return (
        <div style={{ border: '1px dashed #aaa', padding: '10px', margin: '20px 0' }}>
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? <p>Cart is empty</p> : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item} is in your cart.</li>
              ))}
            </ul>
          )}
        </div>
      );
    };
  
    export default Cart;




