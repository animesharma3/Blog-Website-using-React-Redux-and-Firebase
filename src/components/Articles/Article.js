import { Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";
import {
  deleteArticle,
  likeArticle,
  unlikeArticle,
} from "../../redux/actions/article";
import { connect } from "react-redux";

const Article = ({
  article,
  likeArticle,
  unlikeArticle,
  auth,
  deleteArticle,
}) => {
  const handleLike = (e) => {
    if (!auth) {
      alert("Login First");
      return;
    }
    if (e.target.className.startsWith("fas")) {
      unlikeArticle(article?.id);
    } else {
      likeArticle(article?.id);
    }
  };
  return (
    <Card className="p-2 text-white bg-dark">
      <Row>
        <Col md={9}>
          <LinkContainer to={`/article/${article.id}`}>
            <h4>{article.title}</h4>
          </LinkContainer>
        </Col>
        <Col md={3}>
          <span>
            {auth === "BeaZH3loo5UYmQRGcTjszBSNNoo1" ||
            auth === "KzRhtS5speX4To1E8s3HoheoBfB2" ? (
              <>
                <LinkContainer to={`/edit/${article?.id}`}>
                  <Card.Link className="text-white">
                    <i className="fas fa-edit"></i>
                  </Card.Link>
                </LinkContainer>
                <LinkContainer
                  to="#"
                  // onClick={}
                >
                  <Card.Link
                    className="text-white"
                    onClick={() => deleteArticle(article?.id)}
                  >
                    <i className="fas fa-trash-alt"> </i>
                  </Card.Link>
                </LinkContainer>
              </>
            ) : null}
          </span>
        </Col>
      </Row>

      <hr className="m-1 border-white" />
      <LinkContainer to={`/article/${article.id}`}>
        <div>{article.raw.substring(0, 200)}</div>
      </LinkContainer>
      <hr className="m-1 border-white" />
      <Row>
        <Col md={8} sm={8} xs={8}>
          <span className="text-secondary">
            {moment(article?.createdAt.toDate()).format("LL")} ·{" "}
            {article?.views ? article?.views : 0} views
          </span>
        </Col>
        <Col md={4} sm={4} xs={4}>
          <i
            className={`${
              article?.likedBy
                ? article?.likedBy?.includes(auth)
                  ? "fas"
                  : "far"
                : "far"
            } fa-heart`}
            onClick={handleLike}
          >
            {" "}
            {article?.likedBy ? article.likedBy.length : 0}{" "}
          </i>{" "}
          <i className="far fa-comment"> 0 </i>
        </Col>
      </Row>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth.uid,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    likeArticle: (id) => dispatch(likeArticle(id)),
    unlikeArticle: (id) => dispatch(unlikeArticle(id)),
    deleteArticle: (id) => dispatch(deleteArticle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Article);
