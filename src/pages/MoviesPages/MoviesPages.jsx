import { Outlet, useSearchParams } from "react-router-dom";
import Movies from "../../Components/Movies/Movies";

const MoviesPages = () => {
  const [params, setParams] = useSearchParams();
  console.log("params", params.get("qwery"));
  // setParams({
  //   qwery: "cat",
  // });

  return (
    <>
      <Movies />
    </>
  );
};

export default MoviesPages;
