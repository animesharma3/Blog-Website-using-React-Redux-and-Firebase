import axios from "axios";

export const getPlaylistContent = async (playlistId) => {
  let pageToken = "";
  let videos = [];
  do {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${process.env.REACT_APP_YT_DATA_API_KEY}&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}`;
    const response = await axios.get(url);
    videos = videos.concat([...response["data"]["items"]]);
    try {
      pageToken = response["data"]["nextPageToken"];
    } catch (error) {
      return videos;
    }
  } while (pageToken && pageToken !== "");

  return videos;
};
