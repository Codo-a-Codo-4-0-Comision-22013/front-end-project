import React from 'react';
import styles from './Peliculas.module.css';

export class Peliculas extends React.Component {
    constructor(pelicula){
        super(pelicula);
        this.state = {
          title: pelicula.title ?? '',
          image: pelicula.image ?? '',
          description: pelicula.description ?? ''
        };
    }

    render(){
        return (
            <div className={`${styles.pelicula} cursor-pointer inline-block m-2 w-40`}>
              <div className={`${styles.infoWrapper}`}>
                <p className={`text-base p-2`}>{this.state.title}</p>
              </div>
              <img src={this.state.image} alt={this.state.title} />
            </div>
        );
    }
};