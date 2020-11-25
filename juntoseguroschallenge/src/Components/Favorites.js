import React from "react";
import MovieCardDE from "./MovieCardDE";

function Favorites() {
	let favorites = JSON.parse(localStorage.getItem("favorites"))
	return (
		<div>
			{favorites && favorites.map(movie => <MovieCardDE isMovieFavorite={true} movie={movie} />)}
		</div>
	);
}

export default Favorites;