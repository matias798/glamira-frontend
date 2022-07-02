import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/user/orders`,

        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h3>No orders yet</h3>
            <button className="btn btn-outlined-primary">
              <Link to="/">Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        {/* title */}
        <h2 className="mb-5">Your Orders</h2>
        <div className="orders__list">
          {orders.map((order) => (
            <div key={Math.random()} className="card p-4 my-4">
              {/* products  */}
              {order.products.map((product) => (
                <div className="my-4 p-4 round" key={Math.random()}>
                  <div className="cart-item">
                    <div className="row">
                      <div className="col-md-3">
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
                        <h5
                          onClick={() => {
                            navigate(`/product/detail`, {
                              state: { product, order },
                            });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {product.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Header  */}
              <div className="d-flex justify-content-between p-4 flex-wrap">
                <div className="d-flex justify-content-center">
                  <h5> Date: </h5>

                  <p>{moment(order.purchase.createdAt).format("L")}</p>
                </div>

                <div className="d-flex justify-content-center">
                  <h5> Status:</h5>
                  <p>
                    {order.purchase.status === null
                      ? "Pending"
                      : order.purchase.status}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <h5>Payment:</h5>
                  <p>
                    {order.purchase.paymentMethod === null
                      ? "Pending"
                      : order.purchase.paymentMethod}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <h5>Status:</h5>
                  <p>
                    {order.purchase.status === null
                      ? "Pending"
                      : order.purchase.status}
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <h5>Total:</h5>
                  <p>{order.purchase.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Orders;
