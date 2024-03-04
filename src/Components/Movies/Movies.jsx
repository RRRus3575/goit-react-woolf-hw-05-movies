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
        console.log(data.results);
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

  // useEffect(() => {
  //   async function getAPI() {
  //     try {
  //       setLoading(true);
  //       setError("");
  //       const data = await getApiSearch(search);
  //       console.log(data);
  //       setData(data.results);
  //     } catch (error) {
  //       console.log(error);
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   search.length > 1 && getAPI();
  // }, [search]);

  // const submitForm = (text) => {
  //   console.log(text);
  //   setSearch(text);
  // };

  return (
    <div className="container">
      <Form
      // submitForm={submitForm}
      />
      {loading ? (
        <LoaderExampleText />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        data.length > 1 && (
          <div>
            <Render data={data} />
          </div>
        )
      )}
    </div>
  );
};

export default Movies;
