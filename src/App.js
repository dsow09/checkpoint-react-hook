import './App.css';
import React from 'react';
import MovieCard from './Component/MovieCard';


//const MOVIE_API = "https://api.themoviedb.org/3/movie/550?api_key=558606ca97dbde30e8e5659c6f31c85a";
//const IMG_API = "https://image.tmdb.org/t/p/w1280";

function App() {
  return (
    <div>
      <MovieCard/>
    </div>
  );
}

export default App;
