import { useContext  } from "react";
import ProductsItems from "../Products/Products";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useCart } from "../Context/CartContext";
const FeatureProductsItems = () => {
 
  const { addToCart } = useCart(); 
 
  const handleAddToCart = (item) => {
    addToCart(item); 
  };

  return (
    <section className="py-5">
      <div className="container-fluid">
        <h2 className="mb-4">Featured Products</h2>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="m-0">Our most popular items selected just for you</p>
         <Link to="/men">
         <button
                  className="btn bg-dark view-btn"
                  style={{ borderRadius: "10px", padding: "10px 20px", border: "2px solid #fff" ,color:"white"}}
                >
                  View Look Book <IoArrowForward />
                </button>
         </Link>
        </div>
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {ProductsItems.map((item, index) => (
            <div key={index} className={`col animate__animated animate__fadeIn`} style={{ animationDelay: `${index * 0.2}s`}}>
              <div className="card f-card h-100">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover", borderRadius: "10px" }}
                  />
                </Link>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title" style={{ fontSize: "18px" }}>{item.title}</h5>
                    <h5 className="card-color" style={{ fontSize: "13px" }}>{item.color}</h5>
                  </div>
                  <p className="card-text">Price: ${(item.price / 100).toFixed(2)}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button
                    className="btn btn-hover w-100 add-btn"
                    onClick={() => handleAddToCart({
                      ...item,
                      image: item.image || item.img || (item.images ? item.images[0] : ""),
                    })


                    }  
                  >
                    <FaCartPlus /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProductsItems;
