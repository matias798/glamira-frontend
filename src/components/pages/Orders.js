import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
// import { useNavigate } from "react-router-dom";

const Orders = () => {
  //   const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user/orders`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (orders.length === 0) {
    return <p>No orders yet</p>;
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
                        <h5>{product.title}</h5>
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
                    {order.purchase.PaymentMethod === null
                      ? "Pending"
                      : order.purchase.PaymentMethod}
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
