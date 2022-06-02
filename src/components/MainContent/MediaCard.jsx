import React from "react";
import { Card } from "react-bootstrap";
import styles from './MediaCard.module.css'

const MediaCard = ({ item }) => {

  return (
    <>
      <Card
        className={styles.card}
        style={{ width: "18rem", cursor: "pointer" }}
        key={item.id}
      >
        <div className={styles.overflow}>
          <Card.Img variant="top" src={item.image} className={styles.cardImage} />
        </div>
      </Card>
    </>
  );
};

export default MediaCard;
