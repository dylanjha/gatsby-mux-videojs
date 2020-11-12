import React from 'react';
import { navigate } from 'gatsby';

const Two = () => {
  return (
    <>
      <h2>Page Two</h2>
      <button onClick={() => navigate('/')}>Go Back</button>
    </>
  );
}

export default Two;
