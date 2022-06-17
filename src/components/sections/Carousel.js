import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{ height: "75vh" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 >Summer collection</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "75vh" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="Second slide"
          styles={{ height: "50vh" }}
        />

        <Carousel.Caption>
          <h1 >Winter collection</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "75vh" }}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 >Third slide label</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;
