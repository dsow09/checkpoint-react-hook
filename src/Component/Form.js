import React from "react";

import {movies} from './Data';
export class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          description: '',
          posterURL: '',
          rating: ''
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
     alert('Ajout avec success : \n' 
            + this.state.title +'\n'+
            this.state.description + '\n'+
            this.state.posterURL + '\n'+
            this.state.rating);

    movies.push(
        {
            title: this.state.title,
            description: this.state.description,
            posterURL: this.state.posterURL,
            rating: this.state.rating
        }
    );
    
    //event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} action="">
            <h2>Ajout d'un Film</h2>
            <div className="mb-3">
                <label for="title" className="form-label">Titre : </label>
                <input type="text" onChange={this.handleChange} name="title" className="form-control" id="title" placeholder="Titre du Film" />
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description : </label>
                <textarea name="description" id="description" className="form-control" onChange={this.handleChange}></textarea>
            </div>
            <div className="mb-3">
                <label for="posterURL" className="form-label">URL de l'image : </label>
                <input type="url" onChange={this.handleChange} name="posterURL" className="form-control" id="posterURL" placeholder="URL de l'image du Film" />
            </div>
            <div className="mb-3">
                <label for="rating" className="form-label">Rating : </label>
                <input type="number" onChange={this.handleChange} name="rating"  className="form-control" id="rating" placeholder="Rating " />
            </div>
            <button className="btn btn-success w-100" type="submit" >Ajouter</button>
        </form>
      );
    }
  }