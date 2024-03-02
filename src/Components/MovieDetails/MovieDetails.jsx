import { getApiSingleMovie } from "../../Components/API/getAPImovies";

import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    movie && (
      <div>
        <img src={movie.poster_path} />
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
      </div>
    )
  );
};

export default MovieDetails;
