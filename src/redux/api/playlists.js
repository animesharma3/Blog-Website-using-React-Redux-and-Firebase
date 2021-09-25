import axios from "axios";

export const getPlaylists = async () => {
  let pageToken = "";
  let playlists = [];
  do {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=${process.env.REACT_APP_YT_DATA_API_KEY}&channelId=${process.env.REACT_APP_YT_CHANNEL_ID}&maxResults=50&pageToken=${pageToken}`;
    const response = await axios.get(url);
    playlists = playlists.concat([...response["data"]["items"]]);
    try {
      pageToken = response["data"]["nextPageToken"];
    } catch (error) {
      break;
    }
  } while (pageToken && pageToken !== "");
  return playlists;
};
