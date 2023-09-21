import React, { useState } from 'react';
import { Redirect, Link, useNavigate } from 'react-router-dom';
import './landingPage.css';

function LandingPage() {
  // State population
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Helper function
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = function () {
    navigate('/dashboard');
  };

  // Component Elements (HTML)
  return (
    <div className='landingPage-component'>
      <div className='landingPage-background'></div>

      <div className='landingPage-mainContainer'>
        <h1 className='landingPage--title'>
          GAME <br /> SELECTOR
        </h1>
        <div className='landingPage--loginBox--container'>
          <input
            className='landingPage--inputField--username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            className='landingPage--inputField--password'
            type='text'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button className='landingPage--login--btn' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
