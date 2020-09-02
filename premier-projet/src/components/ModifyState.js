import React, { Component, Fragment } from 'react';
import Membre from './Membre';
import MembreChild from './MembreChild';
import Button from './Button';

const familyGang = {
    member1: {
        name: "Quentin",
        surname: "Ack",
        age: 25
    },
    member2: {
        name: "Laura",
        surname: "G",
        age: 24
    },
    member3: {
        name: "Onoot",
        surname: "Gang",
        age: 2
    }
}

class ModifyState extends Component {
  handleClick = (counter) => {
    const family = { ...this.state.familyGang }
    family.member1.age += counter;
    this.setState({ family })
  }; 

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
        <Membre name={familyGang.member1.name}
        surname={familyGang.member1.surname}
        age={familyGang.member1.age}
        />
        <Membre name={familyGang.member2.name}
        surname={familyGang.member2.surname}
        age={familyGang.member2.age}
        />
        <MembreChild name={familyGang.member3.name}
        surname={familyGang.member3.surname}
        age={familyGang.member3.age}>
          I'm so noot
        </MembreChild>
        <Button
        aging = {() => this.handleClick(3)} />
      </Fragment>
    )
  }
}

export default ModifyState;
