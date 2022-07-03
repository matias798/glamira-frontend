// import react-icons
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

// import react bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

const GlamiraNav = () => {
  const token = localStorage.getItem("token");

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Glamira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/products/men's clothing"
              className="centerTextOnMobile"
            >
              Men
            </Nav.Link>
            <Nav.Link
              href="/products/women's clothing"
              className="centerTextOnMobile"
            >
              Women
            </Nav.Link>
            <Nav.Link href="/products/jewelery" className="centerTextOnMobile">
              Jewelry
            </Nav.Link>
          </Nav>
          <div className="d-flex  centerTextOnMobile">
            <Nav.Link
              className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile"
              href="/cart"
            >
              {window.screen.width > 768 ? (
                <BsBag className="me-4" size={25} />
              ) : (
                "Cart"
              )}
            </Nav.Link>
            {token !== undefined ? (
              <Nav.Link
                className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile"
                href="/user/profile/orders"
              >
                {window.screen.width > 768 ? (
                  <AiOutlineUser size={25} />
                ) : (
                  "Orders"
                )}
              </Nav.Link>
            ) : (
              <Nav.Link
                className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile"
                href="user/login"
              >
                {window.screen.width > 768 ? (
                  <AiOutlineUser size={25} />
                ) : (
                  "Orders"
                )}
              </Nav.Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlamiraNav;
