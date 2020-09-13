import React, { Component, createRef } from 'react'
import './App.css'

import Form from './components/Form'
import Message from './components/Message'

import base from './base'

class App extends Component {
  state = {
    messages: {},
    nickname: this.props.match.params.pseudo
  }

  messagesRef = createRef()
  
  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

addMessage = message => {
  const messages = { ...this.state.messages }
  messages[`message-${Date.now()}`] = message
  Object
  .keys(messages)
  .slice(0, -10)
  .forEach(key => {
    messages[key] = null
  })

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
    return (
      <div className='box'>
      <div>
       <div className="messages" ref={this.messagesRef}>
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
