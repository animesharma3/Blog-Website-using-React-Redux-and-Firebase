import {
  GET_ARTICLE,
  LIKE_ARTICLE,
  UNLIKE_ARTICLE,
} from "../constants/article";

export const getArticle =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      let article = await firestore
        .collection("articles")
        .doc(id)
        .get()
        .then((snapshot) => snapshot.data());
      if (article.views) {
        article = { ...article, views: article.views + 1 };
      } else {
        article = { ...article, views: 1 };
      }
      await firestore.collection("articles").doc(id).update(article);
      dispatch({
        type: GET_ARTICLE,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const likeArticle =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const user = getState().firebase.auth.uid;
      const article = await firestore
        .collection("articles")
        .doc(id)
        .get()
        .then((snapshot) => snapshot.data());
      let likedBy = article.likedBy;
      if (!likedBy) {
        likedBy = [];
      }
      likedBy.push(user);
      likedBy = new Set(likedBy);
      likedBy = [...likedBy];
      await firestore
        .collection("articles")
        .doc(id)
        .update({ ...article, likedBy: likedBy });
      dispatch({
        type: LIKE_ARTICLE,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const unlikeArticle =
  (id) =>
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const firestore = getFirestore();
      const user = getState().firebase.auth.uid;
      const article = await firestore
        .collection("articles")
        .doc(id)
        .get()
        .then((snapshot) => snapshot.data());
      let likedBy = article.likedBy;
      likedBy = likedBy.filter((likes) => likes !== user);
      await firestore
        .collection("articles")
        .doc(id)
        .update({ ...article, likedBy: likedBy });
      dispatch({
        type: UNLIKE_ARTICLE,
      });
    } catch (error) {
      console.log(error);
    }
  };
