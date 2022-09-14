import "./App.css";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./pages/home/home";
import Cards from "./components/card/card";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetails/movie";

function App() {
  return (
   <div className="App">      
    <Router>
    <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
