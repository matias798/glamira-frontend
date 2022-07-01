// import packages
import axios from "axios";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    const user = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };

    // api call to get user token
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/login`, user)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Success",
            text: "Login Successful",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            localStorage.setItem("token", res.data.token);
            navigate("/");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error",
          text: "Incorrect user name or password",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <Form
      className="container my-5"
      onSubmit={(e) => {
        loginHandler(e);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          name="userName"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}