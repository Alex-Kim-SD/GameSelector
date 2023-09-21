import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './gamesArray.css';
import GameCard from '../gameCard/gameCard';

function GamesArray() {
  // State population
  const games = [
    {
      title: 'League of Legends',
      url: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/league-of-legends/8/86/League_of_legends_logo_transparent.png?width=640',
      id: 1,
    },
    {
      title: 'CounterStrike',
      url: 'https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6',
      id: 2,
    },
    {
      title: 'World of Warcraft',
      url: 'https://pbs.twimg.com/media/DNuhY7sVQAAyysy?format=jpg&name=large',
      id: 3,
    },
    {
      title: 'Runescape',
      url: 'https://1000logos.net/wp-content/uploads/2021/04/RuneScape-Logo-2008.png',
      id: 4,
    },
    {
      title: `Baldur's Gate`,
      url: 'https://cdn.vox-cdn.com/thumbor/BuzvenEAD6O-rM_USHjl_NkYqJo=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16323948/vlcsnap_2019_06_06_12h14m26s043.png',
      id: 5,
    },
  ];

  // Helper function

  // Component Elements (HTML)
  return (
    <div className='gamesArray-component'>
      <h1>Games Array</h1>
      <div className='gamesArray-list'>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default GamesArray;
