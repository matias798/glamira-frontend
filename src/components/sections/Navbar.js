import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid px-5">
        <NavLink className="navbar-brand" to="/">
          Glamira
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Women">
                Women
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Men">
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jewelry">
                jewelry
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link" to="/jewelry">
                Unisex
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink className="dropdown-item shoppingCartNav" to="/cart">
              <FaShoppingCart size={25} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
