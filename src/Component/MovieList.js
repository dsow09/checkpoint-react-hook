import React from "react";
import Rate from "./Rate";

function MovieList(props) {
    return (
        <>
            <div className="movie">
                <img src={props.posterURL} alt={props.title}/>
                <div className="movie-info">
                    <h2>{props.title}</h2>
                    <span className="text-info">{props.rating}</span>
                </div>
                <div className="view">
                    <p>{props.description}</p>
                </div>
                <Rate/>
            </div>
        </>
    )
};

export default MovieList;

