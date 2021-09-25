import { GET_PLAYLIST_CONTENT } from "../constants/videos";

export default (videos = [], action) => {
  switch (action.type) {
    case GET_PLAYLIST_CONTENT:
      console.log("Playlist content fetched");
      return action.payload;
    default:
      return videos;
  }
};
