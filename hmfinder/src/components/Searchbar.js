import React, { Component } from 'react';
import './Searchbar.css'

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input 
                placeholder="Search for blood"
                type="text"
                >

                </input>
            </div>
        );
    }
}

export default Searchbar;