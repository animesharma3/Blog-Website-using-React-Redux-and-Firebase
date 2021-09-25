import { getPlaylists } from "../api/playlists";
import { GET_PLAYLISTS } from "../constants/playlists";

export const fetchPlaylists =
  () =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const playlists = await getPlaylists();
      dispatch({
        type: GET_PLAYLISTS,
        payload: playlists,
      });
    } catch (error) {
      console.log(error);
    }
  };
