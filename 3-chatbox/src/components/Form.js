import React, { Component } from 'react';

class Form extends Component {
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, nickname } = this.props

        const message = {
            nickname,
            message: this.state.message
        }

        addMessage(message)
        this.setState({ message: '' })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
        this.setState({ length: this.props.length })

    }

    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    handleKeyUp = event => {
        if (event.key === "Enter") {
            this.createMessage(event)
        }
    }

    render() {
        return (
            <form
            className="form"
            onSubmit={ this.handleSubmit }>
            <textarea
            value={ this.state.message }
            onChange={ this.handleChange }
            onKeyUp={ this.handleKeyUp }
            required
            maxLength={ this.props.length }/>
            <div className='info'>
                { this.state.length }
            </div>
            <button type="submit">
                Send
            </button>
            </form>               
        );
    }
}

export default Form;