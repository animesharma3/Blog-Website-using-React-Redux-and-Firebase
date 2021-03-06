import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/auth";
import { useHistory, useLocation, withRouter } from "react-router";
import { publishDraft } from "../../redux/actions/draft";

const SignedOutLinks = ({ auth, signOut, draft, publishDraft }) => {
  const location = useLocation();
  const history = useHistory();
  const handlePublish = (e) => {
    if (e.target.innerText.trim() === "PUBLISH") {
      publishDraft(draft);
      history.push("/");
    }
  };
  return (
    <Navbar id="basic-navbar-nav" className="right">
      <Nav className="">
        {auth.uid === "BeaZH3loo5UYmQRGcTjszBSNNoo1" ||
        auth.uid === "KzRhtS5speX4To1E8s3HoheoBfB2" ? (
          <LinkContainer to="/write">
            <Button
              className="m-1 btn btn-primary h-100"
              onClick={handlePublish}
            >
              <i className="far fa-edit"></i>{" "}
              {location.pathname !== "/write" ? "WRITE" : "PUBLISH"}
            </Button>
          </LinkContainer>
        ) : null}
        <LinkContainer to="/">
          <Button
            className="m-1 btn btn-danger h-100"
            onClick={() => signOut()}
          >
            <i className="fas fa-walking"></i> WALKOUT
          </Button>
        </LinkContainer>
        <LinkContainer to="/you">
          <Nav.Link className="m-1">
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
    draft: state.draft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    publishDraft: (draft) => dispatch(publishDraft(draft)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignedOutLinks)
);
