import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, genre, releaseYear, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>Genre: {genre}</p>
      <p>Release Year: {releaseYear}</p>
    </div>
  );
};

export default MovieCard;
