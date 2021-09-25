import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../constants/auth";

export const signIn =
  () =>
  async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      const GoogleProvider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(GoogleProvider);
      dispatch({
        type: SIGNIN_SUCCESS,
      });
    } catch (error) {
      console.log("SignIn Error: ", error);
    }
  };

export const signOut =
  () =>
  async (dispatch, getState, { getFirebase }) => {
    try {
      const firebase = getFirebase();
      await firebase.auth().signOut();
      dispatch({
        type: SIGNOUT_SUCCESS,
      });
    } catch (error) {
      console.log("SignOut Error: ", error);
    }
  };
