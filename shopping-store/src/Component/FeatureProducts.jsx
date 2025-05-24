import ProductsItems from "../Products/Products";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const FeatureProductsItems = ({searchItem,addCart,setAddCart}) => {
   const FilterProduct = ProductsItems.filter((list)=>
   list.title.toLowerCase().includes(searchItem.toLowerCase())
      )
      const handleAddToCart = ()=>{
        setAddCart(addCart+1);
      }

  return (
    <section className="py-5">
      <div className="container-fluid">
        <h2 className=" mb-4">Featured Products</h2>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="m-0">Our most popular items selected just for you</p>
          <Link className="btn btn-outline-dark" to="/shop">View All <IoArrowForward /></Link>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {FilterProduct.map((item,index) => (
            <div key={index} className="col">
                
              <div className="card h-100">
                <Link to="/">
              <img src={item.image} alt={item.name} className="card-img-top" style={{ height: "300px", objectFit: "cover", borderRadius: "10px" }} />
              </Link>
                <div className="card-body d-flex justify-content-between">
                 <div>
                 <h5 className="card-title" style={{fontSize:"18px"}}>{item.title}</h5>
                 <h5 className="card-color" style={{fontSize:"13px"}}>{item.color}</h5>
                 </div>
                  <p className="card-text">Price: ${(item.price /100).toFixed(2)}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button className="btn btn-hover  w-100 add-btn"
                  value={addCart}
                  onClick={()=>handleAddToCart()}
                  >{<FaCartPlus/>} Add to Cart</button>
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