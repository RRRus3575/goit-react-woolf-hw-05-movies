import { getApiSingleMovie } from "../../Components/API/getAPImovies";
import css from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSingleAPI = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getApiSingleMovie(id);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    id && getSingleAPI();
  }, [id]);

  return loading ? (
    <LoaderExampleText />
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    movie && (
      <div className={css.container}>
        <img src={movie.poster_path} />
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        <ul className={css.list}>
          <li>
            <Cast id={id} />
          </li>

          <li>
            <Reviews id={id} />
          </li>
        </ul>
      </div>
    )
  );
};

export default MovieDetails;
