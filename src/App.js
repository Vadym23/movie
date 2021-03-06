import React from 'react';
// import { moviesData } from './moviesData';
import MovieItem from './movieItem';
import {API_URL, API_KEY_3} from './utils/api'
import MovieTabs from './components/MovieTabs'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'revenue.desc'
    };
  }

  componentDidMount() {
    this.getMovies();
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}discover/movie?api_key=${API_KEY_3}&sort_by=${
        this.state.sort_by
      }`
    )
      .then(Response => {
        return Response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results 
          });
      });
  }

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }

  render() {

    return (
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-9'>

            {/* Tabs */}
            <div className='row mb-4'>
              <div className="col-12">
                <MovieTabs 
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>

            {/* Movies List */}
            <div className="row">
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
