import React from "react";
import axios from "axios";
import styled from "styled-components";


const SearchDiv = styled.div`
  margin-top: 60px
`

const SearchTitle = styled.div`
  color: white;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

const SearchInput = styled.input`
  background: grey;
  margin: 10px;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`

const ButtonInput = styled.input`
  background-color: #555555;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  margin: 10px;
  border-radius: 5px;
  &:hover {
  color: rgb(34, 46, 66);}
`

function SearchForm({ setMovie, search, setSearch }) {

  function getMovies(event) {
    event.preventDefault()
    const url = `http://omdbapi.com/?apikey=9656d0de&t=${search}`;
    axios
      .get(url)
      .then((response) => {
        setMovie(response.data);
      });
  }

  return (
    <>
      <SearchDiv>
        <SearchTitle>Search your favorite movie by title</SearchTitle>
        <form onSubmit={(event) => getMovies(event)}>
          <SearchInput type="text" required value={search} onChange={(e) => setSearch(e.target.value)} />
          <ButtonInput type="submit" value="Submit" />
        </form>
      </SearchDiv>
    </>
  );
}

export default SearchForm;