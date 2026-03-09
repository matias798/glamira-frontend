import { Link } from "react-router-dom";
import mainImage from "./../../assets/images/slider-bg.jpg";

const Banner = () => {
  return (
    <section className="slider_section">
    <div className="slider_bg_box">
       <img src={mainImage} alt="Glamira Jewelry"/>
    </div>
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
       <div className="carousel-inner">
          <div className="carousel-item active">
             <div className="container">
                <div className="row">
                   <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                         <h1>
                            <span>
                            Timeless
                            </span>
                            <br/>
                            Elegance
                         </h1>
                         <p>
                            Discover exquisite jewelry crafted with precision and passion. Each piece tells a story of sophistication, designed to celebrate life's most precious moments.
                         </p>
                         <div>
                            <Link to="/products/rings" className="btn1">
                            Explore Collection
                            </Link>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};
export default Banner;
