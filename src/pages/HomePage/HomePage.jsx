import { useEffect, useState } from "react";
import Render from "../../Components/Render/Render";
import { getApiMovies } from "../../Components/API/getAPImovies";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getAPI() {
      try {
        setLoading(true);
        setError("");
        const data = await getApiMovies();
        console.log(data);
        setData(data.results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getAPI();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
    <Render data={data} />
  );
};

export default HomePage;
