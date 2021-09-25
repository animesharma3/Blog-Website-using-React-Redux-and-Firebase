import { GET_PLAYLISTS } from "../constants/playlists";

export default (state = [], action) => {
  switch (action.type) {
    case GET_PLAYLISTS:
      console.log("Playlists Fetched");
      return action.payload;
    default:
      return state;
  }
};
