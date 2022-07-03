import { useEffect, useState } from "react";
import "./OrderByGenre.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination]);

const OrderByGenre = (props) => {
  const categoryId = props.categoryId;
  const categoryName = props.categoryName;

  const [movies, setMovies] = useState([]);

  async function requestMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f838ee187fe52f9fc1e6048815ba64f7&with_genres=${categoryId}`
    );
    const json = await res.json();

    setMovies(json.results);
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
      <p className="Genre-Name text-lg">{categoryName}</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        allowTouchMove={false}
        virtual
      >
        {movies.slice(0, 9).map((movie) => (
          <SwiperSlide className="MediaItem">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OrderByGenre;