import { useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getArticle } from "../../redux/actions/article";

const ArticleDetail = ({ article, getArticle, match }) => {
  useEffect(() => {
    getArticle(match.params.id);
  }, [article]);
  return (
    <section
      dangerouslySetInnerHTML={{ __html: article?.content }}
      className="container"
    ></section>
  );
};

const mapStateToProps = (state, props) => {
  const articles = state.firestore.data.articles;
  const article = articles ? articles[props.match.params.id] : null;
  return { article };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle: (id) => dispatch(getArticle(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "articles" }])
)(ArticleDetail);
