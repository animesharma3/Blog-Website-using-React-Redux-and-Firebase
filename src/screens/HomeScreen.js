import Articles from "../components/Articles/Articles";
import Hero from "../components/Hero/Hero";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Row>
      <Col sm={12} md={12} lg={7} xl={8}>
        <Articles />
      </Col>
      <Col sm={12} md={12} lg={5} xl={4}>
        <Hero />
      </Col>
    </Row>
  );
};

export default HomeScreen;
