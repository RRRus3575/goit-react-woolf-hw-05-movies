import { useSearchParams } from "react-router-dom";
import { getApiSearch } from "../API/getAPImovies";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";
import Render from "../Render/Render";
import Form from "../form/Form";
import { useEffect, useState } from "react";

const Movies = () => {
  // const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("query");
    async function getAPI() {
      try {
        setLoading(true);
        setError("");
        const data = await getApiSearch(search);

        setData(data.results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    search && getAPI();
  }, [searchParams]);

  return (
    <div className="container">
      <Form />
      {loading && <LoaderExampleText />}
      {error && <h1>{error}</h1>}
      {data.length > 0 && (
        <div>
          <Render data={data} />
        </div>
      )}
    </div>
  );
};

export default Movies;
