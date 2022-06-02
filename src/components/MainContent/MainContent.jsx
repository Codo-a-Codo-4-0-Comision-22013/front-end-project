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
            src="https://i.blogs.es/7e25ff/cartel-a-descubierto-netflix/1366_2000.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Mas popular</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://es.web.img3.acsta.net/r_1280_720/newsv7/21/05/27/21/15/4623697.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Nuevos lanzamientos</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://indiehoy.com/wp-content/uploads/2019/04/arenas-movedizas.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>Próximamente</h2>
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
