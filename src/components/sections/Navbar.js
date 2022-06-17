import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="/">
          Glamira
        </a>
       

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Separated link
                </a>
              </div>
            </li>
          </ul>
          <div className="d-flex">
            <a className="dropdown-item shoppingCartNav" href="/cart" >
              <FaShoppingCart size={25} /> 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
