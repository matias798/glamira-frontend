import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const ProductDetail = () => {
  window.scrollTo(0, 0);
  const { addItem } = useCart();
  const navigate = useNavigate();

  let product = useLocation().state.product;

  const addToCartHandler = (product) => {
    addItem(product);
    navigate("/cart");
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
              width: "80%",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-md-6 text-start">
          <h3 className="ProdDetTitle">{product.title}</h3>
          <legend> ${product.price}</legend>
          <p className="my-5">{product.description}</p>
          {console.log(product)}
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
