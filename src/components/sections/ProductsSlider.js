import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import ProductCard from "./ProductCard";

const isMobile = () => {
  return window.innerWidth < 768;
};

const ProductsSlider = ({ products, navigate, ProductSliderTitle }) => {
  return (
    <div
      className={
        isMobile() === true
          ? "mx-4 products-slider-container py-5"
          : "container products-slider-container-desktop py-5"
      }
    >
      <h2 className="text-start my-5 centerOnMobile centerTextOnMobile">
        {ProductSliderTitle}
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={30}
        slidesPerView={isMobile() ? 1 : 4}
        className="swiper-container pb-5"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            style={{ cursor: "pointer" }}
          >
            <ProductCard 
              product={product}
              onClick={() => {
                navigate(`/product/detail`, {
                  state: { product, products },
                });
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductsSlider;
