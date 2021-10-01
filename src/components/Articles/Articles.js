import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Masonry from "react-masonry-css";
import Article from "./Article";
import { LinkContainer } from "react-router-bootstrap";

const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};

const Articles = ({ articles }) => {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {articles?.map((article, i) => (
        <Article article={article} key={article.id} />
      ))}
    </Masonry>
  );
};

const mapStateToProps = (state) => {
  const articles = state.firestore.ordered.articles;
  return { articles };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "articles" }])
)(Articles);
