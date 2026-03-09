// Modules
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const GlamiraNav = () => {
  const token = localStorage.getItem("token");

  const navLinkStyle = {
    color: '#666',
    fontWeight: '500',
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontFamily: "'Montserrat', sans-serif",
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px'
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand 
          href="/" 
          style={{
            fontFamily: "'Playfair Display', serif", 
            fontSize: '1.8rem', 
            fontWeight: '500', 
            letterSpacing: '3px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Glamira
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
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
          <div className="d-flex align-items-center">
            <NavLink
              className="shoppingCartNav d-flex align-items-center"
              to="/cart"
              style={{padding: '0 15px', color: '#666', transition: 'color 0.3s ease'}}
            >
              <BsBag size={20} />
            </NavLink>
            {token && token != null ? (
              <NavLink
                className="shoppingCartNav d-flex align-items-center"
                to="/user/profile/orders"
                style={{padding: '0 10px', color: '#666', transition: 'color 0.3s ease'}}
              >
                <AiOutlineUser size={22} />
              </NavLink>
            ) : (
              <NavLink
                className="shoppingCartNav d-flex align-items-center"
                to="user/login"
                style={{padding: '0 10px', color: '#666', transition: 'color 0.3s ease'}}
              >
                <AiOutlineUser size={22} />
              </NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlamiraNav;
