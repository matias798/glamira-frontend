import { useCart } from "react-use-cart";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Payment = () => {
  const { cartTotal, items } = useCart();

  const [dni, setDni] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      // create user obj
      const user = {
        email,
        userName: name,
        identification: dni,
        fakeRegister: true,
      };

      // Register user
      let register = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/register`,
        user
      );

      // if user Name is already in use -> error
      if (register.data === "User already exist") {
        return Swal.fire({
          title: "User already exist",
          text: "Please login with your credentials",
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      // Store user token
      localStorage.setItem("token", register.data.token);

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

   // redirect to website
   window.location.href =payment.data;
    } catch (err) {
      console.log(err);

      // Show error message
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="p-5">
      <h1>Payment information</h1>
      {/* form  */}
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        {}
        <fieldset>
          <div className="form-group">
            <label className="form-label mt-4">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-4">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-4">Document ID</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="document id"
              placeholder="Enter your document id"
              onChange={(e) => {
                setDni(e.target.value);
              }}
              required
            />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary rounded">
              Purchase
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default Payment;
