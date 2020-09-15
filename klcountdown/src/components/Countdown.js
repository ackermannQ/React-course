import React, { Component } from 'react'
import moment from 'moment'

const date = 20200925
console.log(date+7)
console.log(moment(date, "YYYYMMDD").fromNow())

class Countdown extends Component {
  render() {
    return (
      <div>
        99 Days : 99 Hours : 99 Min : 99 s
      </div>
    );
  }
}

export default Countdown;