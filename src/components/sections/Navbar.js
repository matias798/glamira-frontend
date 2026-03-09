// Modules
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const GlamiraNav = () => {
  const token = localStorage.getItem("token");

  const navLinkStyle = {
    color: '#666',
    margin: '0 25px',
    fontWeight: '500',
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: "'Montserrat', sans-serif"
  };

  return (
    <Navbar bg="light" expand="lg" style={{padding: '20px 0'}}>
      <Container>
        <Navbar.Brand href="/" style={{fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: '500', letterSpacing: '3px'}}>Glamira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/products/rings"
              className="centerTextOnMobile nav-item"
              style={navLinkStyle}
            >
              Rings
            </NavLink>
            <NavLink
              to="/products/necklaces"
              className="centerTextOnMobile nav-item"
              style={navLinkStyle}
            >
              Necklaces
            </NavLink>
            <NavLink 
              to="/products/earrings" 
              className="centerTextOnMobile nav-item" 
              style={navLinkStyle}
            >
              Earrings
            </NavLink>
            <NavLink 
              to="/products/bracelets" 
              className="centerTextOnMobile nav-item" 
              style={navLinkStyle}
            >
              Bracelets
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
