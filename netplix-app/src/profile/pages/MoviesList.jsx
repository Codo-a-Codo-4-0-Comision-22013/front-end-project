import React from 'react';
import styles from './MoviesList.module.css';
import Hero from '../components/Hero/Hero';
import MediaGenres from '../components/MediaGenres/MediaGenres';

export class MoviesList extends React.Component {

    render() {
        return (
            <>           
            <div ref={this.moviesContainer} className={`${styles.moviesList} bg-black text-white`}>
            <Hero />
            <MediaGenres /> 
            </div>
            </>
        );
    }
};
