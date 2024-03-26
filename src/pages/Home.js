import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js"

import MovieCard from "../components/MovieCard.js"

function Home() {
  const[movies, setMovies] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(resp => resp.json())
    .then(mobies => setMovies(mobies))
  }, [])
  // console.log(movies)
  const movieList = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
  return (
    <>
      <header>
        <h1>Home Page </h1>
        <NavBar />
      </header>
      <main>
        Movies:
        {movieList}
      </main>
    </>
  );
};

export default Home;
