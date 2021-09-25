import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import auth from "./auth";
import playlists from "./playlists";
import videos from "./videos";

export default combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth,
  playlists,
  videos,
});
