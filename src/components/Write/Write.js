import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { setDraft } from "../../redux/actions/draft";
import RichTextEditor from "./RichTextEditor";

const Write = ({ setDraft, draft, edit }) => {
  const [article, setArticle] = useState({
    title: edit ? edit.title : "",
    isDraft: true,
    content: edit ? edit?.content : "",
  });

  useEffect(() => {
    setArticle({
      title: edit ? edit.title : "",
      isDraft: true,
      content: edit ? edit?.content : "",
    });
  }, [edit]);

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Type your title here..."
        value={draft.isDraft || edit ? article.title : draft.title}
        onChange={(e) => {
          setArticle({ ...article, title: e.target.value });
          setDraft({ ...article, title: e.target.value });
        }}
        style={{
          background: "transparent",
          border: "none",
        }}
      />
      {/* <textarea
        type="text"
        className="form-control"
        placeholder="Type your content here..."
        rows="200"
        style={{
          background: "transparent",
          border: "none",
        }}
      ></textarea> */}
      <RichTextEditor article={article} setArticle={setArticle} />
    </div>
  );
};
const mapStateToProps = (state, props) => {
  let edit = null;
  if (props.match.url.startsWith("/edit")) {
    const articleId = props.match?.url?.split("/")[2];
    const articles = state.firestore.data.articles;
    edit = articles ? articles[articleId] : null;
  }
  return {
    draft: state.draft,
    edit: edit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDraft: (draft) => dispatch(setDraft(draft)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "articles" }])
)(Write);
