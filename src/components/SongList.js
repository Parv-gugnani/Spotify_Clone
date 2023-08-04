import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getSongs } from "../api";

function SongList({ onSelectSong }) {
  const [songs, SetSongs] = useState([]);

  useEffect(() => {
    getSongs().then((data) => SetSongs(data));
  }, []);

  return (
    <div className="song-list">
      <h2>Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => onSelectSong(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
