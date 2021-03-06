import React, { Component } from 'react';
import MovieRow from './MovieRow';
import './Movies.css'
import $ from 'jquery'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      rows: null
    }
  }
  
  componentDidMount() {
    this.performSearch()
  }

  performSearch = (searchTerm) => {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=47e60775dec848a0846f06525377d027&genre_ids=27&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched date successfully")
        const results = searchResults.results

        var movieRows = []
        results.forEach((movie) => {
          movie.posterSrc = "https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={ movie } />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchTermHandler (event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
      <input className="searchbar" 
        placeholder="Search for blood"
        onChange={ this.searchTermHandler.bind(this) }
        type="text"
        >
        </input>
          { this.state.rows }
      </div>
    );
  }
}

export default Movies;