import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar.js";

function Movie() {
  const { id } = useParams(); // Extract movie ID from URL parameter
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the extracted ID
    fetch(`http://localhost:4000/movies/${id}`)
      .then(resp => resp.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  // Map over the genres array and wrap each genre in a <span>
  const genreElements = movie.genres.map((genre, index) => (
    <span key={index}>{genre}</span>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        {/* Render the genre elements */}
        <div>Genres: {genreElements}</div>
      </main>
    </>
  );
}

export default Movie;
