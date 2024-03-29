// import packages
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // register user
  const registerHandler = (e) => {
    e.preventDefault();

    const user = {
      userName: e.target.userName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      identification: e.target.identification.value,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/register`, user)
      .then((res) => {

        // if user Name is already in use -> error
        if (res.data === "User already exist") {
          return Swal.fire({
            title: "Error",
            text: "User already exist",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
        Swal.fire({
          title: "Success",
          text: "Register Successful",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          navigate("/");
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form
      className="container my-5"
      onSubmit={(e) => {
        registerHandler(e);
      }}
    >
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter an user name"
          name="userName"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formIdentification">
        <Form.Label>identification address</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your identification number"
          name="identification"
          min={23456789}
          max={999999999}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" autoComplete='off' required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
