import React, { Component } from 'react';

class Connection extends Component {
    render() {
        return (
            <div className="connectionBox">
                <form className="connection">
                    <input
                    pseudo="Pseudo"
                    type="text"
                    required/>
                <button type="submit">Connect</button>
                </form>
            </div>
        );
    }
}

export default Connection;