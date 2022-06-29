import { BsBag } from "react-icons/bs";
import { Navbar, Nav, Container } from "react-bootstrap";

const GlamiraNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Glamira</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/products/men's clothing" className='centerTextOnMobile' >Men</Nav.Link>
            <Nav.Link href="/products/women's clothing" className='centerTextOnMobile'>Women</Nav.Link>
            <Nav.Link href="/products/jewelery" className='centerTextOnMobile'>Jewelry</Nav.Link>
          </Nav>
          <div className="d-flex  centerTextOnMobile">
          <Nav.Link className="dropdown-item shoppingCartNav centerOnMobile centerTextOnMobile" href="/products/jewelery">
        {window.screen.width > 768 ?  <BsBag size={25} /> : 'Cart'}
      </Nav.Link>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlamiraNav;
