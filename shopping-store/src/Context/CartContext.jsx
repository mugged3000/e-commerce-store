// src/context/CartContext.jsx
import React, { createContext, useContext} from 'react';
   import useLocalStorage from '../LocalStorage/LocalData'
// Create the context
 export const CartContext = createContext();

// for easy accessing
export const useCart = () => useContext(CartContext);

// CartProvider component
 const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('cart', []);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
   
  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Increment quantity
  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
   <>
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increment, decrement, total }}
    >
      {children}
    </CartContext.Provider>
   </>
  );
};
export default CartProvider;





