import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import auth from "./auth";
import draft from "./draft";
import article from "./article";

export default combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth,
  draft,
  article,
});
