import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Connection.css'

class Connection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            isClicked: false
        }
    }

    handleChange = (e) => {
        this.setState({ nickname: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ isClicked: true })
    }

    render() {
        if (this.state.isClicked) {
            return <Redirect push to={`/pseudo/${ this.state.nickname }` }/>
        } 
        return (
            <div className="connectionBox">
                <form className="connection" onSubmit={ this.handleSubmit }>
                    <input
                    value={ this.state.nickname }
                    placeholder="Pseudo"
                    type="text"
                    required
                    onChange={ this.handleChange }
                    />
                <button type="submit">Connect</button>
                </form>
            </div>
        );
    }
}

export default Connection;