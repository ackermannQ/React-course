import React, { Component } from 'react';
import './Member.css'
import Button from './Button'


class Member extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      nameInput: "",
      isShow: false 
      }

    this.handleChange = this.handleChange.bind(this);
    this.clickedButton = this.clickedButton.bind(this);
  }

  handleChange(e)  {
    this.setState({ nameInput: e.target.value })
  }

  clickedButton () {
    if (this.state.isShow) {
      this.setState({ isShow: false })
    } else {
      this.setState({ isShow: true })
    }
  }

  
  render() {
    const isShown = this.state.isShow
    const name = this.state.nameInput
    return (
      <div className="root">
        <h2>{ isShown ? name : "" }</h2>
        <div className="input_name">
          <input onChange={ this.handleChange }/>
          <Button clicked={ this.clickedButton } name="Hit me!"/>
        </div>
      </div>
    )
  }
}

export default Member
