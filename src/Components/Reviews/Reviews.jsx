import { useState } from "react";
import { Link } from "react-router-dom";
import { getApiSingleReviews } from "../API/getAPImovies";

const Reviews = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(data);

  const getSingleAPI = async () => {
    try {
      console.log("getReviews");
      setLoading(true);
      setError("");
      const data = await getApiSingleReviews(id);
      console.log(data.results);
      setData(data.results);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to={`/movies/${id}/reviews`} onClick={getSingleAPI}>
        Rewiews
      </Link>

      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
