import { useState } from "react";
import { Link } from "react-router-dom";
import { getApiSingleCast } from "../API/getAPImovies";
import css from "./Cast.module.css";
import LoaderExampleText from "../LoaderExampleText/LoaderExampleText";

const Cast = ({ data, loading }) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png";
  return (
    <>
      {loading && <LoaderExampleText />}
      {data && (
        <ul className={css.list}>
          {data.map((el) => (
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
