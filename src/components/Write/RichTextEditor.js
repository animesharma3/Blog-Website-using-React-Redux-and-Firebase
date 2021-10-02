import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { setDraft, uploadImage } from "../../redux/actions/draft";
import { connect } from "react-redux";
import firebase from "../../config/fbConfig";
import { v4 as uuid } from "uuid";

class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  uploadImageCallBack = (file) => {
    return new Promise(async (resolve, reject) => {
      try {
        const bucketName = "article-images";
        const id = uuid();
        let storageRef = firebase.storage().ref(`${bucketName}/${id}`);
        await storageRef.put(file);
        storageRef = firebase.storage().ref();
        storageRef
          .child(`${bucketName}/${id}`)
          .getDownloadURL()
          .then((url) => {
            resolve({
              data: {
                link: url,
              },
            });
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
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
              uploadEnabled: true,
              urlEnabled: true,
              previewImage: true,
              uploadCallback: this.uploadImageCallBack,
              alt: { present: true, mandatory: false },
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
