import React, { useState } from "react";
import { navigate } from 'gatsby';
import Player from '../components/player';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <div>
      <h1>Gatsby + Video.js + Mux</h1>
      {isMounted && <Player />}
      <div style={{marginTop: '40px'}}>
        <button onClick={() => setIsMounted(true)}>Mount</button>
        <button onClick={() => setIsMounted(false)}>Dispose</button>
        <button onClick={() => navigate('/two')}>Navigate to Page Two</button>
      </div>
    </div>
  )
}
