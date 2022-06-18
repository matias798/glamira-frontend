import { useLocation } from "react-router";
import Swal from "sweetalert2";
import { useCart } from "react-use-cart";

const ProductDetail = (props) => {
  const { addItem } = useCart();
  window.scrollTo(0, 0);
  let product = useLocation().state.product;

  const addToCartHandler = (product) => {
    addItem(product);
    Swal.fire({
      title: "Added to cart!",
      text: "You can check your cart in the bottom right corner",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{
              height: "400px",
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-md-6 text-start">
          <h3>{product.title}</h3>
          <h3 style={{ color: "GrayText", fontWeight: "light" }}>
            ${product.price}
          </h3>
          <p className="my-5">{product.description}</p>

          <div className="d-flex justify-content-start mt-5">
            <button
              className="btn btn-primary rounded "
              onClick={() => {
                addToCartHandler(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
