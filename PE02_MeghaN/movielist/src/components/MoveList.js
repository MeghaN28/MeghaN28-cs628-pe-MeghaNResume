import React, { useState } from 'react';
import './MovieList.css'; // Importing CSS file

const MovieList = () => {
  const movies = [
    { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`Movie title: ${title}`);
  };

  return (
    <div className="movie-list-container">
      <div className="filter-container">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>Released: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
