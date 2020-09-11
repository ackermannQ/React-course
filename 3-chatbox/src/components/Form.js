import React, { Component } from 'react';

class Form extends Component {
    state = {
        message: ''
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    handleChange = event => {
        const message = event.target.value
        this.setState({ message })
    }

    render() {
        return (
            <form
            className="form"
            onSubmit={ this.handleSubmit }>
            <textarea
            value={ this.state.message }
            onChange={ this.handleChange }
            required
            maxlenght='150'/>
            <div className='info'>
                140
            </div>
            <button type="submit">
                Send
            </button>
            </form>               
        );
    }
}

export default Form;