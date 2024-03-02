import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPages from "./pages/MovieDetailsPages/MovieDetailsPages";
import MoviesPages from "./pages/MoviesPages/MoviesPages";
import Cast from "./Components/Cast/Cast";
import Reviews from "./Components/Reviews/Reviews";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPages />} />
        <Route path="/movies/:id" element={<MovieDetailsPages />}>
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
