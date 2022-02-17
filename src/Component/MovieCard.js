import Filter from "./Filter";
import React, { useState } from "react";
import {movies} from './Data';

const MovieCard = () => {
    const [movie, setMovie] = useState(movies);
    const [title, setTile] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterUrl] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = event => {
        setMovie(movies.push({
            id: movies.length+1,
            title: title,
            description: description,
            posterURL: posterURL,
            rating: rating,
            src: "https://www.youtube.com/embed/fF6Bc75HVBI"
        }))
  
        console.log(movie);
  
        alert('Ajour avec success')
        event.preventDefault();
      };

    return(
        <React.Fragment> 
            <Filter/>
            <form onSubmit={handleSubmit}> 
                <h2>Ajout d'un Film</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titre : </label>
                    <input type="text" onChange={e => setTile(e.target.value)} name="title" required className="form-control" id="title" placeholder="Titre du Film" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description : </label>
                    <textarea name="description" id="description" className="form-control" onChange={e => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="posterURL" className="form-label">URL de l'image : </label>
                    <input type="url" onChange={e => setPosterUrl(e.target.value)} name="posterURL" required className="form-control" id="posterURL" placeholder="URL de l'image du Film" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating : </label>
                    <input type="number" required onChange={e => setRating(e.target.value)} name="rating"  className="form-control" id="rating" placeholder="Rating " />
                </div>
                <button className="btn btn-success w-100" type="submit" >Ajouter</button>
            </form>

        </React.Fragment>
    )
};

export default MovieCard;

