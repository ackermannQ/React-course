import React, { Component } from 'react'
import './App.css'
import { sampleText } from './sampleText'
import marked from 'marked'


class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount() {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate() {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render() {
    return (
      <div className="container">
        <div className="row row-cols-1">
        <div className="row">
          <div className="markdown_container"
          dangerouslySetInnerHTML={ this.renderText(this.state.text) }/>
          </div>

        <div className="row">
          <div className="markdown_editor">
            <textarea onChange={this.handleChange}
            className="font-controller"
            rows="20"
            cols="100"
            value={this.state.text} />
          </div>
        </div>


        </div>
      </div>
    )
  }
}

export default App
