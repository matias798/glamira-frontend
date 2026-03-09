// modules
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// components
import Banner from "../sections/Banner";
import StayInTouch from "./../sections/StayInTouch.js";
import ProductsSlider from "../sections/ProductsSlider";
import Images from "../sections/Image";
import AboutUs from "../sections/AboutUs";
import Video from "../sections/Video";

// Local jewelry data
import { jewelryProducts } from "../../data/jewelryProducts";

const Home = () => {
  //always go to top of page
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use local jewelry data instead of API
    setProducts(jewelryProducts);
    setIsLoading(false);
  }, []);
// reverse array of objects to show newest products first
  return (
    <>
      {products?.length > 0 && isLoading === false ? (
        <>
          <Banner />
          <ProductsSlider
            products={products}
            navigate={navigate}
            ProductSliderTitle="New Arrivals"
          />
          <Images />
          <Video />
       
          <AboutUs />
          <StayInTouch />
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '60vh'}}>
          <div className="text-center">
            <div className="spinner-border" role="status" style={{color: '#D4AF37'}}>
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
