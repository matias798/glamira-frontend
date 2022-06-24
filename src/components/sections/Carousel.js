import Carousel from "react-bootstrap/Carousel";
import "./../../assets/css/App.css";
import {Link} from 'react-router-dom'


const HomeCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="CarrouselContainer">
        <Link to="/products/women's clothing" >

        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="First slide"
          className="CarrouselImage"
          />
        <Carousel.Caption>
          <h1 className="CarrouselTitle" >women's clothing</h1>
        </Carousel.Caption>

          </Link>
      </Carousel.Item>
      <Carousel.Item className="CarrouselContainer">
      <Link to="/products/jewelery" >
        <img
          className="CarrouselImage"
          src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="CarrouselTitle" >
            Jewelry
          </h1>
        </Carousel.Caption>
                </Link>
      </Carousel.Item>
      <Carousel.Item className="CarrouselContainer">
      <Link to="/products/men's%20clothing" >

        <img
          src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
          className="CarrouselImage"
        />

        <Carousel.Caption>
          <h1 className="CarrouselTitle" style={{ color: "#F2F4F4" }}>Men's clothing</h1>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>

     
    </Carousel>
  );
};
export default HomeCarousel;
