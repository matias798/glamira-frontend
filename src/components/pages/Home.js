import HomeCarousel from "../sections/Carousel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect,useCallback } from "react";
const Home = () => {
  // Get camisas from API
  let [products, setProducts] = useState([]);

  const getproducts = useCallback(async() => {
    try {
      // axios with cross origin enabled
      const res = await axios({
        method: "get",
        url: "https://localhost:3001/first-9-products",
        crossdomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Credentials": false,
        },
      });

      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []); //logResult is memoized now.
  useEffect(()=> {
    getproducts();
  },[getproducts]);

  const navigate = useNavigate();
  
  return (
    <>
      <HomeCarousel />

      {/* map all camisas */}
      <div className="container mt-5">
        {/* title */}
        <h2 className="text-center m-4">Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div
              onClick={() => {
                navigate(`/product/${product.id}`, { state: { product } });
              }}
              className="col-md-4"
              key={product.id}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card m-5 shadow-sm round p-5"
                style={{
                  height: "400px",
                  width: "100%",
                }}
              >
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  style={{ height: "200px" }}
                />
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="card-title">{product.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
