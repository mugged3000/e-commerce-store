
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBarSection from './Component/Navbar'
import HomeSection from './Pages/Home'
import './App.css'
const App =()=>{
  const [searchItem,setSearchItem] = useState("")
  return(
   
    <>
     <Router>
     <NavBarSection searchItem={searchItem} setSearchItem={setSearchItem}/>
     <Routes>
       <Route path="/" element={<HomeSection searchItem={searchItem}/>}/>
      
     </Routes>
  </Router>
    </>
  )
}

export default App ;