import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import MembreChild from './MembreChild';

const familyGang = {
    member1: {
        name: "Quentin",
        surname: "Ack",
        age: "25"
    },
    member2: {
        name: "Laura",
        surname: "G",
        age: "24"
    },
    member3: {
        name: "Onoot",
        surname: "Gang",
        age: "2"
    }
}

class SateTest extends Component {
    handleClick = () => console.log('Aging')

    state = {
        familyGang
    }
    render() {
      const { family } = this.state;
      return (
        <Fragment>
          <div className="Test">
              <h1>Testing class</h1>
          </div>
          <h2>Checkout the members of the fam'</h2>
          <Membre name={familyGang.member1.name} surname="Ackermann"/>
          <Membre name={familyGang.member2.name} surname="G"/>
          <MembreChild name={familyGang.member3.name}>
            I'm so noot
          </MembreChild>
          <button onClick={this.handleClick}>
              Aging
          </button>
        </Fragment>
      )
  }
}

export default SateTest;
