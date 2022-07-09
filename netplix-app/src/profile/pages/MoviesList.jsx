import React from 'react';
import styles from './MoviesList.module.css';
import Hero from '../components/Hero/Hero';
import MediaGenres from '../components/MediaGenres/MediaGenres';
import MenuNavigation from '../components/MenuNavigation/MenuNavigation';
import Footer from '../components/Footer/Footer';

export class MoviesList extends React.Component {

    render() {
        return (
            <>
            <MenuNavigation />
            <div ref={this.moviesContainer} className={`${styles.moviesList} bg-black text-white`}>
            <Hero />
            <MediaGenres />
            <Footer />
            </div>
            </>
        );
    }
};
