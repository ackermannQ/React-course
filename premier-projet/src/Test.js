import React, { Component, Fragment } from 'react';
import './Test.css';
import Membre from './components/Membre';

class Test extends Component {
    render() {
        return (
            <Fragment>
                <div className="Test">
                    <h1>Very nice title</h1>
                </div>
                <h2>And a nice subtitle</h2>
                <Membre/>
            </Fragment>
        )
    }
}

export default Test;
