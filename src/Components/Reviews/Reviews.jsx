import { useState } from "react";
import { Link } from "react-router-dom";
import { getApiSingleReviews } from "../API/getAPImovies";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";
import css from "./Reviews.module.css";

const Reviews = ({ data, loading, error }) => {
  return (
    <>
      {loading && <LoaderExampleText />}
      {error && <p>No reviews 😔</p>}
      {data && (
        <ul className={css.list}>
          {data.map((el) => (
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
