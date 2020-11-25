import React, { useEffect, useState } from "react";
import MovieCardDE from "./MovieCardDE";
import SearchForm from "./SearchForm";

function Home() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  return (
    <>
      <div>
        <SearchForm setMovie={setMovie} setSearch={setSearch} search={search}></SearchForm>
      </div>
      <div>
        {movie.Response === "True" && <MovieCardDE isMovieFavorite={false} movie={movie}></MovieCardDE>}
        {movie.Response === "False" && <h2>No movie available with this title.</h2>}
      </div>
    </>
  );
}

export default Home;