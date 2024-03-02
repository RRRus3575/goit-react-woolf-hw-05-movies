import { Link } from "react-router-dom";

const Reviews = ({ id }) => {
  return <Link to={`/movies/${id}/reviews`}>Rewiews</Link>;
};

export default Reviews;
