import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Pages/Movie";
import Header from "./Components/Header";
import MovieList from "./Pages/MovieList";
import MovieDetail from "./Pages/MovieDeatil";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movie" element={<Movie />} />
        <Route path="/" element={<h1>Error Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
