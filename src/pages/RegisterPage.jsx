import React, { useState } from 'react'

import bcrypt from 'bcryptjs'

import { toast } from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import './RegisterPage.css';

import { register } from '../Services/userService';

function RegisterPage() {

  const [newUsername, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  let navigate = useNavigate()

  //Para guardar el usuario
  function handleUsername(e) {
    e.preventDefault();
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleConfirm(e) {
    e.preventDefault();
    setConfirm(e.target.value);
  }

  function handleRegister(e) {
    e.preventDefault();

    var hash = bcrypt.hashSync(password, 10);

    /*
    toast.promise(
      async () => await setTimeout(() => {}, 3000),
      {
        loading: 'Loading...',
        success: <b>R</b>,
        //error: <b>Could not save.</b>,
      }
    );
    */

    if ( password !== confirm ) {
      toast.error("Passwords don't match")
    } else {
        register(newUsername,hash).then(
          response =>
            {
              toast.success("OK");
              navigate("/", { replace : true })
            }
        )
        .catch(
          e =>
          {
            toast.error("Error");
          }
        )
    }
  }

  return (
    <div className='register-page-container'>
      <div className='register-form-container'>
        <form className='register-form' onSubmit={handleRegister}>
          <h1 className='register-title'>Account Sign in</h1>
          <div className='register-field'>
            <label>Username:</label>
            <input type="text" placeholder='Username' value={newUsername} onChange={handleUsername} />
          </div>
          <div className='register-field'>
            <label>Password:</label>
            <input type="password" placeholder='Password' value={password} onChange={handlePassword} />
          </div>
          <div className='register-field'>
            <label>Confirm Password:</label>
            <input type="password" placeholder='Password' value={confirm} onChange={handleConfirm} />
          </div>
          <input className="register-submit-btn" type="submit" value="Submit" />
          <Link to="/login" className="back-to-login">Back to Login</Link>
        </form>
      </div>
    </div>
  )
}


export default RegisterPage;