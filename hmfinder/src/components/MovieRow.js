import React, { Component } from 'react';

class MovieRow extends Component {
    render() {
        return (
        <table key={ this.props.movie.id }>
        <tbody>
          <tr>
            <td>
            <img alt="poster" src={ this.props.movie.posterSrc }/>
            </td>
            <td>
            <div className="movie__title">
              { this.props.movie.title }
            </div>
            <p>{ this.props.movie.overview }</p>
            </td>
          </tr>
        </tbody>
      </table>
        );
    }
}

export default MovieRow;