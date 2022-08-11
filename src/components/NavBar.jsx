import React from 'react'

import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar() {

  return (
    <div className='navbar-container'>
      <div className='navbar-title'>
        <Link to="/">
          <img className='navbar-logo' src={process.env.PUBLIC_URL + "chad.png"}></img>     
        </Link>
        <h1>ToDoList</h1>
      </div>

      <div className='navbar-btn-container'>
        <Link  to="login" className='navbar-button'>Account</Link>
        {/*<Link to="/login" className='navbar-button'>
          Unsain
  </Link>*/}
        {/*<Link to="/register" className='navbar-button'>
          Carrasquer.
  </Link>*/}
      </div>      
    </div>
  )
}

export default NavBar