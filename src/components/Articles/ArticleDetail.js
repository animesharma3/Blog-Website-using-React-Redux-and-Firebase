import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ArticleDetail = ({ article }) => {
  return (
    <section
      dangerouslySetInnerHTML={{ __html: article.content }}
      className="container"
    ></section>
  );
};

const mapStateToProps = (state, props) => {
  const articles = state.firestore.data.articles;
  const article = articles ? articles[props.match.params.id] : null;
  return { article };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "articles" }])
)(ArticleDetail);
