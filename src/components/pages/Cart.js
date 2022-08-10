// Modules
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

// Components
import CartItem from "./../sections/CartItem";
import EmptyCart from "./../sections/EmptyCart";

const Cart = () => {
  const navigate = useNavigate();
  const { isEmpty, items, cartTotal } = useCart();
  const isLoggedIn = localStorage.getItem("token");

  const continueHandler = () => {
    // tell the user that they need to login to checkout
    Swal.fire({
      icon: "info",
      text: "Please login to checkout",
      confirmButtonText: "OK",
      confirmButtonColor: "#1a1a1a",
    }).then((el) => {
      if (el.isConfirmed === true) {
        navigate("/user/login");
      }
    });
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

    localStorage.removeItem("react-use-cart");

    // redirect to other website
    window.location.href = payment.data;
  };

  // if the cart is empty, display the empty cart component
  if (isEmpty) return <EmptyCart />;

  // if the cart is not empty, display the cart items
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
