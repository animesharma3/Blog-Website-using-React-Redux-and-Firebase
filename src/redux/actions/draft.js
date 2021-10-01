import { PUBLISH_DRAFT, SET_DRAFT, UPLOAD_IMAGE } from "../constants/draft";
import { v4 as uuid } from "uuid";

export const setDraft =
  (draft) =>
  async (dispatch, getState, { getFirebase }) => {
    dispatch({
      type: SET_DRAFT,
      payload: draft,
    });
  };

export const publishDraft =
  (draft) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const article = { ...draft, createdAt: new Date() };
    await firestore.collection("articles").add(article);
    dispatch({
      type: PUBLISH_DRAFT,
    });
  };

export const uploadImage =
  (file) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firebase = getFirebase();
      const bucketName = "article-images";
      const id = uuid();
      let storageRef = firebase.storage().ref(`${bucketName}/${id}`);
      await storageRef.put(file);
      storageRef = firebase.storage().ref();
      storageRef
        .child(`${bucketName}/${id}`)
        .getDownloadURL()
        .then((url) => {
          dispatch({
            type: UPLOAD_IMAGE,
            url: url,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
