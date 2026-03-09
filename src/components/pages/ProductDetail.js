import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

// components
import ProductsSlider from "../sections/ProductsSlider";

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(price);
};

const ProductDetail = () => {
  window.scrollTo(0, 0); //always go to top of page
  const { addItem } = useCart();
  const navigate = useNavigate();

  let product = useLocation().state.product;
  let products = useLocation().state.products;

  const addToCartHandler = (product) => {
    addItem({ ...product, id: product.id });
    navigate("/cart");
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <div style={{
            background: '#F9F9F9',
            padding: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{
                maxHeight: "450px",
                objectFit: "contain"
              }}
            />
          </div>
        </div>
        <div className="col-md-6 text-start ps-md-5">
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.2rem',
            fontWeight: 500,
            marginBottom: '20px',
            color: '#111'
          }}>{product.title}</h1>
          
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#111',
            marginBottom: '25px'
          }}>{formatPrice(product.price)}</p>
          
          <p style={{
            color: '#666',
            lineHeight: '1.8',
            marginBottom: '30px',
            fontSize: '0.95rem'
          }}>{product.description}</p>

          <div className="down-content dontShowOnMobile mb-4">
            <p style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#999'
            }}>
              Category:{" "}
              <span
                style={{
                  color: '#111',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
                onClick={() => {
                  navigate(`/products/${product.category}`);
                }}
              >
                {product.category}
              </span>
            </p>
          </div>

          <div className="d-flex flex-column gap-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCartHandler(product);
              }}
              data-testid="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-5 pt-5">
        {products !== undefined && products.length > 0 ? (
          <ProductsSlider
            products={products.filter(p => p.id !== product.id).slice(0, 8)}
            navigate={navigate}
            ProductSliderTitle={"You May Also Like"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetail;
