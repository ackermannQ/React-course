import React, { Component } from 'react'
import './App.css'

import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
  state = {
    messages: {},
    nickname: this.props.match.params.pseudo
  }

addMessage = message => {
  const messages = { ...this.state.messages }
  messages[`message-${Date.now()}`] = message
  this.setState({ messages }) 
}

  render () {
    return (
      <div className='box'>
        <div className="messages">
          <Message />
          <Message />
          <Message />
        </div>
        <Form
        length={ 150 }
        nickname={ this.state.nickname }
        addMessage={ this.addMessage }
        />
      </div>
    )
  }
}

export default App
