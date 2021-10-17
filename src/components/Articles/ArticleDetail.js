import { useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { getArticle } from "../../redux/actions/article";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import moment from "moment";

const ArticleDetail = ({ article, getArticle, match }) => {
  useEffect(() => {
    console.log(article);
    getArticle(match.params.id);
  }, []);
  return (
    <div className="container">
      <header className="text-left font-weight-bold display-4">
        {article?.title}
      </header>
      <span className="text-secondary">
        {moment(article?.createdAt.toDate()).format("LL")} ·{" "}
        {article?.views ? article?.views : 0} views · 0 comments
      </span>
      <div>
        <FacebookShareButton
          url={`http://www.beyondtheboundries.com/articles/${match.params.id}`}
          quote={article?.title}
          hashtag="#beyondtheboundries"
        >
          <i className="m-1 fab fa-facebook" style={{ fontSize: "50px" }}></i>
        </FacebookShareButton>
        <TwitterShareButton
          url={`http://www.beyondtheboundries.com/articles/${match.params.id}`}
          quote={article?.title}
          hashtag="#beyondtheboundries"
        >
          <i className="m-1 fab fa-twitter" style={{ fontSize: "50px" }}></i>
        </TwitterShareButton>
        <LinkedinShareButton
          url={`http://www.beyondtheboundries.com/articles/${match.params.id}`}
          quote={article?.title}
          hashtag="#beyondtheboundries"
        >
          <i className="m-1 fab fa-linkedin" style={{ fontSize: "50px" }}></i>
        </LinkedinShareButton>
        <RedditShareButton
          url={`http://www.beyondtheboundries.com/articles/${match.params.id}`}
          quote={article?.title}
          hashtag="#beyondtheboundries"
        >
          <i className="m-1 fab fa-reddit" style={{ fontSize: "50px" }}></i>
        </RedditShareButton>
        <WhatsappShareButton
          url={`http://www.beyondtheboundries.com/articles/${match.params.id}`}
          quote={article?.title}
          hashtag="#beyondtheboundries"
        >
          <i className="m-1 fab fa-whatsapp" style={{ fontSize: "50px" }}></i>
        </WhatsappShareButton>
        <EmailShareButton
          url={`http://www.beyondtheboundries.com/articles/${match.params.id}`}
          quote={article?.title}
          hashtag="#beyondtheboundries"
        >
          <i className="m-1 fas fa-envelope" style={{ fontSize: "50px" }}></i>
        </EmailShareButton>
      </div>
      <hr />
      <section dangerouslySetInnerHTML={{ __html: article?.content }}></section>
    </div>
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
