import { Card, Button } from "react-bootstrap";
import { signIn } from "../../redux/actions/auth";

import { connect } from "react-redux";

const SignIn = ({ signInWithGoogle }) => {
  return (
    <Button onClick={signInWithGoogle} className="btn btn-danger h-100">
      <i className="fab fa-google-plus-g"> </i> WALKIN
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(signIn()),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
