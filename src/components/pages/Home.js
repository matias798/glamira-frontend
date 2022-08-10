// modules
import { useNavigate } from "react-router-dom";

// components
import HomeCarousel from "../sections/Carousel";
import StayInTouch from "./../sections/StayInTouch.js";
import ProductsSlider from "../sections/ProductsSlider";
import Images from "../sections/Image";
import AboutUs from "../sections/AboutUs";
import Video from "../sections/Video";
import Spinner from "./../sections/Spinner";

// custom hook
import { useFetchProducts } from "../../helpers/hooks/useFetchProducts";

const Home = () => {
  //always go to top of page
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const url = `${process.env.REACT_APP_SERVER_URL}/first-9-products`;
  const { products, isLoading } = useFetchProducts(url);
// reverse array of objects to show newest products first
  return (
    <>
      {products?.length > 0 && isLoading === false ? (
        <>
          <HomeCarousel />
          <ProductsSlider
            products={products}
            navigate={navigate}
            ProductSliderTitle="New Products"
          />
          <Images />
          <Video />
       
          <AboutUs />
          <StayInTouch />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
