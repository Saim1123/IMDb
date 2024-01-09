import React, { useState, useEffect } from "react";
import "./MovieList.css";
import Card from "../card/Card";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=04650dd1d369e12be79a5e4fe0c389c1&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((err) => console.error(err));
    };

    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
