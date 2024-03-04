import { getApiSingleMovie } from "../../Components/API/getAPImovies";
import css from "./MovieDetails.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png";
  const location = useLocation();

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

  const navigate = useNavigate();

  const handleBack = () => {
    const isSure = window.confirm("Do you want go back?");
    isSure && navigate(location.state);
  };

  return loading ? (
    <LoaderExampleText />
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    movie && (
      <div className={css.container}>
        <button onClick={handleBack} className={css.button}>
          Back
        </button>
        <div className={css.wrap}>
          <img
            src={
              movie.poster_path
                ? movie.poster_path.length > 0 &&
                  `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h1>{movie.title}</h1>
            <p>
              <span>Rating: </span> {movie.vote_average.toFixed(2)}
            </p>
            <p>
              <span>Contries: </span>
              {movie.production_countries.map((el) => el.name)}
            </p>
            <p>
              <span>Studio: </span>{" "}
              {movie.production_companies.map((el) => el.name)}
            </p>
            <p>
              <span>Release date: </span>
              {movie.release_date}
            </p>
            <p className={css.wrapper}>
              <span>Descriprion: </span>
              {movie.overview}
            </p>
          </div>
        </div>

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
