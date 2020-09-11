import React, { Component } from 'react'
import './App.css'
import Form from './components/Form'

class App extends Component {
  render () {
    return (
      <div className='box'>
        <div className="messages">
          Message
        </div>
        <Form />
      </div>
    )
  }
}

export default App
