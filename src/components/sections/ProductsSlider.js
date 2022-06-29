import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

const isMobile = () => {
  return window.innerWidth < 768;
};

const ProductsSlider = ({ products, navigate, ProductSliderTitle }) => {
  return (
    <div
      className={
        isMobile() === true
          ? "mx-4 products-slider-container "
          : "container products-slider-container-desktop"
      }
    >
      <h2 className="text-start my-5 centerOnMobile centerTextOnMobile">
        {ProductSliderTitle}{" "}
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={50}
        slidesPerView={isMobile() ? 1 : 4}
        className="swiper-container pb-5 "
      >
        {products.map((product) => (
          <SwiperSlide
            onClick={() => {
              navigate(`/product/detail`, {
                state: { product, products },
              });
            }}
            className="d-flex justify-content-center"
            key={Math.random()}
            style={{ cursor: "pointer" }}
          >
            <div
              className="shadow rounded"
              style={{
                height: "400px",
                width: "100%",
              }}
            >
              {/* image */}
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
              <div className="card-body mt-4 centerTextOnMobile">
                <p className="card-title centerTextOnMobile">{product.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductsSlider;
