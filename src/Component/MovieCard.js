import React from "react";
import MovieList from './MovieList';
import {movies} from './Data';
import Filter from "./Filter";
import { Form } from "./Form";

const MovieCard = () => {
    return(
        <React.Fragment> 
            <Filter/>
            <div className="movie-container">
                {
                    movies.map((movie) => (
                        <MovieList 
                                    title = {movie.title} 
                                    description = {movie.description} 
                                    posterURL = {movie.posterURL}
                                    rating = {movie.rating} />
                        
                    ))
                }

            </div>
            <Form/>
        </React.Fragment>
    )
};

export default MovieCard;

