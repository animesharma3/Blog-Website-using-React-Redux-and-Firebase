import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";

import SignIn from "../Auth/SignIn";

const SignedInLinks = () => {
  return (
    <Navbar id="basic-navbar-nav" className="right">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <SignIn />
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default SignedInLinks;
