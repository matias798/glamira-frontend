import CartItem from "./../sections/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { isEmpty, items, cartTotal } = useCart();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  const continueHandler = () => {
    navigate("/payment");
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    // Data sent to the server
    let data = {
      total: `${cartTotal}`,
      items,
      UserToken: localStorage.getItem("token"),
    };

    // create purchase order
    const payment = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/payment`,
      data
    );

    // redirect to other website
    window.location.href =payment.data;
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
        {isLoggedIn ? (
          <button
            variant="contained"
            className="btn btn-outline-primary"
            onClick={(e) => {
              paymentHandler(e);
            }}
          >
            Purchase
          </button>
        ) : (
          <button
            variant="contained"
            className="btn btn-outline-primary"
            onClick={() => {
              continueHandler();
            }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart;
