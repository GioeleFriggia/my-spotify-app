import React, { useSelector } from "react-redux";

const CurrentSongDetails = () => {
  const currentSong = useSelector((state) => state.songs.currentSong);

  const handlePlay = () => {
    // Assicurati che `currentSong` non sia nullo
    if (currentSong) {
      dispatch({
        type: "PLAY_SONG",
        payload: currentSong,
      });
    }
  };

  return (
    <div>
      <h3>{currentSong?.title}</h3>
      <p>Artist: {currentSong?.artist?.name}</p>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default CurrentSongDetails;
