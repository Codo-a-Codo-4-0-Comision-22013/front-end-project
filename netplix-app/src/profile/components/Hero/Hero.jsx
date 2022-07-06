import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [popularMovie, setpopularMovie] = useState([]);
  const [popularMoviesPosters, setPopularMoviesPosters] = useState([]);
  const [popularMoviesLogo, setPopularMoviesLogo] = useState([]);

  async function requestPopularMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/634649?api_key=f838ee187fe52f9fc1e6048815ba64f7`
    );
    const json = await res.json();

    setpopularMovie(json);
  }

  async function requestPopularMoviesPosters() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/634649/images?api_key=f838ee187fe52f9fc1e6048815ba64f7`
    );
    const json = await res.json();

    setPopularMoviesPosters(json.backdrops[0].file_path);
    setPopularMoviesLogo(json.logos[1].file_path);
  }

  useEffect(() => {
    requestPopularMovies();
    requestPopularMoviesPosters();
  }, []);

  return (
    <div className="Hero">
      <div className="Main-info">
        <div className="Media-description">
          <div className="Name text-6xl">
            { popularMoviesLogo !== null && <img src={`https://image.tmdb.org/t/p/w400${popularMoviesLogo}`} alt={popularMovie.title} loading="lazy" /> || <p>{popularMovie.title}</p>}                       
          </div>
          <p className="Synopsis">{popularMovie.overview}</p>
        </div>
      </div>
      <div className="Hero-background">
        <picture className="Hero-image">
          <img
            src={`https://image.tmdb.org/t/p/original${popularMoviesPosters}`}
            alt={popularMovie.title}
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;