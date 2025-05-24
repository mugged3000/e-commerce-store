
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBarSection from './Component/Navbar'
 import FooterSection from './Component/FooterSection'
import HomeSection from './Pages/Home'
import ShopSection from './Pages/Shop'
import MensCategory from './Pages/Mens'

import './App.css'
const App =()=>{
  const [searchItem,setSearchItem] = useState("");
  const [addCart, setAddCart] = useState(0);
  return(
   
    <>
     <Router>
     <NavBarSection searchItem={searchItem} setSearchItem={setSearchItem}  addCart={addCart}/>
     <Routes>
       <Route path="/" element={<HomeSection searchItem={searchItem}  addCart={addCart}  setAddCart={setAddCart}/>}/>
       <Route path="/shop" element={<ShopSection />}/>
       <Route path="/men" element={<MensCategory />} />
     </Routes>
     <FooterSection />
  </Router>
    </>
  )
}

export default App ;