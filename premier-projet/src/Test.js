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
                <Membre name="Quentin" surname="Ackermann"/>
                <Membre name="Laura" surname="Garlatti"/>
                <Membre name="Onoot"/>
            </Fragment>
        )
    }
}

export default Test;
