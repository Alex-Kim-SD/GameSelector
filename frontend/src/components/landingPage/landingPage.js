import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './landingPage.css';

function LandingPage() {
  // State population
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //Helper function
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //Component Elements (HTML)
  return (
    <div>
      <h1>Landing page</h1>
      <div className='landingPage-mainContainer'>
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
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
