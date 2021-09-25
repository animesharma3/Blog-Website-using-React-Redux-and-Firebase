import { getPlaylistContent } from "../api/videos";
import { GET_PLAYLIST_CONTENT } from "../constants/videos";

export const fetchVideosForPlaylist =
  (playlistId) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const videos = await getPlaylistContent(playlistId);
      dispatch({
        type: GET_PLAYLIST_CONTENT,
        payload: videos,
      });
    } catch (error) {
      console.log(error);
    }
  };
