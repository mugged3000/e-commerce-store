import React from 'react';
import { useCart } from '../Context/CartContext';
// import { useCart } from '../Context/CartContext';

const CartPage = () => {
  const { cartItems, increment, decrement, removeFromCart, total } = useCart();

  return (
    <div className="cart-page container-fluid py-5">
      <h1 className="mb-4 py-5">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">your cart is Empty, add product</p>
      ) : (
        <div className="row d-flex justify-content-between">
          <div className="col-lg-5">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item d-flex align-items-center mb-3 p-3 border rounded">
                  <img src={item.image} alt={item.title} width={150} height={150} style={{ objectFit: 'cover' }} />
                  <div className="ms-3 flex-grow-1">
                    <h5 style={{fontSize:"15px"}}>{item.title}</h5>
                    <p>${item.price}</p>
                    <h5>{item.category}</h5>
                    <div className="d-flex align-items-center">
                      <button onClick={() => decrement(item.id)} className="btn btn-sm btn-outline-secondary" style={{fontWeight:"bolder",fontSize:"1.7rem",border:"2px solid black"}}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => increment(item.id)} className="btn btn-sm btn-outline-secondary" style={{fontWeight:"bolder",fontSize:"1.7rem" ,border:"2px solid black"}}>+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-sm btn-danger ms-auto">
                   Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="summary p-3 border rounded">
              <h4>Order Summary</h4>
              <p>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
              <p>Total Price: ${total.toFixed(2)}</p>
              <button className="btn btn-primary w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;