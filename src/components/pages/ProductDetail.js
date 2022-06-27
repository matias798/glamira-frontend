import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

// components
import ProductsSlider from "../sections/ProductsSlider";

const ProductDetail = () => {
  
  window.scrollTo(0, 0); //always go to top of page
  const { addItem } = useCart();
  const navigate = useNavigate();

  let product = useLocation().state.product;
  let products = useLocation().state.products;

  const addToCartHandler = (product) => {
    addItem({...product,id:product._id});
    console.log(product,1);
    navigate("/cart");
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid mx-auto d-block"
            style={{
              height: "400px",
              width: "400px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-md-6 text-start">
          <h3 className="ProdDetTitle ">{product.title}</h3>
          <legend> ${product.price}</legend>
          <p className="my-5 ">{product.description}</p>

          <div className="down-content dontShowOnMobile">
            <div className="categories">
              <h6>
                Category:{" "}
                <span  
                className="btn-link"
                onClick={()=>{
                  navigate(`/products/${product.category}`)
                }}>
                    {product.category}
                </span>
              </h6>
            </div>
          </div>

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
      <div className="my-5 mt-4 pt-3">
        <ProductsSlider
          products={products}
          navigate={navigate}
          ProductSliderTitle={"You May Also Like"}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
