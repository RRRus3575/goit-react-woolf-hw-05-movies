import { Link } from "react-router-dom";

const Cast = ({ id }) => {
  return <Link to={`/movies/${id}/cast`}>Cast</Link>;
};

export default Cast;
