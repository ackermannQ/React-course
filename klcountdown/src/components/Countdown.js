import React, { useEffect, useRef, useState } from "react";
import './Countdown.css'

function Countdown() {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const currentKLMonth = "09"
  let startKLDay = "18"
  let currentKLDay = startKLDay
  const year = new Date().getFullYear()
  // +new Date(`${year}-${currentKLMonth}-${currentKLDay}`).setHours(21, 34)
  
  const startTimer = (year, currentKLMonth, currentKLDay) => {
    const countdownDate = new Date(`${year}-${currentKLMonth}-${currentKLDay}`).setHours(21, 5)
    interval = setInterval(() => {

      const currentTime = new Date().getTime()
      const timeLeft = countdownDate - currentTime

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      const hours = Math.floor(timeLeft %  (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(timeLeft % (1000 * 60 * 60 ) / (1000 * 60))
      const seconds = Math.floor(timeLeft % (1000 * 60) / 1000)
      
      if (timeLeft < 0) {
        clearInterval()
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }  

    }, 1000)
  };

  useEffect(() => {
    startTimer(year, currentKLMonth, currentKLDay)
    changeTime()
    startTimer(year, currentKLMonth, currentKLDay)
    return () => {
      clearInterval(interval.current)
    }
  })

  const changeTime = () => {
    currentKLDay = +(startKLDay) + 7
    startKLDay = currentKLDay
    const numberOfDays = new Date(year, currentKLDay, 0).getDate();
    
    if (+(startKLDay) >= numberOfDays) {
      currentKLDay = (+(startKLDay) - numberOfDays).toString()
      currentKLMonth = (+(currentKLMonth) + 1).toString()
    }
  };

  return (
    <div className="timer">
      <p>{ timerDays }</p>
      Days :
      <p>{ timerHours }</p>
      Hours :
      <p>{ timerMinutes }</p>
      Minutes : 
      <p>{ timerSeconds }</p>
      Seconds
    {/* { timerComponents.length ? timerComponents : <span>Time's up! Until next KL episode </span> } */}
    </div>
  );
}

export default Countdown