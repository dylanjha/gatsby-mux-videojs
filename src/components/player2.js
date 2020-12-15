import React, { useEffect, useState, useRef } from "react"
import videojs from "video.js";
import "video.js/dist/video-js.css";

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
      autoplay: true,
      muted: true,
      controls: false,
      fluid: true,
      loop: true,
      aspectRatio: '16:9',
      preload: 'auto',
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
