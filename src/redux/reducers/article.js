import { GET_ARTICLE } from "../constants/article";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return state;
    default:
      return state;
  }
};
