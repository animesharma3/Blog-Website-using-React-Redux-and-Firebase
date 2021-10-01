import { SET_DRAFT, PUBLISH_DRAFT, UPLOAD_IMAGE } from "../constants/draft";

const initialState = {
  title: "",
  isDraft: false,
  content: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAFT:
      return action.payload;
    case PUBLISH_DRAFT:
      console.log("publish success");
      return initialState;
    case UPLOAD_IMAGE:
      console.log("image uploaded");
      return { ...state, image: action.url };
    default:
      return state;
  }
};
