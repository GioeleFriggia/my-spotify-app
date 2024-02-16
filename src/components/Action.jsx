export const toggleLike = (songId) => {
  return {
    type: "TOGGLE_LIKE",
    payload: songId,
  };
};

export const playSong = (song) => {
  // Incolla qui il codice per la riproduzione della canzone (es: usando un player audio)
  // Assicurati di aggiornare lo stato con la canzone corrente

  // Esempio di utilizzo di un player audio fittizio
  const player = new AudioPlayer();
  player.setSource(song.url);
  player.play();

  return {
    type: "PLAY_SONG",
    payload: song,
  };
};
