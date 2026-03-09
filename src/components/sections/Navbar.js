// Modules
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const GlamiraNav = () => {
  const token = localStorage.getItem("token");

  const navLinkStyle = {
    color: '#5a5a5a',
    margin: '0 20px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  return (
    <Navbar bg="light" expand="lg" style={{padding: '15px 0'}}>
      <Container>
        <Navbar.Brand href="/" style={{fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: '600', letterSpacing: '2px'}}>Glamira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/products/men's clothing"
              className="centerTextOnMobile nav-item"
              style={navLinkStyle}
            >
              Men
            </NavLink>
            <NavLink
              to="/products/women's clothing"
              className="centerTextOnMobile nav-item"
              style={navLinkStyle}
            >
              Women
            </NavLink>
            <NavLink to="/products/jewelery" className="centerTextOnMobile nav-item" style={navLinkStyle}>
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
