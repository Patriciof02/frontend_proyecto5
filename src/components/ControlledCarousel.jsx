import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
// import ExampleCarouselImage from '../assets/PadelImage.jpg';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        < img
    className="d-block w-100 "
    src="/PadelImage1.jpg"  // Usar la imagen importada
    alt="First slide"
   text="First slide" />
        <Carousel.Caption>
          <h3>El mejor equipamento</h3>
          <p>Todo lo que buscas en un solo lugar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        < img
    className="d-block w-100 "
    src="/PadelImage2.jpg" // Usar la imagen importada
    alt="First slide"
   text="Second slide" />
        <Carousel.Caption>
          <h3>las mejores canchas</h3>
          <p>Informacion sobre los mejores lugares para jugar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        < img
    className="d-block w-100 h-fluid"
    src="/PadelImage3.jpg"  // Usar la imagen importada
    alt="First slide"
    text="Third slide" />
        <Carousel.Caption>
          <h3>Los mejores accesorios</h3>
          <p>
            Todo lo que necesitas para jugar
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// export default ControlledCarousel;