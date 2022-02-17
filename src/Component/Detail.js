import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "./Data";

const Detail = () => {
    const {movieId} = useParams();
    return (
        <div>
            <h1 className="text-center text-info">Description du Film {movieId}</h1>
            
            {
                movies.filter((item) => {
                    if(movieId.includes(item.id.toString())) {
                        return item;
                    }
                }).map((movie) => (
                    <div key={movie.id} className="text-center">
                        <h1 className="text-primary">Titre : {movie.title}</h1>
                        <p>{movie.description}</p>
                        <h4>Bande Annonce : </h4>
                        <iframe width="560" height="315" src={movie.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div>
                            <li>
                                <Link to="/">
                                    <button className="btn btn-danger w-25">Back</button>
                                </Link>
                            </li>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
};

export default Detail;