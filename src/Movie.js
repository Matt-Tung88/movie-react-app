import React from "react";

const image = "https://image.tmdb.org/t/p/w1280";

//change color based on vote average
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

//create movie component with various information
//if movie doesn't have an image, use image from unsplash
const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <div className="movie-header"></div>
    <img src={poster_path ? (image + poster_path) : 'https://unsplash.com/photos/atsUqIm3wxo)'} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>

      <div className="movie-hover">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  </div>
);

export default Movie;
