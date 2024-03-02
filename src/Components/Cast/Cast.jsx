import { useState } from "react";
import { Link } from "react-router-dom";
import { getApiSingleCast } from "../API/getAPImovies";
import css from "./Cast.module.css";

const Cast = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(data);

  const getSingleAPI = async () => {
    try {
      console.log("getCast");
      setLoading(true);
      setError("");
      const data = await getApiSingleCast(id);

      setData(data.cast);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <Link to={`/movies/${id}/cast`} onClick={getSingleAPI}>
        Cast
      </Link>

      <ul className={css.list}>
        {data.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
