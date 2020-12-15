import React from 'react';
import { navigate } from 'gatsby';
import Player from '../components/player2';

const Two = () => {
  return (
    <>
      <h2>Page Two</h2>
      <Player />
      <button onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

export default Two;
