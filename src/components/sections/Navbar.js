import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5">
        <NavLink className="navbar-brand" to="/">
          Glamira
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products/women's clothing">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products/men's clothing">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products/jewelery">
                jewelry
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink className="dropdown-item shoppingCartNav" to="/cart">
              <BsBag size={25} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
