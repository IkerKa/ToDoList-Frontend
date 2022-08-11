import React, { useState } from 'react'

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

import './LoginPage.css'

function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()

  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    var body = {
      username: username,
      password: password
    }

    //console.log(body)

    toast.success("Logged in successfully")

    navigate("/", { replace : true })
  }

  return (
    <div className='Account-page-container'>
      <div className='Account-form-container'>
        <form className='Account-form' onSubmit={handleSubmit}>
          <h1 className='Account-title'>Account Log in</h1>
          <div className='Account-field'>
            <label>Username:</label>
            <input type="text" placeholder='Username' value={username} onChange={handleUsername} />
          </div>
          <div className='Account-field'>
            <label>Password:</label>
            <input type="password" placeholder='Password' value={password} onChange={handlePassword} />
          </div>
          <input className="Account-submit-btn" type="submit" value="Submit" />
          <Link to='/register' className="Account-not-btn">I don't have an account yet</Link>
         
        </form>
      </div>
    </div>
  )
}

export default LoginPage