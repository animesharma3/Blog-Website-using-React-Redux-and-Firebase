import { GET_ARTICLE } from "../constants/article";

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
