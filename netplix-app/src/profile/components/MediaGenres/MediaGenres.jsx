import { useEffect, useState } from "react";
import "./MediaGenres.css";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import OrderByGenre from "../OrderByGenre/OrderByGenre";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

const MediaGenres = () => {
  const [genres, setGenres] = useState([]);

  async function requestGenres() {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=f838ee187fe52f9fc1e6048815ba64f7&language=en-US`
    );
    const json = await res.json();

    setGenres(json.genres);
  }

  useEffect(() => {
    requestGenres();
  }, []);

  return (
    <div className="MediaSlider">
      {genres.slice(0, 5).map((genre) => (
        <OrderByGenre categoryId={genre.id} categoryName={genre.name} />
      ))}
    </div>
  );
};

export default MediaGenres;