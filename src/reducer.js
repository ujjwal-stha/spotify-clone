export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  top_artists: null,
  spotify: null,
  playing: false,
  item: null,
  //   token:
  //     "BQCb1kjgL8mRTY-YYLoDsKCkpwO_9O8YlUprtHLMtgf7eWoDDvAlBBjTDVZYSGGQ3Gll8j2MyemcFS7QqDo6HGQYSADsJWvlUMOSXDXx4SJzAOa-tx7uJFzgdRRZg-EWkgnrtXA_7zYzxuPxAAFAD5f7mfySZefg1UA9w05WUJbWDNGOM8z3",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, payload
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
