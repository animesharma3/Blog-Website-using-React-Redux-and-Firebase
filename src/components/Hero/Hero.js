import { connect } from "react-redux";
import { Row, Card } from "react-bootstrap";

const Hero = ({ profile }) => {
  const dps = [
    "https://firebasestorage.googleapis.com/v0/b/beyond-the-boundaries.appspot.com/o/display-photos%2FWhatsApp%20Image%202021-10-02%20at%2011.10.58%20PM%20(1).jpeg?alt=media&token=1dc6dd6a-8f74-4dd3-a795-dbb0324a3a97",
    "https://firebasestorage.googleapis.com/v0/b/beyond-the-boundaries.appspot.com/o/display-photos%2FWhatsApp%20Image%202021-10-02%20at%2011.10.58%20PM.jpeg?alt=media&token=90c637d8-2ed9-4f76-96b5-6c759d53c6fb",
    "https://firebasestorage.googleapis.com/v0/b/beyond-the-boundaries.appspot.com/o/display-photos%2FWhatsApp%20Image%202021-10-02%20at%2011.10.59%20PM%20(1).jpeg?alt=media&token=d586a912-380d-4b77-af73-9fc7a0caa34b",
    "https://firebasestorage.googleapis.com/v0/b/beyond-the-boundaries.appspot.com/o/display-photos%2FWhatsApp%20Image%202021-10-02%20at%2011.10.59%20PM%20(2).jpeg?alt=media&token=68800352-a29c-4a7b-856b-4bae346c86d5",
    "https://firebasestorage.googleapis.com/v0/b/beyond-the-boundaries.appspot.com/o/display-photos%2FWhatsApp%20Image%202021-10-02%20at%2011.10.59%20PM.jpeg?alt=media&token=695a86a4-276c-4c16-bb4f-80c45aecbf2a",
  ];
  return (
    <Card
      className="container p-3 text-center text-white align-items-center position-fixed bg-dark"
      style={{ width: "450px", height: "600px", overflowY: "scroll" }}
    >
      <div className="m-1 sticky-top border-bottom border-light w-100">
        <Card.Img
          src={dps[Math.floor(Math.random() * 5)]}
          alt="display-photo"
          style={{
            borderRadius: "50%",
            width: "100px",
          }}
        />
        <Card.Title>Monica Sharma</Card.Title>
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
          can.
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
