import css from "./Cast.module.css";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";
import { useEffect, useState } from "react";
import { getApiSingleCast } from "../API/getAPImovies";
import { useParams } from "react-router-dom";

const Cast = ({ castOn }) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png";

  const [dataCast, setDataCast] = useState(null);
  const [loadingCast, setLoadingCast] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getAPICast = async () => {
      try {
        setLoadingCast(true);

        const data = await getApiSingleCast(id);

        setDataCast(data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingCast(false);
      }
    };
    castOn && getAPICast();
  }, [castOn]);

  return (
    <>
      {loadingCast && <LoaderExampleText />}
      {castOn && dataCast && (
        <ul className={css.list}>
          {dataCast.map((el) => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : defaultImg
                }
                width="200"
                height="300"
              />
              {el.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
