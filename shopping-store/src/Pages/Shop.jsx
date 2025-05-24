import { useState, useEffect } from "react";
import axios from 'axios'

const ShopSection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = response.data;
        console.log(data);
        setProducts(data)
      } catch (error) {
        console.error(error);
      }
    }
    FetchData();
  }, []);
  const FilterProducts = products.filter(prodata => {
    if (category === 'all') {
      return true
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

  ]

  return (
  <>
   <div className="container-fluid allsection bg-secondary text-white  py-5 mb-5 ">
        <h1 className="display-4 mt-4 " style={{fontFamily:"sans-serif"}}>All Products</h1>
        <p className="lead" style={{fontFamily:"Arial, sans-serif"}}>Discover our collection of high-quality products</p>
      </div>
    <div className="container-fluid py-5 ">
     
      <div className="row">
        <div className="col-lg-2 col-md-3 border-end">
          <h5 className="py-3">Categories ({LocalCategories.length}) </h5>
          <ul className="list-unstyled d-flex flex-column">
            {LocalCategories.map((cat, index) => (
              <li key={index} className="py-2">
                <button
                  className={`btn btn-link text-decoration-none ${category === cat.value ? 'active' : ''}`}
                  onClick={() => setCategory(cat.value)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-10 col-md-9 py-5">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {FilterProducts.map(product => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img src={product.image} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text" style={{fontSize:"23px"}}>${product.price}</p>
                    <button className="btn btn-hover add-btn mt-auto">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ShopSection;