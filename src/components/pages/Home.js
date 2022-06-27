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
        url: `${process.env.REACT_APP_SERVER_URL}/first-9-products`,
        crossdomain: true,
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
      <ProductsSlider
        products={products}
        navigate={navigate}
        ProductSliderTitle="New Products"
      />
      <Images />
      <ProductsSlider
        products={products.reverse()}
        navigate={navigate}
        ProductSliderTitle="New Products"
      />
      <AboutUs />

      <StayInTouch />
    </>
  );
};

export default Home;
