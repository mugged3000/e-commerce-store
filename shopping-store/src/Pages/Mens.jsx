import axios from "axios";
import { useState, useEffect} from "react";
import { useCart } from "../Context/CartContext"; 

const MensCategory = ({ searchItem }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); 
    
  const handleAddToCart = (product) => {
    addToCart(product);
  
  };

  const FilterApiPro = products.filter((apiItems) => {
    return (
      apiItems.category.toLowerCase().includes(searchItem.toLowerCase()) ||
      apiItems.title.toLowerCase().includes(searchItem.toLowerCase())
    );
  });

  useEffect(() => {
    const MensFetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data.products;
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    MensFetch();
  }, []);

  return (
    <>
      <div className="container-fluid allsection bg-secondary text-white  py-5 mb-5 ">
        <h1
          className="display-4 mt-4 "
          style={{ fontFamily: "sans-serif", fontSize: "28px" }}
        >
          Search products
        </h1>
      </div>
      <section className="container-fluid py-5 mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 products-container">
          {FilterApiPro.map((product) => (
            <div key={product.id} className="col animate__animated animate__zoomIn">
              <div className="card h-100 py-5">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="card-img-top img-fluid"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">${product.price}</h5>
                  <p className="card-text" style={{fontFamily:"sans-serif",fontSize:"15px",fontWeight:"bold"}}>{product.title}</p>
                  <p className="card-text"  style={{color:"green",fontSize:"20px",fontWeight:"bold"}}>{product.category}</p>
                  <p
                    className="card-text description"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                       fontFamily:"Arial, sans-serif"
                    }}
                    
                  >
                    {product.description}
                  </p>
                  <button
                    className="btn add-btn btn-hover mt-auto"
                    onClick={() => handleAddToCart({
                      ...product,
                      image: product.image || product.img || (product.images ? product.images[0] : ""),
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
      </section>
    </>
  );
};

export default MensCategory;
