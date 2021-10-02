import { connect } from "react-redux";
import { Row, Card } from "react-bootstrap";

const Hero = ({ profile }) => {
  return (
    <Card
      className="container p-3 text-center text-white align-items-center position-fixed bg-dark"
      style={{ width: "450px", height: "600px", overflowY: "scroll" }}
    >
      <div className="m-1 sticky-top border-bottom border-light w-100">
        <Card.Img
          src={profile.photoURL}
          alt=""
          style={{
            borderRadius: "50%",
            width: "100px",
          }}
        />
        <Card.Title>Animesh Sharma</Card.Title>
      </div>
      <Row style={{ overflowY: "scroll" }}>
        <Card.Text className="text-center">
          <strong>
            Monica is a hodophile, who is born to explore the world. She is a
            travel blogger at Beyond The Boundaries.
          </strong>
          <br />
          She lives in &ldquo;India&rdquo; &ndash; the most enchanting Southeast
          Asian country of the world. She loves a bit of adventureand is ready
          to try anything once. She is here to inspire her readers to travel to
          places a little out of their comfort zone, or at least to explore the
          usual destinations and enjoy better holidays. Expect festival guides,
          city guides, itineraries and in depth information, that shows real
          side of travelling. One life. One world. Explore it as much as you
          can!&nbsp
        </Card.Text>
      </Row>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Hero);
