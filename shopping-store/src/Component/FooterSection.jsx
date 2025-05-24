import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="py-5 footer-bg">
      <div className="container-fluid">
        <div className="row text-light">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="f-shop">SHOPSTYLE</h5>
            <p>Your one-stop destination for stylish and affordable clothing.</p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6 mb-4 mb-md-0">
                <h5>Shop</h5>
                <ul className="list-unstyled d-flex flex-column">
                  <li><Link className="text-decoration-none text-secondary text-light mb-2" to="/">Men's Clothing</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light mb-2" to="/">Women's Clothing</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light mb-2" to="/">All Products</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light" to="/">Sales</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4 mb-md-0">
                <h5>Help</h5>
                <ul className="list-unstyled d-flex flex-column">
                  <li><Link className="text-decoration-none text-secondary text-light mb-2" to="/">Shipping Information</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light mb-2" to="/">Returns & exchange</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light mb-2" to="/">Contacts Us</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light" to="/">FAQs</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6 mb-4 mb-md-0">
                <h5>Connect</h5>
                <ul className="list-unstyled d-flex flex-column">
                  <li><Link className="text-decoration-none text-secondary mb-2 text-light" to="/"><IoLogoInstagram className="me-2" /> Instagram</Link></li>
                  <li><Link className="text-decoration-none text-secondary mb-2 text-light" to="/" ><FaFacebookF className="me-2" /> Facebook</Link></li>
                  <li><Link className="text-decoration-none text-secondary mb-2 text-light" to="/" ><FaXTwitter className="me-2" /> Twitter</Link></li>
                  <li><Link className="text-decoration-none text-secondary text-light" to="/" > <FaPinterest className="me-2" /> Pinterest</Link></li>
                </ul>
              </div>
              {/* You can add another column here if needed */}
            </div>
          </div>
        </div>
        <div className="mt-5 text-light">
          <p>&copy; Mugged, 2025 SHOPSTYLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;