import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './gameCard.css';

function GameCard({ game }) {
  // State population

  // Helper function

  // Component Elements (HTML)
  return (
    <div className='gameCard-component'>
      {/* <h1 className='gameCard-title'> {game.title} </h1> */}
      <img className='gameCard-img' src={game.url} alt='' />
    </div>
  );
}

export default GameCard;
