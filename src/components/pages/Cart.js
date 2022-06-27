import CartItem from "./../sections/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { isEmpty, items, cartTotal } = useCart();
  const navigate = useNavigate();

  const continueHandler = () => {
    navigate("/payment");
  };

  if (isEmpty)
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Your cart is empty</h3>
            <button className="btn btn-outlined-primary">
              <Link to="/">Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="m-5">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      {/* payment section */}
      <div className="d-flex justify-content-end m-5 align-content-center">
        <h5 className="m-4">Total: {cartTotal}</h5>
        <button
          variant="contained"
          className="btn btn-outline-primary"
          onClick={() => {
            continueHandler();
          }}
        >
          continue 
        </button>
      </div>
    </div>
  );
};
export default Cart;
