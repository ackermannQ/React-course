import React, { Component } from 'react';
import './App.css';


class App  extends Component {
  state = {
    text: "Hello",
    isShown: true,
    textToShow: "Hello,",
    isShow: false
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

  changeMe = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render() {
    const { isShow } = this.state
    let description = null
    if (isShow) {
      description = <strong>Imma dog !</strong>
    } else {
      description = <p></p>
    }
    return (
      <div className="container">
        <button onClick={this.changeText}>{this.state.text}</button>
        <button onClick={this.showText}>CLICK HERE</button>
        <div>{this.state.textToShow}</div>
        <div>{ description }</div>
        <button onClick={this.changeMe}>{isShow ? 'Hide' : "Show"}</button>
      </div>
    )
  }
}

export default App

