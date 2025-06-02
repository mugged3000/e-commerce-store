import { Link } from "react-router-dom";

import FeatureProductsItems from "../Component/FeatureProducts";
import ShoppingCategory from "../Component/ShopCategory";
import NewsLetterSection from "../Component/NewsLetter";

const HomeSection = () => {
  return (
    <>
      <section className="py-4 " style={{ backgroundColor: "#000", color: "#fff" }}>
        <div className="container-fluid py-5" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
              <div className="mugged mb-3">
                <h5 className="display-4 mt-5 w-100" style={{ fontWeight: "500" }}>
                  Mugged Collection, 2025👔
                </h5>
              </div>
              <div className="mb-4 w-100">
                <p
                  className="lead"
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "18px", lineHeight: "1.5" }}
                >
                  Discover the latest trends and style upcoming summer season. <br />
                  Our new collection features lightweight fabrics and comfortable designs.
                </p>
              </div>
              <div className="btn-group ">
                <Link to="/shop">
                <button className="btn shop-btn me-2" style={{ borderRadius: "10px", padding: "10px 20px",border:"none" }}>
                  Shop Now
                </button>
                </Link>
               
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src="https://images.unsplash.com/photo-1561052967-61fc91e48d79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="img-fluid"
                style={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature products */}
      <FeatureProductsItems />

      {/* Shop category */}
      <ShoppingCategory />

      {/* Newsletter section */}
      <NewsLetterSection />
    </>
  );
};

export default HomeSection;
