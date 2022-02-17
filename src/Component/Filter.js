import React, {useState} from 'react';
import { movies } from './Data';
import MovieList from './MovieList';

const Filter = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={e => e.preventDefault()}>
                            <input className="form-control me-3" type="search" placeholder="Rechercher..." name="searchTerm" onChange={e => setSearchTerm(e.target.value)} />
                            <button className="btn btn-success" type="submit">Rechercher</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="movie-container">
                {
                    movies.filter(val =>  {
                        if(searchTerm === "") {
                            return val;
                        } 
                        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.rating.toString().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((movie) => (
                        <li key={movie.id}>
                            <MovieList
                                    title = {movie.title} 
                                    description = {movie.description} 
                                    posterURL = {movie.posterURL}
                                    rating = {movie.rating}
                                    id =  {movie.id} />
                        </li>
                    ))
                }

            </div>
        </>
    )
};

export default Filter;