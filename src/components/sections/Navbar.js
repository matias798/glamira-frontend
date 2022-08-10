// Modules
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const GlamiraNav = () => {
  const token = localStorage.getItem("token");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Glamira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/products/men's clothing"
              className="centerTextOnMobile nav-item"
            >
              Men
            </NavLink>
            <NavLink
              to="/products/women's clothing"
              className="centerTextOnMobile nav-item"
            >
              Women
            </NavLink>
            <NavLink to="/products/jewelery" className="centerTextOnMobile nav-item">
              Jewelry
            </NavLink>
          </Nav>
          <div className="d-flex  centerTextOnMobile nav-item">
            <NavLink
              className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile"
              to="/cart"
            >
              {window.screen.width > 768 ? (
                <BsBag className="me-4" size={25} />
              ) : (
                "Cart"
              )}
            </NavLink>
            {token && token != null ? (
              <NavLink
                className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile"
                to="/user/profile/orders"
              >
                {window.screen.width > 768 ? (
                  <AiOutlineUser size={25} />
                ) : (
                  "Orders"
                )}
              </NavLink>
            ) : (
              <NavLink
                className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile"
                to="user/login"
              >
                {window.screen.width > 768 ? (
                  <AiOutlineUser size={25} />
                ) : (
                  "Orders"
                )}
              </NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlamiraNav;
