// modules
import { useNavigate } from "react-router-dom";

// components
import Banner from "../sections/Banner";
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
  // Focus on jewelry products for this jewelry website
  const url = `${process.env.REACT_APP_SERVER_URL}/products/category/jewelery`;
  const { products, isLoading } = useFetchProducts(url);
// reverse array of objects to show newest products first
  return (
    <>
      {products?.length > 0 && isLoading === false ? (
        <>
          <Banner />
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
