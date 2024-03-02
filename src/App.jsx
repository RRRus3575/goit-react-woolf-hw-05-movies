import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPages from "./pages/MovieDetailsPages/MovieDetailsPages";
import MoviesPages from "./pages/MoviesPages/MoviesPages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPages />} />
        <Route path="/movies/:id" element={<MovieDetailsPages />} />
      </Routes>
    </>
  );
};

export default App;
