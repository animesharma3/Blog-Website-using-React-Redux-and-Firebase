import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setDraft } from "../../redux/actions/draft";
import RichTextEditor from "./RichTextEditor";

const Write = ({ setDraft, draft }) => {
  const [article, setArticle] = useState({
    title: "",
    isDraft: true,
    content: "",
  });

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Type your title here..."
        value={draft.isDraft ? article.title : draft.title}
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
const mapStateToProps = (state) => {
  return {
    draft: state.draft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDraft: (draft) => dispatch(setDraft(draft)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Write);
