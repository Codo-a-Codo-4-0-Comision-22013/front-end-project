import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { languages } from '../../language';
import ThemeContext from "../../context/ThemeContext";

const Movie = () => {
    const _language = languages['en'];
    const { dark } = React.useContext(ThemeContext);
    const style =   dark ? "bg-dark text-white":"bg-light text-dark";
    return (
            <Card style={{ width: '18rem'}} className={style}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
  );
}

export default Movie;