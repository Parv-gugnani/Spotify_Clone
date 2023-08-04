import React from "react";

function Player({ currentSong }) {
  return (
    <div className="player">
      <h2>Now Playing</h2>
      {currentSong ? (
        <div>
          <h3>{currentSong.title}</h3>
          <p>{currentSong.artist}</p>
          <audio controls>
            <source src={currentSong.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <p>No song selected.</p>
      )}
    </div>
  );
}

export default Player;
