import {
  GET_ARTICLE,
  LIKE_ARTICLE,
  UNLIKE_ARTICLE,
} from "../constants/article";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return state;
    case LIKE_ARTICLE:
      console.log("like article");
      return state;
    case UNLIKE_ARTICLE:
      console.log("unlike article");
      return state;
    default:
      return state;
  }
};
