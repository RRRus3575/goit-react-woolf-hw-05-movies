import {
  getApiSingleCast,
  getApiSingleMovie,
  getApiSingleReviews,
} from "../../Components/API/getAPImovies";
import css from "./MovieDetails.module.css";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png";
  const location = useLocation();
  const [reviews, setReviews] = useState(false);
  const [cast, setCast] = useState(false);

  const getCast = () => {
    setCast((prev) => !prev);
  };
  const getReviews = () => {
    setReviews((prev) => !prev);
  };
  console.log("location", location);

  useEffect(() => {
    const getSingleAPI = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getApiSingleMovie(id);

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
    navigate(location.state || "/");
  };

  return (
    <>
      {loading && <LoaderExampleText />}

      {error.length > 0 && <h1>{error}</h1>}

      {movie && (
        <div className={css.container}>
          <button onClick={handleBack} className={css.button}>
            Back
          </button>
          <div className={css.wrap}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <div>
              <h1>{movie.title}</h1>
              <p>
                <span>Rating: </span>
                {movie.vote_average ? (
                  movie.vote_average.toFixed(2)
                ) : (
                  <span>no rating</span>
                )}
              </p>
              <p>
                <span>Contries: </span>
                {movie.production_countries ? (
                  movie.production_countries.map((el) => el.name)
                ) : (
                  <span>no information</span>
                )}
              </p>
              <p>
                <span>Studio: </span>{" "}
                {movie.production_companies ? (
                  movie.production_companies.map((el) => el.name)
                ) : (
                  <span>no information</span>
                )}
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
              <Link
                to={`/movies/${id}/cast`}
                onClick={getCast}
                className={css.link}
              >
                Cast
              </Link>
              <Cast castOn={cast} id={id} />
            </li>

            <li>
              <Link
                to={`/movies/${id}/reviews`}
                onClick={getReviews}
                className={css.link}
              >
                Rewiews
              </Link>
              <Reviews reviewSwitch={reviews} />
            </li>
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
