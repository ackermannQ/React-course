import React, { Component } from 'react';
import './App.css';

const family = {
  membre1: {
    name: "Quentin",
    age: 25
    },
  membre2: {
    name: "Laura",
    age: 24
  },
  membre3: {
    name: "Onny",
    age: 2
  }
}

class App extends Component {
  state = {
    family
  }
  render() {
    const list = Object.keys(family)
    .map(membre => {
      console.log(family[membre].name)
      console.log(family[membre].age)
    })
    return (
      <div className="container">
      <h1>Family Gaaaaaaaaaang</h1>
      </div>
    )
  }
}

export default App
