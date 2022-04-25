import { Carousel } from "react-bootstrap";

const CarouselHotels = () => {
  return (
    <>
    <Carousel>
  <Carousel.Item interval={3000}>
    <img
    
      className="d-block w-100"
      src="/images/slider_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="/images/slider_2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/slider_3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default CarouselHotels