import { connect } from "react-redux";
import Playlist from "./Playlist";
import { Row } from "react-bootstrap";

const Playlists = ({ playlists }) => {
  return (
    <Row>
      {playlists &&
        playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            playlist={playlist["snippet"]}
            playlistId={playlist.id}
          />
        ))}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  };
};

export default connect(mapStateToProps)(Playlists);
