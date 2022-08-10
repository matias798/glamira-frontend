// Modules
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

// Components
import Spinner from "./../sections/Spinner";

// Custom Hooks
import { useFetchProducts } from "../../helpers/hooks/useFetchProducts";

const ProductCategory = () => {
  window.scrollTo(0, 0); //always go to top of page
  const navigate = useNavigate();

  const [filteredProducts, setfilteredProducts] = useState([]);
  const { products, isLoading } = useFetchProducts(
    `${process.env.REACT_APP_SERVER_URL}${window.location.pathname}`
  );

  useEffect(() => {
    setfilteredProducts(products);
  }, [products]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // search for products ARRAY
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // if there is a product with the searched title
    if (filteredProducts) {
      setfilteredProducts(filteredProducts);
    }
    return null;
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container my-5 ">
      {/* search input */}
      <div className="d-flex justify-content-end">
        <div>
          <div className="input-group  ">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end search input */}

      {filteredProducts.length > 0 ? (
        <div className="d-flex justify-content-start flex-wrap mt-5">
          {filteredProducts.map((product) => (
            <div
              className="card rounded ProdCategoryCard  m-2"
              style={{
                height: "400px",
                width: "30%",
                cursor: "pointer",
              }}
              key={product.id}
              onClick={() => {
                navigate(`/product/detail`, {
                  state: { product, products },
                });
              }}
            >
              <div
                style={{ height: "200px", width: "200px" }}
                className="centerImage my-3"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>

              <div className="card-body p-5 ">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-title">{product.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-start flex-wrap mt-5">
            <h5>Ops.. it seems that there is no product with this title</h5>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Go to Home
          </button>
        </>
      )}
    </div>
  );
};
export default ProductCategory;
