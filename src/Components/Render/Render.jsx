import { Link } from "react-router-dom";
import css from "./Render.module.css";

const Render = ({ data }) => {
  return (
    <ul className={css.moviesList}>
      {data.map(({ id, title, poster_path, vote_average, name }) => (
        <li key={id}>
          <Link className={css.item} to={`/movies/${id}`}>
            <img src={poster_path} />
            {title ? <p>{title}</p> : <p>{name}</p>}
            <p>{vote_average.toFixed(2)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Render;
