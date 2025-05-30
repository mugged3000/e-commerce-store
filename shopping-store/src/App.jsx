import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBarSection from './Component/Navbar';
import FooterSection from './Component/FooterSection';
import HomeSection from './Pages/Home';
import ShopSection from './Pages/Shop';
import MensCategory from './Pages/Mens';
import CartProvider from './Context/CartContext';
import CartPage from './Pages/Carts';
import ProductDetails from './Component/ProductsDetails'
import AboutUs from './Pages/About'
import './App.css';

const App = () => {
  const [searchItem, setSearchItem] = useState("");
 
  return (
    <CartProvider>
      <Router>
        <NavBarSection searchItem={searchItem} setSearchItem={setSearchItem} />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/shop" element={<ShopSection />} />
          <Route path="/men" element={<MensCategory searchItem={searchItem} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutUs />} />
         

        </Routes>
        <FooterSection />
      </Router>
    </CartProvider>
  );
};

export default App;
