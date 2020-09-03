import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-sm-6">
            <textarea
            className="font-controller"
            rows="35">
            </textarea>
          </div>

          <div className="col-sm-6">
            <h1>Markdown Editor</h1>
          </div>

        </div>
      </div>
    )
  }
}

export default App
