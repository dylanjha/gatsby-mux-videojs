/* globals videojs */

import React, { useEffect, useRef } from "react"

export default function Home() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    const playerInitTime = Date.now();

    playerRef.current = videojs(videoRef.current, {
      sources: [{ src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }],
      controls: true,
      muted: true
    });

    playerRef.current.mux({
      debug: true,
      data: {
        env_key: "ENV_KEY",
        player_name: "Video.js player",
        player_init_time: playerInitTime
      }
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    }
  }, []);

  return (
    <div>
      <video className="video-js" ref={videoRef} />
    </div>
  )
}
