import { Link, useLocation } from "react-router-dom";
import css from "./Render.module.css";

const Render = ({ data }) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png";
  const location = useLocation();

  console.log("renderloc", location);
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

            {title ? <h3>{title}</h3> : <h3>{name}</h3>}
            <p>Rating: {vote_average.toFixed(2)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Render;
