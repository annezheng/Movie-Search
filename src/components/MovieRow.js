import React, { Component } from 'react';
import './MovieRow.css';

class MovieRow extends Component { 
    viewFilm = () => {
        window.open(
            `https://www.themoviedb.org/movie/${this.props.movie.id}`,
            '_blank' 
          );        
    }
    render() {
        const {id, title, poster_path, overview, release_date, popularity} = this.props.movie;
        return (
        <div>
            <div className="wrapper" key={id}>
                <div className="poster">
                    <img width="100%" src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="movie poster"/>
                </div> 
                <div className="title">{title}</div>
                <div className="overview">{overview}</div>    
                <div className="footer"><span>Released On: {release_date}</span>  | Popularity: {popularity}<button onClick={this.viewFilm}>View</button></div>               
            </div>       
        </div>
        )
    }
}

export default MovieRow;
