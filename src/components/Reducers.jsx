const initialState = {
  searchResults: [],
  likedSongs: [],
  currentSong: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload.data,
      };
    case "TOGGLE_LIKE":
      const likedSongIndex = state.likedSongs.findIndex(
        (song) => song.id === action.payload.id
      );
      if (likedSongIndex !== -1) {
        return {
          ...state,
          likedSongs: state.likedSongs.filter(
            (song) => song.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          likedSongs: [...state.likedSongs, action.payload],
        };
      }
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
