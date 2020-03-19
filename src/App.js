import React from 'react';
// import { moviesData } from './moviesData';
import MovieItem from './movieItem';
// import {API_URL}


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397").then((Response) => {
      // &sort_by=popularity.asc
      return Response.json()
    }).then((data) => {
      this.setState({
        movies: data.results 
      })
    })
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    });
  }

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  render() {
    console.log("render",this.state, this);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='row'>
              {this.state.movies.map(movie => {
                  return (
                    <div className='col-md-6 mb-4' key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                    </div>
                  );
                })}
              </div>
          </div>
          <div className='col-md-3'>
              <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
