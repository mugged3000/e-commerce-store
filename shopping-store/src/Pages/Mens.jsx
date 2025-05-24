import axios from "axios";
import { useState, useEffect } from "react";

const MensCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const MensFetch = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const data = response.data.products; 
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    MensFetch();
  }, []);

  return (
    <section className="container-fluid py-5 mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 products-container">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100 py-5">
              <img src={product.images[0]} alt={product.title} className="card-img-top img-fluid" style={{height: '180px', objectFit: 'cover'}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">${product.price}</h5>
                <p className="card-text">{product.title}</p>
                <p className="card-text">{product.category}</p>
                <p className="card-text description" style={{overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{product.description}</p>
                <a href="#" className="btn add-btn btn-hover mt-auto">Add to Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MensCategory;