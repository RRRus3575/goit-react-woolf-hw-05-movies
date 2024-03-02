import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cast from "../../Components/Cast/Cast";
import Reviews from "../../Components/Reviews/Reviews";

import MovieDetails from "../../Components/MovieDetails/MovieDetails";

const MovieDetailsPages = () => {
  return (
    <>
      <MovieDetails />
      <Outlet />
      <ul>
        <li>
          <Cast />
        </li>
        <li>
          <Reviews />
        </li>
      </ul>
    </>
  );
};

export default MovieDetailsPages;
