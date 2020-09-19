import React, { Component } from 'react';
import hmf_logo  from '../assets/hmf_logo.svg'

class Header extends Component {

  render() {
    return (
      <div>
       <table>
        <tbody>
          <tr>
            <td>
              <img src={ hmf_logo } className="App-logo" alt="" />
            </td>
            <td>
            <div className="header__title">
             Horror-movie
             Finder
            </div>
            </td>
          </tr>
        </tbody>

       </table>
      </div>
    );
  }
}

export default Header;