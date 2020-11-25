import React from "react";
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { MdRemoveCircle } from "react-icons/md";

const Card = styled.div`
  background:repeating-linear-gradient(45deg, rgb(27, 27, 27) 0px, rgb(27, 27, 27) 97px,rgb(24, 24, 24) 97px, rgb(24, 24, 24) 194px,rgb(20, 20, 20) 194px, rgb(20, 20, 20) 291px);
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: black;
  width: 500px;
  margin: auto;
  border: 3px solid black;
  border-radius: 6px;
  vertical-align: middle;

`

const MovieTitle = styled.div`
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  margin: 2px;
`
const MovieYear = styled.div`
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 12px;
  margin: 2px;
`

const MovieImage = styled.div`
  border: 3px solid black;
  border-radius: 6px;
  padding: 0px;
  margin: 0px;
`

const MoviePlot = styled.div`
  
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  font-size: 15px;
  margin: 10px;
  text-align: justify;
`

const FavMovie = styled.button`
  size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  font-size: 15px;
  margin: 10px;
  text-align: justify;
  background: rgb(27, 27, 27);
  font-size: 22px;
`

const FavDiv = styled.div`
  color: rgb(34, 46, 66);
  &:hover {
  color: red};
  &:active {
  color: red};
`


function MovieCardDE({ movie, isMovieFavorite }) {

  function addFav() {
    let favorites = JSON.parse(localStorage.getItem("favorites"))
    if (favorites && favorites.length > 0) {
      if (!favorites.find(item => item.Title === movie.Title)) {
        favorites.push(movie)
        localStorage.setItem("favorites", JSON.stringify(favorites))
      }
    } else {
      localStorage.setItem("favorites", JSON.stringify([movie]))
    }
  }

  function removeFav() {
    let favorites = JSON.parse(localStorage.getItem("favorites"))
    localStorage.setItem("favorites", JSON.stringify(favorites.filter(item => item.Title !== movie.Title)))
    window.location.reload(false);
  }

  return (
    <Card>
      <MovieTitle>
        {movie.Title}
      </MovieTitle>
      <MovieYear>
        Year:{movie.Year}
      </MovieYear>
      <MovieImage>
        <img src={movie.Poster} alt="movie poster"></img>
      </MovieImage>
      <MoviePlot>Plot: {movie.Plot}</MoviePlot>

      <FavMovie>
        <FavDiv>
          {!isMovieFavorite && <MdFavorite onClick={() => addFav()} style={{ color: 'red' }}></MdFavorite>}
          {isMovieFavorite && <MdRemoveCircle onClick={() => removeFav()} style={{ color: 'red' }}></MdRemoveCircle>}
        </FavDiv>
      </FavMovie>

    </Card>
  );
}

export default MovieCardDE;