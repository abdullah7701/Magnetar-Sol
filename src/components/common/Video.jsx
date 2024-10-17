import React, { useState, useRef } from "react";
import PlayIcon from "resources/icons/play.svg";
import PauseIcon from "resources/icons/pause.svg";

const PlayButton = ({ visible = true, onClick }) => {
  return (
    <div
      className={`w-32 h-32 cursor-pointer flex justify-center items-center rounded-full bg-white hover:bg-secondary hover:bg-opacity-25 bg-opacity-25 backdrop-blur-sm ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-300 ease-out`}
      onClick={onClick}
    >
      <img
        src={visible ? PlayIcon : PauseIcon}
        alt=""
        className="w-10 h-10 select-none"
      />
    </div>
  );
};

const Video = ({ src, poster, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="w-full rounded-[32px] relative overflow-hidden">
        <div className="absolute z-10 w-full h-full flex justify-center items-center pointer-events-none">
          <PlayButton visible={!isPlaying} onClick={handlePlayPause} />
        </div>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-auto aspect-[16/8] object-fill"
          onClick={handlePlayPause}
        />
      </div>
    </div>
  );
};

export default Video;
