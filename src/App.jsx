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
      <Suspense>
        <Header />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense>
              <MoviesPages />
            </Suspense>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <Suspense>
              <MovieDetailsPages />
            </Suspense>
          }
        >
          <Route
            path="/movies/:id/cast"
            element={
              <Suspense>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="/movies/:id/reviews"
            element={
              <Suspense>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
