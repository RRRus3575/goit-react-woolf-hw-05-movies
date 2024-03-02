import { getApiSearch } from "../API/getAPImovies";
import Render from "../Render/Render";
import Form from "../form/Form";
import { useEffect, useState } from "react";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getAPI() {
      try {
        setLoading(true);
        setError("");
        const data = await getApiSearch(search);
        console.log(data);
        setData(data.results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    search.length > 1 && getAPI();
  }, [search]);

  const submitForm = (text) => {
    console.log(text);
    setSearch(text);
  };

  return (
    <>
      <Form submitForm={submitForm} />
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        search.length > 1 && (
          <div>
            <Render data={data} />
          </div>
        )
      )}
    </>
  );
};

export default Movies;
