import { useState, useEffect } from "react";
import axios from 'axios';
import { useCart } from "../Context/CartContext";

const ShopSection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const { addToCart } = useCart();

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const FilterProducts = products.filter(prodata => {
    if (category === 'all') {
      return true;
    }
    else {
      return prodata.category === category;
    }
  });

  const LocalCategories = [
    { name: 'All Products', value: 'all' },
    { name: 'Mens', value: "men's clothing" },
    { name: "Jewelery", value: "jewelery" },
    { name: "Electronics", value: "electronics" },
    { name: "Womens", value: "women's clothing" },
  ];

  return (
    <>
      <div>
        <div className="container-fluid allsection bg-secondary text-white py-5">
          <h1 className="display-4 mt-4" style={{ fontFamily: "sans-serif", fontSize: "30px" }}>All Products</h1>
          <p className="lead" style={{ fontFamily: "Arial, sans-serif" }}>Discover our collection of high-quality products</p>
        </div>

        <div className="container-fluid shop-bg">
          <div className="row">
            {/* Desktop Sidebar */}
            <div className="col-lg-2 col-md-3 col-sm-12 border-end d-none d-md-block ">
              <h5 className="py-3">Categories ({LocalCategories.length}) </h5>
              <ul className="list-unstyled d-flex flex-lg-column flex-md-column flex-sm-row justify-content-sm-around">
                {LocalCategories.map((cat, index) => (
                  <li key={index} className="py-2">
                    <button
                      style={{ color: "black", fontWeight: "bold",fontSize:"20px" }}
                      className={`btn btn-link text-decoration-none ${category === cat.value ? 'active' : ''}`}
                      onClick={() => setCategory(cat.value)}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-10 col-md-9 col-sm-12 py-5">
              {/* Mobile Dropdown */}
              <div className="d-block d-md-none mb-4">
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    fontWeight: "bold",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                >
                  {LocalCategories.map((cat, index) => (
                    <option key={index} value={cat.value}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <h2 className="mb-4">Products</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {FilterProducts.map(product => (
                  <div key={product.id} className="col mb-4 animate__animated animate__fadeIn">
                    <div className="card h-100 card-flash f-card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="card-img-top img-fluid"
                        style={{ height: '200px', objectFit: 'contain' }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title" style={{ fontSize: "14px" }}>{product.title}</h5>
                        <p className="card-text" style={{ fontSize: "18px" }}>${product.price}</p>
                        <button
                          className="btn add-btn btn-hover mt-auto"
                          onClick={() =>
                            handleAddToCart({
                              ...product,
                              image: product.image || (product.images ? product.images[0] : ""),
                            })
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
