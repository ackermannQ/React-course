import React, { Component } from 'react';
import hmf_logo  from '../assets/hmf_logo.svg'

class Header extends Component {
    

    render() {
        return (
            <div>
            <img src={hmf_logo} className="App-logo" alt="" />
            <h1>Horror-movie</h1>
            <span>Finder</span>
            </div>
        );
    }
}

export default Header;