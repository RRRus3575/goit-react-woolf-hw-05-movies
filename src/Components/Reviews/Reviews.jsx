import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiSingleReviews } from "../API/getAPImovies";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";
import css from "./Reviews.module.css";

const Reviews = ({ reviewSwitch }) => {
  const [dataReviews, setDataReviews] = useState([]);
  const [errorDetails, setErrorDetails] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getApiReviews = async () => {
      try {
        setLoadingReviews(true);
        setErrorDetails(false);
        const data = await getApiSingleReviews(id);
        if (data.results.length === 0) {
          setErrorDetails("error");
        }

        setDataReviews(data.results);
      } catch (error) {
        console.log(error);
        setErrorDetails(error.message);
      } finally {
        setLoadingReviews(false);
      }
    };
    reviewSwitch && getApiReviews();
  }, [reviewSwitch]);

  return (
    <>
      {loadingReviews && <LoaderExampleText />}
      {errorDetails && <p>No reviews 😔</p>}
      {reviewSwitch && dataReviews && (
        <ul className={css.list}>
          {dataReviews.map((el) => (
            <li key={el.id} className={css.item}>
              <p className={css.author}>{el.author}</p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
