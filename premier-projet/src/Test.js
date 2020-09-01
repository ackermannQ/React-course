import React, { Component, Fragment } from 'react';
import './Test.css';
import Membre from './components/Membre';
import MembreChild from './components/MembreChild';

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
                <MembreChild name="Onoot">
                  I'm so noot
                </MembreChild>
            </Fragment>
        )
    }
}

export default Test;
