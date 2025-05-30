import { useState } from "react";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../Context/CartContext';

const NavBarSection = ({ searchItem, setSearchItem }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { cartItems } = useCart();

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          {/* Brand  */}
          <Link className="navbar-brand logo" to="/" style={{color:"brown"}}>SHOPSTYLE</Link>

          {/* Search and cart icons */}
          <div className="d-flex align-items-center gap-3 ms-auto order-lg-last">
            <div className="clickable-icon search-icon" role="button" tabIndex={0} aria-label="Search">
              <FaSearch onClick={handleSearchIconClick} />
              {showSearchInput && (
                <input
                  type="text"
                  placeholder="search"
                  className="p-1 ms-2"
                  style={{ border: "1px solid #ced4da", boxShadow: "none", width: "150px" }}
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
              )}
            </div>
            <div className="clickable-icon cart-icon position-relative" role="button"
             tabIndex={0} aria-label="Cart">
                        <Link to="/cart" style={{color:"black"}}>
              <FaCartPlus size={25} />
              {cartItems.length > 0 ? (
                <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger" 
                style={{ fontSize: "0.7rem" }}>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              ) : (
                <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-secondary" 
                style={{ fontSize: "0.7rem", backgroundColor: "#6c757d" }}>
                  0
                </span>  
              )}  
            </Link>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="navbar-toggler btn ms-auto d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navlinks */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Fashions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/men">All Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarSection;