import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults, toggleLike } from "../components/Action";
import { fillMusicSection } from "./fillMusicSection";

const MusicSection = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fillMusicSection();
      dispatch(fetchSearchResults(data));
    };
    fetchData();
  }, [dispatch]);

  const handleLike = (song) => {
    dispatch(toggleLike(song.id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {searchResults.map((song, index) => (
                <div key={index} className="col text-center">
                  <img
                    className="img-fluid"
                    src={song.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track: "{song.title}"<br />
                    Artist: {song.artist.name}
                  </p>
                  <button onClick={() => handleLike(song)}>
                    {song.liked ? "Unlike" : "Like"}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Add similar sections for pop and hiphop */}
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
