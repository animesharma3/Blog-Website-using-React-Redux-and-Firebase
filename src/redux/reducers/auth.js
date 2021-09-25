import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../constants/auth";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      console.log("Signin Success");
      return state;
    case SIGNOUT_SUCCESS:
      console.log("Signout Success");
      return state;
    default:
      return state;
  }
};
