import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Movies from './components/Movies';
import Searchbar from './components/Searchbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Searchbar />
      <div className="movie__container">
        <Movies />
      </div>
    </div>
  );
}

export default App;
