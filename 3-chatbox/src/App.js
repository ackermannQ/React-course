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
    const messages = Object
    .keys(this.state.messages)
    .map(key =>
      <Message
      key={ key }
      message={ this.state.messages[key].message } 
      nickname={ this.state.messages[key].nickname }>

      </Message>)
    console.log(messages)
    return (
      <div className='box'>
      <div>
       <div className="messages">
         <div className="message">
           { messages }
         </div>
          
        </div>
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
