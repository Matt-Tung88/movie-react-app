import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const featured =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0aa6ab6c5d44a75b41ad3e51db14baee&page=1";
const search =
  "https://api.themoviedb.org/3/search/movie?&api_key=0aa6ab6c5d44a75b41ad3e51db14baee&query=";

function App() {

  //movies and search terms will change based on user input -> set an array and empty string
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  //already fetched data on load screen
  useEffect(() => {
    getMovies(featured);
  }, []);

  //created a function that fetches movie data. cleaner code to use
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };


  //function that fetches movie data based on search term. prevents page refresh 
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(search + searchTerm);
      // setSearchTerm("");
    }
  };

  //set user input = search term to then be used to fetch movies
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };


  //sends movie data to Movie component
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>

      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
