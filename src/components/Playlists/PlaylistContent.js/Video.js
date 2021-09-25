import { Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Video = ({ video }) => {
  return (
    <Col md={3} sm={3} xl={3} lg={3} xs={12}>
      <Card>
        <Card.Img src={video["thumbnails"]["high"]["url"]} />
        <input
          type="checkbox"
          className="form-control"
          style={{
            position: "absolute",
            right: "3px",
            top: "3px",
            width: "50px",
          }}
        />
        <Card.Text>{video.title.substring(0, 30)}...</Card.Text>
      </Card>
    </Col>
  );
};

export default Video;
