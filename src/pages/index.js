import React, { useState } from "react";
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
      </div>
    </div>
  )
}
