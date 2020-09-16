import React from 'react'
import './App.css'
import Countdown from './components/Countdown'
import Footer from './components/Footer'

function App() {
  return (
    <div className="root__container">
      <div id="title__container">
        <h1>Koh-Lanta Countdown</h1>
      </div>
      <div className="timer__container">
        <div className="timer">
          <Countdown/>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
