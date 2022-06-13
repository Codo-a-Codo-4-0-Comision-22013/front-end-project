import React, {useEffect, useState} from 'react';

import ControlledCarousel from "./carrousel";
import Movie from "./movie";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setMovies(data)
        })
    }

    useEffect(()=> {
        getMovies(); //fetch data from api
     }, []);

    const renderMovies = (movies) => {
        return movies.map(movie => <Movie>{movie}</Movie>)
    }

    return (
        <div>
            <ControlledCarousel />
            {renderMovies(movies)}
        </div>
    );
};

export default Movies;