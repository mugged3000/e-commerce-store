import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductsItems from "../Products/Products";
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();

  const product = ProductsItems.find(p => p.id.toString() === id);

  const [selectedImage, setSelectedImage] = useState(
    product?.images ? product.images[0] : product?.image
  );

  if (!product) return <p className="text-center mt-5">Product not found</p>;

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.title} item has been added!!!!`);
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        {/* Big View Img */}
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <img
            src={selectedImage}
            alt={product.title}
            className="img-fluid mb-3"
            style={{ maxHeight: "500px", objectFit: "cover", width: "100%", borderRadius: "10px" }}
          />
          {/* Thumbnail Section,mapping each box */}
          <div className="d-flex flex-wrap gap-2">
            {(product.images || [product.image]).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setSelectedImage(img)}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "5px",
                  border: selectedImage === img ? "2px solid black" : "1px solid #ccc"
                }}
              />
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="col-lg-6 col-md-12">
          <h2 className="mb-3">{product.title}</h2>
          <p className="mb-2"><strong>Color:</strong> {product.color}</p>
          <p className="mb-4"><strong>Price:</strong> ${(product.price / 100).toFixed(2)}</p>

          <button
            className="btn btn-primary w-100"
            onClick={() =>
              handleAddToCart({
                ...product,
                // image: selectedImage || product.image, 
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
