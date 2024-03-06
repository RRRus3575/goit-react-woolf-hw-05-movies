import "./App.css";
// import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
// import MovieDetailsPages from "./pages/MovieDetailsPages/MovieDetailsPages";
// import MoviesPages from "./pages/MoviesPages/MoviesPages";
// import Cast from "./Components/Cast/Cast";
// import Reviews from "./Components/Reviews/Reviews";
import { Suspense, lazy } from "react";
const Header = lazy(() => import("./Components/Header/Header"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPages = lazy(() =>
  import("./pages/MovieDetailsPages/MovieDetailsPages")
);
const MoviesPages = lazy(() => import("./pages/MoviesPages/MoviesPages"));
const Cast = lazy(() => import("./Components/Cast/Cast"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="/movies/:id/" element={<MovieDetailsPages />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
