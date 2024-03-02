import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = ({ data }) => {
  return (
    <ul className={css.moviesList}>
      {data.map(({ id, title, poster_path, vote_average }) => (
        <li key={id}>
          <Link className={css.item} to={`/movies/${id}`}>
            <img src={poster_path} />
            <p>{title}</p>
            <p>{vote_average.toFixed(2)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
