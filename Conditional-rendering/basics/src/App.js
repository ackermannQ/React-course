import React, { Component } from 'react';
import './App.css';


class App  extends Component {
  state = {
    text: "Hello",
    isShown: true,
    textToShow: "Hello,"
  }

  changeText = text => {
    if (this.state.text === "Hello") {
      this.setState({ text:"World!" })
    } else {
      this.setState({ text: "Hello" })
    }
  }

  showText = () => {
    if (this.state.isShown) {
      this.setState({textToShow: "World!"})
      this.setState({isShown: false})
    } else {
      this.setState({textToShow: "Hello"})
      this.setState({isShown: true})
    }
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.changeText}>{this.state.text}</button>
        <button onClick={this.showText}>CLICK HERE</button>
        
        <div>{this.state.textToShow}</div>
      </div>
    )
  }
}

export default App

