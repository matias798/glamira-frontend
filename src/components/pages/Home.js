import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import HomeCarousel from "../sections/Carousel";
import StayInTouch from "./../sections/StayInTouch.js";
import ProductsSlider from "../sections/ProductsSlider";
import Images from "../sections/Image";
import AboutUs from "../sections/AboutUs";

const Home = () => {
  window.scrollTo(0, 0); //always go to top of page
  
  let [products, setProducts] = useState([]);

  const getproducts = useCallback(async () => {
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
  }, []); //logResult is memorized now.

  useEffect(() => {
    getproducts();
  }, [getproducts]);

  const navigate = useNavigate();

  return (
    <>
      <HomeCarousel />
      <ProductsSlider products={products} navigate={navigate} ProductSliderTitle='New Products' />
      <Images />
      <ProductsSlider products={products.reverse()} navigate={navigate} ProductSliderTitle='New Products' />
      <AboutUs/>

      <StayInTouch />
    </>
  );
};

export default Home;
