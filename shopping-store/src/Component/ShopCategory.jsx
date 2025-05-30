import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
// import  useLocalStorage from '../LocalStorage/LocalData'
const ShopCategory = [
    {
      id: 1,
      collection: "Men's Collection",
      title: "Shop Now",
      image: "/images/brownja.jpg"
    },
    {
      id: 2,
      collection: "Womens's Collection",
      title: "Shop Now",
      image: "/images/womenscoll.jpg"
    },
    {
      id: 3,
      collection: "Accessories",
      title: "Shop Now",
      image: "/images/accss1.jpg"
    },
  ];
  
  const ShoppingCategory = () => {
    return (
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <h2 className="mb-4">Shop by Category</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {ShopCategory.map((CategoryItem, index) => (
              <div key={index} className="col">
                <div className="card h-100 overflow-hidden rounded-4 card-flash" >
                    <Link to="/shop"  style={{textDecoration:"none",color:"brown"}}>
                  <img src={CategoryItem.image}
                   className="card-img-top" alt="..." 
                   style={{ height: "250px", objectFit: "cover" }}
                    />
                 
                  <div className="card-body">
                    <h3 className="collectioni" style={{fontSize:"19px"}}>{CategoryItem.collection}</h3>
                    <h5 className="card-title" style={{fontSize:"16px"}}>{CategoryItem.title} <IoArrowForward /></h5>
                  </div>
                  </Link>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ShoppingCategory;