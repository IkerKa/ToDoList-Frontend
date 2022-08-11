import React from 'react'

import Task from '../components/Task'

import './LandingPage.css'

//class LandingPage extends Component?
//render{ return () }
//import React, { Component } from "react"

const tasks = [
  {
    text: "comprar lechuga",
    emoji: "👌",
    isChecked: false
  },
  {
    text: "comprar lechuga comprar lechuga comprar lechuga comprar lechuga",
    emoji: "😁",
    isChecked: false
  },
  {
    text: "comprar pimientos",
    emoji: "👌",
    isChecked: true
  },
  {
    text: "cagar",
    emoji: "💩",
    isChecked: false
  },
]

function LandingPage() {
  return (
    <div className='lp-container'>
      {tasks.map((task, key) => <Task key={key} text={task.text} emoji={task.emoji} isChecked={task.isChecked} />)}
    </div>
  )
}

export default LandingPage