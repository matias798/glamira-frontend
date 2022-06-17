import CartItem from "./../sections/CartItem";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Cart = () => {
  const { isEmpty, items, cartTotal } = useCart();

  const BuyHandler = () => {
    try {
      axios
        .post("https://localhost:3001/payment", {
          total: `${cartTotal}`,
        })
        .then((res) => {
          window.location.href = res.data.data.url;
        });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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
    <div className="mt-5">
      <h1>Shopping Cart</h1>
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
            BuyHandler();
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};
export default Cart;
