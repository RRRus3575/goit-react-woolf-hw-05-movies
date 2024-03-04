import { Link, useLocation } from "react-router-dom";
import css from "./Render.module.css";

const Render = ({ data }) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png";
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {data.map(({ id, title, poster_path, vote_average, name }) => (
        <li key={id}>
          <Link className={css.item} to={`/movies/${id}`} state={location}>
            <img
              src={
                poster_path
                  ? poster_path.length > 0 &&
                    `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={50}
              alt="poster"
            />

            {title ? <p>{title}</p> : <p>{name}</p>}
            <p>{vote_average.toFixed(2)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Render;
