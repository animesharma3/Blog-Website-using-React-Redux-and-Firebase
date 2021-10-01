import React, { Component } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { setDraft, uploadImage } from "../../redux/actions/draft";
import { connect } from "react-redux";
import { convertToHTML } from "draft-convert";
import draftToHtml from "draftjs-to-html";
import { convertFromRaw } from "draft-js";

class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/upload");
      xhr.setRequestHeader("Authorization", "Client-ID 2e94807bfff9df6");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        console.log(error);
        reject(error);
      });
    });
  };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.setArticle({
      ...this.props.article,
      content: document.querySelector(".rdw-editor-main").innerHTML,
      raw: document.querySelector(".rdw-editor-main").innerText,
    });
    this.props.setDraft({
      ...this.props.article,
      content: document.querySelector(".rdw-editor-main").innerHTML,
      raw: document.querySelector(".rdw-editor-main").innerText,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor">
        <Editor
          editorState={this.props.draft.isDraft ? editorState : ""}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: this.uploadImageCallBack,
              alt: { present: true, mandatory: true },
            },
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    draft: state.draft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDraft: (draft) => dispatch(setDraft(draft)),
    uploadImage: async (file) => dispatch(uploadImage(file)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RichTextEditor);
