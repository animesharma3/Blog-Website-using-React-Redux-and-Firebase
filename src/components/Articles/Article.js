import { Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";
const Article = ({ article }) => {
  return (
    <LinkContainer to={`/article/${article.id}`}>
      <Card className="p-2 text-white bg-dark">
        <h4>{article.title}</h4>
        <hr className="m-1" />
        <div>{article.raw.substring(0, 200)}</div>
        <hr className="m-1" />
        <Row>
          <Col md={8} sm={8} xs={8}>
            <span className="text-secondary">
              {moment(article?.createdAt.toDate()).format("LL")} ·{" "}
              {article?.views ? article?.views : 0} views
            </span>
          </Col>
          <Col md={4} sm={4} xs={4}>
            <i className="far fa-heart"> 0 </i>{" "}
            <i className="far fa-comment"> 0 </i>
          </Col>
        </Row>
      </Card>
    </LinkContainer>
  );
};

export default Article;
