import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

import LandingPage from './components/landingPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        {/* <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route> */}
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
