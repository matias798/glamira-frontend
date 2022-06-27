import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="my-5 p-5 dontShowOnMobile">
      <h3 className="text-start mx-5 ">Categories</h3>

      <div className="d-flex justify-content-center my-5 p-5 mt-2">
        {/* Left Image */}
        <Link to="/products/jewelery" className="mx-4 containerimg">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="product"
            className="img-fluid mx-auto d-block"
            style={{
              height: "350px",
              width: "600px",
              borderRadius: "10px",
            }}
          />
          <div className="Left">
            <h3 className="m-0 p-0" style={{ color: "#ffffff" }}>
              Jewellery
            </h3>
          </div>
        </Link>
        {/* Right Images container */}
        <div>
          {/* Top Image*/}
          <Link to="/products/all" className="containerimg">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80"
              alt="product"
              className="img-fluid mx-auto d-block"
              style={{
                height: "200px",
                width: "520px",
                borderRadius: "10px",
              }}
            />
            <div className="Center">
              <h3 className="m-0 p-0" style={{ color: "#ffffff" }}>
                All
              </h3>
            </div>
          </Link>
          {/* Bottom Container*/}
          <div className="d-flex justify-content-center mt-4 ">
            {/* Left  */}
            <Link to="/products/men's clothing" className="containerimg">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                alt="product"
                className="img-fluid mx-auto d-block "
                style={{
                  height: "125px",
                  width: "250px",
                  borderRadius: "10px",
                }}
              />
              <div className="Left">
                <h3 className="m-0 p-0" style={{ color: "#ffffff" }}>
                  Men
                </h3>
              </div>
            </Link>

            {/* Right */}
            <Link
              to="/products/women's clothing"
              className="containerimg"
              style={{ marginLeft: "20px" }}
            >
              {" "}
              <img
                src="https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                alt="product"
                className="img-fluid mx-auto d-block"
                style={{
                  height: "125px",
                  width: "250px",
                  borderRadius: "10px",
                }}
              />
              <div className="Left" style={{ left: "30%" }}>
                <h3 className="m-0 p-0" style={{ color: "#ffffff" }}>
                  Women
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Image;
