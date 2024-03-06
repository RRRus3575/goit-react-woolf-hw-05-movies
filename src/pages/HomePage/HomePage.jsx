import { useEffect, useState } from "react";
import Render from "../../Components/Render/Render";
import { getApiMovies } from "../../Components/API/getAPImovies";
import LoaderExampleText from "../../Components/LoaderExampleText/LoaderExampleText";

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

  return (
    <div className="container">
      <h1>Trending today</h1>
      {loading && <LoaderExampleText />}
      {error.length > 0 && <h1>{error}</h1>}
      {data.length > 0 && <Render data={data} />}
    </div>
  );
};

export default HomePage;
