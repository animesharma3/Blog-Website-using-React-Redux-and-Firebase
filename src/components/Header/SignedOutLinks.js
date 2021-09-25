import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/auth";

const SignedOutLinks = ({ auth, signOut }) => {
  return (
    <Navbar id="basic-navbar-nav" className="right">
      <Nav className="">
        <LinkContainer to="/leaderboard">
          <Nav.Link className="lead">LEADERBOARD</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
          <Nav.Link className="lead" onClick={() => signOut()}>
            SIGNOUT
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/you">
          <Nav.Link>
            <img
              src={auth.photoURL}
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginTop: "-7px",
              }}
            />
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLinks);
