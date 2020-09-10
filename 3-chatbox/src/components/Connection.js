import React, { Component } from 'react';
import './Connection.css' 

class Connection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: null,
            isEmpty: false
        }
    }

    handleChange = (e) => {
        if (e.target.value !== "") {
            this.setState({ nickname: e.target.value })
            this.setState({ isEmpty: true })
        } else {
            this.setState({ isEmpty: false })
        }
    }
    
    render() {
        return (
            <div className="connectionBox">
                <form className="connection">
                    <input
                    pseudo="Pseudo"
                    type="text"
                    required
                    onChange={ (e) => this.handleChange(e) }
                    />
                <button type="submit">Connect</button>
                <div className="checkConnection">
                    { !this.state.isEmpty ? "Input a pseudo!" : " " }
                    { this.state.nickname }
                </div>
                </form>
            </div>
        );
    }
}

export default Connection;