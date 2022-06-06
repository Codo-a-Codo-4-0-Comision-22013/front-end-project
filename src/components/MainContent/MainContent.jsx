import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import styles from './MainContent.module.css';
import ItemList from "./ItemList";

const MainContent = () => {
  return (
    <>
      <Carousel fade={true} interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.whats-on-netflix.com/wp-content/uploads/2022/04/most-popular-movies-on-netflix-in-2022.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Mas populares</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.xtrafondos.com/descargar.php?id=3498&resolucion=1280x720"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Nuevo lanzamiento</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://aztechin.com/wp-content/uploads/2022/05/DSB2-1280x720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Recomendado para ti</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-5383370.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h2>Próximamente</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/MZtj4qY.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h2>Continua viendo</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={styles.cards}>
        <ItemList/>
      </div>
    </>
  );
};

export default MainContent;
