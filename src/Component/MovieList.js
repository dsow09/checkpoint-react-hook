import React from "react";
import Rate from "./Rate";
import {Link} from "react-router-dom";

function MovieList(props) {
    return (
        <>
            <div className="movie" key={props.id}>
                <img src={props.posterURL} alt={props.title}/>
                
                <div className="movie-info">
                    <h2>{props.title}</h2>
                    <span className="text-info">{props.rating}</span>
                </div>
                <div className="view">
                
                    <p>{props.description}</p>
                    <p> <Link to={`/detail/${props.id}`}><button className="btn btn-success w-100">Voir Plus</button></Link> </p>
                </div>
                <Rate/>
               
            </div>
        </>
    )
};

MovieList.defaultProps = {
    id : null,
    title: '',
    description: '',
    rating: null,
    posterURL: ''
};

export default MovieList;



