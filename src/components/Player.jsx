// Player.jsx

import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.songs.currentSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      {currentSong && (
        <div className="row h-100">
          <div className="col-lg-10 offset-lg-2">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  {/* Aggiungi qui i controlli del player */}
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
                <div>
                  <h3>{currentSong.title}</h3>
                  <p>Artist: {currentSong.artist.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
