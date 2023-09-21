import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './dashboard.css';
import GamesArray from './gamesArray/gamesArray';

function Dashboard() {
  // State population

  // Helper function

  // Component Elements (HTML)
  return (
    <div className='dashboard-component'>
      <h1>Dashboard Page Loser</h1>
      <GamesArray />
    </div>
  );
}

export default Dashboard;
