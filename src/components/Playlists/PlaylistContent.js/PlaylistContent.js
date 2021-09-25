import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVideosForPlaylist } from "../../../redux/actions/videos";
import { useLocation } from "react-router";
import { Row } from "react-bootstrap";
import Video from "./Video";

const PlaylistContent = ({ videos, fetchVideosForPlaylist }) => {
  const location = useLocation();
  useEffect(() => {
    const playlistId = location.pathname.split("/")[2];
    fetchVideosForPlaylist(playlistId);
  }, [location]);

  return (
    <Row>
      {videos &&
        videos.map((video) => (
          <Video key={video.id} video={video["snippet"]} />
        ))}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideosForPlaylist: (playlistId) =>
      dispatch(fetchVideosForPlaylist(playlistId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContent);
