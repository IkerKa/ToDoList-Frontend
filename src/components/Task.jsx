import React, { useState } from 'react'

import './Task.css'

/**
 * Texto
 * Emoticono
 * Checked
 * 
 * {
 *    text : "Comprar lechuga",
 *    emoji : 👌,
 *    checked: false,
 *    ...
 *    children: ...
 * }
 */
function Task(props) {

  const [ checked, setChecked ] = useState(props.isChecked)

  function handleCheck(e) {
    e.preventDefault();

    const fun = (c) => { return !c }

    setChecked(c => !c);
  }

  return (
    <div className={`task-container ${checked ? "success" : ""}`} >
      <div className='emoji-box'>{props.emoji}</div>

      <div className='text-container'>
        <p className='text-box'>{props.text}</p>
      </div>
      <button onClick={handleCheck} className='check-box '>{ checked ? "✅" : "❌" }</button>
    </div>
  )
}

export default Task