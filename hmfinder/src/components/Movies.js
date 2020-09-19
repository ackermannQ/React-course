import React, { Component } from 'react';
import MovieRow from './MovieRow';
import './Movies.css'
import $ from 'jquery'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = { rows: null }
    this.performSearch()
  }

  performSearch = () => {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=47e60775dec848a0846f06525377d027&query=Horror&include_adult=true"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched date successfully")
        const results = searchResults.results

        var movieRows = []
        results.forEach((movie) => {
          const movieRow = <MovieRow movie={ movie } />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })

  }

  render() {
    return (
      <div>
          { this.state.rows }
      </div>
    );
  }
}

export default Movies;