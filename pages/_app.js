import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Preload the sound so it's ready without delay
    const clickSound = new Audio('/click sound.mp3');
    clickSound.volume = 0.25;

    const playClickSound = (e) => {
      // Check if the clicked element or its parent is a button or an anchor tag
      const target = e.target.closest('a, button');

      if (target) {
        // Reset and play
        clickSound.currentTime = 0;
        clickSound.play().catch(err => {
          // It's normal for browsers to block audio if there wasn't enough user interaction yet
          console.log("Audio playback was prevented by the browser.", err);
        });
      }
    };

    document.addEventListener('click', playClickSound);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('click', playClickSound);
    };
  }, []);

  return <Component {...pageProps} />;
}
