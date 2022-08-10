import { Link } from "react-router-dom";

const EmptyCart = () => {
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
};
export default EmptyCart;
