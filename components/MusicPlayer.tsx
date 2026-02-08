import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { BACKGROUND_MUSIC_URL } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(BACKGROUND_MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Soft volume

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Handle autoplay policies by playing on user interaction
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-rose-100 touch-manipulation"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-rose-500 animate-pulse-slow" />
      ) : (
        <div className="relative">
             <Music className="w-6 h-6 text-rose-400 group-hover:text-rose-600 transition-colors" />
             <VolumeX className="w-3 h-3 text-rose-400 absolute -bottom-1 -right-1" />
        </div>
      )}
    </button>
  );
};

export default MusicPlayer;