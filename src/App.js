import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/MovieRow';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    };
    this.performSearch('marvel');  
  }

  performSearch(searchTerm) { 
    if (searchTerm.length > 0){
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=b5ab1e4342efcddbd6ec3d63cdcfd8f5`;
    
      fetch(url)
        .then(response => response.json())
        .then(json => {
          this.setState({movies : json.results}); 
          console.log(json)
        })
    }else{
      this.setState({movies: []});
    }     
  }

  handleInputChange = (event) => {
    this.performSearch(event.target.value);
  }

  render() {
    return (
      <div>
        <table className="titleBar"> 
          <tbody>
            <tr>
              <td>
                <img width="50" src="search.png" alt="app icon"/>
              </td>
              <td width="8">
              </td>
              <td>
                <h3>MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 20,
          width: '100%',
          padding: 15        
        }} placeholder="Enter search term" 
           onChange={this.handleInputChange}/>
        
        {this.state.movies.map(film => {             
          return <MovieRow key={film.id} movie={film}/>
        })}  
      </div>
    );
  }
}

export default App;
