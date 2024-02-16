// Sidebar.jsx

import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const likedSongs = useSelector((state) => state.songs.likedSongs);

  return (
    <aside className="col col-2">
      <nav className="navbar flex-column">
        <div className="liked-songs">
          <h3>Liked Songs</h3>
          <ul>
            {likedSongs.map((song) => (
              <li key={song.id}>{song.title}</li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
