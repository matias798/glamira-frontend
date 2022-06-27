import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useCart } from "react-use-cart";

const CartItem = ({ product }) => {
  const { removeItem, updateItemQuantity } = useCart();

  const removeHandler = (product) => {
    try {
      removeItem(product.id);
      Swal.fire({
        title: "Removed from cart!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card my-4 p-4 round">
      <div className="cart-item">
        <div className="row">
          <div className="col-md-3">
          <button
              className="btn btn-sm round-circle m-5 dontShowOnMobile"
              onClick={() => {
                removeHandler(product);
              }}
            >
              <AiOutlineDelete  size={15}/>
            </button>
            
            <span className="centerOnMobile">

            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "10px",
              }}
              />
              </span>
          </div>
          <div className="col-md-6 pt-2 centerTextOnMobile">
            <h5>{product.title}</h5>
            <p>${product.price}</p>
          </div>
          <div className="col-md-3 pt-2 centerOnMobile">
            <button
              onClick={() =>
                updateItemQuantity(product.id, product.quantity - 1)
              }
              className="btn btn-outline-secondary btn-sm mx-2"
            >
              -
            </button>
            {product.quantity}
            <button
              onClick={() =>
                updateItemQuantity(product.id, product.quantity + 1)
              }
              className="btn btn-outline-secondary btn-sm mx-2"

            >
              +
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
