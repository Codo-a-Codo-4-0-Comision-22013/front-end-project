import React from 'react';
import { Peliculas } from '../../dashboard/components/Peliculas/Peliculas';
import styles from './MoviesList.module.css';

export class MoviesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: [
                {
                    title: 'Inception',
                    image: 'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg',
                    description: "(2010)"
                },
                {
                    title: 'The Avengers',
                    image: 'https://imdb-api.com/images/original/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2012)"
                },
                {
                    title: 'Avengers: Infinity War',
                    image: 'https://imdb-api.com/images/original/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2018)"
                },
                {
                    title: 'Avengers: Age of Ultron',
                    image: 'https://imdb-api.com/images/original/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2015)"
                },
                {
                    title: 'The Godfather',
                    image: 'https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg',
                    description: "(1972)"
                },
                {
                    title: 'The Godfather: Part II',
                    image: 'https://imdb-api.com/images/original/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg',
                    description: "(1974)"
                },
                {
                    title: 'The Godfather: Part III',
                    image: 'https://imdb-api.com/images/original/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_Ratio0.7273_AL_.jpg',
                    description: "(1990)"
                },
                {
                    title: 'The Batman',
                    image: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2022)"
                },
                {
                    title: 'Batman',
                    image: 'https://imdb-api.com/images/original/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_Ratio0.7273_AL_.jpg',
                    description: "(1989)"
                },
                {
                    title: 'The Dark Knight',
                    image: 'https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2008)"
                },
                {
                    title: 'Batman Begins',
                    image: 'https://imdb-api.com/images/original/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2005)"
                },
                {
                    title: 'The Dark Knight Rises',
                    image: 'https://imdb-api.com/images/original/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_Ratio0.7273_AL_.jpg',
                    description: "(2012)"
                },
                {
                    title: 'Batman v Superman: Dawn of Justice',
                    image: 'https://imdb-api.com/images/original/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_Ratio0.7273_AL_.jpg',
                    description: "(2016)"
                },
                {
                    title: 'Batman & Robin',
                    image: 'https://imdb-api.com/images/original/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_Ratio0.7273_AL_.jpg',
                    description: "(1997)"
                },
            ]
        };

        this.moviesContainer = React.createRef();

    }

    componentDidMount() {

        const moviesContainer = this.moviesContainer.current;

        moviesContainer.addEventListener('wheel', (event) => {
            event.preventDefault();    
            moviesContainer.scrollBy({
                left: event.deltaY < 0 ? -80 : 80,    
            });
        });    
    }

    render() {
        return (
            <div ref={this.moviesContainer} className={`${styles.moviesList} bg-black text-white`}>
                <div className={`${styles.listWrapper}`} >
                    <p className={`text-2xl m-2`}>Peliculas</p>
                    {
                        this.state.peliculas?.map((pelicula, index) => {
                            return (
                                <Peliculas
                                    title={ pelicula.title }
                                    image={ pelicula.image }
                                    description={ pelicula.description }
                                    key={index}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};
